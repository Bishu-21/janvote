# VoteFlow (JanVote Guide) - Stitch Design System

## 🎨 Design Identity
**Style**: Modern Neo-Brutalism mixed with Glassmorphism.
**Colors**: 
- Google Blue (#1A73E8)
- Google Green (#34A853)
- Google Yellow (#FBBC05)
- Google Red (#EA4335)
- Background: Clean Off-White (#F8F9FA)
**Typography**: 
- Headings: **Inter** (Extra Bold, Geometric)
- Body: **Roboto** (Medium/Regular)
**Shapes**: 
- Rounded Corners: 20px (cards/buttons)
- Borders: 2px sharp black/navy for Neo-Brutalism.
- Shadows: Bold, non-blurred offset shadows.

---

## 🧭 Core Screen Prompts

### 1. Hero Landing Page
> "Create a high-impact hero section for 'VoteFlow'. Heading: 'Understand Elections. Vote Smarter.' in oversized bold Inter font. Use a dynamic stack of overlapping glassmorphism cards illustrating voting steps (Registration, Documents, Polling). Background is off-white with subtle Google-colored geometric shapes. Add a large pill-shaped CTA 'Start Your Voting Journey' in Google Blue with a neo-brutalism lift shadow."

### 2. Interactive Voter Journey (Multi-step)
> "Design a multi-step interactive flow component. Step 1: 'Select Your State' with a grid of cards using Google-style iconography. Step 2: 'Eligibility Check' using a glassy toggle for 'First-time voter?'. Use a progress stepper at the top with Google Green for completed states. Cards should have a 2px dark border and backdrop-blur-md."

### 3. JanVote AI Assistant
> "Design a modern AI chat interface. The chat window is a glassmorphism container with a thin white border. User messages in Google Blue bubbles, AI (JanVote) messages in soft gray. Include quick-action chips at the bottom like 'How to register?' or 'Required docs?'. Add a subtle mic icon for voice input as requested."

### 4. Election Timeline & Visual Stepper
> "Create a vertical timeline section. Title: 'The Road to Democracy'. Each phase (Registration, Campaigning, Voting, Results) is a card with a vibrant Google-colored badge. Use micro-animations (staggered entry) for the line connecting the steps. Include a Google Yellow highlight for the 'Current Phase'."

### 5. Booth Finder (Map Integration)
> "Design a split-view screen. Left side: A clean list of nearby polling booths with 'Walking Distance' badges in lime green. Right side: A Google Maps integration with custom marker pins in Google Red. The UI should feel like a premium utility tool."

---

## ✨ Component Specifics
- **Buttons**: All buttons should have `hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]` effect.
- **Glass Cards**: Use `bg-white/70 backdrop-blur-lg border border-white/30`.
- **Navigation**: Minimalist sticky header with a centered search bar and a profile avatar in a red/blue ring.
