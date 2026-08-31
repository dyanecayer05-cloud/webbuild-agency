# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/navigation.spec.ts >> Craft and Code Landing Page Automated Verification >> Navbar branding and title render correctly
- Location: tests/navigation.spec.ts:9:3

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected pattern: /Craft and Code by H.H. Solutions/
Received string:  "Craft & Code | High-Performance Web Systems"
Timeout: 5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × locator resolved to <html lang="en" class="scroll-smooth">…</html>
       - unexpected value "Craft & Code | High-Performance Web Systems"

```

```yaml
- banner:
  - text: "--- // src/components/Navbar.astro ---"
  - banner:
    - link "Craft & Code Web Systems":
      - /url: "#home"
      - img
      - text: Craft & Code Web Systems
    - navigation:
      - link "Home":
        - /url: "#home"
      - link "About":
        - /url: "#about"
      - link "Features":
        - /url: "#features"
      - link "Process":
        - /url: "#process"
      - link "Pricing":
        - /url: "#pricing"
    - link "Start Project":
      - /url: "#contact"
- main:
  - text: Small Business Supporting Small Businesses • NC & Nationwide
  - heading "Premium web engineering, built to elevate any vision, anywhere." [level=1]
  - paragraph: Bespoke static architecture designed for local trades, emerging creators, and modern businesses. No bloated agency retainers, no WordPress slowdowns, and zero sales calls.
  - link "Start Your Project":
    - /url: "#contact"
  - link "Explore How It Works":
    - /url: "#process"
  - text: Positioning
  - heading "We bridge the gap between enterprise speed and small business." [level=2]
  - paragraph: "Most web agencies overcomplicate development to justify large retainers. We do the opposite: zero bloated plugins, instant sub-second static loads, and clean code that works for your bottom line."
  - heading "Local Trades & Service Pros" [level=3]
  - text: High Local Visibility
  - paragraph: Contractors, plumbers, and local shops who need to turn local search intent into direct phone calls and booked appointments.
  - heading "Startups & Emerging Creators" [level=3]
  - text: Brand Authority
  - paragraph: Independent founders who need a striking digital presence that builds immediate credibility with investors and customers.
  - heading "Bespoke Digital Platforms" [level=3]
  - text: Custom Architecture
  - paragraph: Custom booking tools, intake engines, and client portals built to automate workflows without monthly SaaS lock-in.
  - text: The WebBuild Edge
  - heading "Why modern businesses choose bespoke engineering." [level=2]
  - paragraph: Compare our sub-second static builds and zero-overhead architecture against legacy WordPress agencies and restrictive DIY builders.
  - text: Speed & Performance 0.2s
  - heading "Guaranteed 100/100 Core Web Vitals" [level=3]
  - paragraph: Engineered with modern static architecture for sub-second paint times on mobile networks. Zero bloated WordPress plugins, zero lag, and instant page hops.
  - text: "Standard: Guaranteed Average Load Time Cost Efficiency $0/mo"
  - heading "Zero Monthly Server or Plugin Fees" [level=3]
  - paragraph: Deployed to global edge delivery networks. Your baseline hosting overhead drops to $0/month—no unexpected maintenance retainers or plugin license renewals.
  - text: "Standard: Guaranteed Baseline Server Cost Search Dominance JSON-LD"
  - heading "Automated Local Schema Injection" [level=3]
  - paragraph: Every site includes pre-configured Google JSON-LD structured data (LocalBusiness, GeoCoordinates, Reviews), indexing you properly in local map packs.
  - text: "Standard: Guaranteed Google Schema Verified Zero Friction 72 hrs"
  - heading "100% Async Delivery. Zero Sales Calls." [level=3]
  - paragraph: No 60-minute discovery pitches. Fill out the project brief online in under 5 minutes, track progress in your client portal, and review staging within 72 hours.
  - text: "Standard: Guaranteed Staging Turnaround Independence 100%"
  - heading "Total Code & Asset Ownership" [level=3]
  - paragraph: No proprietary builder lock-in (like Wix or Squarespace). You receive a clean Git repository and production build that you own outright forever.
  - text: "Standard: Guaranteed Client Ownership How We Build"
  - heading "Transparent, sprint-based delivery." [level=2]
  - paragraph: A systematic build pipeline designed to take your site from concept to live deployment with maximum speed.
  - text: "01"
  - heading "Intake & Project Scope" [level=3]
  - paragraph: Fill out the simple intake brief below. Tell us your goals, target audience, and style preferences without having to sit through high-pressure sales calls.
  - text: "02"
  - heading "Engineering Sprint" [level=3]
  - paragraph: We build your bespoke responsive architecture, inject Google-compliant Schema.org LocalBusiness metadata, and test for perfect Lighthouse 100 performance.
  - text: "03"
  - heading "Production DNS Cutover" [level=3]
  - paragraph: We connect your custom domain, provision automated global SSL, and launch your turnkey digital presence to the world.
  - heading "Accessible, honest pricing" [level=2]
  - paragraph: Premium web engineering shouldn't require a bank loan. Enjoy our 0% interest monthly payment plans.
  - text: 0% Interest
  - heading "Starter" [level=3]
  - paragraph: Perfect for establishing a clean, fast online presence.
  - text: $75 / mo
  - paragraph: For 4 months ($300 total)
  - list:
    - listitem:
      - img
      - text: Single Page Layout
    - listitem:
      - img
      - text: Contact Form Integration
    - listitem:
      - img
      - text: Mobile & SEO Optimized
  - link "Choose Starter":
    - /url: "#contact"
  - text: Most Popular 0% Interest
  - heading "Professional" [level=3]
  - paragraph: Everything a growing local business needs to scale.
  - text: $150 / mo
  - paragraph: For 4 months ($600 total)
  - list:
    - listitem:
      - img
      - text: Up to 5 Pages
    - listitem:
      - img
      - text: Advanced SEO Setup
    - listitem:
      - img
      - text: Google Analytics Integration
  - link "Choose Pro":
    - /url: "#contact"
  - text: Flexible Milestones
  - heading "E-Commerce" [level=3]
  - paragraph: For retail shops ready to sell their inventory directly online.
  - text: Custom
  - paragraph: Tailored 0% payment plans available
  - list:
    - listitem:
      - img
      - text: Full Store Setup
    - listitem:
      - img
      - text: Secure Payment Gateway
    - listitem:
      - img
      - text: Inventory Management
  - link "Let's Talk":
    - /url: "#contact"
  - text: Client Trust
  - heading "Built for real business outcomes." [level=2]
  - paragraph: See how moving away from slow templates and agency bloat drives immediate growth.
  - paragraph: "\"Our old WordPress site was taking 6 seconds to load and costing us hundreds a month in maintenance. WebBuild launched our new site in 3 days, loads instantly, and we've already seen an uptick in calls.\""
  - text: Marcus Vance Owner, Vance Mechanical Trade Services
  - paragraph: "\"Skipping the sales meetings and just submitting our brief was a breath of fresh air. The design is sleeker than anything an expensive agency quoted us, and we own 100% of our code.\""
  - text: Elena Rostova Founder, Chroma Studio Creator Brand
  - paragraph: "\"The automated local SEO schema got us into the top 3 Google local map results within 4 weeks of launch. The best digital investment we made all year.\""
  - text: David Chen Director, Apex Logistics Local Enterprise
  - heading "Let's build something great." [level=2]
  - paragraph: Skip the meetings. Send us a message below and we'll reply within 24 hours.
  - text: Your Name
  - textbox "Jane Doe"
  - text: Email Address
  - textbox "jane@example.com"
  - text: Business / Project Name
  - textbox "Main Street Bakery"
  - text: Project Details
  - textbox "Tell us a little about what you need..."
  - button "Send Message"
