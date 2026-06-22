// ════════════════════════════════════════════════════════════════
//  SITE CONFIG — edit this file to customise for each new client
// ════════════════════════════════════════════════════════════════

export const SITE_CONFIG = {

  // ── Business Identity ──────────────────────────────────────────
  business: {
    name:        'Your Business Name',       // full brand name (used in footer, top-bar, about)
    shortName:   'Your Brand',               // short name for navbar logo
    tagline:     'Your Professional Tagline',
    description: 'Brief description of your business and the value you deliver to clients.',
    logoSymbol:  '★',                        // emoji / symbol shown beside the brand name in navbar
  },

  // ── Owner / Expert ─────────────────────────────────────────────
  owner: {
    name:        'Your Name',
    title:       'Founder & CEO',
    designation: 'Founder — Your Business Name',
    bio: [
      'With years of dedicated experience in your field, you have guided hundreds of clients locally, nationally, and internationally.',
      'You combine proven expertise with personalised guidance to deliver real, lasting results tailored to each client.',
      'Your consultations have helped clients resolve challenges in career, relationships, health, and business — providing clarity and confidence.',
    ],
    image:    'favicon.ico',              // path inside /public
    imageAlt: 'Your Name - Your Business Name',
    expertise: [
      'Expertise Area 1',
      'Expertise Area 2',
      'Expertise Area 3',
      'Expertise Area 4',
      'Expertise Area 5',
      'Expertise Area 6',
    ],
    challenges: [
      'Common challenge your clients face — 1',
      'Common challenge your clients face — 2',
      'Common challenge your clients face — 3',
      'Common challenge your clients face — 4',
      'Common challenge your clients face — 5',
      'Common challenge your clients face — 6',
    ],
    credentials: [
      'Qualification / Certification 1',
      'Qualification / Certification 2',
      'Qualification / Certification 3',
      'Award / Recognition 4',
    ],
  },

  // ── Contact ─────────────────────────────────────────────────────
  contact: {
    phone:        '+00 00000 00000',                    // display label
    phoneLink:    'tel:0000000000',                     // href for <a> tags
    whatsapp:     'https://wa.me/000000000000',         // full WhatsApp URL
    email:        'youremail@domain.com',
    emailLink:    'mailto:youremail@domain.com',
    address:      'City, State / Country',
    availability: '24/7 Available for Consultations',
  },

  // ── Social Media ─────────────────────────────────────────────
  social: {
    instagram: 'https://www.instagram.com',
    facebook:  'https://www.facebook.com',
    youtube:   'https://www.youtube.com',
  },

  // ── Hero Section ─────────────────────────────────────────────
  hero: {
    eyebrow:          '✦ Trusted Professional Guidance ✦',
    title:            'Find Clarity & Success in Life',
    subtitle:         'Walk away from confusion, step into confidence, and discover the path forward.',
    description:      'Expert guidance in [your field]. Trusted by clients across [region] for career, personal, family, and business solutions.',
    announcementText: '📞 Call Now for Consultation',
  },

  // ── Ticker (top scrolling bar) ────────────────────────────────
  // ticker: [
  //   '✅ 100% Genuine Guidance',
  //   '⭐ 1000+ Happy Clients',
  //   '🔒 Confidential Consultation',
  // ],

  // ── Stats ────────────────────────────────────────────────────
  stats: [
    { number: '1000+', label: 'Satisfied Clients', icon: 'fa-users'    },
    { number: '10+',   label: 'Years Experience',  icon: 'fa-calendar' },
    { number: '100%',  label: 'Client Success',    icon: 'fa-check'    },
    { number: '10+',   label: 'Countries Served',  icon: 'fa-globe'    },
  ],

  // ── Service Category Pills ────────────────────────────────────
  serviceCategories: [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
  ],

  // ── Services Grid ─────────────────────────────────────────────
  services: [
    { icon: 'fa-star',        title: 'Service 1',  description: 'Describe your first service and what clients get from it.' },
    { icon: 'fa-briefcase',   title: 'Service 2',  description: 'Describe your second service and the outcomes it delivers.' },
    { icon: 'fa-coins',       title: 'Service 3',  description: 'Describe your third service and its key benefits.' },
    { icon: 'fa-book',        title: 'Service 4',  description: 'Describe your fourth service offering here.' },
    { icon: 'fa-ring',        title: 'Service 5',  description: 'Describe your fifth service offering here.' },
    { icon: 'fa-heart',       title: 'Service 6',  description: 'Describe your sixth service offering here.' },
    { icon: 'fa-users',       title: 'Service 7',  description: 'Describe your seventh service offering here.' },
    { icon: 'fa-chart-bar',   title: 'Service 8',  description: 'Describe your eighth service offering here.' },
    { icon: 'fa-globe',       title: 'Service 9',  description: 'Describe your ninth service offering here.' },
    { icon: 'fa-hand',        title: 'Service 10', description: 'Describe your tenth service offering here.' },
    { icon: 'fa-calculator',  title: 'Service 11', description: 'Describe your eleventh service offering here.' },
    { icon: 'fa-home',        title: 'Service 12', description: 'Describe your twelfth service offering here.' },
  ],

  // ── Problems / Challenges Section ────────────────────────────
  problems: [
    { icon: 'fa-heart',       title: 'Challenge Area 1', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-briefcase',   title: 'Challenge Area 2', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-coins',       title: 'Challenge Area 3', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-book',        title: 'Challenge Area 4', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-stethoscope', title: 'Challenge Area 5', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-users',       title: 'Challenge Area 6', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-brain',       title: 'Challenge Area 7', description: 'How your service helps clients overcome this specific challenge.' },
    { icon: 'fa-ring',        title: 'Challenge Area 8', description: 'How your service helps clients overcome this specific challenge.' },
  ],

  // ── Why Choose Us ────────────────────────────────────────────
  reasons: [
    { icon: 'fa-award',        title: 'Expert Guidance',   description: 'Certified professional with a proven track record of results.' },
    { icon: 'fa-user-shield',  title: 'Confidential',      description: 'Your privacy and anonymity are always fully respected.' },
    { icon: 'fa-headset',      title: '24/7 Availability', description: 'Always available whenever you need guidance or support.' },
    { icon: 'fa-check-double', title: 'Accurate Results',  description: 'Precision and reliability in every consultation.' },
    { icon: 'fa-bolt',         title: 'Quick Solutions',   description: 'Effective answers tailored to your unique situation.' },
    { icon: 'fa-globe',        title: 'Global Reach',      description: 'Serving clients worldwide through online consultations.' },
  ],

  // ── Testimonials ─────────────────────────────────────────────
  testimonials: [
    { name: 'Client Name', title: 'Occupation / Role', feedback: 'Share what this client said about the transformation your service brought to their life or business.', rating: 5 },
    { name: 'Client Name', title: 'Occupation / Role', feedback: 'Another positive testimonial highlighting the accuracy and value of your guidance and expertise.', rating: 5 },
    { name: 'Client Name', title: 'Occupation / Role', feedback: 'A third client review describing how your consultation helped them resolve a specific challenge.', rating: 5 },
    { name: 'Client Name', title: 'Occupation / Role', feedback: 'Final testimonial showing the breadth of your service and its positive impact on clients.', rating: 5 },
  ],

  // ── Footer — quick service links ─────────────────────────────
  footerServices: [
    'Service 1',
    'Service 2',
    'Service 3',
    'Service 4',
    'Service 5',
  ],

};
