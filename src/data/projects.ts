export const projects = [
  {
    title: 'FoodReels',
    date: 'Aug 2026',
    tech: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'ImageKit'
    ],
    points: [
      'Built a full-stack short-form food video platform with separate user and food-partner experiences.',
      'Implemented JWT authentication with HTTP-only cookies and role-based access for two user types, reducing auth-related client-side token exposure.',
      'Deployed frontend (Vercel) and backend (Render) with environment-based config and CORS locked to production origin.',
      'Added Google OAuth 2.0 login for users alongside email/password JWT authentication, using google-auth-library for server-side token verification.'
    ],
    github: 'https://github.com/krpranav7/FoodReels',
    live: 'https://food-reels-black.vercel.app'
  },
  {
    title: 'Kanban Task Board',
    date: 'Jul 2026',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
    points: [
      'Built a drag-and-drop Kanban board (Vanilla JS, no framework) with persistent state via Local Storage, supporting unlimited task creation across 3 workflow stages.',
      'Architected reusable task components with dynamic DOM diffing for live count updates and deletion, avoiding full re-renders.'
    ],
    github: 'https://github.com/krpranav7/kanban-board',
    live: 'https://kanban-board-xi-three.vercel.app'
  }
]
