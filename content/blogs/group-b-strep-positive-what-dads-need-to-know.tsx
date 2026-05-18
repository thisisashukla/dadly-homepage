import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'
import { ChatSim } from '@/components/blog/ChatSim'

export const meta: BlogMeta = {
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
  tags: ['group B strep', 'GBS', 'pregnancy', 'labour', 'birth plan'],
  wordCount: 1950,
  faqs: [
    {
      question: 'Can Group B Strep harm my partner?',
      answer: 'GBS rarely causes illness in healthy adults. Your partner is a carrier — the bacteria is present naturally in her gut and reproductive tract, but she is not sick. The concern is specifically about the baby during birth, when the baby passes through the birth canal and may pick up the bacteria.'
    },
    {
      question: 'Does GBS affect whether we can have a C-section?',
      answer: 'If a planned C-section is performed before labour begins and before waters break, the risk of GBS transmission to the baby is very low — the baby doesn\'t pass through the birth canal. In this case antibiotics may not be required, though your OB will advise based on your specific situation.'
    },
    {
      question: 'What if the antibiotics aren\'t given in time during labour?',
      answer: 'If labour progresses quickly and there isn\'t enough time for the full 4-hour course, the baby will be more closely monitored after birth for signs of GBS infection. This is not a crisis — it\'s a higher-watch situation. The medical team knows the protocol and will manage it.'
    },
    {
      question: 'Can GBS come back or change between pregnancies?',
      answer: 'Yes — GBS can come and go. A negative test result in one pregnancy does not guarantee a negative result in the next. Testing is always repeated in each pregnancy, typically at 36–37 weeks.'
    },
    {
      question: 'What are the signs of GBS infection in a newborn to watch for?',
      answer: 'Fever, fast or laboured breathing, poor feeding, limpness or floppy muscle tone, high-pitched cry, or the baby being unusually hard to wake. These typically appear within the first 12 hours but can show up up to 7 days after birth. Contact your midwife or paediatrician immediately if you notice any of these signs.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>GBS is a common bacteria — 20–30% of pregnant women carry it. It is not an STI and does not mean your partner is unwell.</li>
          <li>The risk is during birth: without antibiotics, roughly 1 in 200 babies gets a GBS infection. With IV antibiotics in labour, that drops to around 1 in 4,000.</li>
          <li>The main change to the birth plan: arrive at hospital when labour starts — don't labour at home for hours — so antibiotics have time to work.</li>
          <li>When you walk into triage, say it out loud: "She is GBS positive." Don't assume they already know.</li>
          <li>Watch baby closely in the first 12 hours and up to 7 days for signs of infection: fever, fast breathing, poor feeding, limpness, high-pitched cry.</li>
        </ul>
      </InsightBox>

      <p>
        The call came at 36 weeks. The midwife's voicemail said your partner's Group B Strep test
        had come back positive. Please call to discuss.
      </p>

      <p>
        You listen to it twice. You have no idea what Group B Strep is. You don't know whether
        to wake your partner to tell her, or whether this is something to bring up calmly at
        breakfast. You don't know how worried to be. And you definitely don't know what it means
        for the birth that is now — suddenly, viscerally — four weeks away.
      </p>

      <p>
        This is what it means. And here's what you need to do.
      </p>

      <StatRow stats={[
        { value: '20–30%', label: 'of pregnant women carry Group B Strep' },
        { value: '1 in 4,000', label: 'risk of GBS infection in baby with IV antibiotics during labour' },
        { value: '4 hours', label: 'minimum antibiotic lead time before delivery for best protection' }
      ]} />

      <h2>What GBS actually is</h2>

      <p>
        Group B Streptococcus is a bacteria that lives naturally in the gut and lower reproductive
        tract. It is not a sexually transmitted infection. It is not a sign that anything has gone
        wrong. It is not a new infection — it's been there, as part of the normal bacterial
        environment of the body, and the test simply found it.
      </p>

      <p>
        About one in four pregnant women carries GBS. Most carriers are completely healthy — no
        symptoms, no illness, nothing to treat. The bacteria causes them no harm at all.
      </p>

      <p>
        The specific concern is this: during a vaginal birth, a baby passing through the birth
        canal can pick up the bacteria. For most babies that exposure is harmless. But for a
        small number, GBS can cause a serious infection — pneumonia, meningitis, or sepsis —
        usually within the first 12 hours after birth.
      </p>

      <PullQuote>
        GBS is not an infection in the usual sense. Your partner isn't sick. She is a carrier.
        The only clinical significance is what happens during birth — and that is very manageable.
      </PullQuote>

      <h2>The test, and what a positive result actually means</h2>

      <p>
        The GBS test is done at 36–37 weeks. It's a swab — vaginal and rectal — and results
        come back within roughly 48 hours. Entirely routine. Many women don't even remember
        it being done alongside everything else at that point in pregnancy.
      </p>

      <p>
        A positive result means she carries the bacteria. That's it. It doesn't tell you the
        quantity. It doesn't mean the baby is at high risk right now. It means the birth plan
        gets one important addition.
      </p>

      <ChatSim
        label="What I would have typed at 36 weeks if I'd had Dadly"
        messages={[
          { name: 'Me', text: 'My partner just tested positive for Group B Strep at 36 weeks. I don\'t know what that means. How worried should I be?' },
          { name: 'AI', text: 'This is a really common result — about 1 in 4 pregnant women carry GBS, and the vast majority have completely straightforward births. Your partner isn\'t ill. GBS is a normal bacteria found in the gut and reproductive tract. The positive result just means the birth team needs to give her IV antibiotics when labour starts, ideally at least 4 hours before delivery. With that in place, the risk of the baby getting a GBS infection drops from about 1 in 200 to around 1 in 4,000. The birth plan doesn\'t need to change dramatically — she can still have an unmedicated birth, use the birth pool, move around freely.' },
          { name: 'Me', text: 'Does this mean she can\'t give birth naturally or use the water pool?' },
          { name: 'AI', text: 'No — she can absolutely still have the birth she\'s planned. The antibiotics are given via IV, but the IV line doesn\'t restrict movement. She can walk, use a birth ball, get in and out of the pool between doses. The main practical change is arriving at the hospital when labour begins rather than waiting at home — that\'s how you ensure the antibiotics have enough time to work before delivery.' }
        ]}
      />

      <h2>The treatment — and what changes (and what doesn't)</h2>

      <p>
        The intervention is straightforward: IV antibiotics, started when labour begins, given
        every four hours. The goal is at least four hours of antibiotic cover before delivery —
        that's when the protection is strongest.
      </p>

      <p>
        The IV doesn't mean she's stuck in bed. The pole is on wheels. She can walk. She can
        use the birth pool between doses — many hospitals are fine with this. She can move freely
        in the room. It's an inconvenience, not a restriction.
      </p>

      <p>
        What actually changes about the birth plan? Mostly one thing: arrival time. If you were
        planning to labour at home for several hours before going in, that plan needs to change.
        When labour starts — real contractions, regular and strengthening — you go in. Because
        the antibiotics need time, and that time starts when the drip goes in.
      </p>

      <InsightBox label="What GBS positive does NOT change">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>She can still have an unmedicated birth if that's the plan</li>
          <li>She can still use the birth pool (usually between antibiotic doses)</li>
          <li>She can still move freely and use different positions</li>
          <li>A C-section may not require antibiotics if performed before labour and before waters break</li>
          <li>She can still have delayed cord clamping, skin-to-skin, all of it</li>
        </ul>
      </InsightBox>

      <h2>Your job during all of this — specifically</h2>

      <p>
        There are three things I'd tell every dad in this situation. They're practical.
        They matter.
      </p>

      <p>
        <strong>Know the status before labour starts.</strong> Don't let this information live
        only on the midwife's records. Know it yourself. The result, when it came, what it means
        for the birth. If your partner is in active labour and you're doing the talking,
        you need to have this ready.
      </p>

      <p>
        <strong>Say it out loud when you arrive at triage.</strong> Don't assume the hospital
        has the note. Don't assume the handover happened. The first thing you say — before
        anything else — is: "She is GBS positive." Say it directly to the midwife on arrival.
        This is not dramatic. It is important.
      </p>

      <p>
        <strong>Watch the baby in the first week.</strong> With antibiotics given in time, the
        risk is very small. But GBS infection in a newborn can appear within hours, or up to
        seven days after birth. The early-onset type (first 7 days, most commonly day one)
        is the one associated with labour. Late-onset GBS (7 days to 3 months) is rarer but
        possible.
      </p>

      <PullQuote>
        The one sentence that matters most when you walk into that hospital: "She is GBS positive." Say it first. Don't wait for someone to ask.
      </PullQuote>

      <h2>What to watch for in the baby after birth</h2>

      <p>
        Most newborns with GBS exposure are completely fine. But knowing the signs means
        you catch it fast if something does develop.
      </p>

      <p>
        In the first 12 hours, and up to 7 days, watch for: fever or temperature instability,
        fast or laboured breathing, poor feeding or unusual reluctance to feed, limpness or
        floppy muscle tone (not normal newborn squishiness — noticeably low tone), a high-pitched
        or unusual cry, or the baby being very difficult to wake.
      </p>

      <p>
        Any of these: call your midwife or go straight to the hospital. Don't wait and see.
        GBS infections, when caught early, are treated effectively with antibiotics. The outcomes
        when caught promptly are good. The danger is in waiting.
      </p>

      <InsightBox label="Early vs. late onset GBS in newborns">
        <strong>Early-onset GBS</strong> appears within the first 7 days — most commonly within
        the first 12 hours. It is associated with transmission during birth. This is what
        IV antibiotics in labour prevent.{' '}
        <strong>Late-onset GBS</strong> (7 days to 3 months) can occur even when birth
        went well and antibiotics were given. It is less common. The signs are the same:
        fever, fast breathing, poor feeding, unusual limpness. Always contact your healthcare
        provider if you're concerned.
      </InsightBox>

      <h2>A note on birth plans and keeping things calm</h2>

      <p>
        The GBS result, when it arrives, often comes by letter or through a patient portal,
        with no context and no explanation. Just a positive result and some medical terminology.
        If you've been using Dadly to track the pregnancy, you can put the result straight
        into the app and get a plain-English explanation of what it means for your specific
        week and situation — rather than falling into a Google spiral at 11pm.
      </p>

      <p>
        If you're preparing for the delivery room and want to know what to expect more broadly,
        our guide on{' '}
        <a href="/blog/what-to-expect-in-delivery-room-first-time-dad">what to expect in the delivery room as a first-time dad</a>{' '}
        covers the whole picture. And if you're putting together your hospital bag,
        the{' '}
        <a href="/blog/hospital-bag-checklist-for-dad">hospital bag checklist for dad</a>{' '}
        has everything you'll want to have ready.
      </p>

      <p>
        For a broader look at where you are at this point in the pregnancy, the{' '}
        <a href="/blog/week-28-pregnancy-dads-guide">week 28 pregnancy guide for dads</a>{' '}
        covers what's happening in the third trimester and how to prepare. And if the GBS
        result came to you through a medical report or letter and you'd like to understand it
        fully,{' '}
        <a href="/blog/i-asked-ai-every-question-pregnancy">using AI to understand pregnancy scan and lab results</a>{' '}
        explains exactly how to approach that.
      </p>

      <p>
        The positive result felt alarming. It is manageable. The system has a clear protocol,
        and the protocol works. Your job is to know the plan, say the words at triage, and
        watch the baby carefully in the first week. That's it.
      </p>
    </article>
  )
}
