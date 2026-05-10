---
title: Why You Should Pair with Non-Engineers
date: March 2021
description: Spotify encourages engineers to become T-shaped and lean into technologies and skill sets outside of their core specialization.
heroImage: https://engineering.atspotify.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fp762jor363g1%2F1c37283d4b52bce3f1354c4a4a8dbad0%2Fed2db1b2eb32c80c3594bde4f355e25d%2FEN139_1200_x_630.png&w=1920&q=75
---

**TL;DR** Spotify encourages engineers to become T-shaped and lean into technologies and skill sets outside of their core specialization. Being a T-shaped developer doesn't always mean having to learn more code, additional languages, or frameworks. It can be about broadening your outlook on the product-creation process and learning from peers outside of your discipline. Design Systems Engineering Manager at Spotify Tyce Clee talks about his experiences and the benefits of pairing with teams outside your strict discipline.

Prior to becoming an engineering manager, I spent the majority of my career as an engineer, primarily working on web interfaces and applications. The experiences and relationships built during my time as an engineer were essential to a successful transition into management. I've had firsthand experience with pairing with many other disciplines to achieve a goal or take a feature to production, and I want to share some of those learnings with you.

## Broaden scope of knowledge (T shape)

Engineers tend to skew towards a particular focus area within their chosen path, allowing for more advanced skills in some areas, but less in others. A JavaScript engineer who loves to work on data visualization, for example, may work less with GraphQL or Node.JS, or a more UI-focused engineer who lives within the world of CSS may not get a ton of exposure to complex routing or performance-based optimizations.

Within web engineering, we can look to our other developer colleagues and learn from them and their processes and workflows and bring that back to our discipline. This could be done by embedding with a backend team to understand how to map out an API schema for the very first time, build that together, and finally serve it to the front end. Then, returning to your team as a web engineer, you can have a much better understanding of how the schema was made and exactly what's returned when making requests. Methods such as these can extend your "T-shapedness" by expanding your knowledge in areas that you don't necessarily focus on in your day to day.

Additionally, when pairing with those outside of our discipline, we get to expand our thinking more laterally beyond just code, understanding more of the why and how behind a product-creation process and not just the final piece of the puzzle.

When I paired with a UX prototyper, I was able to gain early insights into product inception. This allowed me to get face time with real users through user-testing sessions, to have conversations with product managers on the importance of the new feature or product, and even to pair with designers on early mockups of the UI itself. Then, when the time came to write code, I had a much more well-rounded and cohesive background on the product we were building, and could be more invested in why it's important for the business.

## Stress-test documentation

I had a humbling and great learning moment with a designer who was attempting to write code for the first time on their computer. My team had written and rewritten our contribution documentation multiple times in previous weeks, and were confident it was thorough and had accounted for all use cases and disciplines. One thing we forgot to include, however, was the scenario when a computer had never been used for writing code for the web.

This meant the machine didn't have Xcode command-line tools, Node.JS, npm, Homebrew, etc. After watching the designer try to figure out why nothing was working, I had to interject and explain what was missing. We then paired on the pull request to update the contribution docs with a new section purely for those who had never run a frontend web environment before.

Stress-testing your documentation is critical for the success of your product, and we've found it best to simply observe when someone is attempting to read through the docs. Try to hold back your thoughts and tips in order to really test what you've written down.

## Build empathy between disciplines

Understanding the work that your colleagues do is a key piece to building better products together. One way to achieve this relatively quickly is to spend a "day in the life" with someone outside of your discipline. Go to every meeting, ask questions, take notes and, critically, attempt to do a piece of work as they would. A great example would be pairing with a designer to work on a small piece of a project or to spend time with a UX writer to understand the importance of tone of voice and language.

The next step would be to return the favor and encourage your non-engineer teammates to spend time with you. Dedicate the day to it, and treat it like an open conversation with some learning goals to achieve by the end of the day. Building this level of empathy between disciplines can only help with future planning, prioritization of work, and overall understanding of the difficulties faced by all the disciplines required to build digital products.

I once spent half a day pairing with a designer to brainstorm ways to better capture key descriptions of each component in our design system, and together we came up with a way to store that data to then use as code hints in an IDE and also display in Figma.

You might be thinking "I don't have time for this," or "I can't justify prioritizing this over other things in my sprint," but I would argue that spending a "day in the life" with someone else will forever affect the way you interact with that person, discipline, or product. Diversity of thought and background is key to building the best products imaginable, and by sharing your day with someone else you will exponentially increase your ability to build better products that will ultimately impact a broader group of people due to that expanded way of thinking.

## Shared language

Many workplaces these days have their own unique acronyms, slang, and more to help make sense of the slew of historical information a company has. This can be helpful, but only when you're aware of what those acronyms mean and why they're important. It's vital to help all new starters or internal transfers understand these terms and to explain them in a manner that makes sense to those outside of your team and/or discipline.

Something we use extensively across Spotify is SEMVER (semantic versioning), and this technique for releasing software doesn't always translate 1:1 to other disciplines without a little bit of explanation. I remember multiple times where my team took the time to walk through the fundamentals of this strategy with non-engineers to help them better understand the terminology and intent.

Doing this helped create a bridge of understanding between our disciplines, and such collaboration might even assist those outside of engineering with understanding release schedules and how they can play a key part in releasing software. Conversely, a designer explaining how a design critique works, the names given to various flows within their design tool, and even the difference between vector- and pixel-based image creation, can go a long way to helping an engineer better understand and relate to design.

## Summary

We made it to the end! So what did we learn? It's always important to stress-test your onboarding documentation and procedures, and the best way to do that is with someone that's never done it before. Don't be afraid of this; embrace the awkward moment your lack of documentation leads to a brick wall for the person onboarding. Make a note and fix it before the next person stumbles into the same problem.

Share more between disciplines, and encourage each other to translate words and phrases that may otherwise be confusing and isolating. Consider being T-shaped in more unorthodox ways — take up a design course, learn more about UX writing, study how accessibility in the browser works. I've personally spent time on all of these things, and see myself as having broader knowledge in areas I would've otherwise overlooked in favor of focusing on purely engineering-based areas.
