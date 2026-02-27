import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface AllProductsCardProps {
    className?: string;
    onClick: () => void;
}

export function AllProductsCard({ className = '', onClick }: AllProductsCardProps) {
    return (
        <motion.button
            whileHover={{ scale: 0.99, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-10 flex flex-col group transition-all duration-500 hover:border-white/20 hover:bg-white/10 ${className}`}
        >
            <div className="relative z-10 flex flex-col h-full text-left">
                <div className="flex bg-white text-black rounded-2xl w-14 h-14 items-center justify-center mb-auto group-hover:rotate-45 transition-transform duration-500 shadow-2xl">
                    <ArrowUpRight className="w-7 h-7" />
                </div>

                <div className="mt-4">
                    <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-emerald-500 mb-1 font-mono">Archive</p>
                    <h3 className="text-2xl lg:text-3xl font-display font-bold leading-[0.9] tracking-tighter text-white">
                        Explore <br /> All
                    </h3>
                </div>
            </div>

            <div className="absolute inset-0 bg-linear-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.button>
    );
}
