// src/components/RainEffect.js
'use client';
import { useEffect, useRef } from 'react';

export default function RainEffect() {
  const raindropRef = useRef([]);

  useEffect(() => {
    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add new raindrops
      if (raindropRef.current.length < 100) {
        raindropRef.current.push(createRaindrop());
      }
      
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;
      
      raindropRef.current = raindropRef.current.filter((drop, index) => {
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}