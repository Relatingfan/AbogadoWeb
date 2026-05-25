import React, { useRef, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  disabled?: boolean;
  glowColor?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  href?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
}

const HoverButton: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  glowColor = '#4CAF50', // GC Global Green Hover color as default glow
  backgroundColor = '#1A3E1A', // GC Global Dark Green card bg
  textColor = '#F2EFE9', // GC Global Light warm text
  hoverTextColor = '#C9A84C', // GC Global Gold hover text
  href,
  id,
  type
}) => {
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setGlowPosition({ x, y });
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const commonProps = {
    ref: buttonRef as any,
    id,
    onClick: onClick as any,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    className: `
      relative inline-flex items-center justify-center 
      cursor-pointer overflow-hidden transition-colors duration-300 
      text-sm uppercase tracking-[0.2em] font-medium rounded-lg z-10 font-dmsans
      ${/p[xytrbl]?-/.test(className) ? '' : 'px-8 py-4'}
      ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
      ${className}
    `,
    style: {
      backgroundColor: backgroundColor,
      color: isHovered ? hoverTextColor : textColor,
    }
  };

  // Glow effect div
  const glowEffect = (
    <div
      className={`
        absolute w-[200px] h-[200px] rounded-full opacity-50 pointer-events-none 
        transition-transform duration-300 ease-out -translate-x-1/2 -translate-y-1/2
        ${isHovered ? 'scale-150' : 'scale-0'}
      `}
      style={{
        left: `${glowPosition.x}px`,
        top: `${glowPosition.y}px`,
        background: `radial-gradient(circle, ${glowColor} 10%, transparent 70%)`,
        zIndex: 0,
      }}
    />
  );

  if (href) {
    return (
      <a href={href} {...commonProps}>
        {glowEffect}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button disabled={disabled} type={type || 'button'} {...commonProps}>
      {glowEffect}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export { HoverButton };
