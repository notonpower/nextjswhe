// src/components/ScrollDownArrow.js
'use client';

export default function ScrollDownArrow() {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white cursor-pointer animate-bounce"
      onClick={handleClick}
    >
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
      >
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
      </svg>
    </div>
  );
}