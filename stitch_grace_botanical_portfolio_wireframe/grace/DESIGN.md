---
name: Grace
colors:
  surface: '#faf8ff'
  surface-dim: '#cdd9ff'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d9e2ff'
  on-surface: '#001945'
  on-surface-variant: '#534246'
  inverse-surface: '#002d6e'
  inverse-on-surface: '#eef0ff'
  outline: '#867276'
  outline-variant: '#d8c1c5'
  surface-tint: '#96435c'
  primary: '#96435c'
  on-primary: '#ffffff'
  primary-container: '#f994af'
  on-primary-container: '#752942'
  inverse-primary: '#ffb1c4'
  secondary: '#3b5ca3'
  on-secondary: '#ffffff'
  secondary-container: '#92b2ff'
  on-secondary-container: '#1e4288'
  tertiary: '#605e58'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5b2ab'
  on-tertiary-container: '#46453f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e0'
  primary-fixed-dim: '#ffb1c4'
  on-primary-fixed: '#3f001a'
  on-primary-fixed-variant: '#782c45'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b0c6ff'
  on-secondary-fixed: '#001945'
  on-secondary-fixed-variant: '#1f4489'
  tertiary-fixed: '#e6e2da'
  tertiary-fixed-dim: '#c9c6bf'
  on-tertiary-fixed: '#1c1c17'
  on-tertiary-fixed-variant: '#484741'
  background: '#faf8ff'
  on-background: '#001945'
  surface-variant: '#d9e2ff'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 90px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 40px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system transitions from a literal forest-inspired aesthetic to a **Sophisticated Playful Botanical** narrative. It targets a high-end creative audience, blending the elegance of traditional editorial design with a vibrant, modern energy. 

The visual style is a hybrid of **Minimalism** and **Editorial Elegance**. It utilizes expansive white space (rendered in warm alabaster), high-contrast serif typography, and organic silhouettes. The emotional response is one of curated warmth, creative confidence, and refined whimsy. The "Grace" ethos is maintained through fluid motion, arched framing, and a rejection of rigid, sharp-edged industrialism.

## Colors
The palette abandons organic greens for a high-contrast, emotive pairing:
- **Primary (Soft Vibrant Pink):** Used for expressive accents, primary calls to action, and organic decorative flourishes.
- **Secondary/Foreground (Deep Royal Blue):** Replaces black for all typography, iconography, and structural borders to maintain a sophisticated, ink-like quality.
- **Surface (Warm Sand/Alabaster):** The foundation for all layouts, providing a softer, more premium feel than pure white.
- **Interactive States:** Use a 10% opacity overlay of the Deep Royal Blue for hover states on pink elements, and a 10% opacity pink tint for hover states on light surfaces.

## Typography
The typography system relies on the interplay between the dramatic, high-contrast strokes of **Playfair Display** and the clean, approachable geometry of **Plus Jakarta Sans**.

Headlines should utilize the Deep Royal Blue to anchor the page. Display styles are reserved for portfolio headers and hero sections, often paired with wide tracking or italicized variants for emphasis. Body copy remains highly legible in the secondary blue, avoiding pure black to maintain the tonal harmony of the warm sand background.

## Layout & Spacing
The design system employs a **Fixed Grid** on desktop and a **Fluid Grid** on mobile. 
- **Desktop:** A 12-column grid with a 1280px max-width, using generous 64px external margins to evoke a luxury magazine feel.
- **Rhythm:** An 8px linear scale governs all padding and margins, ensuring vertical rhythm.
- **Botany-Inspired Asymmetry:** While elements sit on the grid, images and decorative containers should frequently use asymmetric "arch" masks (top-rounded only) to break the rigidity of the layout.

## Elevation & Depth
This design system avoids traditional heavy shadows in favor of **Tonal Layers** and **Soft Ambient Tints**.
- **Surface Elevation:** Depth is created by placing #F994AF (Pink) or subtle 5% blue-tinted white cards on the #F4F0E8 background.
- **Shadows:** When necessary for interactivity (e.g., hovering a card), use an ultra-diffused shadow: `0 20px 40px rgba(49, 83, 153, 0.08)`. The shadow color must be derived from the Deep Royal Blue, never neutral grey.
- **Outlines:** Use 1px solid borders in the Deep Royal Blue at 15% opacity for structural definition on input fields and secondary buttons.

## Shapes
The shape language is defined by **Organic Curves**. 
- **Standard Radius:** 0.5rem (8px) for small components like buttons and tags.
- **Large Radius:** 1.5rem (24px) for cards and modals.
- **The Signature Arch:** Use a "Full Rounded" (1000px or 50% width) top-border radius on hero images and featured portfolio cards to create a botanical conservatory or window-like effect.

## Components
- **Primary Buttons:** Solid Soft Vibrant Pink (#F994AF) with Deep Royal Blue (#315399) text. Shape is pill-styled or 8px rounded.
- **Secondary Buttons:** Ghost style with a 1.5px Deep Royal Blue border and matching text.
- **Portfolio Cards:** Use the signature arch shape for the image container. Text is left-aligned below the image in Deep Royal Blue.
- **Input Fields:** Background matches the surface (#F4F0E8) but with a bottom-only 2px border in Deep Royal Blue at 20% opacity. Focus state transitions the border to 100% opacity Pink.
- **Chips/Labels:** Small, capsule-shaped tags in 10% opacity Pink background with 100% Pink text for high-contrast visibility against the alabaster surface.
- **Navigation Links:** Playfair Display Bold, utilizing a 3px Pink underline that expands on hover.