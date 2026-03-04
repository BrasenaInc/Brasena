"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { WaitlistForm } from "./waitlist-form";

interface HeroSectionProps {
  waitlistEnabled: boolean;
}

function MeshCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener("resize", resize);

    const vert = `attribute vec2 a_pos; void main(){gl_Position=vec4(a_pos,0.,1.);}`;

    const frag = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_res;

      float sdist(vec2 p, vec2 c){ return length(p - c); }

      void main(){
        vec2 uv = gl_FragCoord.xy / u_res;
        float t = u_time * 0.3;

        vec2 n0 = vec2(0.5 + 0.38*sin(t*0.71), 0.5 + 0.32*cos(t*0.59));
        vec2 n1 = vec2(0.5 + 0.35*cos(t*0.83), 0.5 + 0.40*sin(t*0.67));
        vec2 n2 = vec2(0.5 + 0.30*sin(t*1.10 + 1.0), 0.5 + 0.28*cos(t*0.90 + 2.0));
        vec2 n3 = vec2(0.5 + 0.42*cos(t*0.55 + 3.0), 0.5 + 0.22*sin(t*1.20 + 1.5));
        vec2 n4 = vec2(0.5 + 0.20*sin(t*1.40 + 4.0), 0.5 + 0.38*cos(t*0.75 + 0.5));

        float d0 = 1.0 / (0.001 + pow(sdist(uv,n0), 1.8));
        float d1 = 1.0 / (0.001 + pow(sdist(uv,n1), 1.8));
        float d2 = 1.0 / (0.001 + pow(sdist(uv,n2), 1.8));
        float d3 = 1.0 / (0.001 + pow(sdist(uv,n3), 1.8));
        float d4 = 1.0 / (0.001 + pow(sdist(uv,n4), 1.8));
        float total = d0+d1+d2+d3+d4;

        vec3 c0 = vec3(0.54, 0.69, 0.56);
        vec3 c1 = vec3(0.18, 0.45, 0.35);
        vec3 c2 = vec3(0.70, 0.85, 0.72);
        vec3 c3 = vec3(0.12, 0.30, 0.22);
        vec3 c4 = vec3(0.38, 0.60, 0.48);

        vec3 col = (c0*d0 + c1*d1 + c2*d2 + c3*d3 + c4*d4) / total;
        col = mix(vec3(0.047, 0.059, 0.047), col, 0.30);

        vec2 ctr = uv - 0.5;
        float vig = 1.0 - dot(ctr, ctr) * 2.2;
        col = mix(col * 0.4, col, clamp(vig, 0.0, 1.0));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_res");

    let rafId: number;
    const start = performance.now();
    const draw = () => {
      const t = (performance.now() - start) / 1000;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
}

export function HeroSection({ waitlistEnabled }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center
                 overflow-hidden bg-[#0C0F0C] py-32"
    >
      <MeshCanvas />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#8BAF8E 1px, transparent 1px), " +
            "linear-gradient(90deg, #8BAF8E 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,transparent_40%,#0C0F0C_100%)]" />

      {/* Glow orb — replaced by MeshCanvas */}
      {/* <motion.div
        className="absolute h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "#8BAF8E" }}
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      /> */}

      <motion.div
        className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          className="mb-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          <div className="h-px w-12 bg-sage/50" />
          <span className="text-xs font-medium tracking-[0.4em] text-sage/70 uppercase">
            Wholesale Platform · The Bronx, NY
          </span>
          <div className="h-px w-12 bg-sage/50" />
        </motion.div>

        {/* Heading line 1 */}
        <div className="mb-2 overflow-hidden">
          <motion.h1
            className="font-serif text-[clamp(2rem,5vw,5.5rem)] font-bold
                       leading-none tracking-tight text-white"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
          >
            Wholesale meat,
          </motion.h1>
        </div>

        {/* Heading line 2 */}
        <div className="mb-6 overflow-hidden">
          <motion.h2
            className="font-serif text-[clamp(2rem,5vw,5.5rem)] font-bold
                       leading-none tracking-tight text-sage"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
          >
            delivered fresh.
          </motion.h2>
        </div>

        {/* Subheading */}
        <motion.p
          className="mb-8 max-w-md text-base leading-relaxed text-white/40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          We bridge the gap between wholesale distributors and you —
          cutting out the middleman so restaurants, lounges, and families
          get premium cuts at real wholesale prices.
        </motion.p>

        {/* CTA / Waitlist */}
        {waitlistEnabled ? (
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <p className="mb-4 text-center text-xs uppercase tracking-[0.3em] text-white/40">
              Be first when we launch in the Bronx
            </p>
            <WaitlistForm theme="dark" />
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col items-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <motion.a
              href="/auth/sign-up"
              className="rounded-full bg-sage px-8 py-4 text-sm font-semibold
                         uppercase tracking-wider text-white transition-all
                         hover:bg-sage-dark"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Start ordering
            </motion.a>
            <motion.a
              href="/auth/login"
              className="rounded-full border border-white/20 px-8 py-4 text-sm
                         font-medium uppercase tracking-wider text-white/60
                         transition-all hover:border-white/50 hover:text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Sign in
            </motion.a>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/30">
          Scroll
        </span>
        <motion.div
          className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent"
          style={{ originY: "top" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
