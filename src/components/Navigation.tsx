import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
    onCollectionsClick?: () => void;
    onAboutClick?: () => void;
    onContactClick?: () => void;
}

export const Navigation = ({ onAboutClick, onContactClick }: NavigationProps) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 mix-blend-difference text-white">
            <div className="text-lg md:text-xl font-bold font-display tracking-tighter cursor-pointer relative z-50" onClick={() => window.location.reload()}>
                RG_PERFUME
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide opacity-80">
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}
                    className="hover:text-white transition-colors tracking-widest text-xs cursor-pointer"
                >
                    О БРЕНДЕ
                </a>
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onContactClick?.(); }}
                    className="hover:text-white transition-colors tracking-widest text-xs cursor-pointer"
                >
                    КОНТАКТЫ
                </a>
            </div>

            <div className="flex items-center gap-4 md:gap-6 relative z-50">
                {/* Search hidden on mobile */}
                <Search className="hidden md:block w-5 h-5 cursor-pointer hover:scale-110 transition-transform" aria-label="Поиск" />
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" aria-label="Корзина" />
                
                <button 
                    className="md:hidden p-1 cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Dropdown (Liquid Glass) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Invisible backdrop to close menu when clicking outside */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 md:hidden" 
                            onClick={() => setIsMobileMenuOpen(false)} 
                        />
                        
                        <motion.div 
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="absolute top-[72px] right-4 w-[220px] z-50 md:hidden rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col p-2 gap-1"
                            style={{ 
                                background: 'rgba(0, 0, 0, 0.65)', 
                                backdropFilter: 'blur(24px)',
                                WebkitBackdropFilter: 'blur(24px)'
                            }}
                        >
                            <a
                                href="#"
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    setIsMobileMenuOpen(false);
                                    onAboutClick?.(); 
                                }}
                                className="flex items-center justify-center w-full px-4 py-4 rounded-xl text-sm font-bold tracking-widest text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                            >
                                О БРЕНДЕ
                            </a>
                            <a
                                href="#"
                                onClick={(e) => { 
                                    e.preventDefault(); 
                                    setIsMobileMenuOpen(false);
                                    onContactClick?.(); 
                                }}
                                className="flex items-center justify-center w-full px-4 py-4 rounded-xl text-sm font-bold tracking-widest text-white hover:bg-white/10 active:bg-white/20 transition-colors"
                            >
                                КОНТАКТЫ
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
