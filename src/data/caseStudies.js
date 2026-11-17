// Case study content. Edit text here to update the portfolio.
// Note: Spice Route is a demo project built to showcase skills.
export const caseStudies = [
  {
    id: 'spice-route',
    title: 'Spice Route Restaurant',
    category: 'Restaurant Website',
    summary: 'A modern restaurant website with a digital menu, cart, WhatsApp ordering and table reservations.',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    live: 'https://spice-route-restaurant-tan.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/spice-route-restaurant',
    problem:
      'Most local restaurants rely on printed menus and phone calls. Guests cannot browse dishes easily, and the restaurant misses online orders and reservations.',
    goals: [
      'Show a clear, attractive digital menu on any device',
      'Let guests order through WhatsApp with one click',
      'Accept table reservations with proper validation',
      'Load fast and look premium on mobile',
    ],
    approach:
      'I built a single-page React app with Vite. Menu data lives in one file, so the owner can change dishes and prices without touching the layout. Framer Motion adds smooth entrance and hover animations.',
    features: [
      'Category tabs and live search with animated cards',
      'Cart with quantity controls and a WhatsApp order message',
      'Reservation form with validation and a success message',
      'Gallery with a full-screen lightbox and keyboard controls',
    ],
    challenges: [
      {
        problem: 'Dish images were not loading consistently during development.',
        solution: 'I tested several image sources and used a stable CDN with clear sizing, so cards keep a consistent layout.',
      },
      {
        problem: 'The cart needed to stay in sync with the menu and the floating button.',
        solution: 'Cart state lives in the top-level App component and is passed down, so every part of the page sees the same data.',
      },
    ],
    results: [
      'Complete single-page website with 7 menu items, 4 categories and a working reservation flow',
      'Fully responsive layout tested on mobile and desktop',
      'Deployed on Vercel with a live link and public source code',
    ],
  },
  {
    id: 'glow-studio',
    title: 'Glow Studio Booking',
    category: 'Booking System',
    summary: 'An online booking system for a salon with live time slots, overlap protection and an admin dashboard.',
    tags: ['JavaScript', 'LocalStorage', 'Admin Panel'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    live: 'https://glow-studio-booking-mu.vercel.app/',
    code: 'https://github.com/Daniyal-Dynihmind/glow-studio-booking',
    problem:
      'Salons often manage appointments through phone calls and paper diaries. This leads to double bookings and missed appointments.',
    goals: [
      'Show only free time slots to customers',
      'Prevent double bookings, including long services',
      'Give the owner one dashboard to manage bookings',
      'Let the owner change prices without editing code',
    ],
    approach:
      'I built a booking engine that generates slots from opening hours and slot length, then removes any slot that overlaps an existing booking. The admin dashboard reads the same data and lets the owner update statuses and prices.',
    features: [
      'Service selection with price and duration',
      'Live time slots with past and booked slots disabled automatically',
      'Overlap check for services longer than one slot',
      'Admin dashboard with search, status filter and summary cards',
    ],
    challenges: [
      {
        problem: 'A 2-hour service could overlap with the next booking even when the start time looked free.',
        solution: 'The slot engine checks the full duration of each service against every existing booking, not just the start time.',
      },
      {
        problem: 'Service price changes had to appear on the customer page without a rebuild.',
        solution: 'The admin saves overrides to storage, and the booking page loads them on start.',
      },
    ],
    results: [
      'Customers can book 24/7 without calling the salon',
      'Double bookings are blocked by the overlap engine',
      'Owner can update services and see revenue from one dashboard',
    ],
  },
]