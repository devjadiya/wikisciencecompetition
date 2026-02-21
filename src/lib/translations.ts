
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
      p1: "For the very first time, India organized a national edition of the Wiki Science Competition (WSC) — one of the world’s largest initiatives that brings together science, photography, and free knowledge.",
      p2: "Launched in Estonia in 2011 and later expanded across Europe and worldwide, the competition has inspired thousands of scientists, researchers, and enthusiasts to share images that capture the wonder of science. From microscopic cells to cosmic galaxies, these freely licensed contributions enrich Wikimedia Commons and support open education globally.",
      p3: "India has proudly contributed to past international editions — with Indian photographers and scientists receiving recognition and awards. However, this was the first time India hosted its own local competition, dedicated to showcasing the scientific spirit and creativity of our country.",
      p4: "The Wiki Science Competition 2025 – India was a massive success. It was a collective effort to represent Indian science to the world — through powerful images, stories, and creativity.",
      aims: {
        title: "Our Aims",
        subtitle: "Through this campaign, we aimed to:",
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
        "Meet the passionate leaders who drove the Wiki Science Competition in their communities.",
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
      title: "Wikimedia Affiliates",
      subtitle:
        "We invited Wikimedia affiliates, user groups, and organizations across India to collaborate with us in promoting and supporting Wiki Science Competition 2025.",
      partnerHeading: "Why Partners Joined Us",
      partnerDescription:
        "This was a unique opportunity to celebrate science and enrich Wikimedia Commons with freely licensed media. As partners, groups played a pivotal role in making India's first national Wiki Science Competition a success.",
      collaborationHeading: "How We Collaborated",
      collaborationPoints: [
        "Engaged in online and offline outreach to networks.",
        "Facilitated uploads from institutions and research bodies.",
        "Organized local workshops, edit-a-thons, or photowalks.",
        "Assisted with translation and localization of campaign materials.",
      ],
      formNote:
        "This program was intended for recognized Wikimedia affiliates or community groups.",
      campusAmbassadorLink: "Campus Ambassador program",
      sidebarTitle: "Applications Closed",
      sidebarDescription:
        "The application period for the Affiliate program has ended.",
      cta: "Applications Closed",
    },
    campus: {
      title: "Campus Ambassadors",
      subtitle:
        "Local outreach coordinators helped promote the Wiki Science Competition 2025 in their institutions and networks.",
      whoHeading: "Who were our Ambassadors?",
      whoDescription:
        "Campus Ambassadors played a key role in spreading awareness and guiding participants. Our team included Wikimedians, science students, designers, and teachers enthusiastic about open science.",
      responsibilitiesHeading: "Key Roles",
      responsibilities: [
        "Promoted the campaign in their institution or community.",
        "Shared participation guidelines with potential contributors.",
        "Organized awareness activities like workshops or photowalks.",
      ],
      sidebar: {
        title: "Applications Closed",
        description:
          "The application period for the Campus Ambassador program has ended.",
        cta: "Applications Closed",
      },
      cta: {
        text: "Become a Campus Ambassador",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform",
      },
    },
    competition: {
      title: "National Winners Announced",
      subtitle: "Celebrating the stunning winners of India's first national Wiki Science Competition.",
      howToParticipate: {
        title: "Submission Details",
        p1: "The submission phase is now complete. We thank all participants who created accounts and shared their scientific vision on Wikimedia Commons.",
        createAccountLink: "Visit Results Page",
        rulesTitle: "Final Stats",
        rules: [
          "Total Submissions: 3,706 files",
          "Total Contributors: 474 individuals",
          "Submissions covered DSLR/Camera and Mobile categories.",
          "Images are available under free licenses (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
          "Contributions have significantly enriched scientific documentation on Commons.",
        ],
      },
      keyDates: {
        title: "Competition Timeline",
        timeline: [
          { date: "November 1, 2025", event: "Submissions Opened" },
          { date: "December 15, 2025", event: "Submissions Closed" },
          { date: "January 2026", event: "Jury Deliberation" },
          { date: "February 18, 2026", event: "National Winners Announced" },
        ],
      },
      submitNow: "View Results on Commons",
      imageCategories: {
        title: "National Winners Gallery",
        subtitle:
          "Explore the top submissions that captured the beauty of science in India.",
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
        title: "National Winners Announced!",
        subtitle:
          "The first-ever national Wiki Science Competition in India has concluded. Check out the stunning winning entries.",
        cta: "View Winning Gallery",
      },
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "Have questions about the results or certificates? We promise a quick reply!",
      getInTouch: "Get in Touch",
      p1: "Fill out the form and our team will get back to you. We're here to help!",
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
        "The dedicated team who worked behind the scenes to make the first Wiki Science Competition India a grand success.",
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
          role: "Sponsorships & Finance",
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
        "We’re excited to share that India organized its own local edition of this global campaign that promotes science through freely licensed media on Wikimedia Commons.",
      joinHeading: "Join the Organizing Team",
      joinDescription:
        "Our team was expanded to support coordination, outreach, and planning. We thank everyone who contributed to this initiative.",
      lookingForHeading: "Our Values",
      lookingFor: [
        "Passionate individuals with an interest in science, photography, or open knowledge.",
        "Skills in event planning, outreach, social media management, or content creation.",
        "A collaborative spirit and a desire to make a significant impact.",
      ],
      sidebarTitle: "Completed",
      sidebarDescription:
        "Thank you for helping us shape the first Wiki Science Competition in India.",
      deadline: "Applications Closed",
      cta: "Applications Closed",
    },
    resources: {
      title: "Resources",
      subtitle:
        "Get inspired by the 2025 winners and access materials to prepare for the next edition.",
      pastWinners: {
        title: "Gallery of Winners",
        links: [
          {
            year: 2025,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India/Results",
          },
          {
            year: 2023,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2023/Winners",
          },
          {
            year: 2021,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2021/Winners",
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
        "We thank our supporters who made the Wiki Science Competition India 2025 a massive success.",
      options: [
        {
          id: "sponsorship",
          icon: "Handshake",
          title: "Sponsorship",
          description:
            "Special thanks to our sponsors who helped cover operational costs and prize coupons.",
          cta: "Contact Team",
        },
        {
          id: "gifts",
          icon: "Gift",
          title: "Gifts & Swag",
          description:
            "Contributors received exciting coupons and certificates for their dedication to Indian science.",
          cta: "Contact Team",
        },
        {
          id: "outreach",
          icon: "Megaphone",
          title: "Outreach & Marketing",
          description:
            "Collaborate with us for future editions to spread the word about open science.",
          cta: "Join Future Outreach",
        },
      ],
    },
    home: {
      hero: {
        title: "National Winners Announced!",
        certificate: "Get Your Certificate",
        closed: "View Winning Gallery",
      },
      thankyou: {
        title: "Thank You, Contributors!",
        subtitle: "The response to India's first Wiki Science Competition was phenomenal! Over 3,700+ entries from 474 individuals. We are deeply moved by your passion for contributing freely licensed scientific media to Wikimedia Commons. We are thrilled to announce cash prizes for winners in recognition of their dedication.",
        uploads: "Final Upload Stats",
        contributors: "Participants",
        certificateTitle: "Certificates & Prizes!",
        certificateMessage: "Dear contributors, certificates are ready for download. We are also awarding Gift Coupons worth ₹4,000, ₹3,000, and ₹2,000 to winners in both Camera and Mobile categories!",
        certificateCta: "Download Your Certificate",
        signature: "Wiki Science Organizing Team"
      },
      info: {
        title: "Clicking Today, Creating Tomorrow.",
        subtitle: "Explore the World of",
        words: ["Science.", "Discovery.", "Knowledge.", "Innovation."],
      },
      prizes: {
        title: "National Prizes Announced",
        subtitle:
          "In recognition of your incredible dedication, we are thrilled to announce Gift Coupons for winners in both DSLR/Camera and Mobile photography categories.",
        prizes: [
          {
            icon: "Award",
            title: "1st Place - worth ₹4,000",
            description:
              "Awarded to the top submission in both DSLR/Camera and Mobile categories as a Gift Coupon.",
          },
          {
            icon: "Camera",
            title: "2nd & 3rd Place",
            description:
              "Gift Coupons worth ₹3,000 for 2nd place and ₹2,000 for 3rd place in both categories.",
          },
          {
            icon: "BookOpen",
            title: "Highest Uploads - ₹2,000",
            description:
              "A special recognition Gift Coupon for the participant with the highest number of eligible scientific uploads.",
          },
        ],
      },
      campaign: {
        title: "Live from the Campaign",
        description: "Anatomy of total files. We received these images via DSLR and common general uploads.",
        totalSubmissions: "Total Submissions",
        noSubmissions: "No Submissions Yet",
        noSubmissionsSub: "Check out the winning gallery on Wikimedia Commons.",
        viewFull: "See Images"
      },
      mobileCampaign: {
        title: "Live from Mobile",
        description: "These are the mobile submissions taken from smartphones.",
        totalSubmissions: "Total Submissions",
      },
      dashboard: {
        title: "Competition Statistics Dashboard",
        subtitle: "Final impact of our community's contributions.",
        ctaLine1: "Want to see the full breakdown?",
        ctaLinkText: "View the Dashboard",
        ctaLine2: "to explore the campaign's success metrics!",
        ctaButton: "Competition Metrics"
      },
      instagram: {
          images: {
              title: "Winning Images",
              subtitle: "A curated collection of stunning scientific photography from our 2025 winners.",
          },
          reels: {
              title: "Science Reels",
              subtitle: "Short, engaging videos showcasing science in action.",
          },
          videos: {
              title: "Community Content",
              subtitle: "Explore in-depth video content from our talented contributors.",
          }
      },
      contact: {
          title: "Get in Touch",
          subtitle: "Have questions about prizes or certificates? We'd love to hear from you.",
      },
      testimonials: {
        title: "Voices of Our Community",
        subtitle: "Hear what researchers and photographers are saying about this inaugural national edition."
      },
      vortex: {
        title: "Capture the Unseen",
        subtitle: "The 2025 edition has concluded. Thank you for revealing the beauty of science through your lens.",
        cta: "View 2025 Winners"
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
    participateButton: "विजेताओं को देखें",
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
      p1: "पहली बार, भारत ने विकी विज्ञान प्रतियोगिता (WSC) का राष्ट्रीय संस्करण आयोजित किया — यह दुनिया की सबसे बड़ी पहलों में से एक है जो विज्ञान और मुफ्त ज्ञान को एक साथ लाती है।",
      p2: "2011 में एस्टोनिया में शुरू हुई इस प्रतियोगिता ने हजारों वैज्ञानिकों और उत्साही लोगों को विज्ञान के आश्चर्य को दर्शाने वाली छवियां साझा करने के लिए प्रेरित किया है। ये स्वतंत्र रूप से लाइसेंस प्राप्त योगदान विकिमीडिया कॉमन्स को समृद्ध करते हैं।",
      p3: "भारत ने पहली बार अपनी स्थानीय प्रतियोगिता की मेजबानी की, जो हमारे देश की वैज्ञानिक भावना और रचनात्मकता को प्रदर्शित करने के लिए समर्पित थी।",
      p4: "विकी विज्ञान प्रतियोगिता 2025 – भारत एक बड़ी सफलता रही। यह शक्तिशाली छवियों के माध्यम से भारतीय विज्ञान को दुनिया के सामने प्रस्तुत करने का एक सामूहिक प्रयास था।",
      aims: {
        title: "हमारे उद्देश्य",
        subtitle: "इस अभियान के माध्यम से, हमारा उद्देश्य था:",
        items: [
          {
            icon: "PenSquare",
            title: "योगदान को प्रोत्साहित करें",
            description:
              "पूरे भारत में छात्रों और शोधकर्ताओं को वैज्ञानिक मीडिया का योगदान करने के लिए प्रोत्साहित करना।",
          },
          {
            icon: "Lightbulb",
            title: "जागरूकता बढ़ाएँ",
            description:
              "खुले विज्ञान और मुफ्त ज्ञान के महत्व के बारे में जागरूकता बढ़ाना।",
          },
          {
            icon: "Globe",
            title: "विरासत का जश्न मनाएँ",
            description:
              "भारत की समृद्ध वैज्ञानिक विरासत का जश्न मनाना।",
          },
          {
            icon: "Handshake",
            title: "सहयोग को मजबूत करें",
            description:
              "विकिमीडिया समुदायों और विश्वविद्यालयों के बीच सहयोग को मजबूत करना।",
          },
        ],
      },
    },
    campusAmbassadors: {
      title: "कैंपस एंबेसडर",
      subtitle:
        "उन उत्साही नेताओं से मिलें जिन्होंने अपने समुदायों में विकी विज्ञान प्रतियोगिता को चलाया।",
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
      title: "विकिमीडिया सहयोगी",
      subtitle:
        "भारत भर में विकिमीडिया सहयोगियों और संगठनों ने विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने में हमारा साथ दिया।",
      partnerHeading: "साझेदारी क्यों महत्वपूर्ण थी?",
      partnerDescription:
        "यह विज्ञान का जश्न मनाने और विकिमीडिया कॉमन्स को स्वतंत्र मीडिया से समृद्ध करने का एक अनूठा अवसर था। सहयोगियों ने आउटरीच और सामुदायिक जुड़ाव में मदद करके महत्वपूर्ण भूमिका निभाई।",
      collaborationHeading: "हमने कैसे सहयोग किया",
      collaborationPoints: [
        "नेटवर्क पर ऑनलाइन और ऑफलाइन आउटरीच की।",
        "संस्थानों से अपलोड की सुविधा प्रदान की।",
        "स्थानीय कार्यशालाएं और फोटोवॉक आयोजित कीं।",
        "अभियान सामग्री के अनुवाद में सहायता की।",
      ],
      formNote:
        "यह कार्यक्रम मान्यता प्राप्त विकिमीडिया सहयोगियों के लिए था।",
      campusAmbassadorLink: "कैंपस एंबेसडर कार्यक्रम",
      sidebarTitle: "आवेदन बंद",
      sidebarDescription:
        "संबद्ध कार्यक्रम के लिए आवेदन अवधि अब समाप्त हो गई है।",
      cta: "आवेदन बंद",
    },
    campus: {
      title: "कैंपस एंबेसडर",
      subtitle:
        "स्थानीय आउटरीच समन्वयकों ने अपने संस्थानों में विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने में मदद की।",
      whoHeading: "हमारे एंबेसडर कौन थे?",
      whoDescription:
        "कैंपस एंबेसडर ने जागरूकता फैलाने और प्रतिभागियों का मार्गदर्शन करने में महत्वपूर्ण भूमिका निभाई। हमारी टीम में विज्ञान के छात्र, शिक्षक और उत्साही लोग शामिल थे।",
      responsibilitiesHeading: "मुख्य भूमिकाएँ",
      responsibilities: [
        "अपने संस्थान या समुदाय में अभियान को बढ़ावा दिया।",
        "संभावित योगदानकर्ताओं के साथ भागीदारी दिशानिर्देश साझा किए।",
        "कार्यशालाओं या फोटोवॉक जैसी जागरूकता गतिविधियाँ आयोजित कीं।",
      ],
      sidebar: {
        title: "आवेदन बंद",
        description:
          "कैंपस एंबेसडर कार्यक्रम के लिए आवेदन अवधि समाप्त हो गई है।",
        cta: "आवेदन बंद",
      },
      cta: {
        text: "कैंपस एंबेसडर बनें",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform",
      },
    },
    competition: {
      title: "राष्ट्रीय विजेताओं की घोषणा",
      subtitle: "भारत की पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता के विजेताओं का जश्न।",
      howToParticipate: {
        title: "सबमिशन विवरण",
        p1: "सबमिशन चरण अब पूरा हो चुका है। हम उन सभी प्रतिभागियों को धन्यवाद देते हैं जिन्होंने विकिमीडिया कॉमन्स पर अपनी वैज्ञानिक दृष्टि साझा की।",
        createAccountLink: "परिणाम पेज देखें",
        rulesTitle: "अंतिम आँकड़े",
        rules: [
          "कुल सबमिशन: 3,706 फाइलें",
          "कुल योगदानकर्ता: 474 व्यक्ति",
          "सबमिशन में डीएसएलआर/कैमरा और मोबाइल श्रेणियां शामिल थीं।",
          "छवियां मुफ्त लाइसेंस (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) के तहत उपलब्ध हैं।",
          "योगदानों ने कॉमन्स पर वैज्ञानिक दस्तावेज़ीकरण को समृद्ध किया है।",
        ],
      },
      keyDates: {
        title: "प्रमुख तिथियां",
        timeline: [
          { date: "1 नवंबर, 2025", event: "प्रस्तुतियाँ खुलीं" },
          { date: "15 दिसंबर, 2025", event: "प्रस्तुतियाँ बंद" },
          { date: "जनवरी 2026", event: "जूरी विचार-विमर्श" },
          { date: "18 फरवरी, 2026", event: "राष्ट्रीय विजेताओं की घोषणा" },
        ],
      },
      submitNow: "कॉमन्स पर परिणाम देखें",
      imageCategories: {
        title: "राष्ट्रीय विजेता गैलरी",
        subtitle:
          "भारत में विज्ञान की सुंदरता को दर्शाने वाले शीर्ष सबमिशन देखें।",
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
            "तारों, खगोलीय घटनाओं, और उपकरणों की छवियां।",
        },
        special: {
          name: "विशेष श्रेणी",
          description:
            "अद्वितीय वैज्ञानिक सामग्री जो अन्य श्रेणियों में फिट नहीं होती है।",
        },
        everyday: {
          name: "रोजमर्रा की जिंदगी में विज्ञान",
          description:
            "दैनिक जीवन और प्रयोगों में विज्ञान का प्रदर्शन करने वाली छवियां।",
        },
        equipment: {
          name: "विज्ञान में उपकरण",
          description:
            "वैज्ञानिक उपकरण, प्रयोगशाला सेटअप और प्रयोगात्मक उपकरण।",
        },
        chemistry: {
          name: "रसायन विज्ञान में विज्ञान",
          description:
            "रासायनिक प्रतिक्रियाएं और आणविक विज्ञान।",
        },
        physics: {
          name: "भौतिकी में विज्ञान",
          description:
            "भौतिकी में भौतिक प्रयोग और अवधारणाएं।",
        },
        mobile: {
          name: "मोबाइल श्रेणी",
          description:
            "मोबाइल उपकरणों का उपयोग करने वाले छात्रों के लिए; विज्ञान और प्रकृति के चित्र।",
        },
      },
      readyToParticipate: {
        title: "राष्ट्रीय विजेताओं की घोषणा!",
        subtitle:
          "भारत में पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता संपन्न हो गई है। शानदार विजेता प्रविष्टियाँ देखें।",
        cta: "विजेता गैलरी देखें",
      },
    },
    contact: {
      title: "हमसे संपर्क करें",
      subtitle:
        "परिणामों या प्रमाणपत्रों के बारे में प्रश्न हैं? हम त्वरित उत्तर का वादा करते हैं!",
      getInTouch: "संपर्क में रहें",
      p1: "फॉर्म भरें और हमारी टीम आपसे संपर्क करेगी। हम यहाँ मदद के लिए हैं!",
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
        "समर्पित टीम जिसने पहली विकी विज्ञान प्रतियोगिता भारत को एक बड़ी सफलता बनाने के लिए पर्दे के पीछे काम किया।",
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
        "हमें यह साझा करते हुए खुशी हो रही है कि भारत ने इस वैश्विक अभियान का अपना स्थानीय संस्करण आयोजित किया जो विकिमीडिया कॉमन्स पर विज्ञान को बढ़ावा देता है।",
      joinHeading: "आयोजन टीम",
      joinDescription:
        "समन्वय और योजना का समर्थन करने के लिए हमारी टीम का विस्तार किया गया था। हम इस पहल में योगदान देने वाले सभी लोगों को धन्यवाद देते हैं।",
      lookingForHeading: "हमारे मूल्य",
      lookingFor: [
        "विज्ञान और फोटोग्राफी में रुचि रखने वाले भावुक व्यक्ति।",
        "इवेंट प्लानिंग और आउटरीच में कौशल।",
        "एक सहयोगी भावना और प्रभाव डालने की इच्छा।",
      ],
      sidebarTitle: "संपन्न",
      sidebarDescription:
        "भारत में पहली विकी विज्ञान प्रतियोगिता को आकार देने में हमारी मदद करने के लिए धन्यवाद।",
      deadline: "आवेदन बंद",
      cta: "आवेदन बंद",
    },
    resources: {
      title: "संसाधन",
      subtitle:
        "2025 के विजेताओं से प्रेरित हों और अगले संस्करण के लिए तैयार हों।",
      pastWinners: {
        title: "विजेताओं की गैलरी",
        links: [
          {
            year: 2025,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2025_in_India/Results",
          },
          {
            year: 2023,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2023/Winners",
          },
          {
            year: 2021,
            url: "https://commons.wikimedia.org/wiki/Commons:Wiki_Science_Competition_2021/Winners",
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
              "शानदार वैज्ञानिक छवियों को कैप्चर करने की मूल बातें जानें।",
            link: "#",
          },
          {
            title: "क्रिएटिव कॉमन्स को समझना",
            description:
              "प्रतियोगिता के लिए अपने काम को लाइसेंस देने के लिए एक गाइड।",
            link: "#",
          },
          {
            title: "छवि अपलोड ट्यूटोरियल",
            description: "तस्वीरों को सबमिट करने पर चरण-दर-चरण वीडियो।",
            link: "#",
          },
        ],
      },
    },
    support: {
      title: "हमारा समर्थन करें",
      subtitle:
        "हम उन सभी का धन्यवाद करते हैं जिन्होंने विकी विज्ञान प्रतियोगिता भारत 2025 को सफल बनाया।",
      options: [
        {
          id: "sponsorship",
          icon: "Handshake",
          title: "प्रायोजन",
          description:
            "हमारे प्रायोजकों को विशेष धन्यवाद जिन्होंने परिचालन लागत और पुरस्कार कूपन में मदद की।",
          cta: "टीम से संपर्क करें",
        },
        {
          id: "gifts",
          icon: "Gift",
          title: "उपहार और कूपन",
          description:
            "योगदानकर्ताओं को उनकी कड़ी मेहनत के लिए उपहार कूपन और प्रमाणपत्र प्रदान किए गए।",
          cta: "टीम से संपर्क करें",
        },
        {
          id: "outreach",
          icon: "Megaphone",
          title: "आउटरीच",
          description:
            "खुले विज्ञान के बारे में शब्द फैलाने के लिए भविष्य के संस्करणों में हमारे साथ सहयोग करें।",
          cta: "भविष्य के आउटरीच में शामिल हों",
        },
      ],
    },
    home: {
      hero: {
        title: "राष्ट्रीय विजेताओं की घोषणा!",
        certificate: "अपना प्रमाणपत्र प्राप्त करें",
        closed: "विजेता गैलरी देखें",
      },
      thankyou: {
        title: "धन्यवाद, योगदानकर्ताओं!",
        subtitle: "भारत में पहली विकी विज्ञान प्रतियोगिता को अभूतपूर्व प्रतिक्रिया मिली! 474 व्यक्तियों से 3,700+ प्रविष्टियाँ। हम विज्ञान की अपनी दृष्टि साझा करने के लिए प्रत्येक प्रतिभागी का आभार व्यक्त करते हैं। हमें विजेताओं के लिए गिफ्ट कूपन घोषित करते हुए खुशी हो रही है!",
        uploads: "अंतिम अपलोड आँकड़े",
        contributors: "प्रतिभागी",
        certificateTitle: "प्रमाणपत्र और पुरस्कार!",
        certificateMessage: "प्रिय योगदानकर्ताओं, आपके प्रमाणपत्र तैयार हैं। हम कैमरा और मोबाइल दोनों श्रेणियों में विजेताओं को ₹4,000, ₹3,000 और ₹2,000 के गिफ्ट कूपन प्रदान कर रहे हैं!",
        certificateCta: "अपना प्रमाणपत्र डाउनलोड करें",
        signature: "विकी विज्ञान आयोजन टीम"
      },
      info: {
        title: "आज क्लिक करें, कल बनाएं।",
        subtitle: "की दुनिया का अन्वेषण करें",
        words: ["विज्ञान।", "खोज।", "ज्ञान।", "नवाचार।"],
      },
      prizes: {
        title: "राष्ट्रीय पुरस्कारों की घोषणा",
        subtitle: "आपके अविश्वसनीय समर्पण को देखते हुए, हमें कैमरा और मोबाइल दोनों श्रेणियों के लिए गिफ्ट कूपन पुरस्कार घोषित करते हुए खुशी हो रही है।",
        prizes: [
          {
            icon: "Award",
            title: "प्रथम पुरस्कार - ₹4,000 मूल्य",
            description: "कैमरा और मोबाइल दोनों श्रेणियों में शीर्ष सबमिशन के लिए गिफ्ट कूपन के रूप में प्रदान किया गया।",
          },
          {
            icon: "Camera",
            title: "द्वितीय और तृतीय पुरस्कार",
            description: "दोनों श्रेणियों में द्वितीय स्थान के लिए ₹3,000 और तृतीय स्थान के लिए ₹2,000 के गिफ्ट कूपन।",
          },
          {
            icon: "BookOpen",
            title: "सर्वाधिक अपलोड - ₹2,000",
            description: "सबसे अधिक योग्य वैज्ञानिक अपलोड करने वाले प्रतिभागी के लिए विशेष मान्यता गिफ्ट कूपन।",
          },
        ],
      },
      campaign: {
        title: "अभियान से लाइव",
        description: "कुल फाइलों का विश्लेषण। ये डीएसएलआर और सामान्य अपलोड से प्राप्त छवियां हैं।",
        totalSubmissions: "कुल प्रस्तुतियाँ",
        noSubmissions: "अभी तक कोई सबमिशन नहीं",
        noSubmissionsSub: "विकिमीडिया कॉमन्स पर विजेता गैलरी देखें।",
        viewFull: "छवियां देखें"
      },
      mobileCampaign: {
        title: "मोबाइल से लाइव",
        description: "ये स्मार्टफोन से ली गई मोबाइल प्रस्तुतियाँ हैं।",
      },
      dashboard: {
        title: "अभियान डैशबोर्ड",
        subtitle: "हमारे समुदाय के योगदान के अंतिम प्रभाव को ट्रैक करें।",
        ctaLine1: "क्या आप पूरा विवरण देखना चाहते हैं?",
        ctaLinkText: "डैशबोर्ड देखें",
        ctaLine2: "अभियान की सफलता के मेट्रिक्स देखने के लिए!",
        ctaButton: "अभियान मेट्रिक्स"
      },
      instagram: {
          images: {
              title: "विजेता छवियाँ",
              subtitle: "हमारे 2025 के विजेताओं की आश्चर्यजनक वैज्ञानिक फोटोग्राफी का संग्रह।",
          },
          reels: {
              title: "साइंस रील्स",
              subtitle: "विज्ञान को क्रिया में प्रदर्शित करने वाले छोटे वीडियो देखें।",
          },
          videos: {
              title: "सामुदायिक वीडियो",
              subtitle: "हमारे प्रतिभाशाली योगदानकर्ताओं की गहन वीडियो सामग्री देखें।",
          }
      },
      contact: {
          title: "संपर्क में रहें",
          subtitle: "पुरस्कारों या प्रमाणपत्रों के बारे में प्रश्न हैं? हमें आपसे सुनना अच्छा लगेगा।",
      },
      testimonials: {
        title: "हमारे समुदाय की आवाज़ें",
        subtitle: "सुनें कि शोधकर्ता और फोटोग्राफर इस पहले राष्ट्रीय संस्करण के बारे में क्या कह रहे हैं।"
      },
      vortex: {
        title: "अनदेखे को कैद करें",
        subtitle: "2025 संस्करण समाप्त हो गया है। विज्ञान की सुंदरता को उजागर करने के लिए धन्यवाद।",
        cta: "2025 के विजेता देखें"
      }
    },
  },
};

export type Translations = typeof translations;

export type TranslationType = (typeof translations)['en'];
