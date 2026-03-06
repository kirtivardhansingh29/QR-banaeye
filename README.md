# 📱 Lovable QR — Custom QR Code Generator

A sleek, high-performance QR code generator built with **React**, **TypeScript**, and **Tailwind CSS**.  
Generate branded QR codes with custom colors, logos, and instant download/copy — all in your browser.

🔗 **Live Demo:** [qrbanayeyjov.vercel.app](https://qrbanayeyjov.vercel.app/)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **Real-time Generation** — QR code updates instantly as you type
- **Custom Branding** — Upload your logo to the center of the QR code
- **Color Customization** — Full control over foreground and background colors
- **Download & Copy** — Export as PNG or copy directly to clipboard
- **Input Validation** — URL sanitization, character limits, and XSS prevention
- **Responsive Design** — Works beautifully on desktop and mobile
- **Dark Theme** — Built-in dark UI with glowing accents

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18 + TypeScript               |
| Build Tool  | Vite 5                              |
| Styling     | Tailwind CSS 3 + shadcn/ui          |
| QR Engine   | qrcode.react                        |
| Icons       | Lucide React                        |
| Fonts       | Space Grotesk + JetBrains Mono      |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/lovable-qr.git
cd lovable-qr

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready for deployment.

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── qr-generator.html      # Standalone vanilla HTML version
├── src/
│   ├── components/
│   │   ├── qr/
│   │   │   ├── QRGenerator.tsx # Main QR generator component
│   │   │   ├── Controls.tsx    # URL, color, and logo controls
│   │   │   └── Display.tsx     # QR preview + download/copy actions
│   │   └── ui/                 # shadcn/ui component library
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── pages/
│   │   ├── Index.tsx           # Home page
│   │   └── NotFound.tsx        # 404 page
│   ├── index.css               # Design tokens & global styles
│   ├── App.tsx                 # Router setup
│   └── main.tsx                # Entry point
├── index.html
├── tailwind.config.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite — click **Deploy**

### Netlify

1. Connect your GitHub repo on [netlify.com](https://netlify.com)
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Any Static Host

Run `npm run build` and serve the `dist/` folder with any static file server.

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

---

## 🔒 Security

- Input sanitization and XSS prevention
- File upload validation (type + size limits)
- Content Security Policy headers
- No server-side data processing — everything runs client-side

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guide](CONTRIBUTING.md) before submitting a PR.

---

<p align="center">
  Built with ❤️ using <a href="https://lovable.dev">Lovable</a>
</p>
