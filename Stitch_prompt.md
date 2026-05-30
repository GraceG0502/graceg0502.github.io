# Personal Website Wireframe Prompt for Stitch

## Overview
Create a personal portfolio website wireframe for Grace with a botanical/organic serif design aesthetic. The design should be clean, minimalist, and sophisticated with organic softness and natural warmth.

**IMPORTANT**: This is a wireframe/prototype. Do NOT include actual images (photos, avatars, illustrations). Use placeholder boxes or labels where images would go.

---

## Site Architecture

### Pages Structure
1. **Home** - Landing page with hero section
2. **About** - Personal introduction and background
3. **Projects** - Portfolio/work showcase
4. **Contact** - Contact information and methods

---

## Page-by-Page Specifications

### 1. HOME PAGE

#### Header/Navigation (Fixed at top)
- **Logo**: Large letter "G" in the top left corner
  - Style: Playfair Display serif font
  - Color: Deep Forest Green (#2D3A31)
  - Size: Prominent but elegant
- **Navigation Menu**: Horizontal menu on the right
  - Items: "Home" | "About" | "Contact" | "Projects"
  - Typography: Source Sans 3, uppercase, wide tracking
  - Color: Deep Forest Green (#2D3A31)
  - Hover: Terracotta (#C27B66)

#### Hero Section (Main Content Area)
- **Primary Headline**: 
  - Text: "HI HERE IS GRACE"
  - Typography: Playfair Display, text-7xl to text-8xl
  - Color: Deep Forest Green (#2D3A31)
  - Positioning: Center-aligned or slightly off-center for organic feel
  - Style: Consider italicizing "HERE IS" for emphasis
- **Call-to-Action Button** (Below headline):
  - Text: "CONTACT ME"
  - Style: Pill-shaped (rounded-full)
  - Background: Sage Green (#8C9A84) or Deep Forest Green
  - Text: White
  - Size: Large, comfortable click target
  - Hover: Subtle lift with terracotta accent

#### Visual Style
- Background: Warm Alabaster (#F9F8F4)
- Paper grain texture overlay (subtle, opacity ~0.015)
- Generous whitespace around all elements
- Soft, diffused shadows where needed

---

### 2. ABOUT PAGE

#### Header
- Same fixed navigation as Home page

#### Content Area
- **Section Title**: "About Me" or "Get to Know Grace"
  - Typography: Playfair Display, text-6xl
  - Color: Deep Forest Green (#2D3A31)
- **Content Layout**: 
  - Free-form layout with generous spacing
  - Card-based design with rounded-3xl corners
  - Background: White (#FFFFFF) or Soft Clay (#F2F0EB)
  - Suggested sections (use placeholder text):
    - Personal introduction paragraph
    - Skills or expertise area
    - Background or journey
  - Text: Source Sans 3, text-lg
  - Line height: Generous for readability

#### Visual Elements
- Soft shadows on cards: 0 10px 15px -3px rgba(45, 58, 49, 0.05)
- Staggered card layout (if using multiple cards)
- Decorative elements: Fine SVG lines or organic shapes

---

### 3. PROJECTS PAGE

#### Header
- Same fixed navigation as Home page

#### Content Grid
- **Section Title**: "My Work" or "Selected Projects"
  - Typography: Playfair Display, text-6xl
  - Color: Deep Forest Green (#2D3A31)
- **Project Cards Grid**:
  - Layout: 1 column mobile, 3 columns desktop (grid-cols-1 md:grid-cols-3)
  - Gap: gap-8 or gap-12
  - Each card contains:
    - **[IMAGE PLACEHOLDER]**: Label as "Illustration Design Work"
      - Shape: Rounded-t-full (arch top) or rounded-3xl
      - Aspect ratio: 4:3 or square
      - Background: Light Stone (#E6E2DA) with text "Image Placeholder"
    - **Project Title**: 
      - Typography: Playfair Display, text-2xl
      - Color: Deep Forest Green
    - **Project Description**: 
      - Short placeholder text (2-3 lines)
      - Typography: Source Sans 3, text-base
      - Color: Muted (#6B7F75)
    - **View Project Link/Button**:
      - Style: Text link with arrow or small secondary button
      - Color: Sage Green (#8C9A84)
- **Card Styling**:
  - Background: White
  - Border-radius: rounded-3xl
  - Hover: Lift effect (-translate-y-2)
  - Shadow: Soft, increases on hover
  - Stagger: Apply translate-y-12 to every second card

---

### 4. CONTACT PAGE

#### Header
- Same fixed navigation as Home page

#### Content Area (Center-aligned)
- **Section Title**: "Let's Connect" or "Get in Touch"
  - Typography: Playfair Display, text-6xl
  - Color: Deep Forest Green (#2D3A31)
- **Profile Section**:
  - **[AVATAR PLACEHOLDER]**:
    - Label: "Profile Photo"
    - Shape: Circle (rounded-full)
    - Size: Medium (150px - 200px diameter)
    - Background: Soft Clay (#DCCFC2)
    - Center-aligned
- **Contact Methods** (Below avatar):
  - Layout: Vertical stack or horizontal row
  - Spacing: gap-6
  - Each method card:
    - **Icon placeholder** + **Label**
    - Items:
      - "WeChat" (with icon placeholder)
      - "GitHub" (with icon placeholder)
      - Optional: "Email" (with icon placeholder)
    - Style: 
      - Background: White or Soft Clay
      - Border: 1px solid Stone (#E6E2DA)
      - Rounded: rounded-2xl
      - Padding: p-6
      - Hover: Subtle lift
- **Contact Form** (Optional):
  - Fields: Name, Email, Message
  - Input style: Underlined or pill-shaped with light background
  - Submit button: Primary button style (pill-shaped, Deep Forest Green)

---

## Global Design Specifications

### Color Palette
- **Background**: #F9F8F4 (Warm Alabaster)
- **Foreground/Text**: #2D3A31 (Deep Forest Green)
- **Primary/Accent**: #8C9A84 (Sage Green)
- **Secondary**: #DCCFC2 (Soft Clay)
- **Border**: #E6E2DA (Stone)
- **Interactive/Hover**: #C27B66 (Terracotta)

### Typography System
- **Headings**: Playfair Display (Google Font)
  - Weights: 600/700
  - Sizes: text-6xl to text-8xl for page titles, text-2xl to text-4xl for subheadings
  - Italics for emphasis
- **Body Text**: Source Sans 3 (Google Font)
  - Weights: 400/500
  - Size: text-lg for main content, text-base for secondary
  - Line height: Generous (leading-relaxed)
- **Buttons/Labels**: Source Sans 3
  - Uppercase, tracking-widest
  - Size: text-sm

### Shape & Radius
- **Cards**: rounded-3xl (24px)
- **Buttons**: rounded-full (pill shape)
- **Image placeholders**: rounded-t-full (arch) or rounded-3xl
- **Avatars**: rounded-full

### Spacing & Layout
- **Container**: max-w-7xl, center-aligned
- **Section Padding**: py-24 desktop, py-16 mobile
- **Grid Gaps**: gap-12 or gap-16
- **Card Padding**: p-8 or p-10
- **Generous whitespace**: Let elements breathe

### Effects & Shadows
- **Shadows**: Soft, diffused
  - Default: 0 4px 6px -1px rgba(45, 58, 49, 0.05)
  - Medium: 0 10px 15px -3px rgba(45, 58, 49, 0.05)
  - Hover: 0 20px 40px -10px rgba(45, 58, 49, 0.1)
- **Paper Texture**: Fixed overlay with subtle grain (opacity-[0.015])
- **Hover Animations**:
  - Cards: -translate-y-1 or -translate-y-2
  - Buttons: Slight darkening (bg-opacity-90)
  - Duration: duration-500 to duration-700

### Navigation Behavior
- **Fixed Header**: Stays at top on scroll
- **Page Transitions**: Fade in/out (opacity transitions)
- **Scroll**: Smooth scroll behavior
- **Hover States**: Terracotta color shift (#C27B66)

### Responsive Breakpoints
- **Mobile**: Single column layouts, smaller typography
- **Tablet (md)**: 2-3 column grids, medium typography
- **Desktop (lg+)**: Full 3-4 column grids, large typography
- **Navigation**: Horizontal menu on desktop, hamburger menu on mobile

---

## Design Philosophy Reminders

1. **Organic Softness**: Everything flows, no hard angles. Rounded corners everywhere.
2. **Typographic Elegance**: Let the serif headlines be the star. Scale them large.
3. **Earthbound Palette**: Muted, sophisticated, natural colors only.
4. **Tactile Texture**: Paper grain overlay is mandatory for warmth.
5. **Breathing Space**: Generous padding and gaps. Never crowd elements.
6. **Intentional Movement**: Slow, graceful animations with ease-out curves.
7. **Staggered Rhythm**: Break the grid with subtle vertical translations.
8. **No Generic Boxes**: Use arches, organic shapes, and overlapping elements.

---

## Wireframe Requirements

- Create low to medium fidelity wireframes
- Use placeholder text like "Lorem ipsum" or descriptive labels
- Mark image areas with boxes labeled "[IMAGE PLACEHOLDER]" or "[AVATAR PLACEHOLDER]"
- Show layout structure, spacing, and hierarchy clearly
- Include all navigation elements and interactive components
- Demonstrate responsive behavior if possible
- Maintain the botanical/organic aesthetic in shapes and spacing even in wireframe form

---

## Notes for Stitch

- Focus on layout, structure, and component placement
- Emphasize the organic, rounded, flowing nature of the design
- Show generous whitespace and breathing room
- Indicate where animations/transitions would occur
- Mark all clickable/interactive elements clearly
- Use the specified color palette for wireframe elements
- Demonstrate the staggered grid layout in project cards
- Show the arch-shaped image placeholders where applicable
