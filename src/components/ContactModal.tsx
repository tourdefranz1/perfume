import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Send } from 'lucide-react';
import { useEffect } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TITLE_ID = 'contact-modal-title';

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    // Lock body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Close on Escape key — UX audit fix
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={TITLE_ID}
                        className="relative w-full max-w-md bg-neutral-900 rounded-[32px] overflow-hidden shadow-2xl z-10 p-8 flex flex-col gap-8 items-center text-center text-white"
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            aria-label="Закрыть"
                            className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors rounded-full flex items-center justify-center text-white/70 hover:text-white cursor-pointer"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center gap-2 mt-4">
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-500">
                                Свяжитесь с нами
                            </span>
                            <h2 id={TITLE_ID} className="text-3xl font-display font-bold">
                                Оформить заказ
                            </h2>
                            <p className="text-sm font-light text-zinc-400 mt-2 max-w-[280px]">
                                Напишите нам в Telegram или Instagram для оформления заказа и консультации.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
                            <a
                                href="https://t.me/RGparfume"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full px-6 py-4 bg-[#2AABEE] text-white rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all overflow-hidden cursor-pointer min-h-[52px]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Send className="w-5 h-5" /> Telegram
                                </span>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                            </a>

                            <a
                                href="https://www.instagram.com/rg.parfume/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full px-6 py-4 bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] text-white rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all overflow-hidden cursor-pointer min-h-[52px]"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <Instagram className="w-5 h-5" /> Instagram
                                </span>
                                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                            </a>
                        </div>

                        <div className="mt-2 text-xs font-light text-zinc-500 max-w-[250px]">
                            Мы с радостью ответим на все ваши вопросы и поможем с выбором.
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
