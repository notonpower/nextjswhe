// src/components/RainEffect.js
'use client';
import { useEffect } from 'react';

export default function RainEffect() {
  useEffect(() => {
    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');
    
    function resize() {
      // モバイルでのピクセル比を考慮
      const dpr = window.devicePixelRatio || 1;
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;
      
      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      
      // CSSサイズを設定
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;
      
      // コンテキストのスケールを調整
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
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add new raindrops
      if (raindrops.length < 100) {
        raindrops.push(createRaindrop());
      }
      
      ctx.strokeStyle = 'rgba(174, 194, 224, 0.5)';
      ctx.lineWidth = 1;
      
      raindrops.forEach((drop, index) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x + 0.5, drop.y + drop.length);
        ctx.stroke();
        
        drop.y += drop.speed;
        
        if (drop.y > canvas.height) {
          raindrops.splice(index, 1);
        }
      });
      
      requestAnimationFrame(animate);
    }
    
    window.addEventListener('resize', resize);
    resize();
    animate();
    
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas
      id="rainCanvas"
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}