I want you to refine the existing portfolio UI to closely match the layout, spacing, typography, and visual proportions of this reference portfolio:

https://www.crio.do/learn/portfolio/js19920722/#projects

IMPORTANT:
This is a UI refinement task, NOT a redesign.

Do not change:
- existing functionality
- routing
- project data
- project content
- links
- components' behavior
- existing business logic
- API calls
- state management
- project structure unless absolutely necessary

Focus specifically on:
1. Layout
2. Spacing
3. Typography
4. Responsive behavior
5. Alignment
6. Visual hierarchy

FIRST:
Inspect the existing codebase and identify:
- the main portfolio page/component
- global CSS/theme
- typography configuration
- hero section
- skills section
- projects section
- reusable project/card components

Then make the minimum necessary changes to the existing styling/components.

REFERENCE LAYOUT

The page should have a centered content container with a sensible maximum width.

Do NOT allow the portfolio content to occupy only the left side of a large desktop viewport.

Use a structure approximately like:

body
  └── main container
        ├── navigation
        ├── hero
        │     ├── introduction/content
        │     └── profile/avatar
        ├── skills section
        └── projects section

The main container should be centered horizontally.

Use a responsive max-width rather than hard-coding a narrow width.

For example, conceptually:

width: 100%;
max-width: 1200px;
margin-inline: auto;
padding-inline: 24px;

Adjust the exact values based on the existing application and viewport.

--------------------------------------------------
1. TYPOGRAPHY
--------------------------------------------------

The current font looks wrong and inconsistent.

Choose a clean modern sans-serif font appropriate for a professional developer portfolio.

Prefer:

Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

If the project already has a font system, reuse it rather than introducing unnecessary dependencies.

Create a consistent typography hierarchy:

- Hero name: large and strong
- Hero description: readable and relaxed
- Section headings: large and bold
- Project titles: clearly distinguished
- Project dates: smaller and secondary
- Project descriptions: comfortable line-height
- Skill labels: compact but readable
- Navigation: medium weight

Avoid excessive font weights and avoid using browser default typography.

Use consistent line-height.

The overall page should feel like a polished developer portfolio rather than a generic HTML page.

--------------------------------------------------
2. GLOBAL SPACING
--------------------------------------------------

Fix the current spacing aggressively.

Use a consistent spacing scale rather than random margins.

For example:

4px
8px
12px
16px
24px
32px
48px
64px
80px

Do not create large unexplained gaps.

Do not place elements directly against section boundaries.

Each major section should have intentional vertical rhythm.

The approximate structure should feel like:

Navigation
↓
moderate spacing
↓
Hero
↓
large spacing
↓
Skills heading
↓
moderate spacing
↓
Skills grid
↓
large spacing
↓
Projects heading
↓
moderate spacing
↓
Project cards

--------------------------------------------------
3. NAVIGATION
--------------------------------------------------

Keep the existing navigation functionality.

Improve only the visual layout.

The navigation should:
- be horizontally aligned
- have balanced spacing
- not sit awkwardly against the viewport edges
- use consistent typography
- have a clear active state
- remain usable on smaller screens

The navigation should align with the same main container used by the rest of the page.

--------------------------------------------------
4. HERO SECTION
--------------------------------------------------

The hero should use a proper responsive two-column layout on desktop.

Conceptually:

┌───────────────────────────────┬──────────────────┐
│                               │                  │
│  Hi, my name is               │                  │
│  NAME                         │     AVATAR       │
│                               │                  │
│  Description                  │                  │
│                               │                  │
│  Statistics                   │                  │
└───────────────────────────────┴──────────────────┘

The text and avatar should be vertically balanced.

Do not position the avatar using arbitrary absolute pixel offsets.

Use CSS Grid or Flexbox.

The hero should have a sensible minimum/maximum height only if necessary.

On mobile, collapse into:

text
avatar
statistics

Do not allow horizontal overflow.

--------------------------------------------------
5. STATISTICS
--------------------------------------------------

The statistics block should look intentional.

Keep the existing numbers/content.

Improve:
- spacing
- alignment
- typography
- border radius
- internal padding
- responsive behavior

The three statistics should have equal visual weight.

Do not let text wrap awkwardly.

--------------------------------------------------
6. SKILLS SECTION
--------------------------------------------------

The current skills section is too compressed.

Create a proper responsive grid.

Desktop:

6 items per row if the available width allows it.

Tablet:

3–4 items per row.

Mobile:

2 items per row.

