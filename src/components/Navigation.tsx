import { Menu, Search, ShoppingBag } from "lucide-react";

interface NavigationProps {
    onCollectionsClick?: () => void;
    onAboutClick?: () => void;
}

export const Navigation = ({ onCollectionsClick, onAboutClick }: NavigationProps) => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 mix-blend-difference text-white">
            <div className="text-lg md:text-xl font-bold font-display tracking-tighter cursor-pointer" onClick={() => window.location.reload()}>
                RG_PERFUME
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide opacity-80">
                {/* КОЛЛЕКЦИИ — временно скрыто
                <button
                    onClick={onCollectionsClick}
                    className="hover:text-white transition-colors tracking-widest text-xs cursor-pointer bg-transparent border-none"
                >
                    КОЛЛЕКЦИИ
                </button>
                */}
                <a
                    href="#"
                    onClick={(e) => { e.preventDefault(); onAboutClick?.(); }}
                    className="hover:text-white transition-colors tracking-widest text-xs cursor-pointer"
                >
                    О БРЕНДЕ
                </a>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" aria-label="Поиск" />
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" aria-label="Корзина" />
                <Menu className="w-6 h-6 md:hidden cursor-pointer" />
            </div>
        </nav>
    );
};
