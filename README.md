Frontend Section D


activity-feed/
│
├── public/
│   └── index.html
│
├── src/
│   │
│   ├── assets/                # Images, icons, logos
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/            # Reusable UI components
│   │   │
│   │   ├── common/            # Generic components
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loader.jsx
│   │   │   └── Badge.jsx
│   │   │
│   │   ├── layout/            # Layout components
│   │   │   ├── Navbar.jsx
│   │   │   ├── LeftSidebar.jsx
│   │   │   ├── RightSidebar.jsx
│   │   │   └── MainLayout.jsx
│   │   │
│   │   ├── feed/              # Feed related components
│   │   │   ├── Feed.jsx
│   │   │   ├── EventCard.jsx
│   │   │   ├── UpcomingBanner.jsx
│   │   │   ├── Highlights.jsx
│   │   │   ├── StartupCard.jsx
│   │   │   └── SocietyUpdate.jsx
│   │   │
│   │   ├── filters/           # Filter UI
│   │   │   ├── TagFilter.jsx
│   │   │   ├── DateFilter.jsx
│   │   │   ├── SocietyFilter.jsx
│   │   │   └── EventTypeFilter.jsx
│   │   │
│   │   └── search/
│   │       └── SearchBar.jsx
│   │
│   ├── pages/                 # Main pages
│   │   └── Home.jsx
│   │
│   ├── data/                  # Dummy JSON data
│   │   ├── events.js
│   │   ├── startups.js
│   │   └── societies.js
│   │
│   ├── hooks/                 # Custom hooks
│   │   ├── useFeed.js
│   │   └── useInfiniteScroll.js
│   │
│   ├── utils/                 # Helper functions
│   │   ├── filterUtils.js
│   │   └── formatDate.js
│   │
│   ├── styles/                # Global styles
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
└── README.md
