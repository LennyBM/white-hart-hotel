# Email Templates — White Hart Hotel, Holsworthy
## Post-Booking Confirmation + Post-Stay Review Request

---

## EMAIL 1: POST-BOOKING CONFIRMATION

**Trigger:** Immediately on booking confirmation (automated from booking engine)
**Subject line options (A/B test these):**
- `You're booked — White Hart Hotel, Holsworthy`
- `See you soon — your White Hart booking is confirmed`
- `Booking confirmed: White Hart Hotel [dates]`

**Recommended:** Option 1 — direct, no fluff, immediately clear

---

**From name:** White Hart Hotel, Holsworthy
**From address:** bookings@[domain] (or hello@[domain])
**Reply-to:** hello@[domain]

---

### EMAIL BODY:

---

**Subject:** You're booked — White Hart Hotel, Holsworthy

Hi [First Name],

Your booking is confirmed. Here's everything you need.

---

**BOOKING SUMMARY**

> Arrival: [Date]
> Departure: [Date]
> Room: [Room Name]
> Guests: [Number]
> Rate: [Package / B&B / Room Only]
> Booking reference: [REF]

---

**WHAT'S INCLUDED**

[Conditional block — show relevant lines only:]

> ✓ Full cooked breakfast — served [7am–10am weekdays / 7:30am–10:30am weekends]
> ✓ Dinner included — [two / three] courses from our full menu [evening of [date]]
> ✓ [Any package-specific inclusions — e.g. Prosecco on arrival, packed lunch, late checkout]

---

**GOOD TO KNOW BEFORE YOU ARRIVE**

> **Check-in:** From [3pm]. If you're arriving earlier, we're happy to store your luggage — come straight to the bar.
>
> **Check-out:** By [11am]. Late checkout until 1pm available on request (subject to availability — just ask).
>
> **Parking:** Free, on site. No booking required.
>
> **Dogs:** [If applicable: Your dog is welcome. Water bowls at the bar. Please let us know if you need a ground-floor room.]
>
> **Dinner reservations:** [If DBB or Romantic Escape: Your table is reserved for [evening]. If you'd like to dine at a specific time, just reply to this email and we'll confirm.]
>
> [If room-only or B&B: If you'd like to eat with us during your stay, we'd recommend booking a table — we can get busy, especially on [Friday/Saturday]. Reply to this email or call us on [01409 XXXXXX].]

---

**GETTING HERE**

