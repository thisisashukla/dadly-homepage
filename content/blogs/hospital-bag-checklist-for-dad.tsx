import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
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
  tags: ['hospital bag', 'birth preparation', 'labour', 'pregnancy', 'new dad'],
  wordCount: 2000,
  faqs: [
    {
      question: 'How many nights should I pack for in a hospital bag?',
      answer: 'For a vaginal birth, typically 1–2 nights. For a planned or emergency C-section, 2–4 nights. The safest approach is to pack for the longer scenario regardless — you often don\'t know which way it\'s going until it\'s happening.'
    },
    {
      question: 'Can dads stay overnight at the hospital?',
      answer: 'It varies by hospital and room type. Many NHS hospitals allow a partner to stay overnight in a private or en-suite room, but not in shared bays. Call ahead to ask specifically — "Can a partner stay overnight and what do we need to bring?" — rather than assuming or finding out at 2am.'
    },
    {
      question: 'What snacks are best for a long labour?',
      answer: 'High-calorie, no-preparation snacks that won\'t make you feel nauseous: protein bars, nuts, dried fruit, crackers, small pre-made sandwiches. Avoid anything with a strong smell — she may be extremely sensitive to food odours during active labour, and eating a tuna sandwich next to a labouring woman is not a move you want to make.'
    },
    {
      question: 'Should I bring a camera or just use my phone?',
      answer: 'Phone is usually fine if storage is cleared and battery is full. But if proper birth photos matter to you, bring a dedicated camera — phone shots in dim hospital lighting with a shaky hand often disappoint. Whatever you bring, clear the storage beforehand. Running out of space at the wrong moment is avoidable.'
    },
    {
      question: 'What\'s the one thing dads always forget to pack?',
      answer: 'Food and water for themselves. Everyone remembers things for the mum and the baby. Almost no one packs a proper insulated water bottle and two days of snacks for the person standing at the bedside for 12–18 hours. Pack these first.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <InsightBox label="Key Takeaways">
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: 1.8 }}>
          <li>Pack at 36–37 weeks — don't leave it to the week before your due date</li>
          <li>Your job is to stay functional enough to support her — that means food, water, sleep, and clean clothes for yourself</li>
          <li>The single most forgotten item: food and water for dad (everyone packs for mum and baby)</li>
          <li>A 3-metre phone charging cable is not a luxury — it's essential logistics</li>
          <li>Pack for a C-section length stay (3–4 nights) regardless of your birth plan — you often don't know until it's happening</li>
        </ul>
      </InsightBox>

      <p>
        Every hospital bag guide I've ever read follows the same structure. Forty-seven items for mum.
        Twelve items for baby. Then, as an afterthought at the bottom: "For dad — a change of clothes
        and some snacks." Maybe a phone charger if the author was feeling generous.
      </p>

      <p>
        This is not that guide.
      </p>

      <p>
        You are potentially spending two to four days in a hospital, standing up for most of it,
        emotionally supporting another human through one of the most physically intense experiences
        of her life. You are the logistics officer, the emotional anchor, the person who runs out to
        the car at midnight when she needs something from bag number two. You need to pack accordingly.
      </p>

      <p>
        Your job during labour and the postnatal ward is not to suffer stoically through hunger,
        a dead phone, and the same shirt for three days. Your job is to stay functional. Functional
        dads are better support. Pack so you can actually do the job.
      </p>

      <StatRow stats={[
        { value: '36–37', label: 'weeks pregnant — when to pack your bag' },
        { value: '2–4', label: 'nights in hospital for a C-section (pack for this)' },
        { value: '12–18', label: 'hours you might stand at the bedside during active labour' }
      ]} />

      <h2>Documents and admin: get this sorted first</h2>

      <p>
        These are the things you will definitely need and will definitely not have time to find
        during the actual event.
      </p>

      <ul>
        <li><strong>Insurance details or NHS card</strong> — know which hospital you're going to and have any relevant cards or numbers</li>
        <li><strong>Three printed copies of the birth plan</strong> — one for the midwife, one for any handover, one as a backup. Yes, printed. Hospital printers don't work when you need them.</li>
        <li><strong>Hospital parking details</strong> — the entrance, the car park number, the rate, contactless or coins. Know this in advance so you're not doing it in the dark at 3am in a panic.</li>
        <li><strong>Key phone numbers written on paper</strong> — grandparents, your GP, your employer if you need to call in. Your phone will run out of battery at the worst possible time. Have a backup.</li>
      </ul>

      <h2>Clothing: more than you think, practical over comfortable</h2>

      <p>
        Labour can take many hours. Days, sometimes. You will sweat. There may be some mess.
        Pack more than you think you need.
      </p>

      <ul>
        <li><strong>Two full changes of clothes minimum</strong> — not your best, not your worst. Labour is not the place for your favourite shirt.</li>
        <li><strong>Shoes you can stand in for eight hours</strong> — trainers, not sandals. You will be on your feet for a very long time.</li>
        <li><strong>A warm layer</strong> — delivery suites and postnatal wards are often aggressively air-conditioned. A hoodie or light fleece is not optional.</li>
        <li><strong>Flip flops for the shower</strong> — hospital showers, after a long labour, are not somewhere you want bare feet.</li>
      </ul>

      <h2>Food and hydration: the most important category that nobody packs properly</h2>

      <p>
        I'm going to say this clearly: you will not be able to leave to find food during active labour.
        The hospital vending machines will be either broken or 100 metres away down a corridor you've
        never been down. Hospital café hours are limited. You need to bring your own food, and you
        need to bring enough of it.
      </p>

      <p>
        Labour is a marathon, not a sprint. People say this about the mum, but it's also true for you.
        You are running on adrenaline and stress hormones, and when those run out, you need actual fuel.
      </p>

      <ul>
        <li><strong>High-calorie snacks</strong> — protein bars, nuts, trail mix, dried fruit, crackers. Things that don't require preparation, don't smell strong, and won't make you feel sick under stress.</li>
        <li><strong>Electrolyte drinks</strong> — not just water. You'll lose a lot of salt to sweating and stress. Sports drinks, electrolyte sachets, or coconut water all work.</li>
        <li><strong>A big insulated water bottle</strong> — the tiny plastic cups hospitals provide are useless. A litre+ bottle you can refill is essential. This is the single most underrated item on this list.</li>
        <li><strong>Small cash for vending machines</strong> — for the moments when you do have two minutes and the machine is the only option.</li>
        <li><strong>Snacks for her after the birth</strong> — she will be ravenous immediately after delivery. Hospital food service hours are limited. A meal-sized snack that she can eat in bed at midnight is one of the most genuinely useful things you can do.</li>
      </ul>

      <InsightBox label="On smells during labour">
        Active labour makes many women extremely sensitive to food smells. Don't eat strong-smelling
        food near her during labour — save the tuna wrap, the hot food, anything pungent for when
        you can step outside. Pack things that are relatively neutral in smell for the labour itself.
      </InsightBox>

      <h2>Electronics: set this up before you leave the house</h2>

      <p>
        Your phone is your camera, your communication channel, your music player, and your lifeline.
        Treat it accordingly.
      </p>

      <ul>
        <li><strong>Phone fully charged before you leave</strong> — obvious but worth saying.</li>
        <li><strong>A long charging cable — 3 metres if you can get one</strong> — hospital rooms have one plug socket, in an awkward location. A short cable means your phone sits on the floor or you sit hunched over it. A 3-metre cable means you can use your phone while it charges from the bed. This is not a small quality of life difference.</li>
        <li><strong>Portable power bank, fully charged</strong> — for when the socket is occupied by something medical and you need your phone.</li>
        <li><strong>Tablet or e-reader with offline content downloaded</strong> — hospital WiFi is unreliable. Download films, podcasts, and books before you go. Early labour and the postnatal ward both involve a lot of waiting.</li>
        <li><strong>Earbuds for both of you</strong> — for her labour playlist. For you to watch something without disturbing her if she's resting. Essential.</li>
        <li><strong>Small Bluetooth speaker</strong> — for her birth playlist when she wants it audible in the room. The tinny laptop speaker is not the vibe for this moment.</li>
      </ul>

      <PullQuote>
        A 3-metre phone cable is not a luxury item. It's the difference between being able to
        use your phone while it charges and sitting hunched on the hospital floor at 2am.
      </PullQuote>

      <h2>Sleep and comfort: you have to actually rest when you can</h2>

      <p>
        The pull-out bed or chair they give partners in hospital rooms is designed, apparently, by
        someone who has never tried to sleep on one. Pack for this reality.
      </p>

      <ul>
        <li><strong>Travel pillow</strong> — the hospital may or may not provide one. Yours will be better.</li>
        <li><strong>Small blanket or throw</strong> — for the chair, for the car ride home, for general comfort in a cold ward.</li>
        <li><strong>Eye mask and earplugs</strong> — hospital wards are not quiet. When you do have a window to sleep while baby is being cared for, you want to actually sleep. Block it out.</li>
      </ul>

      <h2>Toiletries: you will want a shower</h2>

      <p>
        After a long labour, you will be tired, sweaty, emotionally wrung out, and still in the clothes
        you arrived in. A shower will make you a human being again. Pack for it.
      </p>

      <ul>
        <li>Full travel-size toiletry kit: shampoo, shower gel, deodorant (crucial), toothbrush, toothpaste, face wash</li>
        <li>Razor if you use one</li>
        <li>Any medication you take daily — don't forget this in the excitement</li>
      </ul>

      <h2>The overlooked things that make a real difference</h2>

      <p>
        These are the items nobody puts on a list but that I'd pack again without hesitation.
      </p>

      <p>
        <strong>A gift for her.</strong> A push gift — something meaningful, prepared in advance.
        Not extravagant necessarily, but thoughtful. Flowers from the hospital shop are fine but
        something you chose specifically for her is better. She just did something extraordinary.
        Acknowledge it.
      </p>

      <p>
        <strong>Storage cleared on your phone.</strong> Not a physical item but do it before you
        leave. Running out of photo storage at the wrong moment is one of those things you will
        not forgive yourself for easily.
      </p>

      <p>
        <strong>A birth announcement message drafted in advance.</strong> You will not be in a state
        to write a coherent message when the moment arrives. Draft it in advance, leave a blank for
        the name and time, and just fill it in. Copy and paste to the relevant family group chats.
        Your future exhausted self will thank you.
      </p>

      <p>
        <strong>A comfort item from home for her.</strong> Her pillow, a particular scent she loves,
        a familiar blanket. Hospital environments are clinical and a little cold. Something that smells
        like home makes a difference.
      </p>

      <InsightBox label="When to pack">
        36–37 weeks. Not 38. Not "close to the due date." Premature labour can happen, and
        if it does, you want to grab a bag that's ready, not spend 40 minutes stuffing things
        into a suitcase while your partner times contractions. Set a calendar reminder for
        week 36 and get it done.
      </InsightBox>

      <PullQuote>
        Your job during labour is to stay functional. That means taking care of yourself —
        food, water, rest when you can — so you can actually be useful to her when it matters.
      </PullQuote>

      <h2>The final packing list, in one place</h2>

      <p>
        <strong>Documents:</strong> insurance/NHS card, 3 copies of birth plan, parking info, phone numbers on paper.
      </p>
      <p>
        <strong>Clothing:</strong> 2+ changes of clothes, supportive shoes, warm layer, flip flops.
      </p>
      <p>
        <strong>Food &amp; water:</strong> high-calorie snacks, electrolyte drinks, insulated water bottle (big), small cash, postnatal snacks for her.
      </p>
      <p>
        <strong>Electronics:</strong> phone (fully charged), 3m cable, power bank, tablet with offline content, earbuds, small speaker.
      </p>
      <p>
        <strong>Sleep:</strong> travel pillow, small blanket, eye mask, earplugs.
      </p>
      <p>
        <strong>Toiletries:</strong> full travel kit including deodorant, daily medication.
      </p>
      <p>
        <strong>Extras:</strong> gift for her, phone storage cleared, birth announcement drafted, comfort item from home.
      </p>

      <p>
        For the full picture of what to expect once you're actually in that room, the guide on{' '}
        <a href="/blog/what-to-expect-in-delivery-room-first-time-dad">what to expect in the delivery room as a first-time dad</a>{' '}
        covers the reality of labour in plain terms — the timeline, what she'll be feeling, and what your role
        looks like at each stage. And if you're at 28 weeks and this feels suddenly very real,{' '}
        <a href="/blog/week-28-pregnancy-dads-guide">the week 28 guide for dads</a> has everything you need
        to be thinking about right now. For the financial reality of all of this,{' '}
        <a href="/blog/real-cost-of-having-a-baby-first-time-dads">the real cost of having a baby as a first-time dad</a>{' '}
        is worth reading before the credit card bill arrives.
      </p>
    </article>
  )
}
