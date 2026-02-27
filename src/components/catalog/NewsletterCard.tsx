import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function NewsletterCard({ className = '' }: { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`group relative h-full w-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] rounded-[2rem] p-8 flex flex-col items-center justify-center overflow-hidden hover:bg-white/[0.05] transition-all duration-500 text-center ${className}`}
        >
            <div className="relative z-10 w-full flex flex-col items-center gap-6">
                <div className="space-y-1">
                    <h3 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">
                        Stay Connected
                    </h3>
                    <p className="text-xs font-medium text-white/70 max-w-[200px]">
                        Join our private circle for exclusive updates and early access.
                    </p>
                </div>

                <div className="relative w-full max-w-[220px]">
                    <input
                        type="email"
                        placeholder="E-mail address"
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/30 transition-all text-left"
                    />
                    <button
                        className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer group/send"
                    >
                        <Send className="w-3.5 h-3.5 text-black group-hover/send:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Premium Watermark - Moved up to prevent clipping */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-[0.03] text-4xl font-black italic tracking-tighter text-white pointer-events-none select-none uppercase transition-transform duration-700 group-hover:scale-110">
                Newsletter
            </div>
        </motion.div>
    );
}
