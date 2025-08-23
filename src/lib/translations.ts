

export const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' }, // Bengali
    { code: 'te', name: 'తెలుగు' }, // Telugu
    { code: 'mr', name: 'मराठी' }, // Marathi
    { code: 'ta', name: 'தமிழ்' }, // Tamil
    { code: 'ur', name: 'اردو' }, // Urdu
    { code: 'gu', name: 'ગુજરાતી' }, // Gujarati
    { code: 'kn', name: 'ಕನ್ನಡ' }, // Kannada
    { code: 'or', name: 'ଓଡ଼ିଆ' }, // Odia
    { code: 'pa', name: 'ਪੰਜਾਬੀ' }, // Punjabi
    { code: 'ml', name: 'മലയാളം' }, // Malayalam
    { code: 'as', name: 'অসমীয়া' }, // Assamese
    { code: 'es', name: 'Español' }, // Spanish
    { code: 'fr', name: 'Français' }, // French
    { code: 'et', 'name': 'Eesti' }, // Estonian
    { code: 'de', name: 'Deutsch' }, // German
    { code: 'pt', name: 'Português' }, // Portuguese
] as const;

export const translations = {
  en: {
    mainNavLinks: [
      { name: 'About', href: '/about' },
      { name: 'Competition', href: '/competition' },
      { name: 'Resources', href: '/resources' },
      { name: 'Sponsors', href: '/sponsors' },
    ],
    organizerLinks: [
        { name: 'Meet the Team', href: '/organizers' },
        { name: 'Campus Ambassadors', href: '/campus-ambassadors'},
        { name: 'Call for Team', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'Jury', href: '/jury'},
        { name: 'Support Us', href: '/support-us'},
        { name: 'Contact', href: '/contact' },
    ],
    learningLinks: [
      { name: 'How to create a Wiki account', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
      { name: 'How to use the Upload Wizard', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
      { name: 'Understanding CC Licenses', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
      { name: 'How to add categories', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
    ],
    organizersDropdown: 'Organizers',
    moreDropdown: 'More',
    learningDropdown: 'Learning',
    participateButton: 'Participate',
    footerNavLinks: [
        { name: 'About', href: '/about' },
        { name: 'Competition', href: '/competition' },
        { name: 'Jury', href: '/jury' },
        { name: 'Organizers', href: '/organizers' },
        { name: 'Sponsors', href: '/sponsors' },
        { name: 'Resources', href: '/resources' },
        { name: 'Campus Ambassadors', href: '/campus-ambassadors'},
        { name: 'Contact', href: '/contact' },
    ],
    footerSupportLinks: [
        { name: 'Sponsorship', href: '/support-us#sponsorship'},
        { name: 'Gifts/Swag', href: '/support-us#gifts'},
        { name: 'Outreach', href: '/support-us#outreach'},
    ],
    footerSubtitle: 'Capturing the beauty of science through photography.',
    footerNavHeader: 'Navigation',
    footerSupportHeader: 'Support Us',
    footerContactHeader: 'Contact',
    footerCopyright: 'Wiki Science Competition India. All rights reserved.',
    footerLicense: 'Content is available under CC BY-SA 4.0 unless otherwise noted.',
    footerDeveloperCredit: 'Designed and Developed by',
    about: {
        title: 'About WikiScience India 2025',
        badge: 'Introduction for Indian Context',
        heading: 'Wiki Science Competition 2025 – India',
        p1: 'For the very first time, India is organizing a national edition of the Wiki Science Competition (WSC) — one of the world’s largest initiatives that brings together science, photography, and free knowledge.',
        p2: 'Launched in Estonia in 2011 and later expanded across Europe and worldwide, the competition has inspired thousands of scientists, researchers, and enthusiasts to share images that capture the wonder of science. From microscopic cells to cosmic galaxies, these freely licensed contributions enrich Wikimedia Commons and support open education globally.',
        p3: 'India has proudly contributed to past international editions — with Indian photographers and scientists receiving recognition and awards. However, this is the first time India is hosting its own local competition, dedicated to showcasing the scientific spirit and creativity of our country.',
        p4: 'The Wiki Science Competition 2025 – India is more than a contest. It’s a collective effort to represent Indian science to the world — through powerful images, stories, and creativity.',
        aims: {
            title: 'Our Aims',
            subtitle: 'Through this campaign, we aim to:',
            items: [
                { icon: 'PenSquare', title: 'Encourage Contribution', description: 'Encourage students, researchers, and enthusiasts across India to contribute valuable scientific media.' },
                { icon: 'Lightbulb', title: 'Build Awareness', description: 'Build awareness about the importance of open science and free knowledge.' },
                { icon: 'Globe', title: 'Celebrate Heritage', description: 'Celebrate India’s rich scientific heritage and ongoing innovations.' },
                { icon: 'Handshake', title: 'Strengthen Collaboration', description: 'Strengthen collaboration between Wikimedia communities, universities, research institutes, and organizations.' }
            ]
        },
        supportingOrg: {
            title: 'Supporting Organisation',
            p1: 'Wiki Club SATI (Vidisha, Madhya Pradesh) is acknowledged as the supporting organisation for the first national edition of the Wiki Science Competition 2025 in India. The club has been at the forefront of engaging students and young professionals in the Wikimedia movement, contributing to open knowledge, technical innovation, and community-led initiatives.',
            p2: 'Several members of the Core Organizing Team are associated with Wiki Club SATI, and their continued involvement reflects the club’s commitment to advancing free knowledge and scientific engagement. While the support is non-financial, the organisational capacity, experience, and community networks of Wiki Club SATI play an essential role in enabling this campaign at the national level.'
        }
    },
    campusAmbassadors: {
        title: 'Campus Ambassadors',
        subtitle: 'Meet the passionate leaders driving the Wiki Science Competition in their communities.',
        ambassadors: [
          {
            name: 'Anushka Patel',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
            description: 'Wiki Club SATI',
            boardLink: {
                name: 'Wiki Club SATI',
                url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
            },
          },
          {
            name: 'Neechalkaran',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
            description: 'Wikipedian & Computational Linguist from Tamilnadu',
          },
          {
            name: 'Santhosh Notagar',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
            description: 'HOD & Assistant Professor, Department of Computer Animation, St Aloysius',
            wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
          },
          {
            name: 'Samiya Ahmed',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
            description: 'Deoband Community',
            boardLink: {
                name: 'Deoband Community',
                url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
            },
          },
          {
            name: 'Satheesh M',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            description: 'Presently doing IT and surveillance projects in Kanniyakumari district',
          },
          {
            name: 'Kaartic Sivaraam',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
            description: 'Tamil Wikipedian, Software Engineer',
          },
          {
            name: 'Osama',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
            description: 'Wikipedian',
          },
        ].sort((a, b) => {
            const aHasRealImage = a.image.startsWith('https://upload.wikimedia.org');
            const bHasRealImage = b.image.startsWith('https://upload.wikimedia.org');
            if (aHasRealImage && !bHasRealImage) return -1;
            if (!aHasRealImage && bHasRealImage) return 1;
            return 0;
        })
    },
    affiliates: {
        title: 'Call for Wikimedia Affiliates',
        subtitle: 'We are inviting Wikimedia affiliates, user groups, and organizations across India to collaborate with us in promoting and supporting Wiki Science Competition 2025.',
        partnerHeading: 'Why Partner with Us?',
        partnerDescription: 'This is a unique opportunity to celebrate science and enrich Wikimedia Commons with freely licensed media. As a partner, your group can play a pivotal role in making India\'s first national Wiki Science Competition a success by helping with outreach, awareness, and community engagement.',
        collaborationHeading: 'How You Can Collaborate',
        collaborationPoints: [
            'Engage in online and offline outreach to your networks.',
            'Facilitate uploads from institutions and research bodies.',
            'Organize local workshops, edit-a-thons, or photowalks.',
            'Assist with translation and localization of campaign materials.',
        ],
        formNote: 'This form is intended for recognized Wikimedia affiliates or community groups. Individuals and students should use the',
        campusAmbassadorLink: 'Campus Ambassador form',
        sidebarTitle: 'Partner With Us',
        sidebarDescription: 'Let\'s collaborate to showcase India\'s scientific landscape to the world.',
        deadline: 'Deadline: 31st August 2025',
        cta: 'Open Partnership Form'
    },
    campus: {
        title: 'Call for Campus Ambassadors',
        subtitle: 'Join us as a local outreach coordinator to help promote the Wiki Science Competition 2025 in your institution, community, or network.',
        whoHeading: 'Who are we looking for?',
        whoDescription: 'Campus Ambassadors play a key role in spreading awareness, guiding participants, and optionally organizing awareness sessions or workshops. Whether you’re a Wikimedian, science student, designer, teacher, or simply enthusiastic about open science—we’d love to have you on board!',
        responsibilitiesHeading: 'Responsibilities',
        responsibilities: [
            'Promote the campaign in your institution or community.',
            'Share participation guidelines with potential contributors.',
            'Optionally, organize awareness activities like workshops or photowalks (we can provide support!).',
        ],
        sidebar: {
            title: 'Apply Now',
            description: 'Ready to make an impact? Fill out the form to become a Campus Ambassador.',
            deadline: 'Deadline: 31st August 2025',
            cta: 'Open Application Form'
        },
        cta: {
            text: 'Become a Campus Ambassador',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
        }
    },
    competition: {
        title: 'Competition Details',
        subtitle: 'Everything you need to know to participate and win.',
        howToParticipate: {
            title: 'How to Participate',
            p1: 'If you don\'t have one, you can create a global account that will give you a specific username on all Wikimedia platforms (including Wikimedia Commons) when you log in. As a newly registered user you need to wait at least four days before uploading a video file, while images can be uploaded right after the registration.',
            createAccountLink: 'Create your account here!',
            rulesTitle: 'Participation Rules',
             rules: [
                'Submissions must be your own work, uploaded from your own registered Wikimedia account. For multiple authors, all names must be provided.',
                'Images must be under a free license (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).',
                'All submissions require a clear and accurate scientific description in English. Other languages are welcome too.',
                {
                    text: 'Upload the highest resolution possible (at least 2 megapixels). You can check the megapixel count ',
                    link: {
                        url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                        label: 'here'
                    }
                },
                'Images must not contain watermarks, logos, or added text/graphics (except for scales).',
            ]
        },
        keyDates: {
            title: 'Key Dates',
            timeline: [
                { date: 'November 1, 2025', event: 'Submissions Open' },
                { date: 'December 15, 2025', event: 'Submissions Close' },
                { date: 'January 2026', event: 'Jury Deliberation' },
                { date: 'February 2026', event: 'National Winners Announced' },
            ],
        },
        submitNow: 'Submit Now',
        imageCategories: {
            title: 'Image Categories',
            subtitle: 'You can participate in the following seven categories. Choose the one that best fits your work. See examples below to get inspired.'
        },
        categories: {
            people: { name: 'People in Science', description: 'Scientists in their natural habitat.'},
            microscopy: { name: 'Microscopy Images', description: 'Optical, electron, and scanning probe microscopy images.'},
            nonPhotographic: { name: 'Non-photographic Media', description: 'Audio and video files, computer-generated imagery, etc.'},
            imageSets: { name: 'Image Sets', description: 'Thematically linked images (up to 10) that can be viewed as one set.'},
            wildlife: { name: 'Wildlife & Nature', description: 'Organisms in their natural habitat, including macro photography.'},
            astronomy: { name: 'Astronomy', description: 'Images of stars, celestial events, and the equipment used to capture them.'},
            general: { name: 'General Category', description: 'Everything else, from archaeology to vulcanology.'},
        },
        readyToParticipate: {
            title: 'Ready to Participate?',
            subtitle: 'The stage is set. Your lens is the key. Show us the world through your scientific eyes.',
            cta: 'Submit Your Work',
        },
        supportedBy: 'Supported by:',
    },
    contact: {
        title: 'Contact Us',
        subtitle: 'Have questions or feedback? We\'d love to hear from you. We promise a quick reply!',
        getInTouch: 'Get in Touch',
        p1: 'Fill out the form and our team will get back to you within a few hours. We\'re here to help!',
        form: {
            name: 'Full Name',
            namePlaceholder: 'Your Name',
            email: 'Email Address',
            emailPlaceholder: 'your.email@example.com',
            subject: 'Subject',
            subjectPlaceholder: 'Select a subject for your query',
            otherSubjectPlaceholder: 'Please specify your subject',
            message: 'Message',
            messagePlaceholder: 'Select a pre-written message or \'Other...\'',
            otherMessagePlaceholder: 'Please specify your message',
            selectSubjectFirst: 'Please select a subject first',
            submit: 'Send Message',
            submitting: 'Sending...',
        },
        toast: {
            successTitle: 'Message Sent!',
            successDescription: 'Thank you for contacting us. We will get back to you shortly.',
            errorTitle: 'Error',
            errorDescription: 'Something went wrong. Please try again.',
        }
    },
    organizers: {
        title: 'Meet the Organizers',
        subtitle: 'The dedicated team working behind the scenes to make the first Wiki Science Competition India a grand success.',
        lead_organizers: 'Lead Organizers',
        advisors: 'Advisors',
        core_organizing_team: 'Core Organizing Team',
        team: [
            {
                name: 'Dev Jadiya',
                role: 'Lead Organizer',
                roleKey: 'lead_organizer',
                social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya'}
            },
            {
                name: 'Gauri Gupta',
                role: 'Lead Organizer',
                roleKey: 'lead_organizer',
                social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa'}
            },
            {
                name: 'Suyash Dwivedi',
                role: 'Advisor',
                roleKey: 'advisor',
                social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi'}
            },
            {
                name: 'Sai Kiran',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
            },
            {
                name: 'Chinmayee Mishra',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
            },
            {
                name: 'Athul R T',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
            },
            {
                name: 'Uday Dongre',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
            },
            {
                name: 'Pankaj Yadav',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
            },
            {
                name: 'Ashmita Bathre',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
            },
            {
                name: 'Aanchal Patel',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
            },
            {
                name: 'Riddhi Sharma',
                role: 'Core Organizing Team',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
            }
        ]
    },
    organizersCall: {
        title: 'Call for Organizers',
        subtitle: 'We’re excited to share that India will be organizing its own local edition of this global campaign that promotes science through freely licensed images, videos, and other media on Wikimedia Commons.',
        joinHeading: 'Join the Organizing Team',
        joinDescription: 'To support smooth coordination, outreach, and planning, we’re expanding our organizing team. If you’re interested in contributing to this important initiative, we would love to hear from you.',
        lookingForHeading: 'What We\'re Looking For',
        lookingFor: [
            'Passionate individuals with an interest in science, photography, or open knowledge.',
            'Skills in event planning, outreach, social media management, or content creation.',
            'A collaborative spirit and a desire to make a significant impact.',
        ],
        sidebarTitle: 'Apply Now',
        sidebarDescription: 'Help us shape the first Wiki Science Competition in India.',
        deadline: 'Applications Closed: 15th July 2025',
        cta: 'Applications Closed'
    },
    resources: {
        title: 'Resources',
        subtitle: 'Get inspired by past winners and access helpful materials to prepare your submission.',
        pastWinners: {
            title: 'Gallery of Past Winners',
            winnerLabel: 'Winner',
            winners: [
                { year: 2023, category: 'Astronomy', winner: 'Anjali Sharma' },
                { year: 2023, category: 'Biology', winner: 'Rohan Mehta' },
                { year: 2022, category: 'Chemistry', winner: 'Priya Desai' },
                { year: 2022, category: 'Astronomy', winner: 'Vikram Singh' },
            ]
        },
        learningMaterials: {
            title: 'Learning Materials',
            cta: 'Learn More',
            resources: [
                { title: 'Guide to Science Photography', description: 'Learn the basics of capturing stunning scientific images.', link: '#' },
                { title: 'Understanding Creative Commons', description: 'A quick guide to licensing your work for the competition.', link: '#' },
                { title: 'Image Upload Tutorial', description: 'Step-by-step video on how to submit your photos.', link: '#' },
            ]
        }
    },
    support: {
        title: 'Support Us',
        subtitle: 'Help us make the Wiki Science Competition India 2025 a massive success.',
        options: [
            {
                id: 'sponsorship',
                icon: 'Handshake',
                title: 'Become a Sponsor',
                description: 'Support us with monetary contributions to help cover operational costs, prize money, and event management. We offer various sponsorship tiers with prominent branding opportunities.',
                cta: 'Contact for Sponsorship',
            },
            {
                id: 'gifts',
                icon: 'Gift',
                title: 'Provide Gifts & Swag',
                description: 'Contribute to our prize pool with exciting gifts, vouchers, or branded merchandise (swag) for our winners and participants. Get your brand in the hands of science enthusiasts.',
                cta: 'Offer Gifts',
            },
            {
                id: 'outreach',
                icon: 'Megaphone',
                title: 'Outreach & Marketing',
                description: 'Collaborate with us to spread the word. Help us reach a wider audience through your institutional channels, social media, or marketing expertise.',
                cta: 'Collaborate on Outreach',
            },
        ]
    },
    home: {
        autoscroll: {
            slides: [
                { id: 1, title: 'Explore Microscopic Worlds', description: 'From cellular structures to crystal formations, showcase the unseen beauty.' },
                { id: 2, title: 'Capture Celestial Wonders', description: 'The cosmos is your canvas. Photograph galaxies, nebulae, and planetary events.' },
                { id: 3, title: 'Visualize Complex Data', description: 'Transform raw data into compelling scientific visualizations and infographics.' },
                { id: 4, title: 'Document Human Ingenuity', description: 'Capture scientists at work, innovative lab equipment, and moments of discovery.' },
            ]
        },
        cta: {
            title: 'Get Involved',
            subtitle: 'Be a part of India\'s first national Wiki Science Competition. We\'re looking for passionate individuals and organizations to join us.',
            campus: {
                title: 'Call for Campus Ambassadors',
                description: 'Promote the campaign in your institution, share guidelines, and help organize awareness activities.',
                deadline: 'Deadline: 31st August 2025',
                cta: 'Apply Now'
            },
            affiliates: {
                title: 'Call for Wikimedia Affiliates',
                description: 'Partner with us to promote the campaign, organize local outreach, and help bring impactful scientific contributions from your region.',
                deadline: 'Deadline: 31st August 2025',
                cta: 'Partner With Us'
            }
        },
        info: {
            title: 'Everything You Need to Know',
            subtitle: 'From submission guidelines to jury details, get all the information you need to be a part of this exciting event.',
            cta: 'Find out more',
            sections: [
              { icon: 'Info', title: 'About The Competition', description: 'An annual international science photography competition, bringing together science enthusiasts to share their vision of the world of research.', link: '/about' },
              { icon: 'Target', title: 'How to Participate', description: 'Participation is free and open to everyone. Submit your best science-related images across various categories during the submission period.', link: '/competition' },
              { icon: 'Award', title: 'Prizes & Recognition', description: 'Winners receive national recognition, certificates, and prizes. The best images also advance to the international final.', link: '/competition' },
              { icon: 'Users', title: 'Jury & Criteria', description: 'Our expert jury of scientists and photographers will judge entries based on scientific value, originality, and aesthetic quality.', link: '/jury' },
              { icon: 'History', title: 'Past Winners', description: 'Explore a gallery of previous years\' winning photographs and get inspired by the incredible talent showcased.', link: '/resources' }
            ],
            finalCard: {
                title: 'Ready to Participate?',
                subtitle: 'The stage is set. Your lens is the key. Show us the world through your scientific eyes.',
                cta: 'Submit Your Work'
            }
        },
        prizes: {
            title: 'Prizes & Recognition',
            subtitle: 'Your groundbreaking visuals deserve to be celebrated. Discover what you can win.',
            prizes: [
                { icon: 'Award', title: "National Recognition", description: "Winners will be celebrated on our official platforms and gain national media coverage." },
                { icon: 'Camera', title: "Top-tier Equipment", description: "Exciting photography gear and accessories for the top winners to aid their passion." },
                { icon: 'BookOpen', title: "Publication Feature", description: "Get your work featured in prestigious science magazines and publications." }
            ]
        },
        jury: {
            title: 'Meet the Esteemed Jury',
            description: 'Our panel features a diverse group of renowned scientists, professional photographers, and science communicators from across India. They bring a wealth of experience to ensure a fair and insightful evaluation process.',
            cta: 'View Full Panel'
        }
    }
  },
  hi: {
    mainNavLinks: [
        { name: 'परिचय', href: '/about' },
        { name: 'प्रतियोगिता', href: '/competition' },
        { name: 'संसाधन', href: '/resources' },
        { name: 'प्रायोजक', href: '/sponsors' },
    ],
    organizerLinks: [
        { name: 'टीम से मिलें', href: '/organizers' },
        { name: 'कैंपस एंबेसडर', href: '/campus-ambassadors' },
        { name: 'टीम के लिए कॉल', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'जूरी', href: '/jury' },
        { name: 'समर्थन करें', href: '/support-us' },
        { name: 'संपर्क', href: '/contact' },
    ],
    learningLinks: [
        { name: 'विकी खाता कैसे बनाएं', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
        { name: 'अपलोड विज़ार्ड का उपयोग कैसे करें', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
        { name: 'सीसी लाइसेंस को समझना', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
        { name: 'श्रेणियां कैसे जोड़ें', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
    ],
    organizersDropdown: 'आयोजक',
    moreDropdown: 'अधिक',
    learningDropdown: 'सीखना',
    participateButton: 'भाग लें',
    footerNavLinks: [
        { name: 'परिचय', href: '/about' },
        { name: 'प्रतियोगिता', href: '/competition' },
        { name: 'जूरी', href: '/jury' },
        { name: 'आयोजक', href: '/organizers' },
        { name: 'प्रायोजक', href: '/sponsors' },
        { name: 'संसाधन', href: '/resources' },
        { name: 'कैंपस एंबेसडर', href: '/campus-ambassadors' },
        { name: 'संपर्क', href: '/contact' },
    ],
    footerSupportLinks: [
        { name: 'प्रायोजन', href: '/support-us#sponsorship' },
        { name: 'उपहार/स्वैग', href: '/support-us#gifts' },
        { name: 'आउटरीच', href: '/support-us#outreach' },
    ],
    footerSubtitle: 'फोटोग्राफी के माध्यम से विज्ञान की सुंदरता को कैद करना।',
    footerNavHeader: 'नेविगेशन',
    footerSupportHeader: 'हमारा समर्थन करें',
    footerContactHeader: 'संपर्क',
    footerCopyright: 'विकी विज्ञान प्रतियोगिता भारत। सर्वाधिकार सुरक्षित।',
    footerLicense: 'सामग्री CC BY-SA 4.0 के तहत उपलब्ध है जब तक कि अन्यथा उल्लेख न किया गया हो।',
    footerDeveloperCredit: 'द्वारा डिजाइन और विकसित',
    about: {
        title: 'विकीसाइंस इंडिया 2025 के बारे में',
        badge: 'भारतीय संदर्भ का परिचय',
        heading: 'विकी विज्ञान प्रतियोगिता 2025 – भारत',
        p1: 'पहली बार, भारत विकी विज्ञान प्रतियोगिता (WSC) का राष्ट्रीय संस्करण आयोजित कर रहा है — यह दुनिया की सबसे बड़ी पहलों में से एक है जो विज्ञान, फोटोग्राफी और मुफ्त ज्ञान को एक साथ लाती है।',
        p2: '2011 में एस्टोनिया में शुरू हुई और बाद में पूरे यूरोप और दुनिया भर में विस्तारित हुई, इस प्रतियोगिता ने हजारों वैज्ञानिकों, शोधकर्ताओं और उत्साही लोगों को विज्ञान के आश्चर्य को दर्शाने वाली छवियां साझा करने के लिए प्रेरित किया है। सूक्ष्म कोशिकाओं से लेकर ब्रह्मांडीय आकाशगंगाओं तक, ये स्वतंत्र रूप से लाइसेंस प्राप्त योगदान विकिमीडिया कॉमन्स को समृद्ध करते हैं और विश्व स्तर पर खुली शिक्षा का समर्थन करते हैं।',
        p3: 'भारत ने पिछले अंतर्राष्ट्रीय संस्करणों में गर्व से योगदान दिया है — भारतीय फोटोग्राफरों और वैज्ञानिकों को मान्यता और पुरस्कार प्राप्त हुए हैं। हालाँकि, यह पहली बार है जब भारत अपनी स्थानीय प्रतियोगिता की मेजबानी कर रहा है, जो हमारे देश की वैज्ञानिक भावना और रचनात्मकता को प्रदर्शित करने के लिए समर्पित है।',
        p4: 'विकी विज्ञान प्रतियोगिता 2025 – भारत एक प्रतियोगिता से बढ़कर है। यह शक्तिशाली छवियों, कहानियों और रचनात्मकता के माध्यम से भारतीय विज्ञान को दुनिया के सामने प्रस्तुत करने का एक सामूहिक प्रयास है।',
        aims: {
            title: 'हमारे उद्देश्य',
            subtitle: 'इस अभियान के माध्यम से, हमारा उद्देश्य है:',
            items: [
                { icon: 'PenSquare', title: 'योगदान को प्रोत्साहित करें', description: 'पूरे भारत में छात्रों, शोधकर्ताओं और उत्साही लोगों को बहुमूल्य वैज्ञानिक मीडिया का योगदान करने के लिए प्रोत्साहित करें।' },
                { icon: 'Lightbulb', title: 'जागरूकता बढ़ाएँ', description: 'खुले विज्ञान और मुफ्त ज्ञान के महत्व के बारे में जागरूकता बढ़ाएँ।' },
                { icon: 'Globe', title: 'विरासत का जश्न मनाएँ', description: 'भारत की समृद्ध वैज्ञानिक विरासत और चल रहे नवाचारों का जश्न मनाएँ।' },
                { icon: 'Handshake', title: 'सहयोग को मजबूत करें', description: 'विकिमीडिया समुदायों, विश्वविद्यालयों, अनुसंधान संस्थानों और संगठनों के बीच सहयोग को मजबूत करें।' }
            ]
        },
        supportingOrg: {
            title: 'सहायक संगठन',
            p1: 'विकी क्लब एसएटीआई (विदिशा, मध्य प्रदेश) को भारत में विकी विज्ञान प्रतियोगिता 2025 के पहले राष्ट्रीय संस्करण के लिए सहायक संगठन के रूप में स्वीकार किया गया है। क्लब छात्रों और युवा पेशेवरों को विकिमीडिया आंदोलन में शामिल करने, खुले ज्ञान, तकनीकी नवाचार और समुदाय-आधारित पहलों में योगदान करने में सबसे आगे रहा है।',
            p2: 'कोर आयोजन टीम के कई सदस्य विकी क्लब एसएटीआई से जुड़े हुए हैं, और उनकी निरंतर भागीदारी मुक्त ज्ञान और वैज्ञानिक जुड़ाव को आगे बढ़ाने के लिए क्लब की प्रतिबद्धता को दर्शाती है। जबकि समर्थन गैर-वित्तीय है, विकी क्लब एसएटीआई की संगठनात्मक क्षमता, अनुभव और सामुदायिक नेटवर्क राष्ट्रीय स्तर पर इस अभियान को सक्षम करने में एक आवश्यक भूमिका निभाते हैं।'
        }
    },
    campusAmbassadors: {
        title: 'कैंपस एंबेसडर',
        subtitle: 'अपने समुदायों में विकी विज्ञान प्रतियोगिता को चलाने वाले उत्साही नेताओं से मिलें।',
        ambassadors: [
          {
            name: 'अनुष्का पटेल',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
            description: 'विकी क्लब SATI',
            boardLink: {
                name: 'विकी क्लब SATI',
                url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
            },
          },
          {
            name: 'नीचलकरण',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
            description: 'तमिलनाडु से विकिपीडियन और कम्प्यूटेशनल भाषाविद्',
          },
          {
            name: 'संतोष नोटगर',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
            description: 'विभागाध्यक्ष और सहायक प्रोफेसर, कंप्यूटर एनीमेशन विभाग, सेंट अलॉयसियस',
            wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
          },
           {
            name: 'सामिया अहमद',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
            description: 'देवबंद समुदाय',
            boardLink: {
                name: 'देवबंद समुदाय',
                url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
            },
          },
          {
            name: 'सतीश एम',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            description: 'वर्तमान में कन्याकुमारी जिले में आईटी और निगरानी परियोजनाओं पर काम कर रहे हैं',
          },
          {
            name: 'कार्तिक शिवराम',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
            description: 'तमिल विकिपीडियन, सॉफ्टवेयर इंजीनियर',
          },
          {
            name: 'ओसामा',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
            description: 'विकिपीडियन',
          },
        ].sort((a, b) => {
            const aHasRealImage = a.image.startsWith('https://upload.wikimedia.org');
            const bHasRealImage = b.image.startsWith('https://upload.wikimedia.org');
            if (aHasRealImage && !bHasRealImage) return -1;
            if (!aHasRealImage && bHasRealImage) return 1;
            return 0;
        })
    },
    affiliates: {
        title: 'विकिमीडिया सहयोगियों के लिए कॉल',
        subtitle: 'हम भारत भर में विकिमीडिया सहयोगियों, उपयोगकर्ता समूहों और संगठनों को विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने और समर्थन करने में हमारे साथ सहयोग करने के लिए आमंत्रित कर रहे हैं।',
        partnerHeading: 'हमारे साथ साझेदारी क्यों करें?',
        partnerDescription: 'यह विज्ञान का जश्न मनाने और विकिमीडिया कॉमन्स को स्वतंत्र रूप से लाइसेंस प्राप्त मीडिया से समृद्ध करने का एक अनूठा अवसर है। एक भागीदार के रूप में, आपका समूह भारत की पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता को सफल बनाने में आउटरीच, जागरूकता और सामुदायिक जुड़ाव में मदद करके एक महत्वपूर्ण भूमिका निभा सकता है।',
        collaborationHeading: 'आप कैसे सहयोग कर सकते हैं',
        collaborationPoints: [
            'अपने नेटवर्क पर ऑनलाइन और ऑफलाइन आउटरीच में संलग्न हों।',
            'संस्थानों और अनुसंधान निकायों से अपलोड की सुविधा प्रदान करें।',
            'स्थानीय कार्यशालाएं, एडिट-ए-थॉन, या फोटोवॉक आयोजित करें।',
            'अभियान सामग्री के अनुवाद और स्थानीयकरण में सहायता करें।',
        ],
        formNote: 'यह फॉर्म मान्यता प्राप्त विकिमीडिया सहयोगियों या सामुदायिक समूहों के लिए है। व्यक्तियों और छात्रों को',
        campusAmbassadorLink: 'कैंपस एंबेसडर फॉर्म',
        sidebarTitle: 'हमारे साथ भागीदार बनें',
        sidebarDescription: 'आइए भारत के वैज्ञानिक परिदृश्य को दुनिया के सामने प्रदर्शित करने के लिए सहयोग करें।',
        deadline: 'अंतिम तिथि: 31 अगस्त 2025',
        cta: 'साझेदारी फॉर्म खोलें'
    },
    campus: {
        title: 'कैंपस एंबेसडर के लिए कॉल',
        subtitle: 'अपने संस्थान, समुदाय या नेटवर्क में विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने में मदद करने के लिए एक स्थानीय आउटरीच समन्वयक के रूप में हमसे जुड़ें।',
        whoHeading: 'हम किसे ढूंढ रहे हैं?',
        whoDescription: 'कैंपस एंबेसडर जागरूकता फैलाने, प्रतिभागियों का मार्गदर्शन करने और वैकल्पिक रूप से जागरूकता सत्र या कार्यशालाएं आयोजित करने में महत्वपूर्ण भूमिका निभाते हैं। चाहे आप विकिमीडियन हों, विज्ञान के छात्र हों, डिजाइनर हों, शिक्षक हों, या बस खुले विज्ञान के प्रति उत्साही हों - हमें आपको अपने साथ पाकर खुशी होगी!',
        responsibilitiesHeading: 'जिम्मेदारियाँ',
        responsibilities: [
            'अपने संस्थान या समुदाय में अभियान को बढ़ावा दें।',
            'संभावित योगदानकर्ताओं के साथ भागीदारी दिशानिर्देश साझा करें।',
            'वैकल्पिक रूप से, कार्यशालाओं या फोटोवॉक जैसी जागरूकता गतिविधियाँ आयोजित करें (हम सहायता प्रदान कर सकते हैं!)।',
        ],
        sidebar: {
            title: 'अभी आवेदन करें',
            description: 'प्रभाव डालने के लिए तैयार हैं? कैंपस एंबेसडर बनने के लिए फॉर्म भरें।',
            deadline: 'अंतिम तिथि: 31 अगस्त 2025',
            cta: 'आवेदन पत्र खोलें'
        },
        cta: {
            text: 'कैंपस एंबेसडर बनें',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
        }
    },
    competition: {
        title: 'प्रतियोगिता विवरण',
        subtitle: 'भाग लेने और जीतने के लिए आपको जो कुछ भी जानना चाहिए।',
        howToParticipate: {
            title: 'कैसे भाग लें',
            p1: 'यदि आपके पास कोई खाता नहीं है, तो आप एक वैश्विक खाता बना सकते हैं जो आपको लॉग इन करने पर सभी विकिमीडिया प्लेटफार्मों (विकिमीडिया कॉमन्स सहित) पर एक विशिष्ट उपयोगकर्ता नाम देगा। एक नए पंजीकृत उपयोगकर्ता के रूप में आपको वीडियो फ़ाइल अपलोड करने से पहले कम से कम चार दिन इंतजार करना होगा, जबकि छवियां पंजीकरण के तुरंत बाद अपलोड की जा सकती हैं।',
            createAccountLink: 'अपना खाता यहाँ बनाएँ!',
            rulesTitle: 'भागीदारी के नियम',
            rules: [
                'प्रस्तुतियाँ आपका अपना काम होनी चाहिए, जो आपके अपने पंजीकृत विकिमीडिया खाते से अपलोड की गई हों। एक से अधिक लेखकों के मामले में, सभी नाम प्रदान किए जाने चाहिए।',
                'छवियां एक मुफ्त लाइसेंस (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) के तहत होनी चाहिए।',
                'सभी प्रस्तुतियों के लिए अंग्रेजी में एक स्पष्ट और सटीक वैज्ञानिक विवरण की आवश्यकता होती है। अन्य भाषाओं में विवरण का भी स्वागत है।',
                {
                    text: 'संभव उच्चतम रिज़ॉल्यूशन (कम से कम 2 मेगापिक्सेल) अपलोड करें। आप मेगापिक्सेल गणना की जाँच ',
                    link: {
                        url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                        label: 'यहाँ'
                    }
                },
                'छवियों में वॉटरमार्क, लोगो, या अतिरिक्त पाठ/ग्राफिक्स (पैमानों को छोड़कर) नहीं होने चाहिए।',
            ]
        },
        keyDates: {
            title: 'प्रमुख तिथियां',
            timeline: [
                { date: '1 नवंबर, 2025', event: 'प्रस्तुतियाँ खुलीं' },
                { date: '15 दिसंबर, 2025', event: 'प्रस्तुतियाँ बंद' },
                { date: 'जनवरी 2026', event: 'जूरी विचार-विमर्श' },
                { date: 'फरवरी 2026', event: 'राष्ट्रीय विजेताओं की घोषणा' },
            ],
        },
        submitNow: 'अभी सबमिट करें',
        imageCategories: {
            title: 'छवि श्रेणियाँ',
            subtitle: 'आप निम्नलिखित सात श्रेणियों में भाग ले सकते हैं। वह चुनें जो आपके काम के लिए सबसे उपयुक्त हो। प्रेरित होने के लिए नीचे दिए गए उदाहरण देखें।'
        },
        categories: {
            people: { name: 'विज्ञान में लोग', description: 'वैज्ञानिक अपने प्राकृतिक आवास में।' },
            microscopy: { name: 'माइक्रोस्कोपी छवियां', description: 'ऑप्टिकल, इलेक्ट्रॉन, और स्कैनिंग जांच माइक्रोस्कोपी छवियां।' },
            nonPhotographic: { name: 'गैर-फोटोग्राफिक मीडिया', description: 'ऑडियो और वीडियो फाइलें, कंप्यूटर-जनित इमेजरी, आदि।' },
            imageSets: { name: 'छवि सेट', description: 'विषयगत रूप से जुड़ी छवियां (10 तक) जिन्हें एक सेट के रूप में देखा जा सकता है।' },
            wildlife: { name: 'वन्यजीव और प्रकृति', description: 'जीव अपने प्राकृतिक आवास में, मैक्रो फोटोग्राफी सहित।' },
            astronomy: { name: 'खगोल विज्ञान', description: 'तारों, खगोलीय घटनाओं, और उन्हें पकड़ने के लिए उपयोग किए जाने वाले उपकरणों की छवियां।' },
            general: { name: 'सामान्य श्रेणी', description: 'पुरातत्व से लेकर ज्वालामुखी विज्ञान तक बाकी सब कुछ।' },
        },
        readyToParticipate: {
            title: 'भाग लेने के लिए तैयार हैं?',
            subtitle: 'मंच तैयार है। आपका लेंस कुंजी है। हमें अपनी वैज्ञानिक आंखों से दुनिया दिखाएं।',
            cta: 'अपना काम जमा करें',
        },
        supportedBy: 'द्वारा समर्थित:',
    },
    contact: {
        title: 'हमसे संपर्क करें',
        subtitle: 'प्रश्न या प्रतिक्रिया है? हमें आपसे सुनना अच्छा लगेगा। हम त्वरित उत्तर का वादा करते हैं!',
        getInTouch: 'संपर्क में रहें',
        p1: 'फॉर्म भरें और हमारी टीम कुछ घंटों के भीतर आपसे संपर्क करेगी। हम यहाँ मदद के लिए हैं!',
        form: {
            name: 'पूरा नाम',
            namePlaceholder: 'आपका नाम',
            email: 'ईमेल पता',
            emailPlaceholder: 'your.email@example.com',
            subject: 'विषय',
            subjectPlaceholder: 'अपनी क्वेरी के लिए एक विषय चुनें',
            otherSubjectPlaceholder: 'कृपया अपना विषय निर्दिष्ट करें',
            message: 'संदेश',
            messagePlaceholder: 'एक पूर्व-लिखित संदेश चुनें या \'अन्य...\'',
            otherMessagePlaceholder: 'कृपया अपना संदेश निर्दिष्ट करें',
            selectSubjectFirst: 'कृपया पहले एक विषय चुनें',
            submit: 'संदेश भेजें',
            submitting: 'भेज रहा है...',
        },
        toast: {
            successTitle: 'संदेश भेजा गया!',
            successDescription: 'हमसे संपर्क करने के लिए धन्यवाद। हम शीघ्र ही आपसे संपर्क करेंगे।',
            errorTitle: 'त्रुटि',
            errorDescription: 'कुछ गलत हुआ। कृपया पुन: प्रयास करें।',
        }
    },
    organizers: {
        title: 'आयोजकों से मिलें',
        subtitle: 'पहली विकी विज्ञान प्रतियोगिता भारत को एक बड़ी सफलता बनाने के लिए पर्दे के पीछे काम करने वाली समर्पित टीम।',
        lead_organizers: 'प्रमुख आयोजक',
        advisors: 'सलाहकार',
        core_organizing_team: 'कोर आयोजन टीम',
        team: [
            {
                name: 'देव जड़िया',
                role: 'प्रमुख आयोजक',
                roleKey: 'lead_organizer',
                social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
            },
            {
                name: 'गौरी गुप्ता',
                role: 'प्रमुख आयोजक',
                roleKey: 'lead_organizer',
                social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
            },
            {
                name: 'सुयश द्विवेदी',
                role: 'सलाहकार',
                roleKey: 'advisor',
                social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
            },
            {
                name: 'साई किरण',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
            },
            {
                name: 'चिन्मयी मिश्रा',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
            },
            {
                name: 'अतुल आर टी',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
            },
            {
                name: 'उदय डोंगरे',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
            },
            {
                name: 'पंकज यादव',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
            },
            {
                name: 'अस्मिता बाथरे',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
            },
            {
                name: 'आंचल पटेल',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
            },
            {
                name: 'रिद्धि शर्मा',
                role: 'कोर आयोजन टीम',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
            }
        ]
    },
    organizersCall: {
        title: 'आयोजकों के लिए कॉल',
        subtitle: 'हम यह साझा करने के लिए उत्साहित हैं कि भारत इस वैश्विक अभियान का अपना स्थानीय संस्करण आयोजित करेगा जो विकिमीडिया कॉमन्स पर स्वतंत्र रूप से लाइसेंस प्राप्त छवियों, वीडियो और अन्य मीडिया के माध्यम से विज्ञान को बढ़ावा देता है।',
        joinHeading: 'आयोजन टीम में शामिल हों',
        joinDescription: 'सुचारू समन्वय, आउटरीच और योजना का समर्थन करने के लिए, हम अपनी आयोजन टीम का विस्तार कर रहे हैं। यदि आप इस महत्वपूर्ण पहल में योगदान करने में रुचि रखते हैं, तो हमें आपसे सुनना अच्छा लगेगा।',
        lookingForHeading: 'हम क्या खोज रहे हैं',
        lookingFor: [
            'विज्ञान, फोटोग्राफी, या खुले ज्ञान में रुचि रखने वाले भावुक व्यक्ति।',
            'इवेंट प्लानिंग, आउटरीच, सोशल मीडिया प्रबंधन, या सामग्री निर्माण में कौशल।',
            'एक सहयोगी भावना और एक महत्वपूर्ण प्रभाव डालने की इच्छा।',
        ],
        sidebarTitle: 'अभी आवेदन करें',
        sidebarDescription: 'भारत में पहली विकी विज्ञान प्रतियोगिता को आकार देने में हमारी मदद करें।',
        deadline: 'आवेदन बंद: 15 जुलाई 2025',
        cta: 'आवेदन बंद'
    },
    resources: {
        title: 'संसाधन',
        subtitle: 'पिछले विजेताओं से प्रेरित हों और अपनी प्रस्तुति तैयार करने के लिए सहायक सामग्री तक पहुँचें।',
        pastWinners: {
            title: 'पिछले विजेताओं की गैलरी',
            winnerLabel: 'विजेता',
            winners: [
                { year: 2023, category: 'खगोल विज्ञान', winner: 'अंजलि शर्मा' },
                { year: 2023, category: 'जीव विज्ञान', winner: 'रोहन मेहता' },
                { year: 2022, category: 'रसायन विज्ञान', winner: 'प्रिया देसाई' },
                { year: 2022, category: 'खगोल विज्ञान', winner: 'विक्रम सिंह' },
            ]
        },
        learningMaterials: {
            title: 'सीखने की सामग्री',
            cta: 'और जानें',
            resources: [
                { title: 'विज्ञान फोटोग्राफी के लिए गाइड', description: 'आश्चर्यजनक वैज्ञानिक छवियों को कैप्चर करने की मूल बातें जानें।', link: '#' },
                { title: 'क्रिएटिव कॉमन्स को समझना', description: 'प्रतियोगिता के लिए अपने काम को लाइसेंस देने के लिए एक त्वरित गाइड।', link: '#' },
                { title: 'छवि अपलोड ट्यूटोरियल', description: 'अपनी तस्वीरों को कैसे सबमिट करें, इस पर चरण-दर-चरण वीडियो।', link: '#' },
            ]
        }
    },
    support: {
        title: 'हमारा समर्थन करें',
        subtitle: 'विकी विज्ञान प्रतियोगिता भारत 2025 को एक बड़ी सफलता बनाने में हमारी मदद करें।',
        options: [
            {
                id: 'sponsorship',
                icon: 'Handshake',
                title: 'प्रायोजक बनें',
                description: 'परिचालन लागत, पुरस्कार राशि और इवेंट प्रबंधन को कवर करने में मदद के लिए मौद्रिक योगदान के साथ हमारा समर्थन करें। हम प्रमुख ब्रांडिंग अवसरों के साथ विभिन्न प्रायोजन स्तर प्रदान करते हैं।',
                cta: 'प्रायोजन के लिए संपर्क करें',
            },
            {
                id: 'gifts',
                icon: 'Gift',
                title: 'उपहार और स्वैग प्रदान करें',
                description: 'हमारे विजेताओं और प्रतिभागियों के लिए रोमांचक उपहार, वाउचर, या ब्रांडेड मर्चेंडाइज (स्वैग) के साथ हमारे पुरस्कार पूल में योगदान करें। अपने ब्रांड को विज्ञान के प्रति उत्साही लोगों के हाथों में पहुंचाएं।',
                cta: 'उपहार प्रदान करें',
            },
            {
                id: 'outreach',
                icon: 'Megaphone',
                title: 'आउटरीच और मार्केटिंग',
                description: 'शब्द फैलाने के लिए हमारे साथ सहयोग करें। अपने संस्थागत चैनलों, सोशल मीडिया या मार्केटिंग विशेषज्ञता के माध्यम से व्यापक दर्शकों तक पहुंचने में हमारी सहायता करें।',
                cta: 'आउटरीच पर सहयोग करें',
            },
        ]
    },
    home: {
        autoscroll: {
            slides: [
                { id: 1, title: 'सूक्ष्म दुनिया का अन्वेषण करें', description: 'कोशिकीय संरचनाओं से लेकर क्रिस्टल संरचनाओं तक, अनदेखी सुंदरता का प्रदर्शन करें।' },
                { id: 2, title: 'खगोलीय चमत्कारों को कैद करें', description: 'ब्रह्मांड आपका कैनवास है। आकाशगंगाओं, नीहारिकाओं और ग्रहों की घटनाओं की तस्वीर लें।' },
                { id: 3, title: 'जटिल डेटा की कल्पना करें', description: 'कच्चे डेटा को सम्मोहक वैज्ञानिक विज़ुअलाइज़ेशन और इन्फOGRAPHICS में बदलें।' },
                { id: 4, title: 'मानव सरलता का दस्तावेजीकरण करें', description: 'काम पर वैज्ञानिकों, नवीन प्रयोगशाला उपकरणों और खोज के क्षणों को कैद करें।' },
            ]
        },
        cta: {
            title: 'शामिल हों',
            subtitle: 'भारत की पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता का हिस्सा बनें। हम भावुक व्यक्तियों और संगठनों की तलाश में हैं जो हमसे जुड़ें।',
            campus: {
                title: 'कैंपस एंबेसडर के लिए कॉल',
                description: 'अपने संस्थान में अभियान को बढ़ावा दें, दिशानिर्देश साझा करें, और जागरूकता गतिविधियों को आयोजित करने में मदद करें।',
                deadline: 'अंतिम तिथि: 31 अगस्त 2025',
                cta: 'अभी आवेदन करें'
            },
            affiliates: {
                title: 'विकिमीडिया सहयोगियों के लिए कॉल',
                description: 'अभियान को बढ़ावा देने, स्थानीय आउटरीच आयोजित करने और अपने क्षेत्र से प्रभावशाली वैज्ञानिक योगदान लाने में मदद करने के लिए हमारे साथ भागीदार बनें।',
                deadline: 'अंतिम तिथि: 31 अगस्त 2025',
                cta: 'हमारे साथ भागीदार बनें'
            }
        },
        info: {
            title: 'आपको जो कुछ भी जानना चाहिए',
            subtitle: 'प्रस्तुति दिशानिर्देशों से लेकर जूरी विवरण तक, इस रोमांचक कार्यक्रम का हिस्सा बनने के लिए आवश्यक सभी जानकारी प्राप्त करें।',
            cta: 'और अधिक जानकारी प्राप्त करें',
            sections: [
              { icon: 'Info', title: 'प्रतियोगिता के बारे में', description: 'एक वार्षिक अंतर्राष्ट्रीय विज्ञान फोटोग्राफी प्रतियोगिता, जो विज्ञान के प्रति उत्साही लोगों को अनुसंधान की दुनिया की अपनी दृष्टि साझा करने के लिए एक साथ लाती है।', link: '/about' },
              { icon: 'Target', title: 'कैसे भाग लें', description: 'भागीदारी मुफ्त है और सभी के लिए खुली है। प्रस्तुति अवधि के दौरान विभिन्न श्रेणियों में अपनी सर्वश्रेष्ठ विज्ञान-संबंधी छवियां जमा करें।', link: '/competition' },
              { icon: 'Award', title: 'पुरस्कार और मान्यता', description: 'विजेताओं को राष्ट्रीय मान्यता, प्रमाण पत्र और पुरस्कार मिलते हैं। सर्वश्रेष्ठ छवियां अंतर्राष्ट्रीय फाइनल में भी आगे बढ़ती हैं।', link: '/competition' },
              { icon: 'Users', title: 'जूरी और मानदंड', description: 'वैज्ञानिकों और फोटोग्राफरों की हमारी विशेषज्ञ जूरी वैज्ञानिक मूल्य, मौलिकता और सौंदर्य गुणवत्ता के आधार पर प्रविष्टियों का न्याय करेगी।', link: '/jury' },
              { icon: 'History', title: 'पिछले विजेता', description: 'पिछले वर्षों की विजेता तस्वीरों की एक गैलरी देखें और प्रदर्शित अविश्वसनीय प्रतिभा से प्रेरित हों।', link: '/resources' }
            ],
            finalCard: {
                title: 'भाग लेने के लिए तैयार हैं?',
                subtitle: 'मंच तैयार है। आपका लेंस कुंजी है। हमें अपनी वैज्ञानिक आंखों से दुनिया दिखाएं।',
                cta: 'अपना काम जमा करें'
            }
        },
        prizes: {
            title: 'पुरस्कार और मान्यता',
            subtitle: 'आपके अभूतपूर्व दृश्यों का जश्न मनाया जाना चाहिए। जानें कि आप क्या जीत सकते हैं।',
            prizes: [
                { icon: 'Award', title: "राष्ट्रीय मान्यता", description: "विजेताओं को हमारे आधिकारिक प्लेटफार्मों पर मनाया जाएगा और राष्ट्रीय मीडिया कवरेज प्राप्त होगा।" },
                { icon: 'Camera', title: "शीर्ष स्तरीय उपकरण", description: "शीर्ष विजेताओं के लिए उनके जुनून में सहायता के लिए रोमांचक फोटोग्राफी गियर और सहायक उपकरण।" },
                { icon: 'BookOpen', title: "प्रकाशन फ़ीचर", description: "प्रतिष्ठित विज्ञान पत्रिकाओं और प्रकाशनों में अपने काम को चित्रित करवाएं।" }
            ]
        },
        jury: {
            title: 'प्रतिष्ठित जूरी से मिलें',
            description: 'हमारे पैनल में पूरे भारत से प्रसिद्ध वैज्ञानिकों, पेशेवर फोटोग्राफरों और विज्ञान संचारकों का एक विविध समूह है। वे एक निष्पक्ष और व्यावहारिक मूल्यांकन प्रक्रिया सुनिश्चित करने के लिए अनुभव का खजाना लाते हैं।',
            cta: 'पूर्ण पैनल देखें'
        }
    }
  },
  bn: {
    mainNavLinks: [
      { name: 'সম্পর্কে', href: '/about' },
      { name: 'প্রতিযোগিতা', href: '/competition' },
      { name: 'সম্পদ', href: '/resources' },
      { name: 'পৃষ্ঠপোষক', href: '/sponsors' },
    ],
    organizerLinks: [
        { name: 'টিমের সাথে দেখা করুন', href: '/organizers' },
        { name: 'ক্যাম্পাস অ্যাম্বাসেডর', href: '/campus-ambassadors'},
        { name: 'টিমের জন্য আহ্বান', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'জুরি', href: '/jury'},
        { name: 'আমাদের সমর্থন করুন', href: '/support-us'},
        { name: 'যোগাযোগ', href: '/contact' },
    ],
    learningLinks: [
      { name: 'কীভাবে একটি উইকি অ্যাকাউন্ট তৈরি করবেন', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
      { name: 'কীভাবে আপলোড উইজার্ড ব্যবহার করবেন', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
      { name: 'সিসি লাইসেন্স বোঝা', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
      { name: 'কীভাবে বিভাগ যুক্ত করবেন', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
    ],
    organizersDropdown: 'আয়োজক',
    moreDropdown: 'আরও',
    learningDropdown: 'শেখা',
    participateButton: 'অংশগ্রহণ করুন',
    footerNavLinks: [
        { name: 'সম্পর্কে', href: '/about' },
        { name: 'প্রতিযোগিতা', href: '/competition' },
        { name: 'জুরি', href: '/jury' },
        { name: 'আয়োজক', href: '/organizers' },
        { name: 'পৃষ্ঠপোষক', href: '/sponsors' },
        { name: 'সম্পদ', href: '/resources' },
        { name: 'ক্যাম্পাস অ্যাম্বাসেডর', href: '/campus-ambassadors'},
        { name: 'যোগাযোগ', href: '/contact' },
    ],
    footerSupportLinks: [
        { name: 'পৃষ্ঠপোষকতা', href: '/support-us#sponsorship'},
        { name: 'উপহার/সোয়াগ', href: '/support-us#gifts'},
        { name: 'প্রচার', href: '/support-us#outreach'},
    ],
    footerSubtitle: 'ফটোগ্রাফির মাধ্যমে বিজ্ঞানের সৌন্দর্য ধারণ করা।',
    footerNavHeader: 'নেভিগেশন',
    footerSupportHeader: 'আমাদের সমর্থন করুন',
    footerContactHeader: 'যোগাযোগ',
    footerCopyright: 'উইকি সায়েন্স প্রতিযোগিতা ভারত। সর্বস্বত্ব সংরক্ষিত।',
    footerLicense: 'অন্যথায় উল্লেখ না থাকলে বিষয়বস্তু CC BY-SA 4.0 এর অধীনে উপলব্ধ।',
    footerDeveloperCredit: 'ডিজাইন এবং ডেভেলপ করেছেন',
    about: {
        title: 'উইকিসায়েন্স ইন্ডিয়া 2025 সম্পর্কে',
        badge: 'ভারতীয় প্রেক্ষাপটের জন্য ভূমিকা',
        heading: 'উইকি সায়েন্স প্রতিযোগিতা 2025 – ভারত',
        p1: 'প্রথমবারের মতো, ভারত উইকি সায়েন্স প্রতিযোগিতার (WSC) একটি জাতীয় সংস্করণ আয়োজন করছে — যা বিশ্বের অন্যতম বৃহত্তম উদ্যোগ যা বিজ্ঞান, ফটোগ্রাফি এবং মুক্ত জ্ঞানকে একত্রিত করে।',
        p2: '২০১১ সালে এস্তোনিয়ায় চালু হয়েছিল এবং পরে ইউরোপ এবং বিশ্বজুড়ে প্রসারিত হয়েছিল, এই প্রতিযোগিতা হাজার হাজার বিজ্ঞানী, গবেষক এবং উত্সাহীদের বিজ্ঞানের বিস্ময়কর চিত্রগুলি ভাগ করে নিতে অনুপ্রাণিত করেছে। মাইক্রোস্কোপিক কোষ থেকে মহাজাগতিক ছায়াপথ পর্যন্ত, এই অবাধ লাইসেন্সযুক্ত অবদানগুলি উইকিমিডিয়া কমন্সকে সমৃদ্ধ করে এবং বিশ্বব্যাপী উন্মুক্ত শিক্ষাকে সমর্থন করে।',
        p3: 'ভারত গর্বের সাথে অতীতের আন্তর্জাতিক সংস্করণগুলিতে অবদান রেখেছে — ভারতীয় ফটোগ্রাফার এবং বিজ্ঞানীরা স্বীকৃতি এবং পুরস্কার পেয়েছেন। যাইহোক, এই প্রথমবার ভারত তার নিজস্ব স্থানীয় প্রতিযোগিতার আয়োজন করছে, যা আমাদের দেশের বৈজ্ঞানিক চেতনা এবং সৃজনশীলতা প্রদর্শনের জন্য নিবেদিত।',
        p4: 'উইকি সায়েন্স প্রতিযোগিতা 2025 – ভারত একটি প্রতিযোগিতার চেয়েও বেশি কিছু। এটি শক্তিশালী চিত্র, গল্প এবং সৃজনশীলতার মাধ্যমে ভারতীয় বিজ্ঞানকে বিশ্বের সামনে তুলে ধরার একটি সম্মিলিত প্রচেষ্টা।',
        aims: {
            title: 'আমাদের লক্ষ্য',
            subtitle: 'এই প্রচারের মাধ্যমে, আমাদের লক্ষ্য হল:',
            items: [
                { icon: 'PenSquare', title: 'অবদানকে উৎসাহিত করুন', description: 'ভারত জুড়ে ছাত্র, গবেষক এবং উত্সাহীদের মূল্যবান বৈজ্ঞানিক মিডিয়া অবদান করতে উৎসাহিত করুন।' },
                { icon: 'Lightbulb', title: 'সচেতনতা তৈরি করুন', description: 'উন্মুক্ত বিজ্ঞান এবং মুক্ত জ্ঞানের গুরুত্ব সম্পর্কে সচেতনতা তৈরি করুন।' },
                { icon: 'Globe', title: 'ঐতিহ্য উদযাপন করুন', description: 'ভারতের সমৃদ্ধ বৈজ্ঞানিক ঐতিহ্য এবং চলমান উদ্ভাবন উদযাপন করুন।' },
                { icon: 'Handshake', title: 'সহযোগিতা জোরদার করুন', description: 'উইকিমিডিয়া সম্প্রদায়, বিশ্ববিদ্যালয়, গবেষণা প্রতিষ্ঠান এবং সংস্থাগুলির মধ্যে সহযোগিতা জোরদার করুন।' }
            ]
        },
        supportingOrg: {
            title: 'সহায়ক সংস্থা',
            p1: 'উইকি ক্লাব সাতি (विदिशा, मध्य प्रदेश) ভারতে উইকি সায়েন্স প্রতিযোগিতা ২০২৫-এর প্রথম জাতীয় সংস্করণের জন্য সহায়ক সংস্থা হিসাবে স্বীকৃত। ক্লাবটি উইকিমিডিয়া আন্দোলনে ছাত্র এবং তরুণ পেশাদারদের জড়িত করার, মুক্ত জ্ঞানে অবদান রাখার, প্রযুক্তিগত উদ্ভাবন এবং সম্প্রদায়-নেতৃত্বাধীন উদ্যোগে অগ্রণী ভূমিকা পালন করছে।',
            p2: 'কোর আয়োজক দলের বেশ কয়েকজন সদস্য উইকি ক্লাব সাতির সাথে যুক্ত, এবং তাদের অব্যাহত সম্পৃক্ততা মুক্ত জ্ঞান এবং বৈজ্ঞানিক সম্পৃক্ততা এগিয়ে নেওয়ার জন্য ক্লাবের প্রতিশ্রুতি প্রতিফলিত করে। যদিও সমর্থনটি অ-আর্থিক, উইকি ক্লাব সাতির সাংগঠনিক ক্ষমতা, অভিজ্ঞতা এবং সম্প্রদায় নেটওয়ার্ক জাতীয় পর্যায়ে এই প্রচারাভিযানকে সক্ষম করতে একটি অপরিহার্য ভূমিকা পালন করে।'
        }
    },
    campusAmbassadors: {
        title: 'ক্যাম্পাস অ্যাম্বাসেডর',
        subtitle: 'তাদের সম্প্রদায়ে উইকি সায়েন্স প্রতিযোগিতাকে চালিতকারী উৎসাহী নেতাদের সাথে দেখা করুন।',
        ambassadors: [
          {
            name: 'অনুষ্কা প্যাটেল',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
            description: 'উইকি ক্লাব সাতি',
            boardLink: {
                name: 'উইকি ক্লাব সাতি',
                url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
            },
          },
          {
            name: 'নীলচলকরন',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
            description: 'তামিলনাড়ুর উইকিপিডিয়ান এবং কম্পিউটেশনাল ভাষাবিদ',
          },
          {
            name: 'সন্তোষ নোটাগর',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
            meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
            description: 'বিভাগীয় প্রধান ও সহকারী অধ্যাপক, কম্পিউটার অ্যানিমেশন বিভাগ, সেন্ট অ্যালয়সিয়াস',
            wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
          },
          {
            name: 'সামিয়া আহমেদ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
            description: 'দেওবন্দ সম্প্রদায়',
            boardLink: {
                name: 'দেওবন্দ সম্প্রদায়',
                url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
            },
          },
          {
            name: 'সতীশ এম',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            description: 'বর্তমানে কন্যাকুমারী জেলায় আইটি এবং নজরদারি প্রকল্প করছেন',
          },
          {
            name: 'কার্তিক சிவরাম',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
            description: 'তামিল উইকিপিডিয়ান, সফটওয়্যার ইঞ্জিনিয়ার',
          },
          {
            name: 'ওসামা',
            image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
            meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
            description: 'উইকিপিডিয়ান',
          },
        ].sort((a, b) => {
            const aHasRealImage = a.image.startsWith('https://upload.wikimedia.org');
            const bHasRealImage = b.image.startsWith('https://upload.wikimedia.org');
            if (aHasRealImage && !bHasRealImage) return -1;
            if (!aHasRealImage && bHasRealImage) return 1;
            return 0;
        })
    },
    affiliates: {
        title: 'উইকিমিডিয়া অ্যাফিলিয়েটদের জন্য আহ্বান',
        subtitle: 'আমরা ভারত জুড়ে উইকিমিডিয়া অ্যাফিলিয়েট, ব্যবহারকারী গোষ্ঠী এবং সংস্থাগুলিকে উইকি সায়েন্স প্রতিযোগিতা 2025 প্রচার ও সমর্থনে আমাদের সাথে সহযোগিতা করার জন্য আমন্ত্রণ জানাচ্ছি।',
        partnerHeading: 'কেন আমাদের সাথে অংশীদার হবেন?',
        partnerDescription: 'এটি বিজ্ঞান উদযাপন এবং অবাধ লাইসেন্সযুক্ত মিডিয়ার মাধ্যমে উইকিমিডিয়া কমন্সকে সমৃদ্ধ করার একটি অনন্য সুযোগ। একজন অংশীদার হিসাবে, আপনার গোষ্ঠী ভারতের প্রথম জাতীয় উইকি সায়েন্স প্রতিযোগিতাকে সফল করতে প্রচার, সচেতনতা এবং সম্প্রদায়ের সম্পৃক্ততায় সহায়তা করে একটি গুরুত্বপূর্ণ ভূমিকা পালন করতে পারে।',
        collaborationHeading: 'আপনি কীভাবে সহযোগিতা করতে পারেন',
        collaborationPoints: [
            'আপনার নেটওয়ার্কে অনলাইন এবং অফলাইন প্রচারে নিযুক্ত হন।',
            'প্রতিষ্ঠান এবং গবেষণা সংস্থা থেকে আপলোড সহজতর করুন।',
            'স্থানীয় কর্মশালা, এডিট-এ-থন, বা ফটোওয়াক আয়োজন করুন।',
            'প্রচারণার উপকরণ অনুবাদ এবং স্থানীয়করণে সহায়তা করুন।',
        ],
        formNote: 'এই ফর্মটি স্বীকৃত উইকিমিডিয়া অ্যাফিলিয়েট বা সম্প্রদায় গোষ্ঠীর জন্য। ব্যক্তি এবং ছাত্রদের',
        campusAmbassadorLink: 'ক্যাম্পাস অ্যাম্বাসেডর ফর্ম',
        sidebarTitle: 'আমাদের সাথে অংশীদার হন',
        sidebarDescription: 'আসুন ভারতের বৈজ্ঞানিক ল্যান্ডস্কেপ বিশ্বের কাছে তুলে ধরতে সহযোগিতা করি।',
        deadline: 'শেষ তারিখ: ৩১ আগস্ট ২০২৫',
        cta: 'অংশীদারিত্ব ফর্ম খুলুন'
    },
    campus: {
        title: 'ক্যাম্পাস অ্যাম্বাসেডরদের জন্য আহ্বান',
        subtitle: 'আপনার প্রতিষ্ঠান, সম্প্রদায় বা নেটওয়ার্কে উইকি সায়েন্স প্রতিযোগিতা 2025 প্রচারে সহায়তা করার জন্য একজন স্থানীয় প্রচার সমন্বয়কারী হিসাবে আমাদের সাথে যোগ দিন।',
        whoHeading: 'আমরা কাদের খুঁজছি?',
        whoDescription: 'ক্যাম্পাস অ্যাম্বাসেডররা সচেতনতা ছড়িয়ে দিতে, অংশগ্রহণকারীদের গাইড করতে এবং ঐচ্ছিকভাবে সচেতনতা সেশন বা কর্মশালা আয়োজন করতে গুরুত্বপূর্ণ ভূমিকা পালন করে। আপনি একজন উইকিমিডিয়ান, বিজ্ঞানের ছাত্র, ডিজাইনার, শিক্ষক, বা কেবল উন্মুক্ত বিজ্ঞান সম্পর্কে উত্সাহী হোন না কেন - আমরা আপনাকে বোর্ডে পেতে চাই!',
        responsibilitiesHeading: 'দায়িত্ব',
        responsibilities: [
            'আপনার প্রতিষ্ঠান বা সম্প্রদায়ে প্রচারণা প্রচার করুন।',
            'সম্ভাব্য অবদানকারীদের সাথে অংশগ্রহণের নির্দেশিকা শেয়ার করুন।',
            'ঐচ্ছিকভাবে, কর্মশালা বা ফটোওয়াকের মতো সচেতনতামূলক কার্যক্রম আয়োজন করুন (আমরা সহায়তা প্রদান করতে পারি!)।',
        ],
        sidebar: {
            title: 'এখনই আবেদন করুন',
            description: 'প্রভাব ফেলতে প্রস্তুত? ক্যাম্পাস অ্যাম্বাসেডর হতে ফর্মটি পূরণ করুন।',
            deadline: 'শেষ তারিখ: ৩১ আগস্ট ২০২৫',
            cta: 'আবেদনপত্র খুলুন'
        },
        cta: {
            text: 'ক্যাম্পাস অ্যাম্বাসেডর হন',
            href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
        }
    },
    competition: {
        title: 'প্রতিযোগিতার বিবরণ',
        subtitle: 'অংশগ্রহণ এবং জেতার জন্য আপনার যা কিছু জানা দরকার।',
        howToParticipate: {
            title: 'কীভাবে অংশগ্রহণ করবেন',
            p1: 'আপনার যদি একটি না থাকে তবে আপনি একটি বিশ্বব্যাপী অ্যাকাউন্ট তৈরি করতে পারেন যা আপনাকে লগ ইন করার সময় সমস্ত উইকিমিডিয়া প্ল্যাটফর্মে (উইকিমিডিয়া কমন্স সহ) একটি নির্দিষ্ট ব্যবহারকারীর নাম দেবে। একজন নতুন নিবন্ধিত ব্যবহারকারী হিসাবে আপনাকে একটি ভিডিও ফাইল আপলোড করার আগে কমপক্ষে চার দিন অপেক্ষা করতে হবে, যখন নিবন্ধনের পরেই ছবি আপলোড করা যাবে।',
            createAccountLink: 'আপনার অ্যাকাউন্ট এখানে তৈরি করুন!',
            rulesTitle: 'অংশগ্রহণের নিয়ম',
            rules: [
                'জমা দেওয়া অবশ্যই আপনার নিজের কাজ হতে হবে, আপনার নিজের নিবন্ধিত উইকিমিডিয়া অ্যাকাউন্ট থেকে আপলোড করা। একাধিক লেখকের জন্য, সমস্ত নাম প্রদান করতে হবে।',
                'ছবিগুলি একটি মুক্ত লাইসেন্সের (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) অধীনে থাকতে হবে।',
                'সমস্ত জমার জন্য ইংরেজিতে একটি স্পষ্ট এবং নির্ভুল বৈজ্ঞানিক বিবরণ প্রয়োজন। অন্যান্য ভাষায় বিবরণও স্বাগত।',
                {
                    text: 'সম্ভাব্য সর্বোচ্চ রেজোলিউশন (কমপক্ষে 2 মেগাপিক্সেল) আপলোড করুন। আপনি মেগাপিক্সেল গণনা পরীক্ষা করতে পারেন ',
                    link: {
                        url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                        label: 'এখানে'
                    }
                },
                'ছবিতে ওয়াটারমার্ক, লোগো, বা যুক্ত করা পাঠ্য/গ্রাফিক্স (স্কেল ব্যতীত) থাকা উচিত নয়।',
            ]
        },
        keyDates: {
            title: 'গুরুত্বপূর্ণ তারিখ',
            timeline: [
                { date: '১ নভেম্বর, ২০২৫', event: 'জমা দেওয়া শুরু' },
                { date: '১৫ ডিসেম্বর, ২০২৫', event: 'জমা দেওয়া বন্ধ' },
                { date: 'জানুয়ারী ২০২৬', event: 'জুরি বিবেচনা' },
                { date: 'ফেব্রুয়ারী ২০২৬', event: 'জাতীয় বিজয়ীদের ঘোষণা' },
            ],
        },
        submitNow: 'এখনই জমা দিন',
        imageCategories: {
            title: 'ছবির বিভাগ',
            subtitle: 'আপনি নিম্নলিখিত সাতটি বিভাগে অংশগ্রহণ করতে পারেন। আপনার কাজের জন্য সবচেয়ে উপযুক্ত একটি চয়ন করুন। অনুপ্রাণিত হতে নীচের উদাহরণগুলি দেখুন।'
        },
        categories: {
            people: { name: 'বিজ্ঞানে মানুষ', description: 'বিজ্ঞানীরা তাদের প্রাকৃতিক বাসস্থানে।' },
            microscopy: { name: 'মাইক্রোস্কোপি ছবি', description: 'অপটিক্যাল, ইলেকট্রন, এবং স্ক্যানিং প্রোব মাইক্রোস্কোপি ছবি।' },
            nonPhotographic: { name: 'অ-ফটোগ্রাফিক মিডিয়া', description: 'অডিও এবং ভিডিও ফাইল, কম্পিউটার-জেনারেটেড চিত্রাবলী, ইত্যাদি।' },
            imageSets: { name: 'ছবির সেট', description: 'বিষয়গতভাবে লিঙ্কযুক্ত ছবি (১০ পর্যন্ত) যা এক সেট হিসাবে দেখা যেতে পারে।' },
            wildlife: { name: 'বন্যপ্রাণী ও প্রকৃতি', description: 'জীব তাদের প্রাকৃতিক বাসস্থানে, ম্যাক্রো ফটোগ্রাফি সহ।' },
            astronomy: { name: 'জ্যোতির্বিজ্ঞান', description: 'তারা, মহাজাগতিক ঘটনা এবং সেগুলি ধারণ করতে ব্যবহৃত সরঞ্জামগুলির ছবি।' },
            general: { name: 'সাধারণ বিভাগ', description: 'প্রত্নতত্ত্ব থেকে আগ্নেয়গিরিবিদ্যা পর্যন্ত সবকিছু।' },
        },
        readyToParticipate: {
            title: 'অংশগ্রহণ করতে প্রস্তুত?',
            subtitle: 'মঞ্চ প্রস্তুত। আপনার লেন্স হল চাবিকাঠি। আপনার বৈজ্ঞানিক চোখে আমাদের বিশ্ব দেখান।',
            cta: 'আপনার কাজ জমা দিন',
        },
        supportedBy: 'দ্বারা সমর্থিত:',
    },
    contact: {
        title: 'যোগাযোগ করুন',
        subtitle: 'প্রশ্ন বা প্রতিক্রিয়া আছে? আমরা আপনার কাছ থেকে শুনতে চাই। আমরা দ্রুত উত্তরের প্রতিশ্রুতি দিচ্ছি!',
        getInTouch: 'যোগাযোগ করুন',
        p1: 'ফর্মটি পূরণ করুন এবং আমাদের দল কয়েক ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করবে। আমরা সাহায্য করতে এখানে আছি!',
        form: {
            name: 'পুরো নাম',
            namePlaceholder: 'আপনার নাম',
            email: 'ইমেল ঠিকানা',
            emailPlaceholder: 'your.email@example.com',
            subject: 'বিষয়',
            subjectPlaceholder: 'আপনার প্রশ্নের জন্য একটি বিষয় নির্বাচন করুন',
            otherSubjectPlaceholder: 'অনুগ্রহ করে আপনার বিষয় উল্লেখ করুন',
            message: 'বার্তা',
            messagePlaceholder: 'একটি পূর্ব-লিখিত বার্তা নির্বাচন করুন বা \'অন্যান্য...\'',
            otherMessagePlaceholder: 'অনুগ্রহ করে আপনার বার্তা উল্লেখ করুন',
            selectSubjectFirst: 'অনুগ্রহ করে প্রথমে একটি বিষয় নির্বাচন করুন',
            submit: 'বার্তা পাঠান',
            submitting: 'পাঠানো হচ্ছে...',
        },
        toast: {
            successTitle: 'বার্তা পাঠানো হয়েছে!',
            successDescription: 'আমাদের সাথে যোগাযোগ করার জন্য ধন্যবাদ। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',
            errorTitle: 'ত্রুটি',
            errorDescription: 'কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        }
    },
    organizers: {
        title: 'আয়োজকদের সাথে দেখা করুন',
        subtitle: 'প্রথম উইকি সায়েন্স প্রতিযোগিতা ভারতকে একটি বিশাল সাফল্য করার জন্য পর্দার আড়ালে কাজ করা নিবেদিত দল।',
        lead_organizers: 'প্রধান আয়োজক',
        advisors: 'উপদেষ্টা',
        core_organizing_team: 'কোর আয়োজক দল',
        team: [
            {
                name: 'দেব জাদিয়া',
                role: 'প্রধান আয়োজক',
                roleKey: 'lead_organizer',
                social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
            },
            {
                name: 'গৌরী গুপ্তা',
                role: 'প্রধান আয়োজক',
                roleKey: 'lead_organizer',
                social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
            },
            {
                name: 'সুয়শ দ্বিবেদী',
                role: 'উপদেষ্টা',
                roleKey: 'advisor',
                social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
            },
            {
                name: 'সাই কিরণ',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
            },
            {
                name: 'চিন্ময়ী মিশ্র',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
            },
            {
                name: 'অতুল আর টি',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
            },
            {
                name: 'উদয় ডংগ্রে',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
            },
            {
                name: 'পঙ্কজ যাদব',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
            },
            {
                name: 'অস্মিতা বাথরে',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
            },
            {
                name: 'আঁচল প্যাটেল',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
            },
            {
                name: 'ঋদ্ধি শর্মা',
                role: 'কোর আয়োজক দল',
                roleKey: 'core_team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
            }
        ]
    },
    organizersCall: {
        title: 'আয়োজকদের জন্য আহ্বান',
        subtitle: 'আমরা জানাতে পেরে উত্তেজিত যে ভারত এই বিশ্বব্যাপী প্রচারণার নিজস্ব স্থানীয় সংস্করণ আয়োজন করবে যা উইকিমিডিয়া কমন্সে অবাধ লাইসেন্সযুক্ত ছবি, ভিডিও এবং অন্যান্য মিডিয়ার মাধ্যমে বিজ্ঞানকে প্রচার করে।',
        joinHeading: 'আয়োজক দলে যোগ দিন',
        joinDescription: 'মসৃণ সমন্বয়, প্রচার এবং পরিকল্পনা সমর্থন করার জন্য, আমরা আমাদের আয়োজক দল প্রসারিত করছি। আপনি যদি এই গুরুত্বপূর্ণ উদ্যোগে অবদান রাখতে আগ্রহী হন, আমরা আপনার কাছ থেকে শুনতে চাই।',
        lookingForHeading: 'আমরা কী খুঁজছি',
        lookingFor: [
            'বিজ্ঞান, ফটোগ্রাফি বা মুক্ত জ্ঞানে আগ্রহী উৎসাহী ব্যক্তি।',
            'ইভেন্ট পরিকল্পনা, প্রচার, সোশ্যাল মিডিয়া ম্যানেজমেন্ট বা কন্টেন্ট তৈরিতে দক্ষতা।',
            'একটি সহযোগী মনোভাব এবং একটি উল্লেখযোগ্য প্রভাব ফেলার ইচ্ছা।',
        ],
        sidebarTitle: 'এখনই আবেদন করুন',
        sidebarDescription: 'ভারতে প্রথম উইকি সায়েন্স প্রতিযোগিতা গঠনে আমাদের সাহায্য করুন।',
        deadline: 'আবেদন বন্ধ: ১৫ জুলাই ২০২৫',
        cta: 'আবেদন বন্ধ'
    },
    resources: {
        title: 'সম্পদ',
        subtitle: 'অতীতের বিজয়ীদের কাছ থেকে অনুপ্রাণিত হন এবং আপনার জমা দেওয়ার জন্য সহায়ক উপকরণ অ্যাক্সেস করুন।',
        pastWinners: {
            title: 'অতীতের বিজয়ীদের গ্যালারি',
            winnerLabel: 'বিজয়ী',
            winners: [
                { year: 2023, category: 'জ্যোতির্বিজ্ঞান', winner: 'অঞ্জলি শর্মা' },
                { year: 2023, category: 'জীববিজ্ঞান', winner: 'রোহন মেহতা' },
                { year: 2022, category: 'রসায়ন', winner: 'প্রিয়া দেশাই' },
                { year: 2022, category: 'জ্যোতির্বিজ্ঞান', winner: 'বিক্রম সিং' },
            ]
        },
        learningMaterials: {
            title: 'শেখার উপকরণ',
            cta: 'আরও জানুন',
            resources: [
                { title: 'বিজ্ঞান ফটোগ্রাফির জন্য গাইড', description: 'অত্যাশ্চর্য বৈজ্ঞানিক ছবি তোলার মূল বিষয়গুলি শিখুন।', link: '#' },
                { title: 'ক্রিয়েটিভ কমন্স বোঝা', description: 'প্রতিযোগিতার জন্য আপনার কাজ লাইসেন্স করার জন্য একটি দ্রুত গাইড।', link: '#' },
                { title: 'ছবি আপলোড টিউটোরিয়াল', description: 'কীভাবে আপনার ছবি জমা দেবেন তার উপর ধাপে ধাপে ভিডিও।', link: '#' },
            ]
        }
    },
    support: {
        title: 'আমাদের সমর্থন করুন',
        subtitle: 'উইকি সায়েন্স প্রতিযোগিতা ভারত ২০২৫ কে একটি বিশাল সাফল্য করতে আমাদের সাহায্য করুন।',
        options: [
            {
                id: 'sponsorship',
                icon: 'Handshake',
                title: 'পৃষ্ঠপোষক হন',
                description: 'পরিচালন ব্যয়, পুরস্কারের অর্থ এবং ইভেন্ট পরিচালনার জন্য আর্থিক অবদানের মাধ্যমে আমাদের সমর্থন করুন। আমরা বিশিষ্ট ব্র্যান্ডিং সুযোগ সহ বিভিন্ন পৃষ্ঠপোষকতা স্তর অফার করি।',
                cta: 'পৃষ্ঠপোষকতার জন্য যোগাযোগ করুন',
            },
            {
                id: 'gifts',
                icon: 'Gift',
                title: 'উপহার ও সোয়াগ প্রদান করুন',
                description: 'আমাদের বিজয়ী এবং অংশগ্রহণকারীদের জন্য উত্তেজনাপূর্ণ উপহার, ভাউচার বা ব্র্যান্ডেড পণ্য (সোয়াগ) দিয়ে আমাদের পুরস্কার পুলে অবদান রাখুন। আপনার ব্র্যান্ড বিজ্ঞান উত্সাহীদের হাতে তুলে দিন।',
                cta: 'উপহার অফার করুন',
            },
            {
                id: 'outreach',
                icon: 'Megaphone',
                title: 'প্রচার ও বিপণন',
                description: 'শব্দটি ছড়িয়ে দিতে আমাদের সাথে সহযোগিতা করুন। আপনার প্রাতিষ্ঠানিক চ্যানেল, সোশ্যাল মিডিয়া বা বিপণন দক্ষতার মাধ্যমে আমাদের একটি বৃহত্তর দর্শকদের কাছে পৌঁছাতে সহায়তা করুন।',
                cta: 'প্রচারে সহযোগিতা করুন',
            },
        ]
    },
    home: {
        autoscroll: {
            slides: [
                { id: 1, title: 'মাইক্রোস্কোপিক বিশ্ব অন্বেষণ করুন', description: 'সেলুলার কাঠামো থেকে স্ফটিক গঠন পর্যন্ত, অদেখা সৌন্দর্য প্রদর্শন করুন।' },
                { id: 2, title: 'মহাজাগতিক বিস্ময় ক্যাপচার করুন', description: 'মহাবিশ্ব আপনার ক্যানভাস। ছায়াপথ, নীহারিকা এবং গ্রহের ঘটনাগুলির ছবি তুলুন।' },
                { id: 3, title: 'জটিল ডেটা কল্পনা করুন', description: 'কাঁচা ডেটাকে আকর্ষণীয় বৈজ্ঞানিক ভিজ্যুয়ালাইজেশন এবং ইনফোগ্রাফিক্সে রূপান্তর করুন।' },
                { id: 4, title: 'মানুষের চতুরতা নথিভুক্ত করুন', description: 'কাজে থাকা বিজ্ঞানী, উদ্ভাবনী ল্যাব সরঞ্জাম এবং আবিষ্কারের মুহূর্তগুলি ক্যাপচার করুন।' },
            ]
        },
        cta: {
            title: 'জড়িত হন',
            subtitle: 'ভারতের প্রথম জাতীয় উইকি সায়েন্স প্রতিযোগিতার অংশ হন। আমরা আমাদের সাথে যোগ দেওয়ার জন্য উত্সাহী ব্যক্তি এবং সংস্থা খুঁজছি।',
            campus: {
                title: 'ক্যাম্পাস অ্যাম্বাসেডরদের জন্য আহ্বান',
                description: 'আপনার প্রতিষ্ঠানে প্রচারণা প্রচার করুন, নির্দেশিকা শেয়ার করুন এবং সচেতনতামূলক কার্যক্রম আয়োজনে সহায়তা করুন।',
                deadline: 'শেষ তারিখ: ৩১ আগস্ট ২০২৫',
                cta: 'এখনই আবেদন করুন'
            },
            affiliates: {
                title: 'উইকিমিডিয়া অ্যাফিলিয়েটদের জন্য আহ্বান',
                description: 'প্রচারণা প্রচার, স্থানীয় প্রচার আয়োজন এবং আপনার অঞ্চল থেকে প্রভাবশালী বৈজ্ঞানিক অবদান আনতে সহায়তা করার জন্য আমাদের সাথে অংশীদার হন।',
                deadline: 'শেষ তারিখ: ৩১ আগস্ট ২০২৫',
                cta: 'আমাদের সাথে অংশীদার হন'
            }
        },
        info: {
            title: 'আপনার যা কিছু জানা দরকার',
            subtitle: 'জমা দেওয়ার নির্দেশিকা থেকে জুরির বিবরণ পর্যন্ত, এই উত্তেজনাপূর্ণ ইভেন্টের অংশ হতে আপনার প্রয়োজনীয় সমস্ত তথ্য পান।',
            cta: 'আরও জানুন',
            sections: [
              { icon: 'Info', title: 'প্রতিযোগিতা সম্পর্কে', description: 'একটি বার্ষিক আন্তর্জাতিক বিজ্ঞান ফটোগ্রাফি প্রতিযোগিতা, যা বিজ্ঞান উত্সাহীদের গবেষণার জগতের তাদের দৃষ্টিভঙ্গি ভাগ করে নেওয়ার জন্য একত্রিত করে।', link: '/about' },
              { icon: 'Target', title: 'কীভাবে অংশগ্রহণ করবেন', description: 'অংশগ্রহণ বিনামূল্যে এবং সকলের জন্য উন্মুক্ত। জমা দেওয়ার সময়কালে বিভিন্ন বিভাগে আপনার সেরা বিজ্ঞান-সম্পর্কিত ছবি জমা দিন।', link: '/competition' },
              { icon: 'Award', title: 'পুরস্কার ও স্বীকৃতি', description: 'বিজয়ীরা জাতীয় স্বীকৃতি, সার্টিফিকেট এবং পুরস্কার পান। সেরা ছবিগুলি আন্তর্জাতিক ফাইনালেও অগ্রসর হয়।', link: '/competition' },
              { icon: 'Users', title: 'জুরি ও মানদণ্ড', description: 'আমাদের বিজ্ঞানী এবং ফটোগ্রাফারদের বিশেষজ্ঞ জুরি বৈজ্ঞানিক মান, মৌলিকত্ব এবং নান্দনিক মানের উপর ভিত্তি করে এন্ট্রি বিচার করবে।', link: '/jury' },
              { icon: 'History', title: 'অতীতের বিজয়ী', description: 'পূর্ববর্তী বছরের বিজয়ী ফটোগ্রাফগুলির একটি গ্যালারি অন্বেষণ করুন এবং প্রদর্শিত অবিশ্বাস্য প্রতিভা দ্বারা অনুপ্রাণিত হন।', link: '/resources' }
            ],
            finalCard: {
                title: 'অংশগ্রহণ করতে প্রস্তুত?',
                subtitle: 'মঞ্চ প্রস্তুত। আপনার লেন্স হল চাবিকাঠি। আপনার বৈজ্ঞানিক চোখে আমাদের বিশ্ব দেখান।',
                cta: 'আপনার কাজ জমা দিন'
            }
        },
        prizes: {
            title: 'পুরস্কার ও স্বীকৃতি',
            subtitle: 'আপনার যুগান্তকারী ভিজ্যুয়ালগুলি উদযাপিত হওয়ার যোগ্য। আপনি কী জিততে পারেন তা আবিষ্কার করুন।',
            prizes: [
                { icon: 'Award', title: "জাতীয় স্বীকৃতি", description: "বিজয়ীদের আমাদের অফিসিয়াল প্ল্যাটফর্মে উদযাপন করা হবে এবং জাতীয় মিডিয়া কভারেজ পাবে।" },
                { icon: 'Camera', title: "শীর্ষ-স্তরের সরঞ্জাম", description: "শীর্ষ বিজয়ীদের তাদের আবেগকে সহায়তা করার জন্য উত্তেজনাপূর্ণ ফটোগ্রাফি গিয়ার এবং আনুষাঙ্গিক।" },
                { icon: 'BookOpen', title: "প্রকাশনা বৈশিষ্ট্য", description: " प्रतिष्ठित বিজ্ঞান পত্রিকা এবং প্রকাশনাগুলিতে আপনার কাজ বৈশিষ্ট্যযুক্ত করুন।" }
            ]
        },
        jury: {
            title: 'সম্মানিত জুরির সাথে দেখা করুন',
            description: 'আমাদের প্যানেলে ভারত জুড়ে প্রখ্যাত বিজ্ঞানী, পেশাদার ফটোগ্রাফার এবং বিজ্ঞান যোগাযোগকারীদের একটি বৈচিত্র্যময় দল রয়েছে। তারা একটি ন্যায্য এবং অন্তর্দৃষ্টিপূর্ণ মূল্যায়ন প্রক্রিয়া নিশ্চিত করার জন্য অভিজ্ঞতার ভান্ডার নিয়ে আসে।',
            cta: 'সম্পূর্ণ প্যানেল দেখুন'
        }
    }
  },
};

export type Translations = typeof translations;
