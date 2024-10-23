// src/components/RainEffect.js
'use client';
import { useEffect, useRef } from 'react';

export default function RainEffect() {
  const raindropRef = useRef([]);

  useEffect(() => {
    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
      // スマホでのピクセル比を考慮
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      ctx.scale(dpr, dpr);
    }
    
    function createRaindrop() {
      return {
        x: Math.random() * canvas.width,
        y: -20,
        speed: 2 + Math.random() * 3,
        length: 10 + Math.random() * 20
      };
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      if (raindropRef.current.length < 100) {
        raindropRef.current.push(createRaindrop());
      }
      
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;
      
      raindropRef.current = raindropRef.current.filter((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 0.5, drop.y + drop.length);
        ctx.stroke();
        
        drop.y += drop.speed;
        
        return drop.y <= canvas.height;
      });
      
      requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resize);
    resize();
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
      raindropRef.current = [];
    };
  }, []);
  
  return (
    <canvas
      id="rainCanvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none bg-transparent"
      style={{ opacity: 0.4 }}
    />
  );
}