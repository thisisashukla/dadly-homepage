import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
  slug: 'pelvic-girdle-pain-pregnancy-what-dads-need-to-know',
  title: 'Pelvic Girdle Pain During Pregnancy: What Dads Need to Know at 3am',
  subtitle: 'She can\'t turn over in bed. You don\'t know what to do. Here\'s what actually helps.',
  description: 'A practical guide for dads when their partner has pelvic girdle pain (PGP) during pregnancy — what it is, how to help at night, what not to do, and whether it affects the birth.',
  keywords: ['pelvic girdle pain pregnancy', 'SPD pregnancy partner help', 'PGP pregnancy dad guide', 'symphysis pubis dysfunction', 'how to help partner with PGP', 'pelvic pain pregnancy pillow'],
  author: 'Ankur',
  authorRole: 'Founder, Dadly',
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  readTime: '10 min',
  category: 'Pregnancy',
  tags: ['PGP', 'SPD', 'pregnancy pain', 'second trimester', 'third trimester', 'partner support'],
  wordCount: 2000,
  faqs: [
    {
      question: 'Is pelvic girdle pain the same as SPD?',
      answer: 'Not exactly, but the terms are often used interchangeably. Symphysis Pubis Dysfunction (SPD) refers specifically to pain at the symphysis pubis — the joint at the front of the pelvis. Pelvic Girdle Pain (PGP) is the broader term that covers pain in any of the three pelvic joints — front and/or back. SPD is essentially a subset of PGP. The management is similar for both.'
    },
    {
      question: 'How can I help my partner with PGP at night?',
      answer: 'The most immediately helpful things: put a pillow (or pregnancy pillow) between her knees when she\'s lying on her side — this alone reduces strain on the pelvic joints significantly. When she needs to turn over, help her roll as a single unit — knees together, move hips and shoulders at the same time. Don\'t let her twist. Make sure she can get in and out of bed by swinging both legs off the side together rather than one at a time.'
    },
    {
      question: 'Does pelvic girdle pain affect labor and birth?',
      answer: 'Usually not significantly. Most women with PGP are able to give birth vaginally. The key is letting the midwifery team know in advance — they can plan positions that don\'t require wide leg separation, which is the main thing to avoid. A pool birth often helps as the water reduces the load on the joints. C-section is not typically recommended specifically for PGP unless there are other factors.'
    },
    {
      question: 'Will PGP go away after the baby is born?',
      answer: 'Usually yes, though the timeline varies. Many women notice significant improvement within days to weeks of birth as relaxin levels fall and the joints stabilize. For some, it takes months, particularly if they had severe PGP. Postnatal physiotherapy speeds recovery considerably. The worst thing is to assume it will just resolve on its own and do nothing — early physio makes a real difference.'
    },
    {
      question: 'When should we see a physiotherapist about PGP?',
      answer: 'As soon as it starts. Early physiotherapy leads to much better outcomes than waiting to see if it improves. A women\'s health physio can assess which joints are affected, prescribe specific exercises to stabilize the pelvis, fit a pelvic support belt if appropriate, and give both of you practical guidance for daily management. Ask your midwife for a referral — don\'t wait until it\'s affecting everything.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Pelvic girdle pain (PGP) affects around 1 in 5 pregnant women — it's caused by joints moving unevenly as relaxin loosens the ligaments.</li>
          <li>The most helpful thing you can do tonight: pillow between her knees, and help her roll as a unit when she turns over.</li>
          <li>Don't let her stand on one leg, take asymmetric steps, or do anything that requires the pelvis to bear uneven weight.</li>
          <li>Physiotherapy is the first-line treatment — and the sooner the referral happens, the better the outcome.</li>
          <li>PGP doesn't usually affect how the birth goes, and usually resolves after delivery. But it can take time, and postnatal physio helps.</li>
        </ul>
      </InsightBox>

      <p>
        It's 3am. Your partner just woke you up — not with a shout, but with that sound.
        The sharp intake of breath, the held pause, the slow exhale. She's trying to
        turn over in bed and she can't. She's been lying on the same side for two hours
        and her hip is screaming, but moving means pain at the front of her pelvis,
        and the back, and sometimes the thighs. And you're sitting up in the dark trying
        to work out what you're supposed to do.
      </p>

      <p>
        If this is where you are, you're in the right place. What your partner is experiencing
        is almost certainly pelvic girdle pain — PGP — and it is real, it is genuinely painful,
        and it is one of the most under-talked-about pregnancy experiences that affects dads
        too, because you're the one next to her at 3am trying to help.
      </p>

      <p>
        This article covers what PGP actually is, what you can do right now to make her
        more comfortable, what not to do, and what the longer road looks like.
      </p>

      <StatRow stats={[
        { value: '1 in 5', label: 'pregnant women experience pelvic girdle pain' },
        { value: 'T2–T3', label: 'when PGP typically starts and peaks' },
        { value: '1st', label: 'line treatment is physiotherapy — not rest alone' }
      ]} />

      <h2>What pelvic girdle pain actually is</h2>

      <p>
        The pelvis is a ring of bones connected by three joints. During pregnancy,
        the body releases a hormone called relaxin — its job is to soften the ligaments
        and cartilage around those joints, making the pelvis more flexible for birth.
        That's a good thing. The problem is that relaxin doesn't always work evenly.
        If the three joints start moving at different rates or extents, the pelvis becomes
        unstable. That instability causes pain — sometimes at the front (the symphysis pubis,
        the joint you can feel at the base of your abdomen), sometimes at the back
        (the sacroiliac joints), sometimes both.
      </p>

      <p>
        The pain is not just "pregnancy discomfort." Women with PGP describe it as sharp,
        stabbing, or burning. It can radiate into the hips, buttocks, and inner thighs.
        It is made worse by anything that puts uneven or excessive load on the pelvic joints —
        walking, climbing stairs, getting dressed, rolling over in bed, standing on one leg,
        or pushing a trolley in the supermarket.
      </p>

      <p>
        It is not dangerous. The baby is not in danger. But it is genuinely, significantly
        painful, and it can deteriorate quickly if it's not managed. Your partner is not
        being dramatic.
      </p>

      <h2>SPD and PGP — the terminology</h2>

      <p>
        You may hear the term SPD — Symphysis Pubis Dysfunction. This refers specifically
        to pain and instability at the front joint of the pelvis, the symphysis pubis.
        PGP is the broader term that covers all three pelvic joints — front and back.
        In practice, the two terms are used interchangeably by many midwives and GPs,
        and the management is similar. If someone says "she has SPD," that's PGP.
        If they say PGP, that may include the front joint too.
      </p>

      <p>
        The distinction matters a little for physio treatment — a good women's health
        physiotherapist will assess which joints are affected and tailor the exercises
        accordingly. But from a "what can I do to help her tonight" perspective, the
        approach is the same regardless of the label.
      </p>

      <PullQuote>
        PGP is not something she should walk through. It's not a test of toughness.
        It's a joint problem with a management plan — and the sooner that plan starts,
        the better.
      </PullQuote>

      <h2>The 3am emergency response — what you can do right now</h2>

      <p>
        If your partner is in pain and you need practical steps immediately, here they are:
      </p>

      <p>
        <strong>Pillow between the knees.</strong> If she's lying on her side, a pillow
        between the knees keeps the hips and pelvis aligned and takes significant strain off
        the pelvic joints. A pregnancy pillow — the long U-shaped or C-shaped kind — does
        this job well and also supports the bump. If you don't have one, a regular pillow
        works. This is the single most immediately effective thing. If her pelvis is killing
        her right now, try this first.
      </p>

      <p>
        <strong>Roll as a unit.</strong> When she needs to turn over, help her do it as one
        movement — knees together, hips and shoulders moving simultaneously, rolling like a
        log. The thing that hurts most is the twisting motion where the hips go one way
        and the shoulders go another. Eliminate the twist. Get behind her, put your hands
        on her hip and shoulder, and move together. She tells you when, you move with her.
      </p>

      <p>
        <strong>Getting out of bed.</strong> Help her swing both legs off the side of the
        bed together — not one leg first. One leg first creates exactly the kind of asymmetric
        load on the pelvis that makes PGP worse. Both legs together, swing to the side,
        push up to sitting.
      </p>

      <p>
        <strong>No standing on one leg.</strong> Getting dressed is one of the worst moments
        for PGP — pulling on trousers or socks while standing on one foot puts maximum
        uneven load on the pelvis. Have her sit on the bed or a chair to get dressed.
        Every time. Even if it feels like a faff. It makes a real difference.
      </p>

      <InsightBox label="The 4 rules for PGP nights">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Pillow between the knees — every time she lies on her side</li>
          <li>Roll as a unit — help her turn over without twisting</li>
          <li>Both legs off the bed together — not one at a time</li>
          <li>Sit to get dressed — no standing on one leg</li>
        </ul>
      </InsightBox>

      <h2>The daily stuff — what to change at home</h2>

      <p>
        Beyond the nights, PGP management is about reducing asymmetric load on the pelvis
        throughout the day. There are things you can take over or change that make a real
        difference:
      </p>

      <p>
        <strong>No straddle positions.</strong> Anything that requires the legs to go wide
        — getting into a car, stepping over something, sitting cross-legged — is painful
        and makes things worse. For getting into the car: back up to the seat, sit down,
        then swing both legs in together. Same process as the bed. Take over carrying
        anything heavy, especially anything she'd be carrying on one side.
      </p>

      <p>
        <strong>Stairs.</strong> Steps and stairs are painful. She may manage better going
        sideways, or leading with the less painful leg. If there's a handrail, use it.
        Don't let her rush — the instinct to power through quickly actually increases the
        load on each step.
      </p>

      <p>
        <strong>The walking speed thing.</strong> You probably walk faster than she does
        right now. Slow down. Walk at her pace. Offer your arm, not as a romantic gesture
        but as an actual stabilization tool. Uneven surfaces, car parks, and cobbles are
        particularly bad.
      </p>

      <p>
        <strong>Household tasks.</strong> Loading the dishwasher, making beds, loading
        the washing machine, vacuuming — all of these involve the kind of bending and
        twisting that puts load on the pelvic joints. If she's doing them alone, she's
        making herself worse. This is a concrete thing you can take off her plate.
      </p>

      <h2>What not to do — and not to say</h2>

      <p>
        A few things that make PGP worse — practically and emotionally:
      </p>

      <p>
        <strong>Don't tell her to walk through it.</strong> Rest sounds counterintuitive —
        she's not injured, she's pregnant — but pushing through PGP pain doesn't build
        tolerance. It increases joint instability. Targeted physiotherapy exercise is
        different from walking it off. They are not the same thing.
      </p>

      <p>
        <strong>Don't dismiss it as normal pregnancy aches.</strong> Yes, pregnancy involves
        discomfort. PGP is categorically different from the general aches of a growing bump.
        If she's wincing turning over in bed, struggling to walk to the bathroom, or crying
        getting dressed — that is not normal. That is PGP, and it needs management.
      </p>

      <p>
        <strong>Don't underestimate the emotional side.</strong> PGP is one of the most
        isolating pregnancy experiences because it's invisible. From the outside she looks fine.
        Internally she's managing significant pain with every movement. The gap between what
        she looks like and what she's feeling can make her feel like she's not being believed.
        Believe her.
      </p>

      <PullQuote>
        The most useful thing you can do isn't the pillow or the rolling — it's believing her
        when she tells you how much it hurts. That costs nothing and matters more than you know.
      </PullQuote>

      <h2>Getting proper help — the physio conversation</h2>

      <p>
        The first-line treatment for PGP is physiotherapy with a women's health specialist.
        This isn't optional or "a nice thing to try" — it's the evidence-based answer.
        A physio will assess which joints are affected, give her exercises to strengthen
        the muscles supporting the pelvis (the exercises are specific — general pregnancy
        yoga is not the same thing), and may fit a pelvic support belt to wear during the day.
      </p>

      <p>
        The referral comes via the midwife or GP. If her midwife hasn't mentioned it, ask
        directly: "My partner has significant pelvic girdle pain — can we get a referral to
        a women's health physiotherapist?" In most NHS areas this is available; wait times
        vary. Some couples go private if the wait is long, particularly in the third trimester
        when time matters.
      </p>

      <p>
        The earlier the referral, the better the outcome. PGP that starts at week 20 and
        gets physio input at week 22 is significantly more manageable than PGP that's been
        untreated until week 34.
      </p>

      <h2>Does PGP affect the birth?</h2>

      <p>
        This is usually one of the first questions, and the answer is reassuring: PGP
        doesn't typically require a C-section, and most women with PGP give birth vaginally
        without significant complication from the PGP itself.
      </p>

      <p>
        The main consideration is positioning. Anything that requires wide leg separation
        — lithotomy position (legs in stirrups), deep squats, or positions that put the
        legs at different heights — should be avoided or minimized. Tell the midwifery
        team early, ideally at the birth plan conversation. They can plan positions that work
        around the PGP: side-lying, on all fours, upright with supported legs.
      </p>

      <p>
        Water birth is often mentioned as helpful — the buoyancy takes weight off the joints
        and gives more freedom to move into comfortable positions. Worth discussing if it's
        available and there are no other contraindications.
      </p>

      <InsightBox label="What to tell the midwife at the birth plan conversation">
        "My partner has pelvic girdle pain — we want to plan positions that avoid wide leg
        separation and asymmetric loading. Can we discuss what that looks like in terms of
        active labor positions and any monitoring positions?" That's the conversation to have.
        Most midwives are completely familiar with PGP and will have done this many times.
      </InsightBox>

      <h2>Will it go away after the birth?</h2>

      <p>
        Usually yes, and often surprisingly quickly. Relaxin levels drop sharply after delivery,
        and for many women the acute PGP pain improves significantly within days to a couple
        of weeks as the joints begin to stabilize. For others — particularly those with more
        severe PGP — it can take several months, and postnatal physiotherapy is important to
        speed that recovery.
      </p>

      <p>
        The one thing to avoid is assuming it'll just fix itself and doing nothing. If she
        still has significant pelvic pain at the 6-week postnatal check, make sure it's
        raised explicitly. It sometimes gets missed at that appointment because the focus
        is elsewhere. Ask directly: "She still has pelvic pain — can we get a postnatal
        physio referral?"
      </p>

      <p>
        For more on navigating pregnancy information as a dad — especially when symptoms
        are causing anxiety for both of you — read about{' '}
        <a href="/blog/paternal-anxiety-during-pregnancy-why-dads-worry">why dads worry
        during pregnancy and what to do about it</a>. If you're trying to understand other
        things happening in the pregnancy right now,{' '}
        <a href="/blog/i-asked-ai-every-question-pregnancy">how I used AI through nine months
        of pregnancy</a> covers the experience of being the research partner. And when you're
        thinking about the birth itself,{' '}
        <a href="/blog/what-to-expect-in-delivery-room-first-time-dad">what to expect in
        the delivery room as a first-time dad</a> is worth reading now, not the week before.
      </p>

      <InsightBox label="Dadly for the 3am questions you don't know how to ask">
        If it's late and you're trying to understand what's happening — whether it's PGP,
        a scan result, a symptom that appeared today — Dadly's AI companion gives you calm,
        clear answers from a dad's perspective. No judgment. No spiral. Just useful.
        Join the waitlist at <a href="/waitlist">dadly.app/waitlist</a> and get early access.
      </InsightBox>
    </article>
  )
}
