import { useState } from "react";
import { HeroSlider } from "./components/HeroSlider";
import { CatalogBentoGrid } from "./components/catalog/CatalogBentoGrid";
import { CatalogPage } from "./components/pages/CatalogPage";

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'categories' | 'catalog'>('home');
  const [selectedBrand, setSelectedBrand] = useState<string | undefined>();

  const handleSelectBrand = (brandId?: string) => {
    setSelectedBrand(brandId);
    setCurrentView('catalog');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedBrand(undefined);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoToCategories = () => {
    setCurrentView('categories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'catalog') {
    return <CatalogPage initialBrand={selectedBrand} onBack={handleBackToHome} />;
  }

  if (currentView === 'categories') {
    return (
      <div className="h-screen w-full bg-[#0a0a0a] text-white flex flex-col overflow-hidden">
        {/* Minimal Nav */}
        <nav className="flex items-center justify-between px-8 py-6 w-full max-w-[1600px] mx-auto z-50">
          <div className="text-xl font-display font-black tracking-widest">PERFUME</div>
          <button
            onClick={handleBackToHome}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-all duration-300 font-bold text-[10px] tracking-[0.2em]"
          >
            CLOSE
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute w-full h-[2px] bg-zinc-800 group-hover:bg-white rotate-45 transition-colors" />
              <span className="absolute w-full h-[2px] bg-zinc-800 group-hover:bg-white -rotate-45 transition-colors" />
            </div>
          </button>
        </nav>

        <main className="flex-1 w-full overflow-hidden">
          <CatalogBentoGrid onSelectBrand={handleSelectBrand} />
        </main>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <HeroSlider onCollectionsClick={handleGoToCategories} />
    </main>
  );
}

export default App;
