import { Menu, Search, ShoppingBag } from "lucide-react";

export const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-12 py-4 md:py-6 mix-blend-difference text-white">
            <div className="text-lg md:text-xl font-bold font-display tracking-tighter">
                RG_PERFUME
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide opacity-80">
                <a href="#" className="hover:text-white transition-colors tracking-widest text-xs">КОЛЛЕКЦИИ</a>
                <a href="#" className="hover:text-white transition-colors tracking-widest text-xs">О БРЕНДЕ</a>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <Search className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                <ShoppingBag className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                <Menu className="w-6 h-6 md:hidden cursor-pointer" />
            </div>
        </nav>
    );
};
