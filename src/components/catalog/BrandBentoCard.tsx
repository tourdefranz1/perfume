import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Brand } from '../../data/brands';
import { cn } from '../../lib/utils';

interface BrandBentoCardProps {
    brand: Brand;
    onClick: (id: string) => void;
    className?: string;
}

export function BrandBentoCard({ brand, onClick, className = '' }: BrandBentoCardProps) {
    return (
        <motion.button
            whileHover={{ scale: 0.99, y: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick(brand.id)}
            className={`relative overflow-hidden rounded-[2.5rem] p-6 md:p-8 text-left group flex flex-col transition-all duration-500 border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-black/60 ${brand.color} ${brand.textColor} ${className}`}
        >
            {/* Background Image with Overlay */}
            {brand.image && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-2000 ease-out group-hover:scale-110"
                        style={{ backgroundImage: `url(${brand.image})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-black/90 group-hover:via-black/60 transition-all duration-500" />
                </>
            )}

            {/* Decorative Accent */}
            {brand.type === 'text-accent' && (
                <div className={`absolute top-0 right-[-5%] text-[8rem] md:text-[15rem] font-bold opacity-[0.03] select-none pointer-events-none leading-none ${brand.accent}`}>
                    {brand.name.charAt(0)}
                </div>
            )}

            {/* Logo/Wordmark Centered */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
                <motion.div
                    initial={{ opacity: 0.8, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <h3 className={cn(
                        "text-2xl md:text-5xl lg:text-6xl uppercase leading-none tracking-tight",
                        brand.logoFont || "font-display",
                        brand.logoStyle,
                        "text-white/90 group-hover:text-white transition-colors"
                    )}>
                        {brand.name}
                    </h3>

                    {brand.description && (
                        <p className="mt-4 md:mt-6 text-[7px] md:text-[9px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase text-zinc-500 group-hover:text-emerald-500/80 transition-colors duration-500">
                            {brand.description}
                        </p>
                    )}
                </motion.div>

                {/* Micro Action Button */}
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 backdrop-blur-md text-white">
                    <ArrowUpRight className="w-4 h-4" />
                </div>
            </div>

            {brand.type === 'minimal' && (
                <div className="absolute top-10 right-10 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            )}
        </motion.button>
    );
}
