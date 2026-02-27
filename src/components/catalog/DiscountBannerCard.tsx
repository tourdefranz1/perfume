import { motion } from 'framer-motion';

interface DiscountBannerCardProps {
    className?: string;
    onClick: () => void;
}

export function DiscountBannerCard({ className = '', onClick }: DiscountBannerCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={onClick}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] backdrop-blur-md border border-white/[0.08] p-6 md:p-12 flex flex-col items-center justify-center hover:bg-white/[0.05] transition-all duration-700 py-10 md:py-12 ${className}`}
        >
            <div className="relative z-10 flex flex-col h-full text-center items-center justify-center py-4">
                {/* Badge */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400 border border-emerald-400/30 px-3 py-1.5 rounded-full backdrop-blur-sm bg-emerald-500/5">
                        Privilege Club
                    </div>
                </div>

                <div className="flex flex-col items-center gap-2 mb-2 mt-8">
                    <h3 className="text-xs font-bold tracking-[0.4em] uppercase text-white/30">PROMO</h3>
                    <div className="text-7xl font-display font-bold text-white tracking-tighter italic leading-none">
                        -5<span className="text-emerald-500">%</span>
                    </div>
                </div>

                <p className="text-[13px] font-medium text-zinc-400 leading-relaxed mb-10 max-w-[200px]">
                    Exclusive access to limited edition fragrance launches and private sales.
                </p>

                <div className="w-full relative px-2">
                    <div className="absolute top-1/2 left-0 right-0 h-px border-t border-dashed border-white/10 -translate-y-[40px]" />
                    <div className="relative z-10 flex items-center justify-between bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/5 group-hover:border-emerald-500/20 transition-all">
                        <div className="flex flex-col text-left">
                            <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 mb-0.5">Access Key</span>
                            <span className="font-mono text-xs font-bold text-emerald-400">LUXE-2024</span>
                        </div>
                        <div className="h-6 w-px bg-white/10 mx-2" />
                        <div className="text-[10px] font-bold text-white uppercase tracking-wider hover:text-emerald-400 transition-colors cursor-pointer">COPY</div>
                    </div>
                </div>

                {/* Decorative Elements - Watermark moved slightly up to prevent clipping */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-[0.03] text-6xl font-black italic tracking-tighter text-white pointer-events-none uppercase transition-transform duration-700 group-hover:scale-105">
                    PROMO
                </div>
            </div>
        </motion.div>
    );
}
