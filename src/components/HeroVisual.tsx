import React, { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
}

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stats, setStats] = useState({ nodes: 24, edges: 32 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const checkReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initialize structured grid / graph nodes
    const nodeCount = Math.min(Math.floor((width * height) / 9500), 32);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * (checkReducedMotion ? 0 : 0.4),
        vy: (Math.random() - 0.5) * (checkReducedMotion ? 0 : 0.4),
        radius: Math.random() * 1.5 + 1.2
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid reference lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      let activeEdges = 0;

      // Update & Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!checkReducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 10 || node.x > width - 10) node.vx *= -1;
          if (node.y < 10 || node.y > height - 10) node.vy *= -1;
        }

        // Mouse interaction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          const force = (120 - dist) / 120;
          node.x -= (dx / dist) * force * 1.5;
          node.y -= (dy / dist) * force * 1.5;
        }

        // Connect adjacent nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distBetween = Math.hypot(node.x - other.x, node.y - other.y);

          if (distBetween < 110) {
            activeEdges++;
            const alpha = 1 - distBetween / 110;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 229, 153, ${alpha * 0.22})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Connect to mouse pointer if close
        if (dist < 100) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 229, 153, ${(1 - dist / 100) * 0.45})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw node point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = dist < 120 ? '#00e599' : 'rgba(240, 243, 246, 0.7)';
        ctx.fill();
      }

      setStats({ nodes: nodes.length, edges: activeEdges });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '380px',
        border: '1px solid var(--border-subtle)',
        backgroundColor: 'var(--bg-secondary)',
        overflow: 'hidden'
      }}
      aria-label="Abstract interactive data structure and algorithmic network visual"
    >
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      
      {/* Editorial technical metadata overlay */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          color: 'var(--text-muted)',
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <span style={{ color: 'var(--accent-primary)', display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />
        <span>SYS // GRAPH_TOPOLOGY</span>
        <span>|</span>
        <span>VERTICES: {stats.nodes}</span>
        <span>EDGES: {stats.edges}</span>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '16px',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6875rem',
          color: 'var(--text-muted)',
          pointerEvents: 'none'
        }}
      >
        INTERACTIVE_TOPOLOGY_CANVAS
      </div>
    </div>
  );
};