> White Hart Hotel, Fore Street, Holsworthy, Devon, EX22 [XXX]
>
> **From the A30 (Okehampton/Exeter direction):** [Brief directions]
> **From Bude:** [Brief directions]
>
> Full directions and a map: [link to contact/directions page]
>
> What3words: [///word.word.word — add your actual W3W address]

---

**THINGS TO DO WHILE YOU'RE HERE**

> We've put together a local area guide with our recommendations for walks, beaches, and places to visit: [link to /explore/]
>
> Worth knowing: Bude is 17 miles west (25 minutes), Dartmoor is 15 miles east (30 minutes). You're well placed for both.

---

**QUESTIONS?**

> Call us: [01409 XXXXXX]
> Email: hello@[domain]
> We're here [hours] — happy to help with anything.

---

Looking forward to seeing you.

The team at the White Hart
Holsworthy, Devon

---

*White Hart Hotel · Fore Street · Holsworthy · Devon · EX22 [XXX]*
*[01409 XXXXXX] · hello@[domain] · [website URL]*

*To manage your booking: [booking management link]*
*Privacy policy: [link] — We will never share your details with third parties.*

---

---

## EMAIL 2: POST-STAY REVIEW REQUEST

**Trigger:** 24 hours after checkout date (automated)
**Timing note:** 24 hours is optimal — far enough that they're settled, close enough that the experience is vivid. Do not send at 4am — schedule for 10am delivery.

**Subject line options:**
- `How was your stay, [First Name]?`
- `A quick favour — if you enjoyed your visit`
- `[First Name] — hope you had a good one`

**Recommended:** Option 1 — personal, direct, no bait-and-switch

---

### EMAIL BODY:

---

**Subject:** How was your stay, [First Name]?

Hi [First Name],

Thank you for staying with us [last week / this week — use actual dates: "on [dates]"]. We hope the [room name / stay] was what you needed.

If you enjoyed it, we'd really appreciate a Google review. It makes a genuine difference for an independent pub — it's how people find us, and it's how we know we're getting things right.

**[Leave us a review — it takes 2 minutes →]**
[Direct Google Review link — get this from your GBP profile]

If anything wasn't right during your stay, please reply to this email instead. We'd rather hear it directly and have the chance to put it right.

---

**COME BACK SOON**

If you'd like to book again — whether it's another night, a Sunday lunch, or a special occasion — booking direct always gets you the best rate.

[Book direct →] [link to rooms page]

---

Thanks again.

[Your name / "The team at the White Hart"]
White Hart Hotel, Holsworthy

---

*White Hart Hotel · Fore Street · Holsworthy · Devon · EX22 [XXX]*
*[01409 XXXXXX] · hello@[domain]*

*You're receiving this because you recently stayed with us. To unsubscribe from post-stay emails: [unsubscribe link] (required for GDPR compliance)*

---

---

## EMAIL 3: PRE-ARRIVAL INFORMATION EMAIL (OPTIONAL BUT RECOMMENDED)

**Trigger:** 3 days before arrival date
**Subject:** `Getting ready for your White Hart stay, [First Name]`

**Note:** This email reduces front-desk friction, improves the guest experience, and prompts upsells (dinner reservation, room upgrade) before arrival.

---

### EMAIL BODY:

---

**Subject:** Getting ready for your White Hart stay, [First Name]

Hi [First Name],

You're arriving in [3 days / on [day]] — we're looking forward to it.

A few things worth knowing in advance:

---

**YOUR BOOKING**

> Arrival: [Date] from [3pm]
> Checkout: [Date] by [11am]
> Room: [Room Name]
> Booking reference: [REF]

---

**DINNER DURING YOUR STAY**

[If DBB: Your dinner is included — we've reserved your table for [evening at X time]. If you'd prefer a different time, reply and we'll sort it.]

[If B&B: If you'd like to eat with us, we'd suggest booking a table in advance — especially [Friday / Saturday evenings]. Reply to this email to reserve, or call [01409 XXXXXX].]

Our current menu: [link to food menu page]

---

**THE WEATHER FORECAST**

> [Optional — if you have the capability, a simple one-liner: "Devon's looking [fine/mixed] this weekend — good walking weather." This personalises the email significantly and takes 10 seconds to add manually or automate via a weather API.]

---

**LOCAL TIPS FOR YOUR STAY**

> [Personalise this if you can — e.g., if they booked via a walking weekend package, mention the best routes. If they mentioned a special occasion at booking, acknowledge it briefly.]
>
> Our full local area guide is here: [link to /explore/]

---

**ANYTHING YOU NEED?**

> Reply to this email or call us on [01409 XXXXXX]. We're here until [10pm] most evenings.

See you [Thursday / on the 14th].

The team at the White Hart

---

*[Footer as above]*

---

---

## IMPLEMENTATION NOTES

### Required to make these work:

1. **Booking engine must support automated email triggers** — Beds24, Little Hotelier, and Lodgify all support this. Set triggers at: booking confirmed, 3 days pre-arrival, 1 day post-checkout.

2. **Google Review link** — Get the direct link from your GBP dashboard (Profile → Get more reviews → Share review form). Use the short link, not the full URL.

3. **Personalisation fields** — All `[First Name]`, `[dates]`, `[Room Name]` etc. are merge fields — your booking engine should populate these automatically.

4. **GDPR note** — Post-stay marketing emails (upsells, newsletter) require opt-in. The review request email is transactional and does not require marketing opt-in — but it must include an unsubscribe option per ICO guidance. Check current guidance at ico.org.uk if in doubt.

5. **Email design** — Keep it plain. Single-column, no heavy graphics, mostly text. Emails that look like a real person wrote them get higher open rates and feel less like spam. Use your brand colours sparingly — a clean header with the White Hart logo is enough.

6. **Sending domain** — Use a custom domain (hello@whitehartholsworthy.co.uk or similar) not a Gmail address. Configure SPF, DKIM and DMARC records on your domain to prevent emails going to spam. Your hosting provider or Mailchimp can walk you through this.

---

*Email templates prepared for White Hart Hotel, Holsworthy — April 2026*
