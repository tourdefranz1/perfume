import { useState } from 'react';
import { BRANDS } from '../../data/brands';
import { ArrowLeft, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CatalogPageProps {
    initialBrand?: string;
    onBack: () => void;
}

export function CatalogPage({ initialBrand, onBack }: CatalogPageProps) {
    const [activeBrand, setActiveBrand] = useState<string | undefined>(initialBrand);

    const currentBrandDetails = activeBrand
        ? BRANDS.find(b => b.id === activeBrand)
        : undefined;

    return (
        <div className="min-h-screen bg-neutral-50 p-4 md:p-8 safe-pt safe-pb">
            <div className="max-w-7xl mx-auto">
                {/* Navigation & Header */}
                <header className="flex items-center justify-between mb-8 md:mb-12">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium bg-white px-4 py-2 rounded-full shadow-sm hover:shadow"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </button>

                    <h1 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-zinc-900">
                        {currentBrandDetails ? currentBrandDetails.name : 'All Fragrances'}
                    </h1>

                    <button className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 bg-white p-3 rounded-full shadow-sm hover:shadow">
                        <Filter className="w-5 h-5" />
                    </button>
                </header>

                {/* Brand Filters / Tags */}
                <div className="flex overflow-x-auto no-scrollbar gap-3 mb-12 pb-2">
                    <button
                        onClick={() => setActiveBrand(undefined)}
                        className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${!activeBrand
                                ? 'bg-zinc-900 text-white shadow-md'
                                : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                            }`}
                    >
                        All Brands
                    </button>
                    {BRANDS.map(brand => (
                        <button
                            key={brand.id}
                            onClick={() => setActiveBrand(brand.id)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeBrand === brand.id
                                    ? 'bg-zinc-900 text-white shadow-md'
                                    : 'bg-white text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                                }`}
                        >
                            {brand.name}
                        </button>
                    ))}
                </div>

                {/* Dummy Products Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <AnimatePresence>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <motion.div
                                key={`${activeBrand || 'all'}-${item}`}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4, delay: item * 0.05 }}
                                className="bg-white rounded-[24px] p-6 shadow-sm hover:shadow-xl transition-shadow group flex flex-col"
                            >
                                <div className="aspect-square bg-neutral-100 rounded-xl mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-300 font-bold opacity-30 group-hover:scale-110 transition-transform duration-700">
                                        {currentBrandDetails ? currentBrandDetails.name : 'Perfume'}
                                    </div>
                                </div>
                                <div className="text-xs font-bold tracking-wider text-neutral-400 uppercase mb-2">
                                    {currentBrandDetails ? currentBrandDetails.name : 'Luxury Brand'}
                                </div>
                                <h3 className="font-bold text-lg leading-tight mb-2 text-zinc-900 group-hover:text-emerald-600 transition-colors">
                                    Signature Scent {item}
                                </h3>
                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="font-bold text-zinc-900">${(120 + item * 15).toFixed(2)}</span>
                                    <button className="bg-zinc-100 hover:bg-zinc-900 hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center">
                                        +
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
