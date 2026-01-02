import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Components ---

function DigitalCore() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={5} rotationIntensity={1} floatIntensity={2}>
            {/* Inner Distorted Core */}
            <mesh ref={meshRef} scale={[1.8, 1.8, 1.8]}>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#00f3ff"
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.6}
                    speed={3}
                />
            </mesh>

            {/* Outer Wireframe Pulse */}
            <mesh scale={[2.5, 2.5, 2.5]}>
                <icosahedronGeometry args={[1, 2]} />
                <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.15} />
            </mesh>
        </Float>
    );
}

function ParticleRing() {
    const pointsRef = useRef();

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.z += 0.005;
            pointsRef.current.rotation.y += 0.002;
        }
    });

    return (
        <points ref={pointsRef}>
            <sphereGeometry args={[4, 64, 64]} />
            <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.4} sizeAttenuation={true} />
        </points>
    )
}

// --- Digital Text Effect Hook ---
const useScrambleText = (text, active) => {
    const [display, setDisplay] = useState(text);
    const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';

    useEffect(() => {
        if (!active) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text.split("")
                    .map((letter, index) => {
                        if (index < iteration) return text[index];
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text, active]);

    return display;
};


const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [showSlogan, setShowSlogan] = useState(false);

    const slogan1 = useScrambleText("INNOVATE.", showSlogan);
    const slogan2 = useScrambleText("VISUALIZE.", showSlogan);
    const slogan3 = useScrambleText("DOMINATE.", showSlogan);

    useEffect(() => {
        // Determine when to start showing slogan effects
        if (progress > 20) setShowSlogan(true);

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + 1;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Slightly longer delay to appreciate the 100%
                    return 100;
                }
                return next;

            });
        }, 40); // 4 seconds total approx

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
        >
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
                    <pointLight position={[-10, -10, -10]} intensity={1} color="#bc13fe" />

                    {/* Mobile Scale Adjustment Wrapper */}
                    <group scale={window.innerWidth < 768 ? [0.7, 0.7, 0.7] : [1, 1, 1]}>
                        <DigitalCore />
                        <ParticleRing />
                    </group>

                    <Stars
                        radius={100}
                        depth={50}
                        count={window.innerWidth < 768 ? 1500 : 5000}
                        factor={4}
                        saturation={0}
                        fade
                        speed={1}
                    />
                </Canvas>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none mix-blend-screen">

                {/* Giant Background Number */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/5 select-none font-orbitron">
                    {progress}
                </div>

                <div className="mt-[5vh] md:mt-[20vh] text-center space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-7xl font-orbitron font-bold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">
                        BOLD<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">VIZ</span>BYTE
                    </h1>

                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center font-orbitron text-sm md:text-xl tracking-[0.3em] h-8">
                        <span className="text-cyan-400 drop-shadow-[0_0_5px_cyan]">{slogan1}</span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span className="text-purple-400 drop-shadow-[0_0_5px_purple]">{slogan2}</span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span className="text-white drop-shadow-[0_0_10px_white]">{slogan3}</span>
                    </div>
                </div>

                {/* Loading Bar */}
                <div className="absolute bottom-20 w-64 md:w-96">
                    <div className="flex justify-between text-xs font-orbitron text-gray-400 mb-2">
                        <span>SYSTEM_INITIALIZING</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink shadow-[0_0_10px_#00f3ff]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: "linear", duration: 0.1 }}
                        />
                    </div>
                </div>
            </div>

            {/* Screen Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[20] bg-[length:100%_2px,3px_100%] pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-[20] pointer-events-none" />
        </motion.div>
    );
};

export default LoadingScreen;
