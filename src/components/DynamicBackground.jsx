import React, { useEffect, useRef } from 'react';

export default function DynamicBackground({ themeMode, currentDashboardMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Floating clouds & greenery particles
    const cloudCount = 5;
    const clouds = [];
    for (let i = 0; i < cloudCount; i++) {
      clouds.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.3),
        speed: Math.random() * 0.4 + 0.1,
        scale: Math.random() * 0.8 + 0.6
      });
    }

    const particleCount = 35;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: -Math.random() * 0.5 - 0.2, // upward floating leaves
        opacity: Math.random() * 0.6 + 0.2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.03
      });
    }

    let sunYOffset = 0;
    let riverWaveTime = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const time = Date.now() * 0.001;
      riverWaveTime += 0.03;

      const isProblem = currentDashboardMode === 'problem' || themeMode === 'dark';

      // 1. SKY GRADIENT (Sunrise / Daytime vs Smokey Night)
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.65);
      if (isProblem) {
        skyGrad.addColorStop(0, '#0a0e14');
        skyGrad.addColorStop(0.5, '#141a24');
        skyGrad.addColorStop(1, '#1e1418');
      } else {
        // Vibrant Sunrise Sky
        skyGrad.addColorStop(0, '#06291a');
        skyGrad.addColorStop(0.4, '#0f482d');
        skyGrad.addColorStop(0.75, '#196b42');
        skyGrad.addColorStop(1, '#2d8a57');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. SUNRISE SUN & RAYS (If bright eco mode)
      if (!isProblem) {
        const sunX = width * 0.5;
        const sunY = height * 0.28 + Math.sin(time * 0.3) * 10;

        // Glowing Sun Rays
        ctx.save();
        ctx.translate(sunX, sunY);
        ctx.rotate(time * 0.05);
        ctx.fillStyle = 'rgba(251, 191, 36, 0.04)';
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos((i * Math.PI) / 6) * width, Math.sin((i * Math.PI) / 6) * width);
          ctx.lineTo(Math.cos(((i + 0.5) * Math.PI) / 6) * width, Math.sin(((i + 0.5) * Math.PI) / 6) * width);
          ctx.fill();
        }
        ctx.restore();

        // Sun Disc Glow
        const sunGlow = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 220);
        sunGlow.addColorStop(0, 'rgba(253, 224, 71, 0.5)');
        sunGlow.addColorStop(0.3, 'rgba(52, 211, 153, 0.25)');
        sunGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(sunX, sunY, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. FLOATING CLOUDS
      clouds.forEach((c) => {
        c.x += c.speed;
        if (c.x > width + 100) c.x = -100;

        ctx.fillStyle = isProblem ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.09)';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 35 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 30 * c.scale, c.y - 10 * c.scale, 45 * c.scale, 0, Math.PI * 2);
        ctx.arc(c.x + 70 * c.scale, c.y, 35 * c.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. MOUNTAIN SILHOUETTES
      // Back Mountain Range
      ctx.fillStyle = isProblem ? '#0c1219' : '#083321';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.55);
      for (let x = 0; x <= width; x += 50) {
        const y = height * 0.45 + Math.sin(x * 0.005 + 1) * 70 + Math.cos(x * 0.002) * 40;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();

      // Front Mountain Range
      ctx.fillStyle = isProblem ? '#070b10' : '#042416';
      ctx.beginPath();
      ctx.moveTo(0, height * 0.65);
      for (let x = 0; x <= width; x += 40) {
        const y = height * 0.52 + Math.cos(x * 0.006) * 55 + Math.sin(x * 0.003) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();

      // 5. FLOWING RIVER STREAM
      const riverTopY = height * 0.72;
      ctx.fillStyle = isProblem ? '#0f172a' : '#064e3b';
      ctx.beginPath();
      ctx.moveTo(0, riverTopY);
      for (let x = 0; x <= width; x += 20) {
        const waveY = riverTopY + Math.sin(x * 0.01 + riverWaveTime) * 8;
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.fill();

      // River Water Currents / Highlights
      ctx.strokeStyle = isProblem ? 'rgba(239, 68, 68, 0.15)' : 'rgba(52, 211, 153, 0.25)';
      ctx.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const startY = riverTopY + 25 + i * 25;
        for (let x = 0; x <= width; x += 30) {
          const waveY = startY + Math.sin(x * 0.015 + riverWaveTime * 1.5 + i) * 6;
          if (x === 0) ctx.moveTo(x, waveY);
          else ctx.lineTo(x, waveY);
        }
        ctx.stroke();
      }

      // 6. SWAYING FOREGROUND TREES
      const treeCount = Math.floor(width / 120);
      ctx.fillStyle = isProblem ? '#04070a' : '#021a0f';
      for (let i = 0; i < treeCount; i++) {
        const treeX = i * 140 + 30;
        const treeBaseY = height * 0.76;
        const sway = Math.sin(time + i) * 5;

        // Tree Trunk
        ctx.fillRect(treeX - 4, treeBaseY - 40, 8, 40);

        // Tree Canopy
        ctx.beginPath();
        ctx.moveTo(treeX + sway, treeBaseY - 110);
        ctx.lineTo(treeX - 35, treeBaseY - 35);
        ctx.lineTo(treeX + 35, treeBaseY - 35);
        ctx.fill();
      }

      // 7. FLOATING LEAVES & PARTICLES
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y < -20) p.y = height + 20;
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        ctx.fillStyle = isProblem ? `rgba(239, 68, 68, ${p.opacity})` : `rgba(52, 211, 153, ${p.opacity})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.radius * 2, p.radius, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [themeMode, currentDashboardMode]);

  return <canvas ref={canvasRef} className="dynamic-background-canvas" />;
}
