# Tysum Events - Full Event Creation Platform

A beautiful, fully responsive events creation platform built with Next.js, React, Tailwind CSS, and animated with Framer Motion. Features a stunning pink wisteria flower theme with smooth wave animations throughout the application.

## 🌸 Features

### Design & Theme
- **Pink Wisteria Theme**: Beautiful gradient colors inspired by pink wisteria flowers
- **Responsive Design**: Fully optimized for mobile (320px), tablet (768px), and desktop (1920px+)
- **Smooth Animations**: 
  - Wave animations on wisteria flowers
  - Fade in/up animations on page loads
  - Smooth transitions and hover effects
  - Pulse glow effects on interactive elements

### Pages & Functionality
1. **Home Page** - Beautiful hero section with featured events and key features
2. **Events Listing** - Browse all events with search and category filtering
3. **Event Details** - Detailed event information with ticket booking and save functionality
4. **Create Event** - Complete form to create new events with validation
5. **Dashboard** - Event management with statistics and overview
6. **User Profile** - Profile management, saved events, and account settings

### Components
- Navigation bar with responsive mobile menu
- Event cards with hover animations
- Wisteria flower decorative elements
- Hero section with CTA buttons
- Footer with social links and information
- Alert and badge components
- Loading spinner
- Scroll-to-top button

### Icons & Libraries
- **Lucide React** - Beautiful, consistent icons throughout the app
- **Framer Motion** - Smooth animations and transitions
- **Tailwind CSS** - Utility-first CSS for rapid development
- **Zustand** - State management ready for implementation

## 📁 Project Structure

```
app/
├── components/              # Reusable React components
│   ├── Navigation.tsx       # Navigation bar with mobile menu
│   ├── Footer.tsx           # Footer with links and social
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── EventCard.tsx        # Event card component
│   ├── WisteriaFlower.tsx   # Animated wisteria flower
│   ├── FlowerBackground.tsx # Background with decorative flowers
│   ├── Alert.tsx            # Alert component
│   ├── Badge.tsx            # Badge component
│   ├── LoadingSpinner.tsx   # Loading spinner
│   ├── ScrollToTop.tsx      # Scroll to top button
│   └── RootLayoutClient.tsx # Layout wrapper
├── (routes)/                # Route groups
│   ├── events/
│   │   ├── page.tsx         # Events listing page
│   │   ├── create/page.tsx  # Create event page
│   │   └── [id]/page.tsx    # Event details page
│   ├── dashboard/page.tsx   # User dashboard
│   └── profile/page.tsx     # User profile
├── lib/                     # Utilities and helpers
├── globals.css              # Global styles with animations
├── layout.tsx               # Root layout
└── page.tsx                 # Home page
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to project directory:
```bash
cd tysum
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Theme Colors
Edit `app/globals.css` to customize the pink wisteria theme:
```css
:root {
  --color-primary: #b19cd9;        /* Pink Wisteria */
  --color-primary-light: #d8c9e8;
  --color-primary-dark: #9b6fa8;
  --color-secondary: #e6d5f0;
  --color-accent: #f0e6f6;
}
```

### Animations
- Wave animation duration: Modify `flowerWave` keyframes in `globals.css`
- Animation delays: Adjust `animationDelay` values in component props
- Hover effects: Edit Tailwind hover classes in components

### Adding New Events
Mock data is in each page file. To connect to a backend:
1. Replace mock data with API calls
2. Use `zustand` for state management
3. Update component props to accept dynamic data

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px (sm: 640px)
- **Tablet**: 768px - 1024px (md: 768px, lg: 1024px)
- **Desktop**: 1280px+ (xl: 1280px, 2xl: 1536px)

All components are fully responsive with appropriate sizing and spacing.

## 🎯 Key Features by Page

### Home Page
- Hero section with statistics
- Feature showcase (3 key features)
- Featured events grid (4 events)
- CTA section with gradient background

### Events Page
- Search functionality
- Category filtering
- Responsive grid layout
- Event statistics

### Event Details Page
- Full event information
- Pricing and ticket availability
- Save/like functionality
- Share button
- Attendee count

### Create Event Page
- Form validation
- Multiple input types
- Success notification
- Error handling

### Dashboard Page
- Event statistics cards
- My events table (responsive)
- Edit/delete functionality
- Event status tracking

### Profile Page
- Profile information
- Edit profile functionality
- Saved events grid
- User statistics

## 🎪 Components Documentation

### WisteriaFlower
```tsx
<WisteriaFlower 
  size="md"           // 'sm' | 'md' | 'lg' | 'xl'
  delay={0}           // Animation delay in seconds
  opacity={0.8}       // Opacity value 0-1
/>
```

### EventCard
```tsx
<EventCard
  id="1"
  title="Event Name"
  date="April 15, 2024"
  time="10:00 AM"
  location="Central Park, New York"
  attendees={250}
  image="https://..."
  category="Festival"
  index={0}           // For staggered animations
/>
```

## 🎬 Animation Classes

- `.animate-flower-wave` - Wave animation for flowers
- `.animate-float-wave` - Floating wave motion
- `.animate-fade-in-up` - Fade in from below
- `.animate-slide-in-left` - Slide from left
- `.animate-slide-in-right` - Slide from right
- `.animate-pulse-glow` - Pulsing glow effect

## 📦 Dependencies

- `next: 16.2.9` - React framework
- `react: 19.2.4` - UI library
- `react-dom: 19.2.4` - DOM rendering
- `framer-motion: ^11.0.0` - Animation library
- `lucide-react: ^0.344.0` - Icon library
- `tailwindcss: ^4` - CSS framework
- `zustand: ^4.4.0` - State management

## 🔧 Development

### Linting
```bash
npm run lint
```

### Building
```bash
npm run build
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email info@tysum.com or visit [Tysum Global](https://www.facebook.com/TysumGlobal)

---

Made with 💜 and inspired by the beauty of pink wisteria flowers

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
"# TysumEvents" 
