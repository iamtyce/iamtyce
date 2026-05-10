---
title: 5 Things I Wish I'd Known Before Starting a Design System at Spotify
date: November 2020
description: Key lessons learned from starting Encore, Spotify's design system for web applications, from scratch in 2017.
heroImage: /images/blog/5-things-i-wish-id-known/5_Things_Header_-_Square_2_2x.webp
---

*Author's note: You'll notice that throughout this article I use the word "customers" when talking about a design system's primary users — your teammates. In most cases, you'll be building a design system for your internal colleagues to use in their applications. So when I mention "customers" that's who I mean.*

> You've landed yourself a killer new role at a company that's ready to start a design system from scratch and handed you the keys to get this started.

What do you do first? Who do you talk to? Do you focus on shipping something sooner or planning a roadmap for the future?

All of these things were front of mind for me back in 2017 when I started this journey at Spotify. I was partnered up with a few engineers and designers, and we made it our job to come up with the next iteration of a design system for web applications. These learnings and early iterations eventually went on to play a critical part in the formation of Encore, the design system for Spotify. I learned some key points along the way, which I hope will help you in your own design system journey.

## 1. Engage with customers early

![London, January 2020 at our first internal design systems meetup of all teams working on Encore — over 30 people!](/images/blog/5-things-i-wish-id-known/5_Things_Inline_1.webp)

*London, January 2020 at our first internal design systems meetup of all teams working on Encore — over 30 people!*

In the design system community, we've all been guilty, one time or another, of working on a system in a silo. Without talking to internal customers and canvassing the external people your system will serve until the first version is ready to ship, you can almost definitely guarantee that the system will not only be out of touch with what's actually needed, but you've missed a golden opportunity to engage early and actively. By involving real people who will be using the system early on in the process, you can build rapport, get valuable feedback, create an official (or unofficial) ambassadorship program, and more.

Engaging with your internal customers from the get-go isn't always easy, and feedback from them can sometimes trip you up if it's unclear, given too early in an alpha or beta release cycle, or isn't constructive. When we were building Encore, it was essential for us to create some streamlined, easy-to-understand ways of working with customers early on so we could avoid these situations from arising. By attending discipline-specific rituals (ie. design crits, web guild meetings) we were able to "go to where the people are" rather than expecting them to come to us. This helped build a broader, bi-directional understanding from both the design system teams and feature teams.

> To ensure you get feedback that's helpful, tell your customers what you're looking for.

If you're in an early, pre-release cycle, be upfront and clear with customers on what that means and exactly what type of feedback you're seeking. This means you're not asking for high-fidelity critiques, but instead seeking critical bugs and flaws in the product.

## 2. Ruthlessly over-communicate

![Screenshots of email, Slack and website communication for new releases of Encore systems](/images/blog/5-things-i-wish-id-known/5_Things_Inline_2_2x.webp)

*Screenshots of email, Slack and website communication for new releases of Encore systems*

Early on, I was given the invaluable advice to over-communicate whenever possible, and to only stop when someone explicitly asks you to. Communicating with your customers can come in many different forms. If you're in the office, it can be as simple as posting flyers announcing a new release on the office bathroom walls, to displaying videos on TVs or holding open office hours for anyone to attend. Sending a well-crafted email to your teams, or even speaking at an all-team meeting can also be effective ways to keep people informed.

Having as much face time as possible with customers will also help you evangelize the system and gather feedback. Becoming the person or team that people think of first as the go-to for questions can be helpful for those wanting to find an answer, suggest a new feature, or notify you of a bug.

This doesn't need to be in-person; you can be just as effective by dialing into wider-reaching meetings you might not always attend. This could come in the form of a kick-off meeting for a new feature a certain product area is having, or a design crit for the evolution of an existing product.

## 3. Understand SEMVER

![A visual representation of semantic versioning (with major, minor and patch explanations)](/images/blog/5-things-i-wish-id-known/5_Things_Inline_3_2x__1_.webp)

*A visual representation of semantic versioning (with major, minor and patch explanations). Inspiration for diagram from the Geeks for Geeks online portal.*

Semantic versioning (SEMVER) is a crucial tool to use when building a web-based design system with a package that you'll release to your customers and update incrementally.

