import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { StatRow } from '@/components/blog/StatRow'
import { ChatSim } from '@/components/blog/ChatSim'

export const meta: BlogMeta = {
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
}

export function BlogContent() {
  return (
    <article className="article-body">
      <p>
        It happens at 3am. Your partner is frustrated, you're exhausted beyond reason, 
        and a conversation that should take five minutes spirals into the worst fight you've had in months 
        — over something that won't matter on Thursday. Maybe it's about whose turn it is. 
        Maybe it's about something one of you said three days ago. Maybe it's about nothing at all.
      </p>

      <p>
        The real issue is this: you're both running on 4 hours of fragmented sleep a night 
        and your brains are literally unable to regulate emotion, perspective, or patience.
      </p>

      <p>
        This is not a relationship problem. This is a sleep debt problem. And the good news is, 
        it's fixable. Not easily. But fixable.
      </p>

      <StatRow stats={[
        { value: '44', label: 'nights of sleep lost in first year (average)' },
        { value: '30%', label: 'testosterone drop with sustained sleep deprivation' },
        { value: '4.5 hrs', label: 'average sleep for new parents months 1-6' }
      ]} />

      <h2>What sleep deprivation actually does to you (the science version)</h2>

      <p>
        The first 72 hours without sleep, your prefrontal cortex — the part of your brain responsible 
        for impulse control, decision-making, and emotional regulation — stops working properly. 
        You become irritable, impulsive, and emotionally volatile.
      </p>

      <p>
        With sustained partial sleep deprivation (4-5 hours per night over weeks), something different happens. 
        Your brain adapts slightly — you become functional. But your baseline mood drops, your stress tolerance 
        shrinks, and your threshold for conflict becomes razor-thin. You snap at things that wouldn't bother 
        you if you were rested. Your partner does the same. Every small friction becomes a fight.
      </p>

      <p>
        Add in the biochemistry: sustained sleep loss decreases testosterone in men by roughly 30%. 
        Lower testosterone correlates with lower mood, decreased sex drive, and decreased patience. 
        Your partner is running on depleted oxytocin and serotonin. You're both dysregulated.
      </p>

      <p>
        And that 3am fight? It's not really about whose turn it is. It's your nervous systems 
        failing under the weight of accumulated exhaustion.
      </p>

      <PullQuote>
        The relationship crisis that happens at 3am is not a relationship crisis. 
        It's a sleep debt crisis wearing a relationship mask.
      </PullQuote>

      <h2>The "1st stretch rule" — how to actually get sleep</h2>

      <p>
        Here's what works: decide upfront who is "on duty" for the first three-hour stretch of the night. 
        That parent is fully responsible. They get up for every cry. They change diapers, they feed, 
        they soothe. The other parent sleeps.
      </p>

      <p>
        After three hours (roughly 10pm to 1am if bedtime is 10), the shift changes completely. 
        The first parent goes to bed. The second parent takes over. They're on duty for the next stretch 
        until morning or until the baby seems settled.
      </p>

      <p>
        The key is: it's not "you're on duty some of the night and sort of also responsible for others." 
        It's a hard handoff. One person is fully responsible, fully awake. The other is fully asleep, 
        guilt-free.
      </p>

      <p>
        This matters because half-sleep is not sleep. If you're in the room "in case you're needed," 
        if you're listening for the baby, if you're "sort of" awake, your brain is not actually resting. 
        Real sleep requires real off-duty status.
      </p>

      <InsightBox label="The math of the 1st stretch">
        If one parent does 10pm-1am fully on-duty, that parent gets three hours of real sleep from 1am onward. 
        The second parent got a solid 10pm sleep, then is fully on-duty from 1am onward. Both get 4-5 hours 
        of actual sleep per night. That's survivable. It's not great, but it's survivable.
      </InsightBox>

      <h2>The "on-duty" vs "off-duty" distinction is everything</h2>

      <p>
        This is not a small thing. Write it down if you need to. When you're on-duty, you're responsible. 
        When you're off-duty, you're not responsible for anything except sleeping. You don't hear the baby. 
        You don't wonder if your partner has it handled. You trust that they do and you sleep.
      </p>

      <p>
        This protects both of you. Your partner gets to know they don't need to manage you during their 
        off-duty time. You get to actually sleep instead of half-listening. And the baby gets a parent who's 
        genuinely awake and present, not someone running on fumes trying to pretend they're functional.
      </p>

      <p>
        Most relationship damage in the newborn phase happens when neither parent is truly off-duty. 
        You're both tired. You're both still worried about the baby. You're both resentful. 
        It spirals.
      </p>

      <p>
        A hard on/off-duty structure prevents this. It's not perfect. But it works.
      </p>

      <h2>What to do during your on-duty shift</h2>

      <p>
        <strong>Don't try to stay sane.</strong> Accept that you will feel sleep-deprived, slightly delirious, 
        and weird. This is temporary and normal. You will watch YouTube videos at 2am that you'd never watch 
        awake. You'll have strange thoughts. The baby will cry and you'll feel inadequate. All of this is the 
        normal experience of sleep deprivation. Don't fight it. Just do the job.
      </p>

      <p>
        <strong>Keep some light on, but dim.</strong> A nightlight or your phone on low brightness. 
        This helps you stay alert enough to respond quickly if needed, but doesn't wreck your ability 
        to sleep when your shift ends.
      </p>

      <p>
        <strong>Change the diaper first, then feed.</strong> A baby in a wet diaper won't sleep. 
        Change it first. Then feed. Then hold them until they sleep. This usually takes 20-30 minutes total.
      </p>

      <p>
        <strong>Sit down.</strong> Don't stand and rock. Sit with the baby and just... be there. 
        Your legs will thank you. You can still hold them, soothe them, but from a chair, not pacing.
      </p>

      <ChatSim
        label="The 3am conversation that needs to happen"
        messages={[
          { name: 'Me', text: 'I don\'t understand why you\'re so frustrated. I\'m doing my best.' },
          { name: 'AI', text: 'You probably are. But you\'re both at 4 hours of sleep. That\'s not a criticism conversation. That\'s a fatigue crisis. Don\'t have the real conversation at 3am. Agree right now to table this until morning when you\'ve slept. The conversation will be completely different.' }
        ]}
      />

      <h2>The second trimester: months 3-6 (when sleep doesn't improve)</h2>

      <p>
        Some babies sleep better around month 3. Some don't. If your baby is still up every 2-3 hours at month 4, 
        something has to change or you will destroy your relationship and your health.
      </p>

      <p>
        <strong>Sleep training might be the move.</strong> This is controversial, and you need to make your own 
        call, but there is no prize for suffering through months 4-8 with a baby who won't sleep for more than 
        an hour. Consult your pediatrician. There are methods that work. You need sleep.
      </p>

      <p>
        <strong>Get an outside validator.</strong> Your pediatrician. A postpartum doula. A lactation consultant. 
        Someone who is not your sleep-deprived partner. Ask them: "Is our baby sleeping normally? 
        Are we supposed to be up every 90 minutes?" Often you'll find out it's not normal and something 
        can be done about it.
      </p>

      <p>
        <strong>Take a night off, fully.</strong> One night per week, if you can swing it, your partner takes 
        the baby to sleep in another room. You sleep for 8 hours uninterrupted. Or vice versa. 
        One night of real sleep per week is the difference between "surviving" and "actually fine."
      </p>

      <h2>Recovery: what to expect</h2>

      <p>
        Sleep deprivation damage doesn't reverse immediately. If you've been running on 4 hours a night for 
        three months, it takes about three months of normal sleep to fully recover. Your mood will lift. 
        Your relationship will feel less fraught. Your patience will return. But it doesn't happen overnight.
      </p>

      <p>
        By month 6-9, most babies can sleep for stretches. By month 12, many sleep through. When that 
        happens — when you get six hours of sleep, then seven, then eight — you'll remember what it feels 
        like to be human. You'll want to cry. You probably will.
      </p>

      <PullQuote>
        The sleep deprivation phase is temporary. It feels permanent at 3am. 
        But it's maybe eight months of your life, not forever. You will sleep again.
      </PullQuote>

      <h2>The relationship part</h2>

      <p>
        Protect this: when you're not in a sleep emergency, talk about the sleep emergency. Agree on your 
        on/off-duty schedule before you're desperate. Have conversations about resentment or frustration 
        when you're both rested, not at 2am. And understand that your partner is not your enemy — 
        sleep deprivation is. You're both on the same side, and you're both barely hanging on.
      </p>

      <p>
        That 3am fight? It will happen. It's almost inevitable. But if you've already agreed that 
        all 3am conversations are invalid — that you will table them, sleep, and talk again tomorrow — 
        you can protect yourselves from the damage.
      </p>

      <p>
        You will get through this. Not unscathed. Not easily. But you will. And one day you'll realize 
        the baby slept nine hours straight and you got more sleep than you remembered was possible. 
        And you'll feel human again.
      </p>
    </article>
  )
}
