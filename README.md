# Portfolio - GORREPATI UMESH CHANDRA

A modern, professional developer portfolio website built with React, Vite, and TailwindCSS.

## 🚀 Features

- ✨ **Modern Design**: Clean, elegant, and professional UI/UX
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Works seamlessly on all devices
- 🎨 **Smooth Animations**: Powered by Framer Motion
- 🎯 **SEO Optimized**: Meta tags and semantic HTML
- ⚡ **Fast Performance**: Built with Vite for optimal speed

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🚀 Deployment

### GitHub Pages

1. Install the GitHub Pages deployment plugin:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update `vite.config.js` to set the correct base path:
```js
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Replace 'Portfolio' with your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

Or simply connect your GitHub repository to Vercel for automatic deployments.

### Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

## 📁 Project Structure

```
Portfolio/
├── public/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Button.jsx
│   │   └── SectionTitle.jsx
│   ├── sections/         # Page sections
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── context/          # React context
│   │   └── ThemeContext.jsx
│   ├── styles/           # Global styles
│   │   └── globals.css
│   ├── data.js           # Portfolio data
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `src/data.js` to update:
- Personal information (name, email, phone, etc.)
- Education details
- Work experience
- Projects
- Skills
- Achievements
- Certifications

### Change Colors

Modify the color scheme in `tailwind.config.js`:
```js
colors: {
  primary: {
    // Your color palette
  }
}
```

### Add Resume PDF

1. Place your resume PDF in the `public` folder
2. Update the resume download button in `src/sections/Hero.jsx`:
```jsx
<Button variant="primary" icon="download" href="/resume.pdf">
  Download Resume
</Button>
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**GORREPATI UMESH CHANDRA**

- Email: umeshummu2432@gmail.com
- GitHub: [@UmeshChandra-G](https://github.com/UmeshChandra-G)
- LinkedIn: [Add your LinkedIn URL]

---

Made with ❤️ using React, Vite, and TailwindCSS
