import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
  slug: '3-month-old-baby-what-every-new-dad-should-know',
  title: '3-Month-Old Baby: What Every New Dad Should Know',
  subtitle: 'The fog is lifting. The baby is looking at you now — actually at you. Here\'s what\'s happening, what to do, and what to watch for.',
  description: 'Everything dads need to know about a 3-month-old baby: development milestones, sleep patterns, feeding, bonding, and the real stuff — including red flags and when to call the doctor.',
  keywords: ['3 month old baby dad', '3 month old development', 'three month old milestones', 'new dad 3 months', 'baby 3 months sleep feeding'],
  author: 'Ankur',
  authorRole: 'Founder, Dadly',
  datePublished: '2026-05-18',
  dateModified: '2026-05-18',
  readTime: '10 min',
  category: 'Newborn',
  tags: ['newborn', '3 months', 'baby development', 'new dad', 'milestones'],
  wordCount: 2050,
  faqs: [
    {
      question: 'Do 3-month-olds sleep through the night?',
      answer: 'Some do — but many don\'t, and that\'s normal. A 3-month-old sleeping a longer stretch of 5–6 hours is a good sign. Sleeping through entirely (8+ hours) is less common at this age. If your baby isn\'t there yet, you\'re not doing anything wrong.'
    },
    {
      question: 'How much tummy time does a 3-month-old need?',
      answer: 'Build up to 30 minutes total per day, spread across 2–3 sessions. Always supervised. If baby hates it, try placing them on your chest face-down — this counts as tummy time and is usually much more tolerated. Your baby is also more motivated when they can see your face.'
    },
    {
      question: 'What developmental milestones should a 3-month-old have?',
      answer: 'By 3 months: smiling socially (in response to your face, not just randomly), tracking moving objects with eyes, lifting head and chest during tummy time, and vocalising — coos, gurgles, early babbling. If your baby isn\'t showing these, mention it to your pediatrician at the next checkup.'
    },
    {
      question: 'Can I start a sleep routine at 3 months?',
      answer: 'A loose routine — not a rigid schedule — can start now. Feed, bath (or not), dim lights, feed again, sleep. Consistency of cues helps even if the timing varies. Full sleep training methods are generally recommended from 4–6 months at the earliest.'
    },
    {
      question: 'Is it normal for a dad to still feel disconnected from the baby at 3 months?',
      answer: 'For some dads, yes — bonding is gradual and 3 months is still early. But if you\'re feeling disconnected from everything, not just the baby — numb, withdrawn, unable to enjoy anything — that\'s worth talking to your doctor about. It may be paternal postpartum depression, which is treatable.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Three months is when many dads feel the bond click into place — the baby is now interactive, responsive, and specifically interested in your face.</li>
          <li>Sleep is still variable and exhausting. A longer night stretch (3–5 hours) often starts around now — but not always, and that's normal.</li>
          <li>This is your window for tummy time, talking, reading, and daily walks. The investment you make now compounds.</li>
          <li>Paternal postpartum depression often peaks at 3–6 months. Watch for it in yourself — numbness, withdrawal, irritability that doesn't match the moment.</li>
          <li>Key red flags to bring to the doctor: not tracking moving objects, not smiling socially, no eye contact, very floppy or stiff muscle tone.</li>
        </ul>
      </InsightBox>

      <p>
        Three months in. You're still exhausted — the cumulative kind, where you've forgotten
        what properly rested feels like. You've had conversations you can't remember the next
        morning. You've stood in the kitchen holding a bottle and genuinely blanked on what
        you were doing.
      </p>

      <p>
        But something has shifted. The baby who spent the first eight weeks looking through
        you — staring past your face at nothing, or at whatever newborns see in the middle
        distance — is now looking <em>at</em> you. Actually at you. When you lean in, they
        look at your mouth. When you smile, something happens in their face. When you talk,
        they respond.
      </p>

      <p>
        This is the moment a lot of dads describe as when it became real in a completely
        different way. Not just the responsibility. The actual relationship.
      </p>

      <StatRow stats={[
        { value: '14–17h', label: 'total sleep a 3-month-old needs per day including naps' },
        { value: '6–7oz', label: 'per formula feed, 4–5 times daily at 3 months' },
        { value: '30 min', label: 'total daily tummy time to build toward across 2–3 sessions' }
      ]} />

      <h2>What\'s happening developmentally at 3 months</h2>

      <p>
        The changes between month one and month three are dramatic, even if they happen so
        gradually you almost miss them. Here's what a typical 3-month-old is doing — and
        what that means in practice.
      </p>

      <p>
        <strong>Motor development.</strong> Strong neck control now — they can hold their
        head steady for meaningful periods during tummy time, lifting both head and chest off
        the floor. They're opening and closing hands deliberately, not just by reflex. They're
        batting at toys — sometimes making contact, sometimes not, but trying. Their kicks are
        strong and purposeful when you hold them upright.
      </p>

      <p>
        <strong>Vision.</strong> They can track a moving object with their eyes smoothly —
        follow a toy or your face as it moves across their field of vision. They recognize
        faces now, including yours, at a meaningful distance. That's not nothing. That's your
        baby knowing who you are.
      </p>

      <p>
        <strong>Social and communication.</strong> This is the big one. Smiling socially —
        in response to your face, your voice, your presence — starts becoming reliable around
        now. They're making eye contact. They're beginning to mimic expressions: you stick
        your tongue out, they try. You open your mouth wide, they open theirs. They're
        vocalising — coos, gurgles, early babbling sounds that aren't words but are the
        architecture of language.
      </p>

      <p>
        The feedback loop here is significant. For the first two months, caregiving is largely
        one-directional — you do things, baby receives them. Now, baby is starting to respond.
        And that response — the smile, the held gaze, the coo when you talk — is the reward
        system that bonds you. It's not automatic. It builds.
      </p>

      <PullQuote>
        The baby who didn't seem to know you existed at week three now lights up when you walk into the room. This is not your imagination.
      </PullQuote>

      <h2>Sleep at 3 months — the honest picture</h2>

      <p>
        Total sleep needs are 14–17 hours per day, split across nighttime sleep and naps.
        Naps are still frequent and often short — 30–45 minutes is very common and completely
        normal. The short nap is not a problem you've caused or need to fix.
      </p>

      <p>
        Wake windows — the time between sleeps when baby can be alert without becoming
        overtired — are now roughly 60–120 minutes. Push past that and you'll usually know
        about it.
      </p>

      <p>
        Many babies begin a longer nighttime stretch around 3 months. Three to five hours in a
        row feels enormous after what you've been through. Some babies start doing this reliably.
        Some don't. If yours is still waking every 2 hours at night, that is within the range
        of normal — frustrating, genuinely exhausting, but normal.
      </p>

      <p>
        Back to sleep, for every sleep. SIDS risk continues through the first year. Side or
        tummy sleeping is not safe unsupervised at this age, regardless of how well they can
        hold their head during tummy time while you're watching.
      </p>

      <p>
        On routines: you can start a loose cue-based routine now. Not a rigid schedule —
        that's hard to maintain at this age and stress-inducing when it breaks. But a sequence:
        feed, bath or sponge down, dim lights, quiet feed, sleep. The consistency of cues —
        the dimming lights, the same sequence of steps — starts signalling to the baby that
        sleep is coming. That matters even when the timing varies.
      </p>

      <p>
        Full sleep training methods — any kind — are generally recommended from 4–6 months
        at the earliest. Right now, the goal is survival and gentle consistency.
      </p>

      <InsightBox label="The sleep deprivation is still real">
        If you're three months in and still running on 4–5 hours of broken sleep most nights,
        you are not weak and you haven't done anything wrong. Cumulative sleep deprivation at
        this level has measurable cognitive and emotional effects. You cannot willpower your
        way through it indefinitely. If you and your partner haven't yet figured out how to
        split nights in a sustainable way, that conversation is worth having now — before
        the accumulated deficit becomes a relationship problem as well as a health one.
      </InsightBox>

      <h2>Feeding at 3 months</h2>

      <p>
        Formula-fed babies at 3 months typically take around 6–7oz per feed, four to five
        times a day. Breastfed babies still feed on demand — typically every 2–3 hours, though
        this varies significantly from baby to baby and day to day.
      </p>

      <p>
        Growth spurts happen. When they do, baby will want to feed more frequently for two to
        three days running. This is normal demand-driven behaviour, not a supply problem and
        not a sign that something is wrong. It passes.
      </p>

      <p>
        No solids yet. The NHS and AAP both recommend starting solid foods at around 6 months.
        Three months is not the time, regardless of what the baby's grandparents suggest about
        their generation's approach.
      </p>

      <h2>Your specific job at 3 months</h2>

      <p>
        This is where it gets good for dads. Because three months is when your role expands from
        "logistical support" to "active participant" in a way that matters for the baby's development.
      </p>

      <p>
        <strong>Tummy time.</strong> Build toward 30 minutes total per day, spread across several
        short sessions. Always supervised. If baby hates it, try placing them face-down on your
        chest — that counts, and most babies tolerate it better because they can see your face.
        Tummy time builds the neck and shoulder strength that leads to rolling, sitting, and
        everything after.
      </p>

      <p>
        <strong>Talk constantly.</strong> Narrate what you're doing. Not because baby understands
        the words — they don't yet — but because they're absorbing the rhythms, the sounds, the
        patterns of language. "Now we're going to change your nappy. Here's the cold wipe, that's
        going to be a surprise. And now the clean one..." This is not silly. This is how babies
        learn language. The gap in language development between babies who were talked to and
        babies who weren't is detectable by 18 months and significant by age 3.
      </p>

      <p>
        <strong>Read to baby.</strong> The words don't matter yet. The rhythm, the closeness,
        the attention — these matter. Board books with high-contrast images are good. Point at
        things. Make sounds. Baby doesn't care about the plot.
      </p>

      <p>
        <strong>Own bath time.</strong> If there's one ritual that's yours — that you do reliably,
        at roughly the same time each day — bath time is a great one. It's excellent bonding, it's
        a daily cue that sleep is coming, and it gives your partner a predictable window where
        the baby isn't her responsibility.
      </p>

      <p>
        <strong>Take a daily walk.</strong> Just the two of you. Baby in a carrier or pram. Thirty
        minutes. This does four things simultaneously: fresh air for both of you, a guaranteed
        piece of time where you're the present parent, a break for your partner, and sensory
        stimulation for the baby (trees, light, sounds, temperature change). It's one of the
        most high-value things you can do at this stage.
      </p>

      <p>
        <strong>Skin-to-skin is still valuable.</strong> Not just for newborns. Skin-to-skin
        contact at 3 months still has measurable effects on cortisol regulation — for both of
        you — and on bonding. Twenty minutes on the sofa with baby on your bare chest is not
        a newborn-only activity.
      </p>

      <PullQuote>
        The time you put in at 3 months compounds. These interactions don't feel like much in the moment. They are everything in aggregate.
      </PullQuote>

      <h2>The real talk at 3 months</h2>

      <p>
        The fourth trimester is technically ending. But that doesn't mean things are suddenly
        easy. The exhaustion is cumulative. Your baby now has opinions — louder ones than
        before. Your relationship with your partner is being navigated under conditions neither
        of you has experienced before.
      </p>

      <p>
        Paternal postpartum depression often peaks between 3 and 6 months — not in the early
        newborn weeks, as most people assume, but in this window. Watch for it in yourself.
        Not sadness, necessarily — more like irritability that doesn't match the situation,
        emotional numbness, withdrawal, an inability to enjoy things that should feel good,
        a sense of going through the motions. If you're feeling those things persistently, it's
        worth reading more on{' '}
        <a href="/blog/do-dads-get-postpartum-depression">paternal postpartum depression</a>{' '}
        and considering a conversation with your GP.
      </p>

      <p>
        If you haven't felt fully bonded yet — if the overwhelming love everyone described
        hasn't arrived in the way you expected — that is still within the range of normal at
        3 months. Bonding is gradual and often slower for dads. But if you also feel empty,
        numb, and disconnected from everything — not just the baby — that's a signal worth
        paying attention to.
      </p>

      <InsightBox label="Red flags to bring to your doctor">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Not tracking moving objects with eyes by 3 months</li>
          <li>No social smiling by 12 weeks</li>
          <li>Doesn't respond to loud sounds</li>
          <li>Extremely floppy muscle tone (beyond normal newborn softness) or unusually stiff</li>
          <li>No eye contact at all</li>
        </ul>
        These are not reasons to panic — they're things to mention at the next check-up so your doctor can assess them properly.
      </InsightBox>

      <h2>What happens next</h2>

      <p>
        Months 4 and 5 are when things change again — rolling, more purposeful grabbing, the
        beginnings of sitting support. The interaction keeps growing. Sleep may improve or may
        go through a regression around 4 months (it's a real thing, and if it happens to you,
        just know that it's normal and it passes).
      </p>

      <p>
        If your baby is still in that early grunting, straining, noisy phase and you're trying
        to work out what's normal,{' '}
        <a href="/blog/why-is-my-newborn-grunting">why newborns grunt and strain</a>{' '}
        covers the full picture. And if the nappies have been giving you pause,{' '}
        <a href="/blog/baby-poop-color-chart-new-dad">the baby poop colour guide for dads</a>{' '}
        is worth bookmarking.
      </p>

      <p>
        For the bonding side of things — if you're looking for more practical ways to build
        the connection — the guide on{' '}
        <a href="/blog/how-to-bond-with-newborn-as-a-dad">how bonding works for dads</a>{' '}
        goes deep into the specifics. And if sleep deprivation is genuinely affecting your
        ability to function, the{' '}
        <a href="/blog/new-dad-sleep-deprivation-survival-guide">new dad sleep deprivation survival guide</a>{' '}
        covers how to split nights and get through this stage without burning out completely.
      </p>

      <p>
        Three months. You made it here. The baby knows your face, responds to your voice, and
        smiles when you come into the room. The exhaustion is real — but so is this.
      </p>
    </article>
  )
}
