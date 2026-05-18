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
  },
  '20-week-anatomy-scan-dad-guide': {
    slug: '20-week-anatomy-scan-dad-guide',
    title: '20-Week Anatomy Scan: A Dad\'s Complete Guide',
    subtitle: 'What they\'re checking, what the numbers mean, and what to do if they find something.',
    description: 'Everything dads need to know about the 20-week anatomy scan — what\'s checked head to toe, what soft markers actually mean, and how to stay steady when they ask you to come back.',
    keywords: ['20-week anatomy scan dad', '20 week scan what to expect', 'anatomy scan soft marker', 'anomaly scan dad guide', 'fetal anatomy scan explained'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '11 min',
    category: 'Pregnancy',
    tags: ['anatomy scan', 'pregnancy', 'second trimester', 'ultrasound'],
    wordCount: 2100,
    faqs: [
      {
        question: 'Can the anatomy scan miss abnormalities?',
        answer: 'Yes. The 20-week scan is a screening tool, not a guarantee. Around 50% of heart defects are missed on anatomy scan. Some conditions only become visible later in pregnancy. A normal scan is very reassuring, but it doesn\'t mean everything will be perfect — and a flagged finding doesn\'t mean something is wrong.'
      },
      {
        question: 'What happens if something is found at the anatomy scan?',
        answer: 'It depends on what\'s found. Most findings result in a follow-up scan in 2–4 weeks, a referral to a fetal medicine specialist, or simply watchful waiting. The vast majority of flagged findings — especially soft markers — either resolve on their own or turn out to be insignificant. Being asked to come back is not the same as something being wrong.'
      },
      {
        question: 'Can dads and partners attend the 20-week anatomy scan?',
        answer: 'Yes, and they absolutely should. This scan often lasts 45–60 minutes. It\'s the most detailed look at your baby before birth. In most hospitals, one support person is welcome throughout. Bring your partner. You\'ll both remember it.'
      },
      {
        question: 'Does it matter if the placenta is posterior versus anterior?',
        answer: 'An anterior placenta (at the front) means kicks may feel more muffled — the placenta is cushioning them. There is no clinical significance for most pregnancies. A low-lying placenta (placenta praevia) is different and will be monitored closely — you\'ll be told if this applies.'
      },
      {
        question: 'What is a soft marker at the anatomy scan?',
        answer: 'A soft marker is a minor finding that slightly increases the statistical probability of certain conditions — but often resolves and frequently means nothing. Common examples: a choroid plexus cyst (a tiny fluid-filled space in the brain, present in 1–2% of pregnancies and almost always resolves by week 28) or an echogenic intracardiac focus (a bright spot in the heart, common and usually insignificant). If a soft marker is found, the doctor will put it in context of your age, your combined screening results, and how many markers are present.'
      }
    ]
  },
  'baby-poop-color-chart-new-dad': {
    slug: 'baby-poop-color-chart-new-dad',
    title: 'Baby Poop Color Chart: What Every New Dad Needs to Know',
    subtitle: 'From black tar to mustard yellow — what\'s normal, what\'s not, and when to actually call the doctor.',
    description: 'A plain-English guide for new dads to baby poop color, consistency, and frequency — what meconium is, why breastfed poop looks like diarrhea, and the two colors that mean call the doctor now.',
    keywords: ['baby poop color chart', 'newborn poop colors', 'meconium first poop', 'breastfed baby poop', 'baby green poop normal', 'white poop baby emergency'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '9 min',
    category: 'Newborn',
    tags: ['newborn', 'baby health', 'feeding', 'new dad basics'],
    wordCount: 1950,
    faqs: [
      {
        question: 'Is green poop normal in newborns?',
        answer: 'Mostly yes. Green poop is common in the first few days as meconium transitions to normal stool. In breastfed babies, green frothy poop can sometimes indicate a foremilk-hindmilk imbalance. Formula-fed babies often have greener stools due to iron in the formula. Occasional green stool in an otherwise happy, feeding, gaining-weight baby is not a concern.'
      },
      {
        question: 'Why does breastfed baby poop look like diarrhea?',
        answer: 'Because it\'s supposed to. Breastmilk is almost entirely absorbed, leaving very little solid waste. Breastfed baby stool is mustard-yellow, loose, and often seedy or grainy — and that\'s completely normal. True diarrhea in a newborn is a sudden increase in frequency and wateriness, often with mucus, and usually accompanied by other signs the baby is unwell.'
      },
      {
        question: 'What does blood in baby stool look like?',
        answer: 'Bright red streaks usually suggest a small anal fissure — common and usually harmless, but worth mentioning at the next appointment. A pink tinge throughout the stool could indicate something further up the GI tract. Red or pink poop should always get a call to your doctor or health visitor the same day.'
      },
      {
        question: 'How often should a newborn poop?',
        answer: 'It varies enormously. In the first weeks, breastfed babies often poop up to 8–10 times a day. Then around 6 weeks, many can go anywhere from 1–2 days to a full week without pooping. Both are normal if the baby is feeding well, gaining weight, and the stool is soft when it comes. Formula-fed babies tend to poop more consistently — usually once or more per day.'
      },
      {
        question: 'When should baby poop stop being yellow and seedy?',
        answer: 'Around 4–6 months when solid foods begin. The introduction of purees changes color and texture significantly — it becomes browner, thicker, and more adult-like in smell. Until then, yellow and seedy (for breastfed babies) is exactly right.'
      }
    ]
  },
  'pelvic-girdle-pain-pregnancy-what-dads-need-to-know': {
    slug: 'pelvic-girdle-pain-pregnancy-what-dads-need-to-know',
    title: 'Pelvic Girdle Pain During Pregnancy: What Dads Need to Know at 3am',
    subtitle: 'She can\'t turn over in bed. You don\'t know what to do. Here\'s what actually helps.',
    description: 'A practical guide for dads when their partner has pelvic girdle pain (PGP) during pregnancy — what it is, how to help at night, what not to do, and whether it affects the birth.',
    keywords: ['pelvic girdle pain pregnancy', 'SPD pregnancy partner help', 'PGP pregnancy dad guide', 'symphysis pubis dysfunction', 'how to help partner with PGP'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '10 min',
    category: 'Pregnancy',
    tags: ['PGP', 'SPD', 'pregnancy pain', 'partner support'],
    wordCount: 2000,
    faqs: [
      {
        question: 'Is pelvic girdle pain the same as SPD?',
        answer: 'Not exactly, but the terms are often used interchangeably. Symphysis Pubis Dysfunction (SPD) refers specifically to pain at the symphysis pubis — the joint at the front of the pelvis. Pelvic Girdle Pain (PGP) is the broader term covering pain in any of the three pelvic joints. The management is similar for both.'
      },
      {
        question: 'How can I help my partner with PGP at night?',
        answer: 'The most immediately helpful things: put a pillow between her knees when she\'s lying on her side — this alone reduces strain significantly. When she needs to turn over, help her roll as a single unit — knees together, move hips and shoulders at the same time. Make sure she swings both legs off the bed together rather than one at a time.'
      },
      {
        question: 'Does pelvic girdle pain affect labor and birth?',
        answer: 'Usually not significantly. Most women with PGP are able to give birth vaginally. Let the midwifery team know in advance — they can plan positions that don\'t require wide leg separation. A pool birth often helps as the water reduces load on the joints.'
      },
      {
        question: 'Will PGP go away after the baby is born?',
        answer: 'Usually yes, though the timeline varies. Many women notice significant improvement within days to weeks of birth as relaxin levels fall. For some, it takes months. Postnatal physiotherapy speeds recovery considerably.'
      },
      {
        question: 'When should we see a physiotherapist about PGP?',
        answer: 'As soon as it starts. Early diagnosis leads to much better management. Your GP or midwife can refer you, or you can self-refer to many NHS physiotherapy services. Don\'t wait until it becomes debilitating.'
      }
    ]
  },
  'why-is-my-newborn-grunting': {
    slug: 'why-is-my-newborn-grunting',
    title: 'Why Is My Newborn Grunting? Normal vs. Concerning',
    subtitle: 'Alarming sounds from a sleeping baby are almost always normal. Here\'s what\'s actually happening and when to worry.',
    description: 'Newborn grunting explained for new dads: grunting baby syndrome, active sleep sounds, and the warning signs that actually need attention.',
    keywords: ['newborn grunting', 'grunting baby syndrome', 'infant dyschezia', 'newborn sounds', 'baby grunting in sleep'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '8 min',
    category: 'Newborn',
    tags: ['newborn', 'grunting', 'baby sounds', 'infant dyschezia'],
    wordCount: 1900,
    faqs: [
      {
        question: 'Is grunting baby syndrome dangerous?',
        answer: 'No — it\'s a coordination issue, not a medical problem. Baby simply hasn\'t learned to relax the pelvic floor while bearing down. It looks alarming but it\'s harmless and resolves on its own by around 12 weeks.'
      },
      {
        question: 'Should I help my baby poop when they\'re grunting and straining?',
        answer: 'No. Baby needs to learn this muscle coordination themselves. Stimulating them resets the learning process. Let them work through it. The only exception: if baby hasn\'t produced a stool in 5 or more days, call your doctor.'
      },
      {
        question: 'Why does my newborn grunt in their sleep?',
        answer: 'Newborns spend about 50% of their sleep time in active (REM) sleep, compared to around 25% for adults. Active sleep is loud — grunts, sighs, twitches, and small cries are all normal. Baby is not in distress.'
      },
      {
        question: 'When will grunting baby syndrome go away?',
        answer: 'Typically by around 12 weeks. As baby\'s muscles mature and coordination improves, the straining and grunting during bowel movements resolves on its own. No treatment is needed or recommended.'
      },
      {
        question: 'How do I know if my newborn\'s grunting is a sign of a breathing problem?',
        answer: 'Concerning signs: grunting with every single breath (not just during straining or sleep), fast breathing over 60 breaths per minute, blue or grey lips or skin, flared nostrils, or the chest visibly sucking inward between the ribs. If you see any of these — call emergency services immediately.'
      }
    ]
  },
  'hospital-bag-checklist-for-dad': {
    slug: 'hospital-bag-checklist-for-dad',
    title: 'Hospital Bag Checklist for Dad: What to Actually Pack',
    subtitle: 'Most dad bag lists are three bullet points at the bottom of the mum\'s list. You\'re potentially there for four days. Pack properly.',
    description: 'The complete hospital bag checklist for dads — what to pack, what everyone forgets, and how to stay functional so you can actually support your partner.',
    keywords: ['hospital bag for dad', 'hospital bag checklist dad', 'what to pack in hospital bag dad', 'birth bag for dads'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '9 min',
    category: 'Pregnancy',
    tags: ['hospital bag', 'birth preparation', 'labour', 'pregnancy'],
    wordCount: 2000,
    faqs: [
      {
        question: 'How many nights should I pack for in a hospital bag?',
        answer: 'For a vaginal birth, typically 1–2 nights. For a planned or emergency C-section, 2–4 nights. Pack for the longer scenario regardless — you often don\'t know which way it\'s going until it\'s happening.'
      },
      {
        question: 'Can dads stay overnight at the hospital?',
        answer: 'It varies by hospital and room type. Many hospitals allow a partner to stay overnight in a private room, but not in shared bays. Call ahead to ask specifically rather than assuming or finding out at 2am.'
      },
      {
        question: 'What snacks are best for a long labour?',
        answer: 'High-calorie, no-preparation snacks that won\'t make you feel nauseous: protein bars, nuts, dried fruit, crackers. Avoid anything with a strong smell — she may be extremely sensitive to food odours during active labour.'
      },
      {
        question: 'Should I bring a camera or just use my phone?',
        answer: 'Phone is usually fine if storage is cleared and battery is full. If proper birth photos matter to you, bring a dedicated camera — phone shots in dim hospital lighting often disappoint. Clear the storage beforehand regardless.'
      },
      {
        question: 'What\'s the one thing dads always forget to pack?',
        answer: 'Food and water for themselves. Everyone remembers things for the mum and baby. No one packs a proper insulated water bottle and two days of snacks for the person standing at the bedside for 12–18 hours.'
      }
    ]
  },
  'week-28-pregnancy-dads-guide': {
    slug: 'week-28-pregnancy-dads-guide',
    title: 'Week 28 Pregnancy: The Dad\'s Complete Guide to the Third Trimester',
    subtitle: 'The third trimester starts now. Here\'s what\'s happening with the baby, what your partner is experiencing, and what you actually need to do this week.',
    description: 'Week 28 pregnancy guide for dads: what baby looks like, what your partner is going through, and the practical steps to take as the third trimester begins.',
    keywords: ['28 weeks pregnant dad', 'third trimester dad guide', 'week 28 pregnancy', 'pregnancy third trimester partner'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '10 min',
    category: 'Pregnancy',
    tags: ['pregnancy', 'third trimester', 'week 28', 'birth preparation'],
    wordCount: 2100,
    faqs: [
      {
        question: 'Is week 28 the start of the third trimester?',
        answer: 'Yes — week 28 marks the beginning of the third trimester. Some sources say 27 weeks, but 28 is the most widely used clinical benchmark.'
      },
      {
        question: 'What does viability at 28 weeks mean?',
        answer: 'At 28 weeks, a baby born prematurely has roughly a 90%+ survival rate with specialist neonatal intensive care. Viability technically begins at 24 weeks, but outcomes improve significantly with each passing week.'
      },
      {
        question: 'How often should I feel baby kicks at 28 weeks?',
        answer: 'From 28 weeks, you should feel at least 10 distinct movements in a 2-hour period during baby\'s active times. If baby\'s movement pattern changes significantly or drops off, contact your midwife — that\'s what they\'re there for.'
      },
      {
        question: 'What is the glucose tolerance test and what do the results mean?',
        answer: 'A blood test usually done at 24–28 weeks to screen for gestational diabetes. A result above the threshold doesn\'t mean the pregnancy is high-risk — it means dietary adjustments and closer monitoring. The majority of cases are managed with diet alone.'
      },
      {
        question: 'What should dads be doing to prepare at 28 weeks?',
        answer: 'Pack or plan the hospital bag, do the hospital tour, talk through the birth plan together, research Group B Strep (the swab is at 36–37 weeks), and know the warning signs of preeclampsia. The last 12 weeks go faster than you think.'
      }
    ]
  },
  'group-b-strep-positive-what-dads-need-to-know': {
    slug: 'group-b-strep-positive-what-dads-need-to-know',
    title: 'Group B Strep Positive: What Dads Need to Know',
    subtitle: 'The test, the result, what it actually means for the birth — and the one thing you must tell triage when labour starts.',
    description: 'Your partner tested positive for Group B Strep. Here\'s what it means, what happens next, and what dads specifically need to know before and during labour.',
    keywords: ['group B strep pregnancy dad', 'GBS positive pregnancy', 'group B streptococcus birth plan', 'GBS antibiotics labour'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '9 min',
    category: 'Pregnancy',
    tags: ['group B strep', 'GBS', 'pregnancy', 'birth plan'],
    wordCount: 1950,
    faqs: [
      {
        question: 'Can Group B Strep harm my partner?',
        answer: 'GBS rarely causes illness in healthy adults. Your partner is a carrier — the bacteria is present naturally, but she is not sick. The concern is specifically about the baby during birth.'
      },
      {
        question: 'Does GBS affect whether we can have a C-section?',
        answer: 'If a planned C-section is performed before labour begins and before waters break, the risk of GBS transmission is very low. In this case antibiotics may not be required, though your OB will advise based on your specific situation.'
      },
      {
        question: 'What if the antibiotics aren\'t given in time during labour?',
        answer: 'If labour progresses quickly, the baby will be more closely monitored after birth for signs of GBS infection. This is not a crisis — it\'s a higher-watch situation. The medical team knows the protocol.'
      },
      {
        question: 'Can GBS come back or change between pregnancies?',
        answer: 'Yes — GBS can come and go. A negative test in one pregnancy does not guarantee a negative result in the next. Testing is always repeated in each pregnancy.'
      },
      {
        question: 'What are the signs of GBS infection in a newborn to watch for?',
        answer: 'Fever, fast or laboured breathing, poor feeding, limpness, high-pitched cry, or the baby being unusually hard to wake. These typically appear within the first 12 hours to 7 days. Contact your midwife or paediatrician immediately if you notice any of these.'
      }
    ]
  },
  'paternal-anxiety-during-pregnancy-why-dads-worry': {
    slug: 'paternal-anxiety-during-pregnancy-why-dads-worry',
    title: 'Paternal Anxiety During Pregnancy: Why Dads Worry (And What to Do About It)',
    subtitle: 'Nobody prepared you for how scared you\'d be. Here\'s why it happens, what the research actually says, and what genuinely helps.',
    description: 'Paternal anxiety during pregnancy is common, measurable, and almost never talked about. This guide covers the research, the specific fears dads carry, Couvade syndrome, and what actually helps.',
    keywords: ['paternal anxiety during pregnancy', 'expecting dad anxiety', 'couvade syndrome', 'dad pregnancy stress', 'anxiety first time father'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '11 min',
    category: 'Mental Health',
    tags: ['paternal anxiety', 'pregnancy', 'mental health', 'couvade syndrome'],
    wordCount: 2100,
    faqs: [
      {
        question: 'Is it normal for dads to feel anxious during pregnancy?',
        answer: 'Yes, and more common than most people realize. Studies suggest 25–50%+ of expectant fathers experience significant anxiety or physical Couvade symptoms during pregnancy. The cultural silence around it makes it feel more isolating than it actually is.'
      },
      {
        question: 'What is Couvade syndrome and is it real?',
        answer: 'Couvade syndrome is when expectant fathers experience pregnancy-like symptoms: nausea, heartburn, fatigue, back pain, weight gain. It\'s real — research shows measurable hormonal changes in expectant fathers, including elevated prolactin and cortisol and reduced testosterone.'
      },
      {
        question: 'Can dads get postnatal depression too?',
        answer: 'Yes — about 1 in 10 new dads experience postpartum depression. Paternal anxiety during pregnancy is a risk factor. Naming it early is protective. See our full guide to paternal postpartum depression for more.'
      },
      {
        question: 'How can I support my partner while managing my own anxiety during pregnancy?',
        answer: 'The key is not suppressing your anxiety at the cost of carrying it alone. Name it, find an outlet — exercise, a trusted friend, or a tool like Dadly — and remember that being informed reduces helplessness. You support her better when you\'re not quietly drowning.'
      },
      {
        question: 'When should a dad seek professional help during or after pregnancy?',
        answer: 'If anxiety is preventing sleep consistently, if you\'re experiencing panic attacks, if you\'re using alcohol or avoidance behaviors to cope, or if it\'s persisting into the postpartum period — speak to your GP. Anxiety in new parents is well-understood and treatable.'
      }
    ]
  },
  'best-apps-for-expecting-dads-2026': {
    slug: 'best-apps-for-expecting-dads-2026',
    title: 'Best Apps for Expecting Dads in 2026: An Honest Comparison',
    subtitle: 'I built one of these apps. Here\'s the unbiased view anyway — including where other apps genuinely do things well.',
    description: 'An honest comparison of the best pregnancy and parenting apps for dads in 2026: Daddy Up, The Big Daddy, ProDaddy, HiDaddy, BabyCenter, and Dadly.',
    keywords: ['best apps for expecting dads', 'pregnancy apps for dads', 'daddy up app', 'dadly app review', 'best dad pregnancy app 2026'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '10 min',
    category: 'Pregnancy',
    tags: ['apps', 'expecting dad', 'pregnancy', 'comparison'],
    wordCount: 2000,
    faqs: [
      {
        question: 'Are there any free pregnancy apps for dads?',
        answer: 'Yes — Daddy Up, BabyCenter, and HiDaddy all have free versions. Dadly offers a 7-day free trial. Most apps use a freemium model where the basics are free and premium features require a subscription.'
      },
      {
        question: 'Which pregnancy app is best for first-time dads?',
        answer: 'Depends on what you need. For passive week-by-week content, Daddy Up or BabyCenter. For scan report explanations and 2am AI answers, Dadly. For a couples experience, HiDaddy.'
      },
      {
        question: 'Can I use a dad app alongside my partner\'s pregnancy app?',
        answer: 'Yes — most dad-specific apps work independently. Dadly doesn\'t require your partner to have a separate app.'
      },
      {
        question: 'Do pregnancy apps for dads have medically accurate information?',
        answer: 'The better ones do. Dadly\'s content is informed by clinical sources. The Big Daddy was created by a doctor. Always treat app information as informational support, not medical advice.'
      },
      {
        question: 'What\'s the best app for understanding scan results and lab reports?',
        answer: 'Dadly — it\'s the only app that lets you describe a scan finding and get a plain-English explanation with context for your specific week and situation.'
      }
    ]
  },
  '3-month-old-baby-what-every-new-dad-should-know': {
    slug: '3-month-old-baby-what-every-new-dad-should-know',
    title: '3-Month-Old Baby: What Every New Dad Should Know',
    subtitle: 'The fog is lifting. The baby is looking at you now — actually at you. Here\'s what\'s happening, what to do, and what to watch for.',
    description: 'Everything dads need to know about a 3-month-old baby: development milestones, sleep patterns, feeding, bonding, and red flags to watch for.',
    keywords: ['3 month old baby dad', '3 month old development', 'three month old milestones', 'new dad 3 months', 'baby 3 months sleep feeding'],
    author: 'Ankur',
    authorRole: 'Founder, Dadly',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    readTime: '10 min',
    category: 'Newborn',
    tags: ['newborn', '3 months', 'baby development', 'milestones'],
    wordCount: 2050,
    faqs: [
      {
        question: 'Do 3-month-olds sleep through the night?',
        answer: 'Some do — but many don\'t, and that\'s normal. A 3-month-old sleeping a longer stretch of 5–6 hours is a good sign. Sleeping through entirely (8+ hours) is less common at this age.'
      },
      {
        question: 'How much tummy time does a 3-month-old need?',
        answer: 'Build up to 30 minutes total per day, spread across 2–3 supervised sessions. If baby hates it, try placing them on your chest face-down — this counts and is usually much more tolerated.'
      },
      {
        question: 'What developmental milestones should a 3-month-old have?',
        answer: 'By 3 months: smiling socially, tracking moving objects with eyes, lifting head and chest during tummy time, and vocalising — coos and gurgles. If your baby isn\'t showing these, mention it at the next checkup.'
      },
      {
        question: 'Can I start a sleep routine at 3 months?',
        answer: 'A loose routine — not a rigid schedule — can start now. Consistency of cues helps even if the timing varies. Full sleep training methods are generally recommended from 4–6 months at the earliest.'
      },
      {
        question: 'Is it normal for a dad to still feel disconnected from the baby at 3 months?',
        answer: 'For some dads, yes — bonding is gradual and 3 months is still early. But if you\'re feeling disconnected from everything, not just the baby — numb, withdrawn, unable to enjoy anything — that\'s worth talking to your doctor about. It may be paternal postpartum depression, which is treatable.'
      }
    ]
  },
}

export function getAllBlogSlugs(): string[] {
  return Object.keys(blogRegistry)
}

export function getBlogBySlug(slug: string): BlogMeta | null {
  return blogRegistry[slug] || null
}
