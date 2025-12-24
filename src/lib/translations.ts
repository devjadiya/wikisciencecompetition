
export const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "हिन्दी" },
] as const;

export const translations = {
  en: {
    mainNavLinks: [
      { name: "About", href: "/about" },
      { name: "Competition", href: "/competition" },
      { name: "Resources", href: "/resources" },
      { name: "Certificate", href: "/certificate" },
    ],
    organizerLinks: [
      { name: "Meet the Team", href: "/organizers" },
      { name: "Campus Ambassadors", href: "/campus-ambassadors" },
      { name: "Wikimedia Affiliates", href: "/affiliates" },
    ],
    moreDropdownLinks: [
      { name: "Jury", href: "/jury" },
      { name: "Support Us", href: "/support-us" },
      { name: "Contact", href: "/contact" },
    ],
    learningLinks: [
      {
        name: "How to create a Wiki account",
        href: "https://commons.wikimedia.org/wiki/Commons:First_steps/Account",
      },
      {
        name: "How to use the Upload Wizard",
        href: "https://information-services.ed.ac.uk/help-consultancy/is-skills/wikimedia/wikimedia-commons/how-to-upload-media-to-commons",
      },
      {
        name: "Understanding CC Licenses",
        href: "https://commons.wikimedia.org/wiki/Commons:Licensing",
      },
      {
        name: "How to add categories",
        href: "https://commons.wikimedia.org/wiki/Commons:Categories",
      },
    ],
    organizersDropdown: "Organizers",
    moreDropdown: "More",
    learningDropdown: "Learning",
    participateButton: "View Event Page",
    footerNavLinks: [
      { name: "About", href: "/about" },
      { name: "Competition", href: "/competition" },
      { name: "Jury", href: "/jury" },
      { name: "Organizers", href: "/organizers" },
      { name: "Sponsors", href: "/sponsors" },
      { name: "Resources", href: "/resources" },
      { name: "Campus Ambassadors", href: "/campus-ambassadors" },
      { name: "Certificate", href: "/certificate" },
      { name: "Contact", href: "/contact" },
    ],
    footerSupportLinks: [
      { name: "Sponsorship", href: "/support-us#sponsorship" },
      { name: "Gifts/Swag", href: "/support-us#gifts" },
      { name: "Outreach", href: "/support-us#outreach" },
    ],
    footerSubtitle: "Capturing the beauty of science through photography.",
    footerNavHeader: "Navigation",
    footerSupportHeader: "Support Us",
    footerContactHeader: "Contact",
    footerCopyright: "Wiki Science Competition India. All rights reserved.",
    footerLicense:
      "Content is available under CC BY-SA 4.0 unless otherwise noted.",
    footerDeveloperCredit: "Designed and Developed by",
    about: {
      title: "About WikiScience India 2025",
      badge: "Introduction for Indian Context",
      heading: "Wiki Science Competition 2025 – India",
      p1: "For the very first time, India is organizing a national edition of the Wiki Science Competition (WSC) — one of the world’s largest initiatives that brings together science, photography, and free knowledge.",
      p2: "Launched in Estonia in 2011 and later expanded across Europe and worldwide, the competition has inspired thousands of scientists, researchers, and enthusiasts to share images that capture the wonder of science. From microscopic cells to cosmic galaxies, these freely licensed contributions enrich Wikimedia Commons and support open education globally.",
      p3: "India has proudly contributed to past international editions — with Indian photographers and scientists receiving recognition and awards. However, this is the first time India is hosting its own local competition, dedicated to showcasing the scientific spirit and creativity of our country.",
      p4: "The Wiki Science Competition 2025 – India is more than a contest. It’s a collective effort to represent Indian science to the world — through powerful images, stories, and creativity.",
      aims: {
        title: "Our Aims",
        subtitle: "Through this campaign, we aim to:",
        items: [
          {
            icon: "PenSquare",
            title: "Encourage Contribution",
            description:
              "Encourage students, researchers, and enthusiasts across India to contribute valuable scientific media.",
          },
          {
            icon: "Lightbulb",
            title: "Build Awareness",
            description:
              "Build awareness about the importance of open science and free knowledge.",
          },
          {
            icon: "Globe",
            title: "Celebrate Heritage",
            description:
              "Celebrate India’s rich scientific heritage and ongoing innovations.",
          },
          {
            icon: "Handshake",
            title: "Strengthen Collaboration",
            description:
              "Strengthen collaboration between Wikimedia communities, universities, research institutes, and organizations.",
          },
        ],
      },
    },
    campusAmbassadors: {
      title: "Campus Ambassadors",
      subtitle:
        "Meet the passionate leaders driving the Wiki Science Competition in their communities.",
      ambassadors: [
        {
          name: "Anushka Patel",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Anushka10patel",
          description: "Wikipedian",
          boardLink: {
            name: "Wiki Club SATI",
            url: "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members",
          },
        },
        {
          name: "Neechalkaran",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Neechalkaran",
          description: "Wikipedian & Computational Linguist from Tamilnadu",
        },
        {
          name: "Santhosh Notagar",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
          description:
            "HOD & Assistant Professor, Department of Computer Animation, St Aloysius",
          wikipedia: "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru",
        },
        {
          name: "Mohd Shadab",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/2/29/Mohd_Shadab_Profile.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Shadabgdg",
          description: "Wikipedian",
          boardLink: {
            name: "Wiki_Club_UU",
            url: "https://meta.wikimedia.org/wiki/Wiki_Club_UU",
          },
        },
        {
          name: "Samiya Ahmed",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
          description: "Deoband Community Wikimedia and Wiki Club AMU",
          boardLink: {
            name: "Deoband Community",
            url: "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia",
          }
        },
        {
          name: "Satheesh M",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          description:
            "Presently doing IT and surveillance projects in Kanniyakumari district",
        },
        {
          name: "Kaartic Sivaraam",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Kaartic",
          description: "Tamil Wikipedian, Software Engineer",
        },
        {
          name: "Osama",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Khanifraqosam",
          description: "Wiki Club AMU",
        },
      ],
    },
    affiliates: {
      title: "Call for Wikimedia Affiliates",
      subtitle:
        "We are inviting Wikimedia affiliates, user groups, and organizations across India to collaborate with us in promoting and supporting Wiki Science Competition 2025.",
      partnerHeading: "Why Partner with Us?",
      partnerDescription:
        "This is a unique opportunity to celebrate science and enrich Wikimedia Commons with freely licensed media. As a partner, your group can play a pivotal role in making India's first national Wiki Science Competition a success by helping with outreach, awareness, and community engagement.",
      collaborationHeading: "How You Can Collaborate",
      collaborationPoints: [
        "Engage in online and offline outreach to your networks.",
        "Facilitate uploads from institutions and research bodies.",
        "Organize local workshops, edit-a-thons, or photowalks.",
        "Assist with translation and localization of campaign materials.",
      ],
      formNote:
        "This form is intended for recognized Wikimedia affiliates or community groups. Individuals and students should use the",
      campusAmbassadorLink: "Campus Ambassador form",
      sidebarTitle: "Applications Closed",
      sidebarDescription:
        "Thank you for your interest. The application period for the Affiliate program has ended.",
      cta: "Applications Closed",
    },
    campus: {
      title: "Call for Campus Ambassadors",
      subtitle:
        "Join us as a local outreach coordinator to help promote the Wiki Science Competition 2025 in your institution, community, or network.",
      whoHeading: "Who are we looking for?",
      whoDescription:
        "Campus Ambassadors play a key role in spreading awareness, guiding participants, and optionally organizing awareness sessions or workshops. Whether you’re a Wikimedian, science student, designer, teacher, or simply enthusiastic about open science—we’d love to have you on board!",
      responsibilitiesHeading: "Responsibilities",
      responsibilities: [
        "Promote the campaign in your institution or community.",
        "Share participation guidelines with potential contributors.",
        "Optionally, organize awareness activities like workshops or photowalks (we can provide support!).",
      ],
      sidebar: {
        title: "Applications Closed",
        description:
          "Thank you for your interest. The application period for the Campus Ambassador program has ended.",
        cta: "Applications Closed",
      },
      cta: {
        text: "Become a Campus Ambassador",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform",
      },
    },
    competition: {
      title: "Competition Details",
      subtitle: "Everything you need to know to participate and win.",
      howToParticipate: {
        title: "How to Participate",
        p1: "If you don't have one, you can create a global account that will give you a specific username on all Wikimedia platforms (including Wikimedia Commons) when you log in. As a newly registered user you need to wait at least four days before uploading a video file, while images can be uploaded right after the registration.",
        createAccountLink: "Create your account here!",
        rulesTitle: "Participation Rules",
        rules: [
          "Submissions must be your own work, uploaded from your own registered Wikimedia account. For multiple authors, all names must be provided.",
          "Images must be under a free license (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
          "All submissions require a clear and accurate scientific description in English. Other languages are welcome too.",
          {
            text: "Upload the highest resolution possible (at least 2 megapixels). You can check the megapixel count ",
            link: {
              url: "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
              label: "here",
            },
          },
          "Images must not contain watermarks, logos, or added text/graphics (except for scales).",
        ],
      },
      keyDates: {
        title: "Key Dates",
        timeline: [
          { date: "November 1, 2025", event: "Submissions Opened" },
          { date: "December 15, 2025", event: "Submissions Closed" },
          { date: "January 2026", event: "Jury Deliberation" },
          { date: "February 2026", event: "National Winners Announced" },
        ],
      },
      submitNow: "View Event Page",
      imageCategories: {
        title: "Image Categories",
        subtitle:
          "You can participate in the following seven categories. Choose the one that best fits your work. See examples below to get inspired.",
      },
      categories: {
        people: {
          name: "People in Science",
          description:
            "Scientists, researchers, and individuals engaged in scientific work.",
        },
        microscopy: {
          name: "Microscopic Images",
          description:
            "Optical, electron, and scanning probe microscopy images.",
        },
        astronomy: {
          name: "Astronomy",
          description:
            "Images of stars, planets, celestial events, and astronomical equipment.",
        },
        special: {
          name: "Special Category",
          description:
            "Unique and exceptional scientific content that does not fit other categories.",
        },
        everyday: {
          name: "Science in Everyday Life",
          description:
            "Images showcasing science in daily life, practical applications, and experiments.",
        },
        equipment: {
          name: "Equipment in Science",
          description:
            "Scientific instruments, laboratory setups, and experimental tools.",
        },
        chemistry: {
          name: "Science in Chemistry",
          description:
            "Chemical reactions, laboratory chemistry, and molecular science.",
        },
        physics: {
          name: "Science in Physics",
          description:
            "Physical experiments, demonstrations, and concepts in physics.",
        },
        mobile: {
          name: "Mobile Category",
          description:
            "For students and contributors using mobile devices; captures of science and nature accessible without high-end equipment.",
        },
      },

      readyToParticipate: {
        title: "Ready to Participate?",
        subtitle:
          "The stage is set. Your lens is the key. Show us the world through your scientific eyes.",
        cta: "View Event Page",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Have questions or feedback? We'd love to hear from you. We promise a quick reply!",
      getInTouch: "Get in Touch",
      p1: "Fill out the form and our team will get back to you within a few hours. We're here to help!",
      emailAddress: "contact@wikisciencecompetition.in",
      form: {
        name: "Full Name",
        namePlaceholder: "Your Name",
        email: "Email Address",
        emailPlaceholder: "your.email@example.com",
        subject: "Subject",
        subjectPlaceholder: "Select a subject for your query",
        otherSubjectPlaceholder: "Please specify your subject",
        message: "Message",
        messagePlaceholder: "Select a pre-written message or 'Other...'",
        otherMessagePlaceholder: "Please specify your message",
        selectSubjectFirst: "Please select a subject first",
        submit: "Send Message",
        submitting: "Sending...",
      },
      toast: {
        successTitle: "Message Sent!",
        successDescription:
          "Thank you for contacting us. We will get back to you shortly.",
        errorTitle: "Error",
        errorDescription: "Something went wrong. Please try again.",
      },
    },
    organizers: {
      title: "Meet the Organizers",
      subtitle:
        "The dedicated team working behind the scenes to make the first Wiki Science Competition India a grand success.",
      lead_organizers: "Lead Organizers",
      advisors: "Advisors",
      core_organizing_team: "Core Organizing Team",
      team: [
        {
          id: "dev_jadiya",
          name: "Dev Jadiya",
          role: "Lead Organizer",
          roleKey: "lead_organizer",
          social: {
            linkedin: "https://www.linkedin.com/in/devjadiya/",
            meta: "https://meta.wikimedia.org/wiki/User:Dev_Jadiya",
          },
        },
        {
          id: "gauri_gupta",
          name: "Gauri Gupta",
          role: "Lead Organizer",
          roleKey: "lead_organizer",
          social: {
            linkedin: "#",
            meta: "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa",
          },
        },
        {
          id: "suyash_dwivedi",
          name: "Suyash Dwivedi",
          role: "Sponserships & Finance",
          roleKey: "advisor",
          social: {
            linkedin: "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/",
            meta: "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi",
          },
        },
        {
          id: "chinmayee_mishra",
          name: "Chinmayee Mishra",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra",
          },
        },
        {
          id: "uday_dongre",
          name: "Uday Dongre",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: { meta: "https://meta.wikimedia.org/wiki/User:Shoot_stufz" },
        },
        {
          id: "pankaj_yadav",
          name: "Pankaj Yadav",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:The_open_draft",
          },
        },
        {
          id: "ashmita_bathre",
          name: "Ashmita Bathre",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:AshmitaBathre204",
          },
        },
        {
          id: "aanchal_patel",
          name: "Aanchal Patel",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: { meta: "https://meta.wikimedia.org/wiki/User:Archies2804" },
        },
        {
          id: "riddhi_sharma",
          name: "Riddhi Sharma",
          role: "Core Organizing Team",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:Herdaisymione",
          },
        },
      ],
    },
    organizersCall: {
      title: "Call for Organizers",
      subtitle:
        "We’re excited to share that India will be organizing its own local edition of this global campaign that promotes science through freely licensed images, videos, and other media on Wikimedia Commons.",
      joinHeading: "Join the Organizing Team",
      joinDescription:
        "To support smooth coordination, outreach, and planning, we’re expanding our organizing team. If you’re interested in contributing to this important initiative, we would love to hear from you.",
      lookingForHeading: "What We're Looking For",
      lookingFor: [
        "Passionate individuals with an interest in science, photography, or open knowledge.",
        "Skills in event planning, outreach, social media management, or content creation.",
        "A collaborative spirit and a desire to make a significant impact.",
      ],
      sidebarTitle: "Apply Now",
      sidebarDescription:
        "Help us shape the first Wiki Science Competition in India.",
      deadline: "Applications Closed: 15th July 2025",
      cta: "Applications Closed",
    },
    resources: {
      title: "Resources",
      subtitle:
        "Get inspired by past winners and access helpful materials to prepare your submission.",
      pastWinners: {
        title: "Gallery of Past Winners",
        links: [
          {
            year: 2023,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2023/Winners",
          },
          {
            year: 2021,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2021/Winners",
          },
          {
            year: 2019,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2019/Winners",
          },
          {
            year: 2017,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2017/Winners",
          },
        ],
      },
      learningMaterials: {
        title: "Learning Materials",
        cta: "Learn More",
        resources: [
          {
            title: "Guide to Science Photography",
            description:
              "Learn the basics of capturing stunning scientific images.",
            link: "#",
          },
          {
            title: "Understanding Creative Commons",
            description:
              "A quick guide to licensing your work for the competition.",
            link: "#",
          },
          {
            title: "Image Upload Tutorial",
            description: "Step-by-step video on how to submit your photos.",
            link: "#",
          },
        ],
      },
    },
    support: {
      title: "Support Us",
      subtitle:
        "Help us make the Wiki Science Competition India 2025 a massive success.",
      options: [
        {
          id: "sponsorship",
          icon: "Handshake",
          title: "Become a Sponsor",
          description:
            "Support us with monetary contributions to help cover operational costs, prize money, and event management. We offer various sponsorship tiers with prominent branding opportunities.",
          cta: "Contact for Sponsorship",
        },
        {
          id: "gifts",
          icon: "Gift",
          title: "Provide Gifts & Swag",
          description:
            "Contribute to our prize pool with exciting gifts, vouchers, or branded merchandise (swag) for our winners and participants. Get your brand in the hands of science enthusiasts.",
          cta: "Offer Gifts",
        },
        {
          id: "outreach",
          icon: "Megaphone",
          title: "Outreach & Marketing",
          description:
            "Collaborate with us to spread the word. Help us reach a wider audience through your institutional channels, social media, or marketing expertise.",
          cta: "Collaborate on Outreach",
        },
      ],
    },
    home: {
      hero: {
        title: "The Competition is now Closed",
        certificate: "Get Your Certificate",
        closed: "View Event Page",
      },
      thankyou: {
        title: "Thank You, Contributors!",
        subtitle: "The response to the first-ever Wiki Science Competition in India has been phenomenal. We're thrilled to announce that our talented community has contributed over 3600+ entries! We extend our heartfelt gratitude to every participant for sharing their vision of science. Stay tuned for the results!",
        uploads: "Images Stats",
        contributors: "Contributors",
        certificateTitle: "Certificates Are Available Now!",
        certificateMessage: "Dear contributors, your certificates are now ready for download. This is a kind gesture from us for your hard work, dedication, and support for Indian science.",
        certificateCta: "Download Your Certificate",
        signature: "Wiki Science Organizing Team"
      },
      info: {
        title: "Clicking Today, Creating Tomorrow.",
        subtitle: "Explore the World of",
        words: ["Science.", "Discovery.", "Knowledge.", "Innovation."],
      },
      prizes: {
        title: "Prizes & Recognition",
        subtitle:
          "Your groundbreaking visuals deserve to be celebrated. Discover what you can win.",
        prizes: [
          {
            icon: "Award",
            title: "National Recognition",
            description:
              "Best uploads will get a chance to win International Prizes.",
          },
          {
            icon: "Camera",
            title: "Participating Certificates",
            description:
              "Participating certificates will be given to all on 20 uploads.",
          },
          {
            icon: "BookOpen",
            title: "Publication Feature",
            description:
              "Get a chance of your work featured in science articles in wikipedia.",
          },
        ],
      },
      campaign: {
        title: "Live from the Campaign",
        description: "Anatomy of total files. We have received this much images on dslr and common general uploads",
        totalSubmissions: "Total Submissions",
        noSubmissions: "No Submissions Yet",
        noSubmissionsSub: "Be the first to contribute! Images from this campaign will appear here live.",
        viewFull: "See Images"
      },
      mobileCampaign: {
        title: "Live from Mobile",
        description: "We have recieved this much mobile submissions that taken from smartphones",
        totalSubmissions: "Total Submissions",
      },
      dashboard: {
        title: "Competition Statistics Metrics Dashboard",
        subtitle: "Track the real-time impact of our community's contributions.",
        ctaLine1: "Want to be a part of these numbers?",
        ctaLinkText: "Create an account",
        ctaLine2: "on the Outreach Dashboard and join the campaign!",
        ctaButton: "Competition Statistics Metrics"
      },
      instagram: {
          images: {
              title: "Featured Images",
              subtitle: "A curated collection of stunning scientific photography from our community.",
          },
          reels: {
              title: "Latest Reels",
              subtitle: "Watch short, engaging videos showcasing science in action.",
          },
          videos: {
              title: "Community Videos",
              subtitle: "Explore in-depth video content from our talented contributors.",
          }
      },
      contact: {
          title: "Get in Touch",
          subtitle: "Have questions or feedback? We'd love to hear from you. We promise a quick reply!",
      },
      testimonials: {
        title: "Voices of Our Community",
        subtitle: "Hear what researchers, photographers, and enthusiasts are saying about the Wiki Science Competition."
      },
      vortex: {
        title: "Capture the Unseen",
        subtitle: "Unveil the beauty of science through your lens. Join a global community celebrating discovery.",
        cta: "View Past Winners"
      }
    },
  },
  hi: {
    mainNavLinks: [
      { name: "परिचय", href: "/about" },
      { name: "प्रतियोगिता", href: "/competition" },
      { name: "संसाधन", href: "/resources" },
      { name: "प्रमाणपत्र", href: "/certificate" },
    ],
    organizerLinks: [
      { name: "टीम से मिलें", href: "/organizers" },
      { name: "कैंपस एंबेसडर", href: "/campus-ambassadors" },
      { name: "विकिमीडिया एफिलिएट्स", href: "/affiliates" },
    ],
    moreDropdownLinks: [
      { name: "जूरी", href: "/jury" },
      { name: "समर्थन करें", href: "/support-us" },
      { name: "संपर्क", href: "/contact" },
    ],
    learningLinks: [
      {
        name: "विकी खाता कैसे बनाएं",
        href: "https://commons.wikimedia.org/wiki/Commons:First_steps/Account",
      },
      {
        name: "अपलोड विज़ार्ड का उपयोग कैसे करें",
        href: "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard",
      },
      {
        name: "सीसी लाइसेंस को समझना",
        href: "https://commons.wikimedia.org/wiki/Commons:Licensing",
      },
      {
        name: "श्रेणियां कैसे जोड़ें",
        href: "https://commons.wikimedia.org/wiki/Help:Categories",
      },
    ],
    organizersDropdown: "आयोजक",
    moreDropdown: "अधिक",
    learningDropdown: "सीखना",
    participateButton: "इवेंट पेज देखें",
    footerNavLinks: [
      { name: "परिचय", href: "/about" },
      { name: "प्रतियोगिता", href: "/competition" },
      { name: "जूरी", href: "/jury" },
      { name: "आयोजक", href: "/organizers" },
      { name: "प्रायोजक", href: "/sponsors" },
      { name: "संसाधन", href: "/resources" },
      { name: "कैंपस एंबेसडर", href: "/campus-ambassadors" },
      { name: "प्रमाणपत्र", href: "/certificate" },
      { name: "संपर्क", href: "/contact" },
    ],
    footerSupportLinks: [
      { name: "प्रायोजन", href: "/support-us#sponsorship" },
      { name: "उपहार/स्वैग", href: "/support-us#gifts" },
      { name: "आउटरीच", href: "/support-us#outreach" },
    ],
    footerSubtitle: "फोटोग्राफी के माध्यम से विज्ञान की सुंदरता को कैद करना।",
    footerNavHeader: "नेविगेशन",
    footerSupportHeader: "हमारा समर्थन करें",
    footerContactHeader: "संपर्क",
    footerCopyright: "विकी विज्ञान प्रतियोगिता भारत। सर्वाधिकार सुरक्षित।",
    footerLicense:
      "सामग्री CC BY-SA 4.0 के तहत उपलब्ध है जब तक कि अन्यथा उल्लेख न किया गया हो।",
    footerDeveloperCredit: "द्वारा डिजाइन और विकसित",
    about: {
      title: "विकीसाइंस इंडिया 2025 के बारे में",
      badge: "भारतीय संदर्भ का परिचय",
      heading: "विकी विज्ञान प्रतियोगिता 2025 – भारत",
      p1: "पहली बार, भारत विकी विज्ञान प्रतियोगिता (WSC) का राष्ट्रीय संस्करण आयोजित कर रहा है — यह दुनिया की सबसे बड़ी पहलों में से एक है जो विज्ञान, फोटोग्राफी और मुफ्त ज्ञान को एक साथ लाती है।",
      p2: "2011 में एस्टोनिया में शुरू हुई और बाद में पूरे यूरोप और दुनिया भर में विस्तारित हुई, इस प्रतियोगिता ने हजारों वैज्ञानिकों, शोधकर्ताओं और उत्साही लोगों को विज्ञान के आश्चर्य को दर्शाने वाली छवियां साझा करने के लिए प्रेरित किया है। सूक्ष्म कोशिकाओं से लेकर ब्रह्मांडीय आकाशगंगाओं तक, ये स्वतंत्र रूप से लाइसेंस प्राप्त योगदान विकिमीडिया कॉमन्स को समृद्ध करते हैं और विश्व स्तर पर खुली शिक्षा का समर्थन करते हैं।",
      p3: "भारत ने पिछले अंतर्राष्ट्रीय संस्करणों में गर्व से योगदान दिया है — भारतीय फोटोग्राफरों और वैज्ञानिकों को मान्यता और पुरस्कार प्राप्त हुए हैं। हालाँकि, यह पहली बार है जब भारत अपनी स्थानीय प्रतियोगिता की मेजबानी कर रहा है, जो हमारे देश की वैज्ञानिक भावना और रचनात्मकता को प्रदर्शित करने के लिए समर्पित है।",
      p4: "विकी विज्ञान प्रतियोगिता 2025 – भारत एक प्रतियोगिता से बढ़कर है। यह शक्तिशाली छवियों, कहानियों और रचनात्मकता के माध्यम से भारतीय विज्ञान को दुनिया के सामने प्रस्तुत करने का एक सामूहिक प्रयास है।",
      aims: {
        title: "हमारे उद्देश्य",
        subtitle: "इस अभियान के माध्यम से, हमारा उद्देश्य है:",
        items: [
          {
            icon: "PenSquare",
            title: "योगदान को प्रोत्साहित करें",
            description:
              "पूरे भारत में छात्रों, शोधकर्ताओं और उत्साही लोगों को बहुमूल्य वैज्ञानिक मीडिया का योगदान करने के लिए प्रोत्साहित करें।",
          },
          {
            icon: "Lightbulb",
            title: "जागरूकता बढ़ाएँ",
            description:
              "खुले विज्ञान और मुफ्त ज्ञान के महत्व के बारे में जागरूकता बढ़ाएँ।",
          },
          {
            icon: "Globe",
            title: "विरासत का जश्न मनाएँ",
            description:
              "भारत की समृद्ध वैज्ञानिक विरासत और चल रहे नवाचारों का जश्न मनाएँ।",
          },
          {
            icon: "Handshake",
            title: "सहयोग को मजबूत करें",
            description:
              "विकिमीडिया समुदायों, विश्वविद्यालयों, अनुसंधान संस्थानों और संगठनों के बीच सहयोग को मजबूत करें।",
          },
        ],
      },
    },
    campusAmbassadors: {
      title: "कैंपस एंबेसडर",
      subtitle:
        "अपने समुदायों में विकी विज्ञान प्रतियोगिता को चलाने वाले उत्साही नेताओं से मिलें।",
      ambassadors: [
        {
          name: "अनुष्का पटेल",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Anushka10patel",
          description: "विकी क्लब SATI",
          boardLink: {
            name: "विकी क्लब SATI",
            url: "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members",
          },
        },
        {
          name: "नीचलकरण",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Neechalkaran",
          description: "तमिलनाडु से विकिपीडियन और कम्प्यूटेशनल भाषाविद्",
        },
        {
          name: "संतोष नोटगर",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
          meta: "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
          description:
            "विभागाध्यक्ष और सहायक प्रोफेसर, कंप्यूटर एनीमेशन विभाग, सेंट अलॉयसियस",
          wikipedia: "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru",
        },
        {
          name: "सामिया अहमद",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
          description: "देवबंद समुदाय",
          boardLink: {
            name: "देवबंद समुदाय",
            url: "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia",
          },
        },
        {
          name: "सतीश एम",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          description:
            "वर्तमान में कन्याकुमारी जिले में आईटी और निगरानी परियोजनाओं पर काम कर रहे हैं",
        },
        {
          name: "कार्तिक शिवराम",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Kaartic",
          description: "तमिल विकिपीडियन, सॉफ्टवेयर इंजीनियर",
        },
        {
          name: "ओसामा",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
          meta: "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
          description: "विकिपीडियन",
        },
      ],
    },
    affiliates: {
      title: "विकिमीडिया सहयोगियों के लिए कॉल",
      subtitle:
        "हम भारत भर में विकिमीडिया सहयोगियों, उपयोगकर्ता समूहों और संगठनों को विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने और समर्थन करने में हमारे साथ सहयोग करने के लिए आमंत्रित कर रहे हैं।",
      partnerHeading: "हमारे साथ साझेदारी क्यों करें?",
      partnerDescription:
        "यह विज्ञान का जश्न मनाने और विकिमीडिया कॉमन्स को स्वतंत्र रूप से लाइसेंस प्राप्त मीडिया से समृद्ध करने का एक अनूठा अवसर है। एक भागीदार के रूप में, आपका समूह भारत की पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता को सफल बनाने में आउटरीच, जागरूकता और सामुदायिक जुड़ाव में मदद करके एक महत्वपूर्ण भूमिका निभा सकता है।",
      collaborationHeading: "आप कैसे सहयोग कर सकते हैं",
      collaborationPoints: [
        "अपने नेटवर्क पर ऑनलाइन और ऑफलाइन आउटरीच में संलग्न हों।",
        "संस्थानों और अनुसंधान निकायों से अपलोड की सुविधा प्रदान करें।",
        "स्थानीय कार्यशालाएं, एडिट-ए-थॉन, या फोटोवॉक आयोजित करें।",
        "अभियान सामग्री के अनुवाद और स्थानीयकरण में सहायता करें।",
      ],
      formNote:
        "यह फॉर्म मान्यता प्राप्त विकिमीडिया सहयोगियों या सामुदायिक समूहों के लिए है। व्यक्तियों और छात्रों को",
      campusAmbassadorLink: "कैंपस एंबेसडर फॉर्म",
      sidebarTitle: "आवेदन बंद",
      sidebarDescription:
        "आपकी रुचि के लिए धन्यवाद। संबद्ध कार्यक्रम के लिए आवेदन अवधि समाप्त हो गई है।",
      cta: "आवेदन बंद",
    },
    campus: {
      title: "कैंपस एंबेसडर के लिए कॉल",
      subtitle:
        "अपने संस्थान, समुदाय या नेटवर्क में विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने में मदद करने के लिए एक स्थानीय आउटरीच समन्वयक के रूप में हमसे जुड़ें।",
      whoHeading: "हम किसे ढूंढ रहे हैं?",
      whoDescription:
        "कैंपस एंबेसडर जागरूकता फैलाने, प्रतिभागियों का मार्गदर्शन करने और वैकल्पिक रूप से जागरूकता सत्र या कार्यशालाएं आयोजित करने में महत्वपूर्ण भूमिका निभाते हैं। चाहे आप विकिमीडियन हों, विज्ञान के छात्र हों, डिजाइनर हों, शिक्षक हों, या बस खुले विज्ञान के प्रति उत्साही हों - हमें आपको अपने साथ पाकर खुशी होगी!",
      responsibilitiesHeading: "जिम्मेदारियाँ",
      responsibilities: [
        "अपने संस्थान या समुदाय में अभियान को बढ़ावा दें।",
        "संभावित योगदानकर्ताओं के साथ भागीदारी दिशानिर्देश साझा करें।",
        "वैकल्पिक रूप से, कार्यशालाओं या फोटोवॉक जैसी जागरूकता गतिविधियाँ आयोजित करें (हम सहायता प्रदान कर सकते हैं!)।",
      ],
      sidebar: {
        title: "आवेदन बंद",
        description:
          "आपकी रुचि के लिए धन्यवाद। कैंपस एंबेसडर कार्यक्रम के लिए आवेदन अवधि समाप्त हो गई है।",
        cta: "आवेदन बंद",
      },
      cta: {
        text: "कैंपस एंबेसडर बनें",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform",
      },
    },
    competition: {
      title: "प्रतियोगिता विवरण",
      subtitle: "भाग लेने और जीतने के लिए आपको जो कुछ भी जानना चाहिए।",
      howToParticipate: {
        title: "कैसे भाग लें",
        p1: "यदि आपके पास कोई खाता नहीं है, तो आप एक वैश्विक खाता बना सकते हैं जो आपको लॉग इन करने पर सभी विकिमीडिया प्लेटफार्मों (विकिमीडिया कॉमन्स सहित) पर एक विशिष्ट उपयोगकर्ता नाम देगा। एक नए पंजीकृत उपयोगकर्ता के रूप में आपको वीडियो फ़ाइल अपलोड करने से पहले कम से कम चार दिन इंतजार करना होगा, जबकि छवियां पंजीकरण के तुरंत बाद अपलोड की जा सकती हैं।",
        createAccountLink: "अपना खाता यहाँ बनाएँ!",
        rulesTitle: "भागीदारी के नियम",
        rules: [
          "प्रस्तुतियाँ आपका अपना काम होनी चाहिए, जो आपके अपने पंजीकृत विकिमीडिया खाते से अपलोड की गई हों। एक से अधिक लेखकों के मामले में, सभी नाम प्रदान किए जाने चाहिए।",
          "छवियां एक मुफ्त लाइसेंस (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) के तहत होनी चाहिए।",
          "सभी प्रस्तुतियों के लिए अंग्रेजी में एक स्पष्ट और सटीक वैज्ञानिक विवरण की आवश्यकता होती है। अन्य भाषाओं में विवरण का भी स्वागत है।",
          {
            text: "संभव उच्चतम रिज़ॉल्यूशन (कम से कम 2 मेगापिक्सेल) अपलोड करें। आप मेगापिक्सेल गणना की जाँच ",
            link: {
              url: "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
              label: "यहाँ",
            },
          },
          "छवियों में वॉटरमार्क, लोगो, या अतिरिक्त पाठ/ग्राफिक्स (पैमानों को छोड़कर) नहीं होने चाहिए।",
        ],
      },
      keyDates: {
        title: "प्रमुख तिथियां",
        timeline: [
          { date: "1 नवंबर, 2025", event: "प्रस्तुतियाँ खुलीं" },
          { date: "15 दिसंबर, 2025", event: "प्रस्तुतियाँ बंद" },
          { date: "जनवरी 2026", event: "जूरी विचार-विमर्श" },
          { date: "फरवरी 2026", event: "राष्ट्रीय विजेताओं की घोषणा" },
        ],
      },
      submitNow: "इवेंट पेज देखें",
      imageCategories: {
        title: "छवि श्रेणियाँ",
        subtitle:
          "आप निम्नलिखित सात श्रेणियों में भाग ले सकते हैं। वह चुनें जो आपके काम के लिए सबसे उपयुक्त हो। प्रेरित होने के लिए नीचे दिए गए उदाहरण देखें।",
      },
      categories: {
        people: {
          name: "विज्ञान में लोग",
          description: "वैज्ञानिक अपने प्राकृतिक आवास में।",
        },
        microscopy: {
          name: "माइक्रोस्कोपी छवियां",
          description:
            "ऑप्टिकल, इलेक्ट्रॉन, और स्कैनिंग जांच माइक्रोस्कोपी छवियां।",
        },
        astronomy: {
          name: "खगोल विज्ञान",
          description:
            "तारों, खगोलीय घटनाओं, और उन्हें पकड़ने के लिए उपयोग किए जाने वाले उपकरणों की छवियां।",
        },
        special: {
          name: "विशेष श्रेणी",
          description:
            "अद्वितीय और असाधारण वैज्ञानिक सामग्री जो अन्य श्रेणियों में फिट नहीं होती है।",
        },
        everyday: {
          name: "रोजमर्रा की जिंदगी में विज्ञान",
          description:
            "दैनिक जीवन, व्यावहारिक अनुप्रयोगों और प्रयोगों में विज्ञान का प्रदर्शन करने वाली छवियां।",
        },
        equipment: {
          name: "विज्ञान में उपकरण",
          description:
            "वैज्ञानिक उपकरण, प्रयोगशाला सेटअप और प्रयोगात्मक उपकरण।",
        },
        chemistry: {
          name: "रसायन विज्ञान में विज्ञान",
          description:
            "रासायनिक प्रतिक्रियाएं, प्रयोगशाला रसायन विज्ञान और आणविक विज्ञान।",
        },
        physics: {
          name: "भौतिकी में विज्ञान",
          description:
            "भौतिकी में भौतिक प्रयोग, प्रदर्शन और अवधारणाएं।",
        },
        mobile: {
          name: "मोबाइल श्रेणी",
          description:
            "मोबाइल उपकरणों का उपयोग करने वाले छात्रों और योगदानकर्ताओं के लिए; उच्च-स्तरीय उपकरणों के बिना सुलभ विज्ञान और प्रकृति के चित्र।",
        },
      },
      readyToParticipate: {
        title: "भाग लेने के लिए तैयार हैं?",
        subtitle:
          "मंच तैयार है। आपका लेंस कुंजी है। हमें अपनी वैज्ञानिक आंखों से दुनिया दिखाएं।",
        cta: "इवेंट पेज देखें",
      },
    },
    contact: {
      title: "हमसे संपर्क करें",
      subtitle:
        "प्रश्न या प्रतिक्रिया है? हमें आपसे सुनना अच्छा लगेगा। हम त्वरित उत्तर का वादा करते हैं!",
      getInTouch: "संपर्क में रहें",
      p1: "फॉर्म भरें और हमारी टीम कुछ घंटों के भीतर आपसे संपर्क करेगी। हम यहाँ मदद के लिए हैं!",
      emailAddress: "contact@wikisciencecompetition.in",
      form: {
        name: "पूरा नाम",
        namePlaceholder: "आपका नाम",
        email: "ईमेल पता",
        emailPlaceholder: "your.email@example.com",
        subject: "विषय",
        subjectPlaceholder: "अपनी क्वेरी के लिए एक विषय चुनें",
        otherSubjectPlaceholder: "कृपया अपना विषय निर्दिष्ट करें",
        message: "संदेश",
        messagePlaceholder: "एक पूर्व-लिखित संदेश चुनें या 'अन्य...'",
        otherMessagePlaceholder: "कृपया अपना संदेश निर्दिष्ट करें",
        selectSubjectFirst: "कृपया पहले एक विषय चुनें",
        submit: "संदेश भेजें",
        submitting: "भेज रहा है...",
      },
      toast: {
        successTitle: "संदेश भेजा गया!",
        successDescription:
          "हमसे संपर्क करने के लिए धन्यवाद। हम शीघ्र ही आपसे संपर्क करेंगे।",
        errorTitle: "त्रुटि",
        errorDescription: "कुछ गलत हुआ। कृपया पुन: प्रयास करें।",
      },
    },
    organizers: {
      title: "आयोजकों से मिलें",
      subtitle:
        "पहली विकी विज्ञान प्रतियोगिता भारत को एक बड़ी सफलता बनाने के लिए पर्दे के पीछे काम करने वाली समर्पित टीम।",
      lead_organizers: "प्रमुख आयोजक",
      advisors: "सलाहकार",
      core_organizing_team: "कोर आयोजन टीम",
      team: [
        {
          id: "dev_jadiya",
          name: "देव जड़िया",
          role: "प्रमुख आयोजक",
          roleKey: "lead_organizer",
          social: {
            linkedin: "https://www.linkedin.com/in/devjadiya/",
            meta: "https://meta.wikimedia.org/wiki/User:Dev_Jadiya",
          },
        },
        {
          id: "gauri_gupta",
          name: "गौरी गुप्ता",
          role: "प्रमुख आयोजक",
          roleKey: "lead_organizer",
          social: {
            linkedin: "#",
            meta: "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa",
          },
        },
        {
          id: "suyash_dwivedi",
          name: "सुयश द्विवेदी",
          role: "सलाहकार",
          roleKey: "advisor",
          social: {
            linkedin: "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/",
            meta: "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi",
          },
        },
        {
          id: "sai_kiran",
          name: "साई किरण",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: { meta: "https://meta.wikimedia.org/wiki/User:Nskjnv" },
        },
        {
          id: "chinmayee_mishra",
          name: "चिन्मयी मिश्रा",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra",
          },
        },
        {
          id: "uday_dongre",
          name: "उदय डोंगरे",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: { meta: "https://meta.wikimedia.org/wiki/User:Shoot_stufz" },
        },
        {
          id: "pankaj_yadav",
          name: "पंकज यादव",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:The_open_draft",
          },
        },
        {
          id: "ashmita_bathre",
          name: "अस्मिता बाथरे",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:AshmitaBathre204",
          },
        },
        {
          id: "aanchal_patel",
          name: "आंचल पटेल",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: { meta: "https://meta.wikimedia.org/wiki/User:Archies2804" },
        },
        {
          id: "riddhi_sharma",
          name: "रिद्धि शर्मा",
          role: "कोर आयोजन टीम",
          roleKey: "core_team",
          social: {
            meta: "https://meta.wikimedia.org/wiki/User:Herdaisymione",
          },
        },
      ],
    },
    organizersCall: {
      title: "आयोजकों के लिए कॉल",
      subtitle:
        "हम यह साझा करने के लिए उत्साहित हैं कि भारत इस वैश्विक अभियान का अपना स्थानीय संस्करण आयोजित करेगा जो विकिमीडिया कॉमन्स पर स्वतंत्र रूप से लाइसेंस प्राप्त छवियों, वीडियो और अन्य मीडिया के माध्यम से विज्ञान को बढ़ावा देता है।",
      joinHeading: "आयोजन टीम में शामिल हों",
      joinDescription:
        "सुचारू समन्वय, आउटरीच और योजना का समर्थन करने के लिए, हम अपनी आयोजन टीम का विस्तार कर रहे हैं। यदि आप इस महत्वपूर्ण पहल में योगदान करने में रुचि रखते हैं, तो हमें आपसे सुनना अच्छा लगेगा।",
      lookingForHeading: "हम क्या खोज रहे हैं",
      lookingFor: [
        "विज्ञान, फोटोग्राफी, या खुले ज्ञान में रुचि रखने वाले भावुक व्यक्ति।",
        "इवेंट प्लानिंग, आउटरीच, सोशल मीडिया प्रबंधन, या सामग्री निर्माण में कौशल।",
        "एक सहयोगी भावना और एक महत्वपूर्ण प्रभाव डालने की इच्छा।",
      ],
      sidebarTitle: "अभी आवेदन करें",
      sidebarDescription:
        "भारत में पहली विकी विज्ञान प्रतियोगिता को आकार देने में हमारी मदद करें।",
      deadline: "आवेदन बंद: 15 जुलाई 2025",
      cta: "आवेदन बंद",
    },
    resources: {
      title: "संसाधन",
      subtitle:
        "पिछले विजेताओं से प्रेरित हों और अपनी प्रस्तुति तैयार करने के लिए सहायक सामग्री तक पहुँचें।",
      pastWinners: {
        title: "पिछले विजेताओं की गैलरी",
        links: [
          {
            year: 2023,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2023/Winners",
          },
          {
            year: 2021,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2021/Winners",
          },
          {
            year: 2019,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2019/Winners",
          },
          {
            year: 2017,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2017/Winners",
          },
        ],
      },
      learningMaterials: {
        title: "सीखने की सामग्री",
        cta: "और जानें",
        resources: [
          {
            title: "विज्ञान फोटोग्राफी के लिए गाइड",
            description:
              "आश्चर्यजनक वैज्ञानिक छवियों को कैप्चर करने की मूल बातें जानें।",
            link: "#",
          },
          {
            title: "क्रिएटिव कॉमन्स को समझना",
            description:
              "प्रतियोगिता के लिए अपने काम को लाइसेंस देने के लिए एक त्वरित गाइड।",
            link: "#",
          },
          {
            title: "छवि अपलोड ट्यूटोरियल",
            description:
              "अपनी तस्वीरों को कैसे सबमिट करें, इस पर चरण-दर-चरण वीडियो।",
            link: "#",
          },
        ],
      },
    },
    support: {
      title: "हमारा समर्थन करें",
      subtitle:
        "विकी विज्ञान प्रतियोगिता भारत 2025 को एक बड़ी सफलता बनाने में हमारी मदद करें।",
      options: [
        {
          id: "sponsorship",
          icon: "Handshake",
          title: "प्रायोजक बनें",
          description:
            "परिचालन लागत, पुरस्कार राशि और इवेंट प्रबंधन को कवर करने में मदद के लिए मौद्रिक योगदान के साथ हमारा समर्थन करें। हम प्रमुख ब्रांडिंग अवसरों के साथ विभिन्न प्रायोजन स्तर प्रदान करते हैं।",
          cta: "प्रायोजन के लिए संपर्क करें",
        },
        {
          id: "gifts",
          icon: "Gift",
          title: "उपहार और स्वैग प्रदान करें",
          description:
            "हमारे विजेताओं और प्रतिभागियों के लिए रोमांचक उपहार, वाउचर, या ब्रांडेड मर्चेंडाइज (स्वैग) के साथ हमारे पुरस्कार पूल में योगदान करें। अपने ब्रांड को विज्ञान के प्रति उत्साही लोगों के हाथों में पहुंचाएं।",
          cta: "उपहार प्रदान करें",
        },
        {
          id: "outreach",
          icon: "Megaphone",
          title: "आउटरीच और मार्केटिंग",
          description:
            "शब्द फैलाने के लिए हमारे साथ सहयोग करें। अपने संस्थागत चैनलों, सोशल मीडिया या मार्केटिंग विशेषज्ञता के माध्यम से व्यापक दर्शकों तक पहुंचने में हमारी सहायता करें।",
          cta: "आउटरीच पर सहयोग करें",
        },
      ],
    },
    home: {
      hero: {
        title: "प्रतियोगिता अब समाप्त हो गई है",
        certificate: "अपना प्रमाणपत्र प्राप्त करें",
        closed: "इवेंट पेज देखें",
      },
      thankyou: {
        title: "धन्यवाद, योगदानकर्ताओं!",
        subtitle: "भारत में पहली बार विकी विज्ञान प्रतियोगिता को अभूतपूर्व प्रतिक्रिया मिली है। हमें यह घोषणा करते हुए खुशी हो रही है कि हमारे प्रतिभाशाली समुदाय ने 3600+ से अधिक प्रविष्टियों का योगदान दिया है! हम विज्ञान की अपनी दृष्टि साझा करने के लिए प्रत्येक प्रतिभागी का हृदय से आभार व्यक्त करते हैं। परिणामों के लिए बने रहें!",
        uploads: "छवि आँकड़े",
        contributors: "योगदानकर्ता",
        certificateTitle: "प्रमाणपत्र अब उपलब्ध हैं!",
        certificateMessage: "प्रिय योगदानकर्ताओं, आपके प्रमाणपत्र अब डाउनलोड के लिए तैयार हैं। यह भारतीय विज्ञान के लिए आपकी कड़ी मेहनत, समर्पण और समर्थन के लिए हमारी ओर से एक विनम्र इशारा है।",
        certificateCta: "अपना प्रमाणपत्र डाउनलोड करें",
        signature: "विकी विज्ञान आयोजन टीम"
      },
      info: {
        title: "आज क्लिक करें, कल बनाएं।",
        subtitle: "की दुनिया का अन्वेषण करें",
        words: ["विज्ञान।", "खोज।", "ज्ञान।", "नवाचार।"],
      },
      prizes: {
        title: "पुरस्कार और मान्यता",
        subtitle: "आपके अभूतपूर्व दृश्यों का जश्न मनाया जाना चाहिए। जानें कि आप क्या जीत सकते हैं।",
        prizes: [
          {
            icon: "Award",
            title: "राष्ट्रीय मान्यता",
            description: "विजेताओं को हमारे आधिकारिक प्लेटफार्मों पर मनाया जाएगा और राष्ट्रीय मीडिया कवरेज प्राप्त होगा।",
          },
          {
            icon: "Camera",
            title: "शीर्ष स्तरीय उपकरण",
            description: "शीर्ष विजेताओं के लिए उनके जुनून में सहायता के लिए रोमांचक फोटोग्राफी गियर और सहायक उपकरण।",
          },
          {
            icon: "BookOpen",
            title: "प्रकाशन फ़ीचर",
            description: "प्रतिष्ठित विज्ञान पत्रिकाओं और प्रकाशनों में अपने काम को चित्रित करवाएं।",
          },
        ],
      },
      campaign: {
        title: "अभियान से लाइव",
        description: "कुल फाइलों का विश्लेषण। ये डीएसएलआर और अन्य सामान्य अपलोड से छवियां हैं।",
        totalSubmissions: "कुल प्रस्तुतियाँ",
        noSubmissions: "अभी तक कोई सबमिशन नहीं",
        noSubmissionsSub: "योगदान करने वाले पहले व्यक्ति बनें! इस अभियान की छवियां यहां लाइव दिखाई देंगी।",
        viewFull: "छवियां देखें"
      },
      mobileCampaign: {
        title: "मोबाइल से लाइव",
        description: "ये स्मार्टफोन से ली गई मोबाइल प्रस्तुतियाँ हैं।",
      },
      dashboard: {
        title: "लाइव अभियान डैशबोर्ड",
        subtitle: "हमारे समुदाय के योगदान के वास्तविक समय के प्रभाव को ट्रैक करें।",
        ctaLine1: "इन नंबरों का हिस्सा बनना चाहते हैं?",
        ctaLinkText: "एक खाता बनाएँ",
        ctaLine2: "आउटरीच डैशबोर्ड पर और अभियान में शामिल हों!",
        ctaButton: "अभियान में शामिल हों"
      },
      instagram: {
          images: {
              title: "विशेष रुप से प्रदर्शित छवियाँ",
              subtitle: "हमारे समुदाय से आश्चर्यजनक वैज्ञानिक फोटोग्राफी का एक क्यूरेटेड संग्रह।",
          },
          reels: {
              title: "नवीनतम रील्स",
              subtitle: "विज्ञान को क्रिया में प्रदर्शित करने वाले छोटे, आकर्षक वीडियो देखें।",
          },
          videos: {
              title: "सामुदायिक वीडियो",
              subtitle: "हमारे प्रतिभाशाली योगदानकर्ताओं से गहन वीडियो सामग्री का अन्वेषण करें।",
          }
      },
      contact: {
          title: "संपर्क में रहें",
          subtitle: "प्रश्न या प्रतिक्रिया है? हमें आपसे सुनना अच्छा लगेगा। हम त्वरित उत्तर का वादा करते हैं!",
      },
      testimonials: {
        title: "हमारे समुदाय की आवाज़ें",
        subtitle: "सुनें कि शोधकर्ता, फोटोग्राफर और उत्साही विकी विज्ञान प्रतियोगिता के बारे में क्या कह रहे हैं।"
      },
      vortex: {
        title: "अनदेखे को कैद करें",
        subtitle: "अपने लेंस के माध्यम से विज्ञान की सुंदरता को उजागर करें। खोज का जश्न मनाने वाले एक वैश्विक समुदाय में शामिल हों।",
        cta: "पिछले विजेता देखें"
      }
    },
  },
};

export type Translations = typeof translations;

export type TranslationType = (typeof translations)['en'];
