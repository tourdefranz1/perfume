import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PERFUMES } from "../data/perfumes";
import { Slide } from "./Slide";
import { Navigation } from "./Navigation";
import { ChevronDown } from "lucide-react";

export const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const touchStart = useRef<number | null>(null);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % PERFUMES.length);
        setTimeout(() => setIsAnimating(false), 1000); // Debounce duration matching transition
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + PERFUMES.length) % PERFUMES.length);
        setTimeout(() => setIsAnimating(false), 1000);
    };

    const handleWheel = (e: WheelEvent) => {
        if (Math.abs(e.deltaY) < 50) return; // Threshold
        if (e.deltaY > 0) nextSlide();
        else prevSlide();
    };

    const handleTouchStart = (e: TouchEvent) => {
        touchStart.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (!touchStart.current) return;
        const touchEnd = e.changedTouches[0].clientY;
        const diff = touchStart.current - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
        touchStart.current = null;
    };

    useEffect(() => {
        window.addEventListener("wheel", handleWheel);
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchend", handleTouchEnd);
        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [isAnimating]); // Re-bind usually not needed if handleWheel is stable, but isAnimating check needs latest state or ref.
    // Better implementation uses ref for isAnimating to avoid re-binding listeners.
    // Converting to ref-based lock for cleaner effect dependencies.

    // Re-implementation with refs to avoid closure stale state
    const isAnimatingRef = useRef(false);
    useEffect(() => {
        isAnimatingRef.current = isAnimating;
    }, [isAnimating]);

    const handleWheelRef = (e: WheelEvent) => {
        if (isAnimatingRef.current) return;
        if (Math.abs(e.deltaY) < 30) return;

        if (e.deltaY > 0) {
            setIsAnimating(true);
            setCurrentIndex(prev => (prev + 1) % PERFUMES.length);
            setTimeout(() => setIsAnimating(false), 1000);
        } else {
            setIsAnimating(true);
            setCurrentIndex(prev => (prev - 1 + PERFUMES.length) % PERFUMES.length);
            setTimeout(() => setIsAnimating(false), 1000);
        }
    };

    // Actually, overriding the previous useEffect with correct one:
    useEffect(() => {
        const wheelListener = (e: WheelEvent) => handleWheelRef(e);
        // Touch Logic separate
        let ts = 0;
        const touchStartListener = (e: TouchEvent) => { ts = e.touches[0].clientY; };
        const touchEndListener = (e: TouchEvent) => {
            if (isAnimatingRef.current) return;
            const te = e.changedTouches[0].clientY;
            if (ts - te > 50) { // Swipe Up -> Next
                setIsAnimating(true);
                setCurrentIndex(prev => (prev + 1) % PERFUMES.length);
                setTimeout(() => setIsAnimating(false), 1000);
            } else if (te - ts > 50) { // Swipe Down -> Prev
                setIsAnimating(true);
                setCurrentIndex(prev => (prev - 1 + PERFUMES.length) % PERFUMES.length);
                setTimeout(() => setIsAnimating(false), 1000);
            }
        };

        window.addEventListener("wheel", wheelListener, { passive: false });
        window.addEventListener("touchstart", touchStartListener, { passive: false });
        window.addEventListener("touchend", touchEndListener, { passive: false });

        return () => {
            window.removeEventListener("wheel", wheelListener);
            window.removeEventListener("touchstart", touchStartListener);
            window.removeEventListener("touchend", touchEndListener);
        };
    }, []); // Run once, internal state managed via setters

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black text-white">
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
                        onClick={() => {
                            if (isAnimating) return;
                            setCurrentIndex(idx);
                        }}
                        aria-label={`Слайд ${idx + 1}: ${p.name}`}
                        className={`w-4 h-4 md:w-3 md:h-3 rounded-full transition-all duration-300 cursor-pointer min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 flex items-center justify-center ${idx === currentIndex ? "" : ""}`}
                    >
                        <span className={`block rounded-full transition-all duration-300 ${idx === currentIndex
                                ? "w-3 h-3 bg-white scale-125"
                                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/50"
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
