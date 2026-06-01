import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { WaterBottleSVG } from "./WaterBottleSVG";

// ── WebGL availability check ──────────────────────────────────────────────
function checkWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

// ── Bottle profile (LatheGeometry: [radius, y]) ───────────────────────────
function bottleProfile(): THREE.Vector2[] {
  return [
    new THREE.Vector2(0.0,  -1.00),
    new THREE.Vector2(0.30, -0.98),
    new THREE.Vector2(0.46, -0.90),
    new THREE.Vector2(0.50, -0.80),
    new THREE.Vector2(0.50,  0.52),
    new THREE.Vector2(0.48,  0.60),
    new THREE.Vector2(0.46,  0.63),
    new THREE.Vector2(0.48,  0.66),
    new THREE.Vector2(0.50,  0.70),
    new THREE.Vector2(0.48,  0.78),
    new THREE.Vector2(0.46,  0.81),
    new THREE.Vector2(0.48,  0.84),
    new THREE.Vector2(0.50,  0.88),
    new THREE.Vector2(0.50,  0.96),
    new THREE.Vector2(0.44,  1.08),
    new THREE.Vector2(0.32,  1.18),
    new THREE.Vector2(0.22,  1.24),
    new THREE.Vector2(0.20,  1.24),
    new THREE.Vector2(0.20,  1.54),
    new THREE.Vector2(0.23,  1.56),
    new THREE.Vector2(0.23,  1.88),
    new THREE.Vector2(0.21,  1.90),
    new THREE.Vector2(0.21,  1.96),
  ];
}

function waterProfile(): THREE.Vector2[] {
  return [
    new THREE.Vector2(0.0,  -0.99),
    new THREE.Vector2(0.28, -0.96),
    new THREE.Vector2(0.43, -0.88),
    new THREE.Vector2(0.46, -0.78),
    new THREE.Vector2(0.46,  0.52),
    new THREE.Vector2(0.44,  0.60),
    new THREE.Vector2(0.42,  0.63),
    new THREE.Vector2(0.44,  0.66),
    new THREE.Vector2(0.46,  0.70),
    new THREE.Vector2(0.44,  0.78),
    new THREE.Vector2(0.42,  0.81),
    new THREE.Vector2(0.44,  0.84),
    new THREE.Vector2(0.46,  0.88),
    new THREE.Vector2(0.46,  0.96),
    new THREE.Vector2(0.40,  1.07),
    new THREE.Vector2(0.28,  1.17),
    new THREE.Vector2(0.18,  1.23),
    new THREE.Vector2(0.18,  1.54),
  ];
}

// ── Label canvas texture ──────────────────────────────────────────────────
function useLabelTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 512; c.height = 512;
    const ctx = c.getContext("2d")!;

    // White background with rounded rect
    ctx.fillStyle = "rgba(255,255,255,0.90)";
    ctx.beginPath();
    ctx.roundRect(36, 56, 440, 400, 18);
    ctx.fill();

    ctx.strokeStyle = "rgba(14,116,144,0.30)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.roundRect(36, 56, 440, 400, 18);
    ctx.stroke();

    // Brand text
    ctx.textAlign = "center";
    ctx.fillStyle = "#0e7490";
    ctx.font = "bold 74px Georgia, serif";
    ctx.fillText("AQUA", 256, 168);

    ctx.font = "54px Georgia, serif";
    ctx.fillStyle = "#0891b2";
    ctx.fillText("FRESH", 256, 232);

    ctx.strokeStyle = "rgba(14,116,144,0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(100, 258); ctx.lineTo(412, 258);
    ctx.stroke();

    ctx.font = "22px sans-serif";
    ctx.fillStyle = "#64748b";
    ctx.fillText("PREMIUM WATER", 256, 300);

    ctx.font = "18px sans-serif";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("500 ml  ·  BIS Certified", 256, 338);
    ctx.fillText("pH 7.4  ·  TDS < 50", 256, 370);
    ctx.fillText("ISO 9001 : 2015", 256, 420);

    const tex = new THREE.CanvasTexture(c);
    return tex;
  }, []);
}

// ── Three.js bottle mesh ──────────────────────────────────────────────────
interface BottleMeshProps { waterLevel: number; autoRotate: boolean }

