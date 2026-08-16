---
title: "I Audited My Own Backlinks and Found 424 Strangers Insisting I'd Bought Their Services"
description: 'Four hundred and twenty-four referring domains. Two of them earned. What the other 422 were selling, and why the disavow file I built is still sitting in a folder.'
kicker: 'A Confession'
# Same day as the LA audit post, so carry a time to break the sort tie.
pubDate: 2026-08-16T15:00:00Z
readingTime: '7 min read'
tags: ['Backlinks', 'Technical SEO', 'Small Business']
featured: false
---

There is a particular kind of dread that comes from running a diagnostic on yourself. Doctors do not want to read their own scans. Mechanics drive cars with a check-engine light they have been meaning to look at. And SEO consultants, it turns out, will audit four hundred client backlink profiles before they ever point the tool at their own domain.

Last week I pointed it at my own domain.

Reader, I have 424 referring domains. I have earned approximately two of them.

## The testimonial I definitely did not write

The first thing that surfaced was a review. Of me. Glowing. Five stars. Rocket emoji.

It explained that when I first launched my e-commerce site, a thing I have never owned, I struggled with minimal traction until I partnered with a link vendor whose name I will not be repeating here. Their niche edits, the testimonial continued, worked wonders. I ranked number one for several key products within eight weeks. It closed with a flexed-bicep emoji and the phrase "transformed our business dramatically."

I found this testimonial on six different websites.

Not six variations. The same testimonial. Identical spun paragraph, identical emoji, identical enthusiasm about my nonexistent product catalog, sitting on six domains with names like `epic-syndicate-link-baron-keyword.store`. Which is, I will admit, an incredible domain name. That is four separate SEO buzzwords stapled together and then sold a `.store` extension. Somewhere a person registered that and thought: yes. This conveys trust.

Whoever runs that network has decided I am their star client. I have never spoken to them. I have never paid them a dollar. But if you searched hard enough last month, you would have found six websites confirming that I am thrilled.

## The case studies about industries I do not work in

Next came the `.shop` cluster. Ten domains (`rankchest.shop`, `googleseopoint.shop`, `organicrankexpress.shop`, and seven more), each hosting elaborate case studies with titles that read like someone fed a conference agenda into a blender:

> The 18-Month Automation Tools Case Study for Healthcare: Placements, Anchors, Rankings Before and After: Breaking Down measurable performance checkpoints, important risk checks, and stronger authority-building decisions.

The URLs on these pages begin with random hex strings. `dcf6245b8-`. `4c5769cbd-`. That is the tell. Nobody writes a case study and then names the file `878781c42`. That is a machine generating pages at volume, and the hex string is just an index so it does not collide with itself.

I build websites for general contractors around Los Angeles and the San Fernando Valley. I remodel bathrooms, digitally speaking. According to these pages I have transformed the search visibility of the healthcare, pharmaceutical, YMYL, hospitality, financial advisory and legal sectors. Simultaneously. Over eighteen months. With full data transparency.

## The part where it got slightly less funny

Then I hit the group that actually mattered.

Five different websites, a health blog and a business site and a couple of others with no connection to each other, all hosting a page titled "🏆🏆Boost your Google rankings with Premium PBN & Link Building🏆🏆." Same title on all five. Same anchor text. Same URL structure: `/all/503/16.html`, `/all/2741/19.html`. Sequential path IDs across unrelated domains.

That is not a coincidence and it is not marketing. That is a doorway page injected into sites that got compromised, or that expired and were picked up cheap. Somebody is running a network, and the "clients" it advertises are just domains scraped off the internet, mine included, dropped into a template to make the page look populated.

Two more showed up four days before I ran the audit, on pages carrying eighteen thousand outbound links apiece, under the banner "Any SEO resource, we have it. 🔥 No resellers, no middlemen, lowest price."

No middlemen. Well. That is something.

## So I built a disavow file and then did not upload it

Here is where the professional part kicks in, and where I will be more useful than entertaining for a few paragraphs.

I sorted all 424 domains and found that roughly ninety percent were nofollowed. Most of the volume came from a single operator running a URL-shortener-and-analytics network across about thirty throwaway domains, `.top` and `.icu` and `.xyz` and `.party`, every one of them recycling the same three page IDs. Nofollow means the link passes no ranking signal. Disavowing a nofollow link is like installing a lock on a door that was already a wall.

That left about two dozen dofollow domains with genuine paid-link intent. I put those in a properly formatted disavow file. Then I checked Search Console for a manual action.

There is not one.

So the file is sitting in a folder, unuploaded, and that is the correct place for it. Google has said for years that most sites should never touch the disavow tool. Their spam systems already discount this material, and they see these networks from the other side, across every domain those doorway pages point at. Uploading a file would not move a single ranking. What it would do is create a maintenance obligation, because the disavow tool replaces your whole list every time you submit, and this campaign is still adding domains weekly.

The rule I would give any client, and the one I followed on myself: **disavow when you have a manual action, or when you know you bought the links. Otherwise, document and wait.** This is the same reason I get suspicious when [an audit leads with a disavow campaign](/blog/how-to-read-an-seo-audit/).

## The actually embarrassing part

I want to be honest about the real finding, because it is not the spam.

Out of 424 referring domains, I could identify two legitimate links. A footer credit on a client's site, which was earned, except that I built that site, so it is arguably me linking to me. And one contractor directory listing.

That is it. That is the whole editorial profile.

The spam is not suppressing my rankings. Nothing is suppressing my rankings. There is simply nothing lifting them, and four hundred pieces of algorithmic driftwood accumulated in the empty space where a link profile should be. Spam collects on low-authority domains the way leaves collect in an unused pool. The leaves are not the problem. The problem is that nobody is swimming.

I have spent years telling contractors that their Google Business Profile will not fix itself, and that the chamber of commerce listing is worth an afternoon. I am now taking my own advice, which is a deeply humbling sentence to publish on my own website.

## What you should actually do

If you just ran your own audit and panicked:

1. **Check Search Console first.** Security and Manual Actions. If it is clean, breathe. The scary-looking domains are almost certainly already being ignored.
2. **Filter by dofollow before you do anything else.** Most of what horrifies you in an export is nofollowed and inert.
3. **Look for footprints, not individual bad links.** Repeated URL patterns, sequential IDs, identical page titles across unrelated domains: that is how you identify a network in about ninety seconds instead of reviewing 424 rows by hand.
4. **Do not disavow to feel productive.** It is a scalpel for a specific condition, not a broom.
5. **Go earn a real link.** Boring. Slow. The only thing on this list that actually changes your rankings.

I build and optimize websites for contractors and local businesses across Los Angeles and the San Fernando Valley. My own backlink profile is a work in progress, as established above at some length. If you would like a second opinion on yours, including whether that alarming export actually means anything, [get in touch](/contact/).
