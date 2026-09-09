import React, { useEffect, useRef } from 'react';

export const BackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
    }

    const particleCount = Math.min(Math.floor(width / 25), 45);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        maxOpacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.005;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = '#030014';
      ctx.fillRect(0, 0, width, height);

      const orb1X = width * 0.2 + Math.sin(time * 0.8) * 120;
      const orb1Y = height * 0.25 + Math.cos(time * 0.6) * 100;
      const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 0, orb1X, orb1Y, width * 0.45);
      grad1.addColorStop(0, 'rgba(126, 34, 206, 0.14)');
      grad1.addColorStop(0.5, 'rgba(59, 7, 100, 0.08)');
      grad1.addColorStop(1, 'rgba(3, 0, 20, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const orb2X = width * 0.8 + Math.cos(time * 0.7) * 140;
      const orb2Y = height * 0.7 + Math.sin(time * 0.9) * 120;
      const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 0, orb2X, orb2Y, width * 0.5);
      grad2.addColorStop(0, 'rgba(147, 51, 234, 0.12)');
      grad2.addColorStop(0.5, 'rgba(46, 16, 101, 0.06)');
      grad2.addColorStop(1, 'rgba(3, 0, 20, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      const mouseGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 350);
      mouseGrad.addColorStop(0, 'rgba(168, 85, 247, 0.07)');
      mouseGrad.addColorStop(1, 'rgba(3, 0, 20, 0)');
      ctx.fillStyle = mouseGrad;
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.opacity += p.pulseSpeed;
        if (p.opacity > p.maxOpacity || p.opacity < 0.05) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#c084fc';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
    </div>
  );
};
