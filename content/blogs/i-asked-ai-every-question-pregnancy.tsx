import type { BlogMeta } from '@/lib/blogs'
import { PullQuote } from '@/components/blog/PullQuote'
import { InsightBox } from '@/components/blog/InsightBox'
import { ChatSim } from '@/components/blog/ChatSim'
import { StatRow } from '@/components/blog/StatRow'

export const meta: BlogMeta = {
  slug: 'i-asked-ai-every-question-pregnancy',
  title: 'I Asked AI Every Question I Was Too Scared to Ask During My Wife\'s Pregnancy',
  subtitle: 'Nine months of 2am panic. Every scan result I didn\'t understand. Every symptom that sent me spiralling.',
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
      answer: 'A subchorionic hematoma is a collection of blood between the uterus and the gestational sac. It appears in roughly 1 in 4 early pregnancy ultrasounds. Most resolve silently by week 12–14 as the placenta matures.'
    },
    {
      question: 'What does a CTG monitor show?',
      answer: 'A CTG (cardiotocography) monitor tracks the baby\'s heart rate and uterine contractions. Doctors look for accelerations — temporary rises in heart rate when the baby moves.'
    }
  ]
}

export function BlogContent() {
  return (
    <article className="article-body">
      <p>
        It was 2am. My wife was asleep. I was sitting on the bathroom floor
        staring at my phone, typing a question I was embarrassed to ask anyone
        in my life.
      </p>

      <p>
        The question was about a strand of blood I'd found in my 8-week-old
        son's diaper an hour earlier. I'd already Googled it. Google had
        suggested intussusception, intestinal infection, and three other things
        that sent my heart rate through the roof. So I closed Google and opened
        a chat window instead.
      </p>

      <p>
        I work with data for a living. I build models. I know how large language
        models work — roughly. I know they hallucinate, I know they don't
        actually understand anything, I know their limitations better than most
        people who use them. None of that stopped me from typing my question and
        feeling genuine, physical relief when the answer came back calm and
        structured. When you're scared enough, you'll take reassurance from
        anywhere.
      </p>

      <p>
        That moment on the bathroom floor was one of hundreds like it over the
        previous twelve months. And looking back at all of them together — the
        logs I kept, the conversations I saved — I can see something I couldn't
        see in the middle of it: <strong>every question I was asking at 2am is
        a question thousands of dads are asking right now, tonight, with no
        one to ask.</strong>
      </p>

      <StatRow stats={[
        { value: '9', label: 'months of pregnancy conversations saved' },
        { value: '3mo', label: 'of newborn panic questions after birth' },
        { value: '2am', label: 'when most of the real questions happened' }
      ]} />

      <h2>The pregnancy nobody prepares the dad for</h2>

      <p>
        My wife's pregnancy was high-risk. We had history — losses before this.
        Which means every scan, every symptom change, every quiet day where she
        felt "fine" carried weight that most first-time parents don't carry.
      </p>

      <p>
        From week 6, I became the research arm of our family. She was too
        exhausted and too emotionally fragile to look things up — every search
        result felt like a threat to her. So I was the one reading. The one
        interpreting. The one who had to decide, in the middle of the night,
        whether something was worth waking her over or worth letting her sleep.
      </p>

      <p>
        That is a role nobody prepares you for. There are books for expectant
        mothers. There are apps for expectant mothers. There are entire medical
        systems oriented around the experience of the person carrying the baby.
        And there should be — she is doing something extraordinary.
      </p>

      <PullQuote>
        But the person lying awake at 2am interpreting the scan report,
        calculating whether the hCG numbers are rising fast enough, trying
        to understand what 'subchorionic hematoma' means — that person has
        essentially nothing.
      </PullQuote>

      <p>
        What I had was a chat window. And I used it constantly.
      </p>

      <h2>Week 7: <em>The first real scare</em></h2>

      <p>
        My wife's nausea disappeared almost completely around week 7. If you've
        been through this, you know what that sentence means to a dad who's
        already afraid. Nausea is the sign things are working. When it stops,
        your brain immediately goes to the worst explanation.
      </p>

      <p>
        I didn't tell her how scared I was. She was already anxious. My job was
        to be steady. So instead, at midnight, I asked an AI.
      </p>

      <ChatSim
        label="From my actual conversation logs — week 7"
        messages={[
          { name: 'Me', text: 'My wife\'s symptoms are reducing. Since day before yesterday nausea is less and feeling of tiredness has also decreased. Should we be worried?' },
          { name: 'AI', text: 'Mild symptom reduction can be normal. Hormones don\'t increase in a straight line — some days symptoms are stronger, other days they dip. The most definitive next step is an ultrasound. At 7 weeks, the heartbeat can be detected in more than 90% of healthy pregnancies. If the heartbeat is present, your risk of miscarriage drops significantly.' },
          { name: 'Me', text: 'We have a history of pregnancy loss.' },
          { name: 'AI', text: 'That context matters. With your history, extra monitoring is fully justified — not because something looks wrong right now, but to stay ahead. Your current situation does not show any immediate signs of concern. But you deserve an early scan for both medical and emotional reassurance.' }
        ]}
      />

      <p>
        The answer wasn't revolutionary medical advice. It was calm, structured
        information delivered without judgment at midnight. It acknowledged
        our history without catastrophising. It told me what to look for and
        what to do next.
      </p>

      <p>
        That was enough. I could go back to sleep.
      </p>

      <h2>The scan report I couldn't read — and what a subchorionic hematoma actually is</h2>

      <p>
        At week 7 and 5 days, we got our first scan. The baby had a heartbeat —
        135 beats per minute. Crown-rump length of 8.8mm. Everything measuring
        on track.
      </p>

      <p>
        And then the radiologist pointed to something else on the screen. A
        collection of blood between the uterine wall and the gestational sac.
        A subchorionic hematoma. 22.3mm.
      </p>

      <p>
        We walked out of the clinic with a printed report I couldn't fully
        interpret and a fear I didn't know how to hold.
      </p>

      <ChatSim
        label="That evening — what I typed when we got home"
        messages={[
          { name: 'Me', text: 'Scan went fine but there is a blood clot seen in the uterus. The report says subchorionic collection, 22.3 x 5.5mm, inferior to the gestational sac.' },
          { name: 'AI', text: 'A subchorionic hematoma is a collection of blood between the uterus and the gestational sac. It happens in roughly 1 in 4 early pregnancy ultrasounds — many women don\'t even know they had it because it resolves silently. The heartbeat is present and the CRL is measuring normally — both very reassuring. The clot is away from the sac, which is a better prognosis. Most SCHs resolve by week 12–14 as the placenta matures.' },
          { name: 'Me', text: 'What should we do? Is there something she can eat to help?' },
          { name: 'AI', text: 'Pelvic rest. No lifting above 3–4kg. Left-side lying to improve uterine blood flow. Iron-rich foods — spinach, pomegranate, dates. Vitamin C to help iron absorption. Hydration — 2.5 to 3 litres daily. The body often reabsorbs these quietly. The heartbeat you saw today is the most important data point you have right now.' }
        ]}
      />

      <InsightBox label="What dads should know about reading scan reports">
        A scan report is written for a radiologist to communicate with a doctor. It is not written for a scared dad sitting in a car park trying to understand what just happened. Terms like "subchorionic collection," "echogenic focus," and "posterior placenta" are normal findings that sound alarming in plain English. The most useful thing anyone can give a dad after a scan is a translation — not a diagnosis, just a plain English explanation of what the words mean and whether the doctor seemed concerned.
      </InsightBox>

      <h2>The pattern I only saw in the data</h2>

      <p>
        After the SCH, the pregnancy stabilised. The clot resolved. The baby
        kept growing. But the pattern of my nights didn't change.
      </p>

      <p>
        Every new finding became a new research project. Polyhydramnios at
        week 28 — excess amniotic fluid. A high glucose screening result.
        The risk of gestational hypertension. Each one arrived as a clinical
        term I had to decode, a number I had to contextualise, a conversation
        I had to somehow have with my wife calmly while I was quietly terrified.
      </p>

      <p>
        As a data scientist, I keep logs. Looking back at twelve months of them,
        a pattern is obvious that I couldn't see from inside it.
      </p>

      <p>
        <strong>The questions cluster.</strong> Week 6–8: symptom fluctuation
        panic. Week 12–14: NT scan anxiety. Week 28: growth scan results.
        Week 36–37: labour preparation. The fears are predictable. Every
        expecting dad is going to hit these same moments at roughly the same time.
      </p>

      <p>
        <strong>The information exists.</strong> Everything I needed to know
        was somewhere on the internet. But "somewhere on the internet" at 2am
        with a scared wife asleep in the next room is not the same as having
        a calm, contextual answer in plain English right now.
      </p>

      <p>
        <strong>The gap is in the framing.</strong> Every resource I found was
        written for the mother, or for "parents" — which in practice means the
        mother. The dad's specific need to understand what's happening so he
        can be useful and steady — that was addressed almost nowhere.
      </p>

      <h2>Week 37: The CTG monitor and what the numbers actually mean</h2>

      <p>
        At 37 weeks, my wife reported reduced fetal movement after a membrane
        sweep. We went to the hospital. They put her on a CTG monitor — a machine
        that tracks the baby's heart rate and uterine activity simultaneously.
        I sat next to her watching a screen full of numbers and lines I
        didn't understand, while nurses talked to each other in terms I
        couldn't follow.
      </p>

      <p>
        I photographed the screen and typed what I saw.
      </p>

      <ChatSim
        label="Hospital — 37 weeks"
        messages={[
          { name: 'Me', text: 'FHR1 showing 142. TOCO showing 57. The doctor says they would like more acceleration in the graph. Heart rate is fine. What does that mean?' },
          { name: 'AI', text: '142 bpm is perfectly normal — that\'s a healthy fetal heart rate. An acceleration is a temporary rise in heart rate when the baby moves. It\'s the signal that says "baby is active and well-oxygenated." The doctor wants to see at least two accelerations in 20 minutes. The most likely reason they\'re not seeing them yet is that the baby is in a sleep cycle — newborns sleep 40–60 minutes at a stretch. Eating something sweet often wakes them within 20 minutes. TOCO at 57 indicates mild-to-moderate uterine tightening — expected after a membrane sweep and normal in late pregnancy.' }
        ]}
      />

      <p>
        The doctor left a conference to come and review the CTG in person.
        She made the call for a C-section.
      </p>

      <p>
        Our son was born that night. He is three months old now. He is fine.
      </p>

      <h2>After birth: the panic doesn't stop, it just changes shape</h2>

      <p>
        I thought the information anxiety would ease after delivery. It didn't.
        It became more immediate. During pregnancy, the questions were about
        interpreting reports over weeks. After birth, the questions were about
        right now — the next ten minutes.
      </p>

      <p>
        Green stool two days after the 6-week vaccines. A strand of blood in
        the diaper at 8 weeks. Baby crying inconsolably when put down. Milk
        coming out of his nose. Not sleeping when not held.
      </p>

      <p>
        Each one sent me to a chat window instead of Google, because Google
        had taught me that searching "blood in baby stool" at midnight leads
        nowhere good.
      </p>

      <PullQuote>
        The questions change when the baby arrives. But the need — for
        calm, clear, contextual information without the spiral — that need
        doesn't change at all.
      </PullQuote>

      <h2>What I built, and why</h2>

      <p>
        A few months ago I looked at everything I'd collected — nine months of
        pregnancy conversations, three months of newborn questions — and I
        asked myself a simple question: <em>what does this data actually show?</em>
      </p>

      <p>
        It shows that the questions are predictable. The fear is universal.
        The information exists. And the delivery mechanism for that
        information — calm, contextual, available at 2am, written for
        the dad specifically — does not exist in any product I could find.
      </p>

      <p>
        So I built it. It's called Dadly.
      </p>

      <p>
        Dadly gives expecting and new dads a weekly brief written from their
        perspective. It explains scan reports and lab results in plain English.
        It lets you ask any question at any hour without judgment. It knows
        your stage, your history, and your context — so the answers feel like
        they're for you rather than for a generic parent.
      </p>

      <p>
        It is, essentially, the thing I spent nine months wishing existed.
      </p>

      <h2>What I'd tell a dad starting this journey now</h2>

      <p>
        The fear you're feeling is not a weakness. It's appropriate. You are
        watching someone you love go through something you cannot share,
        trying to be useful and steady while being quietly terrified, with
        almost no resources designed for your specific role.
      </p>

      <p>
        The information you need exists. Most of what scared me turned out
        to be either normal, manageable, or something the medical team was
        already across. The subchorionic hematoma resolved. The polyhydramnios
        was managed. The CTG led to the right call at the right moment.
      </p>

      <p>
        What made the difference was not having all the answers. It was having
        a way to ask the question and get a calm, honest response that helped
        me decide what to do next. That's the only thing I've tried to build.
      </p>
    </article>
  )
}