Use CSS Grid rather than manually positioning items.

Each skill item should have:

icon
↓
skill name

with consistent vertical spacing.

The icons should have consistent dimensions.

The skill labels should align consistently.

Do not allow one icon/card to become larger simply because its source image has different intrinsic dimensions.

Use an icon wrapper with a fixed responsive size.

--------------------------------------------------
7. SECTION HEADINGS
--------------------------------------------------

Section headings such as:

Skills Acquired
My Projects

should have a consistent visual system.

Use:

heading + horizontal divider

The divider should align with the content container.

Do not let the divider randomly stop at arbitrary positions.

For example:

Skills Acquired ─────────────────────

My Projects ─────────────────────────

The heading and divider should be vertically centered.

--------------------------------------------------
8. PROJECT SECTION
--------------------------------------------------

This is particularly important.

Each project should look like a professional project card rather than a block of text beside an image.

Desktop layout:

┌──────────────────────────────┬──────────────────────┐
│ Project information          │                      │
│                              │      Project image   │
│ Project title                │                      │
│ Date                         │                      │
│ Description                  │                      │
│ Technology tags              │                      │
│ Buttons                      │                      │
└──────────────────────────────┴──────────────────────┘

Use CSS Grid.

The text and image columns should have intentional proportions.

The image should:
- have a consistent aspect ratio
- use object-fit: cover
- have rounded corners
- not stretch
- not overflow its container

Project content should have enough breathing room.

Technology tags should wrap naturally.

Do not allow a long technology list to destroy the card layout.

--------------------------------------------------
9. PROJECT CARD SPACING
--------------------------------------------------

Give each project card clear internal padding.

Use consistent spacing between:

title
date
description
technology tags
buttons

Avoid:

title
date
description
tags

all touching each other.

The card should have visual hierarchy.

If the existing design already has cards, preserve their visual identity and improve their spacing instead of replacing the entire component.

--------------------------------------------------
10. DESKTOP WIDTH
--------------------------------------------------

This is one of the biggest issues visible in the current implementation.

The current page leaves a massive unused area on the right side.

Fix this.

The page should use the available desktop viewport intelligently while still maintaining readable line lengths.

Use a centered max-width container.

Do NOT simply set:

width: 60%;

or:

width: 70%;

Instead use something similar to:

width: min(100% - 48px, 1200px);
margin-inline: auto;

Adjust based on the existing design.

The page should look balanced at:
- 1280px
- 1440px
- 1920px

--------------------------------------------------
11. RESPONSIVENESS
--------------------------------------------------

Check the page at:

320px
375px
768px
1024px
1280px
1440px
1920px

There must be:
- no horizontal scrolling
- no overlapping elements
- no clipped text
- no huge empty areas
- no broken project cards
- no awkward skill wrapping

Use responsive CSS rather than separate duplicated layouts.

--------------------------------------------------
12. VISUAL STYLE
--------------------------------------------------

The reference has a clean developer-portfolio aesthetic.

Maintain the existing application's color palette where possible.

Do not introduce:
- gradients everywhere
- excessive shadows
- excessive animations
- glassmorphism
- unnecessary decorative elements
- random colors
- excessive rounded cards

The goal is polish and alignment, not adding more visual effects.

--------------------------------------------------
13. CODE QUALITY
--------------------------------------------------

Follow the existing project's architecture.

Prefer:
- CSS Grid
- Flexbox
- CSS variables
- reusable layout classes/components
- responsive CSS
- semantic HTML

Avoid:
- excessive absolute positioning
- magic pixel offsets
- duplicated CSS
- inline styles unless already established by the project
- unnecessary dependencies
- changing working logic

If existing CSS is messy, refactor only the relevant portfolio styles.

Do not rewrite the entire application.

--------------------------------------------------
14. IMPORTANT WORKFLOW
--------------------------------------------------

Before making changes:

1. Inspect the existing implementation.
2. Identify why the page is currently constrained to the left side.
3. Identify the current font source.
4. Identify the current container/layout system.
5. Identify the current project card structure.
6. Identify the current skills grid.

Then make the changes.

After implementation:

1. Run the application.
2. Check the page visually.
3. Check desktop at 1440px and 1920px.
4. Check mobile at 375px.
5. Fix spacing/alignment issues you observe.
6. Check for horizontal overflow.
7. Run the project's existing lint/build/test commands.
8. Do not modify unrelated functionality.

The final result should feel structurally and visually close to the referenced Crio portfolio, while preserving my existing content and application architecture.