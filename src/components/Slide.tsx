import { motion } from "framer-motion";
import type { Perfume } from "../data/perfumes";
import { cn } from "../lib/utils";
import { ArrowRight } from "lucide-react";

interface SlideProps {
    perfume: Perfume;
    isActive: boolean;
}

export const Slide = ({ perfume, isActive }: SlideProps) => {
    return (
        <div
            className={cn(
                "absolute inset-0 w-full h-full flex items-center justify-center transition-colors duration-700 ease-in-out overflow-hidden"
            )}
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

            <div className="container relative z-10 h-full px-6 pt-20 pb-24 md:py-0 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between pointer-events-none md:pointer-events-auto">

                {/* Mobile: Centered Absolute Bottle (Dimmed for contrast) */}
                {/* Desktop: Right Side Bottle (Full opacity) */}
                <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vh] h-[50vh] md:static md:w-1/2 md:h-auto md:translate-x-0 md:translate-y-0 flex justify-center items-center perspective-1000 z-0 md:z-auto pointer-events-none md:pointer-events-auto opacity-40 md:opacity-100 scale-90 md:scale-100 transition-opacity duration-500">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1 }}
                        className="relative z-20 w-[220px] h-[330px] md:w-[400px] md:h-[600px] rounded-[50px] md:rounded-[100px] overflow-hidden shadow-2xl"
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
                        {/* Stronger overlay on mobile video to help text pop */}
                        <div className="absolute inset-0 bg-black/30 md:bg-linear-to-t md:from-black/60 md:to-transparent pointer-events-none" />
                    </motion.div>

                    {/* Glow Effect */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[300px] md:h-[300px] blur-[80px] md:blur-[100px] rounded-full opacity-50 md:opacity-40 animate-pulse"
                        style={{ backgroundColor: perfume.colors.accent }}
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 w-full md:w-1/2 h-full md:h-auto flex flex-col justify-between md:block text-center md:text-left pointer-events-auto">

                    {/* Top Section: Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-4 md:mt-0"
                    >
                        <span
                            className="inline-block px-3 py-1 mb-2 md:mb-4 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-full border border-white/20 backdrop-blur-sm shadow-sm"
                            style={{ color: perfume.colors.accent, borderColor: `${perfume.colors.accent}40` }}
                        >
                            Эксклюзивный Дроп
                        </span>
                        <h2
                            className="text-4xl md:text-7xl font-display font-bold leading-none md:leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] md:drop-shadow-none"
                            style={{ color: perfume.colors.text }}
                        >
                            {perfume.name}
                        </h2>
                        {perfume.brand && (
                            <h3
                                className="text-sm md:text-2xl font-sans font-light tracking-[0.2em] mt-2 opacity-90 mix-blend-plus-lighter drop-shadow-md"
                                style={{ color: perfume.colors.text }}
                            >
                                {perfume.brand}
                            </h3>
                        )}
                    </motion.div>

                    {/* Desktop Spacer (Hidden on Mobile) */}
                    <div className="hidden md:block md:h-8" />

                    {/* Bottom Section: Info */}
                    <div className="md:space-y-8 mb-4 md:mb-0 space-y-4">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isActive ? { opacity: 0.95 } : { opacity: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-[13px] md:text-lg font-light max-w-xs md:max-w-sm mx-auto md:mx-0 leading-relaxed line-clamp-3 md:line-clamp-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.9)] md:drop-shadow-none mb-4 md:mb-8"
                            style={{ color: perfume.colors.text }}
                        >
                            {perfume.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col gap-3 p-4 md:p-0 rounded-2xl bg-black/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none"
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

            {/* Social Links (Fixed absolute to slide or screen? Let's keep inside slide for transition maybe? No, typically fixed on screen. I'll move it to layout or HeroSlider later. For now, put specific contact info here) */}
        </div>
    );
};
