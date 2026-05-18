import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'
import { ChatSim } from '@/components/blog/ChatSim'

export const meta: BlogMeta = {
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
      answer: 'Clinically, usually not. An anterior placenta (at the front) means kicks feel slightly more muffled and may be harder to feel early on. It doesn\'t affect how the pregnancy progresses for most women. The main exception is placenta praevia — where the placenta covers the cervix — which is flagged at the scan and monitored.'
    },
    {
      question: 'What is a soft marker at the anatomy scan?',
      answer: 'A soft marker is a finding that slightly raises the statistical probability of a chromosomal condition — but is also found in completely healthy babies. One example is a choroid plexus cyst (CPC): a small fluid-filled space in the brain\'s choroid plexus. CPCs appear in about 1–2% of all pregnancies and resolve by week 28 in most cases. On its own, a CPC carries a very low clinical significance. Context — other findings, prior screening results — matters enormously.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>The 20-week anatomy scan checks the baby head to toe — brain, heart, spine, limbs, organs — and takes 45–60 minutes.</li>
          <li>About 3–5% of scans flag something that needs follow-up. Being called back is common and is not the same as something being wrong.</li>
          <li>Soft markers are findings that sound alarming but often resolve and frequently mean nothing in isolation.</li>
          <li>The heart is the most complex thing they check — it sometimes needs a dedicated follow-up scan, and that's normal.</li>
          <li>Come hydrated, bring your partner, take notes — and if you get a report you can't read, Dadly can translate it for you.</li>
        </ul>
      </InsightBox>

      <p>
        At around week 19, someone handed me an appointment letter for the "anomaly scan."
        That word — anomaly — sat in my brain for two weeks. Even though I'd read about this scan.
        Even though I knew it was routine. Even though every pregnancy book describes it as
        "exciting." Anomaly. The word doesn't help.
      </p>

      <p>
        The 20-week anatomy scan is routine in the same way that a really detailed engineering
        inspection is routine. It's thorough. It covers a lot of ground. And occasionally it
        finds something that needs a closer look. Most of the time, everything is fine.
        But if you walk in without knowing what they're checking — or you walk out with a
        report full of clinical terms you don't understand — the experience can go from
        exciting to terrifying very quickly.
      </p>

      <p>
        This is the guide I wanted before we went in. Everything they check, why they check it,
        what happens if they find something, and what you can actually do to be useful that day.
      </p>

      <StatRow stats={[
        { value: '45–60', label: 'minutes the scan typically takes' },
        { value: '3–5%', label: 'of scans flag something needing follow-up' },
        { value: '~20', label: 'anatomical structures checked head to toe' }
      ]} />

      <h2>What the anatomy scan actually is</h2>

      <p>
        The anatomy scan — also called the anomaly scan, the mid-pregnancy scan, or the
        level 2 ultrasound — is a detailed ultrasound done between 18 and 22 weeks, most
        commonly at around 19–20 weeks. It's not a quick heartbeat check. It's a systematic,
        head-to-toe examination of the baby's structures.
      </p>

      <p>
        The sonographer is working through a checklist. They need to see specific views of
        specific structures. The baby has to be in the right position for each one, which is
        partly why the scan can take up to an hour. If the baby is curled up or facing the
        wrong way, they'll wait or ask your partner to move around a bit.
      </p>

      <p>
        This scan is also when most hospitals will confirm the position of the placenta,
        check the amniotic fluid levels, and take growth measurements. And yes — if you want
        to know the sex, this is typically when that's visible, though not all hospitals tell you.
      </p>

      <h2>What they're checking, head to toe</h2>

      <p>
        Here's what the sonographer is actually looking at. Knowing this in advance makes the
        scan far less mysterious.
      </p>

      <p>
        <strong>Head and brain.</strong> They measure the head circumference and check the
        brain's key structures — the ventricles (fluid-filled spaces), the cerebellum, and
        the skull shape. They're looking for signs of conditions like hydrocephalus (excess
        fluid) or neural tube issues at the top of the spine.
      </p>

      <p>
        <strong>Face.</strong> They check the lip and palate for signs of cleft, the nose bone
        (nasal bone absence can be a soft marker for Down's), and eye positioning.
        This is often where you get the clearest "face" view — the one that makes the baby
        feel suddenly, unambiguously real.
      </p>

      <p>
        <strong>Heart.</strong> This is the most complex part of the scan. The heart at 20 weeks
        is roughly the size of a walnut and beating at 120–160 bpm. The sonographer checks
        the four-chamber view and the outflow tracts — the major vessels leaving the heart.
        The outflow tracts are technically difficult to image, and if they can't get a good view,
        they'll often schedule a follow-up cardiac scan. This is extremely common and does not
        mean anything is wrong with the heart.
      </p>

      <p>
        <strong>Lungs and diaphragm.</strong> They check for any fluid in the chest and confirm
        the diaphragm is intact — ruling out diaphragmatic hernia, where abdominal organs
        can herniate into the chest cavity.
      </p>

      <p>
        <strong>Abdomen.</strong> The stomach should be visible as a fluid-filled bubble —
        confirming the baby is swallowing. They check the kidneys and bladder are present
        and the right size, and look at the abdominal wall where the cord attaches.
      </p>

      <p>
        <strong>Spine.</strong> This has to be checked at every single level — the vertebrae
        need to be seen closing properly around the spinal cord from neck to sacrum.
        This rules out spina bifida. The baby has to be positioned just right for this view.
      </p>

      <p>
        <strong>Limbs.</strong> Arms, legs, hands, feet. They count fingers and toes on screen,
        check the bone lengths (femur length, humerus length), and look at the positioning
        of the feet.
      </p>

      <p>
        <strong>Umbilical cord.</strong> A normal cord has three vessels — two arteries and
        one vein. A two-vessel cord (single umbilical artery) is found in about 1% of
        pregnancies and usually has no significance, but will be monitored.
      </p>

      <p>
        <strong>Placenta and fluid.</strong> They note where the placenta sits — whether it's
        posterior, anterior, fundal, or low-lying. They also measure amniotic fluid volume.
        Both matter for understanding how the pregnancy will progress.
      </p>

      <PullQuote>
        The moment the sonographer zoomed in on the face and I could make out a nose, a chin,
        closed eyes — that was the first time the pregnancy stopped being a concept and
        became a person. Nothing prepares you for that.
      </PullQuote>

      <h2>When they say they need a follow-up</h2>

      <p>
        Around 3–5% of anatomy scans flag something that needs further assessment. That sounds
        small, but it still means tens of thousands of couples every year are handed a letter
        asking them to come back. If that happens to you, here is what it almost certainly means:
        they couldn't get a clear view of a specific structure, or they saw a finding they want
        to look at again in 2–4 weeks.
      </p>

      <p>
        The most common reason for a follow-up is not that something is wrong — it's that
        the baby was in a bad position and they couldn't complete the checklist. Particularly
        for the heart outflow tracts and the spine, the imaging angle has to be precise.
        If the baby doesn't cooperate, they'll ask you to come back. This happens all the time.
      </p>

      <InsightBox label="If you're asked to come back — read this first">
        A follow-up request after an anatomy scan is not a diagnosis. It is not confirmation
        that something is wrong. It means one of a few things: (1) the baby was in the wrong
        position and they couldn't complete part of the scan, (2) they saw a soft marker they
        want to reassess in a few weeks, or (3) they want a specialist opinion to be thorough.
        Most follow-up scans end with "everything looks fine on second look." Going in knowing
        this doesn't make the wait easy, but it puts the odds in perspective.
      </InsightBox>

      <h2>What soft markers actually mean</h2>

      <p>
        A soft marker is a finding that doesn't indicate a structural problem on its own,
        but that slightly raises the statistical probability of a chromosomal condition.
        The word "slightly" is doing a lot of work there — and it's important.
      </p>

      <p>
        A choroid plexus cyst is a good example. The choroid plexus is a structure in the
        brain that produces cerebrospinal fluid. Small cysts can form there — they appear in
        roughly 1–2% of all fetuses and almost always resolve completely by week 28.
        On its own, a CPC has very low clinical significance. It's only meaningful in
        combination with other findings or in the context of other risk factors.
      </p>

      <p>
        Other soft markers include a short femur, a bright spot on the heart (echogenic focus),
        mild kidney dilation, or a single umbilical artery. Each one, in isolation, is common
        in healthy pregnancies. In combination, or alongside elevated blood screening results,
        they carry more weight. Your doctor or midwife will explain the context — and if they
        don't explain it clearly enough, ask them again.
      </p>

      <ChatSim
        label="A Dadly conversation — after an anatomy scan report with a soft marker"
        messages={[
          { name: 'Me', text: 'We just got back from the 20-week scan. The report says "echogenic intracardiac focus noted in left ventricle." The sonographer said it was probably nothing but I need to understand what it means.' },
          { name: 'AI', text: 'An echogenic intracardiac focus — EIF — is a small bright spot in the heart muscle, usually in the left ventricle. It appears in roughly 3–5% of all pregnancies. It\'s essentially a tiny calcium deposit and has no effect on how the heart functions. The heart in your scan was described as structurally normal, which is the most important thing. An EIF is considered a soft marker — it can be one of many findings that, in combination, might prompt more investigation. On its own in an otherwise normal scan, most clinicians consider it a normal variant.' },
          { name: 'Me', text: 'So we don\'t need to do anything?' },
          { name: 'AI', text: 'Based on what you\'ve described — isolated EIF in an otherwise normal anatomy scan — the standard guidance is no further action. Your midwife or OB may mention it at your next appointment for completeness, but it shouldn\'t change your care plan. If your prior screening results (NIPT or combined first trimester screening) were low-risk, the EIF adds very little additional risk. If you\'re unsure, it\'s completely reasonable to ask your midwife directly: "Given this is the only finding, do we need to do anything more?" That\'s a clear, fair question.' }
        ]}
      />

      <h2>What to do on the day — practical dad stuff</h2>

      <p>
        <strong>Arrive hydrated.</strong> Not bladder-full — just well-hydrated. Amniotic fluid
        is partly made from the mother's hydration, and a well-hydrated abdomen transmits
        ultrasound better. Some hospitals ask for a partially full bladder for early scans,
        but at 20 weeks, full hydration is usually all they need.
      </p>

      <p>
        <strong>Bring a notepad.</strong> Or open the notes app on your phone before you walk in.
        The sonographer will tell you things. They'll use terms. They'll mention measurements.
        You will not remember all of it. Write down everything — even if it doesn't seem important.
        The words will be in the report later, but the context the sonographer gives verbally
        disappears fast when you're emotionally in it.
      </p>

      <p>
        <strong>Ask questions in the room.</strong> The sonographer can tell you what they're
        looking at as they go. They can't diagnose — that's the doctor's job — but they can
        explain what structure they're examining. Ask them to walk you through what they're seeing.
        Most sonographers are happy to narrate if you ask.
      </p>

      <InsightBox label="Questions worth asking at the 20-week scan">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Did you manage to see everything on the checklist, or do you need us to come back?</li>
          <li>How does the heart look — were you able to see the outflow tracts clearly?</li>
          <li>Where is the placenta sitting, and is that something we need to monitor?</li>
          <li>Is the amniotic fluid level normal?</li>
          <li>How are the growth measurements looking compared to where we should be?</li>
          <li>Is there anything in this report I should make sure to discuss with my midwife or OB?</li>
        </ul>
      </InsightBox>

      <h2>Getting the report — and actually understanding it</h2>

      <p>
        You'll usually get a written report either on the day or sent to your care provider.
        These reports are written for radiologists to communicate with doctors. They are not
        written for a dad sitting in the car park trying to understand what just happened.
      </p>

      <p>
        Terms like "normal fetal biometry," "posterior placenta grade 1," "bilateral choroid
        plexus cysts," and "no gross structural abnormality identified" are completely standard
        phrases that mean very different things to a radiologist than they sound to anyone else.
        "No gross abnormality" doesn't mean "we had to look really hard." It means "no obvious
        structural problems." That's good.
      </p>

      <p>
        If you're in this position — staring at a report full of words you can't parse — that's
        exactly what Dadly's scan report analysis is built for. Upload the report, and Dadly
        walks you through it in plain English: what each finding means, what's standard, and
        what questions to bring to your next appointment. No panic spiral. Just clarity.
      </p>

      <PullQuote>
        A scan report is written for a radiologist. What a dad needs is a translation.
      </PullQuote>

      <p>
        If you want to understand more about navigating pregnancy information as a dad —
        especially when results come back with findings you don't understand — read{' '}
        <a href="/blog/i-asked-ai-every-question-pregnancy">how I used AI through nine months
        of pregnancy</a>. And if you're coming up on the third trimester, the{' '}
        <a href="/blog/week-28-pregnancy-dads-guide">week 28 dad's guide</a> covers what
        changes after the anatomy scan.
      </p>

      <InsightBox label="Dadly can help with your scan report">
        If you've just come back from the anatomy scan with a report you're trying to decode,
        Dadly's scan analysis feature can walk you through it in plain English — every term,
        every measurement, every soft marker, explained calmly. Join the waitlist at{' '}
        <a href="/waitlist">dadly.app/waitlist</a> and get early access to the AI companion
        built specifically for dads going through this.
      </InsightBox>
    </article>
  )
}
