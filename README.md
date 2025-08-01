# CALL Learning — Astro Portfolio

A modern one-page portfolio built with [Astro](https://astro.build/).  
Features:
- Hero with gradient diagonal background and CTA
- Projects grid with “See Live” & “Source Code” buttons
- Sticky navigation & smooth scroll
- Responsive design, no JavaScript unless needed
- Favicon, basic SEO meta, PWA manifest

---

## 🚀 Getting Started

### Install dependencies
```bash
npm install
```

### Run in dev mode
```bash
npm run dev
```
Your site will be available at [http://localhost:4321](http://localhost:4321).

### Build for production
```bash
npm run build
```
The static site is generated in the `dist/` folder.

### Preview production build locally
```bash
npm run preview
```

---

## 📝 Project Structure

```
├── public/              # static assets (favicon, images, manifest)
│   ├── favicon.svg
│   ├── images/
│   └── icons/
├── src/
│   ├── content/
│   │   └── data.json    # Main site content (hero, about, projects, contact, footer)
│   ├── components/      # Nav, Section, Footer
│   ├── pages/
│   │   └── index.astro  # Main one-page site
│   └── styles/
│       └── global.css   # Custom styles & color palette
├── package.json
├── astro.config.mjs
└── README.md
```

---

## 🎨 Customization

- **Content:** edit `src/content/data.json`
    - `hero`: title, subtitle, CTA
    - `about`: description, resume, image
    - `projects`: title, info, info2, image, url, repo
    - `contact`: email
    - `footer`: networks (social links)
- **Images:** add/edit files in `public/images/` and reference them in `data.json`
- **Styles:** tweak variables in `src/styles/global.css`:
  ```css
  :root {
    --accent: #ef4444;   /* primary CTA (red) */
    --accent-2: #0ea5a3; /* secondary CTA (teal) */
    --fg: #0f172a;       /* text */
    --muted: #6b7280;    /* muted text */
  }
  ```

---

## ☁️ Deploy to AWS S3

### 1. Build
```bash
npm run build
```

### 2. Sync to S3
```bash
aws s3 sync ./dist s3://your-bucket-name --delete --profile your-aws-profile
```

### 3. Enable static hosting
- In AWS Console → S3 → your bucket → Properties → **Static website hosting**
- Index document: `index.html`
- Error document: `404.html` (optional)

### 4. Make files public
Attach a bucket policy like:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

### 5. (Optional) CloudFront + custom domain
- Create a CloudFront distribution with the S3 bucket as origin
- Add SSL cert via ACM
- Point your DNS to CloudFront

---

## 📦 Useful Plugins

- [`@astrojs/image`](https://docs.astro.build/en/guides/integrations-guide/image/) — optimize images
- [`@astrojs/tailwind`](https://docs.astro.build/en/guides/integrations-guide/tailwind/) — Tailwind CSS support
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) — sitemap.xml
- [`astro-icon`](https://github.com/natemoo-re/astro-icon) — easy icons

---

## 📄 License
MIT — feel free to use and adapt.
