import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
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
  tags: ['pregnancy', 'third trimester', 'week 28', 'dad guide', 'birth preparation'],
  wordCount: 2100,
  faqs: [
    {
      question: 'Is week 28 the start of the third trimester?',
      answer: 'Yes — week 28 marks the beginning of the third trimester. Some sources say 27 weeks, but 28 is the most widely used clinical benchmark. Either way, this is when the final stretch officially begins.'
    },
    {
      question: 'What does viability at 28 weeks mean?',
      answer: 'At 28 weeks, a baby born prematurely has roughly a 90%+ survival rate with specialist neonatal intensive care. Viability technically begins at 24 weeks, but outcomes improve significantly with each passing week from there. At 28 weeks, the odds are strongly in baby\'s favour.'
    },
    {
      question: 'How often should I feel baby kicks at 28 weeks?',
      answer: 'From 28 weeks, you should feel at least 10 distinct movements in a 2-hour period during baby\'s active times. If baby\'s movement pattern changes significantly or drops off, contact your midwife. It\'s usually nothing, but it\'s always worth checking — that\'s what midwives are there for.'
    },
    {
      question: 'What is the glucose tolerance test and what do the results mean?',
      answer: 'A blood test usually done at 24–28 weeks to screen for gestational diabetes — a form of diabetes that develops during pregnancy. A result above the threshold doesn\'t mean the pregnancy is high-risk. It means dietary adjustments and closer monitoring. The majority of cases are managed with diet alone and don\'t lead to complications.'
    },
    {
      question: 'What should dads be doing to prepare at 28 weeks?',
      answer: 'Pack or at least plan the hospital bag, book the hospital tour if offered, talk through the birth plan together properly, research Group B Strep (the swab happens at week 36 but understanding it now helps), and learn the warning signs of preeclampsia. The final 12 weeks move faster than the rest of pregnancy combined.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Week 28 is the start of the third trimester — the final 12 weeks, and they go faster than the rest of pregnancy combined</li>
          <li>At 28 weeks, baby has a 90%+ survival rate with specialist care — this is a significant viability milestone</li>
          <li>Baby can open their eyes, is having REM sleep (early dreams), and has all five senses working</li>
          <li>Your partner's antenatal appointments now increase to every two weeks — more monitoring, more results to understand together</li>
          <li>The hospital bag needs to be packed now, the birth plan needs to be discussed properly, and you need to know the warning signs of preeclampsia</li>
        </ul>
      </InsightBox>

      <p>
        Week 28 snuck up on me. We'd been tracking the pregnancy week by week, reading the updates,
        but somewhere around 24 weeks the weeks started blurring into each other. And then one morning
        I pulled up the app and it said: third trimester. Week 28. Twelve weeks to go.
      </p>

      <p>
        Something changed for me that morning. Up until that point, the birth had felt like a
        theoretical future event. Week 28 made it real. Not scary — real. And with that shift came
        a sudden urgent sense that there were things I needed to actually do. Not eventually. Now.
      </p>

      <p>
        This guide is everything I wish I'd had that morning. What's happening with the baby right now
        — and it's genuinely remarkable. What your partner is going through in her body. And the
        practical checklist of what you should be doing this week, not next month.
      </p>

      <StatRow stats={[
        { value: '~90%', label: 'survival rate with specialist care if born at 28 weeks' },
        { value: '12 wks', label: 'until your due date — the final stretch starts now' },
        { value: 'Every 2', label: 'weeks — how often antenatal appointments are now' }
      ]} />

      <h2>What's happening with the baby at 28 weeks</h2>

      <p>
        Baby is now around 37cm long and weighs approximately a kilogram — roughly the size of a large
        eggplant or a small coconut. But the size is almost beside the point. What's happening developmentally
        at 28 weeks is extraordinary.
      </p>

      <p>
        <strong>The viability milestone.</strong> This is a number worth understanding. A baby born at
        28 weeks, with specialist neonatal intensive care, has roughly a 90%+ survival rate. Viability
        technically begins at 24 weeks, but at 24 weeks the odds are harder and the outcomes more uncertain.
        At 28 weeks, the odds have shifted strongly in baby's favour. This is why the third trimester
        is sometimes called the "safe zone" — not because nothing can go wrong, but because if something
        does happen and baby arrives early, neonatal medicine has come far enough that outcomes are
        genuinely good.
      </p>

      <p>
        <strong>Baby can open and close their eyes.</strong> The eyelids, which have been sealed since
        around week 10, have now opened. Baby can blink. They can detect light and dark through the
        uterine wall. If you shine a torch at the bump, baby may respond to the change in light.
      </p>

      <p>
        <strong>Baby is having REM sleep.</strong> Brain development at 28 weeks has reached the point
        where REM sleep is beginning. There's genuine scientific debate about what REM sleep in a foetus
        means — but the possibility that baby is having some version of early dreams is not entirely
        fanciful. The brain is developing rapidly and sleep is a major driver of that development.
      </p>

      <p>
        <strong>All five senses are working.</strong> Baby can hear — they've been able to for weeks,
        and at this point your voice specifically is recognisable to them. They can taste the amniotic
        fluid, which is flavoured by whatever your partner eats. They can feel touch through the uterine
        wall. They can see light and dark. This is a fully sensory human being.
      </p>

      <p>
        <strong>Kicks are strong and frequent.</strong> You should be able to feel them clearly with
        your hand on the bump. Some kicks are hard enough to see from across the room. There's a
        quality of personality to the movement now — some babies are vigorous and restless, others are
        calmer and more deliberate. Whatever pattern you're noticing is baby's pattern, and any
        significant change from that pattern is worth reporting to the midwife.
      </p>

      <InsightBox label="Try listening to the heartbeat">
        Put your ear gently against the bump and wait. It takes patience to find the right spot,
        and you might need to try several positions — low, off-centre, wherever baby's back seems
        to be. But when you find it, the heartbeat is unmistakable. Fast, clear, real. It's one
        of those moments that cuts through any abstraction you have left about this whole thing.
      </InsightBox>

      <h2>What your partner is going through right now</h2>

      <p>
        The third trimester brings a collection of symptoms that are mostly harmless but significantly
        uncomfortable. Understanding what's happening in her body makes you a better support — and
        means you know which symptoms to take seriously.
      </p>

      <p>
        <strong>Shortness of breath.</strong> The uterus is now large enough to push upward against
        the diaphragm, reducing lung capacity. She may get breathless doing things that felt easy
        at 20 weeks — walking upstairs, moving quickly, even speaking at length. This is normal
        physiology. What's not normal is breathlessness at rest or sudden severe breathlessness,
        which warrants a call to the midwife.
      </p>

      <p>
        <strong>Back pain.</strong> The weight distribution has changed significantly. The pelvis is
        loosening in preparation for birth. Most pregnant women in the third trimester have some
        degree of back or pelvic pain. If it's severe enough to affect her mobility — particularly
        pain around the front of the pelvis or difficulty walking — it may be pelvic girdle pain
        (PGP), which is worth reading about in our{' '}
        <a href="/blog/pelvic-girdle-pain-pregnancy-what-dads-need-to-know">guide to PGP for dads</a>.
        There are things that help and things that make it worse.
      </p>

      <p>
        <strong>Braxton Hicks contractions.</strong> Practice contractions — the uterus tightening
        for a period of 30 seconds to a couple of minutes, then releasing. They're typically painless
        or mildly uncomfortable, irregular, and don't increase in intensity. Real labour contractions
        are regular, intensifying, and don't stop when she changes position. If she's unsure which
        she's experiencing, the midwife would always rather she calls than doesn't.
      </p>

      <p>
        <strong>Sleep is getting difficult.</strong> The combination of physical discomfort, frequent
        urination, restless legs, and an increasingly active baby kicking at midnight makes sleep
        elusive. A pregnancy pillow helps. So does accepting that sleep in the third trimester is
        broken up and patchy, and building naps in where possible.
      </p>

      <p>
        <strong>Glucose tolerance test results.</strong> If yours came back with a raised reading,
        don't panic before you understand what it means. A result above the threshold for gestational
        diabetes doesn't mean the pregnancy is suddenly high-risk. It means dietary changes and closer
        monitoring through the rest of pregnancy. The large majority of gestational diabetes cases
        are managed with diet alone and don't lead to complications. Your midwife or obstetrician
        will guide you through what it means for your specific situation.
      </p>

      <PullQuote>
        The third trimester is when pregnancy stops being an abstract future and becomes
        an imminent reality. For dads, this is the moment to stop observing and start preparing.
      </PullQuote>

      <h2>Kick counting: what you need to know</h2>

      <p>
        From 28 weeks, your partner should be aware of baby's movements in a new, more active way.
        The benchmark most midwives use: 10 distinct movements within a 2-hour window during a time
        when baby is normally active.
      </p>

      <p>
        The more important thing than the specific number is pattern. Every baby has their own pattern —
        their active periods, their quiet periods, the times of day they tend to move most. You and your
        partner will start to know this pattern intuitively over the next few weeks. What matters is
        noticing when the pattern changes significantly — baby seeming quieter than usual, fewer movements
        over the course of a day, movements that feel different in character.
      </p>

      <p>
        If there's any concern about movement — always contact the midwife. Don't try to self-assess
        and decide it's probably fine. That's what monitoring is for, and the midwife would always
        rather check.
      </p>

      <h2>What dads need to do this week (the actual list)</h2>

      <p>
        This is where I want to be specific, because this is where a lot of dads lose time. The third
        trimester moves fast. Things that feel like they can wait often can't.
      </p>

      <p>
        <strong>Pack the hospital bag now.</strong> Not plan it. Pack it. 36 weeks feels close but
        it comes up faster than you expect, and premature labour can happen. Have a bag that's ready
        to grab. The complete list of what to pack — including the things most dads forget — is in
        our{' '}
        <a href="/blog/hospital-bag-checklist-for-dad">hospital bag checklist for dads</a>.
      </p>

      <p>
        <strong>Do the hospital tour.</strong> Most hospitals and birth centres offer these. Do it.
        Walking into a hospital in labour without knowing where you're going adds stress to an already
        intense situation. Know the entrance, the parking, the route from car park to delivery suite.
        Know where the waiting area is if they ask you to step out. Walk it once in daylight.
      </p>

      <p>
        <strong>Talk through the birth plan properly.</strong> Not "what do you want" — together.
        Her preferences, her fears, her non-negotiables. What she wants from you during active labour
        (physical presence, quiet, voice guidance, space). What she wants if it doesn't go to plan.
        Understanding her birth plan means you can advocate for it when she's in the middle of a
        contraction and can't speak for herself. That's a real and important role.
      </p>

      <p>
        <strong>Research Group B Strep.</strong> The GBS swab happens around week 36, but understanding
        it now means you won't be Googling in a panic when the results arrive. GBS is a common
        bacterium carried by around 20–30% of people — usually without symptoms — that can occasionally
        cause problems for a newborn during birth. If she tests positive, the treatment is straightforward
        (IV antibiotics during labour). It's not a catastrophe, but it does affect birth logistics.
        Everything you need to know is in our{' '}
        <a href="/blog/group-b-strep-positive-what-dads-need-to-know">Group B Strep guide for dads</a>.
      </p>

      <p>
        <strong>Know the preeclampsia warning signs.</strong> Preeclampsia is a pregnancy complication
        involving high blood pressure, and it requires prompt medical attention. The signs to watch for:
        sudden severe swelling (especially face and hands), a severe headache that won't go away,
        visual disturbances (seeing flashing lights or blurred vision), sudden upper abdominal pain,
        feeling very unwell. If she experiences any of these — call her midwife or GP immediately,
        or go to A&E if you can't reach them. Don't wait to see if it improves.
      </p>

      <InsightBox label="The conversations to have in the next four weeks">
        Birth plan. Night feeds — how do you split them? Parental leave — when does yours start,
        how long, what's the plan for returning? Who comes to visit in the first week, and who waits?
        These conversations are much easier to have now than in the fog of the first week postpartum.
        Have them now, while you're both still sleeping.
      </InsightBox>

      <h2>The emotional reality of week 28 for dads</h2>

      <p>
        The third trimester has a way of bringing everything that was vague anxiety into sharp focus.
        Birth is not an abstract future event anymore. It's 12 weeks away. And for a lot of dads,
        this is when a fresh wave of anxiety hits — about the birth, about being a parent, about
        whether you're going to be good enough at this.
      </p>

      <p>
        That anxiety is not weakness. It's information. It means you care, and it means you're starting
        to grasp the scale of what's coming. But it's worth understanding rather than suppressing it,
        because unacknowledged dad anxiety in the third trimester tends to surface in less helpful ways —
        becoming controlling about the birth plan, picking fights about small things, retreating into
        work. Naming it helps.
      </p>

      <p>
        If you want to understand what's happening psychologically for a lot of dads in the third
        trimester, our guide on{' '}
        <a href="/blog/paternal-anxiety-during-pregnancy-why-dads-worry">paternal anxiety during pregnancy</a>{' '}
        is worth reading. You're not the only one feeling this, and there are specific things that help.
      </p>

      <p>
        Couvade syndrome — sympathetic pregnancy symptoms in partners — often peaks in the third
        trimester. Sleep problems, appetite changes, mood shifts, even phantom back pain. If you've
        been experiencing some of this, you're in good company. It's real, it's common, and it's
        poorly understood. But it's also a sign that you're genuinely tuned into this pregnancy,
        which is not a bad thing.
      </p>

      <PullQuote>
        Week 28 is the moment when a lot of dads shift from "we're having a baby" to "we're
        about to have a baby." That shift is uncomfortable and exciting and important. Use it.
      </PullQuote>

      <h2>What comes next</h2>

      <p>
        The final trimester is the one where preparation becomes practical. Antenatal classes,
        hospital tours, the birth plan, the bag. But it's also the one where you get to really
        engage with the pregnancy in a physical way — feeling the kicks, maybe hearing the heartbeat,
        watching the bump change shape week by week as baby moves into position.
      </p>

      <p>
        The 20-week anatomy scan was the last big developmental checkpoint — if you haven't read
        through what that covered, our{' '}
        <a href="/blog/20-week-anatomy-scan-dad-guide">20-week anatomy scan guide for dads</a>{' '}
        explains what they were looking for. From here, the focus shifts from "is everything developing
        correctly" to "getting ready for the birth." And the birth, when it comes, will feel nothing
        like how you imagined it. The guide on{' '}
        <a href="/blog/what-to-expect-in-delivery-room-first-time-dad">what to expect in the delivery room as a first-time dad</a>{' '}
        is the most honest account I've found of what that day actually looks like.
      </p>

      <p>
        Twelve weeks. Start the bag this week. Have the conversations this week. The preparation
        you do in the third trimester is the preparation you'll be grateful for when it matters.
      </p>
    </article>
  )
}
