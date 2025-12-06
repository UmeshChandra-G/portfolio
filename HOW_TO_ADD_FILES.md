# How to Add Your Photo and Resume

## 📸 Adding Your Photo

### Step 1: Prepare Your Photo
- Use a professional headshot or profile photo
- Recommended size: 800x800 pixels or larger (square format works best)
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Optimize the image size (keep it under 500KB for faster loading)

### Step 2: Add Photo to Project
1. Copy your photo file
2. Rename it to `profile-photo.jpg` (or keep your filename)
3. Paste it into the `public` folder:
   ```
   Portfolio/
   └── public/
       └── profile-photo.jpg  ← Your photo here
   ```

### Step 3: Update Code (if using different filename)
If your photo has a different name, update `src/sections/Hero.jsx`:
- Find line with `src="/profile-photo.jpg"`
- Change to your filename: `src="/your-photo-name.jpg"`

**That's it!** The photo will automatically appear on your portfolio.

---

## 📄 Adding Your Resume

### Step 1: Prepare Your Resume
- Save your resume as a PDF file
- Name it `resume.pdf`
- Make sure it's up-to-date and professional

### Step 2: Add Resume to Project
1. Copy your resume PDF file
2. Paste it into the `public` folder:
   ```
   Portfolio/
   └── public/
       └── resume.pdf  ← Your resume here
   ```

### Step 3: Update Code (if using different filename)
If your resume has a different name, update `src/sections/Hero.jsx`:
- Find line with `href="/resume.pdf"`
- Change to your filename: `href="/your-resume-name.pdf"`

**That's it!** The "Download Resume" button will work automatically.

---

## 🌐 How It Works on Live Server

### Files in `public` folder are accessible at root:
- `public/profile-photo.jpg` → Accessible as `/profile-photo.jpg`
- `public/resume.pdf` → Accessible as `/resume.pdf`

### When you deploy:
- **Vercel/Netlify**: Files in `public` folder are automatically served
- **GitHub Pages**: Files in `public` folder are automatically served
- **Any hosting**: Files in `public` folder are accessible at the root URL

### Example URLs after deployment:
- If your site is `https://yourname.github.io/Portfolio/`
- Photo: `https://yourname.github.io/Portfolio/profile-photo.jpg`
- Resume: `https://yourname.github.io/Portfolio/resume.pdf`

---

## ✅ Quick Checklist

- [ ] Add `profile-photo.jpg` to `public` folder
- [ ] Add `resume.pdf` to `public` folder
- [ ] Test locally: Run `npm run dev` and check if photo/resume work
- [ ] After deployment, test the live links

---

## 🎨 Photo Tips

- **Best format**: Square (1:1 ratio) or portrait (3:4 ratio)
- **Background**: Clean, professional background (white or neutral)
- **Size**: 800x800px minimum, 1200x1200px recommended
- **File size**: Keep under 500KB for fast loading
- **Quality**: High quality, well-lit photo

---

## 📝 Resume Tips

- **Format**: PDF only (most compatible)
- **File size**: Keep under 2MB
- **Name**: Use `resume.pdf` for consistency
- **Content**: Make sure it's updated with latest information

---

## 🐛 Troubleshooting

### Photo not showing?
1. Check file is in `public` folder (not `src` folder)
2. Check filename matches exactly (case-sensitive)
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser console for errors

### Resume not downloading?
1. Check file is in `public` folder
2. Check filename matches exactly
3. Test the direct URL: `http://localhost:5174/resume.pdf`
4. Check browser console for errors

---

## 📁 Final Folder Structure

```
Portfolio/
├── public/
│   ├── profile-photo.jpg  ← Your photo
│   ├── resume.pdf         ← Your resume
│   └── vite.svg
├── src/
│   └── sections/
│       └── Hero.jsx       ← Already configured
└── ...
```

That's all you need! Your photo and resume will work both locally and when deployed. 🚀

