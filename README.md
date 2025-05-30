FirstWork Website 🚀
Welcome to the FirstWork Website, a sleek, Duolingo-inspired platform for FirstWork's ABA lesson delivery app. Crafted with cutting-edge tech to deliver a responsive, accessible, and engaging user experience. This project is built for tech geeks who love clean code, modern frameworks, and seamless backend integration. Let’s dive into the digital dojo of learning! 🥋
✨ Features

🎨 Duolingo-Inspired UI: Vibrant, intuitive, and responsive design for an engaging user experience.
⚡ Next.js 14 + TypeScript: Type-safe, performant, and SEO-friendly frontend with the latest Next.js features.
💅 Tailwind CSS: Utility-first styling for rapid development and consistent design.
🛠️ Supabase Backend: Authentication, real-time database, and storage with a developer-friendly API.
📧 Resend Email Integration: Reliable email functionality for user notifications and workflows.
🎥 Framer Motion Animations: Smooth, interactive components to delight users.
⚙️ Optimized Performance: Server-side rendering, static site generation, and accessibility baked in.

🛠️ Tech Stack

Frontend: Next.js 14, React 18, TypeScript
Styling: Tailwind CSS, Framer Motion
Backend: Supabase (Auth, PostgreSQL Database, Storage)
Email: Resend
Icons: Heroicons
Tooling: ESLint, Prettier, npm/yarn

🚀 Getting Started
Ready to hack away? Follow these steps to get the project up and running on your local machine.
📋 Prerequisites

Node.js: v18.17 or later
Package Manager: npm or yarn
Supabase: Account and project setup (Sign up here)
Resend: Account for email functionality (Sign up here)

🔧 Environment Setup

Create a .env.local file in a root directory with your Supabase and Resend credentials:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key

🛠️ Installation

Clone the repo and navigate to the project folder:

git clone https://github.com/edisonsteele/firstwork-site.git
cd firstwork-site
 traditions


Install dependencies:

npm install
# or
yarn install


Fire up the development server:

npm run dev
# or
yarn dev


Open http://localhost:3000 in your browser to explore the app! 🌐

📂 Project Structure
Here’s a peek at the project’s anatomy:
firstwork-site/
├── src/
│   ├── app/              # Next.js app router for pages and layouts
│   ├── components/       # Reusable React components
│   ├── styles/           # Global CSS and Tailwind configurations
│   └── utils/            # Utility functions and helpers
├── supabase/             # Supabase migrations and configs
├── public/               # Static assets (images, fonts, etc.)
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Dependencies and scripts
└── README.md             # You are here! 👀

🧑‍💻 Development Commands

npm run dev – Starts the development server with hot reloading.
npm run build – Builds the app for production with optimizations.
npm run start – Runs the production server.
npm run lint – Lints the codebase with ESLint for clean code.

🗄️ Database Schema
Powered by Supabase, the database includes:

tokens: Stores user tokens for secure access.
token_transactions: Tracks token-based transactions for analytics.

Run Supabase migrations to set up the database:
supabase db push

🤝 Contributing
Want to contribute to the future of learning? Here’s how:

Fork the repository 🍴
Create a feature branch (git checkout -b feature/epic-feature)
Commit your changes (git commit -m 'Add epic feature')
Push to the branch (git push origin feature/epic-feature)
Open a Pull Request 🚀

Please follow the Contributor Covenant Code of Conduct.
📜 License
This project is proprietary and confidential. All rights reserved. © FirstWork 2025.
🙌 Acknowledgments

Duolingo: For inspiring the vibrant, user-friendly design.
Next.js: For a powerful, developer-friendly React framework.
Supabase: For a seamless backend experience.
Tailwind CSS: For making styling a breeze.
Framer Motion: For buttery-smooth animations.

Happy coding, tech geeks! Let’s build the future of education together! 🚀
