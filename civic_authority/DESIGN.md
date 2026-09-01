---
name: Civic Authority
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#444651'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#757682'
  outline-variant: '#c5c5d3'
  surface-tint: '#4059aa'
  primary: '#00236f'
  on-primary: '#ffffff'
  primary-container: '#1e3a8a'
  on-primary-container: '#90a8ff'
  inverse-primary: '#b6c4ff'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#00311f'
  on-tertiary: '#ffffff'
  tertiary-container: '#004a31'
  on-tertiary-container: '#27c38a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#00164e'
  on-primary-fixed-variant: '#264191'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

This design system is built on the pillars of transparency, reliability, and accessibility. It serves as a bridge between the citizen and the state, requiring a visual language that feels both authoritative and approachable. 

The aesthetic follows a **Modern Corporate** direction, emphasizing clarity over decoration. It utilizes high-contrast typography, a structured layout, and a restrained use of color to ensure that information density remains manageable and navigation remains intuitive. The interface avoids ephemeral trends in favor of a timeless, institutional feel that inspires confidence in the platform's ability to handle critical civic matters.

## Colors

The palette is anchored by a deep Navy Primary (`#1E3A8A`), chosen for its historical association with trust and governance. 

- **Primary:** Used for main actions, headers, and active states.
- **Secondary:** A lighter blue for interactive elements like links and secondary buttons.
- **Success (Tertiary):** A professional emerald green used specifically for status indicators (e.g., "Resolved").
- **Neutral:** A systematic range of grays used for borders, secondary text, and iconography.
- **Background:** A very light off-white (`#F9FAFB`) to reduce eye strain while maintaining a clean appearance.

## Typography

Inter is utilized as the sole typeface to ensure a unified, systematic appearance. The hierarchy is strictly enforced:

- **Weighting:** Use `700` for primary page headers and `600` for section titles. `400` is reserved for all long-form body content to ensure legibility.
- **Readability:** Line heights are slightly generous (1.5x for body text) to accommodate users of all ages and visual abilities.
- **Labels:** Small labels use a semi-bold weight and slight tracking to distinguish them from standard body text.

## Layout & Spacing

The layout uses a **Fixed Grid** model for desktop to ensure content remains centered and readable on large monitors.

- **Grid System:** A 12-column grid with a 24px gutter.
- **Padding Logic:** Vertical spacing between sections should use `xl` (40px) to provide clear visual separation between unrelated content blocks.
- **Mobile Adaptation:** On mobile devices, margins shrink to 16px. Typography scales down slightly, and all multi-column layouts stack vertically.
- **Sidebars:** Dashboards utilize a fixed 280px left-hand sidebar for navigation, providing immediate access to grievance tracking and profile settings.

## Elevation & Depth

To maintain a professional and "flat" aesthetic, depth is communicated through **Tonal Layers** and extremely subtle shadows rather than heavy blurs.

- **Level 0 (Background):** `#F9FAFB` – The base foundation.
- **Level 1 (Surface):** `#FFFFFF` – Used for cards, inputs, and the main content area. Includes a 1px border of `#E5E7EB`.
- **Level 2 (Interaction):** When an element is hovered or needs slight emphasis, apply a very soft shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`.
- **Outlines:** Use a subtle border for all container elements to ensure boundaries are clear even on low-quality displays.

## Shapes

The design system employs a **Rounded** shape language. 

- **Components:** Buttons, input fields, and cards use a consistent 8px (`0.5rem`) corner radius. This softens the institutional feel without appearing overly casual or "app-like."
- **Icons:** Icons should feature rounded caps and corners to match the UI's geometry.
- **Tags:** Status tags (e.g., "Pending") may use a slightly higher radius (up to 16px) to distinguish them from interactive buttons.

## Components

### Buttons
- **Primary:** Solid `#1E3A8A` with white text. 8px radius.
- **Secondary:** White background with a `#D1D5DB` border and `#111827` text.
- **States:** On hover, primary buttons darken by 10%. On focus, a 2px offset ring of the primary color must be visible for accessibility.

### Input Fields
- **Style:** 1px solid border (`#D1D5DB`) with a white background.
- **Focus:** Border changes to `#3B82F6` with a very soft blue glow (3px spread).
- **Labels:** Always placed above the field in `label-md` style.

### Cards
- **Structure:** White background, 1px border of `#E5E7EB`, and 24px internal padding.
- **Use Case:** Used for grievance summaries in a list view or as containers for dashboard widgets.

### Status Chips
- **Draft:** Gray background with dark gray text.
- **In-Progress:** Blue background with dark blue text.
- **Resolved:** Green background with dark green text.
- **Style:** Small, semi-bold text, high contrast for readability.

### Empty States
- **Visuals:** Use simple, monochromatic line illustrations. 
- **Content:** Center-aligned with a `headline-md` title, a `body-md` description of how to proceed, and a clear Primary CTA button (e.g., "File New Grievance").