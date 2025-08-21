
# Wiki Science Competition 2025 - India Website

This is the official website for the **Wiki Science Competition 2025 - India**, a national edition of one of the world’s largest initiatives bringing together science, photography, and free knowledge. This project was built to be a fast, accessible, and multilingual hub for participants, sponsors, and organizers.

## Live Site

**[wikiscience.in](https://wikisciencecompetition.vercel.app/)**

---

## Core Features

This website is a feature-rich platform designed to manage a national-level competition with a global audience.

### User Experience & Design
- **Fully Responsive Design**: Mobile-first approach ensures a seamless experience across all devices, from phones to desktops.
- **Modern UI/UX**: Built with aesthetically pleasing and functional components from **ShadCN UI**, featuring smooth animations from **Framer Motion** for an engaging user experience.
- **Glassmorphism & Subtle Animations**: Key UI elements like the FAQ chatbot feature modern glassmorphism effects and pop-in/pop-out animations for a premium feel.
- **Dynamic Image Carousels**: The home page features multiple auto-scrolling and user-controlled carousels to showcase stunning scientific imagery.
- **Interactive Image Gallery**: The competition page includes a full-screen modal gallery for viewing high-resolution images with easy navigation.

### Content & Accessibility
- **Multi-language Support**: Fully bilingual, supporting both **English** and **हिन्दी (Hindi)**. A custom React Context-based language switcher allows users to toggle languages instantly across the entire site.
- **Dynamic Content Pages**: The site includes dedicated, server-rendered pages for various sections:
  - **About**: Introduction to the competition's Indian context and aims.
  - **Competition**: Detailed rules, key dates, and image category showcases.
  - **Organizers**: Profiles of the team members.
  - **Campus Ambassadors**: Information and application for the ambassador program.
  - **Resources, Sponsors, Jury**: And more.
- **SEO & Metadata**: Comprehensive metadata, Open Graph tags, and Twitter card implementation for optimal search engine visibility and social sharing.

### AI & Backend Functionality
- **AI-Powered FAQ Chatbot**: An intelligent chatbot, built with **Genkit**, provides instant, context-aware answers to user questions based on a comprehensive knowledge base about the competition.
- **Advanced Contact Form**:
  - **Dynamic Dropdowns**: Features cascaded dropdowns for subjects and messages, pre-filled with common queries to make submissions incredibly fast.
  - **"Other" Option Handling**: Gracefully handles custom user input by dynamically showing text fields when "Other" is selected.
  - **Email Notifications**: Integrated with **Nodemailer** and Google's SMTP server to send secure, real-time email notifications for every form submission directly to the organizers' inbox.

---

## Tech Stack & Libraries

This project leverages a modern, robust, and scalable technology stack.

- **Framework**: **Next.js 15** (with App Router)
- **Language**: **TypeScript**
- **Styling**:
  - **Tailwind CSS**: For utility-first CSS styling.
  - **ShadCN UI**: A collection of beautifully designed, accessible, and reusable components.
  - **CSS Variables**: For robust and easy-to-manage theming (light/dark modes).
- **Animations**: **Framer Motion** for fluid animations and transitions.
- **Artificial Intelligence**:
  - **Google's Genkit**: Powers the backend logic for the AI-driven FAQ chatbot.
- **Backend & Server Actions**:
  - **Nodemailer**: For handling email submissions from the contact form via an SMTP server.
  - **Next.js Server Actions**: For securely handling form submissions and other backend logic without needing separate API endpoints.
- **Form Management**:
  - **React Hook Form**: For efficient and scalable form state management.
  - **Zod**: For schema validation on both the client and server.
- **Utilities**:
  - `clsx` & `tailwind-merge`: For intelligent and conflict-free class name management.
  - `lucide-react`: For a comprehensive and clean icon library.

---

## Project Structure

The codebase is organized logically to ensure maintainability and scalability.

```
src
├── app/                  # Next.js App Router pages and layouts
├── components/           # Reusable components (UI, layout, home sections)
│   ├── ui/               # Core ShadCN UI components
│   └── ...
├── ai/                   # Genkit flows and AI logic
│   └── flows/
│       └── faq-chatbot.ts # AI logic for the chatbot
├── context/              # React Context providers (e.g., language)
├── hooks/                # Custom React hooks (e.g., use-toast)
├── lib/                  # Utility functions and library configurations
│   ├── translations.ts   # English and Hindi translation strings
│   └── utils.ts          # Helper functions like cn()
└── ...
```

---

## Third-Party Assets & Services

- **Image Assets**: All scientific and organizer photographs used on this website are sourced from **Wikimedia Commons** and are used in accordance with their respective Creative Commons licenses. Each image on the live site links back to its original source on Commons where applicable.
- **Fonts**: The project uses Google Fonts (`Poppins` for headlines and `Source Sans Pro` for body text).
- **Email Server**: Google SMTP service is used for sending emails via Nodemailer.

---

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this code, but you must include the original copyright and license notice in any copies of the software. See the [LICENSE](LICENSE) file for full details.

**Please provide attribution if you use this code.**
