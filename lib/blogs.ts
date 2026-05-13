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
      },
      {
        question: 'How does postpartum depression in fathers differ from mothers?',
        answer: 'Maternal PPD typically presents as sadness, tearfulness, and difficulty bonding. Paternal PPD looks very different: irritability, overworking, withdrawal, hypervigilance, and emotional numbness. Dads rarely cry about it — instead they become obsessively busy or detached. This is why it goes undetected: it looks like competence, not depression.'
      },
      {
        question: 'What are the symptoms of postpartum depression in new dads?',
        answer: 'Key symptoms include emotional numbness (knowing you should feel happy but feeling nothing), irritability that seems disproportionate to the situation, withdrawal from family and social life, overworking or obsessive focus on fixing and providing, hypervigilance about the baby\'s safety, difficulty sleeping even when the baby sleeps, and increased alcohol use. These symptoms differ from classic depression, which is why they\'re often missed.'
      },
      {
        question: 'When does paternal postpartum depression typically appear?',
        answer: 'Paternal PPD can appear any time in the first year after birth, but is most common between three and six months postpartum. Unlike maternal PPD, which often peaks in the first weeks after birth, paternal PPD tends to develop more gradually as the accumulated stress of sleeplessness, financial pressure, and relationship changes builds up.'
      },
      {
        question: 'How is paternal postpartum depression treated?',
        answer: 'Paternal PPD responds well to the same treatments as other forms of depression: cognitive behavioural therapy (CBT) is highly effective, antidepressants work when needed, and improving sleep (even one longer stretch per night) helps significantly. The first step is telling your doctor or a therapist directly: "I think I might have postpartum depression." Most men find it takes being explicit — subtle hints don\'t prompt the right follow-up questions.'
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
      },
      {
        question: 'What can a new dad do to bond faster with his newborn?',
        answer: 'The fastest bonding accelerators for dads are: daily skin-to-skin contact (hold the baby against your bare chest for 20-30 minutes), owning bath time every day, taking a daily walk alone with the baby, and doing at least one night feed. These create hundreds of repetitive serve-and-return interactions that gradually wire your brain to feel the bond. Bonding follows caregiving — it doesn\'t arrive before it.'
      },
      {
        question: 'Why don\'t dads bond with babies as quickly as moms?',
        answer: 'Biology is not equal here. Mothers spend nine months with the baby and experience a large surge of oxytocin (the bonding hormone) during birth. Dads start from a different neurochemical baseline — their oxytocin does rise with caregiving, but more slowly. This isn\'t a character flaw; it\'s a different starting point that closes with consistent hands-on care.'
      },
      {
        question: 'Is it normal for a dad not to feel bonded with his baby right away?',
        answer: 'Completely normal. Many dads describe the first days and weeks as feeling detached — going through the motions without the emotional rush they expected. This is not a sign of bad parenting or lack of love. The bond builds through caregiving over weeks and months. Most dads describe a clear shift somewhere between weeks 7 and 12, when the baby starts to respond and smile specifically at them.'
      },
      {
        question: 'What if a dad still doesn\'t feel bonded at three months?',
        answer: 'A three-month timeline is still within normal range for paternal bonding. However, if you\'re not bonding and also feeling emotionally numb, empty, irritable, or disconnected from everything else in your life, that\'s worth discussing with your doctor — it may be paternal postpartum depression rather than a bonding delay. The two can look similar but have different solutions.'
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
      },
      {
        question: 'What\'s the best way to split night shifts with a newborn?',
        answer: 'The most effective approach is a hard handoff system rather than shared duty. One parent takes full responsibility for a set stretch (e.g. 10pm–1am) while the other sleeps completely. Then they fully swap. The key is that "off-duty" means genuinely off — no half-listening, no readiness to be needed. Half-sleep is not sleep, and both parents half-awake is worse than one fully awake and one fully resting.'
      },
      {
        question: 'How does sleep deprivation affect new dads specifically?',
        answer: 'Sustained partial sleep deprivation (4-5 hours per night over weeks) decreases testosterone by roughly 30%, which reduces mood, patience, and sex drive. It also shrinks the emotional regulation capacity of the prefrontal cortex, meaning small irritants trigger outsized reactions. Most 3am relationship fights are not relationship problems — they\'re sleep debt problems. Recognising this prevents a lot of damage.'
      },
      {
        question: 'When do babies start sleeping through the night?',
        answer: 'Most babies can sleep for longer stretches (5-6 hours) by around 3-4 months, though this varies widely. Many sleep through the night (7-8+ hours) by 6-9 months, especially with some form of sleep training or routine. By 12 months, most babies sleep well. If your baby is still waking frequently at 4-5 months, consulting your pediatrician about sleep training approaches is worth doing — you need sleep to be a functional parent.'
      },
      {
        question: 'How do you recover from newborn sleep deprivation?',
        answer: 'Sleep debt doesn\'t reverse quickly. After months of 4-5 hour nights, it can take several weeks of normal sleep to fully recover mood, cognitive function, and testosterone levels. Recovery starts as soon as sleep improves — even getting one 7-8 hour night per week makes a noticeable difference. The goal isn\'t catching up all at once; it\'s getting one parent fully rested on a rotating basis until the baby\'s sleep consolidates.'
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
        answer: 'Labor typically progresses through three stages: early labor (several hours, contractions 5-30 minutes apart), active labor (4-8 hours, contractions 3-5 minutes apart), and transition (30 minutes to 2 hours, very intense contractions). Then comes pushing and delivery. For first-time parents, the full process averages 12-18 hours from start to birth.'
      },
      {
        question: 'What is a dad\'s role in the delivery room?',
        answer: 'Your job is not medical — it\'s human. Be a steady, calm presence in your partner\'s line of sight. Hold her hand, apply counter-pressure to her lower back during contractions if she wants it, suggest position changes, and communicate her needs to the nursing team. Most importantly: when you don\'t know what to do, ask her "what do you need right now?" That question is almost always the right move.'
      },
      {
        question: 'What should a first-time dad bring to the hospital?',
        answer: 'Essentials: insurance cards and ID, phone chargers (long labor drains batteries), snacks for yourself (hospitals feed the patient, not the partner), a change of clothes, and a copy of your birth preferences. Useful additions: a Bluetooth speaker if your partner wants music, a phone or camera for photos, and a list of people to call after the birth. Don\'t forget to eat a proper meal before labor gets intense — you may be there 12-18 hours.'
      },
      {
        question: 'What should dads not say during labor?',
        answer: 'Avoid: "You\'re doing so good!" (sounds performative), "It\'s just contractions" (minimising), "Have you tried breathing differently?" (unsolicited advice during pain), and asking medical questions the nurses should answer. What works instead: staying physically present, making eye contact, and asking "what do you need right now?" when in doubt. During transition (the most intense phase), she may not want to be touched or spoken to — follow her lead.'
      },
      {
        question: 'What happens if there\'s an emergency C-section?',
        answer: 'If the situation is urgent, things move fast. You\'ll be given scrubs, and within minutes you\'ll both be in an operating room. Your partner will be awake (under a spinal block) unless it\'s a genuine emergency requiring general anaesthesia. You\'ll sit near her head, on the other side of a surgical drape. The procedure takes 20-45 minutes. Your job is the same: stay calm, stay present, hold her hand if you can reach it. Within an hour of the decision, you\'ll have a baby.'
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
      },
      {
        question: 'What is the average cost of childcare in the first year?',
        answer: 'Childcare is typically the largest first-year expense. In-home daycare costs $1,200-$2,500 per month; daycare centres charge $1,500-$3,500 per month; a nanny runs $2,500-$6,000+ per month (plus employer taxes). The average across care types is roughly $18,000 for the first year. In major cities, costs are substantially higher. This is often more than the salary of one parent — which is why many families do the math and find one parent staying home makes financial sense.'
      },
      {
        question: 'What baby items do you actually need to buy vs skip?',
        answer: 'Essentials (buy these): a safe sleep space (crib or bassinet), an infant car seat, diapers and wipes, basic clothing in multiple sizes, and a stroller. Budget $2,000-$3,000 total. Skip or buy secondhand: a changing table (a mat on any flat surface works), a swing (try before committing), a wipes warmer, and most specialty furniture. Never buy used: car seats (if there\'s any doubt about accident history) and crib mattresses.'
      },
      {
        question: 'How much money should you have saved before having a baby?',
        answer: 'A practical target: cover your deductible plus two months of childcare costs before the birth ($5,000-$10,000 depending on your situation), plus your regular emergency fund. If one parent is taking unpaid leave, factor in that income gap. The honest answer is that no amount feels like enough — but knowing your specific costs (call your insurance, research local childcare prices) removes the panic of the unknown. Information is more useful than a specific savings number.'
      },
      {
        question: 'What financial help is available for new parents?',
        answer: 'WIC (Women, Infants, and Children): income-based federal program covering formula and some food — many families qualify without realising it. Dependent Care FSA: lets you pay childcare costs with pre-tax dollars, saving 20-30% depending on your tax bracket. Child Tax Credit: up to $2,000 per child in federal tax credits. Employer benefits: many companies offer paid parental leave, backup childcare, or childcare FSA contributions — check your HR handbook. State programs vary widely; search your state\'s Department of Health for local support.'
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
