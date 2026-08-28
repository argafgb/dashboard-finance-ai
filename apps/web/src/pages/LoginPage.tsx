import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFinance } from '../context/FinanceContext';

export const LoginPage: React.FC = () => {
  const { login, register } = useFinance();
  const [username, setUsername] = useState('admin@nexus.finance');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState<'admin' | 'staff' | 'viewer'>('staff');

  const shaderCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const threeContainerRef = useRef<HTMLDivElement | null>(null);

  // 1. Background WebGL Shader Effect
  useEffect(() => {
    const canvas = shaderCanvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fs = `
      precision highp float;
      varying vec2 v_texCoord;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      void main() {
        vec2 uv = v_texCoord;
        float noise = sin(uv.x * 3.0 + u_time * 0.5) * cos(uv.y * 2.0 - u_time * 0.3);
        
        vec3 color1 = vec3(0.039, 0.039, 0.059); // #0a0a0f
        vec3 color2 = vec3(0.071, 0.071, 0.102); // #12121a
        vec3 accent = vec3(0.0, 0.839, 0.561) * 0.06; // Faint green glow
        
        vec3 finalColor = mix(color1, color2, uv.y + noise * 0.2);
        finalColor += accent * (1.0 - distance(uv, vec2(0.5)));
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const compileShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const pos = gl.getAttribLocation(prog, 'a_position');
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, 'u_time');
    const uRes = gl.getUniformLocation(prog, 'u_resolution');
    const uMouse = gl.getUniformLocation(prog, 'u_mouse');

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouse.x = event.clientX - rect.left;
        mouse.y = rect.height - (event.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const syncSize = () => {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const render = (t: number) => {
      syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (resizeObserver) resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(prog);
      gl.deleteShader(vertShader);
      gl.deleteShader(fragShader);
      gl.deleteBuffer(buf);
    };
  }, []);

  // 2. Three.js Floating 3D Coin Animation
  useEffect(() => {
    const container = threeContainerRef.current;
    if (!container) return;

    const width = container.clientWidth || 256;
    const height = container.clientHeight || 256;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Glowing geometric coin
    const geometry = new THREE.CylinderGeometry(2, 2, 0.4, 32);
    const material = new THREE.MeshPhongMaterial({
      color: 0x00d68f,
      shininess: 100,
      transparent: true,
      opacity: 0.85
    });
    const coin = new THREE.Mesh(geometry, material);
    coin.rotation.x = Math.PI / 2;
    scene.add(coin);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambientLight);

    camera.position.z = 7;

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      coin.rotation.z += 0.01;
      coin.rotation.y += 0.006;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 256;
      const h = container.clientHeight || 256;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    if (isRegistering) {
      const res = await register(name, username, password, role);
      setIsLoading(false);
      if (res.success) {
        setIsRegistering(false);
        // Clear fields
        setName('');
        setUsername('');
        setPassword('');
      }
    } else {
      const success = await login(username, password);
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative bg-surface-container-lowest overflow-hidden select-none">
      {/* Background Shader */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-45 pointer-events-none">
        <canvas ref={shaderCanvasRef} className="w-full h-full block" />
      </div>

      {/* Floating 3D Coin Animation */}
      <div className="absolute right-[10%] top-[20%] w-64 h-64 z-10 hidden md:block opacity-85 pointer-events-none">
        <div ref={threeContainerRef} className="w-full h-full" />
      </div>

      {/* Login Container */}
      <main className="relative z-20 w-full max-w-md px-margin-mobile md:px-0">
        {/* Logo Area */}
        <div className="text-center mb-xl">
          <h1 className="font-display-lg text-display-lg text-primary-fixed mb-xs flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-4xl text-primary">account_balance</span>
            Nexus Finance
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {isRegistering ? 'Register New Account' : 'Secure Enterprise Access'}
          </p>
        </div>

        {/* Glassmorphism Card */}
        <div className="glass-panel rounded-xl p-md md:p-lg shadow-2xl bg-[#12121a]/85 backdrop-blur-xl border border-[#2a2a3e]">
          <form className="space-y-sm" onSubmit={handleSubmit}>
            {isRegistering && (
              /* Full Name Field (Register Only) */
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="name">
                  NAMA LENGKAP
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none">
                    <span className="material-symbols-outlined text-outline-variant text-[20px]">badge</span>
                  </span>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                    required
                  />
                </div>
              </div>
            )}

            {/* Username/Email Field */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs" htmlFor="username">
                EMAIL / USERNAME
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none">
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">mail</span>
                </span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter email or username"
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block font-label-md text-label-md text-on-surface-variant mb-xs mt-sm" htmlFor="password">
                PASSWORD
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none">
                  <span className="material-symbols-outlined text-outline-variant text-[20px]">lock</span>
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-xl py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-xs text-outline-variant hover:text-primary transition-colors cursor-pointer"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            {isRegistering && (
              /* Role Dropdown Field (Register Only) */
              <div>
                <label className="block font-label-md text-label-md text-on-surface-variant mb-xs mt-sm" htmlFor="role">
                  ROLE (HAK AKSES)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-xs pointer-events-none">
                    <span className="material-symbols-outlined text-outline-variant text-[20px]">admin_panel_settings</span>
                  </span>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value as any)}
                    className="w-full bg-[#0a0a0f] border border-[#2a2a3e] rounded pl-xl pr-sm py-xs text-on-surface font-body-md transition-all outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 cursor-pointer"
                  >
                    <option value="staff">Staff Data Entry (Write Transactions only)</option>
                    <option value="viewer">Viewer / Eksekutif (Read-Only stats & reports)</option>
                    <option value="admin">Administrator (Full Access & Control)</option>
                  </select>
                </div>
              </div>
            )}

            {!isRegistering && (
              /* Options (Login Only) */
              <div className="flex items-center justify-between py-xs">
                <label className="flex items-center gap-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded bg-[#0a0a0f] border-[#2a2a3e] text-primary focus:ring-primary focus:ring-offset-[#12121a]"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Remember me</span>
                </label>
                <a
                  href="#forgot-password"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Silakan hubungi administrator IT untuk mereset akun Anda.');
                  }}
                  className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#4c9aff] text-[#0a0a0f] font-semibold text-[16px] py-sm rounded mt-md shadow-lg hover:shadow-[0_0_20px_rgba(76,154,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
              ) : (
                isRegistering ? 'Daftar Akun Baru' : 'Masuk'
              )}
            </button>
          </form>

          {/* Toggle View Link */}
          <div className="mt-md text-center">
            <button
              type="button"
              onClick={() => {
                setIsRegistering((prev) => !prev);
                setName('');
                // Default placeholder fields
                if (isRegistering) {
                  setUsername('admin@nexus.finance');
                  setPassword('admin123');
                } else {
                  setUsername('');
                  setPassword('');
                }
              }}
              className="font-body-sm text-body-sm text-primary hover:text-primary-fixed transition-colors cursor-pointer"
            >
              {isRegistering ? 'Sudah punya akun? Masuk di sini' : 'Belum punya akun? Buat akun di sini'}
            </button>
          </div>

          {/* Credential Hint & Watermark */}
          <div className="mt-lg text-center border-t border-[#2a2a3e] pt-sm space-y-2">
            {!isRegistering && (
              <p className="font-label-md text-label-md text-outline flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-[14px]">info</span>
                Demo Admin: admin@nexus.finance / admin123
              </p>
            )}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e0e13]/80 border border-[#2a2a3e] text-[11px] font-label-md text-on-surface-variant">
              <span className="text-secondary">👑</span>
              <span className="text-outline text-[10px] tracking-wider uppercase">DEVELOPED BY</span>
              <span className="font-bold text-primary tracking-widest">KING ARGA</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
