import { AllProductsCard } from './AllProductsCard';
import { BrandBentoCard } from './BrandBentoCard';
import { DiscountBannerCard } from './DiscountBannerCard';
import { NewsletterCard } from './NewsletterCard';
import { BRANDS } from '../../data/brands';

interface CatalogBentoGridProps {
    onSelectBrand: (brandId?: string) => void;
}

export function CatalogBentoGrid({ onSelectBrand }: CatalogBentoGridProps) {
    return (
        <section className="w-full h-full max-w-[1600px] mx-auto px-6 py-2 flex flex-col justify-center items-center">
            {/* 12-Column FLAT Seam-Aligned Bento Grid - NO NESTING */}
            {/* Mobile: 1 Column, Auto height | Desktop: 12 Cols, 12 Rows, Fixed 88vh height */}
            <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4 md:gap-6 w-full max-w-[1392px] h-auto md:h-[88vh]">

                {/* ARCHIVE: Mobile: Full width | Desktop: Top-Left (1-4) */}
                <AllProductsCard
                    onClick={() => onSelectBrand()}
                    className="col-span-1 md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-6 h-[200px] md:h-full"
                />

                {/* TOM FORD: Mobile: Full width | Desktop: Middle-Top (4-10) */}
                <BrandBentoCard
                    brand={BRANDS[0]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-4 md:col-end-10 md:row-start-1 md:row-end-6 h-[200px] md:h-full"
                />

                {/* PROMO: Mobile: Full width | Desktop: Right Pillar (10-13, spans 1-9) */}
                <DiscountBannerCard
                    onClick={() => { }}
                    className="col-span-1 md:col-start-10 md:col-end-13 md:row-start-1 md:row-end-10 h-auto md:h-full"
                />

                {/* CREED: Mobile: Full width | Desktop: Band 2 Left (1-5) */}
                <BrandBentoCard
                    brand={BRANDS[1]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-1 md:col-end-5 md:row-start-6 md:row-end-10 h-[200px] md:h-full"
                />

                {/* CHANEL: Mobile: Full width | Desktop: Band 2 Middle (5-10) */}
                <BrandBentoCard
                    brand={BRANDS[2]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-5 md:col-end-10 md:row-start-6 md:row-end-10 h-[200px] md:h-full"
                />

                {/* BYREDO: Mobile: Full width | Desktop: Band 3 (1-4) */}
                <BrandBentoCard
                    brand={BRANDS[3]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-1 md:col-end-4 md:row-start-10 md:row-end-13 h-[180px] md:h-full"
                />

                {/* DIOR: Mobile: Full width | Desktop: Band 3 (4-7) */}
                <BrandBentoCard
                    brand={BRANDS[4]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-4 md:col-end-7 md:row-start-10 md:row-end-13 h-[180px] md:h-full"
                />

                {/* LE LABO: Mobile: Full width | Desktop: Band 3 (7-10) */}
                <BrandBentoCard
                    brand={BRANDS[5]}
                    onClick={onSelectBrand}
                    className="col-span-1 md:col-start-7 md:col-end-10 md:row-start-10 md:row-end-13 h-[180px] md:h-full"
                />

                {/* NEWSLETTER: Mobile: Full width | Desktop: Bottom-Right Corner (10-13, spans 10-12) */}
                <NewsletterCard className="col-span-1 md:col-start-10 md:col-end-13 md:row-start-10 md:row-end-13 h-auto md:h-full min-h-[180px]" />
            </div>

            {/* Premium Footer Branding - Hidden on small mobile to save space */}
            <div className="hidden sm:block mt-8 opacity-25 text-[10px] font-bold tracking-[0.7em] uppercase text-white/40 pointer-events-none select-none text-center">
                L'Art de la Parfumerie • Paris 2024
            </div>
        </section>
    );
}
