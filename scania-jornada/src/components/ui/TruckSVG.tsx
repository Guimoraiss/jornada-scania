interface TruckSVGProps {
  className?: string;
  size?: number;
  color?: string;
  animated?: boolean;
}

export default function TruckSVG({ className = '', size = 80, color = '#FFC000', animated = false }: TruckSVGProps) {
  return (
    <svg
      width={size}
      height={size * 0.55}
      viewBox="0 0 160 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animated ? 'animate-bounce-subtle' : ''} ${className}`}
      aria-hidden="true"
    >
      {/* Trailer body */}
      <rect x="0" y="20" width="95" height="48" rx="3" fill={color} opacity="0.9" />
      {/* Trailer detail lines */}
      <line x1="20" y1="20" x2="20" y2="68" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="40" y1="20" x2="40" y2="68" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="68" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      <line x1="80" y1="20" x2="80" y2="68" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
      {/* Trailer top stripe */}
      <rect x="0" y="20" width="95" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
      {/* Scania label on trailer */}
      <rect x="8" y="38" width="56" height="16" rx="2" fill="rgba(4,30,66,0.6)" />
      <text x="36" y="50" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial, sans-serif" letterSpacing="1">SCANIA</text>

      {/* Cab */}
      <rect x="95" y="28" width="50" height="40" rx="4" fill="#041E42" />
      {/* Cab roof */}
      <path d="M95 28 L108 12 L140 12 L145 28 Z" fill="#041E42" />
      {/* Cab top spoiler */}
      <rect x="107" y="8" width="35" height="5" rx="2" fill="#0D3B7A" />

      {/* Windshield */}
      <path d="M108 14 L120 26 L143 26 L143 14 Z" fill="#7EB8F7" opacity="0.8" />
      {/* Window tint */}
      <path d="M108 14 L120 26 L143 26 L143 14 Z" fill="rgba(30,60,120,0.3)" />

      {/* Side window */}
      <rect x="97" y="30" width="22" height="16" rx="2" fill="#7EB8F7" opacity="0.7" />

      {/* Grille */}
      <rect x="140" y="40" width="16" height="20" rx="2" fill="#0D3B7A" />
      <line x1="140" y1="44" x2="156" y2="44" stroke="#1A5FAD" strokeWidth="1" />
      <line x1="140" y1="48" x2="156" y2="48" stroke="#1A5FAD" strokeWidth="1" />
      <line x1="140" y1="52" x2="156" y2="52" stroke="#1A5FAD" strokeWidth="1" />
      <line x1="140" y1="56" x2="156" y2="56" stroke="#1A5FAD" strokeWidth="1" />
      <line x1="147" y1="40" x2="147" y2="60" stroke="#1A5FAD" strokeWidth="1" />

      {/* Headlights */}
      <rect x="155" y="38" width="5" height="8" rx="1" fill="#FFC000" />
      <rect x="155" y="50" width="5" height="6" rx="1" fill="rgba(255,192,0,0.4)" />

      {/* Scania emblem on cab */}
      <circle cx="148" cy="35" r="5" fill={color} />
      <text x="148" y="38" textAnchor="middle" fill="#041E42" fontSize="5" fontWeight="bold" fontFamily="Arial">S</text>

      {/* Step / fuel tank */}
      <rect x="95" y="60" width="12" height="8" rx="1" fill="#0D3B7A" />
      <rect x="109" y="58" width="20" height="6" rx="2" fill="#0D3B7A" />

      {/* Wheels */}
      {/* Front wheel */}
      <circle cx="138" cy="72" r="10" fill="#1a1a1a" />
      <circle cx="138" cy="72" r="7" fill="#333" />
      <circle cx="138" cy="72" r="3" fill="#555" />
      <line x1="138" y1="65" x2="138" y2="79" stroke="#555" strokeWidth="1.5" />
      <line x1="131" y1="72" x2="145" y2="72" stroke="#555" strokeWidth="1.5" />

      {/* Rear wheel pair */}
      <circle cx="28" cy="72" r="10" fill="#1a1a1a" />
      <circle cx="28" cy="72" r="7" fill="#333" />
      <circle cx="28" cy="72" r="3" fill="#555" />
      <line x1="28" y1="65" x2="28" y2="79" stroke="#555" strokeWidth="1.5" />
      <line x1="21" y1="72" x2="35" y2="72" stroke="#555" strokeWidth="1.5" />

      <circle cx="50" cy="72" r="10" fill="#1a1a1a" />
      <circle cx="50" cy="72" r="7" fill="#333" />
      <circle cx="50" cy="72" r="3" fill="#555" />
      <line x1="50" y1="65" x2="50" y2="79" stroke="#555" strokeWidth="1.5" />
      <line x1="43" y1="72" x2="57" y2="72" stroke="#555" strokeWidth="1.5" />

      {/* Exhaust */}
      <rect x="120" y="5" width="4" height="10" rx="2" fill="#0D3B7A" />
      <ellipse cx="122" cy="5" rx="3" ry="2" fill="rgba(180,180,180,0.3)" />
    </svg>
  );
}
