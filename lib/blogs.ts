export interface BlogMeta {
  slug: string
  title: string
  subtitle: string
  description: string
  keywords: string[]
  author: string
  authorRole: string
  datePublished: string
  dateModified: string
  readTime: string
  category: string
  tags: string[]
  wordCount: number
  faqs: Array<{ question: string; answer: string }>
}

export const blogRegistry: Record<string, BlogMeta> = {
  'i-asked-ai-every-question-pregnancy': {
    slug: 'i-asked-ai-every-question-pregnancy',
    title: 'I Asked AI Every Question I Was Too Scared to Ask During My Wife\'s Pregnancy',
    subtitle: 'Nine months of 2am panic. Every scan result I didn\'t understand. Every symptom that sent me spiralling. A data scientist\'s honest account of what dads actually go through.',
    description: 'A data scientist\'s honest account of 9 months of 2am panic during a high-risk pregnancy — every scan, every blood result, every terrifying moment — and what it revealed about what dads actually need.',
    keywords: ['high risk pregnancy dad', 'expecting dad anxiety', 'pregnancy scan explained', 'subchorionic hematoma', 'CTG monitor', 'what dads need during pregnancy'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-04-10',
    dateModified: '2026-04-10',
    readTime: '12 min',
    category: 'Pregnancy',
    tags: ['high-risk pregnancy', 'expecting dad', 'pregnancy anxiety'],
    wordCount: 2400,
    faqs: [
      {
        question: 'What is a subchorionic hematoma in pregnancy?',
        answer: 'A subchorionic hematoma is a collection of blood between the uterus and the gestational sac. It appears in roughly 1 in 4 early pregnancy ultrasounds. Most resolve silently by week 12–14 as the placenta matures. The prognosis is better when the clot is away from the sac and when a healthy heartbeat is already present.'
      },
      {
        question: 'What does a CTG monitor show during labour?',
        answer: 'A CTG (cardiotocography) monitor tracks two things simultaneously: the baby\'s heart rate (FHR) and uterine contractions (TOCO). Doctors look for accelerations — temporary rises in heart rate when the baby moves — as a sign the baby is active and well-oxygenated. At least two accelerations in 20 minutes is considered reassuring.'
      },
      {
        question: 'What should a dad do when he doesn\'t understand a pregnancy scan report?',
        answer: 'Ask the radiologist or OB/GYN for a plain-English explanation. Scan reports are written for medical professionals, not parents. Terms like "subchorionic collection", "echogenic focus", and "posterior placenta" can sound alarming but are often normal findings. Apps like Dadly can also explain what a report means in plain language and generate follow-up questions for the next appointment.'
      },
      {
        question: 'Is it normal for pregnancy symptoms to reduce at week 7?',
        answer: 'Yes. Pregnancy hormones don\'t increase in a straight line — symptoms can fluctuate day to day. A dip in nausea or fatigue around weeks 7–9 can be normal. However, if there is a history of pregnancy loss, an early ultrasound to confirm a heartbeat provides the most definitive reassurance. A heartbeat at 7 weeks reduces miscarriage risk significantly.'
      },
      {
        question: 'What do dads actually need during pregnancy that most apps don\'t provide?',
        answer: 'Dads need calm, contextual information written specifically for their role — not for the couple or the mother. They need help interpreting scan reports and blood results, understanding what\'s normal versus concerning, preparing questions for doctor appointments, and having a reliable source for 2am questions when they can\'t call anyone. Most pregnancy apps are written for the person carrying the baby, leaving dads to navigate uncertainty alone.'
      }
    ]
  },
  'do-dads-get-postpartum-depression': {
    slug: 'do-dads-get-postpartum-depression',
    title: 'Do Dads Get Postpartum Depression? What Every New Father Needs to Know',
    subtitle: 'The hidden numbers. How it looks different in fathers. And why it goes undetected in almost every case.',
    description: 'Explore paternal postpartum depression: the statistics, symptoms, risk factors, and what new dads need to know to recognize and manage it.',
    keywords: ['paternal postpartum depression', 'new dad depression', 'postpartum depression in fathers', 'dad mental health'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    readTime: '10 min',
    category: 'Mental Health',
    tags: ['postpartum depression', 'new dad', 'mental health'],
    wordCount: 1800,
    faqs: [
      {
        question: 'How common is paternal postpartum depression?',
        answer: 'About 1 in 10 new fathers experience postpartum depression. Some studies suggest the rate may be higher, with estimates reaching 1 in 7. Despite these numbers, paternal PPD is significantly under-diagnosed and under-treated.'
      }
    ]
  },
  'how-to-bond-with-newborn-as-a-dad': {
    slug: 'how-to-bond-with-newborn-as-a-dad',
    title: 'How to Bond With Your Newborn as a Dad (When It Doesn\'t Feel Natural Yet)',
    subtitle: 'Bonding takes time. And it grows through caregiving, not a single moment. Here\'s how to start.',
    description: 'The real story about paternal bonding: what to expect, proven techniques, and why it\'s okay if it doesn\'t feel instant.',
    keywords: ['dad bonding with newborn', 'paternal bonding', 'father infant attachment', 'newborn care for dads'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    readTime: '9 min',
    category: 'Newborn',
    tags: ['bonding', 'newborn', 'paternal attachment'],
    wordCount: 1700,
    faqs: [
      {
        question: 'When does bonding typically happen for fathers?',
        answer: 'Bonding is not a single moment — it\'s a gradual process. For fathers, it often takes weeks or even months to develop, especially if breastfeeding is the primary caregiving activity. Consistent, hands-on caregiving accelerates this bond.'
      }
    ]
  },
  'new-dad-sleep-deprivation-survival-guide': {
    slug: 'new-dad-sleep-deprivation-survival-guide',
    title: 'New Dad Sleep Deprivation: How to Survive (And Split the Night Shift Fairly)',
    subtitle: 'The science, the survival tactics, and how to navigate the 3am relationship crisis without losing your mind.',
    description: 'Practical strategies for managing sleep deprivation as a new dad, from understanding the science to implementing fair tag-team systems.',
    keywords: ['new dad sleep deprivation', 'night shift with newborn', 'sleep loss and fathers', 'parenting exhaustion'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    readTime: '11 min',
    category: 'Sleep',
    tags: ['sleep deprivation', 'newborn care', 'relationship'],
    wordCount: 1900,
    faqs: [
      {
        question: 'How much sleep do new parents typically lose?',
        answer: 'Research suggests new parents lose approximately 44 nights of sleep in the first year after a baby is born. The impact compounds over time, affecting hormones, mood, and relationship quality.'
      }
    ]
  },
  'what-to-expect-in-delivery-room-first-time-dad': {
    slug: 'what-to-expect-in-delivery-room-first-time-dad',
    title: 'What to Actually Expect in the Delivery Room: A First-Time Dad\'s Honest Guide',
    subtitle: 'Labor is nothing like TV. Here\'s what really happens, what your actual job is, and how to stay calm when things get urgent.',
    description: 'An honest, practical guide to what first-time dads should expect in the delivery room: the timeline, your role, and how to handle emergencies.',
    keywords: ['first time dad delivery room', 'labor delivery guide for fathers', 'what to expect at hospital birth', 'father during labor'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    readTime: '10 min',
    category: 'Pregnancy',
    tags: ['labor', 'delivery', 'first-time dad'],
    wordCount: 1750,
    faqs: [
      {
        question: 'What is the typical timeline of labor?',
        answer: 'Labor typically progresses through three stages: early labor (several hours, contractions 5-30 minutes apart), active labor (4-8 hours, contractions 3-5 minutes apart), and transition (30 minutes to 2 hours, very intense contractions). Then comes pushing and delivery.'
      }
    ]
  },
  'real-cost-of-having-a-baby-first-time-dads': {
    slug: 'real-cost-of-having-a-baby-first-time-dads',
    title: 'The Real Cost of Having a Baby: What No One Tells First-Time Dads',
    subtitle: 'The hospital bill, the first year essentials, childcare, and the hidden costs nobody mentions. The actual numbers.',
    description: 'A comprehensive breakdown of the real financial costs of having a baby, including hospital costs, first-year expenses, childcare, and smart savings strategies.',
    keywords: ['cost of having a baby', 'first year baby expenses', 'childcare costs', 'hospital birth costs'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-06',
    dateModified: '2026-05-06',
    readTime: '12 min',
    category: 'Finance',
    tags: ['costs', 'finance', 'budgeting'],
    wordCount: 2000,
    faqs: [
      {
        question: 'How much does a hospital birth cost in the US?',
        answer: 'Average hospital birth costs range from $10,000 to $15,000 without insurance coverage. With insurance, your out-of-pocket costs depend heavily on your plan, but typically range from $2,000 to $5,000. Emergency C-sections add $10,000-$20,000 to the bill.'
      }
    ]
  }
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogRegistry)
}

export function getBlogBySlug(slug: string): BlogMeta | null {
  return blogRegistry[slug] || null
}
