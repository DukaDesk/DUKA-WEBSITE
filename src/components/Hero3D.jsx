import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

const AMBER = "#F4A026";
const LOGO_URL = "/assets/Dukalogo-main-removebg-preview.png";

function supportsWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

function buildLogoGeometry() {
  const img = new Image();
  img.src = LOGO_URL;
  return new Promise((resolve) => {
    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const { data } = ctx.getImageData(0, 0, img.width, img.height);

        const stride = 5;
        const positions = [];
        const colors = [];
        const scale = 2.3 / img.width;
        for (let y = 0; y < img.height; y += stride) {
          for (let x = 0; x < img.width; x += stride) {
            const i = (y * img.width + x) * 4;
            if (data[i + 3] < 64) continue;
            const lum = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255;
            positions.push(
              (x - img.width / 2) * scale,
              (img.height / 2 - y) * scale,
              (Math.random() - 0.5) * 0.12
            );
            const t = lum * 0.88;
            colors.push(244 / 255 + (1 - 244 / 255) * t, 160 / 255 + (1 - 160 / 255) * t, 38 / 255 + (1 - 38 / 255) * t);
          }
        }
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(positions), 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(new Float32Array(colors), 3));
        resolve(geometry);
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
  });
}

function Logo() {
  const inner = useRef(null);
  const outer = useRef(null);
  const [geo, setGeo] = useState(null);

  useEffect(() => {
    let cancelled = false;
    buildLogoGeometry().then((g) => {
      if (!cancelled) setGeo(g);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const px = state.pointer.x;
    const py = state.pointer.y;
    if (inner.current) {
      inner.current.rotation.y += (px * 0.55 - inner.current.rotation.y) * 0.08 + delta * 0.22;
      inner.current.rotation.x = py * 0.3 + Math.sin(t * 0.5) * 0.08;
      inner.current.rotation.z += delta * 0.04;
      inner.current.position.y = Math.sin(t * 0.6) * 0.12;
    }
    if (outer.current) {
      outer.current.rotation.y -= delta * 0.08;
      outer.current.rotation.z += delta * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <group ref={outer} scale={1.5}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={AMBER} wireframe transparent opacity={0.06} />
        </mesh>
      </group>
      <group ref={inner}>
        {geo ? (
          <points geometry={geo}>
            <pointsMaterial size={0.02} vertexColors transparent opacity={0.95} depthWrite={false} sizeAttenuation />
          </points>
        ) : null}
      </group>
    </group>
  );
}

export function Hero3D() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 1024px)");
    const ok = mqDesktop.matches && supportsWebGL();
    setReady(ok);
  }, []);

  if (!ready) return null;

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6.4], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[6, 4, 6]} intensity={60} color="#FFF3D6" />
      <pointLight position={[-6, -3, 4]} intensity={36} color={AMBER} />
      <pointLight position={[0, -5, -4]} intensity={24} color="#3B5BDB" />
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={1.1}>
        <Logo />
      </Float>
    </Canvas>
  );
}

export default Hero3D;
