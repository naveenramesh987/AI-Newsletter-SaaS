# AI Newsletter SaaS

A personalized newsletter delivery system that uses AI to curate and summarize the latest news based on individual user preferences.

## 📖 Overview

This project provides a complete SaaS solution for automated information curation. It goes beyond standard RSS feeds by leveraging **OpenAI's GPT-4o** to analyze articles and generate concise, engaging summaries tailored to specific categories chosen by the user.

The system utilizes **Inngest** for reliable, scheduled background jobs and **EmailJS** for delivering the final curated content directly to the user's inbox.

## ✨ Key Features

* **Semantic Content Curation**: Fetches real-time articles based on user-defined categories like Tech, Business, or Science.
* **AI-Powered Summarization**: Uses Large Language Models to provide context and insights rather than just headlines.
* **Automated Scheduling**: Features a self-sustaining cron-like system that schedules the next delivery based on "daily," "weekly," or "biweekly" preferences.
* **User Dashboard**: A responsive interface to manage categories, pause/resume subscriptions, and update delivery frequency.
* **Reliable Delivery**: Integrated with EmailJS to ensure newsletters reach the primary inbox with professional HTML formatting.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Core framework for the web application and API routes |
| **Supabase** | User authentication and preference data storage |
| **Inngest** | Background workflow management and scheduled events |
| **OpenAI GPT-4o** | Intelligent article summarization engine |
| **EmailJS** | Server-side email delivery service |
| **Tailwind CSS** | Clean, modern dashboard UI |

## 🚀 Installation

1.  **Clone the repository:**
```bash
    git clone https://github.com/naveenramesh987/AI-Newsletter-SaaS.git
```

2.  **Install dependencies:**
```bash
    npm install
```

3.  **Environment Setup:**
    Create a `.env` file in the root directory and add your credentials:
```env
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
    OPENAI_API_KEY=your_openai_key
    INNGEST_SIGNING_KEY=your_inngest_key
    EMAILJS_SERVICE_ID=your_service_id
    EMAILJS_TEMPLATE_ID=your_template_id
    EMAILJS_PUBLIC_KEY=your_public_key
    EMAILJS_PRIVATE_KEY=your_private_key
```

## 📊 Workflow

The system operates through a series of automated steps:

1.  **Trigger** — An Inngest event starts the workflow based on the user's saved schedule.
2.  **Status Check** — Verifies if the user's subscription is currently active in the database.
3.  **Fetch** — Retrieves the latest news articles for the user's specific categories.
4.  **Summarize** — OpenAI processes the articles into a structured, email-friendly format.
5.  **Deliver** — EmailJS sends the HTML newsletter to the user.
6.  **Reschedule** — The system calculates and triggers the next run automatically.

## 🖥️ Usage

Launch the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to sign in, select your news categories, and start receiving your AI-curated updates.
