

export const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
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
                description: 'Board Member',
                boardLink: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
            },
            {
                name: 'Neechalkaran',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                description: 'Wikipedian & Computational Linguist from Tamilnadu',
            },
            {
                name: 'Satheesh M',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                description: 'Presently doing IT and surveillance projects in Kanniyakumari district',
            },
            {
                name: 'Samiya Ahmed',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                description: 'Deoband Community',
                boardLink: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
            },
            {
                name: 'Kaartic Sivaraam',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                description: 'Tamil Wikipedian, Software Engineer',
            },
            {
                name: 'Santhosh Notagar',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                description: 'HOD & Assistant Professor, Department of Computer Animation, St Aloysius',
                wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru'
            },
            {
                name: 'Osama',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                description: 'Wikipedian',
            },
        ]
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
                'Upload the highest resolution possible (at least 2 megapixels).',
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
        subtitle: 'Have questions or feedback? We\'d love to hear from you.',
        getInTouch: 'Get in Touch',
        p1: 'Fill out the form and our team will get back to you within 24 hours.',
        form: {
            name: 'Full Name',
            namePlaceholder: 'Your Name',
            email: 'Email Address',
            emailPlaceholder: 'your.email@example.com',
            subject: 'Subject',
            subjectPlaceholder: 'Inquiry about...',
            message: 'Message',
            messagePlaceholder: 'Your detailed message...',
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
                social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya'}
            },
            {
                name: 'Gauri Gupta',
                role: 'Lead Organizer',
                social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa'}
            },
            {
                name: 'Suyash Dwivedi',
                role: 'Advisor',
                social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi'}
            },
            {
                name: 'Sai Kiran',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
            },
            {
                name: 'Chinmayee Mishra',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
            },
            {
                name: 'Athul R T',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
            },
            {
                name: 'Uday Dongre',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
            },
            {
                name: 'Pankaj Yadav',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
            },
            {
                name: 'Ashmita Bathre',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
            },
            {
                name: 'Aanchal Patel',
                role: 'Core Organizing Team',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
            },
            {
                name: 'Riddhi Sharma',
                role: 'Core Organizing Team',
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
        { name: 'कैंपस एंबेसडर', href: '/campus-ambassadors'},
        { name: 'टीम के लिए कॉल', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'जूरी', href: '/jury'},
        { name: 'समर्थन करें', href: '/support-us'},
        { name: 'संपर्क', href: '/contact' },
    ],
    learningLinks: [
      { name: 'विकि खाता कैसे बनाएं', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
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
        { name: 'कैंपस एंबेसडर', href: '/campus-ambassadors'},
        { name: 'संपर्क', href: '/contact' },
    ],
    footerSupportLinks: [
        { name: 'प्रायोजन', href: '/support-us#sponsorship'},
        { name: 'उपहार/स्वैग', href: '/support-us#gifts'},
        { name: 'आउटरीच', href: '/support-us#outreach'},
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
        badge: 'भारतीय संदर्भ के लिए परिचय',
        heading: 'विकी विज्ञान प्रतियोगिता 2025 - भारत',
        p1: 'पहली बार, भारत विकी विज्ञान प्रतियोगिता (WSC) का एक राष्ट्रीय संस्करण आयोजित कर रहा है - जो दुनिया की सबसे बड़ी पहलों में से एक है जो विज्ञान, फोटोग्राफी, और मुफ्त ज्ञान को एक साथ लाती है।',
        p2: '2011 में एस्टोनिया में शुरू हुई और बाद में पूरे यूरोप और दुनिया भर में विस्तारित हुई, इस प्रतियोगिता ने हजारों वैज्ञानिकों, शोधकर्ताओं, और उत्साही लोगों को विज्ञान के आश्चर्य को कैद करने वाली छवियों को साझा करने के लिए प्रेरित किया है। सूक्ष्म कोशिकाओं से लेकर ब्रह्मांडीय आकाशगंगाओं तक, ये स्वतंत्र रूप से लाइसेंस प्राप्त योगदान विकिमीडिया कॉमन्स को समृद्ध करते हैं और विश्व स्तर पर खुली शिक्षा का समर्थन करते हैं।',
        p3: 'भारत ने गर्व से पिछले अंतरराष्ट्रीय संस्करणों में योगदान दिया है - भारतीय फोटोग्राफरों और वैज्ञानिकों को मान्यता और पुरस्कार प्राप्त हुए हैं। हालांकि, यह पहली बार है जब भारत अपनी स्थानीय प्रतियोगिता की मेजबानी कर रहा है, जो हमारे देश की वैज्ञानिक भावना और रचनात्मकता को प्रदर्शित करने के लिए समर्पित है।',
        p4: 'विकी विज्ञान प्रतियोगिता 2025 - भारत एक प्रतियोगिता से ज्यादा है। यह शक्तिशाली छवियों, कहानियों, और रचनात्मकता के माध्यम से भारतीय विज्ञान को दुनिया के सामने प्रस्तुत करने का एक सामूहिक प्रयास है।',
        aims: {
            title: 'हमारे उद्देश्य',
            subtitle: 'इस अभियान के माध्यम से, हमारा लक्ष्य है:',
            items: [
                { icon: 'PenSquare', title: 'योगदान को प्रोत्साहित करें', description: 'पूरे भारत में छात्रों, शोधकर्ताओं और उत्साही लोगों को মূল্যবান वैज्ञानिक मीडिया का योगदान करने के लिए प्रोत्साहित करें।' },
                { icon: 'Lightbulb', title: 'जागरूकता पैदा करें', description: 'खुले विज्ञान और मुफ्त ज्ञान के महत्व के बारे में जागरूकता पैदा करें।' },
                { icon: 'Globe', title: 'विरासत का जश्न मनाएं', description: 'भारत की समृद्ध वैज्ञानिक विरासत और चल रहे नवाचारों का जश्न मनाएं।' },
                { icon: 'Handshake', title: 'सहयोग को मजबूत करें', description: 'विकिमीडिया समुदायों, विश्वविद्यालयों, अनुसंधान संस्थानों और संगठनों के बीच सहयोग को मजबूत करें।' }
            ]
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
                description: 'बोर्ड सदस्य',
                boardLink: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
            },
            {
                name: 'नीचलकरन',
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                description: 'तमिलनाडु से विकिपीडियन और कम्प्यूटेशनल भाषाविद्',
            },
            {
                name: 'सतीश एम',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                description: 'वर्तमान में कन्याकुमारी जिले में आईटी और निगरानी परियोजनाओं पर काम कर रहे हैं',
            },
            {
                name: 'सामिया अहमद',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                description: 'देवबंद समुदाय',
                boardLink: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
            },
            {
                name: 'कार्तिक शिवराम',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                description: 'तमिल विकिपीडियन, सॉफ्टवेयर इंजीनियर',
            },
            {
                name: 'संतोष नोटगर',
                image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                description: 'HOD और सहायक प्रोफेसर, कंप्यूटर एनीमेशन विभाग, सेंट अलॉयसियस',
                wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru'
            },
            {
                name: 'ओसामा',
                image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                description: 'विकिपीडियन',
            },
        ]
    },
    affiliates: {
        title: 'विकिमीडिया सहयोगियों के लिए कॉल',
        subtitle: 'हम भारत भर में विकिमीडिया सहयोगियों, उपयोगकर्ता समूहों और संगठनों को विकी विज्ञान प्रतियोगिता 2025 को बढ़ावा देने और समर्थन करने में हमारे साथ सहयोग करने के लिए आमंत्रित कर रहे हैं।',
        partnerHeading: 'हमारे साथ साझेदारी क्यों करें?',
        partnerDescription: 'यह विज्ञान का जश्न मनाने और विकिमीडिया कॉमन्स को स्वतंत्र रूप से लाइसेंस प्राप्त मीडिया से समृद्ध करने का एक अनूठा अवसर है। एक भागीदार के रूप में, आपका समूह भारत की पहली राष्ट्रीय विकी विज्ञान प्रतियोगिता को सफल बनाने में outreach, जागरूकता और सामुदायिक जुड़ाव में मदद करके एक महत्वपूर्ण भूमिका निभा सकता है।',
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
                'संभव उच्चतम रिज़ॉल्यूशन (कम से "2" मेगापिक्सेल) अपलोड करें।',
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
        subtitle: 'प्रश्न या प्रतिक्रिया है? हमें आपसे सुनना अच्छा लगेगा।',
        getInTouch: 'संपर्क में रहें',
        p1: 'फॉर्म भरें और हमारी टीम 24 घंटे के भीतर आपसे संपर्क करेगी।',
        form: {
            name: 'पूरा नाम',
            namePlaceholder: 'आपका नाम',
            email: 'ईमेल पता',
            emailPlaceholder: 'your.email@example.com',
            subject: 'विषय',
            subjectPlaceholder: 'के बारे में पूछताछ...',
            message: 'संदेश',
            messagePlaceholder: 'आपका विस्तृत संदेश...',
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
                social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya'}
            },
            {
                name: 'गौरी गुप्ता',
                role: 'प्रमुख आयोजक',
                social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa'}
            },
            {
                name: 'सुयश द्विवेदी',
                role: 'सलाहकार',
                social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi'}
            },
            {
                name: 'साई किरण',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
            },
            {
                name: 'चिन्मयी मिश्रा',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
            },
            {
                name: 'अतुल आर टी',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
            },
            {
                name: 'उदय डोंगरे',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
            },
            {
                name: 'पंकज यादव',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
            },
            {
                name: 'अस्मिता बाथरे',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
            },
            {
                name: 'आंचल पटेल',
                role: 'कोर आयोजन टीम',
                social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
            },
            {
                name: 'रिद्धि शर्मा',
                role: 'कोर आयोजन टीम',
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
                { id: 1, title: 'सूक्ष्म दुनिया का अन्वेषण करें', description: 'सेलुलर संरचनाओं से लेकर क्रिस्टल संरचनाओं तक, अनदेखी सुंदरता का प्रदर्शन करें।' },
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
};

export type Translations = typeof translations;
