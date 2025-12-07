# 🚀 Portfolio Deployment Guide

Complete guide to deploy your portfolio to a live server.

---

## 📋 Prerequisites

1. **GitHub Account** (free) - [Sign up here](https://github.com)
2. **Node.js installed** (you already have this)
3. **Git installed** (usually comes with GitHub Desktop)

---

## 🎯 Option 1: Vercel (Recommended - Easiest & Fastest)

Vercel is the easiest and fastest way to deploy. It's free and provides automatic deployments.

### Step 1: Push to GitHub

1. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it `portfolio` (or any name you like)
   - Make it **Public** (free hosting requires public repo)
   - Click "Create repository"

2. **Push your code to GitHub:**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - Portfolio website"
   
   # Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" (use your GitHub account)

2. **Import your project:**
   - Click "Add New Project"
   - Select your `portfolio` repository
   - Vercel will auto-detect settings (React + Vite)
   - Click "Deploy"

3. **Wait for deployment:**
   - Takes 1-2 minutes
   - You'll get a live URL like: `https://your-portfolio.vercel.app`

4. **Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `umeshchandra.dev`)

**✅ Done!** Your portfolio is live!

---

## 🎯 Option 2: Netlify (Also Very Easy)

Netlify is another excellent free hosting option.

### Step 1: Push to GitHub (Same as Vercel)

Follow the GitHub steps from Option 1.

### Step 2: Deploy to Netlify

1. **Go to Netlify:**
   - Visit [netlify.com](https://netlify.com)
   - Click "Sign up" (use your GitHub account)

2. **Import your project:**
   - Click "Add new site" → "Import an existing project"
   - Select your `portfolio` repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Wait for deployment:**
   - Takes 1-2 minutes
   - You'll get a live URL like: `https://your-portfolio.netlify.app`

**✅ Done!** Your portfolio is live!

---

## 🎯 Option 3: GitHub Pages (Free but requires setup)

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.js

Update the base path (replace `YOUR_USERNAME` and `REPO_NAME`):

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/REPO_NAME/', // Replace REPO_NAME with your GitHub repo name
})
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Your site will be at: `https://YOUR_USERNAME.github.io/REPO_NAME/`

**✅ Done!** Your portfolio is live!

---

## 🎯 Option 4: Manual Deployment (Any Hosting Service)

If you want to use any other hosting service (Hostinger, GoDaddy, etc.):

### Step 1: Build the project

```bash
npm run build
```

This creates a `dist` folder with all production files.

### Step 2: Upload dist folder

1. Upload the **entire contents** of the `dist` folder to your hosting service
2. Make sure `index.html` is in the root directory
3. Your hosting service should serve the files

**Note:** For most hosting services, you'll need to upload via FTP or their file manager.

---

## 🔄 Continuous Deployment (Auto-updates)

### Vercel & Netlify:
- **Automatic!** Every time you push to GitHub, your site automatically updates
- No manual deployment needed

### GitHub Pages:
- Run `npm run deploy` after each change
- Or set up GitHub Actions for automatic deployment

---

## 📝 Important Notes

### Before Deploying:

1. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```
   Visit `http://localhost:4173` to test the production build

2. **Check your files:**
   - ✅ `profile-photo.jpg` in `public` folder
   - ✅ `UmeshAccResume.pdf` in `public` folder
   - ✅ All links work correctly

3. **Update any hardcoded URLs:**
   - Make sure all links point to correct URLs
   - Update LinkedIn URL if needed

### After Deploying:

1. **Test your live site:**
   - Check all pages load correctly
   - Test dark mode toggle
   - Test resume download/view
   - Test all external links
   - Test on mobile devices

2. **Share your portfolio:**
   - Add the URL to your resume
   - Share on LinkedIn
   - Add to your GitHub profile

---

## 🆘 Troubleshooting

### Build fails:
- Check for errors in terminal
- Make sure all dependencies are installed: `npm install`
- Check for syntax errors in your code

### Images not showing:
- Make sure images are in `public` folder
- Check file paths (case-sensitive)
- Clear browser cache

### Resume not downloading:
- Check file is in `public` folder
- Verify filename matches in code
- Check file permissions

### 404 errors on routes:
- For Vercel/Netlify: Add `_redirects` file in `public` folder:
  ```
  /*    /index.html   200
  ```
- For GitHub Pages: Make sure base path is correct in `vite.config.js`

---

## 🎉 Quick Start (Recommended: Vercel)

**Fastest way to go live (5 minutes):**

1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import GitHub repository
4. Click Deploy
5. Done! 🎊

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages Docs:** [pages.github.com](https://pages.github.com)

---

**Good luck with your deployment! 🚀**

