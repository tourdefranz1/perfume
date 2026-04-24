import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

interface NavigationProps {
    onCollectionsClick?: () => void;
    onAboutClick?: () => void;
}

export const Navigation = ({ onAboutClick }: NavigationProps) => {
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

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col items-center justify-center gap-8 md:hidden">
                    <a
                        href="#"
                        onClick={(e) => { 
                            e.preventDefault(); 
                            setIsMobileMenuOpen(false);
                            onAboutClick?.(); 
                        }}
                        className="text-2xl font-display font-bold tracking-widest text-white hover:text-amber-400 transition-colors"
                    >
                        О БРЕНДЕ
                    </a>
                </div>
            )}
        </nav>
    );
};