- contentinfo:
  - link "WebBuild by CraftandCode":
    - /url: "#home"
  - paragraph: High-performance static web engineering and custom digital platforms built to elevate small businesses and independent creators.
  - text: Navigation
  - list:
    - listitem:
      - link "Home":
        - /url: "#home"
    - listitem:
      - link "About":
        - /url: "#about"
    - listitem:
      - link "Process":
        - /url: "#process"
    - listitem:
      - link "Pricing":
        - /url: "#pricing"
    - listitem:
      - link "Start Project":
        - /url: "#contact"
  - text: Direct
  - list:
    - listitem:
      - link "Client Brief Intake":
        - /url: "#contact"
    - listitem: NC & Nationwide Delivery
  - paragraph: © 2026 WebBuild by CraftandCode. All rights reserved.
  - paragraph: Built for speed, zero bloat.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Craft and Code Landing Page Automated Verification', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // Start from local preview or live URL
  6  |     await page.goto('http://localhost:4321');
  7  |   });
  8  | 
  9  |   test('Navbar branding and title render correctly', async ({ page }) => {
> 10 |     await expect(page).toHaveTitle(/Craft and Code by H.H. Solutions/);
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  11 |     await expect(page.locator('text=Craft and Code')).toBeVisible();
  12 |     await expect(page.locator('text=by H.H. Solutions')).toBeVisible();
  13 |   });
  14 | 
  15 |   test('All navigation links have valid targets', async ({ page }) => {
  16 |     const navLinks = ['#home', '#about', '#features', '#process', '#pricing'];
  17 |     
  18 |     for (const href of navLinks) {
  19 |       const link = page.locator(`header nav a[href="${href}"]`);
  20 |       await expect(link).toBeVisible();
  21 |       // Ensure target section exists in DOM
  22 |       const targetSection = page.locator(href);
  23 |       await expect(targetSection).toHaveCount(1);
  24 |     }
  25 |   });
  26 | 
  27 |   test('Primary "Start Project" CTA points to intake section', async ({ page }) => {
  28 |     const ctaButton = page.locator('header a[href="#contact"]');
  29 |     await expect(ctaButton).toBeVisible();
  30 |     await ctaButton.click();
  31 |     await expect(page.locator('#contact')).toBeVisible();
  32 |   });
  33 | 
  34 |   test('Intake form inputs are interactive', async ({ page }) => {
  35 |     const input = page.locator('#contact input[type="text"], #contact input[name="name"]').first();
  36 |     if (await input.count() > 0) {
  37 |       await input.fill('Automation Test');
  38 |       await expect(input).toHaveValue('Automation Test');
  39 |     }
  40 |   });
  41 | });
```