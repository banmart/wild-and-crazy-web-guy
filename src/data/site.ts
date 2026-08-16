/**
 * All site copy lives here so the jokes are in one place.
 *
 * PLACEHOLDER: every price, testimonial, stat and contact detail below is
 * invented. Search this file for "PLACEHOLDER" before launch.
 */

export const site = {
  name: 'Steve Martin',
  brand: 'Wild & Crazy SEO',
  tagline: 'SEO, AI Search & Websites for Small Business',
  // Where the contact form is delivered.
  formEmail: 'banmart@gmail.com',
  email: 'banmart@gmail.com',
  phone: '(310) 307-9830',
  phoneHref: '+13103079830',
  location: 'Los Angeles and the San Fernando Valley',
  bookingUrl: '/contact',
};

export const nav = [
  { label: 'The Playbill', href: '/services' },
  { label: 'The Green Room', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const marqueeItems = [
  'Local SEO',
  'AI Search Optimization',
  'Google Business Profile',
  'Website Builds',
  'Technical Audits',
  'Getting Cited By ChatGPT',
  'Page Speed',
  'Content That Ranks',
  'Escaping Page Two',
  'Reviews That Show Up',
];

/** Homepage tiers: three tickets, as in the original playbill. */
export const tiers = [
  {
    row: 'Row A · Starter',
    seat: 'Seat 01',
    film: 'The Jerk',
    tagline: 'Born a poor, unranked website.',
    price: 'From $1,500', // PLACEHOLDER
    feature: false,
    soldOut: false,
    items: [
      'Full technical SEO audit',
      'Google Business Profile rehab',
      'Keyword map for your actual town',
      'A 5-page site that loads before the customer leaves',
      'Plain-English report. No acronyms without subtitles.',
    ],
  },
  {
    row: 'Row B · Growth',
    seat: 'Seat 02',
    film: 'Roxanne',
    tagline: 'A nose for exactly what people are searching.',
    price: 'From $3,500/mo', // PLACEHOLDER
    feature: true,
    soldOut: false,
    items: [
      'Everything in The Jerk',
      'Monthly content that answers real questions',
      'AI search optimization: ChatGPT, Gemini, AI Overviews',
      'Review generation that does not feel like begging',
      'A dashboard you will look at twice and then trust',
    ],
  },
  {
    row: 'Row C · Full Service',
    seat: 'Seat 03',
    film: 'Father of the Bride',
    tagline: 'The full production. You will pay for everything. It will be worth it.',
    price: 'Custom quote', // PLACEHOLDER
    feature: false,
    soldOut: false,
    items: [
      'Complete site rebuild, done properly',
      'Multi-location and service-area domination',
      'Competitor teardown, monthly',
      'Strategy calls where I actually answer the phone',
      'Priority support: you text, I respond, like a person',
    ],
  },
];

/** Services page: the full set list. */
export const acts = [
  {
    no: 'Act I',
    title: 'The Jerk',
    tagline: 'Born a poor, unranked website.',
    body:
      'The opening audit. I crawl your site and tell you, out loud, everything that is wrong with it. It is uncomfortable for about twenty minutes and then extremely useful forever.',
    items: [
      'Full technical crawl and indexation check',
      'Core Web Vitals: the speed test you keep failing',
      'On-page and metadata review',
      'Prioritized fix list, ranked by what actually moves money',
    ],
  },
  {
    no: 'Act II',
    title: 'Roxanne',
    tagline: 'A nose for exactly what people are searching.',
    body:
      'Keyword research that ignores the vanity terms your last agency reported on. We find the searches with a wallet attached and build a plan around those.',
    items: [
      'Intent-mapped keyword research',
      'Content gap analysis against whoever is beating you',
      'Topic clusters that link to each other on purpose',
      'A content calendar you can actually keep up with',
    ],
  },
  {
    no: 'Act III',
    title: 'L.A. Story',
    tagline: 'Getting you into the map pack, wherever your city is.',
    body:
      'Local SEO for businesses that need customers who can physically drive to them. The three-pack is the whole ballgame for local search, and most small businesses are not in it.',
    items: [
      'Google Business Profile optimization',
      'Citation cleanup: every wrong phone number, hunted down',
      'Review strategy that generates real reviews',
      'Location and service-area pages that do not read like spam',
    ],
  },
  {
    no: 'Act IV',
    title: 'The Man with Two Brains',
    tagline: 'One for Google. One for the robots that replaced Google.',
    body:
      'Your customers are asking ChatGPT, Gemini and AI Overviews for recommendations right now. Those answers name somebody. This is the work that makes it name you.',
    items: [
      'AI crawler access: most sites accidentally block them',
      'llms.txt and structured data so machines can read you',
      'Content written to be quotable, not just rankable',
      'Brand mention tracking across the major AI assistants',
    ],
  },
  {
    no: 'Act V',
    title: 'Dirty Rotten Scoundrels',
    tagline: 'A close, professional look at whoever is beating you.',
    body:
      'Someone in your town is outranking you with a worse business and a worse website. We find out exactly why, and then we take it.',
    items: [
      'Full competitor backlink and content teardown',
      'Link gap analysis: what they have that you do not',
      'Ethical link building. Nothing that gets you penalized.',
      'Toxic link audit and disavow, if you inherited a mess',
    ],
  },
  {
    no: 'Act VI',
    title: 'Planes, Trains and Automobiles',
    tagline: 'For when the whole thing needs to be rebuilt.',
    body:
      'Site migrations, replatforms, and rescues. The projects where one wrong redirect erases twelve years of rankings in an afternoon. I have done a lot of these and lost none of them.',
    items: [
      'Migration planning and redirect mapping',
      'Astro, WordPress or Shopify builds that load fast',
      'Post-launch monitoring so nothing quietly breaks',
      'Analytics and tracking set up correctly the first time',
    ],
  },
  {
    no: 'Act VII',
    title: 'Bowfinger',
    tagline: 'Guerrilla marketing on a budget that would make anyone nervous.',
    body:
      'For businesses that are not ready for a retainer but are ready to stop being invisible. Small scope, high leverage, honest about what it can do.',
    items: [
      'One-time local SEO setup',
      'A handful of pages that target your best money terms',
      'DIY playbook so your team can keep it going',
      'A check-in at 90 days to see what worked',
    ],
  },
  {
    no: 'Encore',
    title: 'Father of the Bride',
    tagline: 'The full production. You will pay for everything. It will be worth it.',
    body:
      'Everything above, run monthly, by me, for businesses that would rather just have it handled. Limited slots because there is exactly one of me.',
    items: [
      'All acts, ongoing',
      'Monthly strategy calls with a human',
      'Quarterly competitive and AI visibility review',
      'Priority access: you text, I respond',
    ],
  },
];

export const quotes = [
  {
    text: 'Our bookings doubled and I still do not know what a meta tag is.',
    attr: 'Bakery Owner, Two Locations', // PLACEHOLDER
  },
  {
    text: 'I asked ChatGPT who the best plumber in town was. It said us. That was the whole goal.',
    attr: 'Regional Plumbing Company', // PLACEHOLDER
  },
  {
    text: 'The phone rings so much now we had to hire somebody. Mixed feelings. Mostly good.',
    attr: 'HVAC, Family Owned Since 1994', // PLACEHOLDER
  },
];

export const stats = [
  { num: '1996', label: 'Building websites since. Yes, that 1996.' },
  { num: '11s → 1.4s', label: 'Average load time before and after a rebuild' }, // PLACEHOLDER
  { num: '3×', label: 'Median increase in calls from local search' }, // PLACEHOLDER
  { num: '1', label: 'Actual Steve Martin working on your account' },
];

export const hecklers = [
  {
    q: 'Are you the Steve Martin?',
    a: 'I am a Steve Martin. Legally, that is the same sentence with a much smaller settlement attached. I have never played the banjo, I have never hosted the Oscars, and I have never been in a movie. I have, however, gotten a two-location bakery to outrank a national chain, which in my house counts as an Emmy.',
  },
  {
    q: 'How long until I see results?',
    a: 'Technical fixes and page speed: days. Google Business Profile and local rankings: four to eight weeks. Content and authority: three to six months. Anyone promising page one by Friday is either lying to you or about to get your site penalized, and often both.',
  },
  {
    q: 'Do I really need to worry about AI search?',
    a: 'Your customers have already stopped asking Google and started asking a chatbot. That chatbot recommends a specific business by name. Right now, for your industry, in your town, it is saying somebody else. That is either a problem or an opportunity, depending on who calls me first.',
  },
  {
    q: 'My nephew built our website. Is that fine?',
    a: 'It was fine. In 2011. It is now a nine-second-loading tribute to a young man who has since become a dentist. I will say kind things about it at the funeral and then build you something that loads before your customer gives up and calls a competitor.',
  },
  {
    q: 'What makes you different from the agency that keeps cold-calling me?',
    a: 'They are calling you from a call center with a script and a slide deck. You will be assigned an account manager who will forward your questions to somebody offshore who has never seen your website. With me, the person you talk to is the person doing the work, because that person is me, alone, in an office, with a microphone I do not need.',
  },
  {
    q: 'Do you do contracts?',
    a: 'Month to month. If the work is good you will stay, and if it is not you should absolutely leave. Locking clients into twelve months is a business model for people whose work does not survive month three.',
  },
  {
    q: 'Is the "Wild & Crazy" free hosting and CRM offer actually real?',
    a: '100% real. When you commission a new website development and design with me, I include the custom domain, cloud hosting, SSL padlock, CRM leads database, email campaign setup, and full SEO optimization for free. A site without hosting is just a folder on my laptop, and a site without SEO is a billboard in an abandoned mine shaft. It should all work together out of the box.',
  },
];

/**
 * The homepage bit board. Newest bit goes first; the homepage only shows
 * bits[0], so adding a new one at the top is the whole publishing workflow.
 */
export const bits = [
  {
    date: 'August 2026',
    setup: "People ask me, 'Steve, what's SEO cost these days?'",
    punchline:
      "TWO-FIVE TO FIVE THOUSAND A MONTH, baby, that's the going rate! And you know what AI did to that price? KNOCKED IT DOWN 20 to 30%! That's right, the robots are out here doing you a FAVOR for once!",
    tag: '🤖💰',
    footnote: 'Real number, real discount. Ask me what your town actually costs.',
  },
];

/** The Wild & Crazy Special Offer: Free essentials with new website builds */
export const wildOffer = {
  eyebrow: '✦ Special Feature Attraction · Wild & Crazy Value ✦',
  title: 'FREE with New Website Development & Design',
  subtitle:
    'Two wild and crazy guys walked into a server farm... and decided to give away the entire digital infrastructure on the house. Order any new website build, and I will throw in all the expensive digital plumbing below completely FREE.',
  accountantNote: '(My business manager is currently hyperventilating in the green room.)',
  items: [
    {
      title: 'Free Domain Name',
      tagline: 'YourBusiness.com — unless a guy in Boise bought it in 1999.',
      description:
        'We hunt down, register, and wire up your custom dot-com domain so you can finally stop sending six-figure client proposals from a free Yahoo address.',
      badge: 'FREE DOT-COM',
      icon: '🌐',
    },
    {
      title: 'Free Cloud Web Hosting',
      tagline: 'Cloud hosting so fast it violates local traffic ordinances.',
      description:
        'High-performance, ultra-fast cloud hosting with 99.9% uptime. Your pages load in milliseconds so visitors don’t leave before seeing your phone number.',
      badge: 'CLOUD SPEED',
      icon: '⚡',
    },
    {
      title: 'Free SSL Certificate',
      tagline: 'The little green padlock that proves you’re not operating out of an alley.',
      description:
        'Bank-grade HTTPS encryption configured out of the box, stopping Google Chrome from plastering a terrifying red “HAZARDOUS SITE” warning over your brand.',
      badge: 'BANK-GRADE LOCK',
      icon: '🔒',
    },
    {
      title: 'Free CRM (Leads Database)',
      tagline: 'Because writing client phone numbers on cocktail napkins is not a sales funnel.',
      description:
        'Every quote request, contact submission, and consultation booking is automatically collected in a clean, searchable lead dashboard that reminds you who to call.',
      badge: 'LEADS DATABASE',
      icon: '📋',
    },
    {
      title: 'Free Email Campaigns',
      tagline: 'Newsletters people actually open instead of filing straight into the incinerator.',
      description:
        'Pre-configured broadcast tools and automated email welcome sequences ready to convert casual visitors into repeat paying clients on autopilot.',
      badge: 'INBOX READY',
      icon: '✉️',
    },
    {
      title: 'Optimized for SEO',
      tagline: 'Because a gorgeous website nobody can find is just expensive modern art.',
      description:
        'Engineered from line one with semantic HTML, local schema markup, Core Web Vitals speed tuning, and AI crawler readiness so Google and ChatGPT cite you first.',
      badge: 'GOOGLE & AI READY',
      icon: '🚀',
    },
  ],
  marketValue: '$1,200+/yr',
  yourPrice: '$0.00',
  ctaText: 'Claim The Wild & Crazy Offer →',
  ctaHref: '/contact',
  disclaimer:
    '* No hidden setup surcharges. No surprise renewal ransom. No 14-page contracts written in Latin. If you find a wilder or crazier web package in this town, I will personally apologize to your dog.',
};

