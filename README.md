# HelloSelf · Technical Support & Platform Improvement Associate — Take-Home Exercise

**Three tickets, one pattern, one small improvement**

Thanks for taking the time to apply. This exercise should take **about 90 minutes**.
It is a starting point for a conversation, not a test with one right answer. We are far
more interested in how you think, what you notice and how you explain your choices than
in anything polished.

You do **not** need to know how to code, have worked in support or have used our systems
before. Everything you need is in this pack.

In short: handle three support tickets, look at a few weeks of (made-up) ticket history,
spot a problem worth fixing, build one small thing that helps, and then come and talk to
us about why you built it the way you did.

---

## About HelloSelf

HelloSelf delivers therapy through its own clinic and through a platform that other clinics
also use. There are four groups of people who might contact the Technical Support Team:

| Who | What they do on the platform |
|---|---|
| **Members** | People having therapy. They book sessions, join video calls and fill in questionnaires, using the mobile app (iOS/Android) or a web browser. |
| **Therapists** | Qualified clinicians. They run video sessions, write notes and produce progress reports. |
| **Partners** | Organisations that refer members to us, such as insurers and employers. They use a partner portal to make referrals and receive progress reports. |
| **Colleagues** | HelloSelf staff, including **clinical operations**, the team responsible for members' care, bookings and anything clinical. |

Two things make support here different from most help desks:

- **Time matters.** A video session that doesn't start on time is a missed hour of therapy for
  someone who may have been building up to it all week.
- **The information is sensitive.** Tickets can involve health information. Who you share
  things with, and how, matters as much as fixing the problem.

---

## Your task

### Part 1 · Three tickets (about 45 minutes)

It is **08:50 on a Monday**. You've just logged on, and these three tickets are in your queue.
Support hours are 08:00–18:00, Monday to Friday. All three tickets are fictional, and any
details in square brackets have been anonymised.

> **Ticket A**: from a therapist, via live chat, received **08:47 today**
>
> Hi, my 9am member says they're stuck on "Waiting for your therapist". I'm already in the
> session and can see the room, and my camera's on. They've tried twice. They're quite
> anxious about today's session — can someone help quickly please?
> — [Therapist]

> **Ticket B**: from a member, via email, received **22:14 last night (Sunday)**
>
> Subject: can't get in
>
> I've been trying to log in for 2 days and it keeps asking for a code but nothing comes
> through. I got a new phone last month. I need to book my next session because I've had a
> really hard week and I don't think I can wait much longer to talk to someone. Can you just
> change my number to 07700 900123? Thanks
> — [Member]

> **Ticket C**: from a partner, via email, received **16:40 last Friday**
>
> Subject: Reports AGAIN
>
> Hi, we still haven't received the October progress report for [member ref 4471]. Also,
> two of last month's reports opened as completely blank pages. This is the third time this
> has happened. Our case managers need these for authorisations by this Friday. Can you just
> email them over to me directly?
> — [Case manager], [Partner organisation P-07]

Please write:

1. **The order** you'd deal with them in, and why. Think about the effect on someone's therapy,
   not only how loud or recent the ticket is.
2. For **each** ticket:
   - **Your first reply**, written exactly as you'd send it.
   - **What you'd want to find out or check**, and how you'd check it. Turn the vague parts
     into specific questions.
   - **Who else you'd involve, if anyone**: clinical operations, engineering or someone else.
     Say when and why.
   - **Anything you would *not* do**, even though you were asked.

You won't have access to any HelloSelf systems. Where you'd normally look something up, say
what you'd look for and what each possible answer would tell you.

### Part 2 · Find a pattern and build one small thing (about 45 minutes)

This pack includes two files of **made-up** data:

- `data/ticket-log.csv` — 8 weeks of resolved support tickets (95 rows), as exported from our
  help desk.
- `data/weekly-sessions.csv` — how many therapy sessions were delivered each week, plus two
  things that changed during that period.

Open them in any tool you like: a spreadsheet, a notebook, an AI assistant or pen and paper.

1. **Find the pattern you think matters most.** What's causing repeat tickets? Who is affected,
   and how much does it cost them? Give the evidence for your answer, not just the conclusion.
2. **Build one small thing** that would help, and make sure it clearly connects to the pattern
   you found. Use whatever form suits you. For example:
   - a help article, a set of saved replies or a troubleshooting flowchart for the team
   - a spreadsheet, dashboard or short analysis that someone could re-run next week
   - a simple internal tool, form or checklist, built with or without code
   - a small web page, script or prototype
   - a write-up of a bug for engineering, with steps to reproduce it

   It doesn't need to be finished or connected to anything real. Mock what you need.
   **Something small and specific beats something broad and half-done.**
3. **Say how you'd know whether it worked.** What would you measure, over what period, and what
   result would make you change your mind?

### Part 3 · Come ready to talk about it

You don't need to prepare slides. We'll spend most of the conversation on **why you made the
choices you made**, especially your technical choices. Have a view on:

- **Why this tool or format** rather than the alternatives you considered.
- **Who uses it and who looks after it.** What happens when it goes out of date or breaks?
- **What data it touches.** Does it hold anything sensitive, and does it need to?
- **What you'd do with another week**, and what you'd hand to engineering instead of building yourself.
- **How you'd present it** at our fortnightly meeting with engineering, clinical operations and
  product: the evidence, the proposal and what you'd ask them for.

---

## How to submit

Send us one document containing your Part 1 answers and a short note on Part 2, plus whatever
you built. That could be a file, a link, screenshots or a short screen recording, whichever is
easiest. Use any format you're comfortable with (Google Doc, Word, PDF, a GitHub repo, etc.).

In your Part 2 note, a few short paragraphs is plenty:

- **The pattern you chose and why** you chose it over the others you noticed.
- **What you built and what you deliberately left out.**
- **One thing that surprised you or that you got wrong** along the way, including anything an AI
  tool suggested that you didn't use.

Send it to **[recruiting contact]** by **[date]**.

## Scope and effort

**About 90 minutes in total.** If you hit 90 minutes, stop and write down what you'd do next.
That list is useful to us, and we won't hold an unfinished build against you.

## What we care about

- **Turning vague into specific:** did you work out what's actually happening rather than guess?
- **Calm, clear writing:** would your replies help someone who's stressed and short of time?
- **Judgement:** do you put therapy first, know when to involve other people and take care with
  sensitive information?
- **Evidence:** can you show a pattern is real, and how you'd know a fix worked?
- **Technical taste:** is what you built a sensible fit for the problem, the people who'll use it
  and the person who'll maintain it? We value simple and appropriate over impressive.

## A note on using AI

We use AI tools every day, and you're welcome to use them here, including for the build. We're
assessing what AI can't do for you: what you notice, what you prioritise and how you check
whether something is right. Please be ready to explain every decision as your own. Don't paste
anything into an AI tool that you wouldn't paste into a real one at work. It's good practice
even with made-up data, and we may ask you about it.

## Adjustments

If you'd like more time, a different format (for example, talking through Part 1 instead of
writing it) or any other adjustment, just tell **[recruiting contact]**. You don't need to
explain why.

---

## The follow-up conversation

It's a conversation, not a presentation to be graded. You'll start with a short walk-through of
what you built, and then we'll follow wherever it leads: the tickets, the data, your technical
choices and what you'd do next. Expect us to dig into the side you spent less time on. There
are no trick questions. Think out loud, and feel free to change your mind.

Any questions about the exercise, just ask. Good luck.
