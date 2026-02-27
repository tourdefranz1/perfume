import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PERFUMES } from "../data/perfumes";
import { Slide } from "./Slide";
import { Navigation } from "./Navigation";
import { ChevronDown } from "lucide-react";

export const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const isAnimatingRef = useRef(false);

    // Keep ref in sync with state
    useEffect(() => {
        isAnimatingRef.current = isAnimating;
    }, [isAnimating]);

    const startAnimation = useCallback(() => {
        setIsAnimating(true);
        isAnimatingRef.current = true;
        setTimeout(() => setIsAnimating(false), 1000);
    }, []);

    // Single useEffect for all gesture listeners — uses refs to avoid stale closures
    useEffect(() => {
        let touchStartY = 0;

        const handleWheel = (e: WheelEvent) => {
            if (isAnimatingRef.current) return;
            if (Math.abs(e.deltaY) < 30) return;

            startAnimation();
            if (e.deltaY > 0) {
                setCurrentIndex(prev => (prev + 1) % PERFUMES.length);
            } else {
                setCurrentIndex(prev => (prev - 1 + PERFUMES.length) % PERFUMES.length);
            }
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            if (isAnimatingRef.current) return;
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;

            if (Math.abs(diff) < 50) return;

            startAnimation();
            if (diff > 0) {
                setCurrentIndex(prev => (prev + 1) % PERFUMES.length);
            } else {
                setCurrentIndex(prev => (prev - 1 + PERFUMES.length) % PERFUMES.length);
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchend", handleTouchEnd, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [startAnimation]);

    const goToSlide = useCallback((idx: number) => {
        if (isAnimating || idx === currentIndex) return;
        startAnimation();
        setCurrentIndex(idx);
    }, [isAnimating, currentIndex, startAnimation]);

    return (
        <div
            className="relative w-full h-[100dvh] overflow-hidden text-white transition-colors duration-700"
            style={{ backgroundColor: PERFUMES[currentIndex].colors.bg }}
        >
            <Navigation />

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Slide perfume={PERFUMES[currentIndex]} isActive={true} />
                </motion.div>
            </AnimatePresence>

            {/* Pagination / Indicators */}
            <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
                {PERFUMES.map((p, idx) => (
                    <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        aria-label={`Слайд ${idx + 1}: ${p.name}`}
                        className="w-11 h-11 md:w-8 md:h-8 flex items-center justify-center cursor-pointer group"
                    >
                        <span className={`block rounded-full transition-all duration-300 ${idx === currentIndex
                            ? "w-3 h-3 bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                            : "w-2.5 h-2.5 bg-white/30 group-hover:bg-white/60 scale-100"
                            }`} />
                    </button>
                ))}
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 motion-safe:animate-bounce opacity-50">
                <ChevronDown className="w-6 h-6 text-white" />
            </div>

            {/* Social Footer (Fixed) */}
            <div className="absolute bottom-8 left-12 z-40 hidden md:flex gap-6 text-xs font-bold tracking-widest opacity-60">
                <a href="#" className="hover:text-white transition-colors">ИНСТАГРАМ</a>
                <a href="#" className="hover:text-white transition-colors">ТЕЛЕГРАМ</a>
                <a href="#" className="hover:text-white transition-colors">КОНТАКТЫ</a>
            </div>
        </div>
    );
};
