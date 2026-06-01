import { motion } from "framer-motion";

interface WaterBottleSVGProps {
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  waterLevel?: number;
}

export function WaterBottleSVG({ size = "lg", animated = true, waterLevel = 72 }: WaterBottleSVGProps) {
  const sizes = { sm: 120, md: 180, lg: 260 };
  const w = sizes[size];
  const h = w * 3.2;

  return (
    <div style={{ width: w, height: h }} className="relative">
      <svg
        viewBox="0 0 100 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(200 70% 82%)" />
            <stop offset="30%" stopColor="hsl(195 85% 93%)" />
            <stop offset="70%" stopColor="hsl(195 90% 96%)" />
            <stop offset="100%" stopColor="hsl(200 70% 82%)" />
          </linearGradient>
          <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(195 85% 70%)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="hsl(195 85% 55%)" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="capGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(195 55% 72%)" />
            <stop offset="100%" stopColor="hsl(195 55% 58%)" />
          </linearGradient>
          <linearGradient id="neckGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(200 60% 84%)" />
            <stop offset="50%" stopColor="hsl(195 85% 94%)" />
            <stop offset="100%" stopColor="hsl(200 60% 84%)" />
          </linearGradient>
          <clipPath id="bottleClip">
            <path d="
              M 38 22
              L 38 36
              Q 22 42 20 58
              L 18 270
              Q 18 302 50 302
              Q 82 302 82 270
              L 80 58
              Q 78 42 62 36
              L 62 22
              Z
            " />
          </clipPath>
          <filter id="blur-soft">
            <feGaussianBlur stdDeviation="0.8" />
          </filter>
        </defs>

        {/* ── Cap ── */}
        <rect x="36" y="0" width="28" height="7" rx="3.5" fill="url(#capGrad)" />
        <rect x="34" y="6" width="32" height="5" rx="2" fill="hsl(195 55% 62%)" />
        <rect x="36" y="10" width="28" height="12" rx="3" fill="url(#capGrad)" />

        {/* ── Neck ── */}
        <rect x="38" y="22" width="24" height="14" fill="url(#neckGrad)" />
        <rect x="37" y="22" width="1.5" height="14" fill="white" fillOpacity="0.5" />

        {/* ── Shoulder transition ── */}
        <path
          d="M 38 36 Q 22 38 20 58 L 80 58 Q 78 38 62 36 Z"
          fill="url(#bodyGrad)"
        />

        {/* ── Main body ── */}
        <path
          d="M 20 58 L 18 270 Q 18 302 50 302 Q 82 302 82 270 L 80 58 Z"
          fill="url(#bodyGrad)"
        />

        {/* ── Water fill (animated) ── */}
        <g clipPath="url(#bottleClip)">
          {animated ? (
            <motion.rect
              x="0" width="100"
              fill="url(#waterGrad)"
              initial={{ y: 320, height: 0 }}
              animate={{ y: 320 - (waterLevel / 100) * 244 - 76, height: (waterLevel / 100) * 244 + 76 }}
              transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut" }}
            />
          ) : (
            <rect
              x="0"
              y={320 - (waterLevel / 100) * 244 - 76}
              width="100"
              height={(waterLevel / 100) * 244 + 76}
              fill="url(#waterGrad)"
            />
          )}

          {/* Wave on top of water */}
          {animated && (
            <motion.path
              d="M 0 0 Q 25 -8 50 0 Q 75 8 100 0 L 100 12 L 0 12 Z"
              fill="hsl(195 85% 75%)"
              fillOpacity="0.4"
              initial={{ y: 320 - (waterLevel / 100) * 244 - 76 }}
              animate={{
                y: [
                  320 - (waterLevel / 100) * 244 - 82,
                  320 - (waterLevel / 100) * 244 - 76,
                  320 - (waterLevel / 100) * 244 - 82,
                ],
              }}
              transition={{ duration: 2.5, delay: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </g>

        {/* ── Label ── */}
        <rect x="24" y="105" width="52" height="90" rx="6" fill="white" fillOpacity="0.75" />
        <rect x="26" y="107" width="48" height="86" rx="5" fill="none" stroke="hsl(195 60% 70%)" strokeWidth="0.8" />
        <text x="50" y="130" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fontWeight="700" letterSpacing="3" fill="hsl(195 70% 40%)">AQUA</text>
        <text x="50" y="143" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" letterSpacing="4" fill="hsl(195 70% 45%)">FRESH</text>
        <line x1="32" y1="150" x2="68" y2="150" stroke="hsl(195 60% 70%)" strokeWidth="0.5" />
        <text x="50" y="162" textAnchor="middle" fontFamily="sans-serif" fontSize="4.5" letterSpacing="1.5" fill="hsl(195 50% 55%)">PREMIUM WATER</text>
        <text x="50" y="172" textAnchor="middle" fontFamily="sans-serif" fontSize="3.8" fill="hsl(195 50% 65%)">500 ml  •  BIS Certified</text>
        <text x="50" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="3.5" fill="hsl(195 50% 65%)">pH 7.4  •  TDS &lt;50</text>

        {/* ── Grip ridges ── */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x="18"
            y={215 + i * 10}
            width="64"
            height="3"
            rx="1.5"
            fill="hsl(195 50% 75%)"
            fillOpacity="0.35"
          />
        ))}

        {/* ── Highlight reflection ── */}
        <path
          d="M 26 60 L 26 290"
          stroke="white"
          strokeWidth="3"
          strokeOpacity="0.55"
          strokeLinecap="round"
          filter="url(#blur-soft)"
        />
        <path
          d="M 32 65 L 32 260"
          stroke="white"
          strokeWidth="1.2"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />

        {/* ── Bottom edge of body ── */}
        <ellipse cx="50" cy="300" rx="32" ry="5" fill="hsl(195 55% 72%)" fillOpacity="0.4" />
      </svg>

      {/* Soft shadow beneath bottle */}
      <div
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-2xl"
        style={{ width: w * 0.7, height: 20, background: "hsl(195 85% 55% / 0.25)" }}
      />
    </div>
  );
}
