export type Brand = {
    id: string;
    name: string;
    color: string;
    textColor: string;
    colSpan: number;
    rowSpan: number;
    image?: string;
    type: 'image' | 'text-accent' | 'minimal' | 'vertical';
    accent?: string;
    description?: string;
    logoStyle?: string; // CSS for simulating logo
    logoFont?: string;  // specific font family if needed
};

export const BRANDS: Brand[] = [
    {
        id: 'tom-ford',
        name: 'TOM FORD',
        color: 'bg-zinc-900/40',
        textColor: 'text-white',
        colSpan: 4,
        rowSpan: 4,
        type: 'image',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=1200',
        description: 'Private Blend',
        logoFont: 'font-display',
        logoStyle: 'tracking-[0.3em] font-black italic'
    },
    {
        id: 'creed',
        name: 'CREED',
        color: 'bg-stone-900/40',
        textColor: 'text-white',
        colSpan: 4,
        rowSpan: 4,
        type: 'vertical',
        accent: 'text-stone-400',
        description: '1760 Heritage',
        logoFont: 'font-serif',
        logoStyle: 'tracking-[0.1em] font-light italic'
    },
    {
        id: 'chanel',
        name: 'CHANEL',
        color: 'bg-white/5',
        textColor: 'text-white',
        colSpan: 4,
        rowSpan: 4,
        type: 'minimal',
        accent: 'bg-white/10',
        description: 'Paris Essentials',
        logoFont: 'font-sans',
        logoStyle: 'tracking-[0.5em] font-black'
    },
    {
        id: 'byredo',
        name: 'BYREDO',
        color: 'bg-emerald-950/40',
        textColor: 'text-emerald-100',
        colSpan: 4,
        rowSpan: 4,
        type: 'text-accent',
        accent: 'text-emerald-500',
        description: 'Art of Scents',
        logoFont: 'font-display',
        logoStyle: 'tracking-[0.2em] font-bold'
    },
    {
        id: 'dior',
        name: 'Dior',
        color: 'bg-zinc-900/40',
        textColor: 'text-white',
        colSpan: 4,
        rowSpan: 4,
        type: 'image',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=1200',
        description: 'Grands Parfums',
        logoFont: 'font-serif',
        logoStyle: 'tracking-tight font-medium italic'
    },
    {
        id: 'le-labo',
        name: 'LE LABO',
        color: 'bg-amber-950/20',
        textColor: 'text-amber-100/80',
        colSpan: 4,
        rowSpan: 4,
        type: 'minimal',
        description: 'Fresh Formulations',
        logoFont: 'font-mono',
        logoStyle: 'tracking-normal font-normal'
    },
];
