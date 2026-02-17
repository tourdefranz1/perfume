import { motion } from "framer-motion";
import type { Perfume } from "../data/perfumes";
import { ArrowRight } from "lucide-react";

interface SlideProps {
    perfume: Perfume;
    isActive: boolean;
}

export const Slide = ({ perfume, isActive }: SlideProps) => {
    return (
        <div
            className="absolute inset-0 w-full h-full flex items-center justify-center transition-colors duration-700 ease-in-out overflow-hidden"
            style={{
                background: `linear-gradient(135deg, ${perfume.colors.bg} 0%, #000 100%)`
            }}
        >
            {/* Background Text / Decor based on USP or Name */}
            <h1
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-bold opacity-[0.03] whitespace-nowrap select-none pointer-events-none"
                style={{ color: perfume.colors.text }}
            >
                {perfume.name.split(" ")[0]}
            </h1>

            {/* Main Layout Container */}
            <div className="container relative z-10 w-full h-full px-6 flex flex-col md:flex-row md:items-center md:justify-between md:px-12 pointer-events-none md:pointer-events-auto overflow-y-auto md:overflow-hidden touch-pan-y">

                {/* 1. Header Section (BADGE + NAME + BRAND) */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left pt-20 md:pt-0 shrink-0"
                >
                    <span
                        className="inline-block px-3 py-1 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-sm shadow-sm"
                        style={{ color: perfume.colors.accent, borderColor: `${perfume.colors.accent}40` }}
                    >
                        Эксклюзивный Дроп
                    </span>
                    <h2
                        className="text-4xl md:text-7xl font-display font-bold leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none"
                        style={{ color: perfume.colors.text }}
                    >
                        {perfume.name}
                    </h2>
                    {perfume.brand && (
                        <h3
                            className="text-sm md:text-2xl font-sans font-light tracking-[0.2em] mt-1 md:mt-2 opacity-90 mix-blend-plus-lighter drop-shadow-md"
                            style={{ color: perfume.colors.text }}
                        >
                            {perfume.brand}
                        </h3>
                    )}
                </motion.div>

                {/* 2. Bottle Section (VIDEO/IMAGE) */}
                {/* On mobile: standard flow with vertical margins. On desktop: centered absolute/static. */}
                <div className="relative flex flex-col items-center justify-center my-8 md:my-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-1/2 md:h-full z-10 pointer-events-none md:pointer-events-auto shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-[180px] h-[270px] md:w-[400px] md:h-[600px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl"
                        style={{ boxShadow: `0 25px 50px -12px ${perfume.colors.accent}40` }}
                    >
                        {perfume.video ? (
                            <video
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
                        <div className="absolute inset-0 hidden md:block md:bg-linear-to-t md:from-black/60 md:to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Glow Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] blur-[80px] md:blur-[100px] rounded-full opacity-50 md:opacity-40 animate-pulse pointer-events-none"
                        style={{ backgroundColor: perfume.colors.accent }}
                    />
                </div>

                {/* 3. Info Section (DESCRIPTION + BUTTONS) */}
                <div className="relative z-20 flex flex-col gap-6 text-center md:text-left md:w-1/2 md:items-start pointer-events-auto pb-20 md:pb-0 shrink-0">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 0.95 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[13px] md:text-lg font-light max-w-xs md:max-w-sm mx-auto md:mx-0 leading-relaxed drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] md:drop-shadow-none"
                        style={{ color: perfume.colors.text }}
                    >
                        {perfume.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col gap-4 p-5 md:p-0 rounded-2xl bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
                    >
                        <div className="flex justify-center md:justify-start gap-2 items-center">
                            <p className="text-[10px] md:text-xs uppercase tracking-widest opacity-90 drop-shadow-sm" style={{ color: perfume.colors.text }}>Ноты:</p>
                            <p className="text-xs md:text-base font-medium drop-shadow-sm" style={{ color: perfume.colors.accent }}>{perfume.usp}</p>
                        </div>

                        <div className="flex justify-center md:justify-start">
                            <button
                                className="group relative px-8 py-3 w-full md:w-auto overflow-hidden rounded-full backdrop-blur-md bg-white/10 md:bg-white/5 border border-white/20 md:border-white/10 transition-all hover:bg-white/20 shadow-lg cursor-pointer"
                            >
                                <span className="relative flex items-center justify-center gap-2 text-sm md:text-base font-medium" style={{ color: perfume.colors.text }}>
                                    Послушать аромат <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
