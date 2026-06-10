import { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  function handleMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 18}deg) translateZ(12px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = '';
  }

  return (
    <div
      ref={ref}
      className={`scene-3d card-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}
