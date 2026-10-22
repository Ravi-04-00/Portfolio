import React from 'react';

/**
 * RKLogoMonogram
 * Custom luxury 3D monogram for Ravikumar (RK).
 * Features:
 * - Brushed metallic gold finish with realistic 3D extrusion depth
 * - Royal golden crown accent on top (as seen in identity reference)
 * - Subtle blue/cyan edge backlight and rim lighting
 * - Dual concentric rotating energy rings
 * - Shimmering specular highlight sweep
 * - Controlled, elegant rotation and tilt effects
 * - 100% crisp readability of R and K
 */
export default function RKLogoMonogram({
  size = 120,
  animated = true,
  glow = true,
  withCrown = true,
  className = '',
  style = {}
}) {
  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <div
      className={`rk-monogram-container ${className}`}
      style={{
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
        perspective: '800px',
        ...style
      }}
    >
      {/* Ambient Blue Backlight Aura */}
      {glow && (
        <div
          style={{
            position: 'absolute',
            inset: '10%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 210, 255, 0.35) 0%, rgba(47, 128, 255, 0.15) 50%, transparent 75%)',
            filter: 'blur(16px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />
      )}

      {/* SVG 3D Monogram & Controlled Energy Rings */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
          zIndex: 1
        }}
      >
        <defs>
          {/* Metallic Gold Primary Gradient */}
          <linearGradient id={`goldBase-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF4B8" />
            <stop offset="25%" stopColor="#FEDB6A" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#9A781D" />
            <stop offset="100%" stopColor="#E2C158" />
          </linearGradient>

          {/* Deep Bronze Extrusion Gradient */}
          <linearGradient id={`extrudeGrad-${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6E5014" />
            <stop offset="50%" stopColor="#4A3409" />
            <stop offset="100%" stopColor="#1E1402" />
          </linearGradient>

          {/* Cyan/Blue Rim Light Gradient */}
          <linearGradient id={`blueRim-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#2F80FF" />
          </linearGradient>

          {/* Specular Highlight Sheen Gradient */}
          <linearGradient id={`specular-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* Subtle Glow Filter */}
          <filter id={`goldGlowFilter-${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="
              1 0 0 0 0.83
              0 1 0 0 0.69
              0 0 1 0 0.22
              0 0 0 0.5 0" result="goldTint" />
            <feMerge>
              <feMergeNode in="goldTint" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip path for text shimmer sweep */}
          <clipPath id={`textClip-${uniqueId}`}>
            <text
              x="100"
              y={withCrown ? "134" : "126"}
              textAnchor="middle"
              fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
              fontWeight="900"
              fontSize="76"
              letterSpacing="2"
            >
              RK
            </text>
          </clipPath>
        </defs>

        {/* Outer Energy Ring (Gold, clockwise rotation) */}
        <g
          style={{
            transformOrigin: '100px 100px',
            animation: animated ? 'rotateOrbit 24s linear infinite' : 'none'
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke={`url(#goldBase-${uniqueId})`}
            strokeWidth="1.5"
            strokeDasharray="6 10"
            opacity="0.65"
          />
          {/* Compass Jewel Nodes */}
          <circle cx="100" cy="12" r="2.5" fill="#FEDB6A" />
          <circle cx="188" cy="100" r="2.5" fill="#FEDB6A" />
          <circle cx="100" cy="188" r="2.5" fill="#FEDB6A" />
          <circle cx="12" cy="100" r="2.5" fill="#FEDB6A" />
        </g>

        {/* Inner Counter-Rotating Ring (Cyan/Blue Rim) */}
        <g
          style={{
            transformOrigin: '100px 100px',
            animation: animated ? 'counterRotate 32s linear infinite' : 'none'
          }}
        >
          <circle
            cx="100"
            cy="100"
            r="82"
            stroke={`url(#blueRim-${uniqueId})`}
            strokeWidth="1.2"
            strokeDasharray="14 18"
            opacity="0.75"
          />
        </g>

        {/* Precision Thin Center Accent Ring */}
        <circle
          cx="100"
          cy="100"
          r="74"
          stroke="rgba(212, 175, 55, 0.25)"
          strokeWidth="1"
        />

        {/* Royal Gold Crown on Top */}
        {withCrown && (
          <g id="rk-crown-group" transform="translate(0, -6)">
            {/* Crown Drop Shadow */}
            <path
              d="M78 68 L73 50 L90 59 L100 44 L110 59 L127 50 L122 68 Z"
              fill="rgba(0, 0, 0, 0.6)"
              filter="blur(2px)"
              transform="translate(0, 3)"
            />
            {/* Crown 3D Extrusion */}
            <path
              d="M78 69 L73 51 L90 60 L100 45 L110 60 L127 51 L122 69 Z"
              fill="#5A400E"
            />
            {/* Crown Gold Body */}
            <path
              d="M78 67 L73 49 L90 58 L100 43 L110 58 L127 49 L122 67 Z"
              fill={`url(#goldBase-${uniqueId})`}
              stroke="#FFF8D6"
              strokeWidth="0.8"
            />
            {/* Crown Base Band */}
            <rect
              x="76"
              y="66"
              width="48"
              height="3.5"
              rx="1"
              fill="#FEDB6A"
              stroke="#5A400E"
              strokeWidth="0.5"
            />
            {/* Crown Jewels */}
            <circle cx="73" cy="48" r="2.2" fill="#00D2FF" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="100" cy="42" r="2.6" fill="#00D2FF" stroke="#FFFFFF" strokeWidth="0.5" />
            <circle cx="127" cy="48" r="2.2" fill="#00D2FF" stroke="#FFFFFF" strokeWidth="0.5" />
          </g>
        )}

        {/* ============================================================ */}
        {/* 3D EXTRUDED MONOGRAM TEXT LAYERS                             */}
        {/* ============================================================ */}
        <g id="rk-text-group">
          {/* Layer 0: Ambient Occlusion & Deep Drop Shadow */}
          <text
            x="100"
            y={withCrown ? "140" : "132"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="rgba(0, 0, 0, 0.75)"
            filter="blur(3px)"
          >
            RK
          </text>

          {/* Layer 1: Blue Backlight Glow on text edge */}
          <text
            x="100"
            y={withCrown ? "134" : "126"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="none"
            stroke={`url(#blueRim-${uniqueId})`}
            strokeWidth="6"
            strokeOpacity="0.55"
          >
            RK
          </text>

          {/* Layer 2: Deep 3D Extrusion Step 4 */}
          <text
            x="100"
            y={withCrown ? "138" : "130"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill={`url(#extrudeGrad-${uniqueId})`}
          >
            RK
          </text>

          {/* Layer 3: 3D Extrusion Step 3 */}
          <text
            x="100"
            y={withCrown ? "137" : "129"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="#5A400E"
          >
            RK
          </text>

          {/* Layer 4: 3D Extrusion Step 2 */}
          <text
            x="100"
            y={withCrown ? "136" : "128"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="#7B5814"
          >
            RK
          </text>

          {/* Layer 5: 3D Extrusion Step 1 */}
          <text
            x="100"
            y={withCrown ? "135" : "127"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="#9E741D"
          >
            RK
          </text>

          {/* Layer 6: Main Brushed Gold Face */}
          <text
            x="100"
            y={withCrown ? "134" : "126"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill={`url(#goldBase-${uniqueId})`}
            filter={`url(#goldGlowFilter-${uniqueId})`}
          >
            RK
          </text>

          {/* Layer 7: Razor-Sharp Gold Bevel Stroke */}
          <text
            x="100"
            y={withCrown ? "134" : "126"}
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontWeight="900"
            fontSize="76"
            letterSpacing="2"
            fill="none"
            stroke="#FFF8D6"
            strokeWidth="1.2"
            strokeOpacity="0.9"
          >
            RK
          </text>

          {/* Layer 8: Shimmer Specular Light Sweep (Clipped to Text) */}
          {animated && (
            <g clipPath={`url(#textClip-${uniqueId})`}>
              <rect
                x="-100"
                y="50"
                width="80"
                height="100"
                fill={`url(#specular-${uniqueId})`}
                transform="rotate(25 100 100)"
                style={{
                  animation: 'shimmerSweep 4.5s ease-in-out infinite'
                }}
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