function BottleMesh({ waterLevel, autoRotate }: BottleMeshProps) {
  const groupRef  = useRef<THREE.Group>(null);
  const clipPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, -1, 0), 0), []);
  const animLevel = useRef(waterLevel);
  const labelTex  = useLabelTexture();
  const bProfile  = useMemo(() => bottleProfile(), []);
  const wProfile  = useMemo(() => waterProfile(), []);

  useFrame((_, dt) => {
    if (autoRotate && groupRef.current) groupRef.current.rotation.y += dt * 0.5;
    animLevel.current = THREE.MathUtils.lerp(animLevel.current, waterLevel, dt * 1.8);
    // Y range inside bottle: -1.0 (base) → ~1.54 (neck start) — total span 2.54
    const fillY = -1.0 + animLevel.current * 2.54;
    clipPlane.constant = fillY;
  });

  return (
    <group ref={groupRef}>
      {/* Glass bottle */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bProfile, 80]} />
        <meshPhysicalMaterial
          side={THREE.DoubleSide}
          color={new THREE.Color(0.88, 0.97, 1.0)}
          metalness={0.0}
          roughness={0.04}
          transmission={0.92}
          ior={1.5}
          thickness={0.28}
          transparent
          opacity={0.70}
          envMapIntensity={2.8}
          clearcoat={1}
          clearcoatRoughness={0.06}
          attenuationColor={new THREE.Color(0.7, 0.93, 1.0)}
          attenuationDistance={0.55}
        />
      </mesh>

      {/* Water fill (clip plane controls height) */}
      <mesh castShadow>
        <latheGeometry args={[wProfile, 64]} />
        <meshPhysicalMaterial
          color={new THREE.Color(0.14, 0.65, 0.92)}
          metalness={0}
          roughness={0.03}
          transmission={0.78}
          ior={1.33}
          transparent
          opacity={0.58}
          envMapIntensity={1.4}
          clippingPlanes={[clipPlane]}
          clipShadows
        />
      </mesh>

      {/* Label wrap */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.503, 0.503, 1.40, 64, 1, true, -Math.PI / 3, (Math.PI * 4) / 3]} />
        <meshBasicMaterial
          map={labelTex}
          transparent
          opacity={0.94}
          side={THREE.FrontSide}
          depthWrite={false}
        />
      </mesh>

      {/* Cap cylinder */}
      <mesh position={[0, 1.72, 0]}>
        <cylinderGeometry args={[0.215, 0.215, 0.32, 32]} />
        <meshPhysicalMaterial
          color={new THREE.Color(0.15, 0.55, 0.82)}
          metalness={0.08}
          roughness={0.30}
          envMapIntensity={1.6}
        />
      </mesh>

      {/* Cap top disc */}
      <mesh position={[0, 1.885, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.215, 32]} />
        <meshPhysicalMaterial
          color={new THREE.Color(0.15, 0.55, 0.82)}
          roughness={0.30}
        />
      </mesh>
    </group>
  );
}

// ── Error boundary ────────────────────────────────────────────────────────
import { Component, ReactNode } from "react";
class CanvasErrorBoundary extends Component<
  { fallback: ReactNode; children: ReactNode },
  { error: boolean }
> {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    return this.state.error ? this.props.fallback : this.props.children;
  }
}

// ── Public component ──────────────────────────────────────────────────────
interface WaterBottle3DProps {
  waterLevel?: number;
  className?: string;
  autoRotate?: boolean;
}

export function WaterBottle3D({
  waterLevel = 0.72,
  className = "",
  autoRotate = true,
}: WaterBottle3DProps) {
  const [supported, setSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setSupported(checkWebGL());
  }, []);

  // Haven't checked yet — render nothing
  if (supported === null) return <div className={className} />;

  // No WebGL — show SVG fallback
  if (!supported) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <WaterBottleSVG size="lg" animated waterLevel={Math.round(waterLevel * 100)} />
      </div>
    );
  }

  const svgFallback = (
    <div className={`${className} flex items-center justify-center`}>
      <WaterBottleSVG size="lg" animated waterLevel={Math.round(waterLevel * 100)} />
    </div>
  );

  return (
    <CanvasErrorBoundary fallback={svgFallback}>
      <div className={className} style={{ background: "transparent" }}>
        <Canvas
          camera={{ position: [0, 0.4, 4.4], fov: 40 }}
          gl={{
            localClippingEnabled: true,
            alpha: true,
            antialias: true,
            powerPreference: "default",
            failIfMajorPerformanceCaveat: false,
          }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.55} />
          <directionalLight position={[4, 6, 4]} intensity={1.3} castShadow />
          <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#a8d8f0" />
          <pointLight position={[0, 3, 3]} intensity={0.9} color="#e0f4ff" />
          <pointLight position={[-2, -1, 2]} intensity={0.4} color="#60c0e8" />

          <Environment preset="studio" />

          <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.28}>
            <BottleMesh waterLevel={waterLevel} autoRotate={autoRotate} />
          </Float>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  );
}
