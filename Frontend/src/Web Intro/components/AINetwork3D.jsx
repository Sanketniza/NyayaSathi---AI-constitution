import React, { useEffect, useRef } from 'react';

const AINetwork3D = ({ className = "" }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Set canvas size
    canvas.width = rect.width * window.devicePixelRatio;
    canvas.height = rect.height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    // Initialize nodes
    const nodeCount = 12;
    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      z: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      vz: (Math.random() - 0.5) * 0.3,
      pulse: Math.random() * Math.PI * 2,
      type: i < 3 ? 'core' : 'node'
    }));

    // Initialize connections
    connectionsRef.current = [];
    for (let i = 0; i < nodesRef.current.length; i++) {
      for (let j = i + 1; j < nodesRef.current.length; j++) {
        if (Math.random() < 0.3) {
          connectionsRef.current.push({
            from: i,
            to: j,
            strength: Math.random(),
            pulse: Math.random() * Math.PI * 2
          });
        }
      }
    }

    const animate = (time) => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Update and draw connections
      connectionsRef.current.forEach(conn => {
        const nodeA = nodesRef.current[conn.from];
        const nodeB = nodesRef.current[conn.to];
        
        const distance = Math.sqrt(
          Math.pow(nodeA.x - nodeB.x, 2) + 
          Math.pow(nodeA.y - nodeB.y, 2)
        );

        if (distance < 150) {
          conn.pulse += 0.05;
          const alpha = (Math.sin(conn.pulse) * 0.3 + 0.4) * conn.strength * (1 - distance / 150);
          
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(nodeB.x, nodeB.y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Data flow animation
          const progress = (Math.sin(time * 0.002 + conn.pulse) + 1) / 2;
          const flowX = nodeA.x + (nodeB.x - nodeA.x) * progress;
          const flowY = nodeA.y + (nodeB.y - nodeA.y) * progress;
          
          ctx.beginPath();
          ctx.arc(flowX, flowY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 2})`;
          ctx.fill();
        }
      });

      // Update and draw nodes
      nodesRef.current.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;
        node.pulse += 0.03;

        // Boundary check
        if (node.x < 0 || node.x > rect.width) node.vx *= -1;
        if (node.y < 0 || node.y > rect.height) node.vy *= -1;
        if (node.z < 0 || node.z > 100) node.vz *= -1;

        // 3D effect
        const scale = 1 + node.z / 200;
        const size = node.type === 'core' ? 8 * scale : 4 * scale;
        const alpha = 0.6 + Math.sin(node.pulse) * 0.4;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        
        if (node.type === 'core') {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size);
          gradient.addColorStop(0, `rgba(168, 85, 247, ${alpha})`);
          gradient.addColorStop(1, `rgba(139, 92, 246, ${alpha * 0.3})`);
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = `rgba(139, 92, 246, ${alpha * 0.8})`;
        }
        
        ctx.fill();

        // Core node glow
        if (node.type === 'core') {
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${alpha * 0.1})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default AINetwork3D;