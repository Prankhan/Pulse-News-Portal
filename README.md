# PulseUSA — Social News Portal Starter

A colorful, responsive front-end prototype for a US-style social news publication.

## Included
- Responsive homepage and category filters
- Search and featured/newest/popular sorting
- Demo story cards, like/save interactions, dark mode
- Trending sidebar, newsletter UI, community CTA
- Two clearly marked Adsterra ad placement areas

## Run locally
Open `index.html` in a modern browser. For a local server, run `python -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Add Adsterra ads
1. Sign in to your Adsterra publisher account and add/verify your website.
2. Create an ad unit and copy the exact code provided by Adsterra.
3. In `index.html`, find `<!-- ADSTERRA BANNER CODE GOES HERE -->` and `<!-- ADSTERRA SIDEBAR CODE GOES HERE -->` placeholders below; paste each ad code in its matching location. (If the placeholders are not present in the visible ad cards, search for `Adsterra banner placement` and `Adsterra ad space`.)
4. Test on your published domain and follow Adsterra's current placement and traffic policies.

**Important:** The visible ad boxes in this starter are placeholders, not live advertisements. No ad revenue is generated until valid Adsterra code is installed and the site is published/approved as required.

## Publish with GitHub Pages (free static hosting)
1. Create/sign in to GitHub and create a new public repository, e.g. `pulseusa-news`.
2. Upload `index.html`, `style.css`, and `script.js` to the repository root.
3. Open repository **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to provide your live URL in the Pages settings.

## Before launching publicly
- Replace the sample story copy with verified, original reporting and sources. Current stories are illustrative demo content, not verified breaking news.
- Add your own branding, About, Contact, Privacy Policy, Terms, and corrections policy.
- Sign-in, community accounts, newsletter collection, comments, and article publishing are UI demos only. A backend and database are needed for real accounts and user-generated content.
- Do not publish other outlets' articles or images without permission. Attribute sources and fact-check claims.
