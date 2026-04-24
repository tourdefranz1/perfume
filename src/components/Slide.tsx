import { motion } from "framer-motion";
import type { Perfume } from "../data/perfumes";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

interface SlideProps {
    perfume: Perfume;
    isActive: boolean;
    onListenClick?: () => void;
}

export const Slide = ({ perfume, isActive, onListenClick }: SlideProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (isActive && video) {
            video.muted = true; // Double-enforce for mobile
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(err => {
                    console.warn("Autoplay was prevented:", err);
                    // Add a one-time listener to start on first interaction if blocked
                    const startOnInteraction = () => {
                        video.play();
                        window.removeEventListener('touchstart', startOnInteraction);
                    };
                    window.addEventListener('touchstart', startOnInteraction);
                });
            }
        }
    }, [isActive]);

    return (
        <div
            className="absolute inset-x-0 inset-y-0 w-full h-full flex items-center justify-center transition-colors duration-700 ease-in-out overflow-hidden"
            style={{
                background: `radial-gradient(circle at 50% 25%, ${perfume.colors.bg} 0%, ${perfume.colors.bg} 100%)`
            }}
        >
            {/* Background Decor - Extremely Large Ghost Text */}
            <div
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-bold opacity-[0.03] whitespace-nowrap select-none pointer-events-none z-0"
                style={{ color: perfume.colors.accent }}
            >
                {perfume.name.split(" ")[0]}
            </div>

            {/* Content Wrapper */}
            <div className="container relative z-10 w-full h-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 pointer-events-auto overflow-y-auto md:overflow-hidden no-scrollbar">

                {/* 1. LEFT TEXT SIDE (Desktop) / TOP (Mobile) */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left pt-24 md:pt-0 md:w-[50%] md:pl-12 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span
                            className="inline-block px-3 py-1 mb-2 md:mb-8 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase rounded-full border border-white/20 backdrop-blur-md"
                            style={{ color: perfume.colors.accent, borderColor: `${perfume.colors.accent}40` }}
                        >
                            Эксклюзивный Дроп
                        </span>
                        <h2
                            className="text-4xl md:text-[5.5rem] font-display font-bold leading-[1.1] mb-1 md:mb-6"
                            style={{ color: perfume.colors.text }}
                        >
                            {perfume.name}
                        </h2>
                        {perfume.brand && (
                            <h3
                                className="text-base md:text-3xl font-sans font-extralight tracking-[0.4em] opacity-80 mb-2 md:mb-12"
                                style={{ color: perfume.colors.text }}
                            >
                                {perfume.brand}
                            </h3>
                        )}

                        <p
                            className="hidden md:block text-lg md:text-xl font-light leading-relaxed max-w-md opacity-90 mb-12"
                            style={{ color: perfume.colors.text }}
                        >
                            {perfume.description}
                        </p>

                        {/* DESKTOP CTA INTEGRATED (No overlap) */}
                        <div className="hidden md:flex flex-col gap-8 pointer-events-auto">
                            <div className="flex flex-col gap-2">
                                <p className="text-xs uppercase tracking-[0.3em] opacity-50" style={{ color: perfume.colors.text }}>Композиция:</p>
                                <p className="text-2xl font-display font-medium" style={{ color: perfume.colors.accent }}>{perfume.usp}</p>
                            </div>
                            <button onClick={onListenClick} className="group relative px-10 py-5 bg-white text-black rounded-full font-bold text-lg shadow-2xl overflow-hidden active:scale-95 transition-all flex items-center gap-3 cursor-pointer">
                                <span className="relative z-10 flex items-center gap-3">
                                    Послушать аромат <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                    style={{ backgroundColor: perfume.colors.accent }}
                                />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* 2. RIGHT/CENTER BOTTLE HUB (Desktop (magazine style - right) / Mobile (center)) */}
                <div className="relative flex-1 flex items-center justify-center md:justify-end md:pr-12 shrink-0 mb-4 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={isActive ? { opacity: 1, scale: 1, x: 0 } : { opacity: 0, scale: 0.8, x: 50 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="relative z-20 w-[170px] h-[255px] md:w-[450px] md:h-[675px] rounded-[30px] md:rounded-[80px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                    >
                        {perfume.video ? (
                            <video
                                ref={videoRef}
                                src={perfume.video}
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                playsInline
                                onEnded={(e) => {
                                    if (perfume.videoEndBehavior !== 'freeze') {
                                        e.currentTarget.currentTime = 0;
                                        e.currentTarget.play();
                                    } else {
                                        e.currentTarget.pause();
                                    }
                                }}
                            />
                        ) : (
                            <img
                                src={perfume.image}
                                alt={perfume.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </motion.div>

                    {/* Ambient Glow */}
                    <div
                        className="absolute top-1/2 left-1/2 md:left-auto md:right-10 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] blur-[80px] md:blur-[150px] rounded-full opacity-40 md:opacity-30 animate-pulse pointer-events-none"
                        style={{ backgroundColor: perfume.colors.accent }}
                    />
                </div>

                {/* 3. MOBILE ONLY: Description + Bottom Bar (Safe Area Optimized) */}
                <div
                    className="md:hidden flex flex-col gap-4 items-center text-center shrink-0 w-full pointer-events-auto pb-10"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 0.9 } : { opacity: 0 }}
                        className="text-[13px] font-light leading-relaxed max-w-[280px]"
                        style={{ color: perfume.colors.text }}
                    >
                        {perfume.description}
                    </motion.p>

                    <div className="flex flex-col gap-4 w-full px-6 items-center">
                        <div className="flex gap-2 items-center justify-center">
                            <span className="text-[10px] uppercase tracking-widest opacity-50" style={{ color: perfume.colors.text }}>Ноты:</span>
                            <span className="text-xs font-semibold" style={{ color: perfume.colors.accent }}>{perfume.usp}</span>
                        </div>
                        <button onClick={onListenClick} className="group relative w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-sm shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all cursor-pointer overflow-hidden min-w-[200px]">
                            <span className="relative z-10 flex items-center gap-2">
                                Послушать аромат <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"
                                style={{ backgroundColor: perfume.colors.accent }}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
