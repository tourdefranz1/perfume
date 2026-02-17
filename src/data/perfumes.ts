import creedVideo from "../assets/Creed.m4v";
import kilianVideo from "../assets/Kilian.mp4";
import orchidVideo from "../assets/Orchid.mp4";

export interface Perfume {
    id: number;
    name: string;
    description: string;
    usp: string; // Unique Selling Proposition
    colors: {
        bg: string;
        accent: string;
        text: string;
    },
    image: string; // Placeholder or path
    video?: string; // Optional video asset
    videoEndBehavior?: 'reset' | 'freeze'; // Behavior when video ends
    brand?: string; // Manufacturer
}

export const PERFUMES: Perfume[] = [
    {
        id: 1,
        name: "AVENTUS",
        brand: "CREED",
        description: "Исключительный аромат, вдохновленный драматической судьбой императора, прославляющий силу, власть и успех.",
        usp: "фруктовые, древесные",
        colors: {
            bg: "#0a0a0a",
            accent: "#A0A0A0", // Platinum/Silver
            text: "#ffffff",
        },
        image: "https://images.unsplash.com/photo-1594035910387-406691aa9316?q=80&w=2000&auto=format&fit=crop",
        video: creedVideo,
        videoEndBehavior: 'freeze',
    },
    {
        id: 2,
        name: "GOOD GIRL GONE BAD",
        brand: "KILIAN",
        description: "Композиция строится на контрасте невинности и соблазна, где ключевую роль играет османтус с его характерным абрикосовым оттенком.",
        usp: "цветочно-фруктовые",
        colors: {
            bg: "#1a1a1a", // Dark elegance
            accent: "#D4AF37", // Gold
            text: "#ffffff",
        },
        image: "https://images.unsplash.com/photo-1519669576452-9856f7ef5752?q=80&w=2000&auto=format&fit=crop", // Fallback
        video: kilianVideo,
        videoEndBehavior: 'freeze',
    },
    {
        id: 3,
        name: "BLACK ORCHID",
        brand: "TOM FORD",
        description: "Восточно-цветочная композиция с глубоким, темным и провокационным характером.",
        usp: "землистый трюфель, горький шоколад",
        colors: {
            bg: "#0f0518", // Deep Dark Violet
            accent: "#d4af37", // Gold
            text: "#efe5d9", // Warm off-white
        },
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop", // Fallback
        video: orchidVideo,
        videoEndBehavior: 'freeze', // Matches the Kilian vibe, cinematic
    },
];
