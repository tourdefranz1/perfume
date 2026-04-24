# Graph Report - .  (2026-04-14)

## Corpus Check
- Corpus is ~4,232 words - fits in a single context window. You may not need a graph.

## Summary
- 36 nodes · 22 edges · 18 communities detected
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Build Toolchain|Build Toolchain]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Hero Slider Logic|Hero Slider Logic]]
- [[_COMMUNITY_Navigation|Navigation]]
- [[_COMMUNITY_Hero Slider Component|Hero Slider Component]]
- [[_COMMUNITY_Catalog Bento Grid|Catalog Bento Grid]]
- [[_COMMUNITY_Newsletter Card|Newsletter Card]]
- [[_COMMUNITY_Discount Banner|Discount Banner]]
- [[_COMMUNITY_All Products Card|All Products Card]]
- [[_COMMUNITY_Brand Bento Card|Brand Bento Card]]
- [[_COMMUNITY_CSS Utility (cn)|CSS Utility (cn)]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Vite Type Defs|Vite Type Defs]]
- [[_COMMUNITY_Catalog Page|Catalog Page]]
- [[_COMMUNITY_Brands Data|Brands Data]]
- [[_COMMUNITY_Perfumes Data|Perfumes Data]]

## God Nodes (most connected - your core abstractions)
1. `Vite + React Template` - 7 edges
2. `Fast Refresh (HMR)` - 3 edges
3. `@vitejs/plugin-react (Babel)` - 3 edges
4. `@vitejs/plugin-react-swc (SWC)` - 3 edges
5. `Vite Logo (Lightning Bolt)` - 2 edges
6. `React Logo (Atom / Blue)` - 2 edges
7. `ESLint TypeScript Config` - 1 edges
8. `React Compiler` - 1 edges

## Surprising Connections (you probably didn't know these)
- `Vite Logo (Lightning Bolt)` --conceptually_related_to--> `Vite + React Template`  [INFERRED]
  public/vite.svg → README.md
- `React Logo (Atom / Blue)` --conceptually_related_to--> `Vite + React Template`  [INFERRED]
  src/assets/react.svg → README.md
- `Vite Logo (Lightning Bolt)` --semantically_similar_to--> `React Logo (Atom / Blue)`  [INFERRED] [semantically similar]
  public/vite.svg → src/assets/react.svg

## Hyperedges (group relationships)
- **Build Toolchain** — readme_vite_react_template, readme_plugin_react_babel, readme_plugin_react_swc, readme_fast_refresh [EXTRACTED 0.92]

## Communities

### Community 0 - "Build Toolchain"
Cohesion: 0.39
Nodes (8): React Logo (Atom / Blue), ESLint TypeScript Config, Fast Refresh (HMR), @vitejs/plugin-react (Babel), @vitejs/plugin-react-swc (SWC), React Compiler, Vite + React Template, Vite Logo (Lightning Bolt)

### Community 1 - "App Entry Point"
Cohesion: 0.67
Nodes (0): 

### Community 2 - "Hero Slider Logic"
Cohesion: 1.0
Nodes (0): 

### Community 3 - "Navigation"
Cohesion: 1.0
Nodes (0): 

### Community 4 - "Hero Slider Component"
Cohesion: 1.0
Nodes (0): 

### Community 5 - "Catalog Bento Grid"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Newsletter Card"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Discount Banner"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "All Products Card"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Brand Bento Card"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "CSS Utility (cn)"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Vite Type Defs"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Catalog Page"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Brands Data"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Perfumes Data"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **2 isolated node(s):** `ESLint TypeScript Config`, `React Compiler`
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Hero Slider Logic`** (2 nodes): `startOnInteraction()`, `Slide.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Navigation`** (2 nodes): `Navigation()`, `Navigation.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Slider Component`** (2 nodes): `HeroSlider()`, `HeroSlider.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Catalog Bento Grid`** (2 nodes): `CatalogBentoGrid()`, `CatalogBentoGrid.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Newsletter Card`** (2 nodes): `NewsletterCard()`, `NewsletterCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Discount Banner`** (2 nodes): `DiscountBannerCard()`, `DiscountBannerCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `All Products Card`** (2 nodes): `AllProductsCard()`, `AllProductsCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Brand Bento Card`** (2 nodes): `BrandBentoCard()`, `BrandBentoCard.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CSS Utility (cn)`** (2 nodes): `utils.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Type Defs`** (1 nodes): `vite-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Catalog Page`** (1 nodes): `CatalogPage.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Brands Data`** (1 nodes): `brands.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Perfumes Data`** (1 nodes): `perfumes.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 2 inferred relationships involving `Vite + React Template` (e.g. with `Vite Logo (Lightning Bolt)` and `React Logo (Atom / Blue)`) actually correct?**
  _`Vite + React Template` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Vite Logo (Lightning Bolt)` (e.g. with `Vite + React Template` and `React Logo (Atom / Blue)`) actually correct?**
  _`Vite Logo (Lightning Bolt)` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `ESLint TypeScript Config`, `React Compiler` to the rest of the system?**
  _2 weakly-connected nodes found - possible documentation gaps or missing edges._