You can find the basics of SEMVER on [semver.org](https://semver.org/), but essentially, you can version a distributed system via the following format:

`MAJOR.MINOR.PATCH`

An example of this would be a design system that's had its first major release, a minor follow-up, and around two patch updates: `v1.1.2`.

It's essential to understand the power in communicating via SEMVER to help your customers understand what a release is expected to contain before they've read the release notes.

> If you release a patch or a minor, your customers should expect zero breaking changes and shouldn't be afraid to update their applications.

This is critical for maintaining trust and keeping people as up-to-date as possible.

When releasing majors, we choose a 6- to 8-week release window that allows people to test alpha, betas, and release candidates of the future major, and gives our teams the opportunity to address bugs and anything else unintended for the major release itself. This time window will vary depending on your company and the number of people consuming your system.

## 4. Track usage

![A visual representation on the adoption over time of the latest two major versions of an Encore library](/images/blog/5-things-i-wish-id-known/5_Things_Inline_4_2x.webp)

*A visual representation on the adoption over time of the latest two major versions of an Encore library.*

After working on a design system within Spotify for over two years, we established that one of the crucial missing pieces to our prioritization of future work was that we understand where the system was being used, by whom, how often it was being updated, and more.

To address this, we immediately began implementing some low-level daily statistic gathering on which teams were using precisely which version of the library. This allowed us to retrospectively compare the rate of adoption, upgrading, and even downgrading over time.

For example, if a team is updating to the latest release constantly they may be a great candidate for a beta test pool. Conversely, if a team never updates, it may be worthwhile reaching out and trying to find out what issues or problems may be blocking the upgrade.

It's not an exact science, and we had to make some assumptions to pair with the data that we weren't fully comfortable with. Some examples of this include not having the most accurate data to tell us whether an application was public-facing or internal, how many people it reached, and how many active designers/developers were contributing to it. To combat that, we made plans to partner with our data science colleagues to better collect and analyze data on usage over time.

## 5. Build feedback mechanisms

![Encore team members collaborating on a proposed future roadmap and screenshots of survey questions and results](/images/blog/5-things-i-wish-id-known/5_Things_Inline_5_2x.webp)

*Encore team members collaborating on a proposed future roadmap and some screenshots of survey questions and results for usage of a library.*

Going back to my first point, it's important to create spaces for customers to engage with the system and the people who maintain the system at any time, and in any fashion. This will vary widely based on your company and your internal culture. You might find that weekly office hours on a Friday afternoon suit your teams well, whereas another company could have better success with individuals from the systems teams constantly embedding with other teams and assisting them with delivery.

Having clear ways for people to give feedback (Slack, email, etc.) and contribute to the system (documentation website, hints and docs within a design or development tool, etc.) is going to be a key piece in ensuring your system is not just useful to customers, but also something they feel a part of and have actively contributed to.

> Always document how and where to give feedback in as many places as possible, and don't assume that the one place you think is the easiest to find is where a customer will stumble across it.

## Summary

![The many faces that make up our distributed teams working on Encore, the design system for Spotify](/images/blog/5-things-i-wish-id-known/5_Things_Inline_6.webp)

*The many faces that make up our distributed teams working on Encore, the design system for Spotify.*

Phew, that was a lot! Not one design system is identical or even extremely similar to another and not all of these points may apply to you and your product. Key takeaways are that design systems exist to help others — real people trying to build something fast, with confidence and on-brand. Try to avoid over-complicating and over-engineering a solution without a good amount of input from the people that will actually use the system.

Create fun, accessible, and inviting rituals for people to attend and learn more about (and potentially contribute to!) your design system. Make efforts to attend their rituals to show that you are genuinely interested in what they are doing, where they are headed, and what problems they could be facing along the way.

Design systems are, after all, built for people, by people.

## Shoutouts

I wouldn't have the knowledge to write this article without the help of so many people over the past few years of working on design systems.

- Tamara Hilmes was my guiding light as an incredible writer and mentor. Tamara helped me shape this article into a coherent story and gave me the push I needed to get it out the door.

- Shaun Bent has been my forever partner in crime from my first days at Spotify in 2016 right up to now as my ongoing engineering manager, mentor, and lead.

- Jillian Nichols for being the only person I've worked with since day one, the engineering yin to my yang, and the original source of the earliest versions of web design systems at Spotify.

- Josh Mateo for remaining an ongoing source of inspiration and happiness for all things design, metal (🤘), and scaling systems.

- Owen Williams for influencing me with his writing style and tone of voice.

The Design Operations team and entire editorial staff that helped me shepherd this article into something worth reading.

And of course, the entire Encore family, across multiple timezones and countries ♥️
