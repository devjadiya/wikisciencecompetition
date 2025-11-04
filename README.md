
# Wiki Science Competition 2025 - India Website

This is the official website for the **Wiki Science Competition 2025 - India**, a national edition of one of the world’s largest initiatives bringing together science, photography, and free knowledge. This project was built to be a fast, accessible, and multilingual hub for participants, sponsors, and organizers of India's premier science photography competition for 2025.

## Core Features

This website is a feature rich platform designed to manage a national level science and photography competition with a global audience.

### User Experience & Dynamic Content

*   **Fully Responsive Design**: A mobile first approach ensures a seamless experience across all devices, from phones to desktops.
*   **Modern UI/UX**: Built with aesthetically pleasing and functional components from **ShadCN UI**, featuring smooth animations from **Framer Motion** for an engaging user experience.
*   **Multi language Support**: Fully bilingual, supporting both **English** and **हिन्दी (Hindi)**, with a custom React Context based language switcher that allows users to toggle languages instantly.
*   **Live Wikimedia Commons Integration**:
    *   **Live Galleries**: The homepage features live updating galleries for both the main and mobile campaigns, fetching the latest submissions directly from Wikimedia Commons via its API. This includes a real time counter for total submissions in each campaign.
    *   **Live Leaderboard**: A real time leaderboard on the homepage showcases the top contributors by fetching and aggregating upload counts from the competition category. The API route for this feature has an extended timeout to handle potentially large datasets.
*   **Dynamic Image Carousels**: The home page features multiple auto scrolling and user controlled carousels to showcase stunning scientific imagery.
*   **Interactive Image Gallery**: The competition page includes a full screen modal gallery for viewing high resolution images with easy navigation and direct links to the original file on Wikimedia Commons.

### Automated Certificate Generation

*   **Eligibility Check**: A dedicated page allows participants to enter their Wikimedia username to check their eligibility for a certificate. The system calls a custom API route that verifies the user has uploaded the required number of images (20 or more) to the official competition category.
*   **Dynamic PDF Generation**: Once validated, users can enter their name and a PDF certificate is generated on the fly using the `pdf-lib` library. This process dynamically draws the user's name onto a certificate template.
*   **Automated Email Delivery**: Participants have the option to receive their generated certificate directly via email. The backend uses **Nodemailer** to securely send the PDF as an attachment using a configured Gmail SMTP server.

### Advanced Forms & Backend

*   **Cascading Selects Contact Form**: The contact form features dynamic, cascading dropdowns. Selecting a subject filters the available message templates, making it incredibly fast for users to submit common queries.
*   **Server Side Logic with Next.js Actions**: Form submissions are securely handled by Next.js Server Actions, which process the data and use Nodemailer to send email notifications to the organizing team.
*   **Custom API Routes**: In addition to server actions, the project uses API routes to handle complex backend tasks like querying the Wikimedia Commons API for the leaderboard and upload checks.

## Tech Stack & Libraries

This project leverages a modern, robust, and scalable technology stack.

*   **Framework**: **Next.js 15** (with App Router)
*   **Language**: **TypeScript**
*   **Styling**:
    *   **Tailwind CSS**: For utility first CSS styling.
    *   **ShadCN UI**: A collection of beautifully designed, accessible, and reusable components.
    *   **CSS Variables**: For robust and easy to manage theming (light/dark modes).
*   **Animations**: **Framer Motion** for fluid animations and transitions.
*   **Backend & Server Logic**:
    *   **Next.js Server Actions & API Routes**: For securely handling all backend logic.
    *   **Nodemailer**: For handling email submissions from the contact form and for certificate delivery.
*   **PDF Generation**: **pdf-lib** for creating dynamic PDF certificates on the server.
*   **Form Management**:
    *   **React Hook Form**: For efficient and scalable form state management.
    *   **Zod**: For schema validation on both the client and server.
*   **Utilities**:
    *   `clsx` & `tailwind-merge`: For intelligent and conflict free class name management.
    *   `lucide-react`: For a comprehensive and clean icon library.

## Project Structure

The codebase is organized logically to ensure maintainability and scalability.

```
src
├── app/                  # Next.js App Router pages, layouts, and API routes
│   ├── api/              # API routes for leaderboard, certificate generation, etc.
│   └── (pages)/          # Individual page components for each route
├── components/           # Reusable React components
│   ├── ui/               # Core ShadCN UI components
│   ├── layout/           # Global layout components (Navbar, Footer, etc.)
│   └── home/             # Components specific to the homepage sections
├── context/              # React Context providers (e.g., LanguageProvider)
├── hooks/                # Custom React hooks (e.g., use-toast)
└── lib/                  # Utility functions, data, and library configurations
    ├── translations/     # English and Hindi translation strings
    └── gtm.ts            # Google Tag Manager utility functions
```

## Third Party Assets & Services

*   **Image Assets**: All scientific and organizer photographs used on this website are sourced from **Wikimedia Commons** and are used in accordance with their respective Creative Commons licenses.
*   **Fonts**: The project uses Google Fonts (`Poppins` for headlines and `Source Sans 3` for body text).
*   **Email Server**: Google SMTP service is used for sending emails via Nodemailer.
*   **Analytics**: Vercel Analytics and Google Tag Manager are integrated for traffic analysis.

## License

This project is licensed under the **MIT License**. You are free to use, modify, and distribute this code, but you must include the original copyright and license notice in any copies of the software. See the `LICENSE` file for full details.

**Please provide attribution if you use this code.**
