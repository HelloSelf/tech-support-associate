# HelloSelf · Technical Support & Platform Improvement Associate — Take-Home Task

**Where people get stuck**

Thanks for taking the time to apply. This task is deliberately small. What you build is a
starting point for a conversation, not the thing we're grading. We're far more interested in
what you notice, how you reason and why you made the choices you made than in anything
polished.

In short: use HelloSelf as a member, find **one specific moment** where someone is likely to get
stuck, confused or need to contact support, build a small working version of something better,
and come ready to talk about it: why that moment, why you built it the way you did and how you'd
know it helped.

You do **not** need to know how to code or to have worked in technology, healthcare or support.

---

## About HelloSelf

HelloSelf delivers therapy through its own clinic and through a platform that other clinics also
use. Members are matched with qualified therapists for one-to-one sessions over video, and they
use our mobile app and website to sign up, book, join sessions, fill in questionnaires and keep in
touch between sessions.

| Who | What they do on the platform |
|---|---|
| **Members** | People having therapy. They sign up, book sessions, join video calls and fill in questionnaires. |
| **Therapists** | Qualified clinicians. They run sessions, write notes and produce progress reports. |
| **Partners** | Organisations, such as insurers and employers, that refer members to us and receive reports. |
| **Colleagues** | HelloSelf staff, including clinical operations, who look after members' care and bookings. |

## The problem space

The Technical Support Team helps all of these people keep sessions and services running. Support
tickets are a **symptom**: most of them start at a moment where the product didn't make the next
step clear, didn't explain what had gone wrong, or left someone with nowhere to turn.

Two things make those moments matter more here than in most products:

- **Time matters.** A video session that doesn't start on time is a missed hour of therapy for
  someone who may have been building up to it all week.
- **People are often anxious.** Someone stuck on a login screen ten minutes before their session
  isn't in a frame of mind to read a long help article.

Part of this role is fixing tickets. The other part is making the product better so those
tickets don't happen in the first place. This task is about that second part.

---

## Your task

### 1. Find one specific moment

Register your own member account and explore HelloSelf, on **mobile** if you can. Try the things
a new member would do. Find a screen, flow or message where you think someone is likely to get
stuck, misunderstand what's happening, or end up contacting support. It might also be somewhere
that, if something went wrong, our support team would struggle to work out what had happened.

We're deliberately not telling you where to look: spotting the right moment is part of what we're
assessing.

**Getting the app:**
- iOS: https://apps.apple.com/gb/app/helloself-therapy-coaching/id1515004784
- Android: https://play.google.com/store/apps/details?id=com.helloself.mobilemember&hl=en_GB

**Please:**
- **Don't book a real session** with a therapist or pay for anything. Stop at the point where
  you'd have to.
- **Don't contact our support team** as part of the task.
- **Use made-up answers** in any questionnaires. Don't enter real health information about yourself.

Write down briefly: what you expected to happen, what actually happened, who it affects, how
often you'd guess it happens and how it could affect someone's therapy.

### 2. Build one small thing

Build a small version of your improvement that clearly connects to the moment you found. Pick
whatever form suits you, for example:

- a **clickable mockup or prototype** of the improved screen or flow (Figma, a web page, a no-code tool, slides)
- the **rewritten screen**, with the exact words, buttons and error messages you'd use
- an **in-app help** idea or help article, showing where it appears and when
- a **tool for the support team** that would help them diagnose or fix this problem faster
- a **bug report** for engineering with steps to reproduce it, the impact and a proposed fix

Mock the data and fake anything behind the scenes. It doesn't need to be connected to anything
real or ready for production. Use any tool, language or AI assistant you like. You don't need
previous coding experience, and it's fine if an AI assistant wrote most of the code.

**If you build something with code, you'll need to explain it.** In the follow-up we'll open
it together and ask you to walk us through how it works: the main parts, what each one does, how
they connect, where the data comes from and where it goes, and what you'd change to make it do
something slightly different. You don't need to have written every line yourself, but you do need
to understand how it's put together.

### 3. Come ready to talk about it

You don't need to prepare slides. Have a view we can explore together on:

- **Why this moment** over the others you noticed.
- **How you'd check it's a real problem** and not just something you happened to experience.
  What evidence would you look for, and where?
- **The code you built, if any.** Be ready to talk us through how it's put together: its
  structure, the important parts and how a change would ripple through it.
- **Your technical choices.** Why you built it this way, what you considered instead, and what a
  full version would look like. Which parts would you build yourself, and which would you hand
  to engineering?
- **What could go wrong.** Who looks after it, what happens when it goes out of date or breaks,
  and what information it touches.
- **How you'd know it helped** a member or therapist, not just that it shipped.

---

## How to submit

1. Click **"Use this template"** at the top of this repo to create your own copy.
2. Add your work on a branch and open a **pull request**.
3. Share the link with **@asmt3** and **@Joby-helloself**.

Not used GitHub before? That's fine. Send us a document or link (Google Doc, Figma, PDF, a short
screen recording) to **@asmt3** instead. We'll treat it exactly the same.

In your pull request or document, a few short paragraphs is plenty:

- **The moment you chose and why.** Include screenshots if they help.
- **What you built and what you deliberately left out.**
- **One thing your AI tooling got wrong**, or a suggestion you didn't take, and why. If you didn't
  use AI, tell us about something that surprised you instead.

Please send it by **[date]**.

## Scope and effort

**About 90 minutes, two hours at most.** Something small and specific beats something broad and
half-finished. If you're tempted to build more, write it down as something to discuss instead.

If you feel you need any adjustments, let **@asmt3** know.

## What we care about

- **User need over instructions:** did you find your own reason this is worth fixing?
- **Turning vague into specific:** can you describe exactly what goes wrong, for whom and when?
- **Judgement on scope:** something specific and finishable.
- **Technical taste:** is what you built a sensible fit for the problem, the people who'll use it
  and whoever has to maintain it? We value simple and appropriate over impressive.
- **Understanding what you built:** can you explain how your code is structured, what each part
  does and why it's built that way?
- **Care and evidence:** do you think about sensitive information, and about how you'd show it
  actually helped?

## A note on using AI

We build with AI every day, and you're very welcome to use it here. We're assessing the part AI
can't do for you: which moment matters, what to prioritise and how you'd know the result is
right. Please be ready to explain every decision as your own. That includes code: if an AI
assistant wrote it, make sure you understand what it wrote before you send it.

---

## The follow-up conversation

We'll then talk it through together. It's a conversation, not a presentation to be graded.

**First, about 10 minutes on something live.** We'll play someone whose video call with us isn't
working, and you lead: ask the questions, work out what could be causing it and talk us through
what you'd try. Nothing to prepare. We're interested in how you narrow it down, not in whether
you land on the answer.

**Then your task.** Start with a short walk-through of what you found and what you built,
including a look inside any code (screen-share, show us on your phone, whatever works), and then
we'll follow wherever it leads: the product, your technical choices, what support would see and
how you'd measure it. Expect us to dig into whichever side you spent less time on. There are no
trick questions. Think out loud, and feel free to change your mind.

Any questions about the task, just reach out. Good luck, and have fun with it.
