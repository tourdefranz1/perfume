# UI Polish - Claude Code Plugin

> [!IMPORTANT]
> **This plugin does NOT replace the Refactoring UI book.**
>
> The [Refactoring UI book](https://www.refactoringui.com/) by Adam Wathan and Steve Schoger is an invaluable resource that every developer and designer should read. This plugin is merely a productivity tool that helps apply some of the book's principles faster during development.
>
> **Why you should buy and read the book:**
> - **Deep understanding** - The book explains the *why* behind every design decision, not just the *what*
> - **Train your eye** - Reading the book helps you develop the ability to critique and improve UIs yourself
> - **Challenge AI output** - With the book's knowledge, you can better evaluate and refine what this plugin produces
> - **Worth every penny** - It's one of the most practical design resources available for developers
>
> **Use this plugin to speed up production, but invest in the book to truly level up your design skills.**
>
> [**Buy Refactoring UI →**](https://www.refactoringui.com/)

A Claude Code plugin that applies professional UI design principles from [Refactoring UI](https://www.refactoringui.com/) using Tailwind CSS and shadcn/ui components.

## Features

### Automatic Skill Activation

The plugin automatically activates when you're working on UI tasks:
- Creating web interfaces or React components
- Building HTML layouts, landing pages, or dashboards
- Styling with Tailwind CSS
- Using shadcn/ui components
- Asking to make something "look better" or "more professional"

### Manual Commands

| Command | Description |
|---------|-------------|
| `/ui-polish:review [file]` | Analyze a component and get design improvement suggestions |
| `/ui-polish:refactor [file]` | Actively refactor a component applying design principles |

## Installation

### Option 1: Install from Marketplace (Recommended)

Add the marketplace and install the plugin:

```bash
/plugin marketplace add opkod-france/claude-skill-refactoring-ui
/plugin install ui-polish@ui-polish-marketplace
```

### Option 2: Clone as plugin

```bash
cd ~/.claude/plugins
git clone https://github.com/opkod-france/claude-skill-refactoring-ui.git ui-polish
```

### Option 3: Add to project

```bash
cd your-project/.claude/plugins
git clone https://github.com/opkod-france/claude-skill-refactoring-ui.git ui-polish
```

### Option 4: Use --plugin-dir flag

```bash
claude --plugin-dir /path/to/ui-polish
```

## Core Principles

1. **Start with functionality, not chrome** - Design the feature first, not the shell
2. **Work in grayscale first** - Add color only after hierarchy is established
3. **Use existing systems** - Tailwind scale + shadcn components, don't reinvent
4. **Hierarchy is everything** - Not all elements deserve equal emphasis

## Reference Guides

| Guide | Topics Covered |
|-------|---------------|
| [shadcn.md](skills/refactoring-ui/references/shadcn.md) | Component patterns, composition, customization |
| [hierarchy.md](skills/refactoring-ui/references/hierarchy.md) | Visual hierarchy, emphasis, contrast |
| [spacing.md](skills/refactoring-ui/references/spacing.md) | Layout, whitespace, sizing |
| [typography.md](skills/refactoring-ui/references/typography.md) | Type scales, fonts, line-height |
| [color.md](skills/refactoring-ui/references/color.md) | Palettes, shades, accessibility |
| [depth.md](skills/refactoring-ui/references/depth.md) | Shadows, elevation, layering |
| [polish.md](skills/refactoring-ui/references/polish.md) | Finishing touches, borders, backgrounds |

## Example Usage

### Automatic (skill triggers on context)

```
> Create a settings page with a form for user preferences
> Build a dashboard card layout
> Make this component look more professional
```

### Manual Review

```
> /ui-polish:review src/components/UserCard.tsx
```

Output includes:
- Summary assessment
- Strengths identified
- Issues with severity and suggested fixes
- Quick wins for highest impact

### Manual Refactor

```
> /ui-polish:refactor src/components/UserCard.tsx
```

Claude will:
- Apply design improvements directly to the file
- Explain key changes made
- Note any trade-offs or decisions needing review

## Anti-Patterns This Plugin Helps Avoid

- Multiple primary buttons in one view
- Arbitrary Tailwind values like `w-[423px]` instead of using the scale
- Grey text on colored backgrounds (use same-hue shades)
- Skipping `Label` components (accessibility issue)
- Overriding shadcn styles instead of using variants
- Inconsistent spacing (not using `space-y-*` or `gap-*`)

## Plugin Structure

```
ui-polish/
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   ├── ui-review.md
│   └── ui-refactor.md
├── skills/
│   └── refactoring-ui/
│       ├── SKILL.md
│       └── references/
│           ├── color.md
│           ├── depth.md
│           ├── hierarchy.md
│           ├── polish.md
│           ├── shadcn.md
│           ├── spacing.md
│           └── typography.md
└── README.md
```

## License

MIT
