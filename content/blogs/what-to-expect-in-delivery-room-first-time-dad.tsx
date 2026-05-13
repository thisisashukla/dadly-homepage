import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
  slug: 'what-to-expect-in-delivery-room-first-time-dad',
  title: 'What to Actually Expect in the Delivery Room: A First-Time Dad\'s Honest Guide',
  subtitle: 'Labor is nothing like TV. Here\'s what really happens, what your actual job is, and how to stay calm.',
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
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Labor averages 12–18 hours for first-time parents — much longer than TV suggests</li>
          <li>Your job is to be a calm, steady presence, not a medical decision-maker</li>
          <li>Active labor (the longest phase) means contractions every 3–5 minutes for hours — this is normal</li>
          <li>When unsure what to do: ask "what do you need right now?" — it's almost always the right move</li>
          <li>Have the epidural, C-section, and cord-cutting conversations before labor starts, not during</li>
        </ul>
      </InsightBox>

      <p>
        You've watched labor on TV. A woman comes into the hospital, calmly tells her partner it's time, 
        they drive there in moderate traffic, she checks in, and 20 minutes later the baby is here. 
        Her hair is perfect. She's glowing.
      </p>

      <p>
        Labor is nothing like this. And as the partner, you are not a bystander — you have a job. 
        Just probably not the job you think you have.
      </p>

      <StatRow stats={[
        { value: '12-18hrs', label: 'average first labor (varies widely)' },
        { value: '3', label: 'distinct phases of labor' },
        { value: '5-10cm', label: 'cervical dilation from start to push' }
      ]} />

      <h2>What labor actually looks like: the timeline</h2>

      <p>
        <strong>Early labor: hours 0-4 (usually)</strong>
      </p>

      <p>
        Contractions start. They're uncomfortable but manageable. Maybe 5-10 minutes apart. 
        Your partner can talk through them, maybe move around, maybe watch TV. You might think, 
        "Oh, this is fine, we're good." This is a trap. Early labor feels fine. 
        It's also when you need to get to the hospital if you're planning to give birth there.
      </p>

      <p>
        Most first-time parents wait too long. The guidance is usually "come when contractions are 
        3-5 minutes apart and have been for an hour." Follow that. Don't wait until your partner 
        is screaming. By then you're cutting it close.
      </p>

      <p>
        <strong>Active labor: hours 4-12 (usually)</strong>
      </p>

      <p>
        This is the longest part, and also the part nobody talks about honestly. Contractions are 
        coming hard now — 3-5 minutes apart, lasting 60-90 seconds each. Between contractions, 
        there's a 2-4 minute window where your partner is breathing, trying to relax, trying to 
        recover. Then the next one hits.
      </p>

      <p>
        This goes on for hours. Not constantly escalating. Escalating in waves. Sometimes it slows down 
        a bit (called false labor or prodromal labor). Sometimes it plateaus. Sometimes it accelerates. 
        Your job during active labor is to be steady and to help her stay comfortable.
      </p>

      <p>
        <strong>Transition: the last 30-120 minutes before pushing</strong>
      </p>

      <p>
        This is when the cervix is doing its final stretch from 8-10cm dilation. Contractions are 
        now the most intense thing either of you have ever experienced. Many women say this is the 
        moment they think they can't do it anymore. Some throw up. Some cry. Some go completely silent. 
        This is normal, not a sign something is wrong.
      </p>

      <p>
        Transition is also when she might not want to be touched, might be angry at you for existing, 
        might snap at anything you say. Again, normal. Her brain is flooded with pain and adrenaline. 
        It's not about you.
      </p>

      <p>
        <strong>Pushing and delivery: 30 minutes to 2 hours (usually)</strong>
      </p>

      <p>
        Once she's fully dilated, the urge to push is involuntary. Most of what happens now is her body 
        doing the work and the medical team coaching her. You're still there. You're still steady. 
        But the medical staff are leading this part.
      </p>

      <p>
        Then the baby is here.
      </p>

      <h2>Your actual job (spoiler: you're not delivering the baby)</h2>

      <p>
        You are not a medical professional. The midwife or OB/GYN is delivering the baby. 
        Nurses are monitoring vitals. Your job is simpler and also more important than you think.
      </p>

      <p>
        <strong>Be a consistent, calm presence.</strong> Hold her hand. Be in her line of sight. 
        When she looks for you, be there. When contractions hit, you might apply counter-pressure 
        to her lower back (many women want this). You might just be a person she can squeeze. 
        You might suggest position changes — standing, squatting, on hands and knees. 
        Movement often helps.
      </p>

      <p>
        <strong>Communicate with the medical team on her behalf.</strong> If she needs something, 
        ask for it. If the room is too hot, ask to adjust the temperature. If she wants ice chips, 
        get them. If she wants to move to a different position, tell the nurses. You're not making 
        medical decisions — the doctors are — but you're the one who can advocate for comfort.
      </p>

      <p>
        <strong>Don't look at the clock.</strong> Labor has its own timeline. Don't catastrophize 
        because "we've been in active labor for six hours." That's normal. Stay present in the moment, 
        not in your worry about how long this will take.
      </p>

      <p>
        <strong>Eat and drink before this starts.</strong> You will be there for 12-18 hours. 
        The hospital will not feed you well. Bring snacks. Eat before labor gets intense. 
        You can't be present if you're about to faint from hunger.
      </p>

      <InsightBox label="What not to say during labor">
        Don't say "You're doing so good!" (doesn't help and sounds fake). Don't minimize her pain ("It's just contractions"). 
        Don't give unsolicited advice ("Have you tried walking?"). Don't ask her medical questions the nurses should be answering. 
        Just be there. Be steady. When in doubt, ask: "What do you need right now?"
      </InsightBox>

      <h2>When things go sideways: emergency scenarios</h2>

      <p>
        <strong>Vacuum or forceps delivery</strong>
      </p>

      <p>
        Sometimes the baby isn't descending as expected, or your partner is too exhausted to push effectively, 
        and the doctor uses vacuum or forceps to help. This is still a vaginal delivery — it's just with 
        extra equipment. It's not a failure. It's medicine working. Stay calm and trust the team.
      </p>

      <p>
        <strong>C-section</strong>
      </p>

      <p>
        Maybe labor isn't progressing. Maybe the baby's heart rate drops. Maybe something else happens 
        that makes a cesarean the safer choice. This will likely be presented as a medical recommendation, 
        not an emergency. Unless it's truly emergent, you'll have some conversation time to process it with 
        your partner. Then things move fast. You'll be taken to an OR, you'll be in scrubs, and within 
        an hour you'll have a baby.
      </p>

      <p>
        If it's truly emergent — baby in distress, immediate risk — it will happen fast and you might 
        be separated from your partner briefly. This is scary but necessary. The medical team knows what 
        they're doing. Your job is to stay calm so you can be present for your partner in recovery.
      </p>

      <p>
        <strong>Meconium (baby's first poop in the amniotic fluid)</strong>
      </p>

      <p>
        Sometimes the baby poops in the womb. The amniotic fluid turns greenish-brown. This is a sign 
        the baby was stressed at some point, and the medical team will be extra careful to have pediatrics 
        present at delivery to make sure the baby is okay. But it doesn't usually mean anything is seriously 
        wrong. It's a yellow flag, not a red flag.
      </p>

      <PullQuote>
        Your partner will be more afraid during labor than she's ever been. Your job is to be 
        less afraid. Not to tell her there's nothing to worry about — labor is serious. 
        But to be the person who believes, without doubt, that the medical team knows what to do.
      </PullQuote>

      <h2>After the baby is here (the first hour)</h2>

      <p>
        The baby will be covered in vernix (white waxy stuff) and amniotic fluid. They might be 
        bluish or purple for a minute or two — this is normal, they're oxygenating. Then they pink up.
      </p>

      <p>
        Pediatrics will do a quick exam. The baby will go skin-to-skin with your partner. You might cut 
        the umbilical cord if you want to — this is offered, not required. Some dads want to do this. 
        Some don't. Both are fine.
      </p>

      <p>
        Your partner will be bleeding, shaking, and probably in some pain. She will also be holding 
        the baby and might seem to forget that anything else exists. This is normal. Oxytocin and 
        adrenaline create a specific headspace.
      </p>

      <p>
        You might cry. You might feel numb. You might just stand there thinking "I can't believe 
        this is a real person." All of these are normal.
      </p>

      <h2>Before you go to the hospital: what to bring and what to know</h2>

      <p>
        If you haven't yet read about the financial side of birth — hospital costs, insurance,
        what to sort out in advance — our guide on{' '}
        <a href="/blog/real-cost-of-having-a-baby-first-time-dads">the real cost of having a baby</a>{' '}
        covers what to know before you walk into the hospital.
      </p>

      <p>
        <strong>Bring:</strong> Insurance cards, ID, a list of people to call, phone chargers,
        snacks, a change of clothes for you (you'll get sweaty), a camera or phone for photos,
        and a copy of your birth preferences (hospital has these but bring yours too).
      </p>

      <p>
        <strong>Know:</strong> Your hospital's COVID protocols. Whether your partner wants an epidural 
        or plans to go unmedicated. Who she wants in the room (it might be you, might be her mom, 
        might be a doula). Whether you want to cut the cord. These conversations should happen before 
        labor starts, not during.
      </p>

      <p>
        <strong>Understand:</strong> Labor is not predictable. The plan might change. Your partner might 
        want an epidural and then change her mind, or vice versa. She might want you in the room and then 
        need you to leave for a bit. Plans are good. But flexibility is better.
      </p>

      <h2>The honest part: what it actually feels like</h2>

      <p>
        Labor is intense. It's often longer than you expect. You'll see your partner in pain and not be 
        able to fix it, which is hard. You might feel helpless, which you're not — your presence matters 
        more than you think.
      </p>

      <p>
        But when it's over, when you're holding this person you created who is now a separate human,
        it rewires something in you. Not immediately. Sometimes it takes a few days to feel real.
        But it happens. If the bond takes longer than you expect,{' '}
        <a href="/blog/how-to-bond-with-newborn-as-a-dad">that's more normal than you think</a> —
        paternal bonding builds gradually through caregiving, not in a single moment.
      </p>

      <p>
        Your job is to be steady. To be present. To trust the medical team. And to remember that your 
        partner is doing the hard part — you're just being there while she does it.
      </p>

      <p>
        That's enough. That's actually everything.
      </p>
    </article>
  )
}
