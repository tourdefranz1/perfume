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
            {/* Background Decor - Big Subtle Text */}
            <h1
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] md:text-[20vw] font-display font-bold opacity-[0.03] whitespace-nowrap select-none pointer-events-none"
                style={{ color: perfume.colors.accent }}
            >
                {perfume.name.split(" ")[0]}
            </h1>

            {/* Main Layout Container */}
            <div className="container relative z-10 w-full h-full px-6 flex flex-col md:flex-row md:items-center md:justify-between md:px-12 pointer-events-none md:pointer-events-auto overflow-y-auto md:overflow-hidden touch-pan-y no-scrollbar">

                {/* 1. LEFT CONTENT SECTION (Desktop) / TOP CONTENT (Mobile) */}
                <div className="flex flex-col gap-6 md:gap-12 md:max-w-[45%] shrink-0 pt-20 md:pt-0">

                    {/* Header: Badge + Title + Brand */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-center md:items-start text-center md:text-left"
                    >
                        <span
                            className="inline-block px-3 py-1 mb-4 md:mb-6 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full border backdrop-blur-sm shadow-sm"
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
                                className="text-sm md:text-2xl font-sans font-light tracking-[0.2em] mt-2 md:mt-4 opacity-90 mix-blend-plus-lighter"
                                style={{ color: perfume.colors.text }}
                            >
                                {perfume.brand}
                            </h3>
                        )}
                    </motion.div>

                    {/* Description Section (VISIBLE ON DESKTOP UNDER HEADER) */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 0.95 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden md:block text-lg font-light leading-relaxed max-w-sm"
                        style={{ color: perfume.colors.text }}
                    >
                        {perfume.description}
                    </motion.p>
                </div>

                {/* 2. CENTER/RIGHT SECTION: THE BOTTLE */}
                <div className="relative flex flex-col items-center justify-center my-10 md:my-0 md:flex-1 h-[300px] md:h-full z-10 shrink-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-[180px] h-[270px] md:w-[420px] md:h-[630px] rounded-[40px] md:rounded-[100px] overflow-hidden shadow-2xl"
                        style={{ boxShadow: `0 25px 60px -12px ${perfume.colors.accent}60` }}
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
                    </motion.div>

                    {/* Glow Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[350px] md:h-[350px] blur-[80px] md:blur-[120px] rounded-full opacity-50 md:opacity-40 animate-pulse pointer-events-none"
                        style={{ backgroundColor: perfume.colors.accent }}
                    />
                </div>

                {/* 3. INFO & CTA SECTION (Mobile-Bottom, Desktop-Far-Right) */}
                <div className="relative z-20 flex flex-col gap-6 md:gap-10 text-center md:text-left md:max-w-[25%] items-center md:items-start shrink-0 pb-20 md:pb-0">

                    {/* Mobile Only Description (Tighter gap) */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 0.95 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="block md:hidden text-[13px] font-light leading-relaxed max-w-xs mx-auto drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)]"
                        style={{ color: perfume.colors.text }}
                    >
                        {perfume.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col gap-5 md:gap-8 w-full max-w-xs"
                    >
                        <div className="flex flex-col gap-2 p-4 md:p-0 rounded-2xl md:bg-transparent backdrop-blur-md md:backdrop-blur-none bg-white/5 border border-white/10 md:border-0 shadow-lg md:shadow-none">
                            <div className="flex flex-col gap-1 items-center md:items-start">
                                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] opacity-60 font-medium" style={{ color: perfume.colors.text }}>Ноты:</p>
                                <p className="text-xs md:text-xl font-display font-medium" style={{ color: perfume.colors.accent }}>{perfume.usp}</p>
                            </div>

                            <button
                                className="group relative mt-2 px-8 py-4 w-full md:w-auto overflow-hidden rounded-full backdrop-blur-md bg-white text-black transition-all hover:bg-white/90 shadow-xl cursor-pointer"
                            >
                                <span className="relative flex items-center justify-center gap-2 text-sm md:text-base font-bold">
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
