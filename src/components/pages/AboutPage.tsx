import { motion } from 'framer-motion';
import { ArrowLeft, Instagram, Send, Star, Shield, Sparkles, ShieldCheck, Banknote } from 'lucide-react';
import { ContactModal } from '../ContactModal';
import { useState } from 'react';

interface AboutPageProps {
    onBack: () => void;
}

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: 'easeOut' as const },
};

const stagger = {
    animate: { transition: { staggerChildren: 0.12 } },
};

const VALUES = [
    {
        icon: Star,
        title: 'Оригинальность',
        text: 'Только подлинные ароматы от мировых домов парфюмерии. Никаких компромиссов с качеством.',
    },
    {
        icon: Shield,
        title: 'Гарантия',
        text: 'Каждый флакон проходит строгую проверку подлинности. Вы получаете оригинальный продукт.',
    },
    {
        icon: Sparkles,
        title: 'Экспертный подход',
        text: 'Мы помогаем найти ваш аромат — тот, который подчеркнет вашу индивидуальность.',
    },
];

export function AboutPage({ onBack }: AboutPageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
            {/* ── NAV ── */}
            <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 text-xs font-bold tracking-widest uppercase cursor-pointer min-h-[44px] min-w-[44px]"
                    aria-label="Вернуться на главную"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="hidden sm:inline">Назад</span>
                </button>
                <div className="text-base font-bold tracking-widest">RG_PERFUME</div>
                <div className="w-[44px]" /> {/* Spacer to keep title centered or just empty space */}
            </nav>

            {/* ── HERO ── */}
            <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-24 pb-16 overflow-hidden">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
                        style={{ background: 'radial-gradient(circle, #a855f7, transparent 70%)' }} />
                    <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-15"
                        style={{ background: 'radial-gradient(circle, #D4AF37, transparent 70%)' }} />
                </div>

                <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.025] whitespace-nowrap select-none tracking-tighter">
                    RG
                </div>

                <motion.div
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                    className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto"
                >
                    <motion.span
                        variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full border border-white/15 text-white/50 backdrop-blur-sm"
                    >
                        О бренде
                    </motion.span>

                    <motion.h1
                        variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                        Искусство быть&nbsp;
                        <span className="italic text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(135deg, #a855f7, #D4AF37)' }}>
                            собой
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
                        className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl"
                    >
                        Парфюм — это не просто аромат. Это ваша невидимая подпись, эмоция, застывшая во времени, и первый аккорд в симфонии вашего образа.
                    </motion.p>
                </motion.div>
                
                {/* Scroll hint indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent" />
                </motion.div>
            </section>

            {/* ── THE STORY ── */}
            <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto">
                <motion.div 
                    {...fadeUp}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    <div className="order-2 md:order-1 relative h-[500px] w-full rounded-3xl overflow-hidden">
                         <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-amber-500/10 mix-blend-overlay z-10" />
                         <img 
                            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1887&auto=format&fit=crop" 
                            alt="Perfume bottle reflecting light" 
                            className="w-full h-full object-cover filter brightness-75 contrast-125"
                        />
                         <div className="absolute inset-0 border border-white/10 rounded-3xl z-20" />
                    </div>
                    
                    <div className="order-1 md:order-2 flex flex-col gap-6">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-purple-400">Философия</span>
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Эстетика в каждой капле
                        </h2>
                        <div className="flex flex-col gap-4 text-white/60 font-light leading-relaxed text-lg">
                            <p>
                                Наш путь начался с простой идеи: премиальная парфюмерия должна быть искусством, доступным тем, кто умеет ценить подлинную красоту и качество.
                            </p>
                            <p>
                                RG Perfume — это больше, чем магазин. Это закрытый клуб ценителей селективных ароматов, где мы бережно отбираем каждый флакон, чтобы он стал продолжением вашей уникальной истории.
                            </p>
                            <p>
                                Мы верим, что аромат — это самый тонкий инструмент самовыражения, способный менять настроение, пробуждать воспоминания и оставлять неизгладимый след в сердцах людей.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ── PRICING PHILOSOPHY ── */}
            <section className="relative px-6 md:px-12 py-32 mt-12 bg-white/[0.02] border-y border-white/5">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
                 
                <div className="max-w-4xl mx-auto">
                    <motion.div {...fadeUp} className="text-center mb-16">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-400 mb-4 block">Экономика бренда</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Оригинал. Но доступнее.
                        </h2>
                        <p className="text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
                            Мы сделали роскошь рациональной, переосмыслив традиционную модель розничной торговли парфюмерией.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                        <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2 z-10">
                                <ShieldCheck className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold z-10" style={{ fontFamily: "'Playfair Display', serif" }}>Те же поставщики</h3>
                            <p className="text-white/60 font-light leading-relaxed z-10">
                                Закупка продукции происходит абсолютно тем же методом и у тех же официальных дистрибьюторов, что и у крупнейших сетевых ретейлеров парфюмерии. Вы получаете идентичный, 100% оригинальный товар со всеми батч-кодами.
                            </p>
                        </motion.div>

                        <motion.div {...fadeUp} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} className="flex flex-col gap-4 p-8 rounded-2xl bg-white/[0.03] border border-white/5 relative overflow-hidden group hover:bg-white/[0.05] transition-colors duration-500">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />
                            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-2 z-10">
                                <Banknote className="w-6 h-6 text-amber-400" />
                            </div>
                            <h3 className="text-2xl font-bold z-10" style={{ fontFamily: "'Playfair Display', serif" }}>Разумная наценка</h3>
                            <p className="text-white/60 font-light leading-relaxed z-10">
                                Почему наши цены кратно ниже? Мы исключили из стоимости товара колоссальные расходы на содержание огромных офлайн-бутиков, масштабные рекламные кампании, дорогой брендинг и сложную логистику. Вы платите только за сам аромат.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── VALUES ── */}
            <section className="px-6 md:px-12 py-32 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {VALUES.map((v, i) => (
                        <motion.div
                            key={v.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="relative rounded-2xl p-8 flex flex-col gap-5 border border-white/8 overflow-hidden group"
                            style={{ background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(12px)' }}
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(168,85,247,0.1), transparent 60%)' }} />

                            <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                style={{ background: 'rgba(168,85,247,0.15)' }}>
                                <v.icon className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                                {v.title}
                            </h3>
                            <p className="text-sm text-white/55 font-light leading-relaxed">
                                {v.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA FOOTER ── */}
            <section className="px-6 md:px-12 py-24 flex flex-col items-center gap-8 text-center border-t border-white/5 bg-gradient-to-t from-purple-900/10 to-transparent relative">
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[url('https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 pointer-events-none" />
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center gap-4 max-w-xl z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Готовы найти свой аромат?
                    </h2>
                    <p className="text-white/50 font-light text-lg leading-relaxed mt-4">
                        Свяжитесь с нами в Telegram или Instagram — мы с удовольствием проконсультируем и поможем с подбором.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-6 z-10"
                >
                    <a
                        href="https://t.me/RGparfume"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer hover:brightness-110 active:scale-95 min-h-[52px]"
                        style={{ background: '#2AABEE' }}
                    >
                        <Send className="w-4 h-4" /> Telegram
                    </a>
                    <a
                        href="https://www.instagram.com/rg.parfume/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer hover:brightness-110 active:scale-95 min-h-[52px]"
                        style={{ background: 'linear-gradient(135deg, #FFDC80, #F56040, #C13584)' }}
                    >
                        <Instagram className="w-4 h-4" /> Instagram
                    </a>
                </motion.div>

                <p className="text-white/20 text-xs tracking-widest mt-16 z-10">
                    © {new Date().getFullYear()} RG PERFUME — LUXURY FRAGRANCE BOUTIQUE
                </p>
            </section>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
