import { Project, TimelineItem } from './types';

export const projects: Project[] = [
  {
    id: 'missgreen',
    title: 'MissGreen',
    description: 'Startup brand building across campaigns, content, digital products, and brand systems.',
    image: '/portfolio/missgreen/cover/missgreen2026.png',
    cardImage: '/portfolio/missgreen/cover/missgreen ned.png',
    category: 'Marketing Generalist',
    cardStyle: 'character',
    coverStyle: 'centered',
    coverFit: 'contain',
    featured: true,
    intro: 'At MissGreen, I worked like a startup generalist: building campaigns, shaping the brand system, creating content, and shipping digital products from 0 to 1. It was one of the clearest examples of how I work best: strategy-led, visually sharp, and deeply hands-on.',
    sections: [
      {
        kicker: 'Everyday campaign system',
        title: 'Keeping the brand alive day to day',
        content: 'A big part of my role was making sure MissGreen never felt static. I created campaign visuals, activity posters, menu pieces, social content, and everyday brand assets that kept the business feeling active, seasonal, and recognisable across touchpoints. Because startup pace is fast, this work was not about one hero launch. It was about building a steady rhythm of communication that could support awareness, store activity, and brand personality at the same time.',
        note: 'This is where my generalist role showed up most clearly: strategy, copy direction, visual design, and day-to-day execution all had to move together.',
        media: [
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/anna-pos poster.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/pet nutritionist.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/puppy day.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/taiwan xmas set.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/emtion food-procrastination.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/lunar eclipse.jpg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/posters-visuals/big menu.png', aspect: 'portrait' },
          { type: 'video', url: '/portfolio/missgreen/video-motion/碳水循环公众号.m4v', aspect: 'phone', fit: 'contain', caption: 'One example of the WeChat article and editorial-style content work I also handled as part of ongoing channel operations.' }
        ]
      },
      {
        kicker: 'Online campaign 01',
        title: 'Turning wellness questions into a scalable content system',
        content: 'For MissGreen’s healthy meal plan offering, I built a 23-card wellness campaign around common health and lifestyle situations people actually experience: focus, recovery, hormone balance, cholesterol support, and more. Instead of promoting meal plans as a generic healthy choice, the campaign translated specific daily concerns into practical, visually clear content that connected ingredients with benefits. That gave the product a stronger reason to be understood, saved, and discussed.',
        note: 'What made this strong was its leverage. The first 23-card system was created in roughly half a day, but it became reusable across Xiaohongshu, WeChat communities, and customer retention touchpoints.\n\nEarly performance from the first 12 published cards: around 96 likes, 24 saves, and roughly 400 cumulative views.',
        media: [
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/26年meal plan 健康卡/胆固醇健康.png', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/26年meal plan 健康卡/平衡激素.png', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/26年meal plan 健康卡/小红书帖子screenshot.png', aspect: 'phone', fit: 'contain' }
        ]
      },
      {
        kicker: 'Online campaign 02',
        title: 'Youtopia: an interactive social campaign built to convert',
        content: 'To ride the cultural momentum of Zootopia 2, I created an interactive animal personality campaign for Xiaohongshu. The idea was simple but strategic: use identity-driven quiz behaviour to increase comments, sharing, and mini-program traffic. The campaign was structured as a 14-page swipe post, with symbol-based choices leading into animal personality cards, then connected to a coupon incentive in the mini-program.',
        note: 'This campaign was designed as a low-cost but high-intent funnel.\n\nTarget KPIs included 300–800 views, 20–45 comments, 20–50 likes + saves, 15–30 coupon claims, and 8–12 redemptions.\n\nThe first round delivered 68 reads, 8 comments, 8 likes, 5 stars, 1 repost, 5 coupon claims, and 2 coupon redemptions. My main reflection was that suspense could be pushed even further by separating the question post and the result reveal.',
        media: [
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/youtopia/题目.png', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/youtopia/豹.png', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/youtopia/狐狸.png', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/online campagin/youtopia/树懒.png', aspect: 'portrait' }
        ]
      },
      {
        kicker: 'Offline activations',
        title: 'From sub-brand building to live event delivery',
        content: 'MissGreen’s offline work was much bigger than simply showing up at events. One of the strongest examples was Biohacking Ventures, a wellness sub-brand I helped build from the ground up. I was involved from early concepting through logo and visual identity, channel setup, event preparation, speaker coordination, attendee management, and on-site execution. Beyond Biohacking, I also represented the brand in external event settings, including speaking and workshop-style sharing at 茻大会.',
        note: 'What made this project important was its range. It showed that I can move across brand creation, operations, bilingual event problem-solving, and live audience experience — not just campaign ideation.\n\nA practical example was testing lower-cost bilingual subtitle workflows for English-led events in China, so the audience experience could improve without relying on expensive live interpretation tools.',
        media: [
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/offline event/biohacking/logo.png', aspect: 'square', fit: 'contain' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/offline event/biohacking/biohacking1.jpeg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/offline event/biohacking/biohacking2.jpeg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/offline event/biohacking/biohacking3.jpeg', aspect: 'portrait' },
          { type: 'image', url: '/portfolio/missgreen/campaign-strategy/offline event/ned茻大会分享.jpg', aspect: 'portrait', caption: 'A workshop and sharing moment that also reflects the public-facing side of my role.' }
        ]
      },
      {
        kicker: 'Digital build',
        title: 'Building the website and mini program from 0 to 1',
        content: 'MissGreen’s digital experience was not outsourced away from the marketing team — I built it. The company website and the mini program were both projects I largely created myself from 0 to 1, while taking in feedback from the founder and teammates along the way. This is one of the clearest examples of my builder side: I am comfortable moving from direction-setting into actual digital execution.',
        note: 'This work mattered because it turned brand thinking into real interfaces. It was not just about visuals looking good. It was about giving the company usable, coherent digital products that could support discovery, education, and conversion.',
        ctaLabel: 'Visit the Website',
        ctaUrl: 'https://missgreen-12dc0fc.ingress-alpha.ewp.live/',
        media: [
          { type: 'image', url: '/portfolio/missgreen/website-digital/homepage screenshot.png', aspect: 'video', featured: true, fit: 'contain', caption: 'Homepage view of the MissGreen website build.' },
          { type: 'video', url: '/portfolio/missgreen/video-motion/miniprogram-recording.m4v', aspect: 'phone', fit: 'contain', caption: 'Mini-program recording showing the digital product I built as part of MissGreen’s 0→1 ecosystem.' }
        ]
      },
      {
        kicker: 'Brand system + data strategy',
        title: 'Creating the brand guidelines, then refining the business',
        content: 'I also helped create MissGreen’s newer brand guideline system, including key colour, type, and visual direction work that gave the brand a more consistent foundation going forward. But the role did not stop at visual consistency. As the business shifted into a more delivery-focused model, I also pulled sales and product data to understand what had changed, why certain items were underperforming, and how menu structure and product communication could be improved.',
        note: 'That analysis led to a more reason-based menu strategy: clearer product categories, stronger functional framing, and bundled choices that made it easier for customers to understand what to buy and why.\n\nFor me, this section matters because it shows both sides of my thinking: I can help define the brand system, then use real operating data to improve how the business performs.',
        media: [
          { type: 'image', url: '/portfolio/missgreen/brand-assets/brand guidline_ned created/brand guidline 1.png', aspect: 'video', fit: 'contain' },
          { type: 'image', url: '/portfolio/missgreen/brand-assets/brand guidline_ned created/brand guidline 2.png', aspect: 'video', fit: 'contain' },
          { type: 'image', url: '/portfolio/missgreen/brand-assets/brand guidline_ned created/brand guidline 3.png', aspect: 'video', fit: 'contain' }
        ]
      }
    ]
  },
  {
    id: 'ebest',
    title: 'eBest',
    description: 'Brand storytelling, TikTok content, and livestream experiments for a growing retail team.',
    image: '/portfolio/ebest/brand-identity/logo.png',
    cardImage: '/portfolio/ebest/cover/ebest ned.png',
    category: 'Digital Creation',
    cardStyle: 'character',
    featured: true,
    intro: 'At eBest, I worked across social content and campaign thinking, turning day-to-day brand moments into short-form videos and testing livestream formats that actually matched how people behave on TikTok.',
    sections: [
      {
        kicker: 'Brand foundation',
        title: 'Identity, but kept flexible',
        content: 'The visual system needed to feel clean enough for retail, but still loose enough to carry product storytelling, content shoots, and campaign experiments. I used the brand identity as a stable anchor, then built different content expressions around it.'
      },
      {
        kicker: 'Content social',
        title: 'Short-form content I made during the internship',
        content: 'These pieces were made for social, with a focus on product-led storytelling, fast hook moments, and visuals that could feel native to scroll-based platforms. Instead of stacking them like a gallery, I turned them into a lighter card deck so they feel closer to actual portfolio artifacts.',
        media: [
          {
            type: 'video',
            url: '/portfolio/ebest/content-social/hippo.m4v',
            caption: 'Hippo was one of the strongest cuts from the internship set, with a cleaner hook and a more confident visual rhythm.',
            aspect: 'phone',
            featured: true
          },
          {
            type: 'video',
            url: '/portfolio/ebest/content-social/cleansingtowel.m4v',
            caption: 'Cleansing towel video focused on texture, motion, and quick utility cues.',
            aspect: 'phone'
          },
          {
            type: 'video',
            url: '/portfolio/ebest/content-social/coconut.m4v',
            caption: 'Coconut-led visual concept built for casual, scroll-native viewing.',
            aspect: 'phone'
          },
          {
            type: 'video',
            url: '/portfolio/ebest/content-social/bagel.m4v',
            caption: 'Bagel content cut with a playful product-first rhythm.',
            aspect: 'phone'
          },
          {
            type: 'video',
            url: '/portfolio/ebest/content-social/icecreamlatte.m4v',
            caption: 'Ice cream latte content exploring mood, appetite appeal, and platform pacing.',
            aspect: 'phone'
          }
        ]
      },
      {
        kicker: 'Campaign strategy',
        title: 'TikTok livestream experiment',
        content: 'We used livestreaming as a lightweight growth experiment for the Australian market. The first stream leaned on product introduction and underperformed, so I helped shift the format toward process-based, repetitive warehouse visuals that felt much more native to TikTok viewing behavior. Later sessions added more people, more motion, and more energy to sharpen the experience.',
        media: [
          {
            type: 'image',
            url: '/portfolio/ebest/campaign-strategy/live campagin/livestream1.PNG',
            caption: 'Visual snapshot from the livestream campaign showing the warehouse-world setup.',
            featured: true,
            aspect: 'phone'
          },
          {
            type: 'video',
            url: '/portfolio/ebest/campaign-strategy/live campagin/livestream trailer.m4v',
            poster: '/portfolio/ebest/campaign-strategy/live campagin/livestream1.PNG',
            caption: 'Trailer cut used to frame the livestream campaign and set audience expectation.',
            aspect: 'phone'
          },
          {
            type: 'video',
            url: '/portfolio/ebest/campaign-strategy/live campagin/livestream2.mov',
            poster: '/portfolio/ebest/campaign-strategy/live campagin/livestream1.PNG',
            caption: 'One of the later livestream formats with more motion, performance, and pacing.',
            aspect: 'phone'
          }
        ]
      }
    ]
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    description: 'Talent acquisition, candidate mapping, and high-volume interview coordination for TikTok Shop hiring.',
    image: '/portfolio/tiktok/cover/welcome ned.JPG',
    cardImage: '/portfolio/tiktok/cover/tiktok ned.png',
    category: 'Talent Acquisition',
    cardStyle: 'character',
    coverFit: 'cover',
    coverStyle: 'card',
    featured: true,
    intro: 'At TikTok, I interned with the Talent Acquisition Center in Shanghai, supporting hiring for TikTok Shop customer support roles across Shanghai, Chengdu, SEA, and EMEA. The work combined candidate mapping, interview coordination, and fast-moving stakeholder communication in a high-volume hiring environment.',
    sections: [
      {
        kicker: 'Talent mapping',
        title: 'Finding the right pool in Chengdu',
        content: 'When hiring momentum in Chengdu started to lag, I helped reshape the sourcing approach by mapping local universities and focusing on English-major graduates who were a stronger fit for TikTok Shop customer support roles. That shift made the search more targeted and gave the team a clearer candidate pool to work from.',
        media: [
          {
            type: 'image',
            url: '/portfolio/tiktok/recruitment-campaign/chengdu-talent-map.svg',
            aspect: 'video',
            featured: true,
            fit: 'contain'
          }
        ]
      },
      {
        kicker: 'Interview operations',
        title: 'Coordinating recruitment at speed',
        content: 'The internship also meant keeping a high-volume interview pipeline moving. I supported interview transcription, project coordination, and stakeholder communication while handling around 20 pre-screening interviews a day and arranging more than 30 candidate interviews a week.',
        media: [
          {
            type: 'image',
            url: '/portfolio/tiktok/recruitment-campaign/recruitment-ops-board.svg',
            aspect: 'video',
            featured: true,
            fit: 'contain'
          }
        ]
      },
      {
        kicker: 'Outcomes',
        title: 'Impact across SEA and EMEA',
        content: 'Across the internship period, the work translated into measurable hiring outcomes: stronger sourcing support in Chengdu and more than 30 successful hires across SEA and EMEA. For me, this was the clearest proof that careful mapping and dependable coordination can create real hiring momentum.',
        media: [
          {
            type: 'image',
            url: '/portfolio/tiktok/recruitment-campaign/hiring-outcomes-board.svg',
            aspect: 'video',
            featured: true,
            fit: 'contain'
          }
        ]
      }
    ]
  },
  {
    id: 'woolworths',
    title: 'Woolworths',
    description: 'Retail, customer service, online operations, and a promotion into assistant manager support.',
    image: '/portfolio/woolworths/cover/ned-woolies.png',
    category: 'Retail & Operations',
    cardStyle: 'character',
    coverStyle: 'character',
    coverFit: 'contain',
    featured: true,
    intro: 'Woolworths was where I learned how much range retail really asks from you. I started in customer service, moved between Brisbane and Sydney stores, picked up online and replenishment work, and eventually stepped into Assistant Online Manager responsibilities in June 2024.',
    sections: [
      {
        kicker: 'Section 01',
        title: 'Starting on the floor',
        content: 'I joined Woolworths in June 2023 and began with customer-facing work: register support, guiding shoppers, answering questions, and helping solve problems in real time. It taught me how to stay calm, warm, and useful even when the pace kept moving.',
        media: [
          {
            type: 'image',
            url: '/portfolio/woolworths/digital-refresh/section1.png',
            aspect: 'portrait',
            fit: 'contain'
          }
        ]
      },
      {
        kicker: 'Section 02',
        title: 'Learning the whole store rhythm',
        content: 'After moving to Sydney in 2024, the role widened. I was no longer only on customer service. I also started working across the online team, picking online orders, supporting replenishment, and helping wherever the store needed an extra pair of hands. That shift made me much more operationally aware and adaptable.',
        media: [
          {
            type: 'image',
            url: '/portfolio/woolworths/digital-refresh/section2.png',
            aspect: 'portrait',
            fit: 'contain'
          }
        ]
      },
      {
        kicker: 'Section 03',
        title: 'Stepping into assistant manager responsibilities',
        content: 'On June 11, 2024, I became an Assistant Online Manager in the Sydney store. Alongside the normal online work, I started helping with system checks, arranging staff coverage, handling last-minute gaps, and organising break timing through the day. For me, that promotion was a clear sign that my reliability and judgment were being trusted.',
        media: [
          {
            type: 'image',
            url: '/portfolio/woolworths/digital-refresh/section3.png',
            aspect: 'portrait',
            fit: 'contain'
          }
        ]
      },
      {
        kicker: 'Mini proof',
        title: 'Caught on the Woolies camera',
        content: 'Woolworths happened to be filming one of their annual in-store promo pieces at our Sydney location, and I ended up appearing in a few shots while working. It was around Easter too, so yes, the bunny hat made it into the footage. It is a tiny moment, but I love it because it captures the job exactly as it felt: busy, cheerful, and very real.',
        media: [
          {
            type: 'video',
            url: '/portfolio/woolworths/digital-refresh/woolies1.mov',
            caption: 'One of the promo-shoot moments where I made it into the frame while working on the floor.',
            aspect: 'phone',
            fit: 'contain'
          },
          {
            type: 'video',
            url: '/portfolio/woolworths/digital-refresh/woolies2.mov',
            caption: 'A second little proof-of-presence moment, complete with Easter energy and a bunny hat.',
            aspect: 'phone',
            fit: 'contain'
          }
        ]
      }
    ]
  },
];

export const timeline: TimelineItem[] = [
  {
    year: '2018–2022',
    title: 'XD, SISU',
    subtitle: 'Bachelor of Event Management',
    logo: '/portfolio/personal/my_journey/sisu_logo.png'
  },
  {
    year: '2022–2023',
    title: 'TikTok',
    subtitle: 'Talent Acquisition Internship',
    logo: '/portfolio/personal/my_journey/tiktok_logo.svg'
  },
  {
    year: '2023–2025',
    title: 'USYD',
    subtitle: 'Master of Strategic Public Relations',
    logo: '/portfolio/personal/my_journey/usyd_logo.png'
  },
  {
    year: '2024–2025',
    title: 'eBest',
    subtitle: 'Marketing Internship',
    logo: '/portfolio/personal/my_journey/ebest_logo.png'
  },
  {
    year: '2025–Now',
    title: 'MissGreen',
    subtitle: 'Marketing and Social Media Specialist',
    logo: '/portfolio/personal/my_journey/missgreen_logo.png'
  },
];
