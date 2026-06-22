# Routes & Pages Reference

## All Routes Available

### Public Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with hero and featured events |
| `/events` | `app/(routes)/events/page.tsx` | Browse all events with search & filter |
| `/events/[id]` | `app/(routes)/events/[id]/page.tsx` | Event details page |
| `/events/create` | `app/(routes)/events/create/page.tsx` | Create new event form |
| `/dashboard` | `app/(routes)/dashboard/page.tsx` | User dashboard with statistics |
| `/profile` | `app/(routes)/profile/page.tsx` | User profile and settings |

---

## Navigation Links

### Header Navigation
- Home → `/`
- Events → `/events`
- Dashboard → `/dashboard`
- Create Event (Button) → `/events/create`
- Profile (Icon) → `/profile`

### Footer Navigation
- Quick Links Section:
  - Home → `/`
  - Browse Events → `/events`
  - Create Event → `/events/create`
  - Dashboard → `/dashboard`

---

## Dynamic Routes

### Event Details Route
- Pattern: `/events/[id]`
- Example: `/events/1`, `/events/2`, `/events/3`
- Parameters: `id` (event ID)
- Sample IDs available: 1, 2, 3, 4, 5, 6, 7, 8

---

## Page Features by Route

### Home (`/`)
Features:
- Hero section with statistics
- 3 feature showcase cards
- 4 featured events display
- CTA section
- Smooth animations throughout

### Events (`/events`)
Features:
- Search bar with live search
- 6 category filters
- 8 sample events displayed
- Responsive grid layout
- Event statistics
- Empty state handling

### Event Details (`/events/[id]`)
Features:
- Full event information
- Large hero image
- Key event details (date, time, location)
- Ticket pricing and availability
- Get Tickets button
- Save/Like functionality
- Share button
- Attendee counter
- Event information box

### Create Event (`/events/create`)
Features:
- 12-field form
- Full form validation
- Success notification
- Error messages with icons
- Date/time pickers
- Category dropdown
- Address fields
- Description textarea
- Submit and cancel buttons

### Dashboard (`/dashboard`)
Features:
- 4 statistics cards
- My Events table
- Desktop and mobile views
- Edit/Delete buttons
- Event status badges
- Attendee information
- View counter
- Empty state with CTA

### Profile (`/profile`)
Features:
- Profile header with image
- User information display
- Edit profile mode
- User statistics cards
- Saved events grid
- Contact information
- Logout button

---

## Component Location Map

```
Navigation Components:
  └── Navigation.tsx (sticky header)
  └── Footer.tsx (page footer)
  └── ScrollToTop.tsx (floating button)

Page Components:
  └── HeroSection.tsx (home page)
  └── EventCard.tsx (events list & saved events)
  └── FlowerBackground.tsx (decorative)

Utility Components:
  └── Alert.tsx (notifications)
  └── Badge.tsx (status badges)
  └── LoadingSpinner.tsx (loading states)
  └── WisteriaFlower.tsx (decoration)

Layout:
  └── RootLayoutClient.tsx (wrapper)
```

---

## Key Features by Page

### Search & Filter
- **Events Page**: Real-time search + category filter
- **Works by**: Event title, location, category
- **Categories**: Festival, Wedding, Corporate, Networking, Social, Charity, Conference, Workshop, Party, Concert

### Form Validation
- **Create Event Page**: All required fields validated
- **Profile Page**: Edit form with input validation
- **Event Search**: Case-insensitive search

### Responsive Breakpoints
All pages respond to:
- 320px (mobile)
- 640px (sm)
- 768px (md/tablet)
- 1024px (lg)
- 1280px (xl/desktop)

---

## Data Flow

### Home Page
1. Load featured events from mock data
2. Display features section
3. Show CTA section

### Events Page
1. Display all 8 events
2. Filter by category when selected
3. Search when text entered
4. Show results count

### Event Details
1. Get ID from URL params
2. Fetch event details from mock data
3. Display full event information
4. Handle attendee count updates

### Create Event
1. Initialize form with empty values
2. Validate on submit
3. Show success message
4. Reset form

### Dashboard
1. Load user's events
2. Calculate statistics
3. Allow edit/delete actions
4. Update event count

### Profile
1. Load user profile data
2. Display profile information
3. Show saved events
4. Allow profile editing

---

## URL Examples

### Home Page
- `http://localhost:3000/`

### Events Pages
- `http://localhost:3000/events`
- `http://localhost:3000/events/1`
- `http://localhost:3000/events/2`
- `http://localhost:3000/events/create`

### User Pages
- `http://localhost:3000/dashboard`
- `http://localhost:3000/profile`

---

## Navigation Methods

### From Home
- Click "View All Events" → `/events`
- Click "Create Event Now" → `/events/create`
- Click "Get Started" (CTA) → `/events/create`
- Click Featured event card → `/events/[id]`

### From Events
- Click event card → `/events/[id]`
- Click "View All Events" button → `/events`

### From Event Details
- Click "Back" button → `/events`
- Click "Get Tickets" → Update page

### From Dashboard
- Click event card to view details
- Click edit/delete buttons
- Click "Create New Event" → `/events/create`

### From Profile
- Edit profile button
- Click saved event card → `/events/[id]`
- Logout button

---

## API Ready Structure

The application is ready to connect to a backend API:
- Replace mock data arrays with API calls
- Use Zustand for state management
- Implement authentication routes
- Connect to event database

---

## Best Practices Implemented

✅ Component composition
✅ Props drilling avoided
✅ Responsive design mobile-first
✅ Semantic HTML
✅ Accessible color contrasts
✅ Keyboard navigation
✅ Error boundaries ready
✅ Performance optimized

---

## Testing Routes

### Desktop (1920px)
- All routes display with 4-column grids
- Full navigation visible
- Optimal spacing

### Tablet (768px)
- Routes display with 2-column grids
- Mobile menu visible
- Optimized for touch

### Mobile (375px)
- Routes display with 1-column layout
- Hamburger menu active
- Full-width layout

---

## Quick Navigation

| Goal | Route |
|------|-------|
| View home | `/` |
| Browse events | `/events` |
| View event | `/events/1` |
| Create event | `/events/create` |
| View dashboard | `/dashboard` |
| View profile | `/profile` |

---

Last Updated: 2024
Made with 💜
