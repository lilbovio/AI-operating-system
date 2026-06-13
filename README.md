<div align="center">

# 🧠 Neural OS — Portfolio

**An AI-powered Operating System experience built as a developer portfolio.**

[![License: MIT](https://img.shields.io/badge/License-MIT-violet.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?logo=framer)](https://www.framer.com/motion)
[![Three.js](https://img.shields.io/badge/Three.js-r184-black?logo=three.js)](https://threejs.org)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/lilbovio/portfolio/pulls)

</div>

---

> 🚀 **This is an open-source portfolio template** — fork it, customize it, make it yours. If it inspired you or saved you time, consider leaving a ⭐!

---

## ✨ What is this?

Neural OS is a **fully interactive, OS-themed developer portfolio** that reimagines the traditional portfolio as an operating system shell. It features a terminal-style UI, 3D animations, smooth motion, and a design language inspired by AI and futuristic interfaces.

Built with the modern web stack and deployed on Vercel — feel free to use it as a base for your own portfolio.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| 🏗️ Framework | [Next.js 16](https://nextjs.org) (App Router) |
| ⚛️ UI | [React 19](https://react.dev) |
| 🎨 Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| 🎞️ Animations | [Framer Motion 12](https://www.framer.com/motion) |
| 🌐 3D | [Three.js](https://threejs.org) + [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) |
| 🔤 Fonts | [Geist](https://vercel.com/font) (Sans + Mono) |
| 📊 Analytics | [Vercel Analytics](https://vercel.com/analytics) + Speed Insights |
| 🚀 Deploy | [Vercel](https://vercel.com) |

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/lilbovio/AI-operating-system.git
cd AI-operating-system
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Then open `.env.local` and fill in your values:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> 💡 If you're deploying to Vercel, add `NEXT_PUBLIC_SITE_URL` directly in your project's **Settings → Environment Variables** — no `.env` file needed in production.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start hacking! 🎉

---

## 📁 Project Structure

```
src/
├── app/          # Next.js App Router (pages, layout, metadata)
├── components/   # Reusable UI components
│   └── os/       # OS Shell interface components
├── hooks/        # Custom React hooks
└── lib/          # Utilities and helpers
```

---

## 🌍 Deploy Your Own

Deploy a fork instantly to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/lilbovio/AI-operating-system)

> Don't forget to set the `NEXT_PUBLIC_SITE_URL` environment variable in your Vercel project settings!

---

## 🤝 Contributing

Contributions are what make open source amazing! Whether it's fixing a bug, improving performance, or adding a cool new feature — **all PRs are welcome**.

1. 🍴 Fork the repo
2. 🌿 Create your branch: `git checkout -b feat/your-feature`
3. 💾 Commit your changes: `git commit -m 'feat: add something awesome'`
4. 📤 Push to the branch: `git push origin feat/your-feature`
5. 🔁 Open a Pull Request

Please keep commits clean and follow the existing code style.

---

## 📄 License

This project is licensed under the **MIT License** — you're free to use, modify, and distribute it. See [LICENSE](./LICENSE) for details.

---

<div align="center">

Made with ❤️ by **Juan Pablo Bovio Vallejo**

If you found this useful, give it a ⭐ — it means a lot!

</div>
