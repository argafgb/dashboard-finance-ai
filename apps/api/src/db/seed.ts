import { db, pool } from './index.js';
import { categories, transactions, notifications } from './schema.js';
import { auth } from '../lib/auth.js';

/**
 * Seed script that creates a demo user and populates initial categories,
 * transactions, and notifications matching the frontend's seed data.
 *
 * Usage: npm run db:seed
 */
async function seed() {
  console.log('🌱 Starting seed...\n');

  // ─── 1. Create demo user via Better Auth ───────────────────────────
  console.log('→ Creating demo user (admin@nexus.finance / admin123)...');

  let demoUser: { id: string } | null = null;

  try {
    const signUpResult = await auth.api.signUpEmail({
      body: {
        name: 'Admin Nexus',
        email: 'admin@nexus.finance',
        password: 'admin123',
        // @ts-ignore
        role: 'admin',
      },
    });
    demoUser = signUpResult.user;
    console.log('  ✓ User created:', demoUser.id);
  } catch (error: any) {
    // User might already exist
    console.log('  ⚠ User may already exist, looking up...');
    // We'll try to find an existing user by email
    const existingUsers = await db.query.user.findFirst({
      where: (u, { eq }) => eq(u.email, 'admin@nexus.finance'),
    });
    if (existingUsers) {
      demoUser = { id: existingUsers.id };
      console.log('  ✓ Found existing user:', demoUser.id);
    } else {
      console.error('  ✗ Failed to create or find user:', error);
      process.exit(1);
    }
  }

  const userId = demoUser.id;

  // ─── 2. Seed categories ────────────────────────────────────────────
  console.log('\n→ Seeding categories...');

  const categoryData = [
    { name: 'Pendapatan Jasa', type: 'income' as const, icon: 'payments', color: '#44f3a9' },
    { name: 'Investasi', type: 'income' as const, icon: 'monitoring', color: '#54feb3' },
    { name: 'Pencairan Dana', type: 'income' as const, icon: 'account_balance', color: '#a7c8ff' },
    { name: 'Pendapatan Lain-lain', type: 'income' as const, icon: 'savings', color: '#27e199' },
    { name: 'Infrastruktur', type: 'expense' as const, icon: 'shopping_cart', color: '#ffb3b0' },
    { name: 'Operasional', type: 'expense' as const, icon: 'chair', color: '#fc6969' },
    { name: 'Gaji Karyawan', type: 'expense' as const, icon: 'badge', color: '#ffdad8' },
    { name: 'Marketing', type: 'expense' as const, icon: 'campaign', color: '#ffb4ab' },
  ];

  const insertedCategories = await db
    .insert(categories)
    .values(categoryData.map((c) => ({ ...c, userId })))
    .onConflictDoNothing()
    .returning();

  console.log(`  ✓ Inserted ${insertedCategories.length} categories`);

  // Build a name→id map for transaction seeding
  const allCats = await db.query.categories.findMany({
    where: (c, { eq }) => eq(c.userId, userId),
  });
  const catMap = new Map(allCats.map((c) => [c.name, c.id]));

  // ─── 3. Seed transactions ─────────────────────────────────────────
  console.log('\n→ Seeding transactions...');

  const transactionData = [
    { description: 'Client Payment - TechCorp', categoryName: 'Pendapatan Jasa', date: '2023-08-28T14:30:00', amount: 15000000, type: 'income' as const, icon: 'payments' },
    { description: 'AWS Hosting Bill', categoryName: 'Infrastruktur', date: '2023-08-27T09:15:00', amount: 3200000, type: 'expense' as const, icon: 'shopping_cart' },
    { description: 'Dividend Yield - Stock Port', categoryName: 'Investasi', date: '2023-08-25T11:00:00', amount: 2450000, type: 'income' as const, icon: 'monitoring' },
    { description: 'Office Supplies Restock', categoryName: 'Operasional', date: '2023-08-22T16:45:00', amount: 850000, type: 'expense' as const, icon: 'chair' },
    { description: 'Consulting Fee - StartupX', categoryName: 'Pendapatan Jasa', date: '2023-08-20T10:20:00', amount: 8500000, type: 'income' as const, icon: 'payments' },
    { description: 'Enterprise Retainer - CloudGlobal', categoryName: 'Pendapatan Jasa', date: '2023-08-16T15:00:00', amount: 28500000, type: 'income' as const, icon: 'payments' },
    { description: 'Cloudflare & DNS Security Suite', categoryName: 'Infrastruktur', date: '2023-08-14T11:30:00', amount: 5250000, type: 'expense' as const, icon: 'shopping_cart' },
    { description: 'Performance Marketing Campaign Q3', categoryName: 'Marketing', date: '2023-08-10T13:45:00', amount: 18000000, type: 'expense' as const, icon: 'campaign' },
    { description: 'Mobile App Custom Development Milestone 2', categoryName: 'Pendapatan Jasa', date: '2023-08-05T09:00:00', amount: 18050000, type: 'income' as const, icon: 'payments' },
  ];

  const txValues = transactionData.map((tx) => ({
    userId,
    categoryId: catMap.get(tx.categoryName)!,
    date: new Date(tx.date),
    type: tx.type,
    amount: tx.amount,
    description: tx.description,
    icon: tx.icon,
  }));

  const insertedTx = await db
    .insert(transactions)
    .values(txValues)
    .returning();

  console.log(`  ✓ Inserted ${insertedTx.length} transactions`);

  // ─── 4. Seed notifications ─────────────────────────────────────────
  console.log('\n→ Seeding notifications...');

  const notificationData = [
    { title: 'Pembayaran Diterima', message: 'Client Payment dari TechCorp sebesar Rp 15.000.000 telah masuk ke rekening operasional.', type: 'success' as const, isRead: false },
    { title: 'Tagihan Server AWS', message: 'Pembayaran otomatis tagihan hosting AWS sebesar Rp 3.200.000 berhasil diproses.', type: 'info' as const, isRead: false },
    { title: 'Pertumbuhan Arus Kas', message: 'Saldo bersih bulan ini meningkat +12.5% dibanding bulan sebelumnya.', type: 'info' as const, isRead: true },
  ];

  const insertedNotifs = await db
    .insert(notifications)
    .values(notificationData.map((n) => ({ ...n, userId })))
    .returning();

  console.log(`  ✓ Inserted ${insertedNotifs.length} notifications`);

  // ─── Done ───────────────────────────────────────────────────────────
  console.log('\n✅ Seed completed successfully!');
  console.log('   Demo credentials: admin@nexus.finance / admin123\n');

  await pool.end();
  process.exit(0);
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
