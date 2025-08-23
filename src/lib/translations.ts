

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
            { name: 'Campus Ambassadors', href: '/campus-ambassadors' },
            { name: 'Call for Team', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'Jury', href: '/jury' },
            { name: 'Support Us', href: '/support-us' },
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
            { name: 'Campus Ambassadors', href: '/campus-ambassadors' },
            { name: 'Contact', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'Sponsorship', href: '/support-us#sponsorship' },
            { name: 'Gifts/Swag', href: '/support-us#gifts' },
            { name: 'Outreach', href: '/support-us#outreach' },
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
                people: { name: 'People in Science', description: 'Scientists in their natural habitat.' },
                microscopy: { name: 'Microscopy Images', description: 'Optical, electron, and scanning probe microscopy images.' },
                nonPhotographic: { name: 'Non-photographic Media', description: 'Audio and video files, computer-generated imagery, etc.' },
                imageSets: { name: 'Image Sets', description: 'Thematically linked images (up to 10) that can be viewed as one set.' },
                wildlife: { name: 'Wildlife & Nature', description: 'Organisms in their natural habitat, including macro photography.' },
                astronomy: { name: 'Astronomy', description: 'Images of stars, celestial events, and the equipment used to capture them.' },
                general: { name: 'General Category', description: 'Everything else, from archaeology to vulcanology.' },
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
                    id: 'dev_jadiya',
                    name: 'Dev Jadiya',
                    role: 'Lead Organizer',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'Gauri Gupta',
                    role: 'Lead Organizer',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'Suyash Dwivedi',
                    role: 'Advisor',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'Sai Kiran',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'Chinmayee Mishra',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'Athul R T',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'Uday Dongre',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'Pankaj Yadav',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'Ashmita Bathre',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'Aanchal Patel',
                    role: 'Core Organizing Team',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
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
            ]
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
                    id: 'dev_jadiya',
                    name: 'देव जड़िया',
                    role: 'प्रमुख आयोजक',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'गौरी गुप्ता',
                    role: 'प्रमुख आयोजक',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'सुयश द्विवेदी',
                    role: 'सलाहकार',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'साई किरण',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'चिन्मयी मिश्रा',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'अतुल आर टी',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'उदय डोंगरे',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'पंकज यादव',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'अस्मिता बाथरे',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'आंचल पटेल',
                    role: 'कोर आयोजन टीम',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
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
            { name: 'ক্যাম্পাস অ্যাম্বাসেডর', href: '/campus-ambassadors' },
            { name: 'টিমের জন্য আহ্বান', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'জুরি', href: '/jury' },
            { name: 'আমাদের সমর্থন করুন', href: '/support-us' },
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
            { name: 'ক্যাম্পাস অ্যাম্বাসেডর', href: '/campus-ambassadors' },
            { name: 'যোগাযোগ', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'পৃষ্ঠপোষকতা', href: '/support-us#sponsorship' },
            { name: 'উপহার/সোয়াগ', href: '/support-us#gifts' },
            { name: 'প্রচার', href: '/support-us#outreach' },
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
            ]
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
                    id: 'dev_jadiya',
                    name: 'দেব জাদিয়া',
                    role: 'প্রধান আয়োজক',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'গৌরী গুপ্তা',
                    role: 'প্রধান আয়োজক',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'সুয়শ দ্বিবেদী',
                    role: 'উপদেষ্টা',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'সাই কিরণ',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'চিন্ময়ী মিশ্র',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'অতুল আর টি',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'উদয় ডংগ্রে',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'পঙ্কজ যাদব',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'অস্মিতা বাথরে',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'আঁচল প্যাটেল',
                    role: 'কোর আয়োজক দল',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
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
    te: {
        mainNavLinks: [
            { name: 'గురించి', href: '/about' },
            { name: 'పోటీ', href: '/competition' },
            { name: 'వనరులు', href: '/resources' },
            { name: 'ప్రాయోజకులు', href: '/sponsors' },
        ],
        organizerLinks: [
            { name: 'జట్టును కలవండి', href: '/organizers' },
            { name: 'క్యాంపస్ అంబాసిడర్లు', href: '/campus-ambassadors' },
            { name: 'జట్టు కోసం పిలుపు', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'జ్యూరీ', href: '/jury' },
            { name: 'మాకు మద్దతు ఇవ్వండి', href: '/support-us' },
            { name: 'సంప్రదించండి', href: '/contact' },
        ],
        learningLinks: [
            { name: 'వికీ ఖాతాను ఎలా సృష్టించాలి', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
            { name: 'అప్‌లోడ్ విజార్డ్‌ను ఎలా ఉపయోగించాలి', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
            { name: 'CC లైసెన్సులను అర్థం చేసుకోవడం', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
            { name: 'వర్గాలను ఎలా జోడించాలి', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
        ],
        organizersDropdown: 'నిర్వాహకులు',
        moreDropdown: 'మరిన్ని',
        learningDropdown: 'నేర్చుకోవడం',
        participateButton: 'పాల్గొనండి',
        footerNavLinks: [
            { name: 'గురించి', href: '/about' },
            { name: 'పోటీ', href: '/competition' },
            { name: 'జ్యూరీ', href: '/jury' },
            { name: 'నిర్వాహకులు', href: '/organizers' },
            { name: 'ప్రాయోజకులు', href: '/sponsors' },
            { name: 'వనరులు', href: '/resources' },
            { name: 'క్యాంపస్ అంబాసిడర్లు', href: '/campus-ambassadors' },
            { name: 'సంప్రదించండి', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'ప్రాయోజకత్వం', href: '/support-us#sponsorship' },
            { name: 'బహుమతులు/వస్తువులు', href: '/support-us#gifts' },
            { name: 'ప్రచారం', href: '/support-us#outreach' },
        ],
        footerSubtitle: 'ఫోటోగ్రఫీ ద్వారా సైన్స్ సౌందర్యాన్ని సంగ్రహించడం.',
        footerNavHeader: 'నావిగేషన్',
        footerSupportHeader: 'మాకు మద్దతు ఇవ్వండి',
        footerContactHeader: 'సంప్రదించండి',
        footerCopyright: 'వికీ సైన్స్ కాంపిటీషన్ ఇండియా. సర్వ హక్కులు ప్రత్యేకించబడినవి.',
        footerLicense: 'ఇతరత్రా పేర్కొనకపోతే కంటెంట్ CC BY-SA 4.0 కింద అందుబాటులో ఉంది.',
        footerDeveloperCredit: 'రూపకల్పన మరియు అభివృద్ధి చేసినది',
        about: {
            title: 'వికీసైన్స్ ఇండియా 2025 గురించి',
            badge: 'భారతీయ సందర్భం కోసం పరిచయం',
            heading: 'వికీ సైన్స్ పోటీ 2025 – భారతదేశం',
            p1: 'మొట్టమొదటిసారిగా, భారతదేశం వికీ సైన్స్ కాంపిటీషన్ (WSC) యొక్క జాతీయ ఎడిషన్‌ను నిర్వహిస్తోంది — ఇది సైన్స్, ఫోటోగ్రఫీ మరియు స్వేచ్ఛా జ్ఞానాన్ని కలిపే ప్రపంచంలోని అతిపెద్ద కార్యక్రమాలలో ఒకటి.',
            p2: '2011లో ఎస్టోనియాలో ప్రారంభించబడి, ఆ తర్వాత ఐరోపా మరియు ప్రపంచవ్యాప్తంగా విస్తరించబడిన ఈ పోటీ, వేలాది మంది శాస్త్రవేత్తలు, పరిశోధకులు మరియు ఔత్సాహికులను సైన్స్ యొక్క అద్భుతాన్ని సంగ్రహించే చిత్రాలను పంచుకోవడానికి ప్రేరేపించింది. సూక్ష్మ కణాల నుండి విశ్వ గెలాక్సీల వరకు, ఈ స్వేచ్ఛగా లైసెన్స్ పొందిన రచనలు వికీమీడియా కామన్స్‌ను సుసంపన్నం చేస్తాయి మరియు ప్రపంచవ్యాప్తంగా బహిరంగ విద్యకు మద్దతు ఇస్తాయి.',
            p3: 'గత అంతర్జాతీయ ఎడిషన్‌లకు భారతదేశం గర్వంగా సహకరించింది — భారతీయ ఫోటోగ్రాఫర్‌లు మరియు శాస్త్రవేత్తలు గుర్తింపు మరియు అవార్డులను అందుకున్నారు. ఏది ఏమైనప్పటికీ, మన దేశం యొక్క శాస్త్రీయ స్ఫూర్తిని మరియు సృజనాత్మకతను ప్రదర్శించడానికి అంకితమైన తన స్వంత స్థానిక పోటీని భారతదేశం నిర్వహించడం ఇదే మొదటిసారి.',
            p4: 'వికీ సైన్స్ పోటీ 2025 – భారతదేశం ఒక పోటీ కంటే ఎక్కువ. ఇది భారతీయ విజ్ఞానాన్ని ప్రపంచానికి ప్రాతినిధ్యం వహించడానికి ఒక సామూహిక ప్రయత్నం — శక్తివంతమైన చిత్రాలు, కథలు మరియు సృజనాత్మకత ద్వారా.',
            aims: {
                title: 'మా లక్ష్యాలు',
                subtitle: 'ఈ ప్రచారం ద్వారా, మేము వీటిని లక్ష్యంగా పెట్టుకున్నాము:',
                items: [
                    { icon: 'PenSquare', title: 'సహకారాన్ని ప్రోత్సహించండి', description: 'విలువైన శాస్త్రీయ మాధ్యమాన్ని అందించడానికి భారతదేశవ్యాప్తంగా ఉన్న విద్యార్థులు, పరిశోధకులు మరియు ఔత్సాహికులను ప్రోత్సహించండి.' },
                    { icon: 'Lightbulb', title: 'అవగాహన పెంచండి', description: 'బహిరంగ విజ్ఞానం మరియు స్వేచ్ఛా జ్ఞానం యొక్క ప్రాముఖ్యత గురించి అవగాహన పెంచండి.' },
                    { icon: 'Globe', title: 'వారసత్వాన్ని జరుపుకోండి', description: 'భారతదేశం యొక్క గొప్ప శాస్త్రీయ వారసత్వాన్ని మరియు కొనసాగుతున్న ఆవిష్కరణలను జరుపుకోండి.' },
                    { icon: 'Handshake', title: 'సహకారాన్ని బలోపేతం చేయండి', description: 'వికీమీడియా సంఘాలు, విశ్వవిద్యాలయాలు, పరిశోధనా సంస్థలు మరియు సంస్థల మధ్య సహకారాన్ని బలోపేతం చేయండి.' }
                ]
            },
            supportingOrg: {
                title: 'సహాయక సంస్థ',
                p1: 'వికీ క్లబ్ SATI (విదిశ, మధ్యప్రదేశ్) భారతదేశంలో వికీ సైన్స్ కాంపిటీషన్ 2025 యొక్క మొదటి జాతీయ ఎడిషన్‌కు సహాయక సంస్థగా గుర్తించబడింది. ఈ క్లబ్ విద్యార్థులను మరియు యువ నిపుణులను వికీమీడియా ఉద్యమంలో నిమగ్నం చేయడంలో, బహిరంగ జ్ఞానం, సాంకేతిక ఆవిష్కరణలు మరియు కమ్యూనిటీ-నేతృత్వంలోని కార్యక్రమాలకు దోహదపడటంలో ముందంజలో ఉంది.',
                p2: 'కోర్ ఆర్గనైజింగ్ టీమ్‌లోని చాలా మంది సభ్యులు వికీ క్లబ్ SATIతో అనుబంధం కలిగి ఉన్నారు మరియు వారి నిరంతర ప్రమేయం స్వేచ్ఛా జ్ఞానం మరియు శాస్త్రీయ నిమగ్నతను ముందుకు తీసుకెళ్లడంలో క్లబ్ యొక్క నిబద్ధతను ప్రతిబింబిస్తుంది. మద్దతు ఆర్థికేతరమైనప్పటికీ, వికీ క్లబ్ SATI యొక్క సంస్థాగత సామర్థ్యం, అనుభవం మరియు కమ్యూనిటీ నెట్‌వర్క్‌లు జాతీయ స్థాయిలో ఈ ప్రచారాన్ని ప్రారంభించడంలో ముఖ్యమైన పాత్ర పోషిస్తాయి.'
            }
        },
        campusAmbassadors: {
            title: 'క్యాంపస్ అంబాసిడర్లు',
            subtitle: 'వారి సంఘాలలో వికీ సైన్స్ పోటీని నడిపిస్తున్న ఉత్సాహభరిత నాయకులను కలవండి.',
            ambassadors: [
                {
                    name: 'అనుష్క పటేల్',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
                    description: 'వికీ క్లబ్ SATI',
                    boardLink: {
                        name: 'వికీ క్లబ్ SATI',
                        url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
                    },
                },
                {
                    name: 'నీచల్కరన్',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                    description: 'తమిళనాడుకు చెందిన వికీపీడియన్ & గణన భాషా శాస్త్రవేత్త',
                },
                {
                    name: 'సంతోష్ నోటగర్',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                    description: 'HOD & అసిస్టెంట్ ప్రొఫెసర్, కంప్యూటర్ యానిమేషన్ విభాగం, సెయింట్ అలోసియస్',
                    wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
                },
                {
                    name: 'సామియా అహ్మద్',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                    description: 'దేవబంద్ కమ్యూనిటీ',
                    boardLink: {
                        name: 'దేవబంద్ కమ్యూనిటీ',
                        url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
                    },
                },
                {
                    name: 'సతీష్ M',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    description: 'ప్రస్తుతం కన్నియాకుమారి జిల్లాలో ఐటీ మరియు నిఘా ప్రాజెక్టులు చేస్తున్నారు',
                },
                {
                    name: 'కార్తీక్ శివరామ్',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                    description: 'తమిళ వికీపీడియన్, సాఫ్ట్‌వేర్ ఇంజనీర్',
                },
                {
                    name: 'ఒసామా',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
                    description: 'వికీపీడియన్',
                },
            ]
        },
        affiliates: {
            title: 'వికీమీడియా అనుబంధ సంస్థలకు పిలుపు',
            subtitle: 'వికీ సైన్స్ పోటీ 2025ని ప్రోత్సహించడంలో మరియు మద్దతు ఇవ్వడంలో మాతో సహకరించడానికి భారతదేశవ్యాప్తంగా ఉన్న వికీమీడియా అనుబంధ సంస్థలు, వినియోగదారు సమూహాలు మరియు సంస్థలను మేము ఆహ్వానిస్తున్నాము.',
            partnerHeading: 'మాతో ఎందుకు భాగస్వామి కావాలి?',
            partnerDescription: 'సైన్స్‌ను జరుపుకోవడానికి మరియు వికీమీడియా కామన్స్‌ను స్వేచ్ఛగా లైసెన్స్ పొందిన మీడియాతో సుసంపన్నం చేయడానికి ఇది ఒక ప్రత్యేక అవకాశం. భాగస్వామిగా, మీ బృందం ప్రచారం, అవగాహన మరియు కమ్యూనిటీ ఎంగేజ్‌మెంట్‌లో సహాయం చేయడం ద్వారా భారతదేశం యొక్క మొట్టమొదటి జాతీయ వికీ సైన్స్ పోటీని విజయవంతం చేయడంలో కీలక పాత్ర పోషిస్తుంది.',
            collaborationHeading: 'మీరు ఎలా సహకరించగలరు',
            collaborationPoints: [
                'మీ నెట్‌వర్క్‌లకు ఆన్‌లైన్ మరియు ఆఫ్‌లైన్ ప్రచారంలో పాల్గొనండి.',
                'సంస్థలు మరియు పరిశోధనా సంస్థల నుండి అప్‌లోడ్‌లను సులభతరం చేయండి.',
                'స్థానిక వర్క్‌షాప్‌లు, ఎడిట్-ఎ-థాన్‌లు లేదా ఫోటోవాక్‌లను నిర్వహించండి.',
                'ప్రచార సామగ్రి యొక్క అనువాదం మరియు స్థానికీకరణలో సహాయం చేయండి.',
            ],
            formNote: 'ఈ ఫారమ్ గుర్తింపు పొందిన వికీమీడియా అనుబంధ సంస్థలు లేదా కమ్యూనిటీ సమూహాల కోసం ఉద్దేశించబడింది. వ్యక్తులు మరియు విద్యార్థులు ఉపయోగించాలి',
            campusAmbassadorLink: 'క్యాంపస్ అంబాసిడర్ ఫారమ్',
            sidebarTitle: 'మాతో భాగస్వామి కండి',
            sidebarDescription: 'భారతదేశం యొక్క శాస్త్రీయ ప్రకృతి దృశ్యాన్ని ప్రపంచానికి ప్రదర్శించడానికి సహకరిద్దాం.',
            deadline: 'గడువు: 31 ఆగస్టు 2025',
            cta: 'భాగస్వామ్య ఫారమ్‌ను తెరవండి'
        },
        campus: {
            title: 'క్యాంపస్ అంబాసిడర్ల కోసం పిలుపు',
            subtitle: 'మీ సంస్థ, కమ్యూనిటీ లేదా నెట్‌వర్క్‌లో వికీ సైన్స్ పోటీ 2025ని ప్రోత్సహించడంలో సహాయపడటానికి స్థానిక ప్రచార సమన్వయకర్తగా మాతో చేరండి.',
            whoHeading: 'మేము ఎవరి కోసం చూస్తున్నాము?',
            whoDescription: 'క్యాంపస్ అంబాసిడర్లు అవగాహన కల్పించడంలో, పాల్గొనేవారికి మార్గనిర్దేశం చేయడంలో మరియు ఐచ్ఛికంగా అవగాహన సెషన్‌లు లేదా వర్క్‌షాప్‌లను నిర్వహించడంలో కీలక పాత్ర పోషిస్తారు. మీరు వికీమీడియన్, సైన్స్ విద్యార్థి, డిజైనర్, ఉపాధ్యాయుడు లేదా బహిరంగ విజ్ఞానం పట్ల కేవలం ఉత్సాహంగా ఉన్నా—మేము మిమ్మల్ని బోర్డులో ఉంచుకోవడానికి ఇష్టపడతాము!',
            responsibilitiesHeading: 'బాధ్యతలు',
            responsibilities: [
                'మీ సంస్థ లేదా సంఘంలో ప్రచారాన్ని ప్రోత్సహించండి.',
                'సంభావ్య కంట్రిబ్యూటర్‌లతో పాల్గొనే మార్గదర్శకాలను పంచుకోండి.',
                'ఐచ్ఛికంగా, వర్క్‌షాప్‌లు లేదా ఫోటోవాక్‌ల వంటి అవగాహన కార్యకలాపాలను నిర్వహించండి (మేము మద్దతు అందించగలము!).',
            ],
            sidebar: {
                title: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
                description: 'ప్రభావం చూపడానికి సిద్ధంగా ఉన్నారా? క్యాంపస్ అంబాసిడర్ కావడానికి ఫారమ్ నింపండి.',
                deadline: 'గడువు: 31 ఆగస్టు 2025',
                cta: 'అప్లికేషన్ ఫారమ్‌ను తెరవండి'
            },
            cta: {
                text: 'క్యాంపస్ అంబాసిడర్‌గా అవ్వండి',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
            }
        },
        competition: {
            title: 'పోటీ వివరాలు',
            subtitle: 'పాల్గొని గెలవడానికి మీరు తెలుసుకోవలసిన ప్రతిదీ.',
            howToParticipate: {
                title: 'ఎలా పాల్గొనాలి',
                p1: 'మీకు ఖాతా లేకపోతే, మీరు లాగిన్ చేసినప్పుడు అన్ని వికీమీడియా ప్లాట్‌ఫారమ్‌లలో (వికీమీడియా కామన్స్‌తో సహా) మీకు నిర్దిష్ట వినియోగదారు పేరును అందించే గ్లోబల్ ఖాతాను మీరు సృష్టించవచ్చు. కొత్తగా నమోదు చేసుకున్న వినియోగదారుగా మీరు వీడియో ఫైల్‌ను అప్‌లోడ్ చేయడానికి ముందు కనీసం నాలుగు రోజులు వేచి ఉండాలి, అయితే చిత్రాలను రిజిస్ట్రేషన్ తర్వాత వెంటనే అప్‌లోడ్ చేయవచ్చు.',
                createAccountLink: 'మీ ఖాతాను ఇక్కడ సృష్టించండి!',
                rulesTitle: 'పాల్గొనే నియమాలు',
                rules: [
                    'సమర్పణలు మీ స్వంత పని అయి ఉండాలి, మీ స్వంత రిజిస్టర్డ్ వికీమీడియా ఖాతా నుండి అప్‌లోడ్ చేయబడాలి. బహుళ రచయితల కోసం, అన్ని పేర్లను అందించాలి.',
                    'చిత్రాలు ఉచిత లైసెన్స్ (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) కింద ఉండాలి.',
                    'అన్ని సమర్పణలకు ఆంగ్లంలో స్పష్టమైన మరియు ఖచ్చితమైన శాస్త్రీయ వివరణ అవసరం. ఇతర భాషలకు కూడా స్వాగతం.',
                    {
                        text: 'సాధ్యమైనంత అత్యధిక రిజల్యూషన్‌ను (కనీసం 2 మెగాపిక్సెల్‌లు) అప్‌లోడ్ చేయండి. మీరు మెగాపిక్సెల్ గణనను తనిఖీ చేయవచ్చు ',
                        link: {
                            url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                            label: 'ఇక్కడ'
                        }
                    },
                    'చిత్రాలలో వాటర్‌మార్క్‌లు, లోగోలు లేదా జోడించిన టెక్స్ట్/గ్రాఫిక్స్ (స్కేల్స్ మినహా) ఉండకూడదు.',
                ]
            },
            keyDates: {
                title: 'ముఖ్యమైన తేదీలు',
                timeline: [
                    { date: 'నవంబర్ 1, 2025', event: 'సమర్పణలు తెరుచుకుంటాయి' },
                    { date: 'డిసెంబర్ 15, 2025', event: 'సమర్పణలు ముగుస్తాయి' },
                    { date: 'జనవరి 2026', event: 'జ్యూరీ చర్చలు' },
                    { date: 'ఫిబ్రవరి 2026', event: 'జాతీయ విజేతల ప్రకటన' },
                ],
            },
            submitNow: 'ఇప్పుడే సమర్పించండి',
            imageCategories: {
                title: 'చిత్ర వర్గాలు',
                subtitle: 'మీరు కింది ఏడు వర్గాలలో పాల్గొనవచ్చు. మీ పనికి ఉత్తమంగా సరిపోయేదాన్ని ఎంచుకోండి. ప్రేరణ పొందడానికి క్రింది ఉదాహరణలను చూడండి.'
            },
            categories: {
                people: { name: 'సైన్స్‌లో వ్యక్తులు', description: 'శాస్త్రవేత్తలు వారి సహజ ఆవాసాలలో.' },
                microscopy: { name: 'మైక్రోస్కోపీ చిత్రాలు', description: 'ఆప్టికల్, ఎలక్ట్రాన్ మరియు స్కానింగ్ ప్రోబ్ మైక్రోస్కోపీ చిత్రాలు.' },
                nonPhotographic: { name: 'ఫోటోగ్రాఫిక్ కాని మీడియా', description: 'ఆడియో మరియు వీడియో ఫైల్‌లు, కంప్యూటర్-జనరేటెడ్ ఇమేజరీ, మొదలైనవి.' },
                imageSets: { name: 'చిత్ర సెట్‌లు', description: 'ఒకే సెట్‌గా చూడగలిగే నేపథ్యంగా అనుసంధానించబడిన చిత్రాలు (10 వరకు).' },
                wildlife: { name: 'వన్యప్రాణులు & ప్రకృతి', description: 'మాక్రో ఫోటోగ్రఫీతో సహా వారి సహజ ఆవాసాలలో జీవులు.' },
                astronomy: { name: 'ఖగోళశాస్త్రం', description: 'నక్షత్రాలు, ఖగోళ సంఘటనలు మరియు వాటిని సంగ్రహించడానికి ఉపయోగించే పరికరాల చిత్రాలు.' },
                general: { name: 'సాధారణ వర్గం', description: 'పురావస్తు శాస్త్రం నుండి వల్కనాలజీ వరకు మిగతావన్నీ.' },
            },
            readyToParticipate: {
                title: 'పాల్గొనడానికి సిద్ధంగా ఉన్నారా?',
                subtitle: 'వేదిక సిద్ధమైంది. మీ లెన్స్ కీలకం. మీ శాస్త్రీయ కళ్ళతో ప్రపంచాన్ని మాకు చూపించండి.',
                cta: 'మీ పనిని సమర్పించండి',
            },
            supportedBy: 'మద్దతు ఇస్తున్న వారు:',
        },
        contact: {
            title: 'మమ్మల్ని సంప్రదించండి',
            subtitle: 'ప్రశ్నలు లేదా అభిప్రాయాలు ఉన్నాయా? మీ నుండి వినడానికి మేము ఇష్టపడతాము. మేము త్వరిత ప్రత్యుత్తరం ఇస్తామని వాగ్దానం చేస్తున్నాము!',
            getInTouch: 'పరిచయంలో ఉండండి',
            p1: 'ఫారమ్ నింపండి మరియు మా బృందం కొన్ని గంటల్లో మిమ్మల్ని తిరిగి సంప్రదిస్తుంది. మేము సహాయం చేయడానికి ఇక్కడ ఉన్నాము!',
            form: {
                name: 'పూర్తి పేరు',
                namePlaceholder: 'మీ పేరు',
                email: 'ఇమెయిల్ చిరునామా',
                emailPlaceholder: 'your.email@example.com',
                subject: 'విషయం',
                subjectPlaceholder: 'మీ ప్రశ్న కోసం ఒక విషయాన్ని ఎంచుకోండి',
                otherSubjectPlaceholder: 'దయచేసి మీ విషయాన్ని పేర్కొనండి',
                message: 'సందేశం',
                messagePlaceholder: 'ముందుగా వ్రాసిన సందేశాన్ని లేదా \'ఇతర...\' ఎంచుకోండి',
                otherMessagePlaceholder: 'దయచేసి మీ సందేశాన్ని పేర్కొనండి',
                selectSubjectFirst: 'దయచేసి మొదట ఒక విషయాన్ని ఎంచుకోండి',
                submit: 'సందేశం పంపండి',
                submitting: 'పంపుతోంది...',
            },
            toast: {
                successTitle: 'సందేశం పంపబడింది!',
                successDescription: 'మమ్మల్ని సంప్రదించినందుకు ధన్యవాదాలు. మేము త్వరలో మిమ్మల్ని తిరిగి సంప్రదిస్తాము.',
                errorTitle: 'లోపం',
                errorDescription: 'ఏదో తప్పు జరిగింది. దయచేసి మళ్ళీ ప్రయత్నించండి.',
            }
        },
        organizers: {
            title: 'నిర్వాహకులను కలవండి',
            subtitle: 'మొదటి వికీ సైన్స్ కాంపిటీషన్ ఇండియాను గొప్ప విజయవంతం చేయడానికి తెరవెనుక పనిచేస్తున్న అంకితభావంతో కూడిన బృందం.',
            lead_organizers: 'ప్రధాన నిర్వాహకులు',
            advisors: 'సలహాదారులు',
            core_organizing_team: 'ప్రధాన నిర్వాహక బృందం',
            team: [
                {
                    id: 'dev_jadiya',
                    name: 'దేవ్ జడియా',
                    role: 'ప్రధాన నిర్వాహకుడు',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'గౌరీ గుప్తా',
                    role: 'ప్రధాన నిర్వాహకురాలు',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'సుయాష్ ద్వివేది',
                    role: 'సలహాదారు',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'సాయి కిరణ్',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'చిన్మయీ మిశ్రా',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'అతుల్ R T',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'ఉదయ్ డోంగ్రే',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'పంకజ్ యాదవ్',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'అశ్మితా బాత్రే',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'ఆంచల్ పటేల్',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
                    name: 'రిద్ధి శర్మ',
                    role: 'ప్రధాన నిర్వాహక బృందం',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
                }
            ]
        },
        organizersCall: {
            title: 'నిర్వాహకులకు పిలుపు',
            subtitle: 'వికీమీడియా కామన్స్‌లో స్వేచ్ఛగా లైసెన్స్ పొందిన చిత్రాలు, వీడియోలు మరియు ఇతర మాధ్యమాల ద్వారా సైన్స్‌ను ప్రోత్సహించే ఈ గ్లోబల్ క్యాంపెయిన్ యొక్క స్వంత స్థానిక ఎడిషన్‌ను భారతదేశం నిర్వహిస్తుందని పంచుకోవడానికి మేము సంతోషిస్తున్నాము.',
            joinHeading: 'నిర్వాహక బృందంలో చేరండి',
            joinDescription: 'సున్నితమైన సమన్వయం, ప్రచారం మరియు ప్రణాళికకు మద్దతు ఇవ్వడానికి, మేము మా నిర్వాహక బృందాన్ని విస్తరిస్తున్నాము. ఈ ముఖ్యమైన చొరవకు సహకరించడానికి మీరు ఆసక్తి కలిగి ఉంటే, మీ నుండి వినడానికి మేము ఇష్టపడతాము.',
            lookingForHeading: 'మేము ఏమి చూస్తున్నాము',
            lookingFor: [
                'సైన్స్, ఫోటోగ్రఫీ లేదా బహిరంగ జ్ఞానంపై ఆసక్తి ఉన్న ఉత్సాహభరిత వ్యక్తులు.',
                'ఈవెంట్ ప్లానింగ్, అవుట్‌రీచ్, సోషల్ మీడియా మేనేజ్‌మెంట్ లేదా కంటెంట్ క్రియేషన్‌లో నైపుణ్యాలు.',
                'ఒక సహకార స్ఫూర్తి మరియు గణనీయమైన ప్రభావాన్ని చూపాలనే కోరిక.',
            ],
            sidebarTitle: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
            sidebarDescription: 'భారతదేశంలో మొదటి వికీ సైన్స్ పోటీని రూపొందించడంలో మాకు సహాయపడండి.',
            deadline: 'దరఖాస్తులు మూసివేయబడ్డాయి: 15 జూలై 2025',
            cta: 'దరఖాస్తులు మూసివేయబడ్డాయి'
        },
        resources: {
            title: 'వనరులు',
            subtitle: 'గత విజేతల నుండి ప్రేరణ పొందండి మరియు మీ సమర్పణను సిద్ధం చేయడానికి సహాయకరమైన మెటీరియల్‌లను యాక్సెస్ చేయండి.',
            pastWinners: {
                title: 'గత విజేతల గ్యాలరీ',
                winnerLabel: 'విజేత',
                winners: [
                    { year: 2023, category: 'ఖగోళశాస్త్రం', winner: 'అంజలి శర్మ' },
                    { year: 2023, category: 'జీవశాస్త్రం', winner: 'రోహన్ మెహతా' },
                    { year: 2022, category: 'రసాయన శాస్త్రం', winner: 'ప్రియా దేశాయ్' },
                    { year: 2022, category: 'ఖగోళశాస్త్రం', winner: 'విక్రమ్ సింగ్' },
                ]
            },
            learningMaterials: {
                title: 'అభ్యాస సామగ్రి',
                cta: 'మరింత తెలుసుకోండి',
                resources: [
                    { title: 'సైన్స్ ఫోటోగ్రఫీకి గైడ్', description: 'అద్భుతమైన శాస్త్రీయ చిత్రాలను సంగ్రహించడం యొక్క ప్రాథమికాలను తెలుసుకోండి.', link: '#' },
                    { title: 'క్రియేటివ్ కామన్స్‌ను అర్థం చేసుకోవడం', description: 'పోటీ కోసం మీ పనిని లైసెన్స్ చేయడానికి ఒక శీఘ్ర గైడ్.', link: '#' },
                    { title: 'చిత్ర అప్‌లోడ్ ట్యుటోరియల్', description: 'మీ ఫోటోలను ఎలా సమర్పించాలో దశలవారీ వీడియో.', link: '#' },
                ]
            }
        },
        support: {
            title: 'మాకు మద్దతు ఇవ్వండి',
            subtitle: 'వికీ సైన్స్ కాంపిటీషన్ ఇండియా 2025ను భారీ విజయం సాధించడంలో మాకు సహాయపడండి.',
            options: [
                {
                    id: 'sponsorship',
                    icon: 'Handshake',
                    title: 'ప్రాయోజకుడిగా అవ్వండి',
                    description: 'నిర్వహణ ఖర్చులు, బహుమతి డబ్బు మరియు ఈవెంట్ నిర్వహణను కవర్ చేయడంలో సహాయపడటానికి ద్రవ్య సహకారంతో మాకు మద్దతు ఇవ్వండి. మేము ప్రముఖ బ్రాండింగ్ అవకాశాలతో వివిధ స్పాన్సర్‌షిప్ శ్రేణులను అందిస్తున్నాము.',
                    cta: 'ప్రాయోజకత్వం కోసం సంప్రదించండి',
                },
                {
                    id: 'gifts',
                    icon: 'Gift',
                    title: 'బహుమతులు & వస్తువులు అందించండి',
                    description: 'మా విజేతలు మరియు పాల్గొనేవారి కోసం ఉత్తేజకరమైన బహుమతులు, వోచర్‌లు లేదా బ్రాండెడ్ వస్తువులతో (స్వాగ్) మా బహుమతి పూల్‌కు సహకరించండి. మీ బ్రాండ్‌ను సైన్స్ ఔత్సాహికుల చేతుల్లోకి తీసుకురండి.',
                    cta: 'బహుమతులు ఆఫర్ చేయండి',
                },
                {
                    id: 'outreach',
                    icon: 'Megaphone',
                    title: 'ప్రచారం & మార్కెటింగ్',
                    description: 'వార్తను వ్యాప్తి చేయడానికి మాతో సహకరించండి. మీ సంస్థాగత ఛానెల్‌లు, సోషల్ మీడియా లేదా మార్కెటింగ్ నైపుణ్యం ద్వారా విస్తృత ప్రేక్షకులను చేరుకోవడానికి మాకు సహాయపడండి.',
                    cta: 'ప్రచారంపై సహకరించండి',
                },
            ]
        },
        home: {
            autoscroll: {
                slides: [
                    { id: 1, title: 'సూక్ష్మ ప్రపంచాలను అన్వేషించండి', description: 'సెల్యులార్ నిర్మాణాల నుండి స్ఫటిక నిర్మాణాల వరకు, కనపడని అందాన్ని ప్రదర్శించండి.' },
                    { id: 2, title: 'ఖగోళ అద్భుతాలను సంగ్రహించండి', description: 'విశ్వం మీ కాన్వాస్. గెలాక్సీలు, నెబ్యులాలు మరియు గ్రహ సంఘటనలను ఫోటో తీయండి.' },
                    { id: 3, title: 'సంక్లిష్ట డేటాను దృశ్యమానం చేయండి', description: 'ముడి డేటాను ఆకట్టుకునే శాస్త్రీయ విజువలైజేషన్‌లు మరియు ఇన్ఫోగ్రాఫిక్స్‌గా మార్చండి.' },
                    { id: 4, title: 'మానవ చాతుర్యాన్ని డాక్యుమెంట్ చేయండి', description: 'పనిలో ఉన్న శాస్త్రవేత్తలు, వినూత్న ప్రయోగశాల పరికరాలు మరియు ఆవిష్కరణ క్షణాలను సంగ్రహించండి.' },
                ]
            },
            cta: {
                title: 'పాల్గొనండి',
                subtitle: 'భారతదేశం యొక్క మొట్టమొదటి జాతీయ వికీ సైన్స్ పోటీలో భాగం అవ్వండి. మాతో చేరడానికి ఉత్సాహభరితమైన వ్యక్తులు మరియు సంస్థల కోసం మేము చూస్తున్నాము.',
                campus: {
                    title: 'క్యాంపస్ అంబాసిడర్ల కోసం పిలుపు',
                    description: 'మీ సంస్థలో ప్రచారాన్ని ప్రోత్సహించండి, మార్గదర్శకాలను పంచుకోండి మరియు అవగాహన కార్యకలాపాలను నిర్వహించడంలో సహాయపడండి.',
                    deadline: 'గడువు: 31 ఆగస్టు 2025',
                    cta: 'ఇప్పుడే దరఖాస్తు చేసుకోండి'
                },
                affiliates: {
                    title: 'వికీమీడియా అనుబంధ సంస్థలకు పిలుపు',
                    description: 'ప్రచారాన్ని ప్రోత్సహించడానికి, స్థానిక ప్రచారాన్ని నిర్వహించడానికి మరియు మీ ప్రాంతం నుండి ప్రభావవంతమైన శాస్త్రీయ సహకారాలను తీసుకురావడానికి మాతో భాగస్వామి కండి.',
                    deadline: 'గడువు: 31 ఆగస్టు 2025',
                    cta: 'మాతో భాగస్వామి కండి'
                }
            },
            info: {
                title: 'మీరు తెలుసుకోవలసిన ప్రతిదీ',
                subtitle: 'సమర్పణ మార్గదర్శకాల నుండి జ్యూరీ వివరాల వరకు, ఈ ఉత్తేజకరమైన కార్యక్రమంలో భాగం కావడానికి మీకు అవసరమైన మొత్తం సమాచారాన్ని పొందండి.',
                cta: 'మరింత తెలుసుకోండి',
                sections: [
                    { icon: 'Info', title: 'పోటీ గురించి', description: 'ఒక వార్షిక అంతర్జాతీయ సైన్స్ ఫోటోగ్రఫీ పోటీ, ఇది పరిశోధన ప్రపంచం యొక్క వారి దృష్టిని పంచుకోవడానికి సైన్స్ ఔత్సాహికులను ఒకచోట చేర్చుతుంది.', link: '/about' },
                    { icon: 'Target', title: 'ఎలా పాల్గొనాలి', description: 'పాల్గొనడం ఉచితం మరియు అందరికీ తెరిచి ఉంటుంది. సమర్పణ వ్యవధిలో వివిధ వర్గాలలో మీ ఉత్తమ సైన్స్-సంబంధిత చిత్రాలను సమర్పించండి.', link: '/competition' },
                    { icon: 'Award', title: 'బహుమతులు & గుర్తింపు', description: 'విజేతలు జాతీయ గుర్తింపు, సర్టిఫికేట్లు మరియు బహుమతులు అందుకుంటారు. ఉత్తమ చిత్రాలు అంతర్జాతీయ ఫైనల్‌కు కూడా వెళ్తాయి.', link: '/competition' },
                    { icon: 'Users', title: 'జ్యూరీ & ప్రమాణాలు', description: 'మా నిపుణులైన శాస్త్రవేత్తలు మరియు ఫోటోగ్రాఫర్ల జ్యూరీ శాస్త్రీయ విలువ, వాస్తవికత మరియు సౌందర్య నాణ్యత ఆధారంగా ఎంట్రీలను నిర్ధారిస్తుంది.', link: '/jury' },
                    { icon: 'History', title: 'గత విజేతలు', description: 'మునుపటి సంవత్సరాల విజేత ఫోటోగ్రాఫ్‌ల గ్యాలరీని అన్వేషించండి మరియు ప్రదర్శించబడిన అద్భుతమైన ప్రతిభ నుండి ప్రేరణ పొందండి.', link: '/resources' }
                ],
                finalCard: {
                    title: 'పాల్గొనడానికి సిద్ధంగా ఉన్నారా?',
                    subtitle: 'వేదిక సిద్ధమైంది. మీ లెన్స్ కీలకం. మీ శాస్త్రీయ కళ్ళతో ప్రపంచాన్ని మాకు చూపించండి.',
                    cta: 'మీ పనిని సమర్పించండి'
                }
            },
            prizes: {
                title: 'బహుమతులు & గుర్తింపు',
                subtitle: 'మీ అద్భుతమైన విజువల్స్ జరుపుకోవడానికి అర్హమైనవి. మీరు ఏమి గెలవగలరో కనుగొనండి.',
                prizes: [
                    { icon: 'Award', title: "జాతీయ గుర్తింపు", description: "విజేతలు మా అధికారిక ప్లాట్‌ఫారమ్‌లలో జరుపుకోబడతారు మరియు జాతీయ మీడియా కవరేజీని పొందుతారు." },
                    { icon: 'Camera', title: "అగ్రశ్రేణి పరికరాలు", description: "అగ్ర విజేతలకు వారి అభిరుచికి సహాయపడటానికి ఉత్తేజకరమైన ఫోటోగ్రఫీ గేర్ మరియు ఉపకరణాలు." },
                    { icon: 'BookOpen', title: "ప్రచురణ ఫీచర్", description: "ప్రతిష్టాత్మక సైన్స్ మ్యాగజైన్‌లు మరియు ప్రచురణలలో మీ పనిని ప్రదర్శించండి." }
                ]
            },
            jury: {
                title: 'గౌరవనీయ జ్యూరీని కలవండి',
                description: 'మా ప్యానెల్‌లో భారతదేశం నలుమూలల నుండి ప్రఖ్యాత శాస్త్రవేత్తలు, ప్రొఫెషనల్ ఫోటోగ్రాఫర్‌లు మరియు సైన్స్ కమ్యూనికేటర్‌ల యొక్క విభిన్న సమూహం ఉంది. వారు న్యాయమైన మరియు లోతైన మూల్యాంకన ప్రక్రియను నిర్ధారించడానికి అపారమైన అనుభవాన్ని తీసుకువస్తారు.',
                cta: 'పూర్తి ప్యానెల్‌ను వీక్షించండి'
            }
        }
    },
    mr: {
        mainNavLinks: [
            { name: 'बद्दल', href: '/about' },
            { name: 'स्पर्धा', href: '/competition' },
            { name: 'संसाधने', href: '/resources' },
            { name: 'प्रायोजक', href: '/sponsors' },
        ],
        organizerLinks: [
            { name: 'संघाला भेटा', href: '/organizers' },
            { name: 'कॅम्पस ॲम्बेसेडर', href: '/campus-ambassadors' },
            { name: 'संघासाठी आवाहन', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'ज्युरी', href: '/jury' },
            { name: 'आम्हाला पाठिंबा द्या', href: '/support-us' },
            { name: 'संपर्क', href: '/contact' },
        ],
        learningLinks: [
            { name: 'विकी खाते कसे तयार करावे', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
            { name: 'अपलोड विझार्ड कसे वापरावे', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
            { name: 'सीसी परवाने समजून घेणे', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
            { name: 'श्रेणी कशी जोडावी', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
        ],
        organizersDropdown: 'आयोजक',
        moreDropdown: 'अधिक',
        learningDropdown: 'शिकणे',
        participateButton: 'सहभागी व्हा',
        footerNavLinks: [
            { name: 'बद्दल', href: '/about' },
            { name: 'स्पर्धा', href: '/competition' },
            { name: 'ज्युरी', href: '/jury' },
            { name: 'आयोजक', href: '/organizers' },
            { name: 'प्रायोजक', href: '/sponsors' },
            { name: 'संसाधने', href: '/resources' },
            { name: 'कॅम्पस ॲम्बेसेडर', href: '/campus-ambassadors' },
            { name: 'संपर्क', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'प्रायोजकत्व', href: '/support-us#sponsorship' },
            { name: 'भेटवस्तू/वस्तू', href: '/support-us#gifts' },
            { name: 'प्रसार', href: '/support-us#outreach' },
        ],
        footerSubtitle: 'फोटोग्राफीद्वारे विज्ञानाचे सौंदर्य टिपणे.',
        footerNavHeader: 'नॅव्हिगेशन',
        footerSupportHeader: 'आम्हाला पाठिंबा द्या',
        footerContactHeader: 'संपर्क',
        footerCopyright: 'विकी विज्ञान स्पर्धा भारत. सर्व हक्क राखीव.',
        footerLicense: 'सामग्री CC BY-SA 4.0 अंतर्गत उपलब्ध आहे, अन्यथा नोंद नसल्यास.',
        footerDeveloperCredit: 'डिझाइन आणि विकसित केले आहे',
        about: {
            title: 'विकिसायन्स इंडिया २०२५ बद्दल',
            badge: 'भारतीय संदर्भासाठी ओळख',
            heading: 'विकी विज्ञान स्पर्धा २०२५ – भारत',
            p1: 'पहिल्यांदाच, भारत विकी विज्ञान स्पर्धेची (WSC) राष्ट्रीय आवृत्ती आयोजित करत आहे - हा जगातील सर्वात मोठा उपक्रम आहे जो विज्ञान, फोटोग्राफी आणि मुक्त ज्ञान एकत्र आणतो.',
            p2: '२०११ मध्ये एस्टोनियामध्ये सुरू झालेली आणि नंतर संपूर्ण युरोप आणि जगभरात विस्तारलेली ही स्पर्धा हजारो शास्त्रज्ञ, संशोधक आणि उत्साही लोकांना विज्ञानाचे आश्चर्य टिपणाऱ्या प्रतिमा शेअर करण्यासाठी प्रेरित करत आहे. सूक्ष्म पेशींपासून ते वैश्विक आकाशगंगांपर्यंत, ही मुक्तपणे परवानाकृत योगदानं विकिमीडिया कॉमन्सला समृद्ध करतात आणि जागतिक स्तरावर मुक्त शिक्षणास समर्थन देतात.',
            p3: 'भारताने मागील आंतरराष्ट्रीय आवृत्त्यांमध्ये अभिमानाने योगदान दिले आहे — भारतीय छायाचित्रकार आणि शास्त्रज्ञांना ओळख आणि पुरस्कार मिळाले आहेत. तथापि, ही पहिलीच वेळ आहे की भारत आपल्या देशाची वैज्ञानिक भावना आणि सर्जनशीलता दर्शविण्यासाठी समर्पित स्वतःची स्थानिक स्पर्धा आयोजित करत आहे.',
            p4: 'विकी विज्ञान स्पर्धा २०२५ – भारत ही केवळ एक स्पर्धा नाही. भारतीय विज्ञानाला जगासमोर मांडण्याचा हा एक सामूहिक प्रयत्न आहे — शक्तिशाली प्रतिमा, कथा आणि सर्जनशीलतेद्वारे.',
            aims: {
                title: 'आमची उद्दिष्ट्ये',
                subtitle: 'या मोहिमेद्वारे आमचे ध्येय आहे:',
                items: [
                    { icon: 'PenSquare', title: 'योगदानाला प्रोत्साहन', description: 'संपूर्ण भारतातील विद्यार्थी, संशोधक आणि उत्साही लोकांना मौल्यवान वैज्ञानिक मीडियाचे योगदान देण्यासाठी प्रोत्साहित करणे.' },
                    { icon: 'Lightbulb', title: 'जागरूकता निर्माण करणे', description: 'मुक्त विज्ञान आणि मुक्त ज्ञानाच्या महत्त्वाविषयी जागरूकता निर्माण करणे.' },
                    { icon: 'Globe', title: 'वारसा साजरा करणे', description: 'भारताचा समृद्ध वैज्ञानिक वारसा आणि चालू असलेल्या नवकल्पना साजरा करणे.' },
                    { icon: 'Handshake', title: 'सहयोग मजबूत करणे', description: 'विकिमीडिया समुदाय, विद्यापीठे, संशोधन संस्था आणि संस्था यांच्यातील सहयोग मजबूत करणे.' }
                ]
            },
            supportingOrg: {
                title: 'समर्थक संस्था',
                p1: 'विकी क्लब SATI (विदिशा, मध्य प्रदेश) ला भारतातील विकी विज्ञान स्पर्धा २०२५ च्या पहिल्या राष्ट्रीय आवृत्तीसाठी समर्थक संस्था म्हणून मान्यता दिली आहे. क्लबने विद्यार्थी आणि तरुण व्यावसायिकांना विकिमीडिया चळवळीत सहभागी करून घेण्यात, मुक्त ज्ञान, तांत्रिक नवकल्पना आणि समुदाय-नेतृत्वाखालील उपक्रमांमध्ये योगदान देण्यात पुढाकार घेतला आहे.',
                p2: 'मुख्य आयोजन संघाचे अनेक सदस्य विकी क्लब SATI शी संबंधित आहेत, आणि त्यांचा सततचा सहभाग मुक्त ज्ञान आणि वैज्ञानिक सहभागाला पुढे नेण्यासाठी क्लबची वचनबद्धता दर्शवतो. जरी हे समर्थन गैर-आर्थिक असले तरी, विकी क्लब SATI ची संघटनात्मक क्षमता, अनुभव आणि सामुदायिक नेटवर्क राष्ट्रीय स्तरावर या मोहिमेस सक्षम करण्यात महत्त्वपूर्ण भूमिका बजावतात.'
            }
        },
        campusAmbassadors: {
            title: 'कॅम्पस ॲम्बेसेडर',
            subtitle: 'आपल्या समुदायांमध्ये विकी विज्ञान स्पर्धेला चालना देणाऱ्या उत्साही नेत्यांना भेटा.',
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
                    name: 'नीचालकरण',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                    description: 'तामिळनाडूतील विकिपीडियन आणि संगणकीय भाषाशास्त्रज्ञ',
                },
                {
                    name: 'संतोष नोटगर',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                    description: 'विभागप्रमुख आणि सहाय्यक प्राध्यापक, संगणक ॲनिमेशन विभाग, सेंट अलॉयसियस',
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
                    description: 'सध्या कन्याकुमारी जिल्ह्यात आयटी आणि पाळत ठेवण्याचे प्रकल्प करत आहेत',
                },
                {
                    name: 'कार्तिक शिवराम',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                    description: 'तमिळ विकिपीडियन, सॉफ्टवेअर अभियंता',
                },
                {
                    name: 'ओसामा',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
                    description: 'विकिपीडियन',
                },
            ]
        },
        affiliates: {
            title: 'विकिमीडिया संलग्न संस्थांसाठी आवाहन',
            subtitle: 'आम्ही भारतातील विकिमीडिया संलग्न संस्था, वापरकर्ता गट आणि संस्थांना विकी विज्ञान स्पर्धा २०२५ च्या प्रचारात आणि समर्थनासाठी आमच्यासोबत सहयोग करण्यासाठी आमंत्रित करत आहोत.',
            partnerHeading: 'आमच्यासोबत भागीदारी का करावी?',
            partnerDescription: 'विज्ञान साजरा करण्याची आणि विकिमीडिया कॉमन्सला मुक्तपणे परवानाकृत मीडियासह समृद्ध करण्याची ही एक अनोखी संधी आहे. भागीदार म्हणून, आपला गट पोहोच, जागरूकता आणि सामुदायिक सहभागामध्ये मदत करून भारताची पहिली राष्ट्रीय विकी विज्ञान स्पर्धा यशस्वी करण्यात महत्त्वाची भूमिका बजावू शकतो.',
            collaborationHeading: 'तुम्ही कसे सहकार्य करू शकता',
            collaborationPoints: [
                'आपल्या नेटवर्कमध्ये ऑनलाइन आणि ऑफलाइन प्रचारात सहभागी व्हा.',
                'संस्था आणि संशोधन संस्थांकडून अपलोड सुलभ करा.',
                'स्थानिक कार्यशाळा, एडिट-ए-थॉन किंवा फोटोवॉक आयोजित करा.',
                'मोहिमेच्या साहित्याचे भाषांतर आणि स्थानिकीकरणात मदत करा.',
            ],
            formNote: 'हा फॉर्म मान्यताप्राप्त विकिमीडिया संलग्न संस्था किंवा सामुदायिक गटांसाठी आहे. व्यक्ती आणि विद्यार्थ्यांनी',
            campusAmbassadorLink: 'कॅम्पस ॲम्बेसेडर अर्ज',
            sidebarTitle: 'आमच्यासोबत भागीदार व्हा',
            sidebarDescription: 'भारताचे वैज्ञानिक परिदृश्य जगासमोर मांडण्यासाठी सहकार्य करूया.',
            deadline: 'अंतिम मुदत: ३१ ऑगस्ट २०२५',
            cta: 'भागीदारी अर्ज उघडा'
        },
        campus: {
            title: 'कॅम्पस ॲम्बेसेडरसाठी आवाहन',
            subtitle: 'तुमच्या संस्था, समुदाय किंवा नेटवर्कमध्ये विकी विज्ञान स्पर्धा २०२५ चा प्रचार करण्यास मदत करण्यासाठी स्थानिक प्रचार समन्वयक म्हणून आमच्यात सामील व्हा.',
            whoHeading: 'आम्ही कोणाला शोधत आहोत?',
            whoDescription: 'कॅम्पस ॲम्बेसेडर जागरूकता पसरवण्यात, सहभागींना मार्गदर्शन करण्यात आणि वैकल्पिकरित्या जागरूकता सत्रे किंवा कार्यशाळा आयोजित करण्यात महत्त्वाची भूमिका बजावतात. तुम्ही विकिमीडियन, विज्ञान विद्यार्थी, डिझायनर, शिक्षक किंवा फक्त मुक्त विज्ञानाबद्दल उत्साही असाल - आम्हाला तुम्हाला संघात सामील करून घ्यायला आवडेल!',
            responsibilitiesHeading: 'जबाबदाऱ्या',
            responsibilities: [
                'आपल्या संस्थेत किंवा समाजात मोहिमेचा प्रचार करा.',
                'संभाव्य योगदानकर्त्यांसह सहभाग मार्गदर्शक तत्त्वे सामायिक करा.',
                'वैकल्पिकरित्या, कार्यशाळा किंवा फोटोवॉक सारखे जागरूकता उपक्रम आयोजित करा (आम्ही समर्थन देऊ शकतो!).',
            ],
            sidebar: {
                title: 'आता अर्ज करा',
                description: 'प्रभाव पाडण्यासाठी तयार आहात? कॅम्पस ॲम्बेसेडर होण्यासाठी फॉर्म भरा.',
                deadline: 'अंतिम मुदत: ३१ ऑगस्ट २०२५',
                cta: 'अर्ज उघडा'
            },
            cta: {
                text: 'कॅम्पस ॲम्बेसेडर बना',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
            }
        },
        competition: {
            title: 'स्पर्धेचा तपशील',
            subtitle: 'सहभागी होण्यासाठी आणि जिंकण्यासाठी आपल्याला आवश्यक असलेली सर्व माहिती.',
            howToParticipate: {
                title: 'कसे सहभागी व्हावे',
                p1: 'तुमच्याकडे खाते नसल्यास, तुम्ही एक जागतिक खाते तयार करू शकता जे तुम्हाला लॉग इन केल्यावर सर्व विकिमीडिया प्लॅटफॉर्मवर (विकिमीडिया कॉमन्ससह) एक विशिष्ट वापरकर्तानाव देईल. नवीन नोंदणीकृत वापरकर्ता म्हणून तुम्हाला व्हिडिओ फाइल अपलोड करण्यापूर्वी किमान चार दिवस प्रतीक्षा करावी लागेल, तर प्रतिमा नोंदणीनंतर लगेच अपलोड केल्या जाऊ शकतात.',
                createAccountLink: 'तुमचे खाते येथे तयार करा!',
                rulesTitle: 'सहभागाचे नियम',
                rules: [
                    'सादर केलेली कामे तुमची स्वतःची असावीत, तुमच्या स्वतःच्या नोंदणीकृत विकिमीडिया खात्यावरून अपलोड केलेली असावीत. एकापेक्षा जास्त लेखक असल्यास, सर्व नावे देणे आवश्यक आहे.',
                    'प्रतिमा मुक्त परवान्याअंतर्गत (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) असाव्यात.',
                    'सर्व सादर केलेल्या कामांसाठी इंग्रजीमध्ये स्पष्ट आणि अचूक वैज्ञानिक वर्णन आवश्यक आहे. इतर भाषांचेही स्वागत आहे.',
                    {
                        text: 'शक्य तितके उच्च रिझोल्यूशन (किमान २ मेगापिक्सेल) अपलोड करा. तुम्ही मेगापिक्सेल संख्या तपासू शकता ',
                        link: {
                            url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                            label: 'येथे'
                        }
                    },
                    'प्रतिमांमध्ये वॉटरमार्क, लोगो किंवा अतिरिक्त मजकूर/ग्राफिक्स (स्केल वगळता) नसावेत.',
                ]
            },
            keyDates: {
                title: 'महत्वाच्या तारखा',
                timeline: [
                    { date: '१ नोव्हेंबर, २०२५', event: 'अर्ज स्वीकारणे सुरू' },
                    { date: '१५ डिसेंबर, २०२५', event: 'अर्ज स्वीकारणे बंद' },
                    { date: 'जानेवारी २०२६', event: 'ज्युरी विचारविनिमय' },
                    { date: 'फेब्रुवारी २०२६', event: 'राष्ट्रीय विजेते घोषित' },
                ],
            },
            submitNow: 'आता सबमिट करा',
            imageCategories: {
                title: 'प्रतिमा श्रेणी',
                subtitle: 'तुम्ही खालील सात श्रेणींमध्ये सहभागी होऊ शकता. तुमच्या कामाला सर्वात योग्य असलेली एक निवडा. प्रेरणा घेण्यासाठी खालील उदाहरणे पहा.'
            },
            categories: {
                people: { name: 'विज्ञानातील लोक', description: 'शास्त्रज्ञ त्यांच्या नैसर्गिक वातावरणात.' },
                microscopy: { name: 'मायक्रोस्कोपी प्रतिमा', description: 'ऑप्टिकल, इलेक्ट्रॉन आणि स्कॅनिंग प्रोब मायक्रोस्कोपी प्रतिमा.' },
                nonPhotographic: { name: 'गैर-फोटोग्राफिक मीडिया', description: 'ऑडिओ आणि व्हिडिओ फाइल्स, संगणक-निर्मित प्रतिमा, इत्यादी.' },
                imageSets: { name: 'प्रतिमा संच', description: 'विषयानुसार जोडलेल्या प्रतिमा (१० पर्यंत) ज्या एका संच म्हणून पाहिल्या जाऊ शकतात.' },
                wildlife: { name: 'वन्यजीव आणि निसर्ग', description: 'जीव त्यांच्या नैसर्गिक अधिवासात, मॅक्रो फोटोग्राफीसह.' },
                astronomy: { name: 'खगोलशास्त्र', description: 'तारे, खगोलीय घटना आणि त्या टिपण्यासाठी वापरल्या जाणार्‍या उपकरणांच्या प्रतिमा.' },
                general: { name: 'सर्वसाधारण श्रेणी', description: 'पुरातत्वशास्त्रापासून ते ज्वालामुखीशास्त्रापर्यंत बाकी सर्व काही.' },
            },
            readyToParticipate: {
                title: 'सहभागी होण्यासाठी तयार आहात?',
                subtitle: 'रंगमंच सज्ज आहे. तुमची लेन्स ही किल्ली आहे. आम्हाला तुमच्या वैज्ञानिक नजरेतून जग दाखवा.',
                cta: 'तुमचे काम सादर करा',
            },
            supportedBy: 'यांच्याद्वारे समर्थित:',
        },
        contact: {
            title: 'आमच्याशी संपर्क साधा',
            subtitle: 'प्रश्न किंवा अभिप्राय आहे? आम्हाला तुमच्याकडून ऐकायला आवडेल. आम्ही त्वरित उत्तराचे वचन देतो!',
            getInTouch: 'संपर्कात रहा',
            p1: 'फॉर्म भरा आणि आमचा संघ काही तासांत तुमच्याशी संपर्क साधेल. आम्ही मदतीसाठी येथे आहोत!',
            form: {
                name: 'पूर्ण नाव',
                namePlaceholder: 'तुमचे नाव',
                email: 'ई-मेल पत्ता',
                emailPlaceholder: 'your.email@example.com',
                subject: 'विषय',
                subjectPlaceholder: 'तुमच्या प्रश्नासाठी एक विषय निवडा',
                otherSubjectPlaceholder: 'कृपया तुमचा विषय निर्दिष्ट करा',
                message: 'संदेश',
                messagePlaceholder: 'पूर्व-लिखित संदेश निवडा किंवा \'इतर...\'',
                otherMessagePlaceholder: 'कृपया तुमचा संदेश निर्दिष्ट करा',
                selectSubjectFirst: 'कृपया प्रथम एक विषय निवडा',
                submit: 'संदेश पाठवा',
                submitting: 'पाठवत आहे...',
            },
            toast: {
                successTitle: 'संदेश पाठवला!',
                successDescription: 'आमच्याशी संपर्क साधल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क साधू.',
                errorTitle: 'त्रुटी',
                errorDescription: 'काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा.',
            }
        },
        organizers: {
            title: 'आयोजकांना भेटा',
            subtitle: 'पडद्यामागे काम करणारा समर्पित संघ, जो पहिली विकी विज्ञान स्पर्धा भारत यशस्वी करण्यासाठी कार्यरत आहे.',
            lead_organizers: 'मुख्य आयोजक',
            advisors: 'सल्लागार',
            core_organizing_team: 'मुख्य आयोजन संघ',
            team: [
                {
                    id: 'dev_jadiya',
                    name: 'देव जडिया',
                    role: 'मुख्य आयोजक',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'गौरी गुप्ता',
                    role: 'मुख्य आयोजक',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'सुयश द्विवेदी',
                    role: 'सल्लागार',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'साई किरण',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'चिन्मयी मिश्रा',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'अतुल आर टी',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'उदय डोंगरे',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'पंकज यादव',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'अस्मिता बाथरे',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'आंचल पटेल',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
                    name: 'रिद्धी शर्मा',
                    role: 'मुख्य आयोजन संघ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
                }
            ]
        },
        organizersCall: {
            title: 'आयोजकांसाठी आवाहन',
            subtitle: 'आम्हाला हे सांगताना आनंद होत आहे की भारत या जागतिक मोहिमेची स्वतःची स्थानिक आवृत्ती आयोजित करणार आहे, जी विकिमीडिया कॉमन्सवर मुक्तपणे परवानाकृत प्रतिमा, व्हिडिओ आणि इतर माध्यमांद्वारे विज्ञानाचा प्रचार करते.',
            joinHeading: 'आयोजन संघात सामील व्हा',
            joinDescription: ' lancar समन्वय, प्रचार आणि नियोजनास समर्थन देण्यासाठी, आम्ही आमचा आयोजन संघ विस्तारत आहोत. जर तुम्ही या महत्त्वाच्या उपक्रमात योगदान देण्यास इच्छुक असाल, तर आम्हाला तुमच्याकडून ऐकायला आवडेल.',
            lookingForHeading: 'आम्ही काय शोधत आहोत',
            lookingFor: [
                'विज्ञान, फोटोग्राफी किंवा मुक्त ज्ञानात रुची असलेल्या उत्साही व्यक्ती.',
                'कार्यक्रम नियोजन, प्रचार, सोशल मीडिया व्यवस्थापन किंवा सामग्री निर्मितीमध्ये कौशल्ये.',
                'एक सहयोगी भावना आणि महत्त्वपूर्ण प्रभाव पाडण्याची इच्छा.',
            ],
            sidebarTitle: 'आता अर्ज करा',
            sidebarDescription: 'भारतातील पहिली विकी विज्ञान स्पर्धा घडवण्यासाठी आम्हाला मदत करा.',
            deadline: 'अर्ज बंद: १५ जुलै २०२५',
            cta: 'अर्ज बंद'
        },
        resources: {
            title: 'संसाधने',
            subtitle: 'मागील विजेत्यांकडून प्रेरणा घ्या आणि तुमची सादर करण्याची तयारी करण्यासाठी उपयुक्त सामग्री मिळवा.',
            pastWinners: {
                title: 'मागील विजेत्यांची गॅलरी',
                winnerLabel: 'विजेता',
                winners: [
                    { year: 2023, category: 'खगोलशास्त्र', winner: 'अंजली शर्मा' },
                    { year: 2023, category: 'जीवशास्त्र', winner: 'रोहन मेहता' },
                    { year: 2022, category: 'रसायनशास्त्र', winner: 'प्रिया देसाई' },
                    { year: 2022, category: 'खगोलशास्त्र', winner: 'विक्रम सिंग' },
                ]
            },
            learningMaterials: {
                title: 'शिकण्याचे साहित्य',
                cta: 'अधिक जाणून घ्या',
                resources: [
                    { title: 'विज्ञान फोटोग्राफीसाठी मार्गदर्शक', description: 'आश्चर्यकारक वैज्ञानिक प्रतिमा कॅप्चर करण्याचे मूलभूत ज्ञान शिका.', link: '#' },
                    { title: 'क्रिएटिव्ह कॉमन्स समजून घेणे', description: 'स्पर्धेसाठी तुमच्या कामाला परवाना देण्यासाठी एक जलद मार्गदर्शक.', link: '#' },
                    { title: 'प्रतिमा अपलोड ट्यूटोरियल', description: 'तुमचे फोटो कसे सबमिट करायचे यावर चरण-दर-चरण व्हिडिओ.', link: '#' },
                ]
            }
        },
        support: {
            title: 'आम्हाला पाठिंबा द्या',
            subtitle: 'विकी विज्ञान स्पर्धा भारत २०२५ यशस्वी करण्यासाठी आम्हाला मदत करा.',
            options: [
                {
                    id: 'sponsorship',
                    icon: 'Handshake',
                    title: 'प्रायोजक बना',
                    description: 'ऑपरेशनल खर्च, बक्षिसाची रक्कम आणि कार्यक्रम व्यवस्थापनासाठी आर्थिक योगदानाने आम्हाला पाठिंबा द्या. आम्ही प्रमुख ब्रँडिंग संधींसह विविध प्रायोजकत्व स्तर ऑफर करतो.',
                    cta: 'प्रायोजकत्वासाठी संपर्क साधा',
                },
                {
                    id: 'gifts',
                    icon: 'Gift',
                    title: 'भेटवस्तू आणि वस्तू द्या',
                    description: 'आमच्या विजेते आणि सहभागींसाठी रोमांचक भेटवस्तू, व्हाउचर किंवा ब्रँडेड मालासह (स्वॅग) आमच्या बक्षीस निधीमध्ये योगदान द्या. तुमचा ब्रँड विज्ञानप्रेमींच्या हातात द्या.',
                    cta: 'भेटवस्तू ऑफर करा',
                },
                {
                    id: 'outreach',
                    icon: 'Megaphone',
                    title: 'प्रसार आणि विपणन',
                    description: 'माहिती पसरवण्यासाठी आमच्याशी सहयोग करा. तुमच्या संस्थात्मक चॅनेल, सोशल मीडिया किंवा विपणन कौशल्याद्वारे व्यापक प्रेक्षकांपर्यंत पोहोचण्यास आम्हाला मदत करा.',
                    cta: 'प्रसारावर सहयोग करा',
                },
            ]
        },
        home: {
            autoscroll: {
                slides: [
                    { id: 1, title: 'सूक्ष्म जग एक्सप्लोर करा', description: 'पेशींच्या संरचनेपासून ते क्रिस्टल निर्मितीपर्यंत, न पाहिलेले सौंदर्य दाखवा.' },
                    { id: 2, title: 'खगोलीय चमत्कार कॅप्चर करा', description: 'ब्रह्मांड तुमचा कॅनव्हास आहे. आकाशगंगा, तेजोमेघ आणि ग्रहांच्या घटनांचे छायाचित्रण करा.' },
                    { id: 3, title: 'जटिल डेटाचे व्हिज्युअलाइझ करा', description: 'कच्च्या डेटाला आकर्षक वैज्ञानिक व्हिज्युअलायझेशन आणि इन्फोग्राफिक्समध्ये रूपांतरित करा.' },
                    { id: 4, title: 'मानवी कल्पकतेचे दस्तऐवजीकरण करा', description: 'शास्त्रज्ञांना कामावर, नाविन्यपूर्ण प्रयोगशाळा उपकरणे आणि शोधाचे क्षण कॅप्चर करा.' },
                ]
            },
            cta: {
                title: 'सहभागी व्हा',
                subtitle: 'भारताच्या पहिल्या राष्ट्रीय विकी विज्ञान स्पर्धेचा भाग बना. आम्ही उत्साही व्यक्ती आणि संस्थांना आमच्यात सामील होण्यासाठी शोधत आहोत.',
                campus: {
                    title: 'कॅम्पस ॲम्बेसेडरसाठी आवाहन',
                    description: 'आपल्या संस्थेत मोहिमेचा प्रचार करा, मार्गदर्शक तत्त्वे सामायिक करा आणि जागरूकता उपक्रम आयोजित करण्यात मदत करा.',
                    deadline: 'अंतिम मुदत: ३१ ऑगस्ट २०२५',
                    cta: 'आता अर्ज करा'
                },
                affiliates: {
                    title: 'विकिमीडिया संलग्न संस्थांसाठी आवाहन',
                    description: 'मोहिमेचा प्रचार करण्यासाठी, स्थानिक पोहोच आयोजित करण्यासाठी आणि आपल्या प्रदेशातून प्रभावी वैज्ञानिक योगदान आणण्यास मदत करण्यासाठी आमच्याशी भागीदारी करा.',
                    deadline: 'अंतिम मुदत: ३१ ऑगस्ट २०२५',
                    cta: 'आमच्यासोबत भागीदार व्हा'
                }
            },
            info: {
                title: 'तुम्हाला माहित असणे आवश्यक असलेली प्रत्येक गोष्ट',
                subtitle: 'सबमिशन मार्गदर्शक तत्त्वांपासून ते ज्युरी तपशिलांपर्यंत, या रोमांचक कार्यक्रमाचा भाग होण्यासाठी आपल्याला आवश्यक असलेली सर्व माहिती मिळवा.',
                cta: 'अधिक शोधा',
                sections: [
                    { icon: 'Info', title: 'स्पर्धेबद्दल', description: 'एक वार्षिक आंतरराष्ट्रीय विज्ञान छायाचित्रण स्पर्धा, जी विज्ञानप्रेमींना संशोधनाच्या जगाची त्यांची दृष्टी सामायिक करण्यासाठी एकत्र आणते.', link: '/about' },
                    { icon: 'Target', title: 'कसे सहभागी व्हावे', description: 'सहभाग विनामूल्य आणि सर्वांसाठी खुला आहे. सबमिशन कालावधीत विविध श्रेणींमध्ये तुमच्या सर्वोत्तम विज्ञान-संबंधित प्रतिमा सादर करा.', link: '/competition' },
                    { icon: 'Award', title: 'बक्षिसे आणि ओळख', description: 'विजेत्यांना राष्ट्रीय मान्यता, प्रमाणपत्रे आणि बक्षिसे मिळतात. सर्वोत्तम प्रतिमा आंतरराष्ट्रीय अंतिम फेरीसाठी देखील पात्र ठरतात.', link: '/competition' },
                    { icon: 'Users', title: 'ज्युरी आणि निकष', description: 'आमचे शास्त्रज्ञ आणि छायाचित्रकारांचे तज्ञ ज्युरी वैज्ञानिक मूल्य, मौलिकता आणि सौंदर्यशास्त्रीय गुणवत्तेवर आधारित नोंदींचे मूल्यांकन करतील.', link: '/jury' },
                    { icon: 'History', title: 'मागील विजेते', description: 'मागील वर्षांच्या विजेत्या छायाचित्रांची गॅलरी एक्सप्लोर करा आणि प्रदर्शित केलेल्या अविश्वसनीय प्रतिभेपासून प्रेरित व्हा.', link: '/resources' }
                ],
                finalCard: {
                    title: 'सहभागी होण्यासाठी तयार आहात?',
                    subtitle: 'रंगमंच सज्ज आहे. तुमची लेन्स ही किल्ली आहे. आम्हाला तुमच्या वैज्ञानिक नजरेतून जग दाखवा.',
                    cta: 'तुमचे काम सादर करा'
                }
            },
            prizes: {
                title: 'बक्षिसे आणि ओळख',
                subtitle: 'तुमच्या महत्त्वपूर्ण दृश्यांचा उत्सव साजरा केला पाहिजे. तुम्ही काय जिंकू शकता ते शोधा.',
                prizes: [
                    { icon: 'Award', title: "राष्ट्रीय ओळख", description: "विजेत्यांना आमच्या अधिकृत प्लॅटफॉर्मवर गौरवले जाईल आणि राष्ट्रीय मीडिया कव्हरेज मिळेल." },
                    { icon: 'Camera', title: "उच्च दर्जाची उपकरणे", description: "शीर्ष विजेत्यांना त्यांच्या आवडीला मदत करण्यासाठी रोमांचक फोटोग्राफी गिअर आणि ॲक्सेसरीज." },
                    { icon: 'BookOpen', title: "प्रकाशनात वैशिष्ट्य", description: "प्रतिष्ठित विज्ञान मासिके आणि प्रकाशनांमध्ये तुमचे काम वैशिष्ट्यीकृत करा." }
                ]
            },
            jury: {
                title: 'माननीय ज्युरींना भेटा',
                description: 'आमच्या पॅनेलमध्ये संपूर्ण भारतातील प्रसिद्ध शास्त्रज्ञ, व्यावसायिक छायाचित्रकार आणि विज्ञान संप्रेषकांचा विविध गट आहे. ते एक निष्पक्ष आणि अभ्यासपूर्ण मूल्यांकन प्रक्रिया सुनिश्चित करण्यासाठी अनुभवाचा खजिना घेऊन येतात.',
                cta: 'संपूर्ण पॅनल पहा'
            }
        }
    },
    ur: {
        "mainNavLinks": [
            { "name": "ہمارے بارے میں", "href": "/about" },
            { "name": "مقابلہ", "href": "/competition" },
            { "name": "وسائل", "href": "/resources" },
            { "name": "اسپانسرز", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "ٹیم سے ملیں", "href": "/organizers" },
            { "name": "کیمپس ایمبیسیڈرز", "href": "/campus-ambassadors" },
            { "name": "ٹیم کے لیے کال", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "جیوری", "href": "/jury" },
            { "name": "ہماری مدد کریں", "href": "/support-us" },
            { "name": "رابطہ", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "وکی اکاؤنٹ کیسے بنائیں", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "اپلوڈ وزرڈ کا استعمال کیسے کریں", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC لائسنس کو سمجھنا", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "کیٹیگریز کیسے شامل کریں", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "منتظمین",
        "moreDropdown": "مزید",
        "learningDropdown": "سیکھنا",
        "participateButton": "حصہ لیں",
        "footerNavLinks": [
            { "name": "ہمارے بارے میں", "href": "/about" },
            { "name": "مقابلہ", "href": "/competition" },
            { "name": "جیوری", "href": "/jury" },
            { "name": "منتظمین", "href": "/organizers" },
            { "name": "اسپانسرز", "href": "/sponsors" },
            { "name": "وسائل", "href": "/resources" },
            { "name": "کیمپس ایمبیسیڈرز", "href": "/campus-ambassadors" },
            { "name": "رابطہ", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "اسپانسرشپ", "href": "/support-us#sponsorship" },
            { "name": "تحائف/سواگ", "href": "/support-us#gifts" },
            { "name": "آؤٹ ریچ", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "فوٹو گرافی کے ذریعے سائنس کی خوبصورتی کو قید کرنا۔",
        "footerNavHeader": "نیویگیشن",
        "footerSupportHeader": "ہماری مدد کریں",
        "footerContactHeader": "رابطہ",
        "footerCopyright": "وکی سائنس مقابلہ انڈیا۔ جملہ حقوق محفوظ ہیں۔",
        "footerLicense": "مواد CC BY-SA 4.0 کے تحت دستیاب ہے جب تک کہ دوسری صورت میں ذکر نہ کیا گیا ہو۔",
        "footerDeveloperCredit": "ڈیزائن اور تیار کردہ",
        "about": {
            "title": "وکی سائنس انڈیا 2025 کے بارے میں",
            "badge": "ہندوستانی تناظر کے لیے تعارف",
            "heading": "وکی سائنس مقابلہ 2025 – انڈیا",
            "p1": "پہلی بار، ہندوستان وکی سائنس مقابلہ (WSC) کا قومی ایڈیشن منعقد کر رہا ہے - یہ دنیا کے سب سے بڑے اقدامات میں سے ایک ہے جو سائنس، فوٹو گرافی، اور آزاد علم کو یکجا کرتا ہے۔",
            "p2": "2011 میں ایسٹونیا میں شروع کیا گیا اور بعد میں یورپ اور دنیا بھر میں پھیلایا گیا، اس مقابلے نے ہزاروں سائنسدانوں، محققین، اور شائقین کو ایسی تصاویر شیئر کرنے کی ترغیب دی ہے جو سائنس کے عجوبے کو قید کرتی ہیں۔ خوردبینی خلیوں سے لے کر کائناتی کہکشاؤں تک، یہ آزادانہ لائسنس یافتہ شراکتیں وکی میڈیا کامنز کو مالا مال کرتی ہیں اور عالمی سطح پر کھلی تعلیم کی حمایت کرتی ہیں۔",
            "p3": "ہندوستان نے فخر کے ساتھ ماضی کے بین الاقوامی ایڈیشنز میں حصہ لیا ہے - جس میں ہندوستانی فوٹوگرافروں اور سائنسدانوں کو شناخت اور ایوارڈز ملے۔ تاہم، یہ پہلا موقع ہے جب ہندوستان اپنے مقامی مقابلے کی میزبانی کر رہا ہے، جو ہمارے ملک کے سائنسی جذبے اور تخلیقی صلاحیتوں کو ظاہر کرنے کے لیے وقف ہے۔",
            "p4": "وکی سائنس مقابلہ 2025 - انڈیا ایک مقابلے سے بڑھ کر ہے۔ یہ ہندوستانی سائنس کو دنیا کے سامنے پیش کرنے کی ایک اجتماعی کوشش ہے - طاقتور تصاویر، کہانیوں، اور تخلیقی صلاحیتوں کے ذریعے۔",
            "aims": {
                "title": "ہمارے مقاصد",
                "subtitle": "اس مہم کے ذریعے، ہمارا مقصد ہے:",
                "items": [
                    { "icon": "PenSquare", "title": "شراکت کی حوصلہ افزائی", "description": "ہندوستان بھر میں طلباء، محققین، اور شائقین کو قیمتی سائنسی میڈیا میں حصہ ڈالنے کی ترغیب دینا۔" },
                    { "icon": "Lightbulb", "title": "آگاہی پیدا کرنا", "description": "کھلی سائنس اور آزاد علم کی اہمیت کے بارے میں آگاہی پیدا کرنا۔" },
                    { "icon": "Globe", "title": "ورثے کا جشن", "description": "ہندوستان کے بھرپور سائنسی ورثے اور جاری اختراعات کا جشن منانا۔" },
                    { "icon": "Handshake", "title": "تعاون کو مضبوط بنانا", "description": "وکی میڈیا کمیونٹیز، یونیورسٹیوں، تحقیقی اداروں، اور تنظیموں کے درمیان تعاون کو مضبوط بنانا۔" }
                ]
            },
            "supportingOrg": {
                "title": "معاون تنظیم",
                "p1": "وکی کلب SATI (ودیشہ، مدھیہ پردیش) کو ہندوستان میں وکی سائنس مقابلہ 2025 کے پہلے قومی ایڈیشن کے لیے معاون تنظیم کے طور پر تسلیم کیا گیا ہے۔ یہ کلب طلباء اور نوجوان پیشہ ور افراد کو وکی میڈیا تحریک میں شامل کرنے میں پیش پیش رہا ہے، جو کھلے علم، تکنیکی جدت طرازی، اور کمیونٹی کی زیر قیادت اقدامات میں حصہ ڈال رہا ہے۔",
                "p2": "کور آرگنائزنگ ٹیم کے کئی اراکین وکی کلب SATI سے وابستہ ہیں، اور ان کی مسلسل شمولیت کلب کے آزاد علم اور سائنسی مشغولیت کو آگے بڑھانے کے عزم کی عکاسی کرتی ہے۔ اگرچہ یہ حمایت غیر مالی ہے، لیکن وکی کلب SATI کی تنظیمی صلاحیت، تجربہ، اور کمیونٹی نیٹ ورکس اس مہم کو قومی سطح پر ممکن بنانے میں ایک اہم کردار ادا کرتے ہیں۔"
            }
        },
        "campusAmbassadors": {
            "title": "کیمپس ایمبیسیڈرز",
            "subtitle": "ان پرجوش رہنماؤں سے ملیں جو اپنی برادریوں میں وکی سائنس مقابلے کو آگے بڑھا رہے ہیں۔",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "وکی کلب SATI",
                    "boardLink": {
                        "name": "وکی کلب SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "تمل ناڈو سے ویکیپیڈین اور کمپیوٹیشنل لسانیات دان"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "HOD اور اسسٹنٹ پروفیسر، شعبہ کمپیوٹر اینیمیشن، سینٹ الائسیس",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "دیوبند کمیونٹی",
                    "boardLink": {
                        "name": "دیوبند کمیونٹی",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "فی الحال کنیاکماری ضلع میں آئی ٹی اور نگرانی کے منصوبے کر رہے ہیں"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "تمل ویکیپیڈین، سافٹ ویئر انجینئر"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "ویکیپیڈین"
                }
            ]
        },
        "affiliates": {
            "title": "وکی میڈیا سے وابستہ اداروں کے لیے کال",
            "subtitle": "ہم ہندوستان بھر میں وکی میڈیا سے وابستہ اداروں، صارف گروپوں، اور تنظیموں کو وکی سائنس مقابلہ 2025 کو فروغ دینے اور اس کی حمایت کرنے میں ہمارے ساتھ تعاون کرنے کی دعوت دے رہے ہیں۔",
            "partnerHeading": "ہمارے ساتھ شراکت کیوں کریں؟",
            "partnerDescription": "یہ سائنس کا جشن منانے اور وکی میڈیا کامنز کو آزادانہ لائسنس یافتہ میڈیا سے مالا مال کرنے کا ایک منفرد موقع ہے۔ ایک پارٹنر کے طور پر، آپ کا گروپ آؤٹ ریچ، آگاہی، اور کمیونٹی کی شمولیت میں مدد کرکے ہندوستان کے پہلے قومی وکی سائنس مقابلے کو کامیاب بنانے میں ایک اہم کردار ادا کر سکتا ہے۔",
            "collaborationHeading": "آپ کیسے تعاون کر سکتے ہیں",
            "collaborationPoints": [
                "اپنے نیٹ ورکس میں آن لائن اور آف لائن آؤٹ ریچ میں مشغول ہوں۔",
                "اداروں اور تحقیقی اداروں سے اپ لوڈز کی سہولت فراہم کریں۔",
                "مقامی ورکشاپس، ایڈیٹ-اے-تھونز، یا فوٹو واکس کا اہتمام کریں۔",
                "مہم کے مواد کے ترجمہ اور مقامی بنانے میں مدد کریں۔"
            ],
            "formNote": "یہ فارم تسلیم شدہ وکی میڈیا سے وابستہ اداروں یا کمیونٹی گروپس کے لیے ہے۔ افراد اور طلباء کو",
            "campusAmbassadorLink": "کیمپس ایمبیسیڈر فارم",
            "sidebarTitle": "ہمارے ساتھ شراکت کریں",
            "sidebarDescription": "آئیے ہندوستان کے سائنسی منظر نامے کو دنیا کے سامنے پیش کرنے کے لیے تعاون کریں۔",
            "deadline": "آخری تاریخ: 31 اگست 2025",
            "cta": "شراکت داری فارم کھولیں"
        },
        "campus": {
            "title": "کیمپس ایمبیسیڈرز کے لیے کال",
            "subtitle": "اپنے ادارے، کمیونٹی، یا نیٹ ورک میں وکی سائنس مقابلہ 2025 کو فروغ دینے میں مدد کے لیے ایک مقامی آؤٹ ریچ کوآرڈینیٹر کے طور پر ہمارے ساتھ شامل ہوں۔",
            "whoHeading": "ہم کس کی تلاش میں ہیں؟",
            "whoDescription": "کیمپس ایمبیسیڈرز آگاہی پھیلانے، شرکاء کی رہنمائی کرنے، اور اختیاری طور پر آگاہی سیشنز یا ورکشاپس کا اہتمام کرنے میں کلیدی کردار ادا کرتے ہیں۔ چاہے آپ وکی میڈیا کے رکن ہوں، سائنس کے طالب علم، ڈیزائنر، استاد، یا صرف کھلی سائنس کے بارے میں پرجوش ہوں — ہم آپ کو اپنے ساتھ شامل کرنا پسند کریں گے!",
            "responsibilitiesHeading": "ذمہ داریاں",
            "responsibilities": [
                "اپنے ادارے یا کمیونٹی میں مہم کو فروغ دیں۔",
                "ممکنہ شراکت داروں کے ساتھ شرکت کے رہنما اصولوں کا اشتراک کریں۔",
                "اختیاری طور پر، آگاہی کی سرگرمیوں جیسے ورکشاپس یا فوٹو واکس کا اہتمام کریں (ہم مدد فراہم کر سکتے ہیں!)۔"
            ],
            "sidebar": {
                "title": "ابھی درخواست دیں",
                "description": "اثر ڈالنے کے لیے تیار ہیں؟ کیمپس ایمبیسیڈر بننے کے لیے فارم پُر کریں۔",
                "deadline": "آخری تاریخ: 31 اگست 2025",
                "cta": "درخواست فارم کھولیں"
            },
            "cta": {
                "text": "کیمپس ایمبیسیڈر بنیں",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "مقابلے کی تفصیلات",
            "subtitle": "حصہ لینے اور جیتنے کے لیے آپ کو جاننے کی ہر چیز۔",
            "howToParticipate": {
                "title": "حصہ لینے کا طریقہ",
                "p1": "اگر آپ کے پاس نہیں ہے، تو آپ ایک عالمی اکاؤنٹ بنا سکتے ہیں جو لاگ ان ہونے پر آپ کو تمام وکی میڈیا پلیٹ فارمز (بشمول وکی میڈیا کامنز) پر ایک مخصوص صارف نام دے گا۔ ایک نئے رجسٹرڈ صارف کے طور پر آپ کو ویڈیو فائل اپ لوڈ کرنے سے پہلے کم از کم چار دن انتظار کرنے کی ضرورت ہے، جبکہ تصاویر رجسٹریشن کے فوراً بعد اپ لوڈ کی جا سکتی ہیں۔",
                "createAccountLink": "یہاں اپنا اکاؤنٹ بنائیں!",
                "rulesTitle": "شرکت کے قواعد",
                "rules": [
                    "جمع کرائی گئی تصاویر آپ کا اپنا کام ہونا چاہیے، جو آپ کے اپنے رجسٹرڈ وکی میڈیا اکاؤنٹ سے اپ لوڈ کی گئی ہوں۔ متعدد مصنفین کی صورت میں، تمام نام فراہم کیے جانے چاہئیں۔",
                    "تصاویر ایک مفت لائسنس کے تحت ہونی چاہئیں (CC BY-SA 4.0, CC BY 4.0, CC0 1.0)۔",
                    "تمام جمع کرائی گئی تصاویر کے لیے انگریزی میں ایک واضح اور درست سائنسی تفصیل درکار ہے۔ دیگر زبانوں کا بھی خیرمقدم ہے۔",
                    {
                        "text": "سب سے زیادہ ممکنہ ریزولوشن (کم از کم 2 میگا پکسل) اپ لوڈ کریں۔ آپ میگا پکسل کی گنتی کی جانچ ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "یہاں"
                        }
                    },
                    "تصاویر میں واٹر مارکس، لوگو، یا اضافی متن/گرافکس (پیمانوں کے علاوہ) نہیں ہونے چاہئیں۔"
                ]
            },
            "keyDates": {
                "title": "اہم تاریخیں",
                "timeline": [
                    { "date": "1 نومبر 2025", "event": "جمع کرانے کا آغاز" },
                    { "date": "15 دسمبر 2025", "event": "جمع کرانے کا اختتام" },
                    { "date": "جنوری 2026", "event": "جیوری کا غور و خوض" },
                    { "date": "فروری 2026", "event": "قومی فاتحین کا اعلان" }
                ]
            },
            "submitNow": "ابھی جمع کروائیں",
            "imageCategories": {
                "title": "تصویر کی کیٹیگریز",
                "subtitle": "آپ مندرجہ ذیل سات کیٹیگریز میں حصہ لے سکتے ہیں۔ وہ منتخب کریں جو آپ کے کام کے لیے بہترین ہو۔ حوصلہ افزائی کے لیے نیچے دی گئی مثالیں دیکھیں۔"
            },
            "categories": {
                "people": { "name": "سائنس میں لوگ", "description": "سائنسدان اپنے قدرتی ماحول میں۔" },
                "microscopy": { "name": "مائیکروسکوپی تصاویر", "description": "آپٹیکل، الیکٹران، اور اسکیننگ پروب مائیکروسکوپی تصاویر۔" },
                "nonPhotographic": { "name": "غیر فوٹوگرافک میڈیا", "description": "آڈیو اور ویڈیو فائلز، کمپیوٹر سے تیار کردہ امیجری، وغیرہ۔" },
                "imageSets": { "name": "تصویری سیٹ", "description": "موضوعاتی طور پر منسلک تصاویر (10 تک) جنہیں ایک سیٹ کے طور پر دیکھا جا سکتا ہے۔" },
                "wildlife": { "name": "جنگلی حیات اور فطرت", "description": "جاندار اپنے قدرتی ماحول میں، بشمول میکرو فوٹوگرافی۔" },
                "astronomy": { "name": "فلکیات", "description": "ستاروں، آسمانی واقعات، اور انہیں قید کرنے کے لیے استعمال ہونے والے آلات کی تصاویر۔" },
                "general": { "name": "عمومی کیٹیگری", "description": "باقی سب کچھ، آثار قدیمہ سے لے کر آتش فشاں سائنس تک۔" }
            },
            "readyToParticipate": {
                "title": "حصہ لینے کے لیے تیار ہیں؟",
                "subtitle": "اسٹیج تیار ہے۔ آپ کا لینس کلید ہے۔ ہمیں اپنی سائنسی آنکھوں سے دنیا دکھائیں۔",
                "cta": "اپنا کام جمع کروائیں"
            },
            "supportedBy": "معاونت:"
        },
        "contact": {
            "title": "ہم سے رابطہ کریں",
            "subtitle": "سوالات یا تاثرات ہیں؟ ہم آپ سے سننا پسند کریں گے۔ ہم فوری جواب کا وعدہ کرتے ہیں!",
            "getInTouch": "رابطے میں رہیں",
            "p1": "فارم پُر کریں اور ہماری ٹیم چند گھنٹوں میں آپ سے رابطہ کرے گی۔ ہم مدد کے لیے یہاں ہیں!",
            "form": {
                "name": "پورا نام",
                "namePlaceholder": "آپ کا نام",
                "email": "ای میل ایڈریس",
                "emailPlaceholder": "your.email@example.com",
                "subject": "موضوع",
                "subjectPlaceholder": "اپنے سوال کے لیے ایک موضوع منتخب کریں",
                "otherSubjectPlaceholder": "براہ کرم اپنا موضوع واضح کریں",
                "message": "پیغام",
                "messagePlaceholder": "پہلے سے لکھا ہوا پیغام منتخب کریں یا 'دیگر...'",
                "otherMessagePlaceholder": "براہ کرم اپنا پیغام واضح کریں",
                "selectSubjectFirst": "براہ کرم پہلے ایک موضوع منتخب کریں",
                "submit": "پیغام بھیجیں",
                "submitting": "بھیجا جا رہا ہے..."
            },
            "toast": {
                "successTitle": "پیغام بھیج دیا گیا!",
                "successDescription": "ہم سے رابطہ کرنے کے لیے آپ کا شکریہ۔ ہم جلد ہی آپ سے رابطہ کریں گے۔",
                "errorTitle": "خرابی",
                "errorDescription": "کچھ غلط ہو گیا۔ براہ کرم دوبارہ کوشش کریں۔"
            }
        },
        "organizers": {
            "title": "منتظمین سے ملیں",
            "subtitle": "پہلے وکی سائنس مقابلہ انڈیا کو ایک بڑی کامیابی بنانے کے لیے پردے کے پیچھے کام کرنے والی وقف ٹیم۔",
            "lead_organizers": "مرکزی منتظمین",
            "advisors": "مشیران",
            "core_organizing_team": "کور آرگنائزنگ ٹیم",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "مرکزی منتظم",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "مرکزی منتظم",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "مشیر",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "کور آرگنائزنگ ٹیم",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "منتظمین کے لیے کال",
            "subtitle": "ہم یہ بتاتے ہوئے پرجوش ہیں کہ ہندوستان اس عالمی مہم کا اپنا مقامی ایڈیشن منعقد کرے گا جو وکی میڈیا کامنز پر آزادانہ لائسنس یافتہ تصاویر، ویڈیوز اور دیگر میڈیا کے ذریعے سائنس کو فروغ دیتا ہے۔",
            "joinHeading": "آرگنائزنگ ٹیم میں شامل ہوں",
            "joinDescription": "ہموار ہم آہنگی، آؤٹ ریچ، اور منصوبہ بندی کی حمایت کے لیے، ہم اپنی آرگنائزنگ ٹیم کو بڑھا رہے ہیں۔ اگر آپ اس اہم اقدام میں حصہ ڈالنے میں دلچسپی رکھتے ہیں، تو ہم آپ سے سننا پسند کریں گے۔",
            "lookingForHeading": "ہم کیا تلاش کر رہے ہیں",
            "lookingFor": [
                "سائنس، فوٹو گرافی، یا کھلے علم میں دلچسپی رکھنے والے پرجوش افراد۔",
                "ایونٹ کی منصوبہ بندی، آؤٹ ریچ، سوشل میڈیا مینجمنٹ، یا مواد کی تخلیق میں مہارت۔",
                "ایک باہمی تعاون کا جذبہ اور ایک اہم اثر ڈالنے کی خواہش۔"
            ],
            "sidebarTitle": "ابھی درخواست دیں",
            "sidebarDescription": "ہندوستان میں پہلے وکی سائنس مقابلے کی تشکیل میں ہماری مدد کریں۔",
            "deadline": "درخواستیں بند: 15 جولائی 2025",
            "cta": "درخواستیں بند"
        },
        "resources": {
            "title": "وسائل",
            "subtitle": "ماضی کے فاتحین سے متاثر ہوں اور اپنی جمع کرانے کی تیاری کے لیے مددگار مواد تک رسائی حاصل کریں۔",
            "pastWinners": {
                "title": "ماضی کے فاتحین کی گیلری",
                "winnerLabel": "فاتح",
                "winners": [
                    { "year": 2023, "category": "فلکیات", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "حیاتیات", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "کیمیا", "winner": "Priya Desai" },
                    { "year": 2022, "category": "فلکیات", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "سیکھنے کا مواد",
                "cta": "مزید جانیں",
                "resources": [
                    { "title": "سائنس فوٹوگرافی کے لیے گائیڈ", "description": "شاندار سائنسی تصاویر لینے کی بنیادی باتیں سیکھیں۔", "link": "#" },
                    { "title": "کریٹیو کامنز کو سمجھنا", "description": "مقابلے کے لیے اپنے کام کو لائسنس دینے کے لیے ایک فوری گائیڈ۔", "link": "#" },
                    { "title": "تصویر اپ لوڈ ٹیوٹوریل", "description": "اپنی تصاویر جمع کرانے کے طریقے پر مرحلہ وار ویڈیو۔", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "ہماری مدد کریں",
            "subtitle": "وکی سائنس مقابلہ انڈیا 2025 کو ایک بڑی کامیابی بنانے میں ہماری مدد کریں۔",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "اسپانسر بنیں",
                    "description": "آپریشنل اخراجات، انعامی رقم، اور ایونٹ مینجمنٹ کو پورا کرنے میں مدد کے لیے مالیاتی شراکت کے ساتھ ہماری مدد کریں۔ ہم نمایاں برانڈنگ کے مواقع کے ساتھ مختلف اسپانسرشپ ٹائرز پیش کرتے ہیں۔",
                    "cta": "اسپانسرشپ کے لیے رابطہ کریں"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "تحائف اور سواگ فراہم کریں",
                    "description": "ہمارے فاتحین اور شرکاء کے لیے دلچسپ تحائف، واؤچرز، یا برانڈڈ تجارتی سامان (سواگ) کے ساتھ ہمارے انعامی پول میں حصہ ڈالیں۔ اپنے برانڈ کو سائنس کے شائقین کے ہاتھوں میں پہنچائیں۔",
                    "cta": "تحائف پیش کریں"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "آؤٹ ریچ اور مارکیٹنگ",
                    "description": "بات پھیلانے کے لیے ہمارے ساتھ تعاون کریں۔ اپنے ادارہ جاتی چینلز، سوشل میڈیا، یا مارکیٹنگ کی مہارت کے ذریعے ایک وسیع تر سامعین تک پہنچنے میں ہماری مدد کریں۔",
                    "cta": "آؤٹ ریچ پر تعاون کریں"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "خوردبینی دنیاؤں کو دریافت کریں", "description": "سیلولر ڈھانچے سے لے کر کرسٹل فارمیشنز تک، نادیدہ خوبصورتی کو ظاہر کریں۔" },
                    { "id": 2, "title": "آسمانی عجائبات کو قید کریں", "description": "کائنات آپ کا کینوس ہے۔ کہکشاؤں، نیبولا، اور سیاروں کے واقعات کی تصویر کشی کریں۔" },
                    { "id": 3, "title": "پیچیدہ ڈیٹا کا تصور کریں", "description": "خام ڈیٹا کو زبردست سائنسی تصورات اور انفوگرافکس میں تبدیل کریں۔" },
                    { "id": 4, "title": "انسانی ذہانت کو دستاویز کریں", "description": "سائنسدانوں کو کام کرتے ہوئے، جدید لیب کے آلات، اور دریافت کے لمحات کو قید کریں۔" }
                ]
            },
            "cta": {
                "title": "شامل ہوں",
                "subtitle": "ہندوستان کے پہلے قومی وکی سائنس مقابلے کا حصہ بنیں۔ ہم پرجوش افراد اور تنظیموں کو ہمارے ساتھ شامل ہونے کے لیے تلاش کر رہے ہیں۔",
                "campus": {
                    "title": "کیمپس ایمبیسیڈرز کے لیے کال",
                    "description": "اپنے ادارے میں مہم کو فروغ دیں، رہنما اصولوں کا اشتراک کریں، اور آگاہی کی سرگرمیوں کو منظم کرنے میں مدد کریں۔",
                    "deadline": "آخری تاریخ: 31 اگست 2025",
                    "cta": "ابھی درخواست دیں"
                },
                "affiliates": {
                    "title": "وکی میڈیا سے وابستہ اداروں کے لیے کال",
                    "description": "مہم کو فروغ دینے، مقامی آؤٹ ریچ کو منظم کرنے، اور اپنے علاقے سے موثر سائنسی شراکت لانے میں مدد کے لیے ہمارے ساتھ شراکت کریں۔",
                    "deadline": "آخری تاریخ: 31 اگست 2025",
                    "cta": "ہمارے ساتھ شراکت کریں"
                }
            },
            "info": {
                "title": "ہر وہ چیز جو آپ کو جاننے کی ضرورت ہے",
                "subtitle": "جمع کرانے کے رہنما اصولوں سے لے کر جیوری کی تفصیلات تک، اس دلچسپ ایونٹ کا حصہ بننے کے لیے تمام معلومات حاصل کریں۔",
                "cta": "مزید معلومات حاصل کریں",
                "sections": [
                    { "icon": "Info", "title": "مقابلے کے بارے میں", "description": "ایک سالانہ بین الاقوامی سائنس فوٹوگرافی مقابلہ، جو سائنس کے شائقین کو تحقیق کی دنیا کے اپنے وژن کا اشتراک کرنے کے لیے اکٹھا کرتا ہے۔", "link": "/about" },
                    { "icon": "Target", "title": "حصہ لینے کا طریقہ", "description": "شرکت مفت اور سب کے لیے کھلی ہے۔ جمع کرانے کی مدت کے دوران مختلف کیٹیگریز میں اپنی بہترین سائنس سے متعلقہ تصاویر جمع کروائیں۔", "link": "/competition" },
                    { "icon": "Award", "title": "انعامات اور شناخت", "description": "فاتحین کو قومی شناخت، سرٹیفکیٹ، اور انعامات ملتے ہیں۔ بہترین تصاویر بین الاقوامی فائنل میں بھی آگے بڑھتی ہیں۔", "link": "/competition" },
                    { "icon": "Users", "title": "جیوری اور معیار", "description": "ہمارے ماہر جیوری، جس میں سائنسدان اور فوٹوگرافر شامل ہیں، اندراجات کا فیصلہ سائنسی قدر، اصلیت، اور جمالیاتی معیار کی بنیاد پر کریں گے۔", "link": "/jury" },
                    { "icon": "History", "title": "ماضی کے فاتحین", "description": "پچھلے سالوں کی جیتنے والی تصاویر کی گیلری کو دریافت کریں اور ناقابل یقین ٹیلنٹ سے متاثر ہوں۔", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "حصہ لینے کے لیے تیار ہیں؟",
                    "subtitle": "اسٹیج تیار ہے۔ آپ کا لینس کلید ہے۔ ہمیں اپنی سائنسی آنکھوں سے دنیا دکھائیں۔",
                    "cta": "اپنا کام جمع کروائیں"
                }
            },
            "prizes": {
                "title": "انعامات اور شناخت",
                "subtitle": "آپ کے اہم بصری مواد کا جشن منایا جانا چاہیے۔ دریافت کریں کہ آپ کیا جیت سکتے ہیں۔",
                "prizes": [
                    { "icon": "Award", "title": "قومی شناخت", "description": "فاتحین کو ہمارے سرکاری پلیٹ فارمز پر منایا جائے گا اور قومی میڈیا کوریج حاصل ہوگی۔" },
                    { "icon": "Camera", "title": "اعلیٰ درجے کا سامان", "description": "بہترین فاتحین کے لیے دلچسپ فوٹوگرافی گیئر اور لوازمات تاکہ ان کے شوق میں مدد مل سکے۔" },
                    { "icon": "BookOpen", "title": "اشاعت میں شمولیت", "description": "اپنے کام کو معزز سائنس میگزینز اور اشاعتوں میں نمایاں کروائیں۔" }
                ]
            },
            "jury": {
                "title": "معزز جیوری سے ملیں",
                "description": "ہمارے پینل میں ہندوستان بھر سے مشہور سائنسدانوں، پیشہ ور فوٹوگرافروں، اور سائنس کمیونیکیٹرز کا ایک متنوع گروپ شامل ہے۔ وہ ایک منصفانہ اور بصیرت انگیز تشخیصی عمل کو یقینی بنانے کے لیے وسیع تجربہ لاتے ہیں۔",
                "cta": "مکمل پینل دیکھیں"
            }
        }
    },
    gu: {
        mainNavLinks: [
            { name: 'વિશે', href: '/about' },
            { name: 'સ્પર્ધા', href: '/competition' },
            { name: 'સંસાધનો', href: '/resources' },
            { name: 'પ્રાયોજકો', href: '/sponsors' },
        ],
        organizerLinks: [
            { name: 'ટીમને મળો', href: '/organizers' },
            { name: 'કેમ્પસ એમ્બેસેડર', href: '/campus-ambassadors' },
            { name: 'ટીમ માટે કૉલ', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'જ્યુરી', href: '/jury' },
            { name: 'અમને સપોર્ટ કરો', href: '/support-us' },
            { name: 'સંપર્ક', href: '/contact' },
        ],
        learningLinks: [
            { name: 'વિકિ એકાઉન્ટ કેવી રીતે બનાવવું', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
            { name: 'અપલોડ વિઝાર્ડનો ઉપયોગ કેવી રીતે કરવો', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
            { name: 'CC લાઇસન્સને સમજવું', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
            { name: 'શ્રેણીઓ કેવી રીતે ઉમેરવી', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
        ],
        organizersDropdown: 'આયોજકો',
        moreDropdown: 'વધુ',
        learningDropdown: 'શીખવું',
        participateButton: 'ભાગ લો',
        footerNavLinks: [
            { name: 'વિશે', href: '/about' },
            { name: 'સ્પર્ધા', href: '/competition' },
            { name: 'જ્યુરી', href: '/jury' },
            { name: 'આયોજકો', href: '/organizers' },
            { name: 'પ્રાયોજકો', href: '/sponsors' },
            { name: 'સંસાધનો', href: '/resources' },
            { name: 'કેમ્પસ એમ્બેસેડર', href: '/campus-ambassadors' },
            { name: 'સંપર્ક', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'પ્રાયોજક', href: '/support-us#sponsorship' },
            { name: 'ભેટ/સ્વેગ', href: '/support-us#gifts' },
            { name: 'આઉટરીચ', href: '/support-us#outreach' },
        ],
        footerSubtitle: 'ફોટોગ્રાફી દ્વારા વિજ્ઞાનની સુંદરતાને કેપ્ચર કરવું.',
        footerNavHeader: 'નેવિગેશન',
        footerSupportHeader: 'અમને સપોર્ટ કરો',
        footerContactHeader: 'સંપર્ક',
        footerCopyright: 'વિકિ સાયન્સ કોમ્પિટિશન ઇન્ડિયા. સર્વાધિકાર સુરક્ષિત.',
        footerLicense: 'અન્યથા ઉલ્લેખ ન હોય ત્યાં સુધી સામગ્રી CC BY-SA 4.0 હેઠળ ઉપલબ્ધ છે.',
        footerDeveloperCredit: 'દ્વારા ડિઝાઇન અને વિકસિત',
        about: {
            title: 'વિકિસાયન્સ ઇન્ડિયા 2025 વિશે',
            badge: 'ભારતીય સંદર્ભ માટે પરિચય',
            heading: 'વિકિ સાયન્સ કોમ્પિટિશન 2025 - ભારત',
            p1: 'પ્રથમ વખત, ભારત વિકિ સાયન્સ કોમ્પિટિશન (WSC) ની રાષ્ટ્રીય આવૃત્તિનું આયોજન કરી રહ્યું છે — જે વિશ્વની સૌથી મોટી પહેલોમાંની એક છે જે વિજ્ઞાન, ફોટોગ્રાફી અને મુક્ત જ્ઞાનને એકસાથે લાવે છે.',
            p2: '2011 માં એસ્ટોનિયામાં શરૂ થયેલી અને પાછળથી સમગ્ર યુરોપ અને વિશ્વભરમાં વિસ્તરેલી આ સ્પર્ધાએ હજારો વૈજ્ઞાનિકો, સંશોધકો અને ઉત્સાહીઓને વિજ્ઞાનના અજાયબીને કેપ્ચર કરતી છબીઓ શેર કરવા માટે પ્રેરણા આપી છે. માઇક્રોસ્કોપિક કોષોથી માંડીને બ્રહ્માંડની આકાશગંગાઓ સુધી, આ મુક્તપણે લાઇસન્સ પ્રાપ્ત યોગદાન વિકિમીડિયા કોમન્સને સમૃદ્ધ બનાવે છે અને વૈશ્વિક સ્તરે ખુલ્લા શિક્ષણને સમર્થન આપે છે.',
            p3: 'ભારતે ગર્વભેર ભૂતકાળની આંતરરાષ્ટ્રીય આવૃત્તિઓમાં યોગદાન આપ્યું છે — જેમાં ભારતીય ફોટોગ્રાફરો અને વૈજ્ઞાનિકોને માન્યતા અને પુરસ્કારો મળ્યા છે. જોકે, આ પ્રથમ વખત છે જ્યારે ભારત તેની પોતાની સ્થાનિક સ્પર્ધાનું આયોજન કરી રહ્યું છે, જે આપણા દેશની વૈજ્ઞાનિક ભાવના અને સર્જનાત્મકતાને પ્રદર્શિત કરવા માટે સમર્પિત છે.',
            p4: 'વિકિ સાયન્સ કોમ્પિટિશન 2025 – ભારત એ માત્ર એક સ્પર્ધા નથી. શક્તિશાળી છબીઓ, વાર્તાઓ અને સર્જનાત્મકતા દ્વારા - ભારતીય વિજ્ઞાનને વિશ્વ સમક્ષ રજૂ કરવાનો આ એક સામૂહિક પ્રયાસ છે.',
            aims: {
                title: 'અમારા ઉદ્દેશ્યો',
                subtitle: 'આ અભિયાન દ્વારા, અમારો હેતુ છે:',
                items: [
                    { icon: 'PenSquare', title: 'યોગદાનને પ્રોત્સાહિત કરો', description: 'સમગ્ર ભારતમાં વિદ્યાર્થીઓ, સંશોધકો અને ઉત્સાહીઓને મૂલ્યવાન વૈજ્ઞાનિક મીડિયાનું યોગદાન આપવા માટે પ્રોત્સાહિત કરો.' },
                    { icon: 'Lightbulb', title: 'જાગૃતિ કેળવો', description: 'ખુલ્લા વિજ્ઞાન અને મુક્ત જ્ઞાનના મહત્વ વિશે જાગૃતિ કેળવો.' },
                    { icon: 'Globe', title: 'વારસાની ઉજવણી કરો', description: 'ભારતના સમૃદ્ધ વૈજ્ઞાનિક વારસા અને ચાલુ નવીનતાઓની ઉજવણી કરો.' },
                    { icon: 'Handshake', title: 'સહયોગ મજબૂત કરો', description: 'વિકિમીડિયા સમુદાયો, યુનિવર્સિટીઓ, સંશોધન સંસ્થાઓ અને સંસ્થાઓ વચ્ચે સહયોગ મજબૂત કરો.' }
                ]
            },
            supportingOrg: {
                title: 'સહાયક સંસ્થા',
                p1: 'વિકિ ક્લબ SATI (વિદિશા, મધ્ય પ્રદેશ) ને ભારતમાં વિકિ સાયન્સ કોમ્પિટિશન 2025 ની પ્રથમ રાષ્ટ્રીય આવૃત્તિ માટે સહાયક સંસ્થા તરીકે સ્વીકારવામાં આવી છે. આ ક્લબ વિદ્યાર્થીઓ અને યુવા વ્યાવસાયિકોને વિકિમીડિયા ચળવળમાં જોડવા, ખુલ્લા જ્ઞાન, તકનીકી નવીનતા અને સમુદાય-આધારિત પહેલમાં યોગદાન આપવા માટે અગ્રેસર રહી છે.',
                p2: 'કોર ઓર્ગેનાઇઝિંગ ટીમના ઘણા સભ્યો વિકિ ક્લબ SATI સાથે સંકળાયેલા છે, અને તેમની સતત સંડોવણી મુક્ત જ્ઞાન અને વૈજ્ઞાનિક જોડાણને આગળ વધારવા માટે ક્લબની પ્રતિબદ્ધતાને પ્રતિબિંબિત કરે છે. જ્યારે સમર્થન બિન-નાણાકીય છે, ત્યારે વિકિ ક્લબ SATI ની સંસ્થાકીય ક્ષમતા, અનુભવ અને સામુદાયિક નેટવર્ક આ અભિયાનને રાષ્ટ્રીય સ્તરે સક્ષમ બનાવવામાં આવશ્યક ભૂમિકા ભજવે છે.'
            }
        },
        campusAmbassadors: {
            title: 'કેમ્પસ એમ્બેસેડર',
            subtitle: 'તેમના સમુદાયોમાં વિકિ સાયન્સ કોમ્પિટિશનને આગળ ધપાવનારા ઉત્સાહી નેતાઓને મળો.',
            ambassadors: [
                {
                    name: 'Anushka Patel',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
                    description: 'વિકિ ક્લબ SATI',
                    boardLink: {
                        name: 'વિકિ ક્લબ SATI',
                        url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
                    },
                },
                {
                    name: 'Neechalkaran',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                    description: 'તમિલનાડુના વિકિપીડિયન અને કોમ્પ્યુટેશનલ ભાષાશાસ્ત્રી',
                },
                {
                    name: 'Santhosh Notagar',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                    description: 'એચઓડી અને સહાયક પ્રોફેસર, કોમ્પ્યુટર એનિમેશન વિભાગ, સેન્ટ એલોસિયસ',
                    wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
                },
                {
                    name: 'Samiya Ahmed',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                    description: 'દેવબંદ સમુદાય',
                    boardLink: {
                        name: 'દેવબંદ સમુદાય',
                        url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
                    },
                },
                {
                    name: 'Satheesh M',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    description: 'હાલમાં કન્યાકુમારી જિલ્લામાં આઈટી અને સર્વેલન્સ પ્રોજેક્ટ્સ કરી રહ્યા છે',
                },
                {
                    name: 'Kaartic Sivaraam',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                    description: 'તમિલ વિકિપીડિયન, સોફ્ટવેર એન્જિનિયર',
                },
                {
                    name: 'Osama',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
                    description: 'વિકિપીડિયન',
                },
            ]
        },
        affiliates: {
            title: 'વિકિમીડિયા સંલગ્ન સંસ્થાઓ માટે કૉલ',
            subtitle: 'અમે સમગ્ર ભારતમાં વિકિમીડિયા સંલગ્ન સંસ્થાઓ, વપરાશકર્તા જૂથો અને સંસ્થાઓને વિકિ સાયન્સ કોમ્પિટિશન 2025 ના પ્રચાર અને સમર્થનમાં અમારી સાથે સહયોગ કરવા માટે આમંત્રિત કરી રહ્યા છીએ.',
            partnerHeading: 'અમારી સાથે ભાગીદારી શા માટે?',
            partnerDescription: 'આ વિજ્ઞાનની ઉજવણી કરવાની અને વિકિમીડિયા કોમન્સને મુક્તપણે લાઇસન્સ પ્રાપ્ત મીડિયા સાથે સમૃદ્ધ બનાવવાની એક અનોખી તક છે. ભાગીદાર તરીકે, તમારું જૂથ આઉટરીચ, જાગૃતિ અને સમુદાય જોડાણમાં મદદ કરીને ભારતની પ્રથમ રાષ્ટ્રીય વિકિ વિજ્ઞાન સ્પર્ધાને સફળ બનાવવામાં મુખ્ય ભૂમિકા ભજવી શકે છે.',
            collaborationHeading: 'તમે કેવી રીતે સહયોગ કરી શકો છો',
            collaborationPoints: [
                'તમારા નેટવર્કમાં ઓનલાઈન અને ઓફલાઈન આઉટરીચમાં જોડાઓ.',
                'સંસ્થાઓ અને સંશોધન સંસ્થાઓમાંથી અપલોડની સુવિધા આપો.',
                'સ્થાનિક વર્કશોપ, એડિટ-એ-થોન અથવા ફોટોવોકનું આયોજન કરો.',
                'અભિયાન સામગ્રીના અનુવાદ અને સ્થાનિકીકરણમાં સહાય કરો.',
            ],
            formNote: 'આ ફોર્મ માન્ય વિકિમીડિયા સંલગ્ન સંસ્થાઓ અથવા સમુદાય જૂથો માટે છે. વ્યક્તિઓ અને વિદ્યાર્થીઓએ ',
            campusAmbassadorLink: 'કેમ્પસ એમ્બેસેડર ફોર્મ',
            sidebarTitle: 'અમારી સાથે ભાગીદારી કરો',
            sidebarDescription: 'ચાલો વિશ્વ સમક્ષ ભારતના વૈજ્ઞાનિક પરિદ્રશ્યને પ્રદર્શિત કરવા માટે સહયોગ કરીએ.',
            deadline: 'અંતિમ તારીખ: 31 ઓગસ્ટ 2025',
            cta: 'ભાગીદારી ફોર્મ ખોલો'
        },
        campus: {
            title: 'કેમ્પસ એમ્બેસેડર માટે કૉલ',
            subtitle: 'તમારી સંસ્થા, સમુદાય અથવા નેટવર્કમાં વિકિ સાયન્સ કોમ્પિટિશન 2025 ને પ્રોત્સાહન આપવામાં મદદ કરવા માટે સ્થાનિક આઉટરીચ કોઓર્ડિનેટર તરીકે અમારી સાથે જોડાઓ.',
            whoHeading: 'અમે કોને શોધી રહ્યા છીએ?',
            whoDescription: 'કેમ્પસ એમ્બેસેડર જાગૃતિ ફેલાવવા, સહભાગીઓને માર્ગદર્શન આપવા અને વૈકલ્પિક રીતે જાગૃતિ સત્રો અથવા વર્કશોપનું આયોજન કરવામાં મુખ્ય ભૂમિકા ભજવે છે. ભલે તમે વિકિમીડિયન, વિજ્ઞાનના વિદ્યાર્થી, ડિઝાઇનર, શિક્ષક, અથવા ફક્ત ખુલ્લા વિજ્ઞાન વિશે ઉત્સાહી હોવ—અમને તમને અમારી ટીમમાં સામેલ કરવાનું ગમશે!',
            responsibilitiesHeading: 'જવાબદારીઓ',
            responsibilities: [
                'તમારી સંસ્થા અથવા સમુદાયમાં અભિયાનનો પ્રચાર કરો.',
                'સંભવિત યોગદાનકર્તાઓ સાથે ભાગીદારી માર્ગદર્શિકા શેર કરો.',
                'વૈકલ્પિક રીતે, વર્કશોપ અથવા ફોટોવોક જેવી જાગૃતિ પ્રવૃત્તિઓનું આયોજન કરો (અમે સમર્થન આપી શકીએ છીએ!).',
            ],
            sidebar: {
                title: 'હવે અરજી કરો',
                description: 'પ્રભાવ પાડવા માટે તૈયાર છો? કેમ્પસ એમ્બેસેડર બનવા માટે ફોર્મ ભરો.',
                deadline: 'અંતિમ તારીખ: 31 ઓગસ્ટ 2025',
                cta: 'અરજી ફોર્મ ખોલો'
            },
            cta: {
                text: 'કેમ્પસ એમ્બેસેડર બનો',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
            }
        },
        competition: {
            title: 'સ્પર્ધાની વિગતો',
            subtitle: 'ભાગ લેવા અને જીતવા માટે તમારે જે બધું જાણવાની જરૂર છે.',
            howToParticipate: {
                title: 'કેવી રીતે ભાગ લેવો',
                p1: 'જો તમારી પાસે એકાઉન્ટ નથી, તો તમે એક વૈશ્વિક એકાઉન્ટ બનાવી શકો છો જે તમને લૉગ ઇન કરતી વખતે તમામ વિકિમીડિયા પ્લેટફોર્મ (વિકિમીડિયા કોમન્સ સહિત) પર ચોક્કસ વપરાશકર્તાનામ આપશે. નવા નોંધાયેલા વપરાશકર્તા તરીકે તમારે વિડિઓ ફાઇલ અપલોડ કરતા પહેલા ઓછામાં ઓછા ચાર દિવસ રાહ જોવી પડશે, જ્યારે છબીઓ નોંધણી પછી તરત જ અપલોડ કરી શકાય છે.',
                createAccountLink: 'તમારું એકાઉન્ટ અહીં બનાવો!',
                rulesTitle: 'ભાગીદારીના નિયમો',
                rules: [
                    'સબમિશન તમારી પોતાની રચના હોવી જોઈએ, જે તમારા પોતાના રજિસ્ટર્ડ વિકિમીડિયા એકાઉન્ટમાંથી અપલોડ થયેલ હોય. બહુવિધ લેખકો માટે, બધા નામો પ્રદાન કરવા આવશ્યક છે.',
                    'છબીઓ મુક્ત લાઇસન્સ (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) હેઠળ હોવી આવશ્યક છે.',
                    'બધા સબમિશન માટે અંગ્રેજીમાં સ્પષ્ટ અને સચોટ વૈજ્ઞાનિક વર્ણન જરૂરી છે. અન્ય ભાષાઓ પણ આવકાર્ય છે.',
                    {
                        text: 'શક્ય તેટલું ઉચ્ચતમ રિઝોલ્યુશન અપલોડ કરો (ઓછામાં ઓછું 2 મેગાપિક્સલ). તમે મેગાપિક્સલ ગણતરી ચકાસી શકો છો ',
                        link: {
                            url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                            label: 'અહીં'
                        }
                    },
                    'છબીઓમાં વોટરમાર્ક, લોગો અથવા ઉમેરાયેલ ટેક્સ્ટ/ગ્રાફિક્સ (સ્કેલ સિવાય) ન હોવા જોઈએ.',
                ]
            },
            keyDates: {
                title: 'મહત્વપૂર્ણ તારીખો',
                timeline: [
                    { date: 'નવેમ્બર 1, 2025', event: 'સબમિશન શરૂ' },
                    { date: 'ડિસેમ્બર 15, 2025', event: 'સબમિશન બંધ' },
                    { date: 'જાન્યુઆરી 2026', event: 'જ્યુરી દ્વારા વિચાર-વિમર્શ' },
                    { date: 'ફેબ્રુઆરી 2026', event: 'રાષ્ટ્રીય વિજેતાઓની જાહેરાત' },
                ],
            },
            submitNow: 'હવે સબમિટ કરો',
            imageCategories: {
                title: 'છબી શ્રેણીઓ',
                subtitle: 'તમે નીચેની સાત શ્રેણીઓમાં ભાગ લઈ શકો છો. તમારા કાર્યને શ્રેષ્ઠ રીતે બંધબેસતી હોય તે પસંદ કરો. પ્રેરણા મેળવવા માટે નીચેના ઉદાહરણો જુઓ.'
            },
            categories: {
                people: { name: 'વિજ્ઞાનમાં લોકો', description: 'વૈજ્ઞાનિકો તેમના કુદરતી નિવાસસ્થાનમાં.' },
                microscopy: { name: 'માઇક્રોસ્કોપી છબીઓ', description: 'ઓપ્ટિકલ, ઇલેક્ટ્રોન અને સ્કેનિંગ પ્રોબ માઇક્રોસ્કોપી છબીઓ.' },
                nonPhotographic: { name: 'બિન-ફોટોગ્રાફિક મીડિયા', description: 'ઓડિયો અને વિડિયો ફાઇલો, કમ્પ્યુટર-જનરેટેડ છબીઓ, વગેરે.' },
                imageSets: { name: 'છબી સેટ', description: 'વિષયવાર રીતે જોડાયેલ છબીઓ (10 સુધી) જે એક સેટ તરીકે જોઈ શકાય છે.' },
                wildlife: { name: 'વન્યજીવન અને પ્રકૃતિ', description: 'મેક્રો ફોટોગ્રાફી સહિત, તેમના કુદરતી નિવાસસ્થાનમાં જીવો.' },
                astronomy: { name: 'ખગોળશાસ્ત્ર', description: 'તારાઓ, આકાશી ઘટનાઓ અને તેમને કેપ્ચર કરવા માટે વપરાતા સાધનોની છબીઓ.' },
                general: { name: 'સામાન્ય શ્રેણી', description: 'પુરાતત્વથી લઈને જ્વાળામુખી વિજ્ઞાન સુધી, બાકી બધું.' },
            },
            readyToParticipate: {
                title: 'ભાગ લેવા માટે તૈયાર છો?',
                subtitle: 'મંચ તૈયાર છે. તમારો લેન્સ ચાવી છે. અમને તમારી વૈજ્ઞાનિક આંખો દ્વારા વિશ્વ બતાવો.',
                cta: 'તમારું કાર્ય સબમિટ કરો',
            },
            supportedBy: 'દ્વારા સમર્થિત:',
        },
        contact: {
            title: 'અમારો સંપર્ક કરો',
            subtitle: 'પ્રશ્નો અથવા પ્રતિસાદ છે? અમને તમારી પાસેથી સાંભળવું ગમશે. અમે ઝડપી જવાબનું વચન આપીએ છીએ!',
            getInTouch: 'સંપર્કમાં રહો',
            p1: 'ફોર્મ ભરો અને અમારી ટીમ થોડા કલાકોમાં તમારો સંપર્ક કરશે. અમે મદદ કરવા માટે અહીં છીએ!',
            form: {
                name: 'પૂરું નામ',
                namePlaceholder: 'તમારું નામ',
                email: 'ઈમેલ સરનામું',
                emailPlaceholder: 'tamarum.email@example.com',
                subject: 'વિષય',
                subjectPlaceholder: 'તમારી ક્વેરી માટે વિષય પસંદ કરો',
                otherSubjectPlaceholder: 'કૃપા કરીને તમારો વિષય સ્પષ્ટ કરો',
                message: 'સંદેશ',
                messagePlaceholder: 'પૂર્વ-લિખિત સંદેશ અથવા \'અન્ય...\' પસંદ કરો',
                otherMessagePlaceholder: 'કૃપા કરીને તમારો સંદેશ સ્પષ્ટ કરો',
                selectSubjectFirst: 'કૃપા કરીને પહેલા વિષય પસંદ કરો',
                submit: 'સંદેશ મોકલો',
                submitting: 'મોકલી રહ્યું છે...',
            },
            toast: {
                successTitle: 'સંદેશ મોકલાયો!',
                successDescription: 'અમારો સંપર્ક કરવા બદલ આભાર. અમે ટૂંક સમયમાં તમારો સંપર્ક કરીશું.',
                errorTitle: 'ભૂલ',
                errorDescription: 'કંઈક ખોટું થયું. કૃપા કરીને ફરી પ્રયાસ કરો.',
            }
        },
        organizers: {
            title: 'આયોજકોને મળો',
            subtitle: 'પ્રથમ વિકિ સાયન્સ કોમ્પિટિશન ઇન્ડિયાને ભવ્ય સફળતા અપાવવા માટે પડદા પાછળ કામ કરતી સમર્પિત ટીમ.',
            lead_organizers: 'મુખ્ય આયોજકો',
            advisors: 'સલાહકારો',
            core_organizing_team: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
            team: [
                {
                    id: 'dev_jadiya',
                    name: 'Dev Jadiya',
                    role: 'મુખ્ય આયોજક',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'Gauri Gupta',
                    role: 'મુખ્ય આયોજક',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'Suyash Dwivedi',
                    role: 'સલાહકાર',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'Sai Kiran',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'Chinmayee Mishra',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'Athul R T',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'Uday Dongre',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'Pankaj Yadav',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'Ashmita Bathre',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'Aanchal Patel',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
                    name: 'Riddhi Sharma',
                    role: 'કોર ઓર્ગેનાઇઝિંગ ટીમ',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
                }
            ]
        },
        organizersCall: {
            title: 'આયોજકો માટે કૉલ',
            subtitle: 'અમે એ જણાવતા ઉત્સાહિત છીએ કે ભારત આ વૈશ્વિક અભિયાનની પોતાની સ્થાનિક આવૃત્તિનું આયોજન કરશે જે વિકિમીડિયા કોમન્સ પર મુક્તપણે લાઇસન્સ પ્રાપ્ત છબીઓ, વિડિઓઝ અને અન્ય મીડિયા દ્વારા વિજ્ઞાનને પ્રોત્સાહન આપે છે.',
            joinHeading: 'આયોજક ટીમમાં જોડાઓ',
            joinDescription: 'સરળ સંકલન, આઉટરીચ અને આયોજનને સમર્થન આપવા માટે, અમે અમારી આયોજક ટીમનો વિસ્તાર કરી રહ્યા છીએ. જો તમે આ મહત્વપૂર્ણ પહેલમાં યોગદાન આપવા માટે રસ ધરાવો છો, તો અમને તમારી પાસેથી સાંભળવું ગમશે.',
            lookingForHeading: 'અમે શું શોધી રહ્યા છીએ',
            lookingFor: [
                'વિજ્ઞાન, ફોટોગ્રાફી અથવા ખુલ્લા જ્ઞાનમાં રસ ધરાવતી ઉત્સાહી વ્યક્તિઓ.',
                'ઇવેન્ટ પ્લાનિંગ, આઉટરીચ, સોશિયલ મીડિયા મેનેજમેન્ટ અથવા કન્ટેન્ટ ક્રિએશનમાં કુશળતા.',
                'એક સહયોગી ભાવના અને નોંધપાત્ર અસર કરવાની ઇચ્છા.',
            ],
            sidebarTitle: 'હવે અરજી કરો',
            sidebarDescription: 'ભારતમાં પ્રથમ વિકિ સાયન્સ કોમ્પિટિશનને આકાર આપવામાં અમારી મદદ કરો.',
            deadline: 'અરજીઓ બંધ: 15 જુલાઈ 2025',
            cta: 'અરજીઓ બંધ'
        },
        resources: {
            title: 'સંસાધનો',
            subtitle: 'ભૂતકાળના વિજેતાઓ પાસેથી પ્રેરણા મેળવો અને તમારું સબમિશન તૈયાર કરવા માટે મદદરૂપ સામગ્રીનો ઉપયોગ કરો.',
            pastWinners: {
                title: 'ભૂતકાળના વિજેતાઓની ગેલેરી',
                winnerLabel: 'વિજેતા',
                winners: [
                    { year: 2023, category: 'ખગોળશાસ્ત્ર', winner: 'Anjali Sharma' },
                    { year: 2023, category: 'જીવવિજ્ઞાન', winner: 'Rohan Mehta' },
                    { year: 2022, category: 'રસાયણશાસ્ત્ર', winner: 'Priya Desai' },
                    { year: 2022, category: 'ખગોળશાસ્ત્ર', winner: 'Vikram Singh' },
                ]
            },
            learningMaterials: {
                title: 'શીખવાની સામગ્રી',
                cta: 'વધુ શીખો',
                resources: [
                    { title: 'વિજ્ઞાન ફોટોગ્રાફી માટે માર્ગદર્શિકા', description: 'અદભૂત વૈજ્ઞાનિક છબીઓ કેપ્ચર કરવાની મૂળભૂત બાબતો શીખો.', link: '#' },
                    { title: 'ક્રિએટિવ કોમન્સને સમજવું', description: 'સ્પર્ધા માટે તમારા કાર્યને લાઇસન્સ આપવા માટે એક ઝડપી માર્ગદર્શિકા.', link: '#' },
                    { title: 'છબી અપલોડ ટ્યુટોરીયલ', description: 'તમારા ફોટા કેવી રીતે સબમિટ કરવા તેના પર સ્ટેપ-બાય-સ્ટેપ વિડિયો.', link: '#' },
                ]
            }
        },
        support: {
            title: 'અમને સપોર્ટ કરો',
            subtitle: 'વિકિ સાયન્સ કોમ્પિટિશન ઇન્ડિયા 2025 ને ભવ્ય સફળ બનાવવામાં અમારી મદદ કરો.',
            options: [
                {
                    id: 'sponsorship',
                    icon: 'Handshake',
                    title: 'પ્રાયોજક બનો',
                    description: 'ઓપરેશનલ ખર્ચ, ઇનામની રકમ અને ઇવેન્ટ મેનેજમેન્ટને આવરી લેવામાં મદદ કરવા માટે નાણાકીય યોગદાન સાથે અમને સમર્થન આપો. અમે પ્રમુખ બ્રાન્ડિંગ તકો સાથે વિવિધ સ્પોન્સરશિપ સ્તરો ઓફર કરીએ છીએ.',
                    cta: 'પ્રાયોજક માટે સંપર્ક કરો',
                },
                {
                    id: 'gifts',
                    icon: 'Gift',
                    title: 'ભેટ અને સ્વેગ પ્રદાન કરો',
                    description: 'અમારા વિજેતાઓ અને સહભાગીઓ માટે આકર્ષક ભેટો, વાઉચર્સ અથવા બ્રાન્ડેડ મર્ચેન્ડાઇઝ (સ્વેગ) સાથે અમારા ઇનામ પૂલમાં યોગદાન આપો. તમારી બ્રાન્ડને વિજ્ઞાનના ઉત્સાહીઓના હાથમાં પહોંચાડો.',
                    cta: 'ભેટ ઓફર કરો',
                },
                {
                    id: 'outreach',
                    icon: 'Megaphone',
                    title: 'આઉટરીચ અને માર્કેટિંગ',
                    description: 'શબ્દ ફેલાવવા માટે અમારી સાથે સહયોગ કરો. તમારી સંસ્થાકીય ચેનલો, સોશિયલ મીડિયા અથવા માર્કેટિંગ કુશળતા દ્વારા વિશાળ પ્રેક્ષકો સુધી પહોંચવામાં અમારી મદદ કરો.',
                    cta: 'આઉટરીચ પર સહયોગ કરો',
                },
            ]
        },
        home: {
            autoscroll: {
                slides: [
                    { id: 1, title: 'સૂક્ષ્મદર્શી દુનિયાનું અન્વેષણ કરો', description: 'કોષીય રચનાઓથી લઈને સ્ફટિક રચનાઓ સુધી, અદ્રશ્ય સૌંદર્યનું પ્રદર્શન કરો.' },
                    { id: 2, title: 'આકાશી અજાયબીઓને કેપ્ચર કરો', description: 'બ્રહ્માંડ તમારું કેનવાસ છે. આકાશગંગાઓ, નિહારિકાઓ અને ગ્રહોની ઘટનાઓના ફોટોગ્રાફ લો.' },
                    { id: 3, title: 'જટિલ ડેટાની કલ્પના કરો', description: 'કાચા ડેટાને આકર્ષક વૈજ્ઞાનિક વિઝ્યુલાઇઝેશન અને ઇન્ફોગ્રાફિક્સમાં રૂપાંતરિત કરો.' },
                    { id: 4, title: 'માનવ ચાતુર્યનું દસ્તાવેજીકરણ કરો', description: 'કામ પર વૈજ્ઞાનિકો, નવીન લેબ સાધનો અને શોધની ક્ષણોને કેપ્ચર કરો.' },
                ]
            },
            cta: {
                title: 'ભાગ લો',
                subtitle: 'ભારતની પ્રથમ રાષ્ટ્રીય વિકિ વિજ્ઞાન સ્પર્ધાનો ભાગ બનો. અમે અમારી સાથે જોડાવા માટે ઉત્સાહી વ્યક્તિઓ અને સંસ્થાઓ શોધી રહ્યા છીએ.',
                campus: {
                    title: 'કેમ્પસ એમ્બેસેડર માટે કૉલ',
                    description: 'તમારી સંસ્થામાં અભિયાનનો પ્રચાર કરો, માર્ગદર્શિકા શેર કરો અને જાગૃતિ પ્રવૃત્તિઓનું આયોજન કરવામાં મદદ કરો.',
                    deadline: 'અંતિમ તારીખ: 31 ઓગસ્ટ 2025',
                    cta: 'હવે અરજી કરો'
                },
                affiliates: {
                    title: 'વિકિમીડિયા સંલગ્ન સંસ્થાઓ માટે કૉલ',
                    description: 'અભિયાનને પ્રોત્સાહન આપવા, સ્થાનિક આઉટરીચનું આયોજન કરવા અને તમારા પ્રદેશમાંથી પ્રભાવશાળી વૈજ્ઞાનિક યોગદાન લાવવામાં મદદ કરવા માટે અમારી સાથે ભાગીદારી કરો.',
                    deadline: 'અંતિમ તારીખ: 31 ઓગસ્ટ 2025',
                    cta: 'અમારી સાથે ભાગીદારી કરો'
                }
            },
            info: {
                title: 'તમારે જે બધું જાણવાની જરૂર છે',
                subtitle: 'સબમિશન માર્ગદર્શિકાથી લઈને જ્યુરી વિગતો સુધી, આ ઉત્તેજક ઇવેન્ટનો ભાગ બનવા માટે તમને જોઈતી બધી માહિતી મેળવો.',
                cta: 'વધુ જાણો',
                sections: [
                    { icon: 'Info', title: 'સ્પર્ધા વિશે', description: 'એક વાર્ષિક આંતરરાષ્ટ્રીય વિજ્ઞાન ફોટોગ્રાફી સ્પર્ધા, જે સંશોધનની દુનિયાના તેમના દ્રષ્ટિકોણને શેર કરવા માટે વિજ્ઞાનના ઉત્સાહીઓને એકસાથે લાવે છે.', link: '/about' },
                    { icon: 'Target', title: 'કેવી રીતે ભાગ લેવો', description: 'ભાગીદારી મફત અને દરેક માટે ખુલ્લી છે. સબમિશન સમયગાળા દરમિયાન વિવિધ શ્રેણીઓમાં તમારી શ્રેષ્ઠ વિજ્ઞાન-સંબંધિત છબીઓ સબમિટ કરો.', link: '/competition' },
                    { icon: 'Award', title: 'ઇનામો અને માન્યતા', description: 'વિજેતાઓને રાષ્ટ્રીય માન્યતા, પ્રમાણપત્રો અને ઇનામો મળે છે. શ્રેષ્ઠ છબીઓ આંતરરાષ્ટ્રીય ફાઇનલમાં પણ આગળ વધે છે.', link: '/competition' },
                    { icon: 'Users', title: 'જ્યુરી અને માપદંડ', description: 'વૈજ્ઞાનિકો અને ફોટોગ્રાફરોની અમારી નિષ્ણાત જ્યુરી વૈજ્ઞાનિક મૂલ્ય, મૌલિકતા અને સૌંદર્યલક્ષી ગુણવત્તાના આધારે એન્ટ્રીઓનો નિર્ણય કરશે.', link: '/jury' },
                    { icon: 'History', title: 'ભૂતકાળના વિજેતાઓ', description: 'ગત વર્ષોના વિજેતા ફોટોગ્રાફ્સની ગેલેરીનું અન્વેષણ કરો અને પ્રદર્શિત અદ્ભુત પ્રતિભાથી પ્રેરણા મેળવો.', link: '/resources' }
                ],
                finalCard: {
                    title: 'ભાગ લેવા માટે તૈયાર છો?',
                    subtitle: 'મંચ તૈયાર છે. તમારો લેન્સ ચાવી છે. અમને તમારી વૈજ્ઞાનિક આંખો દ્વારા વિશ્વ બતાવો.',
                    cta: 'તમારું કાર્ય સબમિટ કરો'
                }
            },
            prizes: {
                title: 'ઇનામો અને માન્યતા',
                subtitle: 'તમારા અભૂતપૂર્વ દ્રશ્યોની ઉજવણી થવી જોઈએ. તમે શું જીતી શકો છો તે શોધો.',
                prizes: [
                    { icon: 'Award', title: "રાષ્ટ્રીય માન્યતા", description: "વિજેતાઓની અમારા સત્તાવાર પ્લેટફોર્મ પર ઉજવણી કરવામાં આવશે અને રાષ્ટ્રીય મીડિયા કવરેજ મેળવશે." },
                    { icon: 'Camera', title: "ઉચ્ચ-સ્તરના સાધનો", description: "ટોચના વિજેતાઓ માટે તેમના જુસ્સાને મદદ કરવા માટે ઉત્તેજક ફોટોગ્રાફી ગિયર અને એસેસરીઝ." },
                    { icon: 'BookOpen', title: "પ્રકાશન સુવિધા", description: "તમારા કાર્યને પ્રતિષ્ઠિત વિજ્ઞાન સામયિકો અને પ્રકાશનોમાં દર્શાવો." }
                ]
            },
            jury: {
                title: 'પ્રતિષ્ઠિત જ્યુરીને મળો',
                description: 'અમારી પેનલમાં સમગ્ર ભારતમાંથી પ્રખ્યાત વૈજ્ઞાનિકો, વ્યાવસાયિક ફોટોગ્રાફરો અને વિજ્ઞાન સંચારકોનું વૈવિધ્યસભર જૂથ છે. તેઓ નિષ્પક્ષ અને સમજદાર મૂલ્યાંકન પ્રક્રિયા સુનિશ્ચિત કરવા માટે અનુભવનો ભંડાર લાવે છે.',
                cta: 'સંપૂર્ણ પેનલ જુઓ'
            }
        }
    },
    kn: {
        "mainNavLinks": [
            { "name": "ನಮ್ಮ ಬಗ್ಗೆ", "href": "/about" },
            { "name": "ಸ್ಪರ್ಧೆ", "href": "/competition" },
            { "name": "ಸಂಪನ್ಮೂಲಗಳು", "href": "/resources" },
            { "name": "ಪ್ರಾಯೋಜಕರು", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "ತಂಡವನ್ನು ಭೇಟಿ ಮಾಡಿ", "href": "/organizers" },
            { "name": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳು", "href": "/campus-ambassadors" },
            { "name": "ತಂಡಕ್ಕಾಗಿ ಕರೆ", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "ತೀರ್ಪುಗಾರರು", "href": "/jury" },
            { "name": "ನಮ್ಮನ್ನು ಬೆಂಬಲಿಸಿ", "href": "/support-us" },
            { "name": "ಸಂಪರ್ಕಿಸಿ", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "ವಿಕಿ ಖಾತೆಯನ್ನು ಹೇಗೆ ರಚಿಸುವುದು", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "ಅಪ್‌ಲೋಡ್ ವಿಝಾರ್ಡ್ ಅನ್ನು ಹೇಗೆ ಬಳಸುವುದು", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC ಪರವಾನಗಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "ವರ್ಗಗಳನ್ನು ಹೇಗೆ ಸೇರಿಸುವುದು", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "ಸಂಘಟಕರು",
        "moreDropdown": "ಇನ್ನಷ್ಟು",
        "learningDropdown": "ಕಲಿಯುವಿಕೆ",
        "participateButton": "ಭಾಗವಹಿಸಿ",
        "footerNavLinks": [
            { "name": "ನಮ್ಮ ಬಗ್ಗೆ", "href": "/about" },
            { "name": "ಸ್ಪರ್ಧೆ", "href": "/competition" },
            { "name": "ತೀರ್ಪುಗಾರರು", "href": "/jury" },
            { "name": "ಸಂಘಟಕರು", "href": "/organizers" },
            { "name": "ಪ್ರಾಯೋಜಕರು", "href": "/sponsors" },
            { "name": "ಸಂಪನ್ಮೂಲಗಳು", "href": "/resources" },
            { "name": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳು", "href": "/campus-ambassadors" },
            { "name": "ಸಂಪರ್ಕಿಸಿ", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "ಪ್ರಾಯೋಜಕತ್ವ", "href": "/support-us#sponsorship" },
            { "name": "ಉಡುಗೊರೆಗಳು/ಸ್ವಾಗ್", "href": "/support-us#gifts" },
            { "name": "ತಲುಪುವಿಕೆ", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "ಛಾಯಾಗ್ರಹಣದ ಮೂಲಕ ವಿಜ್ಞಾನದ ಸೌಂದರ್ಯವನ್ನು ಸೆರೆಹಿಡಿಯುವುದು.",
        "footerNavHeader": "ನ್ಯಾವಿಗೇಷನ್",
        "footerSupportHeader": "ನಮ್ಮನ್ನು ಬೆಂಬಲಿಸಿ",
        "footerContactHeader": "ಸಂಪರ್ಕಿಸಿ",
        "footerCopyright": "ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ ಭಾರತ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
        "footerLicense": "ಬೇರೆ ರೀತಿಯಲ್ಲಿ ಗಮನಿಸದ ಹೊರತು ವಿಷಯವು CC BY-SA 4.0 ಅಡಿಯಲ್ಲಿ ಲಭ್ಯವಿದೆ.",
        "footerDeveloperCredit": "ವಿನ್ಯಾಸ ಮತ್ತು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದವರು",
        "about": {
            "title": "ವಿಕಿಸೈನ್ಸ್ ಇಂಡಿಯಾ 2025 ಬಗ್ಗೆ",
            "badge": "ಭಾರತೀಯ ಸಂದರ್ಭಕ್ಕಾಗಿ ಪರಿಚಯ",
            "heading": "ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ 2025 – ಭಾರತ",
            "p1": "ಮೊಟ್ಟಮೊದಲ ಬಾರಿಗೆ, ಭಾರತವು ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಯ (WSC) ರಾಷ್ಟ್ರೀಯ ಆವೃತ್ತಿಯನ್ನು ಆಯೋಜಿಸುತ್ತಿದೆ — ಇದು ವಿಜ್ಞಾನ, ಛಾಯಾಗ್ರಹಣ ಮತ್ತು ಮುಕ್ತ ಜ್ಞಾನವನ್ನು ಒಟ್ಟುಗೂಡಿಸುವ ವಿಶ್ವದ ಅತಿದೊಡ್ಡ ಉಪಕ್ರಮಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ.",
            "p2": "2011 ರಲ್ಲಿ ಎಸ್ಟೋನಿಯಾದಲ್ಲಿ ಪ್ರಾರಂಭವಾಗಿ ನಂತರ ಯುರೋಪ್ ಮತ್ತು ವಿಶ್ವಾದ್ಯಂತ ವಿಸ್ತರಿಸಿದ ಈ ಸ್ಪರ್ಧೆಯು ಸಾವಿರಾರು ವಿಜ್ಞಾನಿಗಳು, ಸಂಶೋಧಕರು ಮತ್ತು ಉತ್ಸಾಹಿಗಳಿಗೆ ವಿಜ್ಞಾನದ ಅದ್ಭುತವನ್ನು ಸೆರೆಹಿಡಿಯುವ ಚಿತ್ರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಪ್ರೇರೇಪಿಸಿದೆ. ಸೂಕ್ಷ್ಮದರ್ಶಕೀಯ ಕೋಶಗಳಿಂದ ಹಿಡಿದು ಬ್ರಹ್ಮಾಂಡದ ಗೆಲಾಕ್ಸಿಗಳವರೆಗೆ, ಈ ಮುಕ್ತವಾಗಿ ಪರವಾನಗಿ ಪಡೆದ ಕೊಡುಗೆಗಳು ವಿಕಿಮೀಡಿಯಾ ಕಾಮನ್ಸ್ ಅನ್ನು ಸಮೃದ್ಧಗೊಳಿಸುತ್ತವೆ ಮತ್ತು ಜಾಗತಿಕವಾಗಿ ಮುಕ್ತ ಶಿಕ್ಷಣವನ್ನು ಬೆಂಬಲಿಸುತ್ತವೆ.",
            "p3": "ಹಿಂದಿನ ಅಂತರರಾಷ್ಟ್ರೀಯ ಆವೃತ್ತಿಗಳಿಗೆ ಭಾರತವು ಹೆಮ್ಮೆಯಿಂದ ಕೊಡುಗೆ ನೀಡಿದೆ - ಭಾರತೀಯ ಛಾಯಾಗ್ರಾಹಕರು ಮತ್ತು ವಿಜ್ಞಾನಿಗಳು ಮನ್ನಣೆ ಮತ್ತು ಪ್ರಶಸ್ತಿಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ. ಆದಾಗ್ಯೂ, ಭಾರತವು ತನ್ನದೇ ಆದ ಸ್ಥಳೀಯ ಸ್ಪರ್ಧೆಯನ್ನು ಆಯೋಜಿಸುತ್ತಿರುವುದು ಇದೇ ಮೊದಲು, ಇದು ನಮ್ಮ ದೇಶದ ವೈಜ್ಞಾನಿಕ ಮನೋಭಾವ ಮತ್ತು ಸೃಜನಶೀಲತೆಯನ್ನು ಪ್ರದರ್ಶಿಸಲು ಸಮರ್ಪಿತವಾಗಿದೆ.",
            "p4": "ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ 2025 – ಭಾರತವು ಒಂದು ಸ್ಪರ್ಧೆಗಿಂತ ಹೆಚ್ಚಾಗಿದೆ. ಇದು ಭಾರತೀಯ ವಿಜ್ಞಾನವನ್ನು ಜಗತ್ತಿಗೆ ಪ್ರತಿನಿಧಿಸುವ ಒಂದು ಸಾಮೂಹಿಕ ಪ್ರಯತ್ನವಾಗಿದೆ - ಶಕ್ತಿಯುತ ಚಿತ್ರಗಳು, ಕಥೆಗಳು ಮತ್ತು ಸೃಜನಶೀಲತೆಯ ಮೂಲಕ.",
            "aims": {
                "title": "ನಮ್ಮ ಗುರಿಗಳು",
                "subtitle": "ಈ ಅಭಿಯಾನದ ಮೂಲಕ, ನಾವು ಈ ಗುರಿಗಳನ್ನು ಹೊಂದಿದ್ದೇವೆ:",
                "items": [
                    { "icon": "PenSquare", "title": "ಕೊಡುಗೆಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿ", "description": "ಭಾರತದಾದ್ಯಂತ ವಿದ್ಯಾರ್ಥಿಗಳು, ಸಂಶೋಧಕರು ಮತ್ತು ಉತ್ಸಾಹಿಗಳನ್ನು ಮೌಲ್ಯಯುತ ವೈಜ್ಞಾನಿಕ ಮಾಧ್ಯಮವನ್ನು ಕೊಡುಗೆ ನೀಡಲು ಪ್ರೋತ್ಸಾಹಿಸುವುದು." },
                    { "icon": "Lightbulb", "title": "ಅರಿವು ಮೂಡಿಸಿ", "description": "ಮುಕ್ತ ವಿಜ್ಞಾನ ಮತ್ತು ಮುಕ್ತ ಜ್ಞಾನದ ಪ್ರಾಮುಖ್ಯತೆಯ ಬಗ್ಗೆ ಅರಿವು ಮೂಡಿಸುವುದು." },
                    { "icon": "Globe", "title": "ಪರಂಪರೆಯನ್ನು ಆಚರಿಸಿ", "description": "ಭಾರತದ ಶ್ರೀಮಂತ ವೈಜ್ಞಾನಿಕ ಪರಂಪರೆ ಮತ್ತು ನಡೆಯುತ್ತಿರುವ ಆವಿಷ್ಕಾರಗಳನ್ನು ಆಚರಿಸುವುದು." },
                    { "icon": "Handshake", "title": "ಸಹಯೋಗವನ್ನು ಬಲಪಡಿಸಿ", "description": "ವಿಕಿಮೀಡಿಯಾ ಸಮುದಾಯಗಳು, ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು, ಸಂಶೋಧನಾ ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳ ನಡುವಿನ ಸಹಯೋಗವನ್ನು ಬಲಪಡಿಸುವುದು." }
                ]
            },
            "supportingOrg": {
                "title": "ಬೆಂಬಲಿಸುವ ಸಂಸ್ಥೆ",
                "p1": "ವಿಕಿ ಕ್ಲಬ್ SATI (ವಿದಿಶಾ, ಮಧ್ಯಪ್ರದೇಶ) ಭಾರತದಲ್ಲಿ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ 2025 ರ ಮೊದಲ ರಾಷ್ಟ್ರೀಯ ಆವೃತ್ತಿಯ ಬೆಂಬಲ ಸಂಸ್ಥೆಯಾಗಿ ಗುರುತಿಸಲ್ಪಟ್ಟಿದೆ. ಕ್ಲಬ್ ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಯುವ ವೃತ್ತಿಪರರನ್ನು ವಿಕಿಮೀಡಿಯಾ ಚಳುವಳಿಯಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳುವಲ್ಲಿ ಮುಂಚೂಣಿಯಲ್ಲಿದೆ, ಮುಕ್ತ ಜ್ಞಾನ, ತಾಂತ್ರಿಕ ನಾವೀನ್ಯತೆ ಮತ್ತು ಸಮುದಾಯ-ನೇತೃತ್ವದ ಉಪಕ್ರಮಗಳಿಗೆ ಕೊಡುಗೆ ನೀಡುತ್ತಿದೆ.",
                "p2": "ಕೋರ್ ಆರ್ಗನೈಸಿಂಗ್ ತಂಡದ ಹಲವಾರು ಸದಸ್ಯರು ವಿಕಿ ಕ್ಲಬ್ SATI ಯೊಂದಿಗೆ ಸಂಬಂಧ ಹೊಂದಿದ್ದಾರೆ, ಮತ್ತು ಅವರ ನಿರಂತರ ಭಾಗವಹಿಸುವಿಕೆಯು ಮುಕ್ತ ಜ್ಞಾನ ಮತ್ತು ವೈಜ್ಞಾನಿಕ ತೊಡಗಿಸಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಮುಂದುವರಿಸಲು ಕ್ಲಬ್‌ನ ಬದ್ಧತೆಯನ್ನು ಪ್ರತಿಬಿಂಬಿಸುತ್ತದೆ. ಬೆಂಬಲವು ಆರ್ಥಿಕವಲ್ಲದಿದ್ದರೂ, ವಿಕಿ ಕ್ಲಬ್ SATI ಯ ಸಾಂಸ್ಥಿಕ ಸಾಮರ್ಥ್ಯ, ಅನುಭವ ಮತ್ತು ಸಮುದಾಯ ಜಾಲಗಳು ರಾಷ್ಟ್ರಮಟ್ಟದಲ್ಲಿ ಈ ಅಭಿಯಾನವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವಲ್ಲಿ ಅತ್ಯಗತ್ಯ ಪಾತ್ರವನ್ನು ವಹಿಸುತ್ತವೆ."
            }
        },
        "campusAmbassadors": {
            "title": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳು",
            "subtitle": "ತಮ್ಮ ಸಮುದಾಯಗಳಲ್ಲಿ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಯನ್ನು ಮುನ್ನಡೆಸುತ್ತಿರುವ ಉತ್ಸಾಹಭರಿತ ನಾಯಕರನ್ನು ಭೇಟಿ ಮಾಡಿ.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "ವಿಕಿ ಕ್ಲಬ್ SATI",
                    "boardLink": {
                        "name": "ವಿಕಿ ಕ್ಲಬ್ SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "ತಮಿಳುನಾಡಿನ ವಿಕಿಪೀಡಿಯನ್ ಮತ್ತು ಕಂಪ್ಯೂಟೇಶನಲ್ ಭಾಷಾಶಾಸ್ತ್ರಜ್ಞ"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "HOD ಮತ್ತು ಸಹಾಯಕ ಪ್ರಾಧ್ಯಾಪಕರು, ಕಂಪ್ಯೂಟರ್ ಅನಿಮೇಷನ್ ವಿಭಾಗ, ಸೇಂಟ್ ಅಲೋಶಿಯಸ್",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "ದೇವಬಂದ್ ಸಮುದಾಯ",
                    "boardLink": {
                        "name": "ದೇವಬಂದ್ ಸಮುದಾಯ",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "ಪ್ರಸ್ತುತ ಕನ್ಯಾಕುಮಾರಿ ಜಿಲ್ಲೆಯಲ್ಲಿ ಐಟಿ ಮತ್ತು ಕಣ್ಗಾವಲು ಯೋಜನೆಗಳನ್ನು ಮಾಡುತ್ತಿದ್ದಾರೆ"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "ತಮಿಳು ವಿಕಿಪೀಡಿಯನ್, ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "ವಿಕಿಪೀಡಿಯನ್"
                }
            ]
        },
        "affiliates": {
            "title": "ವಿಕಿಮೀಡಿಯಾ ಅಂಗಸಂಸ್ಥೆಗಳಿಗೆ ಕರೆ",
            "subtitle": "ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ 2025 ಅನ್ನು ಪ್ರಚಾರ ಮಾಡಲು ಮತ್ತು ಬೆಂಬಲಿಸಲು ನಮ್ಮೊಂದಿಗೆ ಸಹಕರಿಸಲು ನಾವು ಭಾರತದಾದ್ಯಂತ ವಿಕಿಮೀಡಿಯಾ ಅಂಗಸಂಸ್ಥೆಗಳು, ಬಳಕೆದಾರ ಗುಂಪುಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳನ್ನು ಆಹ್ವಾನಿಸುತ್ತಿದ್ದೇವೆ.",
            "partnerHeading": "ನಮ್ಮೊಂದಿಗೆ ಏಕೆ ಪಾಲುದಾರರಾಗಬೇಕು?",
            "partnerDescription": "ಇದು ವಿಜ್ಞಾನವನ್ನು ಆಚರಿಸಲು ಮತ್ತು ವಿಕಿಮೀಡಿಯಾ ಕಾಮನ್ಸ್ ಅನ್ನು ಮುಕ್ತವಾಗಿ ಪರವಾನಗಿ ಪಡೆದ ಮಾಧ್ಯಮದೊಂದಿಗೆ ಸಮೃದ್ಧಗೊಳಿಸಲು ಒಂದು ಅನನ್ಯ ಅವಕಾಶವಾಗಿದೆ. ಪಾಲುದಾರರಾಗಿ, ನಿಮ್ಮ ಗುಂಪು ಭಾರತದ ಮೊದಲ ರಾಷ್ಟ್ರೀಯ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಯನ್ನು ಯಶಸ್ವಿಗೊಳಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರವನ್ನು ವಹಿಸುತ್ತದೆ.",
            "collaborationHeading": "ನೀವು ಹೇಗೆ ಸಹಕರಿಸಬಹುದು",
            "collaborationPoints": [
                "ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ಗಳಿಗೆ ಆನ್‌ಲೈನ್ ಮತ್ತು ಆಫ್‌ಲೈನ್ ಪ್ರಚಾರದಲ್ಲಿ ತೊಡಗಿಸಿಕೊಳ್ಳಿ.",
                "ಸಂಸ್ಥೆಗಳು ಮತ್ತು ಸಂಶೋಧನಾ ಸಂಸ್ಥೆಗಳಿಂದ ಅಪ್‌ಲೋಡ್‌ಗಳನ್ನು ಸುಗಮಗೊಳಿಸಿ.",
                "ಸ್ಥಳೀಯ ಕಾರ್ಯಾಗಾರಗಳು, ಎಡಿಟ್-ಎ-ಥಾನ್‌ಗಳು, ಅಥವಾ ಫೋಟೋವಾಕ್‌ಗಳನ್ನು ಆಯೋಜಿಸಿ.",
                "ಅಭಿಯಾನ ಸಾಮಗ್ರಿಗಳ ಅನುವಾದ ಮತ್ತು ಸ್ಥಳೀಕರಣಕ್ಕೆ ಸಹಾಯ ಮಾಡಿ."
            ],
            "formNote": "ಈ ಫಾರ್ಮ್ ಮಾನ್ಯತೆ ಪಡೆದ ವಿಕಿಮೀಡಿಯಾ ಅಂಗಸಂಸ್ಥೆಗಳು ಅಥವಾ ಸಮುದಾಯ ಗುಂಪುಗಳಿಗೆ ಉದ್ದೇಶಿಸಲಾಗಿದೆ. ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳು ಇದನ್ನು ಬಳಸಬೇಕು",
            "campusAmbassadorLink": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿ ಫಾರ್ಮ್",
            "sidebarTitle": "ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ",
            "sidebarDescription": "ಭಾರತದ ವೈಜ್ಞಾನಿಕ ಭೂದೃಶ್ಯವನ್ನು ಜಗತ್ತಿಗೆ ಪ್ರದರ್ಶಿಸಲು ಸಹಕರಿಸೋಣ.",
            "deadline": "ಗಡುವು: 31ನೇ ಆಗಸ್ಟ್ 2025",
            "cta": "ಪಾಲುದಾರಿಕೆ ಫಾರ್ಮ್ ತೆರೆಯಿರಿ"
        },
        "campus": {
            "title": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳಿಗೆ ಕರೆ",
            "subtitle": "ನಿಮ್ಮ ಸಂಸ್ಥೆ, ಸಮುದಾಯ ಅಥವಾ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ 2025 ಅನ್ನು ಪ್ರಚಾರ ಮಾಡಲು ಸಹಾಯ ಮಾಡಲು ಸ್ಥಳೀಯ ಪ್ರಚಾರ ಸಂಯೋಜಕರಾಗಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ.",
            "whoHeading": "ನಾವು ಯಾರನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇವೆ?",
            "whoDescription": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳು ಅರಿವು ಮೂಡಿಸುವಲ್ಲಿ, ಭಾಗವಹಿಸುವವರಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುವಲ್ಲಿ ಮತ್ತು ಐಚ್ಛಿಕವಾಗಿ ಅರಿವು ಮೂಡಿಸುವ ಅವಧಿಗಳು ಅಥವಾ ಕಾರ್ಯಾಗಾರಗಳನ್ನು ಆಯೋಜಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತಾರೆ. ನೀವು ವಿಕಿಮೀಡಿಯನ್, ವಿಜ್ಞಾನ ವಿದ್ಯಾರ್ಥಿ, ವಿನ್ಯಾಸಕ, ಶಿಕ್ಷಕ, ಅಥವಾ ಮುಕ್ತ ವಿಜ್ಞಾನದ ಬಗ್ಗೆ ಉತ್ಸಾಹಿಯಾಗಿದ್ದರೂ - ನಾವು ನಿಮ್ಮನ್ನು ತಂಡದಲ್ಲಿ ಹೊಂದಲು ಇಷ್ಟಪಡುತ್ತೇವೆ!",
            "responsibilitiesHeading": "ಜವಾಬ್ದಾರಿಗಳು",
            "responsibilities": [
                "ನಿಮ್ಮ ಸಂಸ್ಥೆ ಅಥವಾ ಸಮುದಾಯದಲ್ಲಿ ಅಭಿಯಾನವನ್ನು ಪ್ರಚಾರ ಮಾಡಿ.",
                "ಸಂಭಾವ್ಯ ಕೊಡುಗೆದಾರರೊಂದಿಗೆ ಭಾಗವಹಿಸುವಿಕೆಯ ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ.",
                "ಐಚ್ಛಿಕವಾಗಿ, ಕಾರ್ಯಾಗಾರಗಳು ಅಥವಾ ಫೋಟೋವಾಕ್‌ಗಳಂತಹ ಅರಿವು ಮೂಡಿಸುವ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸಿ (ನಾವು ಬೆಂಬಲವನ್ನು ಒದಗಿಸಬಹುದು!)."
            ],
            "sidebar": {
                "title": "ಈಗಲೇ ಅನ್ವಯಿಸಿ",
                "description": "ಪ್ರಭಾವ ಬೀರಲು ಸಿದ್ಧರಿದ್ದೀರಾ? ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಯಾಗಲು ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
                "deadline": "ಗಡುವು: 31ನೇ ಆಗಸ್ಟ್ 2025",
                "cta": "ಅರ್ಜಿ ಫಾರ್ಮ್ ತೆರೆಯಿರಿ"
            },
            "cta": {
                "text": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಯಾಗಿ",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "ಸ್ಪರ್ಧೆಯ ವಿವರಗಳು",
            "subtitle": "ಭಾಗವಹಿಸಲು ಮತ್ತು ಗೆಲ್ಲಲು ನೀವು ತಿಳಿದುಕೊಳ್ಳಬೇಕಾದ ಎಲ್ಲವೂ.",
            "howToParticipate": {
                "title": "ಹೇಗೆ ಭಾಗವಹಿಸುವುದು",
                "p1": "ನಿಮ್ಮ ಬಳಿ ಇಲ್ಲದಿದ್ದರೆ, ನೀವು ಜಾಗತಿಕ ಖಾತೆಯನ್ನು ರಚಿಸಬಹುದು, ಅದು ನೀವು ಲಾಗಿನ್ ಮಾಡಿದಾಗ ಎಲ್ಲಾ ವಿಕಿಮೀಡಿಯಾ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳಲ್ಲಿ (ವಿಕಿಮೀಡಿಯಾ ಕಾಮನ್ಸ್ ಸೇರಿದಂತೆ) ನಿರ್ದಿಷ್ಟ ಬಳಕೆದಾರಹೆಸರನ್ನು ನೀಡುತ್ತದೆ. ಹೊಸದಾಗಿ ನೋಂದಾಯಿತ ಬಳಕೆದಾರರಾಗಿ ನೀವು ವೀಡಿಯೊ ಫೈಲ್ ಅನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವ ಮೊದಲು ಕನಿಷ್ಠ ನಾಲ್ಕು ದಿನ ಕಾಯಬೇಕು, ಆದರೆ ಚಿತ್ರಗಳನ್ನು ನೋಂದಣಿಯಾದ ತಕ್ಷಣ ಅಪ್‌ಲೋಡ್ ಮಾಡಬಹುದು.",
                "createAccountLink": "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಇಲ್ಲಿ ರಚಿಸಿ!",
                "rulesTitle": "ಭಾಗವಹಿಸುವಿಕೆಯ ನಿಯಮಗಳು",
                "rules": [
                    "ಸಲ್ಲಿಕೆಗಳು ನಿಮ್ಮ ಸ್ವಂತ ಕೃತಿಯಾಗಿರಬೇಕು, ನಿಮ್ಮ ಸ್ವಂತ ನೋಂದಾಯಿತ ವಿಕಿಮೀಡಿಯಾ ಖಾತೆಯಿಂದ ಅಪ್‌ಲೋಡ್ ಮಾಡಿರಬೇಕು. ಬಹು ಲೇಖಕರಿದ್ದಲ್ಲಿ, ಎಲ್ಲಾ ಹೆಸರುಗಳನ್ನು ಒದಗಿಸಬೇಕು.",
                    "ಚಿತ್ರಗಳು ಮುಕ್ತ ಪರವಾನಗಿ ಅಡಿಯಲ್ಲಿರಬೇಕು (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "ಎಲ್ಲಾ ಸಲ್ಲಿಕೆಗಳಿಗೆ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಸ್ಪಷ್ಟ ಮತ್ತು ನಿಖರವಾದ ವೈಜ್ಞಾನಿಕ ವಿವರಣೆ ಅಗತ್ಯವಿದೆ. ಇತರ ಭಾಷೆಗಳನ್ನೂ ಸ್ವಾಗತಿಸಲಾಗುತ್ತದೆ.",
                    {
                        "text": "ಸಾಧ್ಯವಾದಷ್ಟು ಹೆಚ್ಚಿನ ರೆಸಲ್ಯೂಶನ್ (ಕನಿಷ್ಠ 2 ಮೆಗಾಪಿಕ್ಸೆಲ್‌ಗಳು) ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನೀವು ಮೆಗಾಪಿಕ್ಸೆಲ್ ಎಣಿಕೆಯನ್ನು ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "ಇಲ್ಲಿ"
                        }
                    },
                    "ಚಿತ್ರಗಳು ವಾಟರ್‌ಮಾರ್ಕ್‌ಗಳು, ಲೋಗೋಗಳು, ಅಥವಾ ಸೇರಿಸಿದ ಪಠ್ಯ/ಗ್ರಾಫಿಕ್ಸ್ (ಸ್ಕೇಲ್‌ಗಳನ್ನು ಹೊರತುಪಡಿಸಿ) ಹೊಂದಿರಬಾರದು."
                ]
            },
            "keyDates": {
                "title": "ಪ್ರಮುಖ ದಿನಾಂಕಗಳು",
                "timeline": [
                    { "date": "1 ನವೆಂಬರ್ 2025", "event": "ಸಲ್ಲಿಕೆಗಳು ಪ್ರಾರಂಭ" },
                    { "date": "15 ಡಿಸೆಂಬರ್ 2025", "event": "ಸಲ್ಲಿಕೆಗಳು ಮುಕ್ತಾಯ" },
                    { "date": "ಜನವರಿ 2026", "event": "ತೀರ್ಪುಗಾರರ ಚರ್ಚೆ" },
                    { "date": "ಫೆಬ್ರವರಿ 2026", "event": "ರಾಷ್ಟ್ರೀಯ ವಿಜೇತರ ಪ್ರಕಟಣೆ" }
                ]
            },
            "submitNow": "ಈಗಲೇ ಸಲ್ಲಿಸಿ",
            "imageCategories": {
                "title": "ಚಿತ್ರ ವರ್ಗಗಳು",
                "subtitle": "ನೀವು ಈ ಕೆಳಗಿನ ಏಳು категорияಗಳಲ್ಲಿ ಭಾಗವಹಿಸಬಹುದು. ನಿಮ್ಮ ಕೆಲಸಕ್ಕೆ ಹೆಚ್ಚು ಸೂಕ್ತವಾದದ್ದನ್ನು ಆರಿಸಿ. ಸ್ಫೂರ್ತಿ ಪಡೆಯಲು ಕೆಳಗಿನ ಉದಾಹರಣೆಗಳನ್ನು ನೋಡಿ."
            },
            "categories": {
                "people": { "name": "ವಿಜ್ಞಾನದಲ್ಲಿ ಜನರು", "description": "ವಿಜ್ಞಾನಿಗಳು ತಮ್ಮ ನೈಸರ್ಗಿಕ ವಾಸಸ್ಥಾನದಲ್ಲಿ." },
                "microscopy": { "name": "ಸೂಕ್ಷ್ಮದರ್ಶಕ ಚಿತ್ರಗಳು", "description": "ಆಪ್ಟಿಕಲ್, ಎಲೆಕ್ಟ್ರಾನ್, ಮತ್ತು ಸ್ಕ್ಯಾನಿಂಗ್ ಪ್ರೋಬ್ ಸೂಕ್ಷ್ಮದರ್ಶಕ ಚಿತ್ರಗಳು." },
                "nonPhotographic": { "name": "ಛಾಯಾಗ್ರಹಣವಲ್ಲದ ಮಾಧ್ಯಮ", "description": "ಆಡಿಯೋ ಮತ್ತು ವೀಡಿಯೊ ಫೈಲ್‌ಗಳು, ಕಂಪ್ಯೂಟರ್-ರಚಿತ ಚಿತ್ರಣ, ಇತ್ಯಾದಿ." },
                "imageSets": { "name": "ಚಿತ್ರ ಸೆಟ್‌ಗಳು", "description": "ವಿಷಯಾಧಾರಿತವಾಗಿ ಸಂಪರ್ಕಗೊಂಡಿರುವ ಚಿತ್ರಗಳು (10 ರವರೆಗೆ) ಒಂದೇ ಸೆಟ್ ಆಗಿ ವೀಕ್ಷಿಸಬಹುದು." },
                "wildlife": { "name": "ವನ್ಯಜೀವಿ ಮತ್ತು ಪ್ರಕೃತಿ", "description": "ಜೀವಿಗಳು ತಮ್ಮ ನೈಸರ್ಗಿಕ ವಾಸಸ್ಥಾನದಲ್ಲಿ, ಮ್ಯಾಕ್ರೋ ಛಾಯಾಗ್ರಹಣ ಸೇರಿದಂತೆ." },
                "astronomy": { "name": "ಖಗೋಳಶಾಸ್ತ್ರ", "description": "ನಕ್ಷತ್ರಗಳು, ಆಕಾಶ ಘಟನೆಗಳು, ಮತ್ತು ಅವುಗಳನ್ನು ಸೆರೆಹಿಡಿಯಲು ಬಳಸುವ ಉಪಕರಣಗಳ ಚಿತ್ರಗಳು." },
                "general": { "name": "ಸಾಮಾನ್ಯ ವರ್ಗ", "description": "ಪುರಾತತ್ತ್ವ ಶಾಸ್ತ್ರದಿಂದ ಜ್ವಾಲಾಮುಖಿ ಶಾಸ್ತ್ರದವರೆಗೆ ಎಲ್ಲವೂ." }
            },
            "readyToParticipate": {
                "title": "ಭಾಗವಹಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
                "subtitle": "ವೇದಿಕೆ ಸಿದ್ಧವಾಗಿದೆ. ನಿಮ್ಮ ಲೆನ್ಸ್ ಕೀಲಿಯಾಗಿದೆ. ನಿಮ್ಮ ವೈಜ್ಞಾನಿಕ ಕಣ್ಣುಗಳಿಂದ ಜಗತ್ತನ್ನು ನಮಗೆ ತೋರಿಸಿ.",
                "cta": "ನಿಮ್ಮ ಕೃತಿಯನ್ನು ಸಲ್ಲಿಸಿ"
            },
            "supportedBy": "ಬೆಂಬಲಿಸಿದವರು:"
        },
        "contact": {
            "title": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ",
            "subtitle": "ಪ್ರಶ್ನೆಗಳು ಅಥವಾ ಪ್ರತಿಕ್ರಿಯೆ ಇದೆಯೇ? ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ. ನಾವು ತ್ವರಿತ ಉತ್ತರವನ್ನು ಭರವಸೆ ನೀಡುತ್ತೇವೆ!",
            "getInTouch": "ಸಂಪರ್ಕದಲ್ಲಿರಿ",
            "p1": "ಫಾರ್ಮ್ ಅನ್ನು ಭರ್ತಿ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ ತಂಡವು ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ. ನಾವು ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದ್ದೇವೆ!",
            "form": {
                "name": "ಪೂರ್ಣ ಹೆಸರು",
                "namePlaceholder": "ನಿಮ್ಮ ಹೆಸರು",
                "email": "ಇಮೇಲ್ ವಿಳಾಸ",
                "emailPlaceholder": "your.email@example.com",
                "subject": "ವಿಷಯ",
                "subjectPlaceholder": "ನಿಮ್ಮ ಪ್ರಶ್ನೆಗೆ ಒಂದು ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                "otherSubjectPlaceholder": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿಷಯವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಿ",
                "message": "ಸಂದೇಶ",
                "messagePlaceholder": "ಮೊದಲೇ ಬರೆದ ಸಂದೇಶವನ್ನು ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ 'ಇತರೆ...'",
                "otherMessagePlaceholder": "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಿ",
                "selectSubjectFirst": "ದಯವಿಟ್ಟು ಮೊದಲು ಒಂದು ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                "submit": "ಸಂದೇಶ ಕಳುಹಿಸಿ",
                "submitting": "ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ..."
            },
            "toast": {
                "successTitle": "ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!",
                "successDescription": "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.",
                "errorTitle": "ದೋಷ",
                "errorDescription": "ಏನೋ ತಪ್ಪಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ."
            }
        },
        "organizers": {
            "title": "ಸಂಘಟಕರನ್ನು ಭೇಟಿ ಮಾಡಿ",
            "subtitle": "ಮೊದಲ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ ಭಾರತವನ್ನು ಭವ್ಯ ಯಶಸ್ಸನ್ನು ಮಾಡಲು ತೆರೆಮರೆಯಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿರುವ ಸಮರ್ಪಿತ ತಂಡ.",
            "lead_organizers": "ಪ್ರಮುಖ ಸಂಘಟಕರು",
            "advisors": "ಸಲಹೆಗಾರರು",
            "core_organizing_team": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "ಪ್ರಮುಖ ಸಂಘಟಕ",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "ಪ್ರಮುಖ ಸಂಘಟಕ",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "ಸಲಹೆಗಾರ",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "ಕೋರ್ ಸಂಘಟನಾ ತಂಡ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "ಸಂಘಟಕರಿಗೆ ಕರೆ",
            "subtitle": "ವಿಕಿಮೀಡಿಯಾ ಕಾಮನ್ಸ್‌ನಲ್ಲಿ ಮುಕ್ತವಾಗಿ ಪರವಾನಗಿ ಪಡೆದ ಚಿತ್ರಗಳು, ವೀಡಿಯೊಗಳು ಮತ್ತು ಇತರ ಮಾಧ್ಯಮಗಳ ಮೂಲಕ ವಿಜ್ಞಾನವನ್ನು ಉತ್ತೇಜಿಸುವ ಈ ಜಾಗತಿಕ ಅಭಿಯಾನದ ತನ್ನದೇ ಆದ ಸ್ಥಳೀಯ ಆವೃತ್ತಿಯನ್ನು ಭಾರತ ಆಯೋಜಿಸಲಿದೆ ಎಂದು ಹಂಚಿಕೊಳ್ಳಲು ನಾವು ಉತ್ಸುಕರಾಗಿದ್ದೇವೆ.",
            "joinHeading": "ಸಂಘಟನಾ ತಂಡಕ್ಕೆ ಸೇರಿ",
            "joinDescription": "ಸುಗಮ ಸಮನ್ವಯ, ಪ್ರಚಾರ ಮತ್ತು ಯೋಜನೆಯನ್ನು ಬೆಂಬಲಿಸಲು, ನಾವು ನಮ್ಮ ಸಂಘಟನಾ ತಂಡವನ್ನು ವಿಸ್ತರಿಸುತ್ತಿದ್ದೇವೆ. ಈ ಪ್ರಮುಖ ಉಪಕ್ರಮಕ್ಕೆ ಕೊಡುಗೆ ನೀಡಲು ನೀವು ಆಸಕ್ತಿ ಹೊಂದಿದ್ದರೆ, ನಿಮ್ಮಿಂದ ಕೇಳಲು ನಾವು ಇಷ್ಟಪಡುತ್ತೇವೆ.",
            "lookingForHeading": "ನಾವು ಏನನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇವೆ",
            "lookingFor": [
                "ವಿಜ್ಞಾನ, ಛಾಯಾಗ್ರಹಣ, ಅಥವಾ ಮುಕ್ತ ಜ್ಞಾನದಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿರುವ ಉತ್ಸಾಹಭರಿತ ವ್ಯಕ್ತಿಗಳು.",
                "ಈವೆಂಟ್ ಯೋಜನೆ, ಪ್ರಚಾರ, ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ನಿರ್ವಹಣೆ, ಅಥವಾ ವಿಷಯ ರಚನೆಯಲ್ಲಿ ಕೌಶಲ್ಯಗಳು.",
                "ಒಂದು ಸಹಯೋಗದ ಮನೋಭಾವ ಮತ್ತು ಮಹತ್ವದ ಪ್ರಭಾವ ಬೀರುವ ಬಯಕೆ."
            ],
            "sidebarTitle": "ಈಗಲೇ ಅನ್ವಯಿಸಿ",
            "sidebarDescription": "ಭಾರತದಲ್ಲಿ ಮೊದಲ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಯನ್ನು ರೂಪಿಸಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.",
            "deadline": "ಅರ್ಜಿಗಳನ್ನು ಮುಚ್ಚಲಾಗಿದೆ: 15ನೇ ಜುಲೈ 2025",
            "cta": "ಅರ್ಜಿಗಳನ್ನು ಮುಚ್ಚಲಾಗಿದೆ"
        },
        "resources": {
            "title": "ಸಂಪನ್ಮೂಲಗಳು",
            "subtitle": "ಹಿಂದಿನ ವಿಜೇತರಿಂದ ಸ್ಫೂರ್ತಿ ಪಡೆಯಿರಿ ಮತ್ತು ನಿಮ್ಮ ಸಲ್ಲಿಕೆಯನ್ನು ತಯಾರಿಸಲು ಸಹಾಯಕವಾದ ಸಾಮಗ್ರಿಗಳನ್ನು ಪ್ರವೇಶಿಸಿ.",
            "pastWinners": {
                "title": "ಹಿಂದಿನ ವಿಜೇತರ ಗ್ಯಾಲರಿ",
                "winnerLabel": "ವಿಜೇತ",
                "winners": [
                    { "year": 2023, "category": "ಖಗೋಳಶಾಸ್ತ್ರ", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "ಜೀವಶಾಸ್ತ್ರ", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "ರಸಾಯನಶಾಸ್ತ್ರ", "winner": "Priya Desai" },
                    { "year": 2022, "category": "ಖಗೋಳಶಾಸ್ತ್ರ", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "ಕಲಿಕಾ ಸಾಮಗ್ರಿಗಳು",
                "cta": "ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ",
                "resources": [
                    { "title": "ವಿಜ್ಞಾನ ಛಾಯಾಗ್ರಹಣಕ್ಕೆ ಮಾರ್ಗದರ್ಶಿ", "description": "ಅದ್ಭುತ ವೈಜ್ಞಾನಿಕ ಚಿತ್ರಗಳನ್ನು ಸೆರೆಹಿಡಿಯುವ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ಕಲಿಯಿರಿ.", "link": "#" },
                    { "title": "ಕ್ರಿಯೇಟಿವ್ ಕಾಮನ್ಸ್ ಅನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವುದು", "description": "ಸ್ಪರ್ಧೆಗಾಗಿ ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಪರವಾನಗಿ ನೀಡಲು ತ್ವರಿತ ಮಾರ್ಗದರ್ಶಿ.", "link": "#" },
                    { "title": "ಚಿತ್ರ ಅಪ್‌ಲೋಡ್ ಟ್ಯುಟೋರಿಯಲ್", "description": "ನಿಮ್ಮ ಫೋಟೋಗಳನ್ನು ಹೇಗೆ ಸಲ್ಲಿಸುವುದು ಎಂಬುದರ ಕುರಿತು ಹಂತ-ಹಂತದ ವೀಡಿಯೊ.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "ನಮ್ಮನ್ನು ಬೆಂಬಲಿಸಿ",
            "subtitle": "ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆ ಭಾರತ 2025 ಅನ್ನು ಬೃಹತ್ ಯಶಸ್ಸು ಮಾಡಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "ಪ್ರಾಯೋಜಕರಾಗಿ",
                    "description": "ಕಾರ್ಯಾಚರಣೆಯ ವೆಚ್ಚಗಳು, ಬಹುಮಾನದ ಹಣ, ಮತ್ತು ಈವೆಂಟ್ ನಿರ್ವಹಣೆಯನ್ನು ಸರಿದೂಗಿಸಲು ಸಹಾಯ ಮಾಡಲು ವಿತ್ತೀಯ ಕೊಡುಗೆಗಳೊಂದಿಗೆ ನಮ್ಮನ್ನು ಬೆಂಬಲಿಸಿ. ನಾವು ಪ್ರಮುಖ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಅವಕಾಶಗಳೊಂದಿಗೆ ವಿವಿಧ ಪ್ರಾಯೋಜಕತ್ವದ ಹಂತಗಳನ್ನು ನೀಡುತ್ತೇವೆ.",
                    "cta": "ಪ್ರಾಯೋಜಕತ್ವಕ್ಕಾಗಿ ಸಂಪರ್ಕಿಸಿ"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "ಉಡುಗೊರೆಗಳು ಮತ್ತು ಸ್ವಾಗ್ ಒದಗಿಸಿ",
                    "description": "ನಮ್ಮ ವಿಜೇತರು ಮತ್ತು ಭಾಗವಹಿಸುವವರಿಗಾಗಿ ರೋಮಾಂಚಕಾರಿ ಉಡುಗೊರೆಗಳು, ವೋಚರ್‌ಗಳು, ಅಥವಾ ಬ್ರ್ಯಾಂಡೆಡ್ ಸರಕುಗಳೊಂದಿಗೆ (ಸ್ವಾಗ್) ನಮ್ಮ ಬಹುಮಾನದ ಪೂಲ್‌ಗೆ ಕೊಡುಗೆ ನೀಡಿ. ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್ ಅನ್ನು ವಿಜ್ಞಾನ ಉತ್ಸಾಹಿಗಳ ಕೈಗೆ ತಲುಪಿಸಿ.",
                    "cta": "ಉಡುಗೊರೆಗಳನ್ನು ನೀಡಿ"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "ಪ್ರಚಾರ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್",
                    "description": "ಮಾತನ್ನು ಹರಡಲು ನಮ್ಮೊಂದಿಗೆ ಸಹಕರಿಸಿ. ನಿಮ್ಮ ಸಾಂಸ್ಥಿಕ ಚಾನೆಲ್‌ಗಳು, ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ, ಅಥವಾ ಮಾರ್ಕೆಟಿಂಗ್ ಪರಿಣತಿಯ ಮೂಲಕ ವಿಶಾಲ ಪ್ರೇಕ್ಷಕರನ್ನು ತಲುಪಲು ನಮಗೆ ಸಹಾಯ ಮಾಡಿ.",
                    "cta": "ಪ್ರಚಾರದಲ್ಲಿ ಸಹಕರಿಸಿ"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "ಸೂಕ್ಷ್ಮದರ್ಶಕೀಯ ಪ್ರಪಂಚಗಳನ್ನು ಅನ್ವೇಷಿಸಿ", "description": "ಕೋಶೀಯ ರಚನೆಗಳಿಂದ ಸ್ಫಟಿಕ ರಚನೆಗಳವರೆಗೆ, ಕಾಣದ ಸೌಂದರ್ಯವನ್ನು ಪ್ರದರ್ಶಿಸಿ." },
                    { "id": 2, "title": "ಆಕಾಶದ ಅದ್ಭುತಗಳನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ", "description": "ಬ್ರಹ್ಮಾಂಡವು ನಿಮ್ಮ ಕ್ಯಾನ್ವಾಸ್ ಆಗಿದೆ. ಗೆಲಾಕ್ಸಿಗಳು, ನೀಹಾರಿಕೆಗಳು ಮತ್ತು ಗ್ರಹಗಳ ಘಟನೆಗಳನ್ನು ಛಾಯಾಚಿತ್ರ ಮಾಡಿ." },
                    { "id": 3, "title": "ಸಂಕೀರ್ಣ ಡೇಟಾವನ್ನು ದೃಶ್ಯೀಕರಿಸಿ", "description": "ಕಚ್ಚಾ ಡೇಟಾವನ್ನು ಆಕರ್ಷಕ ವೈಜ್ಞಾನಿಕ ದೃಶ್ಯೀಕರಣಗಳು ಮತ್ತು ಇನ್ಫೋಗ್ರಾಫಿಕ್ಸ್‌ಗಳಾಗಿ ಪರಿವರ್ತಿಸಿ." },
                    { "id": 4, "title": "ಮಾನವ ಜಾಣ್ಮೆಯನ್ನು ದಾಖಲಿಸಿ", "description": "ಕೆಲಸದಲ್ಲಿರುವ ವಿಜ್ಞಾನಿಗಳು, ನವೀನ ಪ್ರಯೋಗಾಲಯ ಉಪಕರಣಗಳು, ಮತ್ತು ಆವಿಷ್ಕಾರದ ಕ್ಷಣಗಳನ್ನು ಸೆರೆಹಿಡಿಯಿರಿ." }
                ]
            },
            "cta": {
                "title": "ತೊಡಗಿಸಿಕೊಳ್ಳಿ",
                "subtitle": "ಭಾರತದ ಮೊದಲ ರಾಷ್ಟ್ರೀಯ ವಿಕಿ ವಿಜ್ಞಾನ ಸ್ಪರ್ಧೆಯ ಭಾಗವಾಗಿ. ನಮ್ಮೊಂದಿಗೆ ಸೇರಲು ನಾವು ಉತ್ಸಾಹಭರಿತ ವ್ಯಕ್ತಿಗಳು ಮತ್ತು ಸಂಸ್ಥೆಗಳನ್ನು ಹುಡುಕುತ್ತಿದ್ದೇವೆ.",
                "campus": {
                    "title": "ಕ್ಯಾಂಪಸ್ ರಾಯಭಾರಿಗಳಿಗೆ ಕರೆ",
                    "description": "ನಿಮ್ಮ ಸಂಸ್ಥೆಯಲ್ಲಿ ಅಭಿಯಾನವನ್ನು ಪ್ರಚಾರ ಮಾಡಿ, ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ, ಮತ್ತು ಅರಿವು ಮೂಡಿಸುವ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸಲು ಸಹಾಯ ಮಾಡಿ.",
                    "deadline": "ಗಡುವು: 31ನೇ ಆಗಸ್ಟ್ 2025",
                    "cta": "ಈಗಲೇ ಅನ್ವಯಿಸಿ"
                },
                "affiliates": {
                    "title": "ವಿಕಿಮೀಡಿಯಾ ಅಂಗಸಂಸ್ಥೆಗಳಿಗೆ ಕರೆ",
                    "description": "ಅಭಿಯಾನವನ್ನು ಪ್ರಚಾರ ಮಾಡಲು, ಸ್ಥಳೀಯ ಪ್ರಚಾರವನ್ನು ಆಯೋಜಿಸಲು, ಮತ್ತು ನಿಮ್ಮ ಪ್ರದೇಶದಿಂದ ಪ್ರಭಾವಶಾಲಿ ವೈಜ್ಞಾನಿಕ ಕೊಡುಗೆಗಳನ್ನು ತರಲು ಸಹಾಯ ಮಾಡಲು ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ.",
                    "deadline": "ಗಡುವು: 31ನೇ ಆಗಸ್ಟ್ 2025",
                    "cta": "ನಮ್ಮೊಂದಿಗೆ ಪಾಲುದಾರರಾಗಿ"
                }
            },
            "info": {
                "title": "ನೀವು ತಿಳಿದುಕೊಳ್ಳಬೇಕಾದ ಎಲ್ಲವೂ",
                "subtitle": "ಸಲ್ಲಿಕೆ ಮಾರ್ಗಸೂಚಿಗಳಿಂದ ತೀರ್ಪುಗಾರರ ವಿವರಗಳವರೆಗೆ, ಈ ರೋಮಾಂಚಕಾರಿ ಕಾರ್ಯಕ್ರಮದ ಭಾಗವಾಗಲು ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲಾ ಮಾಹಿತಿಯನ್ನು ಪಡೆಯಿರಿ.",
                "cta": "ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಿ",
                "sections": [
                    { "icon": "Info", "title": "ಸ್ಪರ್ಧೆಯ ಬಗ್ಗೆ", "description": "ವಾರ್ಷಿಕ ಅಂತರರಾಷ್ಟ್ರೀಯ ವಿಜ್ಞಾನ ಛಾಯಾಗ್ರಹಣ ಸ್ಪರ್ಧೆ, ವಿಜ್ಞಾನ ಉತ್ಸಾಹಿಗಳನ್ನು ಸಂಶೋಧನಾ ಪ್ರಪಂಚದ ತಮ್ಮ ದೃಷ್ಟಿಯನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಒಟ್ಟುಗೂಡಿಸುತ್ತದೆ.", "link": "/about" },
                    { "icon": "Target", "title": "ಹೇಗೆ ಭಾಗವಹಿಸುವುದು", "description": "ಭಾಗವಹಿಸುವಿಕೆ ಉಚಿತ ಮತ್ತು ಎಲ್ಲರಿಗೂ ಮುಕ್ತವಾಗಿದೆ. ಸಲ್ಲಿಕೆ ಅವಧಿಯಲ್ಲಿ ವಿವಿಧ категорияಗಳಲ್ಲಿ ನಿಮ್ಮ ಅತ್ಯುತ್ತಮ ವಿಜ್ಞಾನ-ಸಂಬಂಧಿತ ಚಿತ್ರಗಳನ್ನು ಸಲ್ಲಿಸಿ.", "link": "/competition" },
                    { "icon": "Award", "title": "ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಮಾನ್ಯತೆ", "description": "ವಿಜೇತರು ರಾಷ್ಟ್ರೀಯ ಮಾನ್ಯತೆ, ಪ್ರಮಾಣಪತ್ರಗಳು ಮತ್ತು ಬಹುಮಾನಗಳನ್ನು ಪಡೆಯುತ್ತಾರೆ. ಅತ್ಯುತ್ತಮ ಚಿತ್ರಗಳು ಅಂತರರಾಷ್ಟ್ರೀಯ ಫೈನಲ್‌ಗೆ ಸಹ ಮುನ್ನಡೆಯುತ್ತವೆ.", "link": "/competition" },
                    { "icon": "Users", "title": "ತೀರ್ಪುಗಾರರು ಮತ್ತು ಮಾನದಂಡಗಳು", "description": "ನಮ್ಮ ತಜ್ಞರ ತೀರ್ಪುಗಾರರ ತಂಡವು ವೈಜ್ಞಾನಿಕ ಮೌಲ್ಯ, ಸ್ವಂತಿಕೆ ಮತ್ತು ಸೌಂದರ್ಯದ ಗುಣಮಟ್ಟದ ಆಧಾರದ ಮೇಲೆ ನಮೂದುಗಳನ್ನು ನಿರ್ಣಯಿಸುತ್ತದೆ.", "link": "/jury" },
                    { "icon": "History", "title": "ಹಿಂದಿನ ವಿಜೇತರು", "description": "ಹಿಂದಿನ ವರ್ಷಗಳ ವಿಜೇತ ಛಾಯಾಚಿತ್ರಗಳ ಗ್ಯಾಲರಿಯನ್ನು ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಪ್ರದರ್ಶಿಸಲಾದ ಅದ್ಭುತ ಪ್ರತಿಭೆಗಳಿಂದ ಸ್ಫೂರ್ತಿ ಪಡೆಯಿರಿ.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "ಭಾಗವಹಿಸಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
                    "subtitle": "ವೇದಿಕೆ ಸಿದ್ಧವಾಗಿದೆ. ನಿಮ್ಮ ಲೆನ್ಸ್ ಕೀಲಿಯಾಗಿದೆ. ನಿಮ್ಮ ವೈಜ್ಞಾನಿಕ ಕಣ್ಣುಗಳಿಂದ ಜಗತ್ತನ್ನು ನಮಗೆ ತೋರಿಸಿ.",
                    "cta": "ನಿಮ್ಮ ಕೃತಿಯನ್ನು ಸಲ್ಲಿಸಿ"
                }
            },
            "prizes": {
                "title": "ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಮಾನ್ಯತೆ",
                "subtitle": "ನಿಮ್ಮ ಅದ್ಭುತ ದೃಶ್ಯಗಳು ಆಚರಿಸಲ್ಪಡಲು ಅರ್ಹವಾಗಿವೆ. ನೀವು ಏನು ಗೆಲ್ಲಬಹುದು ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಿ.",
                "prizes": [
                    { "icon": "Award", "title": "ರಾಷ್ಟ್ರೀಯ ಮಾನ್ಯತೆ", "description": "ವಿಜೇತರನ್ನು ನಮ್ಮ ಅಧಿಕೃತ ವೇದಿಕೆಗಳಲ್ಲಿ ಆಚರಿಸಲಾಗುತ್ತದೆ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಮಾಧ್ಯಮ ಪ್ರಸಾರವನ್ನು ಪಡೆಯುತ್ತಾರೆ." },
                    { "icon": "Camera", "title": "ಉನ್ನತ ದರ್ಜೆಯ ಉಪಕರಣಗಳು", "description": "ಉನ್ನತ ವಿಜೇತರಿಗೆ ತಮ್ಮ ಉತ್ಸಾಹಕ್ಕೆ ಸಹಾಯ ಮಾಡಲು ರೋಮಾಂಚಕಾರಿ ಛಾಯಾಗ್ರಹಣ ಗೇರ್ ಮತ್ತು ಪರಿಕರಗಳು." },
                    { "icon": "BookOpen", "title": "ಪ್ರಕಟಣೆ ವೈಶಿಷ್ಟ್ಯ", "description": "ನಿಮ್ಮ ಕೆಲಸವನ್ನು ಪ್ರತಿಷ್ಠಿತ ವಿಜ್ಞಾನ ನಿಯತಕಾಲಿಕೆಗಳು ಮತ್ತು ಪ್ರಕಟಣೆಗಳಲ್ಲಿ ಪ್ರದರ್ಶಿಸಿ." }
                ]
            },
            "jury": {
                "title": "ಗೌರವಾನ್ವಿತ ತೀರ್ಪುಗಾರರನ್ನು ಭೇಟಿ ಮಾಡಿ",
                "description": "ನಮ್ಮ ಸಮಿತಿಯು ಭಾರತದಾದ್ಯಂತದ ಪ್ರಸಿದ್ಧ ವಿಜ್ಞಾನಿಗಳು, ವೃತ್ತಿಪರ ಛಾಯಾಗ್ರಾಹಕರು ಮತ್ತು ವಿಜ್ಞಾನ ಸಂವಹನಕಾರರ ವೈವಿಧ್ಯಮಯ ಗುಂಪನ್ನು ಒಳಗೊಂಡಿದೆ. ಅವರು ನ್ಯಾಯಯುತ ಮತ್ತು ಒಳನೋಟವುಳ್ಳ ಮೌಲ್ಯಮಾಪನ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಲು ಅಪಾರ ಅನುಭವವನ್ನು ತರುತ್ತಾರೆ.",
                "cta": "ಪೂರ್ಣ ಸಮಿತಿಯನ್ನು ವೀಕ್ಷಿಸಿ"
            }
        }
    },
    pa: {
        "mainNavLinks": [
            { "name": "ਸਾਡੇ ਬਾਰੇ", "href": "/about" },
            { "name": "ਮੁਕਾਬਲਾ", "href": "/competition" },
            { "name": "ਸਰੋਤ", "href": "/resources" },
            { "name": "ਪ੍ਰਾਯੋਜਕ", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "ਟੀਮ ਨੂੰ ਮਿਲੋ", "href": "/organizers" },
            { "name": "ਕੈਂਪਸ ਅੰਬੈਸਡਰ", "href": "/campus-ambassadors" },
            { "name": "ਟੀਮ ਲਈ ਕਾਲ", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "ਜਿਊਰੀ", "href": "/jury" },
            { "name": "ਸਾਡਾ ਸਮਰਥਨ ਕਰੋ", "href": "/support-us" },
            { "name": "ਸੰਪਰਕ", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "ਵਿਕੀ ਖਾਤਾ ਕਿਵੇਂ ਬਣਾਇਆ ਜਾਵੇ", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "ਅੱਪਲੋਡ ਵਿਜ਼ਾਰਡ ਦੀ ਵਰਤੋਂ ਕਿਵੇਂ ਕਰੀਏ", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC ਲਾਇਸੈਂਸਾਂ ਨੂੰ ਸਮਝਣਾ", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "ਸ਼੍ਰੇਣੀਆਂ ਕਿਵੇਂ ਸ਼ਾਮਲ ਕਰੀਏ", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "ਪ੍ਰਬੰਧਕ",
        "moreDropdown": "ਹੋਰ",
        "learningDropdown": "ਸਿੱਖਣਾ",
        "participateButton": "ਭਾਗ ਲਓ",
        "footerNavLinks": [
            { "name": "ਸਾਡੇ ਬਾਰੇ", "href": "/about" },
            { "name": "ਮੁਕਾਬਲਾ", "href": "/competition" },
            { "name": "ਜਿਊਰੀ", "href": "/jury" },
            { "name": "ਪ੍ਰਬੰਧਕ", "href": "/organizers" },
            { "name": "ਪ੍ਰਾਯੋਜਕ", "href": "/sponsors" },
            { "name": "ਸਰੋਤ", "href": "/resources" },
            { "name": "ਕੈਂਪਸ ਅੰਬੈਸਡਰ", "href": "/campus-ambassadors" },
            { "name": "ਸੰਪਰਕ", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "ਪ੍ਰਾਯੋਜਨ", "href": "/support-us#sponsorship" },
            { "name": "ਤੋਹਫ਼ੇ/ਸਵੈਗ", "href": "/support-us#gifts" },
            { "name": "ਆਊਟਰੀਚ", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "ਫੋਟੋਗ੍ਰਾਫੀ ਰਾਹੀਂ ਵਿਗਿਆਨ ਦੀ ਸੁੰਦਰਤਾ ਨੂੰ ਕੈਦ ਕਰਨਾ।",
        "footerNavHeader": "ਨੈਵੀਗੇਸ਼ਨ",
        "footerSupportHeader": "ਸਾਡਾ ਸਮਰਥਨ ਕਰੋ",
        "footerContactHeader": "ਸੰਪਰਕ",
        "footerCopyright": "ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ ਭਾਰਤ। ਸਾਰੇ ਹੱਕ ਰਾਖਵੇਂ ਹਨ।",
        "footerLicense": "ਸਮੱਗਰੀ CC BY-SA 4.0 ਦੇ ਅਧੀਨ ਉਪਲਬਧ ਹੈ ਜਦੋਂ ਤੱਕ ਹੋਰ ਨੋਟ ਨਾ ਕੀਤਾ ਗਿਆ ਹੋਵੇ।",
        "footerDeveloperCredit": "ਦੁਆਰਾ ਡਿਜ਼ਾਈਨ ਅਤੇ ਵਿਕਸਤ ਕੀਤਾ ਗਿਆ",
        "about": {
            "title": "ਵਿਕੀਸਾਇੰਸ ਇੰਡੀਆ 2025 ਬਾਰੇ",
            "badge": "ਭਾਰਤੀ ਸੰਦਰਭ ਲਈ ਜਾਣ-ਪਛਾਣ",
            "heading": "ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ 2025 – ਭਾਰਤ",
            "p1": "ਪਹਿਲੀ ਵਾਰ, ਭਾਰਤ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ (WSC) ਦਾ ਇੱਕ ਰਾਸ਼ਟਰੀ ਸੰਸਕਰਣ ਆਯੋਜਿਤ ਕਰ ਰਿਹਾ ਹੈ — ਇਹ ਦੁਨੀਆ ਦੀਆਂ ਸਭ ਤੋਂ ਵੱਡੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਵਿੱਚੋਂ ਇੱਕ ਹੈ ਜੋ ਵਿਗਿਆਨ, ਫੋਟੋਗ੍ਰਾਫੀ ਅਤੇ ਮੁਫਤ ਗਿਆਨ ਨੂੰ ਇਕੱਠਾ ਕਰਦੀ ਹੈ।",
            "p2": "2011 ਵਿੱਚ ਐਸਟੋਨੀਆ ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤਾ ਗਿਆ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਪੂਰੇ ਯੂਰਪ ਅਤੇ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਫੈਲਾਇਆ ਗਿਆ, ਇਸ ਮੁਕਾਬਲੇ ਨੇ ਹਜ਼ਾਰਾਂ ਵਿਗਿਆਨੀਆਂ, ਖੋਜਕਰਤਾਵਾਂ ਅਤੇ ਉਤਸ਼ਾਹੀਆਂ ਨੂੰ ਵਿਗਿਆਨ ਦੇ ਅਜੂਬੇ ਨੂੰ ਦਰਸਾਉਣ ਵਾਲੀਆਂ ਤਸਵੀਰਾਂ ਸਾਂਝੀਆਂ ਕਰਨ ਲਈ ਪ੍ਰੇਰਿਤ ਕੀਤਾ ਹੈ। ਮਾਈਕ੍ਰੋਸਕੋਪਿਕ ਸੈੱਲਾਂ ਤੋਂ ਲੈ ਕੇ ਬ੍ਰਹਿਮੰਡੀ ਗਲੈਕਸੀਆਂ ਤੱਕ, ਇਹ ਮੁਫਤ ਲਾਇਸੰਸਸ਼ੁਦਾ ਯੋਗਦਾਨ ਵਿਕੀਮੀਡੀਆ ਕਾਮਨਜ਼ ਨੂੰ ਅਮੀਰ ਬਣਾਉਂਦੇ ਹਨ ਅਤੇ ਵਿਸ਼ਵ ਪੱਧਰ 'ਤੇ ਖੁੱਲ੍ਹੀ ਸਿੱਖਿਆ ਦਾ ਸਮਰਥਨ ਕਰਦੇ ਹਨ।",
            "p3": "ਭਾਰਤ ਨੇ ਪਿਛਲੇ ਅੰਤਰਰਾਸ਼ਟਰੀ ਸੰਸਕਰਣਾਂ ਵਿੱਚ ਮਾਣ ਨਾਲ ਯੋਗਦਾਨ ਪਾਇਆ ਹੈ — ਭਾਰਤੀ ਫੋਟੋਗ੍ਰਾਫ਼ਰਾਂ ਅਤੇ ਵਿਗਿਆਨੀਆਂ ਨੂੰ ਮਾਨਤਾ ਅਤੇ ਪੁਰਸਕਾਰ ਪ੍ਰਾਪਤ ਹੋਏ ਹਨ। ਹਾਲਾਂਕਿ, ਇਹ ਪਹਿਲੀ ਵਾਰ ਹੈ ਜਦੋਂ ਭਾਰਤ ਆਪਣੇ ਸਥਾਨਕ ਮੁਕਾਬਲੇ ਦੀ ਮੇਜ਼ਬਾਨੀ ਕਰ ਰਿਹਾ ਹੈ, ਜੋ ਸਾਡੇ ਦੇਸ਼ ਦੀ ਵਿਗਿਆਨਕ ਭਾਵਨਾ ਅਤੇ ਰਚਨਾਤਮਕਤਾ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਲਈ ਸਮਰਪਿਤ ਹੈ।",
            "p4": "ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ 2025 - ਭਾਰਤ ਇੱਕ ਮੁਕਾਬਲੇ ਤੋਂ ਵੱਧ ਹੈ। ਇਹ ਸ਼ਕਤੀਸ਼ਾਲੀ ਚਿੱਤਰਾਂ, ਕਹਾਣੀਆਂ ਅਤੇ ਰਚਨਾਤਮਕਤਾ ਦੁਆਰਾ - ਭਾਰਤੀ ਵਿਗਿਆਨ ਨੂੰ ਦੁਨੀਆ ਦੇ ਸਾਹਮਣੇ ਪੇਸ਼ ਕਰਨ ਦਾ ਇੱਕ ਸਮੂਹਿਕ ਯਤਨ ਹੈ।",
            "aims": {
                "title": "ਸਾਡੇ ਉਦੇਸ਼",
                "subtitle": "ਇਸ ਮੁਹਿੰਮ ਰਾਹੀਂ, ਸਾਡਾ ਉਦੇਸ਼ ਹੈ:",
                "items": [
                    { "icon": "PenSquare", "title": "ਯੋਗਦਾਨ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ", "description": "ਪੂਰੇ ਭਾਰਤ ਵਿੱਚ ਵਿਦਿਆਰਥੀਆਂ, ਖੋਜਕਰਤਾਵਾਂ ਅਤੇ ਉਤਸ਼ਾਹੀਆਂ ਨੂੰ ਕੀਮਤੀ ਵਿਗਿਆਨਕ ਮੀਡੀਆ ਦਾ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ ਉਤਸ਼ਾਹਿਤ ਕਰਨਾ।" },
                    { "icon": "Lightbulb", "title": "ਜਾਗਰੂਕਤਾ ਪੈਦਾ ਕਰਨਾ", "description": "ਖੁੱਲ੍ਹੇ ਵਿਗਿਆਨ ਅਤੇ ਮੁਫਤ ਗਿਆਨ ਦੀ ਮਹੱਤਤਾ ਬਾਰੇ ਜਾਗਰੂਕਤਾ ਪੈਦਾ ਕਰਨਾ।" },
                    { "icon": "Globe", "title": "ਵਿਰਾਸਤ ਦਾ ਜਸ਼ਨ ਮਨਾਉਣਾ", "description": "ਭਾਰਤ ਦੀ ਅਮੀਰ ਵਿਗਿਆਨਕ ਵਿਰਾਸਤ ਅਤੇ ਚੱਲ ਰਹੀਆਂ ਨਵੀਨਤਾਵਾਂ ਦਾ ਜਸ਼ਨ ਮਨਾਉਣਾ।" },
                    { "icon": "Handshake", "title": "ਸਹਿਯੋਗ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨਾ", "description": "ਵਿਕੀਮੀਡੀਆ ਭਾਈਚਾਰਿਆਂ, ਯੂਨੀਵਰਸਿਟੀਆਂ, ਖੋਜ ਸੰਸਥਾਵਾਂ ਅਤੇ ਸੰਗਠਨਾਂ ਵਿਚਕਾਰ ਸਹਿਯੋਗ ਨੂੰ ਮਜ਼ਬੂਤ ​​ਕਰਨਾ।" }
                ]
            },
            "supportingOrg": {
                "title": "ਸਹਾਇਕ ਸੰਸਥਾ",
                "p1": "ਵਿਕੀ ਕਲੱਬ SATI (ਵਿਦਿਸ਼ਾ, ਮੱਧ ਪ੍ਰਦੇਸ਼) ਨੂੰ ਭਾਰਤ ਵਿੱਚ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ 2025 ਦੇ ਪਹਿਲੇ ਰਾਸ਼ਟਰੀ ਸੰਸਕਰਣ ਲਈ ਸਹਾਇਕ ਸੰਸਥਾ ਵਜੋਂ ਮਾਨਤਾ ਦਿੱਤੀ ਗਈ ਹੈ। ਇਹ ਕਲੱਬ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਨੌਜਵਾਨ ਪੇਸ਼ੇਵਰਾਂ ਨੂੰ ਵਿਕੀਮੀਡੀਆ ਅੰਦੋਲਨ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰਨ, ਖੁੱਲ੍ਹੇ ਗਿਆਨ, ਤਕਨੀਕੀ ਨਵੀਨਤਾ ਅਤੇ ਭਾਈਚਾਰੇ ਦੀ ਅਗਵਾਈ ਵਾਲੀਆਂ ਪਹਿਲਕਦਮੀਆਂ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਣ ਵਿੱਚ ਸਭ ਤੋਂ ਅੱਗੇ ਰਿਹਾ ਹੈ।",
                "p2": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ ਦੇ ਕਈ ਮੈਂਬਰ ਵਿਕੀ ਕਲੱਬ SATI ਨਾਲ ਜੁੜੇ ਹੋਏ ਹਨ, ਅਤੇ ਉਹਨਾਂ ਦੀ ਨਿਰੰਤਰ ਸ਼ਮੂਲੀਅਤ ਮੁਫਤ ਗਿਆਨ ਅਤੇ ਵਿਗਿਆਨਕ ਰੁਝੇਵਿਆਂ ਨੂੰ ਅੱਗੇ ਵਧਾਉਣ ਲਈ ਕਲੱਬ ਦੀ ਵਚਨਬੱਧਤਾ ਨੂੰ ਦਰਸਾਉਂਦੀ ਹੈ। ਜਦੋਂ ਕਿ ਸਹਾਇਤਾ ਗੈਰ-ਵਿੱਤੀ ਹੈ, ਵਿਕੀ ਕਲੱਬ SATI ਦੀ ਸੰਗਠਨਾਤਮਕ ਸਮਰੱਥਾ, ਤਜਰਬਾ, ਅਤੇ ਕਮਿਊਨਿਟੀ ਨੈੱਟਵਰਕ ਰਾਸ਼ਟਰੀ ਪੱਧਰ 'ਤੇ ਇਸ ਮੁਹਿੰਮ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਣ ਵਿੱਚ ਇੱਕ ਜ਼ਰੂਰੀ ਭੂਮਿਕਾ ਨਿਭਾਉਂਦੇ ਹਨ।"
            }
        },
        "campusAmbassadors": {
            "title": "ਕੈਂਪਸ ਅੰਬੈਸਡਰ",
            "subtitle": "ਉਨ੍ਹਾਂ ਜੋਸ਼ੀਲੇ ਆਗੂਆਂ ਨੂੰ ਮਿਲੋ ਜੋ ਆਪਣੇ ਭਾਈਚਾਰਿਆਂ ਵਿੱਚ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ ਨੂੰ ਅੱਗੇ ਵਧਾ ਰਹੇ ਹਨ।",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "ਵਿਕੀ ਕਲੱਬ SATI",
                    "boardLink": {
                        "name": "ਵਿਕੀ ਕਲੱਬ SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "ਤਮਿਲਨਾਡੂ ਤੋਂ ਵਿਕੀਪੀਡੀਅਨ ਅਤੇ ਕੰਪਿਊਟੇਸ਼ਨਲ ਭਾਸ਼ਾ ਵਿਗਿਆਨੀ"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "HOD ਅਤੇ ਸਹਾਇਕ ਪ੍ਰੋਫੈਸਰ, ਕੰਪਿਊਟਰ ਐਨੀਮੇਸ਼ਨ ਵਿਭਾਗ, ਸੇਂਟ ਅਲੋਇਸਿਅਸ",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "ਦੇਵਬੰਦ ਭਾਈਚਾਰਾ",
                    "boardLink": {
                        "name": "ਦੇਵਬੰਦ ਭਾਈਚਾਰਾ",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "ਵਰਤਮਾਨ ਵਿੱਚ ਕੰਨਿਆਕੁਮਾਰੀ ਜ਼ਿਲ੍ਹੇ ਵਿੱਚ ਆਈਟੀ ਅਤੇ ਨਿਗਰਾਨੀ ਪ੍ਰੋਜੈਕਟ ਕਰ ਰਹੇ ਹਨ"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "ਤਮਿਲ ਵਿਕੀਪੀਡੀਅਨ, ਸਾਫਟਵੇਅਰ ਇੰਜੀਨੀਅਰ"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "ਵਿਕੀਪੀਡੀਅਨ"
                }
            ]
        },
        "affiliates": {
            "title": "ਵਿਕੀਮੀਡੀਆ ਐਫੀਲੀਏਟਸ ਲਈ ਕਾਲ",
            "subtitle": "ਅਸੀਂ ਭਾਰਤ ਭਰ ਵਿੱਚ ਵਿਕੀਮੀਡੀਆ ਐਫੀਲੀਏਟਸ, ਉਪਭੋਗਤਾ ਸਮੂਹਾਂ ਅਤੇ ਸੰਗਠਨਾਂ ਨੂੰ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ 2025 ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਅਤੇ ਸਮਰਥਨ ਕਰਨ ਵਿੱਚ ਸਾਡੇ ਨਾਲ ਸਹਿਯੋਗ ਕਰਨ ਲਈ ਸੱਦਾ ਦੇ ਰਹੇ ਹਾਂ।",
            "partnerHeading": "ਸਾਡੇ ਨਾਲ ਸਾਂਝੇਦਾਰੀ ਕਿਉਂ ਕਰੀਏ?",
            "partnerDescription": "ਇਹ ਵਿਗਿਆਨ ਦਾ ਜਸ਼ਨ ਮਨਾਉਣ ਅਤੇ ਵਿਕੀਮੀਡੀਆ ਕਾਮਨਜ਼ ਨੂੰ ਮੁਫਤ ਲਾਇਸੰਸਸ਼ੁਦਾ ਮੀਡੀਆ ਨਾਲ ਭਰਪੂਰ ਕਰਨ ਦਾ ਇੱਕ ਵਿਲੱਖਣ ਮੌਕਾ ਹੈ। ਇੱਕ ਭਾਗੀਦਾਰ ਵਜੋਂ, ਤੁਹਾਡਾ ਸਮੂਹ ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਰਾਸ਼ਟਰੀ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ ਨੂੰ ਸਫਲ ਬਣਾਉਣ ਵਿੱਚ ਆਊਟਰੀਚ, ਜਾਗਰੂਕਤਾ ਅਤੇ ਭਾਈਚਾਰਕ ਸ਼ਮੂਲੀਅਤ ਵਿੱਚ ਮਦਦ ਕਰਕੇ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਭੂਮਿਕਾ ਨਿਭਾ ਸਕਦਾ ਹੈ।",
            "collaborationHeading": "ਤੁਸੀਂ ਕਿਵੇਂ ਸਹਿਯੋਗ ਕਰ ਸਕਦੇ ਹੋ",
            "collaborationPoints": [
                "ਆਪਣੇ ਨੈੱਟਵਰਕਾਂ ਲਈ ਔਨਲਾਈਨ ਅਤੇ ਔਫਲਾਈਨ ਆਊਟਰੀਚ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ।",
                "ਸੰਸਥਾਵਾਂ ਅਤੇ ਖੋਜ ਸੰਸਥਾਵਾਂ ਤੋਂ ਅੱਪਲੋਡ ਦੀ ਸਹੂਲਤ ਦਿਓ।",
                "ਸਥਾਨਕ ਵਰਕਸ਼ਾਪਾਂ, ਐਡਿਟ-ਏ-ਥੌਨ, ਜਾਂ ਫੋਟੋਵਾਕ ਦਾ ਆਯੋਜਨ ਕਰੋ।",
                "ਮੁਹਿੰਮ ਸਮੱਗਰੀ ਦੇ ਅਨੁਵਾਦ ਅਤੇ ਸਥਾਨੀਕਰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰੋ।"
            ],
            "formNote": "ਇਹ ਫਾਰਮ ਮਾਨਤਾ ਪ੍ਰਾਪਤ ਵਿਕੀਮੀਡੀਆ ਐਫੀਲੀਏਟਸ ਜਾਂ ਕਮਿਊਨਿਟੀ ਗਰੁੱਪਾਂ ਲਈ ਹੈ। ਵਿਅਕਤੀਆਂ ਅਤੇ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ ਇਹ ਵਰਤਣਾ ਚਾਹੀਦਾ ਹੈ",
            "campusAmbassadorLink": "ਕੈਂਪਸ ਅੰਬੈਸਡਰ ਫਾਰਮ",
            "sidebarTitle": "ਸਾਡੇ ਨਾਲ ਸਾਂਝੇਦਾਰੀ ਕਰੋ",
            "sidebarDescription": "ਆਓ ਭਾਰਤ ਦੇ ਵਿਗਿਆਨਕ ਲੈਂਡਸਕੇਪ ਨੂੰ ਦੁਨੀਆ ਨੂੰ ਦਿਖਾਉਣ ਲਈ ਸਹਿਯੋਗ ਕਰੀਏ।",
            "deadline": "ਆਖਰੀ ਮਿਤੀ: 31 ਅਗਸਤ 2025",
            "cta": "ਸਾਂਝੇਦਾਰੀ ਫਾਰਮ ਖੋਲ੍ਹੋ"
        },
        "campus": {
            "title": "ਕੈਂਪਸ ਅੰਬੈਸਡਰਾਂ ਲਈ ਕਾਲ",
            "subtitle": "ਆਪਣੀ ਸੰਸਥਾ, ਭਾਈਚਾਰੇ, ਜਾਂ ਨੈੱਟਵਰਕ ਵਿੱਚ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ 2025 ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਇੱਕ ਸਥਾਨਕ ਆਊਟਰੀਚ ਕੋਆਰਡੀਨੇਟਰ ਵਜੋਂ ਸਾਡੇ ਨਾਲ ਸ਼ਾਮਲ ਹੋਵੋ।",
            "whoHeading": "ਅਸੀਂ ਕਿਸ ਦੀ ਤਲਾਸ਼ ਕਰ ਰਹੇ ਹਾਂ?",
            "whoDescription": "ਕੈਂਪਸ ਅੰਬੈਸਡਰ ਜਾਗਰੂਕਤਾ ਫੈਲਾਉਣ, ਭਾਗੀਦਾਰਾਂ ਦਾ ਮਾਰਗਦਰਸ਼ਨ ਕਰਨ, ਅਤੇ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਜਾਗਰੂਕਤਾ ਸੈਸ਼ਨਾਂ ਜਾਂ ਵਰਕਸ਼ਾਪਾਂ ਦਾ ਆਯੋਜਨ ਕਰਨ ਵਿੱਚ ਮੁੱਖ ਭੂਮਿਕਾ ਨਿਭਾਉਂਦੇ ਹਨ। ਭਾਵੇਂ ਤੁਸੀਂ ਇੱਕ ਵਿਕੀਮੀਡੀਅਨ, ਵਿਗਿਆਨ ਦੇ ਵਿਦਿਆਰਥੀ, ਡਿਜ਼ਾਈਨਰ, ਅਧਿਆਪਕ, ਜਾਂ ਖੁੱਲ੍ਹੇ ਵਿਗਿਆਨ ਬਾਰੇ ਸਿਰਫ਼ ਉਤਸ਼ਾਹੀ ਹੋ — ਅਸੀਂ ਤੁਹਾਨੂੰ ਬੋਰਡ 'ਤੇ ਰੱਖਣਾ ਪਸੰਦ ਕਰਾਂਗੇ!",
            "responsibilitiesHeading": "ਜ਼ਿੰਮੇਵਾਰੀਆਂ",
            "responsibilities": [
                "ਆਪਣੀ ਸੰਸਥਾ ਜਾਂ ਭਾਈਚਾਰੇ ਵਿੱਚ ਮੁਹਿੰਮ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰੋ।",
                "ਸੰਭਾਵੀ ਯੋਗਦਾਨੀਆਂ ਨਾਲ ਭਾਗੀਦਾਰੀ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰੋ।",
                "ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ, ਵਰਕਸ਼ਾਪਾਂ ਜਾਂ ਫੋਟੋਵਾਕ ਵਰਗੀਆਂ ਜਾਗਰੂਕਤਾ ਗਤੀਵਿਧੀਆਂ ਦਾ ਆਯੋਜਨ ਕਰੋ (ਅਸੀਂ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਕਰ ਸਕਦੇ ਹਾਂ!)।"
            ],
            "sidebar": {
                "title": "ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ",
                "description": "ਇੱਕ ਪ੍ਰਭਾਵ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਹੋ? ਕੈਂਪਸ ਅੰਬੈਸਡਰ ਬਣਨ ਲਈ ਫਾਰਮ ਭਰੋ।",
                "deadline": "ਆਖਰੀ ਮਿਤੀ: 31 ਅਗਸਤ 2025",
                "cta": "ਐਪਲੀਕੇਸ਼ਨ ਫਾਰਮ ਖੋਲ੍ਹੋ"
            },
            "cta": {
                "text": "ਇੱਕ ਕੈਂਪਸ ਅੰਬੈਸਡਰ ਬਣੋ",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "ਮੁਕਾਬਲੇ ਦੇ ਵੇਰਵੇ",
            "subtitle": "ਹਿੱਸਾ ਲੈਣ ਅਤੇ ਜਿੱਤਣ ਲਈ ਤੁਹਾਨੂੰ ਜਾਣਨ ਦੀ ਲੋੜ ਵਾਲੀ ਹਰ ਚੀਜ਼।",
            "howToParticipate": {
                "title": "ਕਿਵੇਂ ਭਾਗ ਲੈਣਾ ਹੈ",
                "p1": "ਜੇਕਰ ਤੁਹਾਡੇ ਕੋਲ ਇੱਕ ਨਹੀਂ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਇੱਕ ਗਲੋਬਲ ਖਾਤਾ ਬਣਾ ਸਕਦੇ ਹੋ ਜੋ ਤੁਹਾਨੂੰ ਲੌਗਇਨ ਕਰਨ 'ਤੇ ਸਾਰੇ ਵਿਕੀਮੀਡੀਆ ਪਲੇਟਫਾਰਮਾਂ (ਵਿਕੀਮੀਡੀਆ ਕਾਮਨਜ਼ ਸਮੇਤ) 'ਤੇ ਇੱਕ ਖਾਸ ਉਪਭੋਗਤਾ ਨਾਮ ਦੇਵੇਗਾ। ਇੱਕ ਨਵੇਂ ਰਜਿਸਟਰਡ ਉਪਭੋਗਤਾ ਵਜੋਂ ਤੁਹਾਨੂੰ ਇੱਕ ਵੀਡੀਓ ਫਾਈਲ ਅਪਲੋਡ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਘੱਟੋ-ਘੱਟ ਚਾਰ ਦਿਨ ਉਡੀਕ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਜਦੋਂ ਕਿ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਤੋਂ ਤੁਰੰਤ ਬਾਅਦ ਚਿੱਤਰ ਅਪਲੋਡ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ।",
                "createAccountLink": "ਆਪਣਾ ਖਾਤਾ ਇੱਥੇ ਬਣਾਓ!",
                "rulesTitle": "ਭਾਗੀਦਾਰੀ ਨਿਯਮ",
                "rules": [
                    "ਸਬਮਿਸ਼ਨ ਤੁਹਾਡਾ ਆਪਣਾ ਕੰਮ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ, ਤੁਹਾਡੇ ਆਪਣੇ ਰਜਿਸਟਰਡ ਵਿਕੀਮੀਡੀਆ ਖਾਤੇ ਤੋਂ ਅੱਪਲੋਡ ਕੀਤਾ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਕਈ ਲੇਖਕਾਂ ਲਈ, ਸਾਰੇ ਨਾਮ ਪ੍ਰਦਾਨ ਕੀਤੇ ਜਾਣੇ ਚਾਹੀਦੇ ਹਨ।",
                    "ਚਿੱਤਰ ਇੱਕ ਮੁਫਤ ਲਾਇਸੈਂਸ (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) ਦੇ ਅਧੀਨ ਹੋਣੇ ਚਾਹੀਦੇ ਹਨ।",
                    "ਸਾਰੀਆਂ ਸਬਮਿਸ਼ਨਾਂ ਲਈ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਇੱਕ ਸਪਸ਼ਟ ਅਤੇ ਸਹੀ ਵਿਗਿਆਨਕ ਵਰਣਨ ਦੀ ਲੋੜ ਹੁੰਦੀ ਹੈ। ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਦਾ ਵੀ ਸੁਆਗਤ ਹੈ।",
                    {
                        "text": "ਸਭ ਤੋਂ ਵੱਧ ਸੰਭਵ ਰੈਜ਼ੋਲਿਊਸ਼ਨ (ਘੱਟੋ-ਘੱਟ 2 ਮੈਗਾਪਿਕਸਲ) ਅੱਪਲੋਡ ਕਰੋ। ਤੁਸੀਂ ਮੈਗਾਪਿਕਸਲ ਦੀ ਗਿਣਤੀ ਦੀ ਜਾਂਚ ਕਰ ਸਕਦੇ ਹੋ ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "ਇੱਥੇ"
                        }
                    },
                    "ਚਿੱਤਰਾਂ ਵਿੱਚ ਵਾਟਰਮਾਰਕ, ਲੋਗੋ, ਜਾਂ ਜੋੜਿਆ ਟੈਕਸਟ/ਗ੍ਰਾਫਿਕਸ (ਸਕੇਲ ਨੂੰ ਛੱਡ ਕੇ) ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।"
                ]
            },
            "keyDates": {
                "title": "ਮੁੱਖ ਤਾਰੀਖਾਂ",
                "timeline": [
                    { "date": "1 ਨਵੰਬਰ 2025", "event": "ਸਬਮਿਸ਼ਨ ਖੁੱਲ੍ਹੇ" },
                    { "date": "15 ਦਸੰਬਰ 2025", "event": "ਸਬਮਿਸ਼ਨ ਬੰਦ" },
                    { "date": "ਜਨਵਰੀ 2026", "event": "ਜਿਊਰੀ ਵਿਚਾਰ-ਵਟਾਂਦਰਾ" },
                    { "date": "ਫਰਵਰੀ 2026", "event": "ਰਾਸ਼ਟਰੀ ਜੇਤੂਆਂ ਦਾ ਐਲਾਨ" }
                ]
            },
            "submitNow": "ਹੁਣੇ ਜਮ੍ਹਾਂ ਕਰੋ",
            "imageCategories": {
                "title": "ਚਿੱਤਰ ਸ਼੍ਰੇਣੀਆਂ",
                "subtitle": "ਤੁਸੀਂ ਹੇਠ ਲਿਖੀਆਂ ਸੱਤ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਹਿੱਸਾ ਲੈ ਸਕਦੇ ਹੋ। ਉਹ ਚੁਣੋ ਜੋ ਤੁਹਾਡੇ ਕੰਮ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਹੋਵੇ। ਪ੍ਰੇਰਿਤ ਹੋਣ ਲਈ ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਉਦਾਹਰਣਾਂ ਦੇਖੋ।"
            },
            "categories": {
                "people": { "name": "ਵਿਗਿਆਨ ਵਿੱਚ ਲੋਕ", "description": "ਵਿਗਿਆਨੀ ਆਪਣੇ ਕੁਦਰਤੀ ਨਿਵਾਸ ਸਥਾਨ ਵਿੱਚ।" },
                "microscopy": { "name": "ਮਾਈਕ੍ਰੋਸਕੋਪੀ ਚਿੱਤਰ", "description": "ਆਪਟੀਕਲ, ਇਲੈਕਟ੍ਰੋਨ, ਅਤੇ ਸਕੈਨਿੰਗ ਪ੍ਰੋਬ ਮਾਈਕ੍ਰੋਸਕੋਪੀ ਚਿੱਤਰ।" },
                "nonPhotographic": { "name": "ਗੈਰ-ਫੋਟੋਗ੍ਰਾਫਿਕ ਮੀਡੀਆ", "description": "ਆਡੀਓ ਅਤੇ ਵੀਡੀਓ ਫਾਈਲਾਂ, ਕੰਪਿਊਟਰ ਦੁਆਰਾ ਤਿਆਰ ਚਿੱਤਰ, ਆਦਿ।" },
                "imageSets": { "name": "ਚਿੱਤਰ ਸੈੱਟ", "description": "ਵਿਸ਼ੇ ਅਨੁਸਾਰ ਜੁੜੇ ਚਿੱਤਰ (10 ਤੱਕ) ਜਿਨ੍ਹਾਂ ਨੂੰ ਇੱਕ ਸੈੱਟ ਵਜੋਂ ਦੇਖਿਆ ਜਾ ਸਕਦਾ ਹੈ।" },
                "wildlife": { "name": "ਜੰਗਲੀ ਜੀਵ ਅਤੇ ਕੁਦਰਤ", "description": "ਜੀਵ ਆਪਣੇ ਕੁਦਰਤੀ ਨਿਵਾਸ ਸਥਾਨ ਵਿੱਚ, ਮੈਕਰੋ ਫੋਟੋਗ੍ਰਾਫੀ ਸਮੇਤ।" },
                "astronomy": { "name": "ਖਗੋਲ ਵਿਗਿਆਨ", "description": "ਤਾਰਿਆਂ, ਆਕਾਸ਼ੀ ਘਟਨਾਵਾਂ, ਅਤੇ ਉਹਨਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰਨ ਲਈ ਵਰਤੇ ਜਾਣ ਵਾਲੇ ਉਪਕਰਣਾਂ ਦੀਆਂ ਤਸਵੀਰਾਂ।" },
                "general": { "name": "ਆਮ ਸ਼੍ਰੇਣੀ", "description": "ਪੁਰਾਤੱਤਵ ਤੋਂ ਲੈ ਕੇ ਜਵਾਲਾਮੁਖੀ ਵਿਗਿਆਨ ਤੱਕ, ਬਾਕੀ ਸਭ ਕੁਝ।" }
            },
            "readyToParticipate": {
                "title": "ਭਾਗ ਲੈਣ ਲਈ ਤਿਆਰ ਹੋ?",
                "subtitle": "ਸਟੇਜ ਸੈੱਟ ਹੈ। ਤੁਹਾਡਾ ਲੈਂਸ ਕੁੰਜੀ ਹੈ। ਸਾਨੂੰ ਆਪਣੀਆਂ ਵਿਗਿਆਨਕ ਅੱਖਾਂ ਨਾਲ ਦੁਨੀਆ ਦਿਖਾਓ।",
                "cta": "ਆਪਣਾ ਕੰਮ ਜਮ੍ਹਾਂ ਕਰੋ"
            },
            "supportedBy": "ਦੁਆਰਾ ਸਮਰਥਤ:"
        },
        "contact": {
            "title": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ",
            "subtitle": "ਸਵਾਲ ਜਾਂ ਫੀਡਬੈਕ ਹਨ? ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸੁਣਨਾ ਪਸੰਦ ਕਰਾਂਗੇ। ਅਸੀਂ ਜਲਦੀ ਜਵਾਬ ਦੇਣ ਦਾ ਵਾਅਦਾ ਕਰਦੇ ਹਾਂ!",
            "getInTouch": "ਸੰਪਰਕ ਵਿੱਚ ਰਹੋ",
            "p1": "ਫਾਰਮ ਭਰੋ ਅਤੇ ਸਾਡੀ ਟੀਮ ਕੁਝ ਘੰਟਿਆਂ ਵਿੱਚ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੇਗੀ। ਅਸੀਂ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ!",
            "form": {
                "name": "ਪੂਰਾ ਨਾਂਮ",
                "namePlaceholder": "ਤੁਹਾਡਾ ਨਾਮ",
                "email": "ਈਮੇਲ ਪਤਾ",
                "emailPlaceholder": "your.email@example.com",
                "subject": "ਵਿਸ਼ਾ",
                "subjectPlaceholder": "ਆਪਣੀ ਪੁੱਛਗਿੱਛ ਲਈ ਇੱਕ ਵਿਸ਼ਾ ਚੁਣੋ",
                "otherSubjectPlaceholder": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਵਿਸ਼ਾ ਦੱਸੋ",
                "message": "ਸੁਨੇਹਾ",
                "messagePlaceholder": "ਪਹਿਲਾਂ ਤੋਂ ਲਿਖਿਆ ਸੁਨੇਹਾ ਚੁਣੋ ਜਾਂ 'ਹੋਰ...'",
                "otherMessagePlaceholder": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਸੁਨੇਹਾ ਦੱਸੋ",
                "selectSubjectFirst": "ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਇੱਕ ਵਿਸ਼ਾ ਚੁਣੋ",
                "submit": "ਸੁਨੇਹਾ ਭੇਜੋ",
                "submitting": "ਭੇਜਿਆ ਜਾ ਰਿਹਾ ਹੈ..."
            },
            "toast": {
                "successTitle": "ਸੁਨੇਹਾ ਭੇਜਿਆ ਗਿਆ!",
                "successDescription": "ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਨ ਲਈ ਤੁਹਾਡਾ ਧੰਨਵਾਦ। ਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
                "errorTitle": "ਗਲਤੀ",
                "errorDescription": "ਕੁਝ ਗਲਤ ਹੋ ਗਿਆ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
            }
        },
        "organizers": {
            "title": "ਪ੍ਰਬੰਧਕਾਂ ਨੂੰ ਮਿਲੋ",
            "subtitle": "ਪਹਿਲੇ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ ਭਾਰਤ ਨੂੰ ਇੱਕ ਵੱਡੀ ਸਫਲਤਾ ਬਣਾਉਣ ਲਈ ਪਰਦੇ ਦੇ ਪਿੱਛੇ ਕੰਮ ਕਰ ਰਹੀ ਸਮਰਪਿਤ ਟੀਮ।",
            "lead_organizers": "ਮੁੱਖ ਪ੍ਰਬੰਧਕ",
            "advisors": "ਸਲਾਹਕਾਰ",
            "core_organizing_team": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "ਮੁੱਖ ਪ੍ਰਬੰਧਕ",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "ਮੁੱਖ ਪ੍ਰਬੰਧਕ",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "ਸਲਾਹਕਾਰ",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "ਕੋਰ ਆਰਗੇਨਾਈਜ਼ਿੰਗ ਟੀਮ",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "ਪ੍ਰਬੰਧਕਾਂ ਲਈ ਕਾਲ",
            "subtitle": "ਅਸੀਂ ਇਹ ਸਾਂਝਾ ਕਰਨ ਲਈ ਉਤਸ਼ਾਹਿਤ ਹਾਂ ਕਿ ਭਾਰਤ ਇਸ ਗਲੋਬਲ ਮੁਹਿੰਮ ਦਾ ਆਪਣਾ ਸਥਾਨਕ ਸੰਸਕਰਣ ਆਯੋਜਿਤ ਕਰੇਗਾ ਜੋ ਵਿਕੀਮੀਡੀਆ ਕਾਮਨਜ਼ 'ਤੇ ਮੁਫਤ ਲਾਇਸੰਸਸ਼ੁਦਾ ਚਿੱਤਰਾਂ, ਵੀਡੀਓਜ਼ ਅਤੇ ਹੋਰ ਮੀਡੀਆ ਦੁਆਰਾ ਵਿਗਿਆਨ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਦਾ ਹੈ।",
            "joinHeading": "ਪ੍ਰਬੰਧਕੀ ਟੀਮ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ",
            "joinDescription": "ਨਿਰਵਿਘਨ ਤਾਲਮੇਲ, ਆਊਟਰੀਚ, ਅਤੇ ਯੋਜਨਾਬੰਦੀ ਦਾ ਸਮਰਥਨ ਕਰਨ ਲਈ, ਅਸੀਂ ਆਪਣੀ ਪ੍ਰਬੰਧਕੀ ਟੀਮ ਦਾ ਵਿਸਤਾਰ ਕਰ ਰਹੇ ਹਾਂ। ਜੇਕਰ ਤੁਸੀਂ ਇਸ ਮਹੱਤਵਪੂਰਨ ਪਹਿਲਕਦਮੀ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਉਣ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਦੇ ਹੋ, ਤਾਂ ਅਸੀਂ ਤੁਹਾਡੇ ਤੋਂ ਸੁਣਨਾ ਪਸੰਦ ਕਰਾਂਗੇ।",
            "lookingForHeading": "ਅਸੀਂ ਕੀ ਲੱਭ ਰਹੇ ਹਾਂ",
            "lookingFor": [
                "ਵਿਗਿਆਨ, ਫੋਟੋਗ੍ਰਾਫੀ, ਜਾਂ ਖੁੱਲ੍ਹੇ ਗਿਆਨ ਵਿੱਚ ਦਿਲਚਸਪੀ ਰੱਖਣ ਵਾਲੇ ਜੋਸ਼ੀਲੇ ਵਿਅਕਤੀ।",
                "ਈਵੈਂਟ ਦੀ ਯੋਜਨਾਬੰਦੀ, ਆਊਟਰੀਚ, ਸੋਸ਼ਲ ਮੀਡੀਆ ਪ੍ਰਬੰਧਨ, ਜਾਂ ਸਮੱਗਰੀ ਬਣਾਉਣ ਵਿੱਚ ਹੁਨਰ।",
                "ਇੱਕ ਸਹਿਯੋਗੀ ਭਾਵਨਾ ਅਤੇ ਇੱਕ ਮਹੱਤਵਪੂਰਨ ਪ੍ਰਭਾਵ ਬਣਾਉਣ ਦੀ ਇੱਛਾ।"
            ],
            "sidebarTitle": "ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ",
            "sidebarDescription": "ਭਾਰਤ ਵਿੱਚ ਪਹਿਲੇ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ ਨੂੰ ਆਕਾਰ ਦੇਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।",
            "deadline": "ਅਰਜ਼ੀਆਂ ਬੰਦ: 15 ਜੁਲਾਈ 2025",
            "cta": "ਅਰਜ਼ੀਆਂ ਬੰਦ"
        },
        "resources": {
            "title": "ਸਰੋਤ",
            "subtitle": "ਪਿਛਲੇ ਜੇਤੂਆਂ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੋਵੋ ਅਤੇ ਆਪਣੀ ਸਬਮਿਸ਼ਨ ਤਿਆਰ ਕਰਨ ਲਈ ਮਦਦਗਾਰ ਸਮੱਗਰੀ ਤੱਕ ਪਹੁੰਚ ਕਰੋ।",
            "pastWinners": {
                "title": "ਪਿਛਲੇ ਜੇਤੂਆਂ ਦੀ ਗੈਲਰੀ",
                "winnerLabel": "ਜੇਤੂ",
                "winners": [
                    { "year": 2023, "category": "ਖਗੋਲ ਵਿਗਿਆਨ", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "ਜੀਵ ਵਿਗਿਆਨ", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "ਰਸਾਇਣ ਵਿਗਿਆਨ", "winner": "Priya Desai" },
                    { "year": 2022, "category": "ਖਗੋਲ ਵਿਗਿਆਨ", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "ਸਿੱਖਣ ਵਾਲੀ ਸਮੱਗਰੀ",
                "cta": "ਹੋਰ ਜਾਣੋ",
                "resources": [
                    { "title": "ਵਿਗਿਆਨ ਫੋਟੋਗ੍ਰਾਫੀ ਲਈ ਗਾਈਡ", "description": "ਸ਼ਾਨਦਾਰ ਵਿਗਿਆਨਕ ਚਿੱਤਰਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰਨ ਦੀਆਂ ਮੂਲ ਗੱਲਾਂ ਸਿੱਖੋ।", "link": "#" },
                    { "title": "ਕਰੀਏਟਿਵ ਕਾਮਨਜ਼ ਨੂੰ ਸਮਝਣਾ", "description": "ਮੁਕਾਬਲੇ ਲਈ ਤੁਹਾਡੇ ਕੰਮ ਨੂੰ ਲਾਇਸੈਂਸ ਦੇਣ ਲਈ ਇੱਕ ਤੇਜ਼ ਗਾਈਡ।", "link": "#" },
                    { "title": "ਚਿੱਤਰ ਅੱਪਲੋਡ ਟਿਊਟੋਰਿਅਲ", "description": "ਆਪਣੀਆਂ ਫੋਟੋਆਂ ਨੂੰ ਕਿਵੇਂ ਜਮ੍ਹਾਂ ਕਰਨਾ ਹੈ ਇਸ ਬਾਰੇ ਕਦਮ-ਦਰ-ਕਦਮ ਵੀਡੀਓ।", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "ਸਾਡਾ ਸਮਰਥਨ ਕਰੋ",
            "subtitle": "ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲਾ ਭਾਰਤ 2025 ਨੂੰ ਇੱਕ ਵੱਡੀ ਸਫਲਤਾ ਬਣਾਉਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "ਇੱਕ ਸਪਾਂਸਰ ਬਣੋ",
                    "description": "ਸੰਚਾਲਨ ਲਾਗਤਾਂ, ਇਨਾਮੀ ਰਾਸ਼ੀ, ਅਤੇ ਇਵੈਂਟ ਪ੍ਰਬੰਧਨ ਨੂੰ ਕਵਰ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਮੁਦਰਾ ਯੋਗਦਾਨਾਂ ਨਾਲ ਸਾਡਾ ਸਮਰਥਨ ਕਰੋ। ਅਸੀਂ ਪ੍ਰਮੁੱਖ ਬ੍ਰਾਂਡਿੰਗ ਮੌਕਿਆਂ ਦੇ ਨਾਲ ਵੱਖ-ਵੱਖ ਸਪਾਂਸਰਸ਼ਿਪ ਪੱਧਰਾਂ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦੇ ਹਾਂ।",
                    "cta": "ਸਪਾਂਸਰਸ਼ਿਪ ਲਈ ਸੰਪਰਕ ਕਰੋ"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "ਤੋਹਫ਼ੇ ਅਤੇ ਸਵੈਗ ਪ੍ਰਦਾਨ ਕਰੋ",
                    "description": "ਸਾਡੇ ਜੇਤੂਆਂ ਅਤੇ ਭਾਗੀਦਾਰਾਂ ਲਈ ਦਿਲਚਸਪ ਤੋਹਫ਼ਿਆਂ, ਵਾਊਚਰਾਂ, ਜਾਂ ਬ੍ਰਾਂਡਡ ਵਪਾਰਕ ਮਾਲ (ਸਵੈਗ) ਨਾਲ ਸਾਡੇ ਇਨਾਮੀ ਪੂਲ ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਓ। ਆਪਣੇ ਬ੍ਰਾਂਡ ਨੂੰ ਵਿਗਿਆਨ ਦੇ ਉਤਸ਼ਾਹੀਆਂ ਦੇ ਹੱਥਾਂ ਵਿੱਚ ਪਾਓ।",
                    "cta": "ਤੋਹਫ਼ੇ ਪੇਸ਼ ਕਰੋ"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "ਆਊਟਰੀਚ ਅਤੇ ਮਾਰਕੀਟਿੰਗ",
                    "description": "ਗੱਲ ਫੈਲਾਉਣ ਲਈ ਸਾਡੇ ਨਾਲ ਸਹਿਯੋਗ ਕਰੋ। ਆਪਣੇ ਸੰਸਥਾਗਤ ਚੈਨਲਾਂ, ਸੋਸ਼ਲ ਮੀਡੀਆ, ਜਾਂ ਮਾਰਕੀਟਿੰਗ ਮਹਾਰਤ ਦੁਆਰਾ ਇੱਕ ਵਿਸ਼ਾਲ ਦਰਸ਼ਕਾਂ ਤੱਕ ਪਹੁੰਚਣ ਵਿੱਚ ਸਾਡੀ ਮਦਦ ਕਰੋ।",
                    "cta": "ਆਊਟਰੀਚ 'ਤੇ ਸਹਿਯੋਗ ਕਰੋ"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "ਮਾਈਕ੍ਰੋਸਕੋਪਿਕ ਦੁਨੀਆ ਦੀ ਪੜਚੋਲ ਕਰੋ", "description": "ਸੈਲੂਲਰ ਬਣਤਰਾਂ ਤੋਂ ਲੈ ਕੇ ਕ੍ਰਿਸਟਲ ਬਣਤਰਾਂ ਤੱਕ, ਅਣਦੇਖੀ ਸੁੰਦਰਤਾ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰੋ।" },
                    { "id": 2, "title": "ਆਕਾਸ਼ੀ ਅਜੂਬਿਆਂ ਨੂੰ ਕੈਪਚਰ ਕਰੋ", "description": "ਬ੍ਰਹਿਮੰਡ ਤੁਹਾਡਾ ਕੈਨਵਸ ਹੈ। ਗਲੈਕਸੀਆਂ, ਨੈਬੂਲਾ, ਅਤੇ ਗ੍ਰਹਿ ਘਟਨਾਵਾਂ ਦੀ ਫੋਟੋ ਖਿੱਚੋ।" },
                    { "id": 3, "title": "ਗੁੰਝਲਦਾਰ ਡੇਟਾ ਦੀ ਕਲਪਨਾ ਕਰੋ", "description": "ਕੱਚੇ ਡੇਟਾ ਨੂੰ ਮਜਬੂਰ ਕਰਨ ਵਾਲੇ ਵਿਗਿਆਨਕ ਵਿਜ਼ੂਅਲਾਈਜ਼ੇਸ਼ਨਾਂ ਅਤੇ ਇਨਫੋਗ੍ਰਾਫਿਕਸ ਵਿੱਚ ਬਦਲੋ।" },
                    { "id": 4, "title": "ਮਨੁੱਖੀ ਸੂਝ-ਬੂਝ ਦਾ ਦਸਤਾਵੇਜ਼", "description": "ਕੰਮ 'ਤੇ ਵਿਗਿਆਨੀਆਂ, ਨਵੀਨਤਾਕਾਰੀ ਪ੍ਰਯੋਗਸ਼ਾਲਾ ਦੇ ਉਪਕਰਣਾਂ, ਅਤੇ ਖੋਜ ਦੇ ਪਲਾਂ ਨੂੰ ਕੈਪਚਰ ਕਰੋ।" }
                ]
            },
            "cta": {
                "title": "ਸ਼ਾਮਲ ਹੋਵੋ",
                "subtitle": "ਭਾਰਤ ਦੇ ਪਹਿਲੇ ਰਾਸ਼ਟਰੀ ਵਿਕੀ ਸਾਇੰਸ ਮੁਕਾਬਲੇ ਦਾ ਹਿੱਸਾ ਬਣੋ। ਅਸੀਂ ਸਾਡੇ ਨਾਲ ਜੁੜਨ ਲਈ ਜੋਸ਼ੀਲੇ ਵਿਅਕਤੀਆਂ ਅਤੇ ਸੰਸਥਾਵਾਂ ਦੀ ਤਲਾਸ਼ ਕਰ ਰਹੇ ਹਾਂ।",
                "campus": {
                    "title": "ਕੈਂਪਸ ਅੰਬੈਸਡਰਾਂ ਲਈ ਕਾਲ",
                    "description": "ਆਪਣੀ ਸੰਸਥਾ ਵਿੱਚ ਮੁਹਿੰਮ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰੋ, ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਨੂੰ ਸਾਂਝਾ ਕਰੋ, ਅਤੇ ਜਾਗਰੂਕਤਾ ਗਤੀਵਿਧੀਆਂ ਨੂੰ ਸੰਗਠਿਤ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
                    "deadline": "ਆਖਰੀ ਮਿਤੀ: 31 ਅਗਸਤ 2025",
                    "cta": "ਹੁਣੇ ਅਪਲਾਈ ਕਰੋ"
                },
                "affiliates": {
                    "title": "ਵਿਕੀਮੀਡੀਆ ਐਫੀਲੀਏਟਸ ਲਈ ਕਾਲ",
                    "description": "ਮੁਹਿੰਮ ਨੂੰ ਉਤਸ਼ਾਹਿਤ ਕਰਨ, ਸਥਾਨਕ ਆਊਟਰੀਚ ਦਾ ਆਯੋਜਨ ਕਰਨ, ਅਤੇ ਤੁਹਾਡੇ ਖੇਤਰ ਤੋਂ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਵਿਗਿਆਨਕ ਯੋਗਦਾਨ ਲਿਆਉਣ ਵਿੱਚ ਮਦਦ ਕਰਨ ਲਈ ਸਾਡੇ ਨਾਲ ਸਾਂਝੇਦਾਰੀ ਕਰੋ।",
                    "deadline": "ਆਖਰੀ ਮਿਤੀ: 31 ਅਗਸਤ 2025",
                    "cta": "ਸਾਡੇ ਨਾਲ ਸਾਂਝੇਦਾਰੀ ਕਰੋ"
                }
            },
            "info": {
                "title": "ਹਰ ਉਹ ਚੀਜ਼ ਜੋ ਤੁਹਾਨੂੰ ਜਾਣਨ ਦੀ ਲੋੜ ਹੈ",
                "subtitle": "ਸਬਮਿਸ਼ਨ ਦਿਸ਼ਾ-ਨਿਰਦੇਸ਼ਾਂ ਤੋਂ ਲੈ ਕੇ ਜਿਊਰੀ ਦੇ ਵੇਰਵਿਆਂ ਤੱਕ, ਇਸ ਦਿਲਚਸਪ ਘਟਨਾ ਦਾ ਹਿੱਸਾ ਬਣਨ ਲਈ ਤੁਹਾਨੂੰ ਲੋੜੀਂਦੀ ਸਾਰੀ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰੋ।",
                "cta": "ਹੋਰ ਪਤਾ ਕਰੋ",
                "sections": [
                    { "icon": "Info", "title": "ਮੁਕਾਬਲੇ ਬਾਰੇ", "description": "ਇੱਕ ਸਾਲਾਨਾ ਅੰਤਰਰਾਸ਼ਟਰੀ ਵਿਗਿਆਨ ਫੋਟੋਗ੍ਰਾਫੀ ਮੁਕਾਬਲਾ, ਵਿਗਿਆਨ ਦੇ ਉਤਸ਼ਾਹੀਆਂ ਨੂੰ ਖੋਜ ਦੀ ਦੁਨੀਆ ਦੇ ਆਪਣੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਨੂੰ ਸਾਂਝਾ ਕਰਨ ਲਈ ਇਕੱਠਾ ਕਰਦਾ ਹੈ।", "link": "/about" },
                    { "icon": "Target", "title": "ਕਿਵੇਂ ਭਾਗ ਲੈਣਾ ਹੈ", "description": "ਭਾਗੀਦਾਰੀ ਮੁਫ਼ਤ ਹੈ ਅਤੇ ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹੀ ਹੈ। ਸਬਮਿਸ਼ਨ ਦੀ ਮਿਆਦ ਦੇ ਦੌਰਾਨ ਵੱਖ-ਵੱਖ ਸ਼੍ਰੇਣੀਆਂ ਵਿੱਚ ਆਪਣੇ ਸਭ ਤੋਂ ਵਧੀਆ ਵਿਗਿਆਨ-ਸਬੰਧਤ ਚਿੱਤਰ ਜਮ੍ਹਾਂ ਕਰੋ।", "link": "/competition" },
                    { "icon": "Award", "title": "ਇਨਾਮ ਅਤੇ ਮਾਨਤਾ", "description": "ਜੇਤੂਆਂ ਨੂੰ ਰਾਸ਼ਟਰੀ ਮਾਨਤਾ, ਸਰਟੀਫਿਕੇਟ ਅਤੇ ਇਨਾਮ ਮਿਲਦੇ ਹਨ। ਸਭ ਤੋਂ ਵਧੀਆ ਤਸਵੀਰਾਂ ਅੰਤਰਰਾਸ਼ਟਰੀ ਫਾਈਨਲ ਲਈ ਵੀ ਅੱਗੇ ਵਧਦੀਆਂ ਹਨ।", "link": "/competition" },
                    { "icon": "Users", "title": "ਜਿਊਰੀ ਅਤੇ ਮਾਪਦੰਡ", "description": "ਸਾਡੀ ਵਿਗਿਆਨੀਆਂ ਅਤੇ ਫੋਟੋਗ੍ਰਾਫ਼ਰਾਂ ਦੀ ਮਾਹਰ ਜਿਊਰੀ ਵਿਗਿਆਨਕ ਮੁੱਲ, ਮੌਲਿਕਤਾ ਅਤੇ ਸੁਹਜ ਦੀ ਗੁਣਵੱਤਾ ਦੇ ਆਧਾਰ 'ਤੇ ਐਂਟਰੀਆਂ ਦਾ ਨਿਰਣਾ ਕਰੇਗੀ।", "link": "/jury" },
                    { "icon": "History", "title": "ਪਿਛਲੇ ਜੇਤੂ", "description": "ਪਿਛਲੇ ਸਾਲਾਂ ਦੀਆਂ ਜੇਤੂ ਤਸਵੀਰਾਂ ਦੀ ਇੱਕ ਗੈਲਰੀ ਦੀ ਪੜਚੋਲ ਕਰੋ ਅਤੇ ਪ੍ਰਦਰਸ਼ਿਤ ਕੀਤੀ ਗਈ ਸ਼ਾਨਦਾਰ ਪ੍ਰਤਿਭਾ ਤੋਂ ਪ੍ਰੇਰਿਤ ਹੋਵੋ।", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "ਭਾਗ ਲੈਣ ਲਈ ਤਿਆਰ ਹੋ?",
                    "subtitle": "ਸਟੇਜ ਸੈੱਟ ਹੈ। ਤੁਹਾਡਾ ਲੈਂਸ ਕੁੰਜੀ ਹੈ। ਸਾਨੂੰ ਆਪਣੀਆਂ ਵਿਗਿਆਨਕ ਅੱਖਾਂ ਨਾਲ ਦੁਨੀਆ ਦਿਖਾਓ।",
                    "cta": "ਆਪਣਾ ਕੰਮ ਜਮ੍ਹਾਂ ਕਰੋ"
                }
            },
            "prizes": {
                "title": "ਇਨਾਮ ਅਤੇ ਮਾਨਤਾ",
                "subtitle": "ਤੁਹਾਡੇ ਸ਼ਾਨਦਾਰ ਵਿਜ਼ੂਅਲਜ਼ ਨੂੰ ਮਨਾਇਆ ਜਾਣਾ ਚਾਹੀਦਾ ਹੈ। ਪਤਾ ਕਰੋ ਕਿ ਤੁਸੀਂ ਕੀ ਜਿੱਤ ਸਕਦੇ ਹੋ।",
                "prizes": [
                    { "icon": "Award", "title": "ਰਾਸ਼ਟਰੀ ਮਾਨਤਾ", "description": "ਜੇਤੂਆਂ ਨੂੰ ਸਾਡੇ ਅਧਿਕਾਰਤ ਪਲੇਟਫਾਰਮਾਂ 'ਤੇ ਮਨਾਇਆ ਜਾਵੇਗਾ ਅਤੇ ਰਾਸ਼ਟਰੀ ਮੀਡੀਆ ਕਵਰੇਜ ਮਿਲੇਗੀ।" },
                    { "icon": "Camera", "title": "ਉੱਚ-ਪੱਧਰੀ ਉਪਕਰਣ", "description": "ਚੋਟੀ ਦੇ ਜੇਤੂਆਂ ਲਈ ਉਹਨਾਂ ਦੇ ਜਨੂੰਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਨ ਲਈ ਦਿਲਚਸਪ ਫੋਟੋਗ੍ਰਾਫੀ ਗੀਅਰ ਅਤੇ ਸਹਾਇਕ ਉਪਕਰਣ।" },
                    { "icon": "BookOpen", "title": "ਪ੍ਰਕਾਸ਼ਨ ਵਿਸ਼ੇਸ਼ਤਾ", "description": "ਆਪਣੇ ਕੰਮ ਨੂੰ ਵੱਕਾਰੀ ਵਿਗਿਆਨ ਰਸਾਲਿਆਂ ਅਤੇ ਪ੍ਰਕਾਸ਼ਨਾਂ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰੋ।" }
                ]
            },
            "jury": {
                "title": "ਸਤਿਕਾਰਤ ਜਿਊਰੀ ਨੂੰ ਮਿਲੋ",
                "description": "ਸਾਡੇ ਪੈਨਲ ਵਿੱਚ ਪੂਰੇ ਭਾਰਤ ਦੇ ਪ੍ਰਸਿੱਧ ਵਿਗਿਆਨੀਆਂ, ਪੇਸ਼ੇਵਰ ਫੋਟੋਗ੍ਰਾਫ਼ਰਾਂ, ਅਤੇ ਵਿਗਿਆਨ ਸੰਚਾਰਕਾਂ ਦਾ ਇੱਕ ਵਿਭਿੰਨ ਸਮੂਹ ਸ਼ਾਮਲ ਹੈ। ਉਹ ਇੱਕ ਨਿਰਪੱਖ ਅਤੇ ਸੂਝਵਾਨ ਮੁਲਾਂਕਣ ਪ੍ਰਕਿਰਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਬਹੁਤ ਸਾਰਾ ਤਜਰਬਾ ਲਿਆਉਂਦੇ ਹਨ।",
                "cta": "ਪੂਰਾ ਪੈਨਲ ਵੇਖੋ"
            }
        }
    },
    es: {
        "mainNavLinks": [
            { "name": "Acerca de", "href": "/about" },
            { "name": "Concurso", "href": "/competition" },
            { "name": "Recursos", "href": "/resources" },
            { "name": "Patrocinadores", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "Conoce al Equipo", "href": "/organizers" },
            { "name": "Embajadores de Campus", "href": "/campus-ambassadors" },
            { "name": "Convocatoria para el Equipo", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "Jurado", "href": "/jury" },
            { "name": "Apóyanos", "href": "/support-us" },
            { "name": "Contacto", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Cómo crear una cuenta de Wiki", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Cómo usar el Asistente de Subida", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "Entendiendo las Licencias CC", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "Cómo agregar categorías", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "Organizadores",
        "moreDropdown": "Más",
        "learningDropdown": "Aprendizaje",
        "participateButton": "Participa",
        "footerNavLinks": [
            { "name": "Acerca de", "href": "/about" },
            { "name": "Concurso", "href": "/competition" },
            { "name": "Jurado", "href": "/jury" },
            { "name": "Organizadores", "href": "/organizers" },
            { "name": "Patrocinadores", "href": "/sponsors" },
            { "name": "Recursos", "href": "/resources" },
            { "name": "Embajadores de Campus", "href": "/campus-ambassadors" },
            { "name": "Contacto", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "Patrocinio", "href": "/support-us#sponsorship" },
            { "name": "Regalos/Artículos promocionales", "href": "/support-us#gifts" },
            { "name": "Difusión", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "Capturando la belleza de la ciencia a través de la fotografía.",
        "footerNavHeader": "Navegación",
        "footerSupportHeader": "Apóyanos",
        "footerContactHeader": "Contacto",
        "footerCopyright": "Wiki Science Competition India. Todos los derechos reservados.",
        "footerLicense": "El contenido está disponible bajo CC BY-SA 4.0 a menos que se indique lo contrario.",
        "footerDeveloperCredit": "Diseñado y Desarrollado por",
        "about": {
            "title": "Acerca de WikiScience India 2025",
            "badge": "Introducción para el Contexto Indio",
            "heading": "Wiki Science Competition 2025 – India",
            "p1": "Por primera vez, India organiza una edición nacional del Wiki Science Competition (WSC), una de las iniciativas más grandes del mundo que une ciencia, fotografía y conocimiento libre.",
            "p2": "Lanzado en Estonia en 2011 y luego expandido por Europa y el mundo, el concurso ha inspirado a miles de científicos, investigadores y entusiastas a compartir imágenes que capturan la maravilla de la ciencia. Desde células microscópicas hasta galaxias cósmicas, estas contribuciones con licencia libre enriquecen Wikimedia Commons y apoyan la educación abierta a nivel mundial.",
            "p3": "India ha contribuido con orgullo a ediciones internacionales pasadas, con fotógrafos y científicos indios recibiendo reconocimiento y premios. Sin embargo, esta es la primera vez que India organiza su propia competencia local, dedicada a mostrar el espíritu científico y la creatividad de nuestro país.",
            "p4": "El Wiki Science Competition 2025 – India es más que un concurso. Es un esfuerzo colectivo para representar la ciencia india ante el mundo, a través de imágenes poderosas, historias y creatividad.",
            "aims": {
                "title": "Nuestros Objetivos",
                "subtitle": "A través de esta campaña, nuestro objetivo es:",
                "items": [
                    { "icon": "PenSquare", "title": "Fomentar la Contribución", "description": "Animar a estudiantes, investigadores y entusiastas de toda la India a contribuir con valiosos medios científicos." },
                    { "icon": "Lightbulb", "title": "Crear Conciencia", "description": "Crear conciencia sobre la importancia de la ciencia abierta y el conocimiento libre." },
                    { "icon": "Globe", "title": "Celebrar el Patrimonio", "description": "Celebrar el rico patrimonio científico de la India y sus innovaciones continuas." },
                    { "icon": "Handshake", "title": "Fortalecer la Colaboración", "description": "Fortalecer la colaboración entre las comunidades de Wikimedia, universidades, institutos de investigación y organizaciones." }
                ]
            },
            "supportingOrg": {
                "title": "Organización de Apoyo",
                "p1": "El Wiki Club SATI (Vidisha, Madhya Pradesh) es reconocido como la organización de apoyo para la primera edición nacional del Wiki Science Competition 2025 en India. El club ha estado a la vanguardia involucrando a estudiantes y jóvenes profesionales en el movimiento Wikimedia, contribuyendo al conocimiento abierto, la innovación técnica y las iniciativas lideradas por la comunidad.",
                "p2": "Varios miembros del Equipo Organizador Principal están asociados con el Wiki Club SATI, y su participación continua refleja el compromiso del club con el avance del conocimiento libre y la participación científica. Si bien el apoyo no es financiero, la capacidad organizativa, la experiencia y las redes comunitarias del Wiki Club SATI juegan un papel esencial en la realización de esta campaña a nivel nacional."
            }
        },
        "campusAmbassadors": {
            "title": "Embajadores de Campus",
            "subtitle": "Conoce a los líderes apasionados que impulsan el Wiki Science Competition en sus comunidades.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Club SATI",
                    "boardLink": {
                        "name": "Wiki Club SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "Wikipedista y Lingüista Computacional de Tamilnadu"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "Jefe de Departamento y Profesor Asistente, Departamento de Animación por Computadora, St Aloysius",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Comunidad Deoband",
                    "boardLink": {
                        "name": "Comunidad Deoband",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "Actualmente realizando proyectos de TI y vigilancia en el distrito de Kanniyakumari"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "Wikipedista Tamil, Ingeniero de Software"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Wikipedista"
                }
            ]
        },
        "affiliates": {
            "title": "Convocatoria para Afiliados de Wikimedia",
            "subtitle": "Invitamos a afiliados de Wikimedia, grupos de usuarios y organizaciones de toda la India a colaborar con nosotros en la promoción y apoyo del Wiki Science Competition 2025.",
            "partnerHeading": "¿Por qué asociarse con nosotros?",
            "partnerDescription": "Esta es una oportunidad única para celebrar la ciencia y enriquecer Wikimedia Commons con medios de licencia libre. Como socio, tu grupo puede desempeñar un papel fundamental en el éxito del primer Wiki Science Competition nacional de la India, ayudando con la difusión, la concienciación y la participación de la comunidad.",
            "collaborationHeading": "Cómo puedes colaborar",
            "collaborationPoints": [
                "Participar en la difusión en línea y presencial a tus redes.",
                "Facilitar las subidas de instituciones y organismos de investigación.",
                "Organizar talleres locales, editatones o safaris fotográficos.",
                "Ayudar con la traducción y localización de los materiales de la campaña."
            ],
            "formNote": "Este formulario está destinado a afiliados de Wikimedia reconocidos o grupos comunitarios. Las personas y los estudiantes deben usar el",
            "campusAmbassadorLink": "formulario de Embajador de Campus",
            "sidebarTitle": "Asóciate con Nosotros",
            "sidebarDescription": "Colaboremos para mostrar el panorama científico de la India al mundo.",
            "deadline": "Fecha límite: 31 de agosto de 2025",
            "cta": "Abrir Formulario de Asociación"
        },
        "campus": {
            "title": "Convocatoria para Embajadores de Campus",
            "subtitle": "Únete a nosotros como coordinador de difusión local para ayudar a promover el Wiki Science Competition 2025 en tu institución, comunidad o red.",
            "whoHeading": "¿A quién estamos buscando?",
            "whoDescription": "Los Embajadores de Campus desempeñan un papel clave en la difusión de la conciencia, la orientación de los participantes y, opcionalmente, la organización de sesiones de sensibilización o talleres. Ya seas un wikimedista, estudiante de ciencias, diseñador, profesor o simplemente un entusiasta de la ciencia abierta, ¡nos encantaría tenerte a bordo!",
            "responsibilitiesHeading": "Responsabilidades",
            "responsibilities": [
                "Promover la campaña en tu institución o comunidad.",
                "Compartir las pautas de participación con posibles contribuyentes.",
                "Opcionalmente, organizar actividades de sensibilización como talleres o safaris fotográficos (¡podemos proporcionar apoyo!)."
            ],
            "sidebar": {
                "title": "Aplica Ahora",
                "description": "¿Listo para generar un impacto? Rellena el formulario para convertirte en un Embajador de Campus.",
                "deadline": "Fecha límite: 31 de agosto de 2025",
                "cta": "Abrir Formulario de Solicitud"
            },
            "cta": {
                "text": "Conviértete en un Embajador de Campus",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "Detalles del Concurso",
            "subtitle": "Todo lo que necesitas saber para participar y ganar.",
            "howToParticipate": {
                "title": "Cómo Participar",
                "p1": "Si no tienes una, puedes crear una cuenta global que te dará un nombre de usuario específico en todas las plataformas de Wikimedia (incluido Wikimedia Commons) cuando inicies sesión. Como usuario recién registrado, debes esperar al menos cuatro días antes de subir un archivo de video, mientras que las imágenes se pueden subir justo después del registro.",
                "createAccountLink": "¡Crea tu cuenta aquí!",
                "rulesTitle": "Reglas de Participación",
                "rules": [
                    "Las presentaciones deben ser de tu propia autoría, subidas desde tu propia cuenta registrada de Wikimedia. Para múltiples autores, se deben proporcionar todos los nombres.",
                    "Las imágenes deben estar bajo una licencia libre (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "Todas las presentaciones requieren una descripción científica clara y precisa en inglés. Otros idiomas también son bienvenidos.",
                    {
                        "text": "Sube la resolución más alta posible (al menos 2 megapíxeles). Puedes verificar el recuento de megapíxeles ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "aquí"
                        }
                    },
                    "Las imágenes no deben contener marcas de agua, logotipos o texto/gráficos añadidos (excepto escalas)."
                ]
            },
            "keyDates": {
                "title": "Fechas Clave",
                "timeline": [
                    { "date": "1 de noviembre de 2025", "event": "Apertura de Envíos" },
                    { "date": "15 de diciembre de 2025", "event": "Cierre de Envíos" },
                    { "date": "Enero de 2026", "event": "Deliberación del Jurado" },
                    { "date": "Febrero de 2026", "event": "Anuncio de Ganadores Nacionales" }
                ]
            },
            "submitNow": "Enviar Ahora",
            "imageCategories": {
                "title": "Categorías de Imágenes",
                "subtitle": "Puedes participar en las siguientes siete categorías. Elige la que mejor se adapte a tu trabajo. Mira los ejemplos a continuación para inspirarte."
            },
            "categories": {
                "people": { "name": "Gente en la Ciencia", "description": "Científicos en su hábitat natural." },
                "microscopy": { "name": "Imágenes de Microscopía", "description": "Imágenes de microscopía óptica, electrónica y de sonda de barrido." },
                "nonPhotographic": { "name": "Medios no Fotográficos", "description": "Archivos de audio y video, imágenes generadas por computadora, etc." },
                "imageSets": { "name": "Conjuntos de Imágenes", "description": "Imágenes vinculadas temáticamente (hasta 10) que se pueden ver como un solo conjunto." },
                "wildlife": { "name": "Vida Silvestre y Naturaleza", "description": "Organismos en su hábitat natural, incluida la macrofotografía." },
                "astronomy": { "name": "Astronomía", "description": "Imágenes de estrellas, eventos celestes y el equipo utilizado para capturarlos." },
                "general": { "name": "Categoría General", "description": "Todo lo demás, desde arqueología hasta vulcanología." }
            },
            "readyToParticipate": {
                "title": "¿Listo para Participar?",
                "subtitle": "El escenario está listo. Tu lente es la clave. Muéstranos el mundo a través de tus ojos científicos.",
                "cta": "Envía tu Trabajo"
            },
            "supportedBy": "Apoyado por:"
        },
        "contact": {
            "title": "Contáctanos",
            "subtitle": "¿Tienes preguntas o comentarios? Nos encantaría saber de ti. ¡Prometemos una respuesta rápida!",
            "getInTouch": "Ponte en Contacto",
            "p1": "Rellena el formulario y nuestro equipo se pondrá en contacto contigo en unas pocas horas. ¡Estamos aquí para ayudar!",
            "form": {
                "name": "Nombre Completo",
                "namePlaceholder": "Tu Nombre",
                "email": "Dirección de Correo Electrónico",
                "emailPlaceholder": "tu.correo@ejemplo.com",
                "subject": "Asunto",
                "subjectPlaceholder": "Selecciona un asunto para tu consulta",
                "otherSubjectPlaceholder": "Por favor, especifica tu asunto",
                "message": "Mensaje",
                "messagePlaceholder": "Selecciona un mensaje preescrito u 'Otro...'",
                "otherMessagePlaceholder": "Por favor, especifica tu mensaje",
                "selectSubjectFirst": "Por favor, selecciona primero un asunto",
                "submit": "Enviar Mensaje",
                "submitting": "Enviando..."
            },
            "toast": {
                "successTitle": "¡Mensaje Enviado!",
                "successDescription": "Gracias por contactarnos. Nos pondremos en contacto contigo en breve.",
                "errorTitle": "Error",
                "errorDescription": "Algo salió mal. Por favor, inténtalo de nuevo."
            }
        },
        "organizers": {
            "title": "Conoce a los Organizadores",
            "subtitle": "El equipo dedicado que trabaja tras bastidores para hacer del primer Wiki Science Competition India un gran éxito.",
            "lead_organizers": "Organizadores Principales",
            "advisors": "Asesores",
            "core_organizing_team": "Equipo Organizador Principal",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "Organizador Principal",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "Organizadora Principal",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "Asesor",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "Equipo Organizador Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "Convocatoria para Organizadores",
            "subtitle": "Estamos emocionados de compartir que India organizará su propia edición local de esta campaña global que promueve la ciencia a través de imágenes, videos y otros medios con licencia libre en Wikimedia Commons.",
            "joinHeading": "Únete al Equipo Organizador",
            "joinDescription": "Para apoyar una coordinación, difusión y planificación fluidas, estamos ampliando nuestro equipo organizador. Si estás interesado en contribuir a esta importante iniciativa, nos encantaría saber de ti.",
            "lookingForHeading": "Lo que estamos buscando",
            "lookingFor": [
                "Individuos apasionados con interés en la ciencia, la fotografía o el conocimiento abierto.",
                "Habilidades en planificación de eventos, difusión, gestión de redes sociales o creación de contenido.",
                "Un espíritu colaborativo y el deseo de generar un impacto significativo."
            ],
            "sidebarTitle": "Aplica Ahora",
            "sidebarDescription": "Ayúdanos a dar forma al primer Wiki Science Competition en India.",
            "deadline": "Inscripciones Cerradas: 15 de julio de 2025",
            "cta": "Inscripciones Cerradas"
        },
        "resources": {
            "title": "Recursos",
            "subtitle": "Inspírate con los ganadores anteriores y accede a materiales útiles para preparar tu envío.",
            "pastWinners": {
                "title": "Galería de Ganadores Anteriores",
                "winnerLabel": "Ganador",
                "winners": [
                    { "year": 2023, "category": "Astronomía", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "Biología", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "Química", "winner": "Priya Desai" },
                    { "year": 2022, "category": "Astronomía", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "Materiales de Aprendizaje",
                "cta": "Aprende Más",
                "resources": [
                    { "title": "Guía de Fotografía Científica", "description": "Aprende los conceptos básicos para capturar imágenes científicas impresionantes.", "link": "#" },
                    { "title": "Entendiendo Creative Commons", "description": "Una guía rápida para licenciar tu trabajo para el concurso.", "link": "#" },
                    { "title": "Tutorial de Subida de Imágenes", "description": "Video paso a paso sobre cómo enviar tus fotos.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "Apóyanos",
            "subtitle": "Ayúdanos a que el Wiki Science Competition India 2025 sea un éxito masivo.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "Conviértete en Patrocinador",
                    "description": "Apóyanos con contribuciones monetarias para ayudar a cubrir los costos operativos, el dinero de los premios y la gestión de eventos. Ofrecemos varios niveles de patrocinio con destacadas oportunidades de marca.",
                    "cta": "Contactar para Patrocinio"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "Proporciona Regalos y Artículos Promocionales",
                    "description": "Contribuye a nuestro fondo de premios con regalos emocionantes, vales o mercancía de marca (swag) para nuestros ganadores y participantes. Pon tu marca en manos de los entusiastas de la ciencia.",
                    "cta": "Ofrecer Regalos"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "Difusión y Marketing",
                    "description": "Colabora con nosotros para correr la voz. Ayúdanos a llegar a un público más amplio a través de tus canales institucionales, redes sociales o experiencia en marketing.",
                    "cta": "Colaborar en la Difusión"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "Explora Mundos Microscópicos", "description": "Desde estructuras celulares hasta formaciones cristalinas, muestra la belleza oculta." },
                    { "id": 2, "title": "Captura Maravillas Celestiales", "description": "El cosmos es tu lienzo. Fotografía galaxias, nebulosas y eventos planetarios." },
                    { "id": 3, "title": "Visualiza Datos Complejos", "description": "Transforma datos brutos en visualizaciones científicas e infografías convincentes." },
                    { "id": 4, "title": "Documenta el Ingenio Humano", "description": "Captura a científicos en acción, equipos de laboratorio innovadores y momentos de descubrimiento." }
                ]
            },
            "cta": {
                "title": "Involúcrate",
                "subtitle": "Sé parte del primer Wiki Science Competition nacional de la India. Buscamos personas y organizaciones apasionadas que se unan a nosotros.",
                "campus": {
                    "title": "Convocatoria para Embajadores de Campus",
                    "description": "Promueve la campaña en tu institución, comparte pautas y ayuda a organizar actividades de sensibilización.",
                    "deadline": "Fecha límite: 31 de agosto de 2025",
                    "cta": "Aplica Ahora"
                },
                "affiliates": {
                    "title": "Convocatoria para Afiliados de Wikimedia",
                    "description": "Asóciate con nosotros para promover la campaña, organizar la difusión local y ayudar a traer contribuciones científicas impactantes de tu región.",
                    "deadline": "Fecha límite: 31 de agosto de 2025",
                    "cta": "Asóciate con Nosotros"
                }
            },
            "info": {
                "title": "Todo lo que Necesitas Saber",
                "subtitle": "Desde las pautas de envío hasta los detalles del jurado, obtén toda la información que necesitas para ser parte de este emocionante evento.",
                "cta": "Descubre más",
                "sections": [
                    { "icon": "Info", "title": "Acerca del Concurso", "description": "Un concurso internacional anual de fotografía científica que reúne a entusiastas de la ciencia para compartir su visión del mundo de la investigación.", "link": "/about" },
                    { "icon": "Target", "title": "Cómo Participar", "description": "La participación es gratuita y abierta a todos. Envía tus mejores imágenes relacionadas con la ciencia en varias categorías durante el período de envío.", "link": "/competition" },
                    { "icon": "Award", "title": "Premios y Reconocimiento", "description": "Los ganadores reciben reconocimiento nacional, certificados y premios. Las mejores imágenes también avanzan a la final internacional.", "link": "/competition" },
                    { "icon": "Users", "title": "Jurado y Criterios", "description": "Nuestro jurado experto de científicos y fotógrafos juzgará las entradas en función del valor científico, la originalidad y la calidad estética.", "link": "/jury" },
                    { "icon": "History", "title": "Ganadores Anteriores", "description": "Explora una galería de las fotografías ganadoras de años anteriores e inspírate con el increíble talento mostrado.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "¿Listo para Participar?",
                    "subtitle": "El escenario está listo. Tu lente es la clave. Muéstranos el mundo a través de tus ojos científicos.",
                    "cta": "Envía tu Trabajo"
                }
            },
            "prizes": {
                "title": "Premios y Reconocimiento",
                "subtitle": "Tus visuales innovadoras merecen ser celebradas. Descubre lo que puedes ganar.",
                "prizes": [
                    { "icon": "Award", "title": "Reconocimiento Nacional", "description": "Los ganadores serán celebrados en nuestras plataformas oficiales y obtendrán cobertura en los medios nacionales." },
                    { "icon": "Camera", "title": "Equipo de Primera Categoría", "description": "Emocionante equipo de fotografía y accesorios para los principales ganadores para ayudar en su pasión." },
                    { "icon": "BookOpen", "title": "Publicación Destacada", "description": "Haz que tu trabajo aparezca en prestigiosas revistas y publicaciones científicas." }
                ]
            },
            "jury": {
                "title": "Conoce al Estimado Jurado",
                "description": "Nuestro panel cuenta con un grupo diverso de renombrados científicos, fotógrafos profesionales y comunicadores de la ciencia de toda la India. Aportan una gran experiencia para garantizar un proceso de evaluación justo y perspicaz.",
                "cta": "Ver Panel Completo"
            }
        }
    },
    de: {
        "mainNavLinks": [
            { "name": "Über uns", "href": "/about" },
            { "name": "Wettbewerb", "href": "/competition" },
            { "name": "Ressourcen", "href": "/resources" },
            { "name": "Sponsoren", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "Lerne das Team kennen", "href": "/organizers" },
            { "name": "Campus-Botschafter", "href": "/campus-ambassadors" },
            { "name": "Aufruf für Teammitglieder", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "Jury", "href": "/jury" },
            { "name": "Unterstütze uns", "href": "/support-us" },
            { "name": "Kontakt", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Wie man ein Wiki-Konto erstellt", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Wie man den Upload-Assistenten benutzt", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC-Lizenzen verstehen", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "Wie man Kategorien hinzufügt", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "Organisatoren",
        "moreDropdown": "Mehr",
        "learningDropdown": "Lernen",
        "participateButton": "Teilnehmen",
        "footerNavLinks": [
            { "name": "Über uns", "href": "/about" },
            { "name": "Wettbewerb", "href": "/competition" },
            { "name": "Jury", "href": "/jury" },
            { "name": "Organisatoren", "href": "/organizers" },
            { "name": "Sponsoren", "href": "/sponsors" },
            { "name": "Ressourcen", "href": "/resources" },
            { "name": "Campus-Botschafter", "href": "/campus-ambassadors" },
            { "name": "Kontakt", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "Sponsoring", "href": "/support-us#sponsorship" },
            { "name": "Geschenke/Werbeartikel", "href": "/support-us#gifts" },
            { "name": "Öffentlichkeitsarbeit", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "Die Schönheit der Wissenschaft durch Fotografie einfangen.",
        "footerNavHeader": "Navigation",
        "footerSupportHeader": "Unterstütze uns",
        "footerContactHeader": "Kontakt",
        "footerCopyright": "Wiki Science Competition India. Alle Rechte vorbehalten.",
        "footerLicense": "Inhalte sind unter CC BY-SA 4.0 verfügbar, sofern nicht anders angegeben.",
        "footerDeveloperCredit": "Entworfen und entwickelt von",
        "about": {
            "title": "Über WikiScience India 2025",
            "badge": "Einführung für den indischen Kontext",
            "heading": "Wiki Science Competition 2025 – Indien",
            "p1": "Zum allerersten Mal organisiert Indien eine nationale Ausgabe des Wiki Science Competition (WSC) – eine der weltweit größten Initiativen, die Wissenschaft, Fotografie und freies Wissen zusammenbringt.",
            "p2": "Der Wettbewerb wurde 2011 in Estland ins Leben gerufen und später in ganz Europa und weltweit ausgeweitet. Er hat Tausende von Wissenschaftlern, Forschern und Enthusiasten dazu inspiriert, Bilder zu teilen, die das Wunder der Wissenschaft einfangen. Von mikroskopischen Zellen bis hin zu kosmischen Galaxien bereichern diese frei lizenzierten Beiträge Wikimedia Commons und unterstützen die offene Bildung weltweit.",
            "p3": "Indien hat stolz zu vergangenen internationalen Ausgaben beigetragen – indische Fotografen und Wissenschaftler erhielten Anerkennung und Auszeichnungen. Dies ist jedoch das erste Mal, dass Indien einen eigenen lokalen Wettbewerb veranstaltet, der dem wissenschaftlichen Geist und der Kreativität unseres Landes gewidmet ist.",
            "p4": "Der Wiki Science Competition 2025 – Indien ist mehr als nur ein Wettbewerb. Es ist eine gemeinsame Anstrengung, die indische Wissenschaft der Welt zu präsentieren – durch kraftvolle Bilder, Geschichten und Kreativität.",
            "aims": {
                "title": "Unsere Ziele",
                "subtitle": "Mit dieser Kampagne möchten wir:",
                "items": [
                    { "icon": "PenSquare", "title": "Beiträge fördern", "description": "Studierende, Forscher und Enthusiasten in ganz Indien ermutigen, wertvolle wissenschaftliche Medien beizusteuern." },
                    { "icon": "Lightbulb", "title": "Bewusstsein schaffen", "description": "Das Bewusstsein für die Bedeutung von offener Wissenschaft und freiem Wissen schärfen." },
                    { "icon": "Globe", "title": "Erbe feiern", "description": "Indiens reiches wissenschaftliches Erbe und laufende Innovationen feiern." },
                    { "icon": "Handshake", "title": "Zusammenarbeit stärken", "description": "Die Zusammenarbeit zwischen Wikimedia-Gemeinschaften, Universitäten, Forschungsinstituten und Organisationen stärken." }
                ]
            },
            "supportingOrg": {
                "title": "Unterstützende Organisation",
                "p1": "Der Wiki Club SATI (Vidisha, Madhya Pradesh) wird als unterstützende Organisation für die erste nationale Ausgabe des Wiki Science Competition 2025 in Indien anerkannt. Der Club war Vorreiter bei der Einbindung von Studenten und jungen Berufstätigen in die Wikimedia-Bewegung und trug zu offenem Wissen, technischer Innovation und von der Gemeinschaft geführten Initiativen bei.",
                "p2": "Mehrere Mitglieder des Kernorganisationsteams sind mit dem Wiki Club SATI verbunden, und ihre fortgesetzte Beteiligung spiegelt das Engagement des Clubs für die Förderung von freiem Wissen und wissenschaftlichem Engagement wider. Obwohl die Unterstützung nicht finanzieller Natur ist, spielen die organisatorische Kapazität, die Erfahrung und die gemeinschaftlichen Netzwerke des Wiki Club SATI eine wesentliche Rolle bei der Durchführung dieser Kampagne auf nationaler Ebene."
            }
        },
        "campusAmbassadors": {
            "title": "Campus-Botschafter",
            "subtitle": "Lernen Sie die leidenschaftlichen Führungskräfte kennen, die den Wiki Science Competition in ihren Gemeinden vorantreiben.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Club SATI",
                    "boardLink": {
                        "name": "Wiki Club SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "Wikipedianer & Computerlinguist aus Tamilnadu"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "Institutsleiter & Assistenzprofessor, Abteilung für Computeranimation, St Aloysius",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Deoband-Gemeinschaft",
                    "boardLink": {
                        "name": "Deoband-Gemeinschaft",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "Führt derzeit IT- und Überwachungsprojekte im Distrikt Kanniyakumari durch"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "Tamilischer Wikipedianer, Software-Ingenieur"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Wikipedianer"
                }
            ]
        },
        "affiliates": {
            "title": "Aufruf für Wikimedia-Affiliates",
            "subtitle": "Wir laden Wikimedia-Affiliates, Benutzergruppen und Organisationen in ganz Indien ein, mit uns zusammenzuarbeiten, um den Wiki Science Competition 2025 zu fördern und zu unterstützen.",
            "partnerHeading": "Warum mit uns zusammenarbeiten?",
            "partnerDescription": "Dies ist eine einzigartige Gelegenheit, die Wissenschaft zu feiern und Wikimedia Commons mit frei lizenzierten Medien zu bereichern. Als Partner kann Ihre Gruppe eine entscheidende Rolle dabei spielen, Indiens ersten nationalen Wiki Science Competition zu einem Erfolg zu machen, indem Sie bei der Öffentlichkeitsarbeit, der Bewusstseinsbildung und dem Engagement der Gemeinschaft helfen.",
            "collaborationHeading": "Wie Sie zusammenarbeiten können",
            "collaborationPoints": [
                "Beteiligen Sie sich an Online- und Offline-Öffentlichkeitsarbeit in Ihren Netzwerken.",
                "Erleichtern Sie das Hochladen von Beiträgen von Institutionen und Forschungseinrichtungen.",
                "Organisieren Sie lokale Workshops, Edit-a-thons oder Fotowalks.",
                "Helfen Sie bei der Übersetzung und Lokalisierung von Kampagnenmaterialien."
            ],
            "formNote": "Dieses Formular richtet sich an anerkannte Wikimedia-Affiliates oder Community-Gruppen. Einzelpersonen und Studierende sollten das",
            "campusAmbassadorLink": "Formular für Campus-Botschafter",
            "sidebarTitle": "Werde Partner",
            "sidebarDescription": "Lassen Sie uns zusammenarbeiten, um die wissenschaftliche Landschaft Indiens der Welt zu zeigen.",
            "deadline": "Bewerbungsschluss: 31. August 2025",
            "cta": "Partnerschaftsformular öffnen"
        },
        "campus": {
            "title": "Aufruf für Campus-Botschafter",
            "subtitle": "Schließen Sie sich uns als lokaler Outreach-Koordinator an, um den Wiki Science Competition 2025 in Ihrer Einrichtung, Gemeinde oder Ihrem Netzwerk zu fördern.",
            "whoHeading": "Wen suchen wir?",
            "whoDescription": "Campus-Botschafter spielen eine Schlüsselrolle bei der Verbreitung von Informationen, der Anleitung von Teilnehmern und optional der Organisation von Informationsveranstaltungen oder Workshops. Egal, ob Sie Wikipedianer, Wissenschaftsstudent, Designer, Lehrer oder einfach nur begeistert von offener Wissenschaft sind – wir würden uns freuen, Sie an Bord zu haben!",
            "responsibilitiesHeading": "Aufgaben",
            "responsibilities": [
                "Bewerben Sie die Kampagne in Ihrer Einrichtung oder Gemeinde.",
                "Teilen Sie die Teilnahmebedingungen mit potenziellen Mitwirkenden.",
                "Organisieren Sie optional Informationsveranstaltungen wie Workshops oder Fotowalks (wir können Unterstützung leisten!)."
            ],
            "sidebar": {
                "title": "Jetzt bewerben",
                "description": "Bereit, etwas zu bewirken? Füllen Sie das Formular aus, um Campus-Botschafter zu werden.",
                "deadline": "Bewerbungsschluss: 31. August 2025",
                "cta": "Bewerbungsformular öffnen"
            },
            "cta": {
                "text": "Werde Campus-Botschafter",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "Wettbewerbsdetails",
            "subtitle": "Alles, was du wissen musst, um teilzunehmen und zu gewinnen.",
            "howToParticipate": {
                "title": "Wie man teilnimmt",
                "p1": "Wenn Sie noch keines haben, können Sie ein globales Konto erstellen, das Ihnen bei der Anmeldung einen spezifischen Benutzernamen auf allen Wikimedia-Plattformen (einschließlich Wikimedia Commons) gibt. Als neu registrierter Benutzer müssen Sie mindestens vier Tage warten, bevor Sie eine Videodatei hochladen können, während Bilder direkt nach der Registrierung hochgeladen werden können.",
                "createAccountLink": "Erstelle hier dein Konto!",
                "rulesTitle": "Teilnahmeregeln",
                "rules": [
                    "Die Einreichungen müssen Ihre eigene Arbeit sein, hochgeladen von Ihrem eigenen registrierten Wikimedia-Konto. Bei mehreren Autoren müssen alle Namen angegeben werden.",
                    "Die Bilder müssen unter einer freien Lizenz stehen (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "Alle Einreichungen erfordern eine klare und genaue wissenschaftliche Beschreibung auf Englisch. Andere Sprachen sind ebenfalls willkommen.",
                    {
                        "text": "Laden Sie die höchstmögliche Auflösung hoch (mindestens 2 Megapixel). Sie können die Megapixelanzahl ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "hier"
                        }
                    },
                    "Bilder dürfen keine Wasserzeichen, Logos oder hinzugefügten Text/Grafiken enthalten (außer Maßstäbe)."
                ]
            },
            "keyDates": {
                "title": "Wichtige Termine",
                "timeline": [
                    { "date": "1. November 2025", "event": "Beginn der Einreichungen" },
                    { "date": "15. Dezember 2025", "event": "Ende der Einreichungen" },
                    { "date": "Januar 2026", "event": "Jury-Beratung" },
                    { "date": "Februar 2026", "event": "Bekanntgabe der nationalen Gewinner" }
                ]
            },
            "submitNow": "Jetzt einreichen",
            "imageCategories": {
                "title": "Bildkategorien",
                "subtitle": "Sie können in den folgenden sieben Kategorien teilnehmen. Wählen Sie diejenige, die am besten zu Ihrer Arbeit passt. Sehen Sie sich die Beispiele unten an, um sich inspirieren zu lassen."
            },
            "categories": {
                "people": { "name": "Menschen in der Wissenschaft", "description": "Wissenschaftler in ihrem natürlichen Lebensraum." },
                "microscopy": { "name": "Mikroskopie-Bilder", "description": "Bilder aus der Licht-, Elektronen- und Rastersondenmikroskopie." },
                "nonPhotographic": { "name": "Nicht-fotografische Medien", "description": "Audio- und Videodateien, computergenerierte Bilder usw." },
                "imageSets": { "name": "Bilderserien", "description": "Thematisch zusammenhängende Bilder (bis zu 10), die als eine Serie betrachtet werden können." },
                "wildlife": { "name": "Wildtiere & Natur", "description": "Organismen in ihrem natürlichen Lebensraum, einschließlich Makrofotografie." },
                "astronomy": { "name": "Astronomie", "description": "Bilder von Sternen, Himmelsereignissen und der Ausrüstung, die zu ihrer Aufnahme verwendet wird." },
                "general": { "name": "Allgemeine Kategorie", "description": "Alles andere, von Archäologie bis Vulkanologie." }
            },
            "readyToParticipate": {
                "title": "Bereit zur Teilnahme?",
                "subtitle": "Die Bühne ist bereitet. Dein Objektiv ist der Schlüssel. Zeig uns die Welt durch deine wissenschaftlichen Augen.",
                "cta": "Reiche deine Arbeit ein"
            },
            "supportedBy": "Unterstützt von:"
        },
        "contact": {
            "title": "Kontaktiere uns",
            "subtitle": "Haben Sie Fragen oder Feedback? Wir würden uns freuen, von Ihnen zu hören. Wir versprechen eine schnelle Antwort!",
            "getInTouch": "Nimm Kontakt auf",
            "p1": "Füllen Sie das Formular aus und unser Team wird sich innerhalb weniger Stunden bei Ihnen melden. Wir sind hier, um zu helfen!",
            "form": {
                "name": "Vollständiger Name",
                "namePlaceholder": "Ihr Name",
                "email": "E-Mail-Adresse",
                "emailPlaceholder": "ihre.email@beispiel.com",
                "subject": "Betreff",
                "subjectPlaceholder": "Wählen Sie einen Betreff für Ihre Anfrage",
                "otherSubjectPlaceholder": "Bitte geben Sie Ihren Betreff an",
                "message": "Nachricht",
                "messagePlaceholder": "Wählen Sie eine vorformulierte Nachricht oder 'Andere...'",
                "otherMessagePlaceholder": "Bitte geben Sie Ihre Nachricht an",
                "selectSubjectFirst": "Bitte wählen Sie zuerst einen Betreff",
                "submit": "Nachricht senden",
                "submitting": "Wird gesendet..."
            },
            "toast": {
                "successTitle": "Nachricht gesendet!",
                "successDescription": "Vielen Dank für Ihre Kontaktaufnahme. Wir werden uns in Kürze bei Ihnen melden.",
                "errorTitle": "Fehler",
                "errorDescription": "Etwas ist schiefgegangen. Bitte versuchen Sie es erneut."
            }
        },
        "organizers": {
            "title": "Lerne die Organisatoren kennen",
            "subtitle": "Das engagierte Team, das hinter den Kulissen arbeitet, um den ersten Wiki Science Competition India zu einem großen Erfolg zu machen.",
            "lead_organizers": "Hauptorganisatoren",
            "advisors": "Berater",
            "core_organizing_team": "Kernorganisationsteam",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "Hauptorganisator",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "Hauptorganisatorin",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "Berater",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "Kernorganisationsteam",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "Aufruf für Organisatoren",
            "subtitle": "Wir freuen uns, Ihnen mitteilen zu können, dass Indien eine eigene lokale Ausgabe dieser globalen Kampagne organisieren wird, die die Wissenschaft durch frei lizenzierte Bilder, Videos und andere Medien auf Wikimedia Commons fördert.",
            "joinHeading": "Treten Sie dem Organisationsteam bei",
            "joinDescription": "Um eine reibungslose Koordination, Öffentlichkeitsarbeit und Planung zu unterstützen, erweitern wir unser Organisationsteam. Wenn Sie daran interessiert sind, zu dieser wichtigen Initiative beizutragen, würden wir uns freuen, von Ihnen zu hören.",
            "lookingForHeading": "Was wir suchen",
            "lookingFor": [
                "Leidenschaftliche Personen mit Interesse an Wissenschaft, Fotografie oder offenem Wissen.",
                "Fähigkeiten in der Veranstaltungsplanung, Öffentlichkeitsarbeit, Social-Media-Management oder Content-Erstellung.",
                "Ein kollaborativer Geist und der Wunsch, einen bedeutenden Einfluss zu erzielen."
            ],
            "sidebarTitle": "Jetzt bewerben",
            "sidebarDescription": "Helfen Sie uns, den ersten Wiki Science Competition in Indien zu gestalten.",
            "deadline": "Bewerbungen geschlossen: 15. Juli 2025",
            "cta": "Bewerbungen geschlossen"
        },
        "resources": {
            "title": "Ressourcen",
            "subtitle": "Lassen Sie sich von früheren Gewinnern inspirieren und greifen Sie auf hilfreiche Materialien zu, um Ihre Einreichung vorzubereiten.",
            "pastWinners": {
                "title": "Galerie früherer Gewinner",
                "winnerLabel": "Gewinner",
                "winners": [
                    { "year": 2023, "category": "Astronomie", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "Biologie", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "Chemie", "winner": "Priya Desai" },
                    { "year": 2022, "category": "Astronomie", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "Lernmaterialien",
                "cta": "Erfahre mehr",
                "resources": [
                    { "title": "Leitfaden zur Wissenschaftsfotografie", "description": "Lernen Sie die Grundlagen der Aufnahme beeindruckender wissenschaftlicher Bilder.", "link": "#" },
                    { "title": "Creative Commons verstehen", "description": "Eine Kurzanleitung zur Lizenzierung Ihrer Arbeit für den Wettbewerb.", "link": "#" },
                    { "title": "Tutorial zum Hochladen von Bildern", "description": "Schritt-für-Schritt-Video zur Einreichung Ihrer Fotos.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "Unterstütze uns",
            "subtitle": "Helfen Sie uns, den Wiki Science Competition India 2025 zu einem großen Erfolg zu machen.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "Werde Sponsor",
                    "description": "Unterstützen Sie uns mit finanziellen Beiträgen zur Deckung von Betriebskosten, Preisgeldern und Veranstaltungsmanagement. Wir bieten verschiedene Sponsoring-Stufen mit prominenten Branding-Möglichkeiten an.",
                    "cta": "Kontakt für Sponsoring"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "Stelle Geschenke & Werbeartikel bereit",
                    "description": "Tragen Sie mit aufregenden Geschenken, Gutscheinen oder Markenartikeln (Swag) zu unserem Preispool für unsere Gewinner und Teilnehmer bei. Bringen Sie Ihre Marke in die Hände von Wissenschaftsbegeisterten.",
                    "cta": "Geschenke anbieten"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "Öffentlichkeitsarbeit & Marketing",
                    "description": "Arbeiten Sie mit uns zusammen, um die Nachricht zu verbreiten. Helfen Sie uns, ein breiteres Publikum über Ihre institutionellen Kanäle, sozialen Medien oder Ihr Marketing-Know-how zu erreichen.",
                    "cta": "Bei der Öffentlichkeitsarbeit zusammenarbeiten"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "Erforsche mikroskopische Welten", "description": "Von Zellstrukturen bis zu Kristallformationen, zeige die unsichtbare Schönheit." },
                    { "id": 2, "title": "Fange himmlische Wunder ein", "description": "Der Kosmos ist deine Leinwand. Fotografiere Galaxien, Nebel und planetarische Ereignisse." },
                    { "id": 3, "title": "Visualisiere komplexe Daten", "description": "Verwandle Rohdaten in überzeugende wissenschaftliche Visualisierungen und Infografiken." },
                    { "id": 4, "title": "Dokumentiere menschlichen Einfallsreichtum", "description": "Fange Wissenschaftler bei der Arbeit, innovative Laborausrüstung und Momente der Entdeckung ein." }
                ]
            },
            "cta": {
                "title": "Mach mit",
                "subtitle": "Sei Teil von Indiens erstem nationalen Wiki Science Competition. Wir suchen leidenschaftliche Einzelpersonen und Organisationen, die sich uns anschließen.",
                "campus": {
                    "title": "Aufruf für Campus-Botschafter",
                    "description": "Bewerben Sie die Kampagne in Ihrer Einrichtung, teilen Sie Richtlinien und helfen Sie bei der Organisation von Informationsveranstaltungen.",
                    "deadline": "Bewerbungsschluss: 31. August 2025",
                    "cta": "Jetzt bewerben"
                },
                "affiliates": {
                    "title": "Aufruf für Wikimedia-Affiliates",
                    "description": "Werden Sie unser Partner, um die Kampagne zu bewerben, lokale Öffentlichkeitsarbeit zu organisieren und dabei zu helfen, wirkungsvolle wissenschaftliche Beiträge aus Ihrer Region zu gewinnen.",
                    "deadline": "Bewerbungsschluss: 31. August 2025",
                    "cta": "Werde Partner"
                }
            },
            "info": {
                "title": "Alles, was du wissen musst",
                "subtitle": "Von den Einreichungsrichtlinien bis zu den Jury-Details, erhalten Sie alle Informationen, die Sie benötigen, um an diesem aufregenden Ereignis teilzunehmen.",
                "cta": "Erfahre mehr",
                "sections": [
                    { "icon": "Info", "title": "Über den Wettbewerb", "description": "Ein jährlicher internationaler Wissenschaftsfotowettbewerb, der Wissenschaftsbegeisterte zusammenbringt, um ihre Vision von der Welt der Forschung zu teilen.", "link": "/about" },
                    { "icon": "Target", "title": "Wie man teilnimmt", "description": "Die Teilnahme ist kostenlos und offen für alle. Reichen Sie Ihre besten wissenschaftsbezogenen Bilder in verschiedenen Kategorien während des Einreichungszeitraums ein.", "link": "/competition" },
                    { "icon": "Award", "title": "Preise & Anerkennung", "description": "Die Gewinner erhalten nationale Anerkennung, Zertifikate und Preise. Die besten Bilder kommen auch in die internationale Endrunde.", "link": "/competition" },
                    { "icon": "Users", "title": "Jury & Kriterien", "description": "Unsere Expertenjury aus Wissenschaftlern und Fotografen wird die Beiträge nach wissenschaftlichem Wert, Originalität und ästhetischer Qualität beurteilen.", "link": "/jury" },
                    { "icon": "History", "title": "Frühere Gewinner", "description": "Entdecken Sie eine Galerie der Gewinnerfotos der Vorjahre und lassen Sie sich von dem unglaublichen Talent inspirieren.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "Bereit zur Teilnahme?",
                    "subtitle": "Die Bühne ist bereitet. Dein Objektiv ist der Schlüssel. Zeig uns die Welt durch deine wissenschaftlichen Augen.",
                    "cta": "Reiche deine Arbeit ein"
                }
            },
            "prizes": {
                "title": "Preise & Anerkennung",
                "subtitle": "Ihre bahnbrechenden Bilder verdienen es, gefeiert zu werden. Entdecken Sie, was Sie gewinnen können.",
                "prizes": [
                    { "icon": "Award", "title": "Nationale Anerkennung", "description": "Die Gewinner werden auf unseren offiziellen Plattformen gefeiert und erhalten nationale Medienberichterstattung." },
                    { "icon": "Camera", "title": "Hochwertige Ausrüstung", "description": "Spannende Fotoausrüstung und Zubehör für die Top-Gewinner, um ihre Leidenschaft zu unterstützen." },
                    { "icon": "BookOpen", "title": "Veröffentlichung in Publikationen", "description": "Lassen Sie Ihre Arbeit in renommierten Wissenschaftsmagazinen und Publikationen veröffentlichen." }
                ]
            },
            "jury": {
                "title": "Lerne die geschätzte Jury kennen",
                "description": "Unser Gremium besteht aus einer vielfältigen Gruppe renommierter Wissenschaftler, professioneller Fotografen und Wissenschaftskommunikatoren aus ganz Indien. Sie bringen einen reichen Erfahrungsschatz mit, um einen fairen und aufschlussreichen Bewertungsprozess zu gewährleisten.",
                "cta": "Gesamtes Gremium ansehen"
            }
        }
    },
    et: {
        "mainNavLinks": [
            { "name": "Teave", "href": "/about" },
            { "name": "Võistlus", "href": "/competition" },
            { "name": "Ressursid", "href": "/resources" },
            { "name": "Sponsorid", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "Kohtu meeskonnaga", "href": "/organizers" },
            { "name": "Ülikoolilinnaku saadikud", "href": "/campus-ambassadors" },
            { "name": "Kutse meeskonnale", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "Žürii", "href": "/jury" },
            { "name": "Toeta meid", "href": "/support-us" },
            { "name": "Kontakt", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Kuidas luua Wiki kontot", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Kuidas kasutada üleslaadimisviisardit", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC-litsentside mõistmine", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "Kuidas lisada kategooriaid", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "Korraldajad",
        "moreDropdown": "Rohkem",
        "learningDropdown": "Õppimine",
        "participateButton": "Osale",
        "footerNavLinks": [
            { "name": "Teave", "href": "/about" },
            { "name": "Võistlus", "href": "/competition" },
            { "name": "Žürii", "href": "/jury" },
            { "name": "Korraldajad", "href": "/organizers" },
            { "name": "Sponsorid", "href": "/sponsors" },
            { "name": "Ressursid", "href": "/resources" },
            { "name": "Ülikoolilinnaku saadikud", "href": "/campus-ambassadors" },
            { "name": "Kontakt", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "Sponsorlus", "href": "/support-us#sponsorship" },
            { "name": "Kingitused/Nänn", "href": "/support-us#gifts" },
            { "name": "Teavitustegevus", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "Teaduse ilu jäädvustamine fotograafia kaudu.",
        "footerNavHeader": "Navigeerimine",
        "footerSupportHeader": "Toeta meid",
        "footerContactHeader": "Kontakt",
        "footerCopyright": "Wiki Teadusvõistlus India. Kõik õigused kaitstud.",
        "footerLicense": "Sisu on saadaval CC BY-SA 4.0 litsentsi alusel, kui pole märgitud teisiti.",
        "footerDeveloperCredit": "Disaininud ja arendanud",
        "about": {
            "title": "WikiScience India 2025 kohta",
            "badge": "Sissejuhatus India konteksti jaoks",
            "heading": "Wiki Teadusvõistlus 2025 – India",
            "p1": "Esimest korda korraldab India riikliku Wiki Teadusvõistluse (WSC) – ühe maailma suurima algatuse, mis ühendab teadust, fotograafiat ja vaba teadmist.",
            "p2": "Võistlus sai alguse Eestis 2011. aastal ning laienes hiljem üle Euroopa ja kogu maailma. See on inspireerinud tuhandeid teadlasi, uurijaid ja entusiastide jagama pilte, mis jäädvustavad teaduse imet. Alates mikroskoopilistest rakkudest kuni kosmiliste galaktikateni rikastavad need vabalt litsentseeritud kaastööd Wikimedia Commonsit ja toetavad avatud haridust kogu maailmas.",
            "p3": "India on uhkelt panustanud varasematesse rahvusvahelistesse väljaannetesse – India fotograafid ja teadlased on saanud tunnustust ja auhindu. See on aga esimene kord, kui India korraldab oma kohaliku võistluse, mis on pühendatud meie riigi teadusliku vaimu ja loovuse tutvustamisele.",
            "p4": "Wiki Teadusvõistlus 2025 – India on rohkem kui võistlus. See on kollektiivne pingutus esindada India teadust maailmale – läbi võimsate piltide, lugude ja loovuse.",
            "aims": {
                "title": "Meie eesmärgid",
                "subtitle": "Selle kampaaniaga püüame:",
                "items": [
                    { "icon": "PenSquare", "title": "Julgustada panustamist", "description": "Julgustada tudengeid, teadlasi ja entusiaste üle India panustama väärtuslikku teaduslikku meediat." },
                    { "icon": "Lightbulb", "title": "Teadlikkuse tõstmine", "description": "Tõsta teadlikkust avatud teaduse ja vaba teadmise tähtsusest." },
                    { "icon": "Globe", "title": "Pärandi tähistamine", "description": "Tähistada India rikkalikku teaduspärandit ja jätkuvaid uuendusi." },
                    { "icon": "Handshake", "title": "Koostöö tugevdamine", "description": "Tugevdada koostööd Wikimedia kogukondade, ülikoolide, teadusinstituutide ja organisatsioonide vahel." }
                ]
            },
            "supportingOrg": {
                "title": "Toetav organisatsioon",
                "p1": "Wiki Klubi SATI (Vidisha, Madhya Pradesh) on tunnustatud kui toetav organisatsioon esimesel riiklikul Wiki Teadusvõistlusel 2025 Indias. Klubi on olnud esirinnas õpilaste ja noorte spetsialistide kaasamisel Wikimedia liikumisse, panustades avatud teadmistesse, tehnilisse innovatsiooni ja kogukonna juhitud algatustesse.",
                "p2": "Mitmed põhikorraldusmeeskonna liikmed on seotud Wiki Klubi SATI-ga ja nende jätkuv kaasatus peegeldab klubi pühendumust vaba teadmise ja teadusliku kaasamise edendamisele. Kuigi toetus ei ole rahaline, mängib Wiki Klubi SATI organisatsiooniline võimekus, kogemus ja kogukonnavõrgustikud olulist rolli selle kampaania riiklikul tasandil võimaldamisel."
            }
        },
        "campusAmbassadors": {
            "title": "Ülikoolilinnaku saadikud",
            "subtitle": "Kohtuge kirglike liidritega, kes juhivad Wiki Teadusvõistlust oma kogukondades.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Klubi SATI",
                    "boardLink": {
                        "name": "Wiki Klubi SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "Vikipeedik ja arvutilingvist Tamilnadust"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "Osakonnajuhataja ja abiprofessor, Arvutianimatsiooni osakond, St Aloysius",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Deobandi kogukond",
                    "boardLink": {
                        "name": "Deobandi kogukond",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "Tegeleb praegu IT- ja valveprojektidega Kanniyakumari piirkonnas"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "Tamili vikipeedik, tarkvarainsener"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Vikipeedik"
                }
            ]
        },
        "affiliates": {
            "title": "Kutse Wikimedia sidusorganisatsioonidele",
            "subtitle": "Kutsume Wikimedia sidusorganisatsioone, kasutajagruppe ja organisatsioone üle India meiega koostööd tegema Wiki Teadusvõistluse 2025 edendamisel ja toetamisel.",
            "partnerHeading": "Miks meiega partneriks hakata?",
            "partnerDescription": "See on ainulaadne võimalus tähistada teadust ja rikastada Wikimedia Commonsit vabalt litsentseeritud meediaga. Partnerina saab teie rühm mängida keskset rolli India esimese riikliku Wiki Teadusvõistluse edukaks muutmisel, aidates kaasa teavitustööle, teadlikkuse tõstmisele ja kogukonna kaasamisele.",
            "collaborationHeading": "Kuidas saate koostööd teha",
            "collaborationPoints": [
                "Osalege oma võrgustikes veebi- ja väljaspool veebi toimuvates teavitustegevustes.",
                "Hõlbustage institutsioonide ja teadusasutuste üleslaadimisi.",
                "Korraldage kohalikke töötubasid, redigeerimismaratone või fotomatku.",
                "Abistage kampaaniamaterjalide tõlkimisel ja lokaliseerimisel."
            ],
            "formNote": "See vorm on mõeldud tunnustatud Wikimedia sidusorganisatsioonidele või kogukonnagruppidele. Üksikisikud ja üliõpilased peaksid kasutama",
            "campusAmbassadorLink": "Ülikoolilinnaku saadiku vormi",
            "sidebarTitle": "Hakka partneriks",
            "sidebarDescription": "Teeme koostööd, et tutvustada India teadusmaastikku maailmale.",
            "deadline": "Tähtaeg: 31. august 2025",
            "cta": "Ava partnerlusvorm"
        },
        "campus": {
            "title": "Kutse ülikoolilinnaku saadikutele",
            "subtitle": "Liituge meiega kohaliku teavitustöö koordinaatorina, et aidata edendada Wiki Teadusvõistlust 2025 oma asutuses, kogukonnas või võrgustikus.",
            "whoHeading": "Keda me otsime?",
            "whoDescription": "Ülikoolilinnaku saadikutel on võtmeroll teadlikkuse levitamisel, osalejate juhendamisel ja valikuliselt teadlikkuse tõstmise sessioonide või töötubade korraldamisel. Ükskõik, kas olete wikipedist, teadustudeng, disainer, õpetaja või lihtsalt avatud teadusest entusiastlik – meil oleks hea meel teid pardale võtta!",
            "responsibilitiesHeading": "Kohustused",
            "responsibilities": [
                "Edendage kampaaniat oma asutuses või kogukonnas.",
                "Jagage osalemisjuhiseid potentsiaalsete kaastöölistega.",
                "Valikuliselt korraldage teadlikkuse tõstmise tegevusi nagu töötoad või fotomatkad (saame pakkuda tuge!)."
            ],
            "sidebar": {
                "title": "Kandideeri kohe",
                "description": "Valmis mõju avaldama? Täitke vorm, et saada ülikoolilinnaku saadikuks.",
                "deadline": "Tähtaeg: 31. august 2025",
                "cta": "Ava kandideerimisvorm"
            },
            "cta": {
                "text": "Saa ülikoolilinnaku saadikuks",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "Võistluse detailid",
            "subtitle": "Kõik, mida pead teadma osalemiseks ja võitmiseks.",
            "howToParticipate": {
                "title": "Kuidas osaleda",
                "p1": "Kui teil seda pole, saate luua globaalse konto, mis annab teile sisselogimisel konkreetse kasutajanime kõigil Wikimedia platvormidel (sealhulgas Wikimedia Commons). Värskelt registreeritud kasutajana peate ootama vähemalt neli päeva enne videofaili üleslaadimist, samas kui pilte saab üles laadida kohe pärast registreerimist.",
                "createAccountLink": "Loo oma konto siin!",
                "rulesTitle": "Osalemise reeglid",
                "rules": [
                    "Esitatud tööd peavad olema teie enda looming, üles laaditud teie enda registreeritud Wikimedia kontolt. Mitme autori puhul tuleb esitada kõik nimed.",
                    "Pildid peavad olema vaba litsentsi all (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "Kõik esitatud tööd nõuavad selget ja täpset teaduslikku kirjeldust inglise keeles. Ka teised keeled on teretulnud.",
                    {
                        "text": "Laadige üles võimalikult kõrge eraldusvõimega pilt (vähemalt 2 megapikslit). Megapikslite arvu saate kontrollida ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "siin"
                        }
                    },
                    "Pildid ei tohi sisaldada vesimärke, logosid ega lisatud teksti/graafikat (välja arvatud skaalad)."
                ]
            },
            "keyDates": {
                "title": "Olulised kuupäevad",
                "timeline": [
                    { "date": "1. november 2025", "event": "Tööde esitamine algab" },
                    { "date": "15. detsember 2025", "event": "Tööde esitamine lõpeb" },
                    { "date": "Jaanuar 2026", "event": "Žürii arutelu" },
                    { "date": "Veebruar 2026", "event": "Riiklike võitjate väljakuulutamine" }
                ]
            },
            "submitNow": "Esita kohe",
            "imageCategories": {
                "title": "Pildikategooriad",
                "subtitle": "Saate osaleda järgmises seitsmes kategoorias. Valige see, mis sobib teie tööga kõige paremini. Inspiratsiooni saamiseks vaadake allpool toodud näiteid."
            },
            "categories": {
                "people": { "name": "Inimesed teaduses", "description": "Teadlased oma loomulikus elupaigas." },
                "microscopy": { "name": "Mikroskoobi pildid", "description": "Optilise, elektron- ja skaneeriva sondmikroskoopia pildid." },
                "nonPhotographic": { "name": "Mittefotograafiline meedia", "description": "Heli- ja videofailid, arvutiga loodud kujutised jne." },
                "imageSets": { "name": "Pildikomplektid", "description": "Temaatiliselt seotud pildid (kuni 10), mida saab vaadata ühe komplektina." },
                "wildlife": { "name": "Loodus ja elusloodus", "description": "Organismid oma loomulikus elupaigas, sealhulgas makrofotograafia." },
                "astronomy": { "name": "Astronoomia", "description": "Pildid tähtedest, taevasündmustest ja nende jäädvustamiseks kasutatud seadmetest." },
                "general": { "name": "Üldkategooria", "description": "Kõik muu, arheoloogiast vulkanoloogiani." }
            },
            "readyToParticipate": {
                "title": "Valmis osalema?",
                "subtitle": "Lava on valmis. Teie objektiiv on võti. Näidake meile maailma läbi oma teaduslike silmade.",
                "cta": "Esita oma töö"
            },
            "supportedBy": "Toetavad:"
        },
        "contact": {
            "title": "Võta meiega ühendust",
            "subtitle": "Kas teil on küsimusi või tagasisidet? Meil oleks hea meel teist kuulda. Lubame kiiret vastust!",
            "getInTouch": "Võta ühendust",
            "p1": "Täitke vorm ja meie meeskond võtab teiega mõne tunni jooksul ühendust. Oleme siin, et aidata!",
            "form": {
                "name": "Täisnimi",
                "namePlaceholder": "Sinu nimi",
                "email": "E-posti aadress",
                "emailPlaceholder": "sinu.email@näide.com",
                "subject": "Teema",
                "subjectPlaceholder": "Valige oma päringu teema",
                "otherSubjectPlaceholder": "Palun täpsustage oma teema",
                "message": "Sõnum",
                "messagePlaceholder": "Valige eelnevalt kirjutatud sõnum või 'Muu...'",
                "otherMessagePlaceholder": "Palun täpsustage oma sõnum",
                "selectSubjectFirst": "Palun valige esmalt teema",
                "submit": "Saada sõnum",
                "submitting": "Saadan..."
            },
            "toast": {
                "successTitle": "Sõnum saadetud!",
                "successDescription": "Täname, et võtsite meiega ühendust. Võtame teiega peagi ühendust.",
                "errorTitle": "Viga",
                "errorDescription": "Midagi läks valesti. Palun proovige uuesti."
            }
        },
        "organizers": {
            "title": "Kohtu korraldajatega",
            "subtitle": "Pühendunud meeskond, kes töötab kulisside taga, et muuta esimene India Wiki Teadusvõistlus suureks eduks.",
            "lead_organizers": "Peakorraldajad",
            "advisors": "Nõustajad",
            "core_organizing_team": "Põhiline korraldusmeeskond",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "Peakorraldaja",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "Peakorraldaja",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "Nõustaja",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "Põhiline korraldusmeeskond",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "Kutse korraldajatele",
            "subtitle": "Meil on hea meel teatada, et India korraldab oma kohaliku väljaande sellest ülemaailmsest kampaaniast, mis edendab teadust vabalt litsentseeritud piltide, videote ja muu meedia kaudu Wikimedia Commonsis.",
            "joinHeading": "Liitu korraldusmeeskonnaga",
            "joinDescription": "Sujuva koordineerimise, teavitustöö ja planeerimise toetamiseks laiendame oma korraldusmeeskonda. Kui olete huvitatud sellesse olulisse algatusse panustamisest, oleksime hea meelega teist kuulda.",
            "lookingForHeading": "Mida me otsime",
            "lookingFor": [
                "Kirglikud isikud, kellel on huvi teaduse, fotograafia või avatud teadmiste vastu.",
                "Oskused sündmuste planeerimisel, teavitustöös, sotsiaalmeedia haldamisel või sisu loomisel.",
                "Koostöövaim ja soov olulist mõju avaldada."
            ],
            "sidebarTitle": "Kandideeri kohe",
            "sidebarDescription": "Aita meil kujundada esimest Wiki Teadusvõistlust Indias.",
            "deadline": "Kandideerimine on lõppenud: 15. juuli 2025",
            "cta": "Kandideerimine on lõppenud"
        },
        "resources": {
            "title": "Ressursid",
            "subtitle": "Hankige inspiratsiooni varasematelt võitjatelt ja pääsete juurde kasulikele materjalidele oma töö ettevalmistamiseks.",
            "pastWinners": {
                "title": "Varasemate võitjate galerii",
                "winnerLabel": "Võitja",
                "winners": [
                    { "year": 2023, "category": "Astronoomia", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "Bioloogia", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "Keemia", "winner": "Priya Desai" },
                    { "year": 2022, "category": "Astronoomia", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "Õppematerjalid",
                "cta": "Lisateave",
                "resources": [
                    { "title": "Teadusfotograafia juhend", "description": "Õppige põhitõdesid vapustavate teaduslike piltide jäädvustamiseks.", "link": "#" },
                    { "title": "Creative Commonsi mõistmine", "description": "Kiirjuhend oma töö litsentsimiseks võistluse jaoks.", "link": "#" },
                    { "title": "Pildi üleslaadimise õpetus", "description": "Samm-sammuline video oma fotode esitamise kohta.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "Toeta meid",
            "subtitle": "Aita meil muuta Wiki Teadusvõistlus India 2025 tohutuks eduks.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "Hakka sponsoriks",
                    "description": "Toeta meid rahaliste annetustega, et aidata katta tegevuskulusid, auhinnaraha ja ürituste korraldamist. Pakume erinevaid sponsorlustasemeid silmapaistvate brändimisvõimalustega.",
                    "cta": "Võta ühendust sponsorluse osas"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "Paku kingitusi ja nänni",
                    "description": "Panusta meie auhinnafondi põnevate kingituste, vautšerite või bränditud kaupadega (nänn) meie võitjatele ja osalejatele. Too oma bränd teadushuviliste kätte.",
                    "cta": "Paku kingitusi"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "Teavitustegevus ja turundus",
                    "description": "Tee meiega koostööd sõna levitamiseks. Aita meil jõuda laiema publikuni oma institutsionaalsete kanalite, sotsiaalmeedia või turundusalase asjatundlikkuse kaudu.",
                    "cta": "Tee koostööd teavitustöö alal"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "Avasta mikroskoopilisi maailmu", "description": "Alates rakustruktuuridest kuni kristallide moodustumiseni, näita nähtamatut ilu." },
                    { "id": 2, "title": "Püüa kinni taevaseid imesid", "description": "Kosmos on sinu lõuend. Pildista galaktikaid, udukogusid ja planeetide sündmusi." },
                    { "id": 3, "title": "Visualiseeri keerulisi andmeid", "description": "Muuda toorandmed köitvateks teaduslikeks visualiseeringuteks ja infograafikuteks." },
                    { "id": 4, "title": "Dokumenteeri inimlikku leidlikkust", "description": "Jäädvusta teadlasi tööl, uuenduslikku laborivarustust ja avastushetki." }
                ]
            },
            "cta": {
                "title": "Osale",
                "subtitle": "Ole osa India esimesest riiklikust Wiki Teadusvõistlusest. Otsime kirglikke isikuid ja organisatsioone, kes meiega liituksid.",
                "campus": {
                    "title": "Kutse ülikoolilinnaku saadikutele",
                    "description": "Edendage kampaaniat oma asutuses, jagage juhiseid ja aidake korraldada teadlikkuse tõstmise tegevusi.",
                    "deadline": "Tähtaeg: 31. august 2025",
                    "cta": "Kandideeri kohe"
                },
                "affiliates": {
                    "title": "Kutse Wikimedia sidusorganisatsioonidele",
                    "description": "Hakka meie partneriks, et edendada kampaaniat, korraldada kohalikku teavitustööd ja aidata kaasa mõjukate teaduslike panuste toomisele teie piirkonnast.",
                    "deadline": "Tähtaeg: 31. august 2025",
                    "cta": "Hakka partneriks"
                }
            },
            "info": {
                "title": "Kõik, mida pead teadma",
                "subtitle": "Alates esitamisjuhistest kuni žürii üksikasjadeni, saate kogu teabe, mida vajate selle põneva sündmuse osaks saamiseks.",
                "cta": "Uuri lähemalt",
                "sections": [
                    { "icon": "Info", "title": "Võistluse kohta", "description": "Iga-aastane rahvusvaheline teadusfotograafia võistlus, mis toob kokku teadushuvilisi, et jagada oma nägemust teadusmaailmast.", "link": "/about" },
                    { "icon": "Target", "title": "Kuidas osaleda", "description": "Osalemine on tasuta ja avatud kõigile. Esitage oma parimad teadusega seotud pildid erinevates kategooriates esitamisperioodi jooksul.", "link": "/competition" },
                    { "icon": "Award", "title": "Auhinnad ja tunnustus", "description": "Võitjad saavad riikliku tunnustuse, tunnistused ja auhinnad. Parimad pildid pääsevad ka rahvusvahelisse finaali.", "link": "/competition" },
                    { "icon": "Users", "title": "Žürii ja kriteeriumid", "description": "Meie ekspertžürii, kuhu kuuluvad teadlased ja fotograafid, hindab töid teadusliku väärtuse, originaalsuse ja esteetilise kvaliteedi alusel.", "link": "/jury" },
                    { "icon": "History", "title": "Varasemad võitjad", "description": "Uurige eelmiste aastate võidufotode galeriid ja saage inspiratsiooni uskumatust talendist.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "Valmis osalema?",
                    "subtitle": "Lava on valmis. Teie objektiiv on võti. Näidake meile maailma läbi oma teaduslike silmade.",
                    "cta": "Esita oma töö"
                }
            },
            "prizes": {
                "title": "Auhinnad ja tunnustus",
                "subtitle": "Teie murrangulised visuaalid väärivad tähistamist. Avastage, mida võite võita.",
                "prizes": [
                    { "icon": "Award", "title": "Riiklik tunnustus", "description": "Võitjaid tähistatakse meie ametlikel platvormidel ja nad saavad riiklikku meediakajastust." },
                    { "icon": "Camera", "title": "Tipptasemel varustus", "description": "Põnev fotograafiavarustus ja -tarvikud tippvõitjatele, et toetada nende kirge." },
                    { "icon": "BookOpen", "title": "Avaldamine väljaandes", "description": "Laske oma tööd avaldada mainekates teadusajakirjades ja -väljaannetes." }
                ]
            },
            "jury": {
                "title": "Kohtuge auväärse žüriiga",
                "description": "Meie paneelis on mitmekesine rühm tuntud teadlasi, professionaalseid fotograafe ja teaduskommunikaatoreid üle kogu India. Nad toovad kaasa rikkaliku kogemuse, et tagada õiglane ja sisukas hindamisprotsess.",
                "cta": "Vaata kogu paneeli"
            }
        }
    },
    pt: {
        "mainNavLinks": [
            { "name": "Sobre", "href": "/about" },
            { "name": "Competição", "href": "/competition" },
            { "name": "Recursos", "href": "/resources" },
            { "name": "Patrocinadores", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "Conheça a Equipe", "href": "/organizers" },
            { "name": "Embaixadores do Campus", "href": "/campus-ambassadors" },
            { "name": "Chamada para Equipe", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "Júri", "href": "/jury" },
            { "name": "Apoie-nos", "href": "/support-us" },
            { "name": "Contato", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Como criar uma conta na Wiki", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Como usar o Assistente de Upload", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "Entendendo as Licenças CC", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "Como adicionar categorias", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "Organizadores",
        "moreDropdown": "Mais",
        "learningDropdown": "Aprendizado",
        "participateButton": "Participe",
        "footerNavLinks": [
            { "name": "Sobre", "href": "/about" },
            { "name": "Competição", "href": "/competition" },
            { "name": "Júri", "href": "/jury" },
            { "name": "Organizadores", "href": "/organizers" },
            { "name": "Patrocinadores", "href": "/sponsors" },
            { "name": "Recursos", "href": "/resources" },
            { "name": "Embaixadores do Campus", "href": "/campus-ambassadors" },
            { "name": "Contato", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "Patrocínio", "href": "/support-us#sponsorship" },
            { "name": "Brindes/Presentes", "href": "/support-us#gifts" },
            { "name": "Divulgação", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "Capturando a beleza da ciência através da fotografia.",
        "footerNavHeader": "Navegação",
        "footerSupportHeader": "Apoie-nos",
        "footerContactHeader": "Contato",
        "footerCopyright": "Wiki Science Competition India. Todos os direitos reservados.",
        "footerLicense": "O conteúdo está disponível sob a licença CC BY-SA 4.0, salvo indicação em contrário.",
        "footerDeveloperCredit": "Projetado e Desenvolvido por",
        "about": {
            "title": "Sobre o WikiScience India 2025",
            "badge": "Introdução para o Contexto Indiano",
            "heading": "Wiki Science Competition 2025 – Índia",
            "p1": "Pela primeira vez, a Índia está organizando uma edição nacional da Wiki Science Competition (WSC) — uma das maiores iniciativas do mundo que une ciência, fotografia e conhecimento livre.",
            "p2": "Lançada na Estônia em 2011 e posteriormente expandida pela Europa e pelo mundo, a competição inspirou milhares de cientistas, pesquisadores e entusiastas a compartilhar imagens que capturam a maravilha da ciência. De células microscópicas a galáxias cósmicas, essas contribuições licenciadas livremente enriquecem o Wikimedia Commons e apoiam a educação aberta globalmente.",
            "p3": "A Índia contribuiu com orgulho para edições internacionais passadas — com fotógrafos e cientistas indianos recebendo reconhecimento e prêmios. No entanto, esta é a primeira vez que a Índia sedia sua própria competição local, dedicada a mostrar o espírito científico e a criatividade de nosso país.",
            "p4": "A Wiki Science Competition 2025 – Índia é mais do que um concurso. É um esforço coletivo para representar a ciência indiana para o mundo — através de imagens poderosas, histórias e criatividade.",
            "aims": {
                "title": "Nossos Objetivos",
                "subtitle": "Através desta campanha, nosso objetivo é:",
                "items": [
                    { "icon": "PenSquare", "title": "Incentivar a Contribuição", "description": "Incentivar estudantes, pesquisadores e entusiastas de toda a Índia a contribuir com mídias científicas valiosas." },
                    { "icon": "Lightbulb", "title": "Criar Conscientização", "description": "Criar conscientização sobre a importância da ciência aberta e do conhecimento livre." },
                    { "icon": "Globe", "title": "Celebrar a Herança", "description": "Celebrar a rica herança científica da Índia e suas inovações contínuas." },
                    { "icon": "Handshake", "title": "Fortalecer a Colaboração", "description": "Fortalecer a colaboração entre as comunidades Wikimedia, universidades, institutos de pesquisa e organizações." }
                ]
            },
            "supportingOrg": {
                "title": "Organização de Apoio",
                "p1": "O Wiki Club SATI (Vidisha, Madhya Pradesh) é reconhecido como a organização de apoio para a primeira edição nacional da Wiki Science Competition 2025 na Índia. O clube tem estado na vanguarda do engajamento de estudantes e jovens profissionais no movimento Wikimedia, contribuindo para o conhecimento aberto, inovação técnica e iniciativas lideradas pela comunidade.",
                "p2": "Vários membros da Equipe Organizadora Principal estão associados ao Wiki Club SATI, e seu envolvimento contínuo reflete o compromisso do clube em avançar o conhecimento livre e o engajamento científico. Embora o apoio não seja financeiro, a capacidade organizacional, a experiência e as redes comunitárias do Wiki Club SATI desempenham um papel essencial na viabilização desta campanha em nível nacional."
            }
        },
        "campusAmbassadors": {
            "title": "Embaixadores do Campus",
            "subtitle": "Conheça os líderes apaixonados que impulsionam a Wiki Science Competition em suas comunidades.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Club SATI",
                    "boardLink": {
                        "name": "Wiki Club SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "Wikipedista e Linguista Computacional de Tamilnadu"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "Chefe de Departamento e Professor Assistente, Departamento de Animação por Computador, St Aloysius",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Comunidade Deoband",
                    "boardLink": {
                        "name": "Comunidade Deoband",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "Atualmente realizando projetos de TI e vigilância no distrito de Kanniyakumari"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "Wikipedista Tamil, Engenheiro de Software"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Wikipedista"
                }
            ]
        },
        "affiliates": {
            "title": "Chamada para Afiliados da Wikimedia",
            "subtitle": "Estamos convidando afiliados, grupos de usuários e organizações da Wikimedia de toda a Índia para colaborar conosco na promoção e apoio à Wiki Science Competition 2025.",
            "partnerHeading": "Por que ser nosso parceiro?",
            "partnerDescription": "Esta é uma oportunidade única para celebrar a ciência e enriquecer o Wikimedia Commons com mídias licenciadas livremente. Como parceiro, seu grupo pode desempenhar um papel fundamental para tornar a primeira Wiki Science Competition nacional da Índia um sucesso, ajudando na divulgação, conscientização e engajamento da comunidade.",
            "collaborationHeading": "Como você pode colaborar",
            "collaborationPoints": [
                "Engaje-se na divulgação online e offline para suas redes.",
                "Facilite uploads de instituições e órgãos de pesquisa.",
                "Organize workshops locais, edit-a-thons ou caminhadas fotográficas.",
                "Auxilie na tradução e localização dos materiais da campanha."
            ],
            "formNote": "Este formulário é destinado a afiliados ou grupos comunitários reconhecidos da Wikimedia. Indivíduos e estudantes devem usar o",
            "campusAmbassadorLink": "formulário de Embaixador do Campus",
            "sidebarTitle": "Seja nosso Parceiro",
            "sidebarDescription": "Vamos colaborar para mostrar o cenário científico da Índia para o mundo.",
            "deadline": "Prazo: 31 de agosto de 2025",
            "cta": "Abrir Formulário de Parceria"
        },
        "campus": {
            "title": "Chamada para Embaixadores do Campus",
            "subtitle": "Junte-se a nós como coordenador de divulgação local para ajudar a promover a Wiki Science Competition 2025 em sua instituição, comunidade ou rede.",
            "whoHeading": "Quem estamos procurando?",
            "whoDescription": "Os Embaixadores do Campus desempenham um papel fundamental na divulgação, orientação dos participantes e, opcionalmente, na organização de sessões de conscientização ou workshops. Seja você um Wikimedista, estudante de ciências, designer, professor ou simplesmente um entusiasta da ciência aberta, adoraríamos tê-lo a bordo!",
            "responsibilitiesHeading": "Responsabilidades",
            "responsibilities": [
                "Promova a campanha em sua instituição ou comunidade.",
                "Compartilhe as diretrizes de participação com potenciais contribuidores.",
                "Opcionalmente, organize atividades de conscientização como workshops ou caminhadas fotográficas (podemos fornecer apoio!)."
            ],
            "sidebar": {
                "title": "Inscreva-se Agora",
                "description": "Pronto para causar impacto? Preencha o formulário para se tornar um Embaixador do Campus.",
                "deadline": "Prazo: 31 de agosto de 2025",
                "cta": "Abrir Formulário de Inscrição"
            },
            "cta": {
                "text": "Torne-se um Embaixador do Campus",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "Detalhes da Competição",
            "subtitle": "Tudo o que você precisa saber para participar e vencer.",
            "howToParticipate": {
                "title": "Como Participar",
                "p1": "Se você não tiver uma, pode criar uma conta global que lhe dará um nome de usuário específico em todas as plataformas Wikimedia (incluindo o Wikimedia Commons) ao fazer login. Como um usuário recém-registrado, você precisa esperar pelo menos quatro dias antes de enviar um arquivo de vídeo, enquanto as imagens podem ser enviadas logo após o registro.",
                "createAccountLink": "Crie sua conta aqui!",
                "rulesTitle": "Regras de Participação",
                "rules": [
                    "As submissões devem ser de sua autoria, enviadas de sua própria conta registrada na Wikimedia. Para múltiplos autores, todos os nomes devem ser fornecidos.",
                    "As imagens devem estar sob uma licença livre (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "Todas as submissões requerem uma descrição científica clara e precisa em inglês. Outros idiomas também são bem-vindos.",
                    {
                        "text": "Envie a maior resolução possível (pelo menos 2 megapixels). Você pode verificar a contagem de megapixels ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "aqui"
                        }
                    },
                    "As imagens não devem conter marcas d'água, logotipos ou texto/gráficos adicionados (exceto escalas)."
                ]
            },
            "keyDates": {
                "title": "Datas Importantes",
                "timeline": [
                    { "date": "1 de novembro de 2025", "event": "Início das Inscrições" },
                    { "date": "15 de dezembro de 2025", "event": "Fim das Inscrições" },
                    { "date": "Janeiro de 2026", "event": "Deliberação do Júri" },
                    { "date": "Fevereiro de 2026", "event": "Anúncio dos Vencedores Nacionais" }
                ]
            },
            "submitNow": "Envie Agora",
            "imageCategories": {
                "title": "Categorias de Imagem",
                "subtitle": "Você pode participar nas sete categorias a seguir. Escolha a que melhor se adapta ao seu trabalho. Veja os exemplos abaixo para se inspirar."
            },
            "categories": {
                "people": { "name": "Pessoas na Ciência", "description": "Cientistas em seu habitat natural." },
                "microscopy": { "name": "Imagens de Microscopia", "description": "Imagens de microscopia óptica, eletrônica e de varredura por sonda." },
                "nonPhotographic": { "name": "Mídia não fotográfica", "description": "Arquivos de áudio e vídeo, imagens geradas por computador, etc." },
                "imageSets": { "name": "Conjuntos de Imagens", "description": "Imagens tematicamente ligadas (até 10) que podem ser vistas como um único conjunto." },
                "wildlife": { "name": "Vida Selvagem e Natureza", "description": "Organismos em seu habitat natural, incluindo macrofotografia." },
                "astronomy": { "name": "Astronomia", "description": "Imagens de estrelas, eventos celestes e o equipamento usado para capturá-los." },
                "general": { "name": "Categoria Geral", "description": "Todo o resto, da arqueologia à vulcanologia." }
            },
            "readyToParticipate": {
                "title": "Pronto para Participar?",
                "subtitle": "O palco está montado. Sua lente é a chave. Mostre-nos o mundo através de seus olhos científicos.",
                "cta": "Envie seu Trabalho"
            },
            "supportedBy": "Apoiado por:"
        },
        "contact": {
            "title": "Entre em Contato",
            "subtitle": "Tem perguntas ou feedback? Adoraríamos ouvir de você. Prometemos uma resposta rápida!",
            "getInTouch": "Fale Conosco",
            "p1": "Preencha o formulário e nossa equipe entrará em contato em algumas horas. Estamos aqui para ajudar!",
            "form": {
                "name": "Nome Completo",
                "namePlaceholder": "Seu Nome",
                "email": "Endereço de E-mail",
                "emailPlaceholder": "seu.email@exemplo.com",
                "subject": "Assunto",
                "subjectPlaceholder": "Selecione um assunto para sua consulta",
                "otherSubjectPlaceholder": "Por favor, especifique seu assunto",
                "message": "Mensagem",
                "messagePlaceholder": "Selecione uma mensagem pré-escrita ou 'Outro...'",
                "otherMessagePlaceholder": "Por favor, especifique sua mensagem",
                "selectSubjectFirst": "Por favor, selecione um assunto primeiro",
                "submit": "Enviar Mensagem",
                "submitting": "Enviando..."
            },
            "toast": {
                "successTitle": "Mensagem Enviada!",
                "successDescription": "Obrigado por entrar em contato conosco. Retornaremos em breve.",
                "errorTitle": "Erro",
                "errorDescription": "Algo deu errado. Por favor, tente novamente."
            }
        },
        "organizers": {
            "title": "Conheça os Organizadores",
            "subtitle": "A equipe dedicada trabalhando nos bastidores para fazer da primeira Wiki Science Competition India um grande sucesso.",
            "lead_organizers": "Organizadores Principais",
            "advisors": "Consultores",
            "core_organizing_team": "Equipe Organizadora Principal",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "Organizador Principal",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "Organizadora Principal",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "Consultor",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "Equipe Organizadora Principal",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "Chamada para Organizadores",
            "subtitle": "Estamos animados em compartilhar que a Índia organizará sua própria edição local desta campanha global que promove a ciência através de imagens, vídeos e outras mídias licenciadas livremente no Wikimedia Commons.",
            "joinHeading": "Junte-se à Equipe Organizadora",
            "joinDescription": "Para apoiar a coordenação, divulgação e planejamento, estamos expandindo nossa equipe organizadora. Se você tem interesse em contribuir para esta importante iniciativa, gostaríamos muito de ouvir de você.",
            "lookingForHeading": "O que estamos procurando",
            "lookingFor": [
                "Indivíduos apaixonados com interesse em ciência, fotografia ou conhecimento aberto.",
                "Habilidades em planejamento de eventos, divulgação, gerenciamento de mídias sociais ou criação de conteúdo.",
                "Um espírito colaborativo e o desejo de causar um impacto significativo."
            ],
            "sidebarTitle": "Inscreva-se Agora",
            "sidebarDescription": "Ajude-nos a moldar a primeira Wiki Science Competition na Índia.",
            "deadline": "Inscrições Encerradas: 15 de julho de 2025",
            "cta": "Inscrições Encerradas"
        },
        "resources": {
            "title": "Recursos",
            "subtitle": "Inspire-se nos vencedores anteriores e acesse materiais úteis para preparar sua submissão.",
            "pastWinners": {
                "title": "Galeria de Vencedores Anteriores",
                "winnerLabel": "Vencedor",
                "winners": [
                    { "year": 2023, "category": "Astronomia", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "Biologia", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "Química", "winner": "Priya Desai" },
                    { "year": 2022, "category": "Astronomia", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "Materiais de Aprendizagem",
                "cta": "Saiba Mais",
                "resources": [
                    { "title": "Guia para Fotografia Científica", "description": "Aprenda o básico para capturar imagens científicas impressionantes.", "link": "#" },
                    { "title": "Entendendo o Creative Commons", "description": "Um guia rápido para licenciar seu trabalho para a competição.", "link": "#" },
                    { "title": "Tutorial de Upload de Imagem", "description": "Vídeo passo a passo sobre como enviar suas fotos.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "Apoie-nos",
            "subtitle": "Ajude-nos a fazer da Wiki Science Competition India 2025 um enorme sucesso.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "Torne-se um Patrocinador",
                    "description": "Apoie-nos com contribuições monetárias para ajudar a cobrir custos operacionais, prêmios em dinheiro e gerenciamento de eventos. Oferecemos vários níveis de patrocínio com oportunidades de destaque para a marca.",
                    "cta": "Contato para Patrocínio"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "Forneça Presentes e Brindes",
                    "description": "Contribua para nosso fundo de prêmios com presentes emocionantes, vouchers ou mercadorias de marca (brindes) para nossos vencedores e participantes. Coloque sua marca nas mãos dos entusiastas da ciência.",
                    "cta": "Oferecer Presentes"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "Divulgação e Marketing",
                    "description": "Colabore conosco para divulgar. Ajude-nos a alcançar um público mais amplo através de seus canais institucionais, mídias sociais ou expertise em marketing.",
                    "cta": "Colaborar na Divulgação"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "Explore Mundos Microscópicos", "description": "De estruturas celulares a formações de cristais, mostre a beleza invisível." },
                    { "id": 2, "title": "Capture Maravilhas Celestiais", "description": "O cosmos é sua tela. Fotografe galáxias, nebulosas e eventos planetários." },
                    { "id": 3, "title": "Visualize Dados Complexos", "description": "Transforme dados brutos em visualizações científicas e infográficos atraentes." },
                    { "id": 4, "title": "Documente a Genialidade Humana", "description": "Capture cientistas trabalhando, equipamentos de laboratório inovadores e momentos de descoberta." }
                ]
            },
            "cta": {
                "title": "Envolva-se",
                "subtitle": "Faça parte da primeira Wiki Science Competition nacional da Índia. Estamos procurando indivíduos e organizações apaixonados para se juntarem a nós.",
                "campus": {
                    "title": "Chamada para Embaixadores do Campus",
                    "description": "Promova a campanha em sua instituição, compartilhe diretrizes e ajude a organizar atividades de conscientização.",
                    "deadline": "Prazo: 31 de agosto de 2025",
                    "cta": "Inscreva-se Agora"
                },
                "affiliates": {
                    "title": "Chamada para Afiliados da Wikimedia",
                    "description": "Seja nosso parceiro para promover a campanha, organizar a divulgação local e ajudar a trazer contribuições científicas impactantes de sua região.",
                    "deadline": "Prazo: 31 de agosto de 2025",
                    "cta": "Seja nosso Parceiro"
                }
            },
            "info": {
                "title": "Tudo o que Você Precisa Saber",
                "subtitle": "Das diretrizes de submissão aos detalhes do júri, obtenha todas as informações de que precisa para fazer parte deste evento emocionante.",
                "cta": "Saiba mais",
                "sections": [
                    { "icon": "Info", "title": "Sobre a Competição", "description": "Uma competição internacional anual de fotografia científica, reunindo entusiastas da ciência para compartilhar sua visão do mundo da pesquisa.", "link": "/about" },
                    { "icon": "Target", "title": "Como Participar", "description": "A participação é gratuita e aberta a todos. Envie suas melhores imagens relacionadas à ciência em várias categorias durante o período de submissão.", "link": "/competition" },
                    { "icon": "Award", "title": "Prêmios e Reconhecimento", "description": "Os vencedores recebem reconhecimento nacional, certificados e prêmios. As melhores imagens também avançam para a final internacional.", "link": "/competition" },
                    { "icon": "Users", "title": "Júri e Critérios", "description": "Nosso júri de especialistas, composto por cientistas e fotógrafos, julgará os trabalhos com base no valor científico, originalidade e qualidade estética.", "link": "/jury" },
                    { "icon": "History", "title": "Vencedores Anteriores", "description": "Explore uma galeria de fotografias vencedoras de anos anteriores e inspire-se no incrível talento exibido.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "Pronto para Participar?",
                    "subtitle": "O palco está montado. Sua lente é a chave. Mostre-nos o mundo através de seus olhos científicos.",
                    "cta": "Envie seu Trabalho"
                }
            },
            "prizes": {
                "title": "Prêmios e Reconhecimento",
                "subtitle": "Suas imagens inovadoras merecem ser celebradas. Descubra o que você pode ganhar.",
                "prizes": [
                    { "icon": "Award", "title": "Reconhecimento Nacional", "description": "Os vencedores serão celebrados em nossas plataformas oficiais e ganharão cobertura da mídia nacional." },
                    { "icon": "Camera", "title": "Equipamento de Ponta", "description": "Equipamentos e acessórios de fotografia emocionantes para os principais vencedores para ajudar em sua paixão." },
                    { "icon": "BookOpen", "title": "Destaque em Publicação", "description": "Tenha seu trabalho destacado em prestigiosas revistas e publicações científicas." }
                ]
            },
            "jury": {
                "title": "Conheça o Estimado Júri",
                "description": "Nosso painel apresenta um grupo diversificado de cientistas renomados, fotógrafos profissionais e comunicadores de ciência de toda a Índia. Eles trazem uma vasta experiência para garantir um processo de avaliação justo e perspicaz.",
                "cta": "Ver Painel Completo"
            }
        }
    },
    fr: {
        "mainNavLinks": [
            { "name": "À propos", "href": "/about" },
            { "name": "Concours", "href": "/competition" },
            { "name": "Ressources", "href": "/resources" },
            { "name": "Sponsors", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "Découvrez l'équipe", "href": "/organizers" },
            { "name": "Ambassadeurs de campus", "href": "/campus-ambassadors" },
            { "name": "Appel à l'équipe", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "Jury", "href": "/jury" },
            { "name": "Soutenez-nous", "href": "/support-us" },
            { "name": "Contact", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Comment créer un compte Wiki", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Comment utiliser l'assistant de téléversement", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "Comprendre les licences CC", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "Comment ajouter des catégories", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "Organisateurs",
        "moreDropdown": "Plus",
        "learningDropdown": "Apprentissage",
        "participateButton": "Participer",
        "footerNavLinks": [
            { "name": "À propos", "href": "/about" },
            { "name": "Concours", "href": "/competition" },
            { "name": "Jury", "href": "/jury" },
            { "name": "Organisateurs", "href": "/organizers" },
            { "name": "Sponsors", "href": "/sponsors" },
            { "name": "Ressources", "href": "/resources" },
            { "name": "Ambassadeurs de campus", "href": "/campus-ambassadors" },
            { "name": "Contact", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "Parrainage", "href": "/support-us#sponsorship" },
            { "name": "Cadeaux/Goodies", "href": "/support-us#gifts" },
            { "name": "Sensibilisation", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "Capturer la beauté de la science à travers la photographie.",
        "footerNavHeader": "Navigation",
        "footerSupportHeader": "Soutenez-nous",
        "footerContactHeader": "Contact",
        "footerCopyright": "Wiki Science Competition Inde. Tous droits réservés.",
        "footerLicense": "Le contenu est disponible sous licence CC BY-SA 4.0 sauf indication contraire.",
        "footerDeveloperCredit": "Conçu et développé par",
        "about": {
            "title": "À propos de WikiScience India 2025",
            "badge": "Introduction pour le contexte indien",
            "heading": "Wiki Science Competition 2025 – Inde",
            "p1": "Pour la toute première fois, l'Inde organise une édition nationale du Wiki Science Competition (WSC) — l'une des plus grandes initiatives mondiales qui rassemble la science, la photographie et le savoir libre.",
            "p2": "Lancé en Estonie en 2011 puis étendu à travers l'Europe et le monde, le concours a inspiré des milliers de scientifiques, de chercheurs et de passionnés à partager des images qui capturent l'émerveillement de la science. Des cellules microscopiques aux galaxies cosmiques, ces contributions sous licence libre enrichissent Wikimedia Commons et soutiennent l'éducation ouverte à l'échelle mondiale.",
            "p3": "L'Inde a fièrement contribué aux éditions internationales passées — des photographes et des scientifiques indiens ayant reçu reconnaissance et récompenses. Cependant, c'est la première fois que l'Inde accueille sa propre compétition locale, dédiée à la mise en valeur de l'esprit scientifique et de la créativité de notre pays.",
            "p4": "Le Wiki Science Competition 2025 – Inde est plus qu'un concours. C'est un effort collectif pour représenter la science indienne dans le monde — à travers des images puissantes, des histoires et de la créativité.",
            "aims": {
                "title": "Nos objectifs",
                "subtitle": "À travers cette campagne, nous visons à :",
                "items": [
                    { "icon": "PenSquare", "title": "Encourager la contribution", "description": "Encourager les étudiants, les chercheurs et les passionnés de toute l'Inde à contribuer avec des médias scientifiques de valeur." },
                    { "icon": "Lightbulb", "title": "Sensibiliser", "description": "Sensibiliser à l'importance de la science ouverte et du savoir libre." },
                    { "icon": "Globe", "title": "Célébrer le patrimoine", "description": "Célébrer le riche patrimoine scientifique de l'Inde et ses innovations continues." },
                    { "icon": "Handshake", "title": "Renforcer la collaboration", "description": "Renforcer la collaboration entre les communautés Wikimedia, les universités, les instituts de recherche et les organisations." }
                ]
            },
            "supportingOrg": {
                "title": "Organisation de soutien",
                "p1": "Le Wiki Club SATI (Vidisha, Madhya Pradesh) est reconnu comme l'organisation de soutien pour la première édition nationale du Wiki Science Competition 2025 en Inde. Le club a été à l'avant-garde de l'engagement des étudiants et des jeunes professionnels dans le mouvement Wikimedia, contribuant au savoir ouvert, à l'innovation technique et aux initiatives menées par la communauté.",
                "p2": "Plusieurs membres de l'équipe d'organisation principale sont associés au Wiki Club SATI, et leur implication continue reflète l'engagement du club à faire progresser le savoir libre et l'engagement scientifique. Bien que le soutien ne soit pas financier, la capacité organisationnelle, l'expérience et les réseaux communautaires du Wiki Club SATI jouent un rôle essentiel pour permettre la tenue de cette campagne au niveau national."
            }
        },
        "campusAmbassadors": {
            "title": "Ambassadeurs de campus",
            "subtitle": "Rencontrez les leaders passionnés qui animent le Wiki Science Competition dans leurs communautés.",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Club SATI",
                    "boardLink": {
                        "name": "Wiki Club SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "Wikipédien et linguiste computationnel du Tamil Nadu"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "Chef de département et professeur assistant, Département d'animation par ordinateur, St Aloysius",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Communauté Deoband",
                    "boardLink": {
                        "name": "Communauté Deoband",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "Réalise actuellement des projets informatiques et de surveillance dans le district de Kanniyakumari"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "Wikipédien tamoul, ingénieur logiciel"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Wikipédien"
                }
            ]
        },
        "affiliates": {
            "title": "Appel aux affiliés de Wikimedia",
            "subtitle": "Nous invitons les affiliés, les groupes d'utilisateurs et les organisations de Wikimedia à travers l'Inde à collaborer avec nous pour promouvoir et soutenir le Wiki Science Competition 2025.",
            "partnerHeading": "Pourquoi devenir notre partenaire ?",
            "partnerDescription": "C'est une occasion unique de célébrer la science et d'enrichir Wikimedia Commons avec des médias sous licence libre. En tant que partenaire, votre groupe peut jouer un rôle essentiel dans le succès du premier Wiki Science Competition national de l'Inde en aidant à la sensibilisation, à la communication et à l'engagement de la communauté.",
            "collaborationHeading": "Comment vous pouvez collaborer",
            "collaborationPoints": [
                "Participez à des actions de sensibilisation en ligne et hors ligne auprès de vos réseaux.",
                "Facilitez les téléversements provenant d'institutions et d'organismes de recherche.",
                "Organisez des ateliers locaux, des édit-a-thons ou des marathons photo.",
                "Aidez à la traduction et à la localisation des supports de campagne."
            ],
            "formNote": "Ce formulaire est destiné aux affiliés ou groupes communautaires reconnus de Wikimedia. Les individus et les étudiants doivent utiliser le",
            "campusAmbassadorLink": "formulaire d'ambassadeur de campus",
            "sidebarTitle": "Devenez notre partenaire",
            "sidebarDescription": "Collaborons pour présenter le paysage scientifique de l'Inde au monde.",
            "deadline": "Date limite : 31 août 2025",
            "cta": "Ouvrir le formulaire de partenariat"
        },
        "campus": {
            "title": "Appel aux ambassadeurs de campus",
            "subtitle": "Rejoignez-nous en tant que coordinateur local de sensibilisation pour aider à promouvoir le Wiki Science Competition 2025 dans votre institution, votre communauté ou votre réseau.",
            "whoHeading": "Qui recherchons-nous ?",
            "whoDescription": "Les ambassadeurs de campus jouent un rôle clé dans la diffusion de l'information, l'orientation des participants et, éventuellement, l'organisation de sessions de sensibilisation ou d'ateliers. Que vous soyez un Wikimédien, un étudiant en sciences, un designer, un enseignant ou simplement un passionné de science ouverte, nous serions ravis de vous avoir à bord !",
            "responsibilitiesHeading": "Responsabilités",
            "responsibilities": [
                "Promouvoir la campagne dans votre institution ou votre communauté.",
                "Partager les directives de participation avec les contributeurs potentiels.",
                "Organiser, éventuellement, des activités de sensibilisation comme des ateliers ou des marathons photo (nous pouvons fournir un soutien !)."
            ],
            "sidebar": {
                "title": "Postulez maintenant",
                "description": "Prêt à avoir un impact ? Remplissez le formulaire pour devenir un ambassadeur de campus.",
                "deadline": "Date limite : 31 août 2025",
                "cta": "Ouvrir le formulaire de candidature"
            },
            "cta": {
                "text": "Devenir un ambassadeur de campus",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "Détails du concours",
            "subtitle": "Tout ce que vous devez savoir pour participer et gagner.",
            "howToParticipate": {
                "title": "Comment participer",
                "p1": "Si vous n'en avez pas, vous pouvez créer un compte global qui vous donnera un nom d'utilisateur spécifique sur toutes les plateformes Wikimedia (y compris Wikimedia Commons) lorsque vous vous connecterez. En tant qu'utilisateur nouvellement enregistré, vous devez attendre au moins quatre jours avant de téléverser un fichier vidéo, tandis que les images peuvent être téléversées juste après l'inscription.",
                "createAccountLink": "Créez votre compte ici !",
                "rulesTitle": "Règles de participation",
                "rules": [
                    "Les soumissions doivent être votre propre travail, téléversées depuis votre propre compte Wikimedia enregistré. Pour les auteurs multiples, tous les noms doivent être fournis.",
                    "Les images doivent être sous une licence libre (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).",
                    "Toutes les soumissions nécessitent une description scientifique claire et précise en anglais. D'autres langues sont également les bienvenues.",
                    {
                        "text": "Téléversez la plus haute résolution possible (au moins 2 mégapixels). Vous pouvez vérifier le nombre de mégapixels ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "ici"
                        }
                    },
                    "Les images ne doivent pas contenir de filigranes, de logos ou de texte/graphiques ajoutés (sauf pour les échelles)."
                ]
            },
            "keyDates": {
                "title": "Dates clés",
                "timeline": [
                    { "date": "1er novembre 2025", "event": "Ouverture des soumissions" },
                    { "date": "15 décembre 2025", "event": "Clôture des soumissions" },
                    { "date": "Janvier 2026", "event": "Délibération du jury" },
                    { "date": "Février 2026", "event": "Annonce des gagnants nationaux" }
                ]
            },
            "submitNow": "Soumettre maintenant",
            "imageCategories": {
                "title": "Catégories d'images",
                "subtitle": "Vous pouvez participer dans les sept catégories suivantes. Choisissez celle qui correspond le mieux à votre travail. Consultez les exemples ci-dessous pour vous inspirer."
            },
            "categories": {
                "people": { "name": "Personnes dans la science", "description": "Des scientifiques dans leur habitat naturel." },
                "microscopy": { "name": "Images de microscopie", "description": "Images de microscopie optique, électronique et à sonde à balayage." },
                "nonPhotographic": { "name": "Médias non photographiques", "description": "Fichiers audio et vidéo, imagerie de synthèse, etc." },
                "imageSets": { "name": "Séries d'images", "description": "Images liées thématiquement (jusqu'à 10) pouvant être vues comme un seul ensemble." },
                "wildlife": { "name": "Faune et nature", "description": "Organismes dans leur habitat naturel, y compris la macrophotographie." },
                "astronomy": { "name": "Astronomie", "description": "Images d'étoiles, d'événements célestes et de l'équipement utilisé pour les capturer." },
                "general": { "name": "Catégorie générale", "description": "Tout le reste, de l'archéologie à la vulcanologie." }
            },
            "readyToParticipate": {
                "title": "Prêt à participer ?",
                "subtitle": "La scène est prête. Votre objectif est la clé. Montrez-nous le monde à travers vos yeux scientifiques.",
                "cta": "Soumettez votre travail"
            },
            "supportedBy": "Soutenu par :"
        },
        "contact": {
            "title": "Contactez-nous",
            "subtitle": "Vous avez des questions ou des commentaires ? Nous serions ravis de vous entendre. Nous promettons une réponse rapide !",
            "getInTouch": "Prenez contact",
            "p1": "Remplissez le formulaire et notre équipe vous répondra dans quelques heures. Nous sommes là pour vous aider !",
            "form": {
                "name": "Nom complet",
                "namePlaceholder": "Votre nom",
                "email": "Adresse e-mail",
                "emailPlaceholder": "votre.email@example.com",
                "subject": "Sujet",
                "subjectPlaceholder": "Sélectionnez un sujet pour votre demande",
                "otherSubjectPlaceholder": "Veuillez préciser votre sujet",
                "message": "Message",
                "messagePlaceholder": "Sélectionnez un message pré-écrit ou 'Autre...'",
                "otherMessagePlaceholder": "Veuillez préciser votre message",
                "selectSubjectFirst": "Veuillez d'abord sélectionner un sujet",
                "submit": "Envoyer le message",
                "submitting": "Envoi en cours..."
            },
            "toast": {
                "successTitle": "Message envoyé !",
                "successDescription": "Merci de nous avoir contactés. Nous vous répondrons sous peu.",
                "errorTitle": "Erreur",
                "errorDescription": "Une erreur s'est produite. Veuillez réessayer."
            }
        },
        "organizers": {
            "title": "Découvrez les organisateurs",
            "subtitle": "L'équipe dévouée qui travaille en coulisses pour faire du premier Wiki Science Competition en Inde un grand succès.",
            "lead_organizers": "Organisateurs principaux",
            "advisors": "Conseillers",
            "core_organizing_team": "Équipe d'organisation principale",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "Dev Jadiya",
                    "role": "Organisateur principal",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "https://www.linkedin.com/in/devjadiya/", "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya" }
                },
                {
                    "id": "gauri_gupta",
                    "name": "Gauri Gupta",
                    "role": "Organisatrice principale",
                    "roleKey": "lead_organizer",
                    "social": { "linkedin": "#", "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa" }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "Suyash Dwivedi",
                    "role": "Conseiller",
                    "roleKey": "advisor",
                    "social": { "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/", "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi" }
                },
                {
                    "id": "sai_kiran",
                    "name": "Sai Kiran",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv" }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "Chinmayee Mishra",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra" }
                },
                {
                    "id": "athul_rt",
                    "name": "Athul R T",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Athulvis" }
                },
                {
                    "id": "uday_dongre",
                    "name": "Uday Dongre",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz" }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "Pankaj Yadav",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft" }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "Ashmita Bathre",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204" }
                },
                {
                    "id": "aanchal_patel",
                    "name": "Aanchal Patel",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Archies2804" }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "Riddhi Sharma",
                    "role": "Équipe d'organisation principale",
                    "roleKey": "core_team",
                    "social": { "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione" }
                }
            ]
        },
        "organizersCall": {
            "title": "Appel aux organisateurs",
            "subtitle": "Nous sommes ravis de vous annoncer que l'Inde organisera sa propre édition locale de cette campagne mondiale qui promeut la science à travers des images, des vidéos et d'autres médias sous licence libre sur Wikimedia Commons.",
            "joinHeading": "Rejoignez l'équipe d'organisation",
            "joinDescription": "Pour soutenir une coordination, une sensibilisation et une planification fluides, nous élargissons notre équipe d'organisation. Si vous êtes intéressé à contribuer à cette importante initiative, nous serions ravis de vous entendre.",
            "lookingForHeading": "Ce que nous recherchons",
            "lookingFor": [
                "Des personnes passionnées ayant un intérêt pour la science, la photographie ou le savoir ouvert.",
                "Des compétences en planification d'événements, en sensibilisation, en gestion des médias sociaux ou en création de contenu.",
                "Un esprit collaboratif et le désir d'avoir un impact significatif."
            ],
            "sidebarTitle": "Postulez maintenant",
            "sidebarDescription": "Aidez-nous à façonner le premier Wiki Science Competition en Inde.",
            "deadline": "Candidatures closes : 15 juillet 2025",
            "cta": "Candidatures closes"
        },
        "resources": {
            "title": "Ressources",
            "subtitle": "Inspirez-vous des anciens gagnants et accédez à des matériaux utiles pour préparer votre soumission.",
            "pastWinners": {
                "title": "Galerie des anciens gagnants",
                "winnerLabel": "Gagnant",
                "winners": [
                    { "year": 2023, "category": "Astronomie", "winner": "Anjali Sharma" },
                    { "year": 2023, "category": "Biologie", "winner": "Rohan Mehta" },
                    { "year": 2022, "category": "Chimie", "winner": "Priya Desai" },
                    { "year": 2022, "category": "Astronomie", "winner": "Vikram Singh" }
                ]
            },
            "learningMaterials": {
                "title": "Matériels d'apprentissage",
                "cta": "En savoir plus",
                "resources": [
                    { "title": "Guide de la photographie scientifique", "description": "Apprenez les bases pour capturer des images scientifiques époustouflantes.", "link": "#" },
                    { "title": "Comprendre Creative Commons", "description": "Un guide rapide pour licencier votre travail pour le concours.", "link": "#" },
                    { "title": "Tutoriel de téléversement d'images", "description": "Vidéo étape par étape sur la façon de soumettre vos photos.", "link": "#" }
                ]
            }
        },
        "support": {
            "title": "Soutenez-nous",
            "subtitle": "Aidez-nous à faire du Wiki Science Competition India 2025 un immense succès.",
            "options": [
                {
                    "id": "sponsorship",
                    "icon": "Handshake",
                    "title": "Devenez sponsor",
                    "description": "Soutenez-nous avec des contributions monétaires pour aider à couvrir les coûts opérationnels, les prix et la gestion de l'événement. Nous offrons divers niveaux de parrainage avec des opportunités de branding importantes.",
                    "cta": "Contacter pour le parrainage"
                },
                {
                    "id": "gifts",
                    "icon": "Gift",
                    "title": "Fournir des cadeaux et des goodies",
                    "description": "Contribuez à notre cagnotte avec des cadeaux passionnants, des bons d'achat ou des produits dérivés (goodies) pour nos gagnants et participants. Mettez votre marque entre les mains des passionnés de science.",
                    "cta": "Offrir des cadeaux"
                },
                {
                    "id": "outreach",
                    "icon": "Megaphone",
                    "title": "Sensibilisation et marketing",
                    "description": "Collaborez avec nous pour faire passer le mot. Aidez-nous à atteindre un public plus large via vos canaux institutionnels, les médias sociaux ou votre expertise en marketing.",
                    "cta": "Collaborer à la sensibilisation"
                }
            ]
        },
        "home": {
            "autoscroll": {
                "slides": [
                    { "id": 1, "title": "Explorez des mondes microscopiques", "description": "Des structures cellulaires aux formations cristallines, montrez la beauté invisible." },
                    { "id": 2, "title": "Capturez des merveilles célestes", "description": "Le cosmos est votre toile. Photographiez des galaxies, des nébuleuses et des événements planétaires." },
                    { "id": 3, "title": "Visualisez des données complexes", "description": "Transformez des données brutes en visualisations scientifiques et infographies convaincantes." },
                    { "id": 4, "title": "Documentez l'ingéniosité humaine", "description": "Capturez des scientifiques au travail, des équipements de laboratoire innovants et des moments de découverte." }
                ]
            },
            "cta": {
                "title": "Impliquez-vous",
                "subtitle": "Faites partie du premier Wiki Science Competition national de l'Inde. Nous recherchons des personnes et des organisations passionnées pour nous rejoindre.",
                "campus": {
                    "title": "Appel aux ambassadeurs de campus",
                    "description": "Promouvoir la campagne dans votre institution, partager les directives et aider à organiser des activités de sensibilisation.",
                    "deadline": "Date limite : 31 août 2025",
                    "cta": "Postulez maintenant"
                },
                "affiliates": {
                    "title": "Appel aux affiliés de Wikimedia",
                    "description": "Devenez notre partenaire pour promouvoir la campagne, organiser des actions de sensibilisation locales et aider à apporter des contributions scientifiques percutantes de votre région.",
                    "deadline": "Date limite : 31 août 2025",
                    "cta": "Devenez notre partenaire"
                }
            },
            "info": {
                "title": "Tout ce que vous devez savoir",
                "subtitle": "Des directives de soumission aux détails du jury, obtenez toutes les informations dont vous avez besoin pour faire partie de cet événement passionnant.",
                "cta": "En savoir plus",
                "sections": [
                    { "icon": "Info", "title": "À propos du concours", "description": "Un concours international annuel de photographie scientifique, réunissant des passionnés de science pour partager leur vision du monde de la recherche.", "link": "/about" },
                    { "icon": "Target", "title": "Comment participer", "description": "La participation est gratuite et ouverte à tous. Soumettez vos meilleures images liées à la science dans diverses catégories pendant la période de soumission.", "link": "/competition" },
                    { "icon": "Award", "title": "Prix et reconnaissance", "description": "Les gagnants reçoivent une reconnaissance nationale, des certificats et des prix. Les meilleures images passent également à la finale internationale.", "link": "/competition" },
                    { "icon": "Users", "title": "Jury et critères", "description": "Notre jury d'experts composé de scientifiques et de photographes jugera les candidatures en fonction de leur valeur scientifique, de leur originalité et de leur qualité esthétique.", "link": "/jury" },
                    { "icon": "History", "title": "Anciens gagnants", "description": "Explorez une galerie des photographies gagnantes des années précédentes et laissez-vous inspirer par l'incroyable talent présenté.", "link": "/resources" }
                ],
                "finalCard": {
                    "title": "Prêt à participer ?",
                    "subtitle": "La scène est prête. Votre objectif est la clé. Montrez-nous le monde à travers vos yeux scientifiques.",
                    "cta": "Soumettez votre travail"
                }
            },
            "prizes": {
                "title": "Prix et reconnaissance",
                "subtitle": "Vos visuels révolutionnaires méritent d'être célébrés. Découvrez ce que vous pouvez gagner.",
                "prizes": [
                    { "icon": "Award", "title": "Reconnaissance nationale", "description": "Les gagnants seront célébrés sur nos plateformes officielles et bénéficieront d'une couverture médiatique nationale." },
                    { "icon": "Camera", "title": "Équipement de pointe", "description": "Du matériel de photographie et des accessoires passionnants pour les meilleurs gagnants afin de soutenir leur passion." },
                    { "icon": "BookOpen", "title": "Présentation dans une publication", "description": "Faites figurer votre travail dans des magazines et des publications scientifiques prestigieux." }
                ]
            },
            "jury": {
                "title": "Découvrez le jury prestigieux",
                "description": "Notre panel comprend un groupe diversifié de scientifiques de renom, de photographes professionnels et de communicateurs scientifiques de toute l'Inde. Ils apportent une riche expérience pour garantir un processus d'évaluation juste et perspicace.",
                "cta": "Voir le panel complet"
            }
        }
    },
    ml: {
        mainNavLinks: [
            { name: 'വിവരം', href: '/about' },
            { name: 'മത്സരം', href: '/competition' },
            { name: 'വിഭവങ്ങൾ', href: '/resources' },
            { name: 'സ്പോൺസർമാർ', href: '/sponsors' },
        ],
        organizerLinks: [
            { name: 'ടീമിനെ പരിചയപ്പെടാം', href: '/organizers' },
            { name: 'ക്യാമ്പസ് അംബാസഡർമാർ', href: '/campus-ambassadors' },
            { name: 'ടീമിലേക്ക് ക്ഷണിക്കുന്നു', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'വിധികർത്താക്കൾ', href: '/jury' },
            { name: 'ഞങ്ങളെ പിന്തുണയ്ക്കുക', href: '/support-us' },
            { name: 'ബന്ധപ്പെടുക', href: '/contact' },
        ],
        learningLinks: [
            { name: 'വിക്കി അക്കൗണ്ട് എങ്ങനെ നിർമ്മിക്കാം', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
            { name: 'അപ്‌ലോഡ് വിസാർഡ് എങ്ങനെ ഉപയോഗിക്കാം', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
            { name: 'സിസി ലൈസൻസുകൾ മനസ്സിലാക്കാം', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
            { name: 'വിഭാഗങ്ങൾ എങ്ങനെ ചേർക്കാം', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
        ],
        organizersDropdown: 'സംഘാടകർ',
        moreDropdown: 'കൂടുതൽ',
        learningDropdown: 'പഠനം',
        participateButton: 'പങ്കെടുക്കുക',
        footerNavLinks: [
            { name: 'വിവരം', href: '/about' },
            { name: 'മത്സരം', href: '/competition' },
            { name: 'വിധികർത്താക്കൾ', href: '/jury' },
            { name: 'സംഘാടകർ', href: '/organizers' },
            { name: 'സ്പോൺസർമാർ', href: '/sponsors' },
            { name: 'വിഭവങ്ങൾ', href: '/resources' },
            { name: 'ക്യാമ്പസ് അംബാസഡർമാർ', href: '/campus-ambassadors' },
            { name: 'ബന്ധപ്പെടുക', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'സ്പോൺസർഷിപ്പ്', href: '/support-us#sponsorship' },
            { name: 'സമ്മാനങ്ങൾ/സ്വഗ്', href: '/support-us#gifts' },
            { name: 'ഔട്ട്റീച്ച്', href: '/support-us#outreach' },
        ],
        footerSubtitle: 'ഫോട്ടോഗ്രാഫിയിലൂടെ ശാസ്ത്രത്തിന്റെ സൗന്ദര്യം പകർത്തുന്നു.',
        footerNavHeader: 'നാവിഗേഷൻ',
        footerSupportHeader: 'ഞങ്ങളെ പിന്തുണയ്ക്കുക',
        footerContactHeader: 'ബന്ധപ്പെടുക',
        footerCopyright: 'വിക്കി സയൻസ് മത്സരം ഇന്ത്യ. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.',
        footerLicense: 'മറ്റെവിടെയെങ്കിലും സൂചിപ്പിച്ചിട്ടില്ലെങ്കിൽ ഉള്ളടക്കം CC BY-SA 4.0 പ്രകാരം ലഭ്യമാണ്.',
        footerDeveloperCredit: 'രൂപകൽപ്പനയും വികസനവും',
        about: {
            title: 'വിക്കിസയൻസ് ഇന്ത്യ 2025-നെക്കുറിച്ച്',
            badge: 'ഇന്ത്യൻ പശ്ചാത്തലത്തിനുള്ള ആമുഖം',
            heading: 'വിക്കി സയൻസ് മത്സരം 2025 – ഇന്ത്യ',
            p1: 'ആദ്യമായി, ഇന്ത്യ വിക്കി സയൻസ് മത്സരത്തിന്റെ (WSC) ഒരു ദേശീയ പതിപ്പ് സംഘടിപ്പിക്കുന്നു. ശാസ്ത്രം, ഫോട്ടോഗ്രാഫി, സ്വതന്ത്ര വിജ്ഞാനം എന്നിവയെ ഒരുമിപ്പിക്കുന്ന ലോകത്തിലെ ഏറ്റവും വലിയ സംരംഭങ്ങളിലൊന്നാണിത്.',
            p2: '2011-ൽ എസ്തോണിയയിൽ ആരംഭിച്ച് പിന്നീട് യൂറോപ്പിലും ലോകമെമ്പാടും വ്യാപിച്ച ഈ മത്സരം, ശാസ്ത്രത്തിന്റെ വിസ്മയം പകർത്തുന്ന ചിത്രങ്ങൾ പങ്കുവെക്കാൻ ആയിരക്കണക്കിന് ശാസ്ത്രജ്ഞർക്കും ഗവേഷകർക്കും താൽപ്പര്യമുള്ളവർക്കും പ്രചോദനമായി. മൈക്രോസ്കോപ്പിക് കോശങ്ങൾ മുതൽ കോസ്മിക് ഗാലക്സികൾ വരെ, ഈ സ്വതന്ത്ര ലൈസൻസുള്ള സംഭാവനകൾ വിക്കിമീഡിയ കോമൺസിനെ സമ്പന്നമാക്കുകയും ആഗോളതലത്തിൽ തുറന്ന വിദ്യാഭ്യാസത്തെ പിന്തുണയ്ക്കുകയും ചെയ്യുന്നു.',
            p3: 'മുൻ അന്താരാഷ്ട്ര പതിപ്പുകളിൽ ഇന്ത്യ അഭിമാനത്തോടെ സംഭാവന നൽകിയിട്ടുണ്ട് - ഇന്ത്യൻ ഫോട്ടോഗ്രാഫർമാർക്കും ശാസ്ത്രജ്ഞർക്കും അംഗീകാരങ്ങളും അവാർഡുകളും ലഭിച്ചിട്ടുണ്ട്. എന്നിരുന്നാലും, നമ്മുടെ രാജ്യത്തിന്റെ ശാസ്ത്രീയ മനോഭാവവും സർഗ്ഗാത്മകതയും പ്രദർശിപ്പിക്കുന്നതിനായി ഇന്ത്യ ആദ്യമായാണ് സ്വന്തമായി ഒരു പ്രാദേശിക മത്സരം സംഘടിപ്പിക്കുന്നത്.',
            p4: 'വിക്കി സയൻസ് മത്സരം 2025 – ഇന്ത്യ ഒരു മത്സരത്തേക്കാൾ ഉപരിയാണ്. ശക്തമായ ചിത്രങ്ങളിലൂടെയും കഥകളിലൂടെയും സർഗ്ഗാത്മകതയിലൂടെയും ഇന്ത്യൻ ശാസ്ത്രത്തെ ലോകത്തിന് മുന്നിൽ പ്രതിനിധീകരിക്കാനുള്ള ഒരു കൂട്ടായ ശ്രമമാണിത്.',
            aims: {
                title: 'ഞങ്ങളുടെ ലക്ഷ്യങ്ങൾ',
                subtitle: 'ഈ പ്രചാരണത്തിലൂടെ ഞങ്ങൾ ലക്ഷ്യമിടുന്നത്:',
                items: [
                    { icon: 'PenSquare', title: 'സംഭാവന പ്രോത്സാഹിപ്പിക്കുക', description: 'ഇന്ത്യയിലുടനീളമുള്ള വിദ്യാർത്ഥികളെയും ഗവേഷകരെയും താല്പര്യമുള്ളവരെയും വിലയേറിയ ശാസ്ത്രീയ മീഡിയ സംഭാവന ചെയ്യാൻ പ്രോത്സാഹിപ്പിക്കുക.' },
                    { icon: 'Lightbulb', title: 'അവബോധം വളർത്തുക', description: 'തുറന്ന ശാസ്ത്രത്തിന്റെയും സ്വതന്ത്ര വിജ്ഞാനത്തിന്റെയും പ്രാധാന്യത്തെക്കുറിച്ച് അവബോധം വളർത്തുക.' },
                    { icon: 'Globe', title: 'പൈതൃകം ആഘോഷിക്കുക', description: 'ഇന്ത്യയുടെ സമ്പന്നമായ ശാസ്ത്രീയ പൈതൃകവും നിലവിലുള്ള കണ്ടുപിടുത്തങ്ങളും ആഘോഷിക്കുക.' },
                    { icon: 'Handshake', title: 'സഹകരണം ശക്തിപ്പെടുത്തുക', description: 'വിക്കിമീഡിയ കമ്മ്യൂണിറ്റികൾ, സർവ്വകലാശാലകൾ, ഗവേഷണ സ്ഥാപനങ്ങൾ, സംഘടനകൾ എന്നിവ തമ്മിലുള്ള സഹകരണം ശക്തിപ്പെടുത്തുക.' }
                ]
            },
            supportingOrg: {
                title: 'പിന്തുണയ്ക്കുന്ന സംഘടന',
                p1: 'വിക്കി ക്ലബ്ബ് SATI (വിദിഷ, മധ്യപ്രദേശ്) ഇന്ത്യയിലെ വിക്കി സയൻസ് മത്സരം 2025-ന്റെ ആദ്യ ദേശീയ പതിപ്പിന്റെ പിന്തുണയ്ക്കുന്ന സംഘടനയായി അംഗീകരിക്കപ്പെട്ടിരിക്കുന്നു. വിക്കിമീഡിയ പ്രസ്ഥാനത്തിൽ വിദ്യാർത്ഥികളെയും യുവ പ്രൊഫഷണലുകളെയും ഉൾപ്പെടുത്തുന്നതിൽ ഈ ക്ലബ്ബ് മുൻപന്തിയിലാണ്, തുറന്ന അറിവ്, സാങ്കേതിക കണ്ടുപിടുത്തങ്ങൾ, കമ്മ്യൂണിറ്റി നേതൃത്വത്തിലുള്ള സംരംഭങ്ങൾ എന്നിവയ്ക്ക് സംഭാവന നൽകുന്നു.',
                p2: 'മുഖ്യ സംഘാടക സമിതിയിലെ നിരവധി അംഗങ്ങൾ വിക്കി ക്ലബ്ബ് SATI-യുമായി ബന്ധപ്പെട്ടിരിക്കുന്നു, അവരുടെ തുടർച്ചയായ പങ്കാളിത്തം സ്വതന്ത്ര വിജ്ഞാനവും ശാസ്ത്രീയ ഇടപെടലും മുന്നോട്ട് കൊണ്ടുപോകുന്നതിനുള്ള ക്ലബ്ബിന്റെ പ്രതിബദ്ധതയെ പ്രതിഫലിപ്പിക്കുന്നു. പിന്തുണ സാമ്പത്തികേതരമാണെങ്കിലും, വിക്കി ക്ലബ്ബ് SATI-യുടെ സംഘടനാപരമായ ശേഷി, അനുഭവം, കമ്മ്യൂണിറ്റി നെറ്റ്‌വർക്കുകൾ എന്നിവ ഈ പ്രചാരണം ദേശീയ തലത്തിൽ സാധ്യമാക്കുന്നതിൽ ഒരു പ്രധാന പങ്ക് വഹിക്കുന്നു.'
            }
        },
        campusAmbassadors: {
            title: 'ക്യാമ്പസ് അംബാസഡർമാർ',
            subtitle: 'അവരുടെ കമ്മ്യൂണിറ്റികളിൽ വിക്കി സയൻസ് മത്സരത്തിന് നേതൃത്വം നൽകുന്ന ആവേശഭരിതരായ നേതാക്കളെ പരിചയപ്പെടാം.',
            ambassadors: [
                {
                    name: 'അനുഷ്ക പട്ടേൽ',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
                    description: 'വിക്കി ക്ലബ്ബ് SATI',
                    boardLink: {
                        name: 'വിക്കി ക്ലബ്ബ് SATI',
                        url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
                    },
                },
                {
                    name: 'നീചൽക്കാരൻ',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                    description: 'തമിഴ്നാട്ടിൽ നിന്നുള്ള വിക്കിപീഡിയനും കമ്പ്യൂട്ടേഷണൽ ലിംഗ്വിസ്റ്റും',
                },
                {
                    name: 'സന്തോഷ് നോട്ടഗർ',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                    description: 'എച്ച്ഒഡി & അസിസ്റ്റന്റ് പ്രൊഫസർ, കമ്പ്യൂട്ടർ ആനിമേഷൻ ഡിപ്പാർട്ട്മെന്റ്, സെന്റ് അലോഷ്യസ്',
                    wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
                },
                {
                    name: 'സാമിയ അഹമ്മദ്',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                    description: 'ദിയോബന്ദ് കമ്മ്യൂണിറ്റി',
                    boardLink: {
                        name: 'ദിയോബന്ദ് കമ്മ്യൂണിറ്റി',
                        url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
                    },
                },
                {
                    name: 'സതീഷ് എം',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    description: 'നിലവിൽ കന്യാകുമാരി ജില്ലയിൽ ഐടി, നിരീക്ഷണ പദ്ധതികൾ ചെയ്യുന്നു',
                },
                {
                    name: 'കാർത്തിക് ശിവറാം',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                    description: 'തമിഴ് വിക്കിപീഡിയൻ, സോഫ്റ്റ്‌വെയർ എഞ്ചിനീയർ',
                },
                {
                    name: 'ഒസാമ',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
                    description: 'വിക്കിപീഡിയൻ',
                },
            ]
        },
        affiliates: {
            title: 'വിക്കിമീഡിയ അഫിലിയേറ്റുകൾക്കുള്ള ക്ഷണം',
            subtitle: 'വിക്കി സയൻസ് മത്സരം 2025-നെ പ്രോത്സാഹിപ്പിക്കുന്നതിനും പിന്തുണയ്ക്കുന്നതിനും ഇന്ത്യയിലുടനീളമുള്ള വിക്കിമീഡിയ അഫിലിയേറ്റുകളെയും ഉപയോക്തൃ ഗ്രൂപ്പുകളെയും സംഘടനകളെയും ഞങ്ങൾ സഹകരിക്കാൻ ക്ഷണിക്കുന്നു.',
            partnerHeading: 'എന്തിന് ഞങ്ങളുമായി പങ്കാളിയാകണം?',
            partnerDescription: 'ശാസ്ത്രത്തെ ആഘോഷിക്കാനും വിക്കിമീഡിയ കോമൺസിനെ സ്വതന്ത്രമായി ലൈസൻസുള്ള മീഡിയ ഉപയോഗിച്ച് സമ്പന്നമാക്കാനുമുള്ള ഒരു സവിശേഷ അവസരമാണിത്. ഒരു പങ്കാളി എന്ന നിലയിൽ, ഔട്ട്‌റീച്ച്, ബോധവൽക്കരണം, കമ്മ്യൂണിറ്റി ഇടപഴകൽ എന്നിവയിൽ സഹായിക്കുന്നതിലൂടെ ഇന്ത്യയുടെ ആദ്യത്തെ ദേശീയ വിക്കി സയൻസ് മത്സരത്തിന്റെ വിജയത്തിൽ നിങ്ങളുടെ ഗ്രൂപ്പിന് ഒരു നിർണായക പങ്ക് വഹിക്കാൻ കഴിയും.',
            collaborationHeading: 'നിങ്ങൾക്ക് എങ്ങനെ സഹകരിക്കാം',
            collaborationPoints: [
                'നിങ്ങളുടെ നെറ്റ്‌വർക്കുകളിൽ ഓൺലൈനായും ഓഫ്‌ലൈനായും ഔട്ട്‌റീച്ചിൽ ഏർപ്പെടുക.',
                'സ്ഥാപനങ്ങളിൽ നിന്നും ഗവേഷണ സ്ഥാപനങ്ങളിൽ നിന്നും അപ്‌ലോഡുകൾ സുഗമമാക്കുക.',
                'പ്രാദേശിക വർക്ക്‌ഷോപ്പുകൾ, എഡിറ്റത്തോണുകൾ, അല്ലെങ്കിൽ ഫോട്ടോവാക്കുകൾ സംഘടിപ്പിക്കുക.',
                'പ്രചാരണ സാമഗ്രികളുടെ വിവർത്തനത്തിലും പ്രാദേശികവൽക്കരണത്തിലും സഹായിക്കുക.',
            ],
            formNote: 'ഈ ഫോം അംഗീകൃത വിക്കിമീഡിയ അഫിലിയേറ്റുകൾക്കോ ​​കമ്മ്യൂണിറ്റി ഗ്രൂപ്പുകൾക്കോ ​​വേണ്ടിയുള്ളതാണ്. വ്യക്തികളും വിദ്യാർത്ഥികളും ഉപയോഗിക്കേണ്ടത്',
            campusAmbassadorLink: 'ക്യാമ്പസ് അംബാസഡർ ഫോം',
            sidebarTitle: 'ഞങ്ങളുമായി പങ്കാളിയാകൂ',
            sidebarDescription: 'ഇന്ത്യയുടെ ശാസ്ത്രീയ ഭൂപ്രകൃതി ലോകത്തിന് മുന്നിൽ പ്രദർശിപ്പിക്കാൻ നമുക്ക് ഒരുമിച്ച് പ്രവർത്തിക്കാം.',
            deadline: 'അവസാന തീയതി: 31 ഓഗസ്റ്റ് 2025',
            cta: 'പങ്കാളിത്ത ഫോം തുറക്കുക'
        },
        campus: {
            title: 'ക്യാമ്പസ് അംബാസഡർമാർക്കുള്ള ക്ഷണം',
            subtitle: 'നിങ്ങളുടെ സ്ഥാപനത്തിലോ കമ്മ്യൂണിറ്റിയിലോ നെറ്റ്‌വർക്കിലോ വിക്കി സയൻസ് മത്സരം 2025 പ്രോത്സാഹിപ്പിക്കുന്നതിന് ഒരു പ്രാദേശിക ഔട്ട്‌റീച്ച് കോർഡിനേറ്ററായി ഞങ്ങളോടൊപ്പം ചേരുക.',
            whoHeading: 'ഞങ്ങൾ ആരെയാണ് തിരയുന്നത്?',
            whoDescription: 'ബോധവൽക്കരണം പ്രചരിപ്പിക്കുന്നതിലും പങ്കാളികളെ നയിക്കുന്നതിലും ഓപ്ഷണലായി ബോധവൽക്കരണ സെഷനുകളോ വർക്ക്‌ഷോപ്പുകളോ സംഘടിപ്പിക്കുന്നതിലും ക്യാമ്പസ് അംബാസഡർമാർ ഒരു പ്രധാന പങ്ക് വഹിക്കുന്നു. നിങ്ങൾ ഒരു വിക്കിമീഡിയനോ, സയൻസ് വിദ്യാർത്ഥിയോ, ഡിസൈനറോ, അധ്യാപകനോ, അല്ലെങ്കിൽ തുറന്ന ശാസ്ത്രത്തിൽ താൽപ്പര്യമുള്ളവരോ ആകട്ടെ - നിങ്ങളെ ടീമിൽ ഉൾപ്പെടുത്താൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു!',
            responsibilitiesHeading: 'ഉത്തരവാദിത്തങ്ങൾ',
            responsibilities: [
                'നിങ്ങളുടെ സ്ഥാപനത്തിലോ കമ്മ്യൂണിറ്റിയിലോ പ്രചാരണം പ്രോത്സാഹിപ്പിക്കുക.',
                'സാധ്യതയുള്ള സംഭാവന ചെയ്യുന്നവരുമായി പങ്കാളിത്ത മാർഗ്ഗനിർദ്ദേശങ്ങൾ പങ്കിടുക.',
                'ഓപ്ഷണലായി, വർക്ക്‌ഷോപ്പുകൾ അല്ലെങ്കിൽ ഫോട്ടോവാക്കുകൾ പോലുള്ള ബോധവൽക്കരണ പ്രവർത്തനങ്ങൾ സംഘടിപ്പിക്കുക (ഞങ്ങൾക്ക് പിന്തുണ നൽകാൻ കഴിയും!).',
            ],
            sidebar: {
                title: 'ഇപ്പോൾ അപേക്ഷിക്കുക',
                description: 'ഒരു മാറ്റം വരുത്താൻ തയ്യാറാണോ? ഒരു ക്യാമ്പസ് അംബാസഡറാകാൻ ഫോം പൂരിപ്പിക്കുക.',
                deadline: 'അവസാന തീയതി: 31 ഓഗസ്റ്റ് 2025',
                cta: 'അപേക്ഷാ ഫോം തുറക്കുക'
            },
            cta: {
                text: 'ഒരു ക്യാമ്പസ് അംബാസഡറാകുക',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
            }
        },
        competition: {
            title: 'മത്സരത്തിന്റെ വിശദാംശങ്ങൾ',
            subtitle: 'പങ്കെടുക്കാനും വിജയിക്കാനും നിങ്ങൾ അറിയേണ്ടതെല്ലാം.',
            howToParticipate: {
                title: 'എങ്ങനെ പങ്കെടുക്കാം',
                p1: 'നിങ്ങൾക്ക് ഒരു വിക്കിമീഡിയ അക്കൗണ്ട് ഇല്ലെങ്കിൽ, നിങ്ങൾക്ക് ഒരു ഗ്ലോബൽ അക്കൗണ്ട് ഉണ്ടാക്കാം, അത് ലോഗിൻ ചെയ്യുമ്പോൾ എല്ലാ വിക്കിമീഡിയ പ്ലാറ്റ്‌ഫോമുകളിലും (വിക്കിമീഡിയ കോമൺസ് ഉൾപ്പെടെ) നിങ്ങൾക്ക് ഒരു പ്രത്യേക ഉപയോക്തൃനാമം നൽകും. പുതുതായി രജിസ്റ്റർ ചെയ്ത ഉപയോക്താവ് എന്ന നിലയിൽ, ഒരു വീഡിയോ ഫയൽ അപ്‌ലോഡ് ചെയ്യുന്നതിന് മുമ്പ് നിങ്ങൾ കുറഞ്ഞത് നാല് ദിവസമെങ്കിലും കാത്തിരിക്കേണ്ടതുണ്ട്, അതേസമയം ചിത്രങ്ങൾ രജിസ്ട്രേഷന് ശേഷം ഉടൻ തന്നെ അപ്‌ലോഡ് ചെയ്യാൻ കഴിയും.',
                createAccountLink: 'നിങ്ങളുടെ അക്കൗണ്ട് ഇവിടെ ഉണ്ടാക്കുക!',
                rulesTitle: 'പങ്കെടുക്കാനുള്ള നിയമങ്ങൾ',
                rules: [
                    'സമർപ്പിക്കലുകൾ നിങ്ങളുടെ സ്വന്തം സൃഷ്ടിയായിരിക്കണം, നിങ്ങളുടെ സ്വന്തം രജിസ്റ്റർ ചെയ്ത വിക്കിമീഡിയ അക്കൗണ്ടിൽ നിന്ന് അപ്‌ലോഡ് ചെയ്തതായിരിക്കണം. ഒന്നിലധികം രചയിതാക്കളുണ്ടെങ്കിൽ, എല്ലാ പേരുകളും നൽകണം.',
                    'ചിത്രങ്ങൾ ഒരു സ്വതന്ത്ര ലൈസൻസിന് (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) കീഴിലായിരിക്കണം.',
                    'എല്ലാ സമർപ്പിക്കലുകൾക്കും ഇംഗ്ലീഷിൽ വ്യക്തവും കൃത്യവുമായ ശാസ്ത്രീയ വിവരണം ആവശ്യമാണ്. മറ്റ് ഭാഷകളും സ്വാഗതം ചെയ്യുന്നു.',
                    {
                        text: 'സാധ്യമായ ഏറ്റവും ഉയർന്ന റെസല്യൂഷൻ (കുറഞ്ഞത് 2 മെഗാപിക്സൽ) അപ്‌ലോഡ് ചെയ്യുക. നിങ്ങൾക്ക് മെഗാപിക്സൽ എണ്ണം പരിശോധിക്കാം ',
                        link: {
                            url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                            label: 'ഇവിടെ'
                        }
                    },
                    'ചിത്രങ്ങളിൽ വാട്ടർമാർക്കുകൾ, ലോഗോകൾ, അല്ലെങ്കിൽ ചേർത്ത വാചകം/ഗ്രാഫിക്സ് (സ്കെയിലുകൾ ഒഴികെ) എന്നിവ അടങ്ങിയിരിക്കരുത്.',
                ]
            },
            keyDates: {
                title: 'പ്രധാന തീയതികൾ',
                timeline: [
                    { date: '1 നവംബർ 2025', event: 'സമർപ്പിക്കലുകൾ ആരംഭിക്കുന്നു' },
                    { date: '15 ഡിസംബർ 2025', event: 'സമർപ്പിക്കലുകൾ അവസാനിക്കുന്നു' },
                    { date: 'ജനുവരി 2026', event: 'വിധികർത്താക്കളുടെ ചർച്ച' },
                    { date: 'ഫെബ്രുവരി 2026', event: 'ദേശീയ വിജയികളെ പ്രഖ്യാപിക്കുന്നു' },
                ],
            },
            submitNow: 'ഇപ്പോൾ സമർപ്പിക്കുക',
            imageCategories: {
                title: 'ചിത്ര വിഭാഗങ്ങൾ',
                subtitle: 'നിങ്ങൾക്ക് താഴെ പറയുന്ന ഏഴ് വിഭാഗങ്ങളിൽ പങ്കെടുക്കാം. നിങ്ങളുടെ സൃഷ്ടിക്ക് ഏറ്റവും അനുയോജ്യമായത് തിരഞ്ഞെടുക്കുക. പ്രചോദനം ഉൾക്കൊള്ളാൻ താഴെയുള്ള ഉദാഹരണങ്ങൾ കാണുക.'
            },
            categories: {
                people: { name: 'ശാസ്ത്രത്തിലെ വ്യക്തികൾ', description: 'ശാസ്ത്രജ്ഞർ അവരുടെ സ്വാഭാവിക ചുറ്റുപാടിൽ.' },
                microscopy: { name: 'മൈക്രോസ്കോപ്പി ചിത്രങ്ങൾ', description: 'ഒപ്റ്റിക്കൽ, ഇലക്ട്രോൺ, സ്കാനിംഗ് പ്രോബ് മൈക്രോസ്കോപ്പി ചിത്രങ്ങൾ.' },
                nonPhotographic: { name: 'ഫോട്ടോഗ്രാഫിക് അല്ലാത്ത മീഡിയ', description: 'ഓഡിയോ, വീഡിയോ ഫയലുകൾ, കമ്പ്യൂട്ടർ നിർമ്മിത ചിത്രങ്ങൾ മുതലായവ.' },
                imageSets: { name: 'ചിത്രങ്ങളുടെ കൂട്ടം', description: 'ഒരു കൂട്ടമായി കാണാൻ കഴിയുന്ന വിഷയപരമായി ബന്ധപ്പെട്ട ചിത്രങ്ങൾ (10 വരെ).' },
                wildlife: { name: 'വന്യജീവികളും പ്രകൃതിയും', description: 'ജീവികൾ അവരുടെ സ്വാഭാവിക ആവാസവ്യവസ്ഥയിൽ, മാക്രോ ഫോട്ടോഗ്രാഫി ഉൾപ്പെടെ.' },
                astronomy: { name: 'ജ്യോതിശാസ്ത്രം', description: 'നക്ഷത്രങ്ങൾ, ആകാശ സംഭവങ്ങൾ, അവ പകർത്താൻ ഉപയോഗിക്കുന്ന ഉപകരണങ്ങൾ എന്നിവയുടെ ചിത്രങ്ങൾ.' },
                general: { name: 'പൊതു വിഭാഗം', description: 'പുരാവസ്തുശാസ്ത്രം മുതൽ അഗ്നിപർവ്വതശാസ്ത്രം വരെ മറ്റെല്ലാം.' },
            },
            readyToParticipate: {
                title: 'പങ്കെടുക്കാൻ തയ്യാറാണോ?',
                subtitle: 'വേദി ഒരുങ്ങി. നിങ്ങളുടെ ലെൻസാണ് താക്കോൽ. നിങ്ങളുടെ ശാസ്ത്രീയ കണ്ണുകളിലൂടെ ലോകത്തെ ഞങ്ങൾക്ക് കാണിച്ചുതരൂ.',
                cta: 'നിങ്ങളുടെ സൃഷ്ടി സമർപ്പിക്കുക',
            },
            supportedBy: 'പിന്തുണയ്ക്കുന്നത്:',
        },
        contact: {
            title: 'ഞങ്ങളെ ബന്ധപ്പെടുക',
            subtitle: 'ചോദ്യങ്ങളോ പ്രതികരണങ്ങളോ ഉണ്ടോ? നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു. ഞങ്ങൾ പെട്ടെന്നുള്ള മറുപടി വാഗ്ദാനം ചെയ്യുന്നു!',
            getInTouch: 'ബന്ധപ്പെടുക',
            p1: 'ഫോം പൂരിപ്പിക്കുക, ഞങ്ങളുടെ ടീം ഏതാനും മണിക്കൂറുകൾക്കുള്ളിൽ നിങ്ങളെ ബന്ധപ്പെടും. സഹായിക്കാൻ ഞങ്ങൾ ഇവിടെയുണ്ട്!',
            form: {
                name: 'പൂർണ്ണമായ പേര്',
                namePlaceholder: 'നിങ്ങളുടെ പേര്',
                email: 'ഇമെയിൽ വിലാസം',
                emailPlaceholder: 'your.email@example.com',
                subject: 'വിഷയം',
                subjectPlaceholder: 'നിങ്ങളുടെ ചോദ്യത്തിന് ഒരു വിഷയം തിരഞ്ഞെടുക്കുക',
                otherSubjectPlaceholder: 'ദയവായി നിങ്ങളുടെ വിഷയം വ്യക്തമാക്കുക',
                message: 'സന്ദേശം',
                messagePlaceholder: 'മുൻകൂട്ടി എഴുതിയ ഒരു സന്ദേശം തിരഞ്ഞെടുക്കുക അല്ലെങ്കിൽ \'മറ്റുള്ളവ...\'',
                otherMessagePlaceholder: 'ദയവായി നിങ്ങളുടെ സന്ദേശം വ്യക്തമാക്കുക',
                selectSubjectFirst: 'ദയവായി ആദ്യം ഒരു വിഷയം തിരഞ്ഞെടുക്കുക',
                submit: 'സന്ദേശം അയയ്‌ക്കുക',
                submitting: 'അയയ്ക്കുന്നു...',
            },
            toast: {
                successTitle: 'സന്ദേശം അയച്ചു!',
                successDescription: 'ഞങ്ങളെ ബന്ധപ്പെട്ടതിന് നന്ദി. ഞങ്ങൾ ഉടൻ തന്നെ നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.',
                errorTitle: 'പിശക്',
                errorDescription: 'എന്തോ കുഴപ്പം സംഭവിച്ചു. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
            }
        },
        organizers: {
            title: 'സംഘാടകരെ പരിചയപ്പെടാം',
            subtitle: 'ആദ്യത്തെ വിക്കി സയൻസ് മത്സരം ഇന്ത്യ ഒരു വലിയ വിജയമാക്കാൻ അണിയറയിൽ പ്രവർത്തിക്കുന്ന സമർപ്പിത ടീം.',
            lead_organizers: 'പ്രധാന സംഘാടകർ',
            advisors: 'ഉപദേശകർ',
            core_organizing_team: 'മുഖ്യ സംഘാടക സമിതി',
            team: [
                {
                    id: 'dev_jadiya',
                    name: 'ദേവ് ജാദിയ',
                    role: 'പ്രധാന സംഘാടകൻ',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'ഗൗരി ഗുപ്ത',
                    role: 'പ്രധാന സംഘാടക',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'സുയാഷ് ദ്വിവേദി',
                    role: 'ഉപദേശകൻ',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'സായ് കിരൺ',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'ചിന്മയി മിശ്ര',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: 'അതുൽ ആർ ടി',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'ഉദയ് ഡോംഗ്രെ',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'പങ്കജ് യാദവ്',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'അഷ്മിത ബാത്രെ',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'ആഞ്ചൽ പട്ടേൽ',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
                    name: 'റിദ്ധി ശർമ്മ',
                    role: 'മുഖ്യ സംഘാടക സമിതി',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
                }
            ]
        },
        organizersCall: {
            title: 'സംഘാടകർക്കുള്ള ക്ഷണം',
            subtitle: 'സ്വതന്ത്രമായി ലൈസൻസുള്ള ചിത്രങ്ങൾ, വീഡിയോകൾ, മറ്റ് മീഡിയ എന്നിവയിലൂടെ ശാസ്ത്രത്തെ പ്രോത്സാഹിപ്പിക്കുന്ന ഈ ആഗോള പ്രചാരണത്തിന്റെ സ്വന്തം പ്രാദേശിക പതിപ്പ് ഇന്ത്യ സംഘടിപ്പിക്കുമെന്ന് പങ്കുവെക്കുന്നതിൽ ഞങ്ങൾക്ക് സന്തോഷമുണ്ട്.',
            joinHeading: 'സംഘാടക ടീമിൽ ചേരുക',
            joinDescription: 'സുഗമമായ ഏകോപനം, ഔട്ട്‌റീച്ച്, ആസൂത്രണം എന്നിവയെ പിന്തുണയ്ക്കുന്നതിനായി, ഞങ്ങൾ ഞങ്ങളുടെ സംഘാടക ടീമിനെ വികസിപ്പിക്കുകയാണ്. ഈ സുപ്രധാന സംരംഭത്തിൽ സംഭാവന നൽകാൻ നിങ്ങൾക്ക് താൽപ്പര്യമുണ്ടെങ്കിൽ, നിങ്ങളിൽ നിന്ന് കേൾക്കാൻ ഞങ്ങൾ ആഗ്രഹിക്കുന്നു.',
            lookingForHeading: 'ഞങ്ങൾ എന്താണ് തിരയുന്നത്',
            lookingFor: [
                'ശാസ്ത്രം, ഫോട്ടോഗ്രാഫി, അല്ലെങ്കിൽ തുറന്ന അറിവ് എന്നിവയിൽ താൽപ്പര്യമുള്ള ആവേശഭരിതരായ വ്യക്തികൾ.',
                'ഇവന്റ് ആസൂത്രണം, ഔട്ട്‌റീച്ച്, സോഷ്യൽ മീഡിയ മാനേജ്മെന്റ്, അല്ലെങ്കിൽ ഉള്ളടക്ക നിർമ്മാണം എന്നിവയിലെ കഴിവുകൾ.',
                'ഒരു സഹകരണ മനോഭാവവും കാര്യമായ സ്വാധീനം ചെലുത്താനുള്ള ആഗ്രഹവും.',
            ],
            sidebarTitle: 'ഇപ്പോൾ അപേക്ഷിക്കുക',
            sidebarDescription: 'ഇന്ത്യയിലെ ആദ്യത്തെ വിക്കി സയൻസ് മത്സരം രൂപപ്പെടുത്താൻ ഞങ്ങളെ സഹായിക്കുക.',
            deadline: 'അപേക്ഷകൾ അവസാനിച്ചു: 15 ജൂലൈ 2025',
            cta: 'അപേക്ഷകൾ അവസാനിച്ചു'
        },
        resources: {
            title: 'വിഭവങ്ങൾ',
            subtitle: 'കഴിഞ്ഞ വിജയികളിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊള്ളുകയും നിങ്ങളുടെ സമർപ്പണം തയ്യാറാക്കാൻ സഹായകമായ സാമഗ്രികൾ ആക്സസ് ചെയ്യുകയും ചെയ്യുക.',
            pastWinners: {
                title: 'കഴിഞ്ഞ വിജയികളുടെ ഗാലറി',
                winnerLabel: 'വിജയി',
                winners: [
                    { year: 2023, category: 'ജ്യോതിശാസ്ത്രം', winner: 'അഞ്ജലി ശർമ്മ' },
                    { year: 2023, category: 'ബയോളജി', winner: 'രോഹൻ മേത്ത' },
                    { year: 2022, category: 'കെമിസ്ട്രി', winner: 'പ്രിയ ദേശായി' },
                    { year: 2022, category: 'ജ്യോതിശാസ്ത്രം', winner: 'വിക്രം സിംഗ്' },
                ]
            },
            learningMaterials: {
                title: 'പഠന സാമഗ്രികൾ',
                cta: 'കൂടുതലറിയുക',
                resources: [
                    { title: 'ശാസ്ത്ര ഫോട്ടോഗ്രാഫിക്കുള്ള വഴികാട്ടി', description: 'അതിശയകരമായ ശാസ്ത്രീയ ചിത്രങ്ങൾ പകർത്തുന്നതിന്റെ അടിസ്ഥാനകാര്യങ്ങൾ പഠിക്കുക.', link: '#' },
                    { title: 'ക്രിയേറ്റീവ് കോമൺസ് മനസ്സിലാക്കൽ', description: 'മത്സരത്തിനായി നിങ്ങളുടെ സൃഷ്ടിക്ക് ലൈസൻസ് നൽകുന്നതിനുള്ള ഒരു ദ്രുത ഗൈഡ്.', link: '#' },
                    { title: 'ചിത്രം അപ്‌ലോഡ് ട്യൂട്ടോറിയൽ', description: 'നിങ്ങളുടെ ഫോട്ടോകൾ എങ്ങനെ സമർപ്പിക്കാം എന്നതിനെക്കുറിച്ചുള്ള ഘട്ടം ഘട്ടമായുള്ള വീഡിയോ.', link: '#' },
                ]
            }
        },
        support: {
            title: 'ഞങ്ങളെ പിന്തുണയ്ക്കുക',
            subtitle: 'വിക്കി സയൻസ് മത്സരം ഇന്ത്യ 2025 ഒരു വലിയ വിജയമാക്കാൻ ഞങ്ങളെ സഹായിക്കുക.',
            options: [
                {
                    id: 'sponsorship',
                    icon: 'Handshake',
                    title: 'ഒരു സ്പോൺസർ ആകുക',
                    description: 'പ്രവർത്തനച്ചെലവുകൾ, സമ്മാനത്തുക, ഇവന്റ് മാനേജ്മെന്റ് എന്നിവയ്ക്കായി സാമ്പത്തിക സംഭാവനകളോടെ ഞങ്ങളെ പിന്തുണയ്ക്കുക. പ്രമുഖ ബ്രാൻഡിംഗ് അവസരങ്ങളുള്ള വിവിധ സ്പോൺസർഷിപ്പ് തട്ടുകൾ ഞങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.',
                    cta: 'സ്പോൺസർഷിപ്പിനായി ബന്ധപ്പെടുക',
                },
                {
                    id: 'gifts',
                    icon: 'Gift',
                    title: 'സമ്മാനങ്ങളും സ്വഗും നൽകുക',
                    description: 'ഞങ്ങളുടെ വിജയികൾക്കും പങ്കാളികൾക്കും ആവേശകരമായ സമ്മാനങ്ങൾ, വൗച്ചറുകൾ, അല്ലെങ്കിൽ ബ്രാൻഡഡ് ഉൽപ്പന്നങ്ങൾ (സ്വഗ്) എന്നിവ ഉപയോഗിച്ച് ഞങ്ങളുടെ സമ്മാന ശേഖരത്തിലേക്ക് സംഭാവന ചെയ്യുക. നിങ്ങളുടെ ബ്രാൻഡ് ശാസ്ത്ര താൽപ്പര്യമുള്ളവരുടെ കൈകളിൽ എത്തിക്കുക.',
                    cta: 'സമ്മാനങ്ങൾ വാഗ്ദാനം ചെയ്യുക',
                },
                {
                    id: 'outreach',
                    icon: 'Megaphone',
                    title: 'ഔട്ട്‌റീച്ചും മാർക്കറ്റിംഗും',
                    description: 'വിവരം പ്രചരിപ്പിക്കാൻ ഞങ്ങളുമായി സഹകരിക്കുക. നിങ്ങളുടെ സ്ഥാപനപരമായ ചാനലുകൾ, സോഷ്യൽ മീഡിയ, അല്ലെങ്കിൽ മാർക്കറ്റിംഗ് വൈദഗ്ദ്ധ്യം എന്നിവയിലൂടെ വിശാലമായ പ്രേക്ഷകരിലേക്ക് എത്താൻ ഞങ്ങളെ സഹായിക്കുക.',
                    cta: 'ഔട്ട്‌റീച്ചിൽ സഹകരിക്കുക',
                },
            ]
        },
        home: {
            autoscroll: {
                slides: [
                    { id: 1, title: 'സൂക്ഷ്മ ലോകങ്ങൾ പര്യവേക്ഷണം ചെയ്യുക', description: 'കോശ ഘടനകൾ മുതൽ ക്രിസ്റ്റൽ രൂപങ്ങൾ വരെ, കാണാത്ത സൗന്ദര്യം പ്രദർശിപ്പിക്കുക.' },
                    { id: 2, title: 'ആകാശ വിസ്മയങ്ങൾ പകർത്തുക', description: 'പ്രപഞ്ചം നിങ്ങളുടെ ക്യാൻവാസാണ്. ഗാലക്സികൾ, നെബുലകൾ, ഗ്രഹ സംഭവങ്ങൾ എന്നിവ ഫോട്ടോയെടുക്കുക.' },
                    { id: 3, title: 'സങ്കീർണ്ണമായ ഡാറ്റ ദൃശ്യവൽക്കരിക്കുക', description: 'റോ ഡാറ്റയെ ആകർഷകമായ ശാസ്ത്രീയ ദൃശ്യവൽക്കരണങ്ങളും ഇൻഫോഗ്രാഫിക്സുമായി മാറ്റുക.' },
                    { id: 4, title: 'മനുഷ്യന്റെ ചാതുര്യം രേഖപ്പെടുത്തുക', description: 'പ്രവർത്തിക്കുന്ന ശാസ്ത്രജ്ഞർ, നൂതന ലാബ് ഉപകരണങ്ങൾ, കണ്ടെത്തലിന്റെ നിമിഷങ്ങൾ എന്നിവ പകർത്തുക.' },
                ]
            },
            cta: {
                title: 'പങ്കാളിയാകുക',
                subtitle: 'ഇന്ത്യയുടെ ആദ്യത്തെ ദേശീയ വിക്കി സയൻസ് മത്സരത്തിന്റെ ഭാഗമാകുക. ഞങ്ങളോടൊപ്പം ചേരാൻ ആവേശഭരിതരായ വ്യക്തികളെയും സംഘടനകളെയും ഞങ്ങൾ തിരയുന്നു.',
                campus: {
                    title: 'ക്യാമ്പസ് അംബാസഡർമാർക്കുള്ള ക്ഷണം',
                    description: 'നിങ്ങളുടെ സ്ഥാപനത്തിൽ പ്രചാരണം പ്രോത്സാഹിപ്പിക്കുക, മാർഗ്ഗനിർദ്ദേശങ്ങൾ പങ്കിടുക, ബോധവൽക്കരണ പ്രവർത്തനങ്ങൾ സംഘടിപ്പിക്കാൻ സഹായിക്കുക.',
                    deadline: 'അവസാന തീയതി: 31 ഓഗസ്റ്റ് 2025',
                    cta: 'ഇപ്പോൾ അപേക്ഷിക്കുക'
                },
                affiliates: {
                    title: 'വിക്കിമീഡിയ അഫിലിയേറ്റുകൾക്കുള്ള ക്ഷണം',
                    description: 'പ്രചാരണം പ്രോത്സാഹിപ്പിക്കുന്നതിനും, പ്രാദേശിക ഔട്ട്‌റീച്ച് സംഘടിപ്പിക്കുന്നതിനും, നിങ്ങളുടെ പ്രദേശത്ത് നിന്ന് സ്വാധീനമുള്ള ശാസ്ത്രീയ സംഭാവനകൾ കൊണ്ടുവരാൻ സഹായിക്കുന്നതിനും ഞങ്ങളുമായി പങ്കാളികളാകുക.',
                    deadline: 'അവസാന തീയതി: 31 ഓഗസ്റ്റ് 2025',
                    cta: 'ഞങ്ങളുമായി പങ്കാളിയാകൂ'
                }
            },
            info: {
                title: 'നിങ്ങൾ അറിയേണ്ടതെല്ലാം',
                subtitle: 'സമർപ്പണ മാർഗ്ഗനിർദ്ദേശങ്ങൾ മുതൽ ജൂറി വിശദാംശങ്ങൾ വരെ, ഈ ആവേശകരമായ ഇവന്റിന്റെ ഭാഗമാകാൻ ആവശ്യമായ എല്ലാ വിവരങ്ങളും നേടുക.',
                cta: 'കൂടുതലറിയുക',
                sections: [
                    { icon: 'Info', title: 'മത്സരത്തെക്കുറിച്ച്', description: 'ഒരു വാർഷിക അന്താരാഷ്ട്ര ശാസ്ത്ര ഫോട്ടോഗ്രാഫി മത്സരം, ഗവേഷണ ലോകത്തെക്കുറിച്ചുള്ള അവരുടെ കാഴ്ചപ്പാട് പങ്കിടാൻ ശാസ്ത്ര താൽപ്പര്യമുള്ളവരെ ഒരുമിപ്പിക്കുന്നു.', link: '/about' },
                    { icon: 'Target', title: 'എങ്ങനെ പങ്കെടുക്കാം', description: 'പങ്കാളിത്തം സൗജന്യവും എല്ലാവർക്കുമായി തുറന്നതുമാണ്. സമർപ്പണ കാലയളവിൽ വിവിധ വിഭാഗങ്ങളിലായി നിങ്ങളുടെ മികച്ച ശാസ്ത്ര-ബന്ധിത ചിത്രങ്ങൾ സമർപ്പിക്കുക.', link: '/competition' },
                    { icon: 'Award', title: 'സമ്മാനങ്ങളും അംഗീകാരവും', description: 'വിജയികൾക്ക് ദേശീയ അംഗീകാരം, സർട്ടിഫിക്കറ്റുകൾ, സമ്മാനങ്ങൾ എന്നിവ ലഭിക്കും. മികച്ച ചിത്രങ്ങൾ അന്താരാഷ്ട്ര ഫൈനലിലേക്കും മുന്നേറും.', link: '/competition' },
                    { icon: 'Users', title: 'വിധികർത്താക്കളും മാനദണ്ഡങ്ങളും', description: 'ഞങ്ങളുടെ ശാസ്ത്രജ്ഞരുടെയും ഫോട്ടോഗ്രാഫർമാരുടെയും വിദഗ്ദ്ധ ജൂറി ശാസ്ത്രീയ മൂല്യം, മൗലികത, സൗന്ദര്യാത്മക ഗുണനിലവാരം എന്നിവയുടെ അടിസ്ഥാനത്തിൽ എൻട്രികൾ വിലയിരുത്തും.', link: '/jury' },
                    { icon: 'History', title: 'കഴിഞ്ഞ വിജയികൾ', description: 'മുൻ വർഷങ്ങളിലെ വിജയിച്ച ഫോട്ടോഗ്രാഫുകളുടെ ഒരു ഗാലറി പര്യവേക്ഷണം ചെയ്യുകയും പ്രദർശിപ്പിച്ച അവിശ്വസനീയമായ കഴിവുകളിൽ നിന്ന് പ്രചോദനം ഉൾക്കൊള്ളുകയും ചെയ്യുക.', link: '/resources' }
                ],
                finalCard: {
                    title: 'പങ്കെടുക്കാൻ തയ്യാറാണോ?',
                    subtitle: 'വേദി ഒരുങ്ങി. നിങ്ങളുടെ ലെൻസാണ് താക്കോൽ. നിങ്ങളുടെ ശാസ്ത്രീയ കണ്ണുകളിലൂടെ ലോകത്തെ ഞങ്ങൾക്ക് കാണിച്ചുതരൂ.',
                    cta: 'നിങ്ങളുടെ സൃഷ്ടി സമർപ്പിക്കുക'
                }
            },
            prizes: {
                title: 'സമ്മാനങ്ങളും അംഗീകാരവും',
                subtitle: 'നിങ്ങളുടെ തകർപ്പൻ ദൃശ്യങ്ങൾ ആഘോഷിക്കപ്പെടേണ്ടതാണ്. നിങ്ങൾക്ക് എന്ത് നേടാനാകുമെന്ന് കണ്ടെത്തുക.',
                prizes: [
                    { icon: 'Award', title: "ദേശീയ അംഗീകാരം", description: "വിജയികളെ ഞങ്ങളുടെ ഔദ്യോഗിക പ്ലാറ്റ്‌ഫോമുകളിൽ ആഘോഷിക്കുകയും ദേശീയ മാധ്യമ കവറേജ് നേടുകയും ചെയ്യും." },
                    { icon: 'Camera', title: "മുന്തിയ ഉപകരണങ്ങൾ", description: "മികച്ച വിജയികൾക്ക് അവരുടെ അഭിനിവേശത്തെ സഹായിക്കുന്നതിന് ആവേശകരമായ ഫോട്ടോഗ്രാഫി ഗിയറും ആക്സസറികളും." },
                    { icon: 'BookOpen', title: "പ്രസിദ്ധീകരണത്തിൽ ഇടം", description: "നിങ്ങളുടെ സൃഷ്ടി പ്രശസ്തമായ ശാസ്ത്ര മാസികകളിലും പ്രസിദ്ധീകരണങ്ങളിലും ഫീച്ചർ ചെയ്യുക." }
                ]
            },
            jury: {
                title: 'ബഹുമാനപ്പെട്ട വിധികർത്താക്കളെ പരിചയപ്പെടാം',
                description: 'ഞങ്ങളുടെ പാനലിൽ ഇന്ത്യയിലുടനീളമുള്ള പ്രശസ്തരായ ശാസ്ത്രജ്ഞർ, പ്രൊഫഷണൽ ഫോട്ടോഗ്രാഫർമാർ, ശാസ്ത്ര ആശയവിനിമയക്കാർ എന്നിവരുടെ ഒരു വൈവിധ്യമാർന്ന സംഘം ഉൾപ്പെടുന്നു. ന്യായവും ഉൾക്കാഴ്ചയുമുള്ള ഒരു മൂല്യനിർണ്ണയ പ്രക്രിയ ഉറപ്പാക്കാൻ അവർ ധാരാളം അനുഭവം കൊണ്ടുവരുന്നു.',
                cta: 'മുഴുവൻ പാനലും കാണുക'
            }
        }
    },
    ta: {
        mainNavLinks: [
            { name: 'பற்றி', href: '/about' },
            { name: 'போட்டி', href: '/competition' },
            { name: 'வளங்கள்', href: '/resources' },
            { name: 'விளம்பரதாரர்கள்', href: '/sponsors' },
        ],
        organizerLinks: [
            { name: 'அணியைச் சந்திக்கவும்', href: '/organizers' },
            { name: 'வளாகத் தூதர்கள்', href: '/campus-ambassadors' },
            { name: 'அணிக்கான அழைப்பு', href: '/organizers/call' },
        ],
        moreDropdownLinks: [
            { name: 'நடுவர் குழு', href: '/jury' },
            { name: 'எங்களை ஆதரியுங்கள்', href: '/support-us' },
            { name: 'தொடர்புக்கு', href: '/contact' },
        ],
        learningLinks: [
            { name: 'விக்கி கணக்கை உருவாக்குவது எப்படி', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Account' },
            { name: 'பதிவேற்ற வழிகாட்டியைப் பயன்படுத்துவது எப்படி', href: 'https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard' },
            { name: 'CC உரிமங்களைப் புரிந்துகொள்வது', href: 'https://commons.wikimedia.org/wiki/Commons:Licensing' },
            { name: 'பகுப்புகளைச் சேர்ப்பது எப்படி', href: 'https://commons.wikimedia.org/wiki/Help:Categories' },
        ],
        organizersDropdown: 'ஏற்பாட்டாளர்கள்',
        moreDropdown: 'மேலும்',
        learningDropdown: 'கற்றல்',
        participateButton: 'பங்கேற்க',
        footerNavLinks: [
            { name: 'பற்றி', href: '/about' },
            { name: 'போட்டி', href: '/competition' },
            { name: 'நடுவர் குழு', href: '/jury' },
            { name: 'ஏற்பாட்டாளர்கள்', href: '/organizers' },
            { name: 'விளம்பரதாரர்கள்', href: '/sponsors' },
            { name: 'வளங்கள்', href: '/resources' },
            { name: 'வளாகத் தூதர்கள்', href: '/campus-ambassadors' },
            { name: 'தொடர்புக்கு', href: '/contact' },
        ],
        footerSupportLinks: [
            { name: 'விளம்பரதாரர்', href: '/support-us#sponsorship' },
            { name: 'பரிசுகள்/நினைவுப் பொருட்கள்', href: '/support-us#gifts' },
            { name: 'அறிமுகம் செய்தல்', href: '/support-us#outreach' },
        ],
        footerSubtitle: 'புகைப்படம் எடுத்தல் மூலம் அறிவியலின் அழகைப் படம்பிடித்தல்.',
        footerNavHeader: 'வழிசெலுத்தல்',
        footerSupportHeader: 'எங்களை ஆதரியுங்கள்',
        footerContactHeader: 'தொடர்புக்கு',
        footerCopyright: 'விக்கி அறிவியல் போட்டி இந்தியா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
        footerLicense: 'வேறுவிதமாகக் குறிப்பிடப்பட்டாலன்றி, உள்ளடக்கம் CC BY-SA 4.0 உரிமத்தின் கீழ் கிடைக்கும்.',
        footerDeveloperCredit: 'வடிவமைத்து உருவாக்கியவர்கள்',
        about: {
            title: 'விக்கி அறிவியல் இந்தியா 2025 பற்றி',
            badge: 'இந்தியச் சூழலுக்கான அறிமுகம்',
            heading: 'விக்கி அறிவியல் போட்டி 2025 – இந்தியா',
            p1: 'முதல் முறையாக, இந்தியா விக்கி அறிவியல் போட்டியின் (WSC) தேசியப் பதிப்பை ஏற்பாடு செய்கிறது — இது அறிவியல், புகைப்படம் எடுத்தல் மற்றும் இலவச அறிவை ஒன்றிணைக்கும் உலகின் மிகப்பெரிய முயற்சிகளில் ஒன்றாகும்.',
            p2: '2011 இல் எசுத்தோனியாவில் தொடங்கப்பட்டு பின்னர் ஐரோப்பா மற்றும் உலகளவில் விரிவுபடுத்தப்பட்ட இந்தப் போட்டி, அறிவியலின் அதிசயத்தைப் படம்பிடிக்கும் படங்களைப் பகிர ஆயிரக்கணக்கான விஞ்ஞானிகள், ஆராய்ச்சியாளர்கள் மற்றும் ஆர்வலர்களை ஊக்குவித்துள்ளது. நுண்ணிய உயிரணுக்கள் முதல் அண்டவெளிக் கோள்கள் வரை, இந்த இலவச உரிமம் பெற்ற பங்களிப்புகள் விக்கிமீடியா காமன்ஸை வளப்படுத்துகின்றன மற்றும் உலகளவில் திறந்த கல்வியை ஆதரிக்கின்றன.',
            p3: 'கடந்தகால சர்வதேசப் பதிப்புகளில் இந்தியா பெருமையுடன் பங்களித்துள்ளது — இந்தியப் புகைப்படக் கலைஞர்கள் மற்றும் விஞ்ஞானிகள் அங்கீகாரம் மற்றும் விருதுகளைப் பெற்றுள்ளனர். இருப்பினும், நமது நாட்டின் அறிவியல் உணர்வையும் படைப்பாற்றலையும் வெளிப்படுத்த அர்ப்பணிக்கப்பட்ட தனது சொந்த உள்ளூர் போட்டியை இந்தியா நடத்துவது இதுவே முதல் முறை.',
            p4: 'விக்கி அறிவியல் போட்டி 2025 – இந்தியா ஒரு போட்டியை விட மேலானது. இது சக்திவாய்ந்த படங்கள், கதைகள் மற்றும் படைப்பாற்றல் மூலம் இந்திய அறிவியலை உலகிற்கு பிரதிநிதித்துவப்படுத்தும் ஒரு கூட்டு முயற்சியாகும்.',
            aims: {
                title: 'எங்கள் நோக்கங்கள்',
                subtitle: 'இந்தப் பிரச்சாரத்தின் மூலம், நாங்கள் இலக்கு வைப்பது:',
                items: [
                    { icon: 'PenSquare', title: 'பங்களிப்பை ஊக்குவித்தல்', description: 'இந்தியா முழுவதும் உள்ள மாணவர்கள், ஆராய்ச்சியாளர்கள் மற்றும் ஆர்வலர்களை மதிப்புமிக்க அறிவியல் ஊடகங்களைப் பங்களிக்க ஊக்குவித்தல்.' },
                    { icon: 'Lightbulb', title: 'விழிப்புணர்வை உருவாக்குதல்', description: 'திறந்த அறிவியல் மற்றும் இலவச அறிவின் முக்கியத்துவம் பற்றிய விழிப்புணர்வை உருவாக்குதல்.' },
                    { icon: 'Globe', title: 'பாரம்பரியத்தைக் கொண்டாடுதல்', description: 'இந்தியாவின் வளமான அறிவியல் பாரம்பரியம் மற்றும் தற்போதைய புதுமைகளைக் கொண்டாடுதல்.' },
                    { icon: 'Handshake', title: 'ஒத்துழைப்பை வலுப்படுத்துதல்', description: 'விக்கிமீடியா சமூகங்கள், பல்கலைக்கழகங்கள், ஆராய்ச்சி நிறுவனங்கள் மற்றும் அமைப்புகளுக்கு இடையேயான ஒத்துழைப்பை வலுப்படுத்துதல்.' }
                ]
            },
            supportingOrg: {
                title: 'ஆதரவு அமைப்பு',
                p1: 'விக்கி கிளப் SATI (விதிஷா, மத்தியப் பிரதேசம்) இந்தியாவில் விக்கி அறிவியல் போட்டி 2025-இன் முதல் தேசியப் பதிப்பிற்கான ஆதரவு அமைப்பாக அங்கீகரிக்கப்பட்டுள்ளது. இந்த கிளப் மாணவர்கள் மற்றும் இளம் நிபுணர்களை விக்கிமீடியா இயக்கத்தில் ஈடுபடுத்துவதில் முன்னணியில் உள்ளது, திறந்த அறிவு, தொழில்நுட்ப கண்டுபிடிப்பு மற்றும் சமூகத்தால் வழிநடத்தப்படும் முயற்சிகளுக்கு பங்களிக்கிறது.',
                p2: 'முக்கிய ஏற்பாட்டுக் குழுவின் பல உறுப்பினர்கள் விக்கி கிளப் SATI-யுடன் தொடர்புடையவர்கள், மேலும் அவர்களின் தொடர்ச்சியான ஈடுபாடு இலவச அறிவு மற்றும் அறிவியல் ஈடுபாட்டை முன்னெடுப்பதில் கிளப்பின் அர்ப்பணிப்பைப் பிரதிபலிக்கிறது. ஆதரவு நிதி அல்லாததாக இருந்தாலும், விக்கி கிளப் SATI-யின் நிறுவனத் திறன், அனுபவம் மற்றும் சமூக வலைப்பின்னல்கள் தேசிய அளவில் இந்தப் பிரச்சாரத்தை செயல்படுத்துவதில் முக்கியப் பங்கு வகிக்கின்றன.'
            }
        },
        campusAmbassadors: {
            title: 'வளாகத் தூதர்கள்',
            subtitle: 'தங்கள் சமூகங்களில் விக்கி அறிவியல் போட்டியை முன்னெடுத்துச் செல்லும் ஆர்வமுள்ள தலைவர்களைச் சந்திக்கவும்.',
            ambassadors: [
                {
                    name: 'அனுஷ்கா படேல்',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Anushka10patel',
                    description: 'விக்கி கிளப் SATI',
                    boardLink: {
                        name: 'விக்கி கிளப் SATI',
                        url: 'https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members',
                    },
                },
                {
                    name: 'நீச்சல்காரன்',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Neechalkaran',
                    description: 'தமிழ்நாட்டைச் சேர்ந்த விக்கிப்பீடியர் மற்றும் கணினிமொழியியலாளர்',
                },
                {
                    name: 'சந்தோஷ் நோட்டகர்',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg',
                    meta: 'https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99',
                    description: 'துறைத் தலைவர் மற்றும் உதவிப் பேராசிரியர், கணினி அனிமேஷன் துறை, புனித அலோசியஸ்',
                    wikipedia: 'https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru',
                },
                {
                    name: 'சாமியா அகமது',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Khanahmedsam',
                    description: 'தியோபந்த் சமூகம்',
                    boardLink: {
                        name: 'தியோபந்த் சமூகம்',
                        url: 'https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia',
                    },
                },
                {
                    name: 'சதீஷ் எம்',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    description: 'தற்போது கன்னியாகுமரி மாவட்டத்தில் தகவல் தொழில்நுட்பம் மற்றும் கண்காணிப்பு திட்டங்களைச் செய்து வருகிறார்',
                },
                {
                    name: 'கார்த்திக் சிவராம்',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Kaartic',
                    description: 'தமிழ் விக்கிப்பீடியர், மென்பொருள் பொறியாளர்',
                },
                {
                    name: 'ஒசாமா',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png',
                    meta: 'https://meta.wikimedia.org/wiki/User:Osama_Abdullah',
                    description: 'விக்கிப்பீடியர்',
                },
            ]
        },
        affiliates: {
            title: 'விக்கிமீடியா துணை நிறுவனங்களுக்கான அழைப்பு',
            subtitle: 'விக்கி அறிவியல் போட்டி 2025-ஐ ஊக்குவிக்கவும் ஆதரிக்கவும் இந்தியா முழுவதிலும் உள்ள விக்கிமீடியா துணை நிறுவனங்கள், பயனர் குழுக்கள் மற்றும் அமைப்புகளை எங்களுடன் ஒத்துழைக்க அழைக்கிறோம்.',
            partnerHeading: 'எங்களுடன் ஏன் கூட்டு சேர வேண்டும்?',
            partnerDescription: 'அறிவியலைக் கொண்டாடுவதற்கும் விக்கிமீடியா காமன்ஸை இலவசமாக உரிமம் பெற்ற ஊடகங்களுடன் வளப்படுத்துவதற்கும் இது ஒரு தனித்துவமான வாய்ப்பு. ஒரு கூட்டாளராக, உங்கள் குழு இந்தியாவின் முதல் தேசிய விக்கி அறிவியல் போட்டியை வெற்றியடையச் செய்வதில் முக்கியப் பங்காற்ற முடியும்.',
            collaborationHeading: 'நீங்கள் எப்படி ஒத்துழைக்கலாம்',
            collaborationPoints: [
                'உங்கள் வலைப்பின்னல்களுக்கு ஆன்லைன் மற்றும் ஆஃப்லைன் முறையில் அறிமுகம் செய்வதில் ஈடுபடுங்கள்.',
                'நிறுவனங்கள் மற்றும் ஆராய்ச்சி அமைப்புகளிலிருந்து பதிவேற்றங்களை எளிதாக்குங்கள்.',
                'உள்ளூர் பட்டறைகள், திருத்தப் பணிகள் அல்லது புகைப்பட நடைகளை ஏற்பாடு செய்யுங்கள்.',
                'பிரச்சாரப் பொருட்களின் மொழிபெயர்ப்பு மற்றும் உள்ளூர்மயமாக்கலுக்கு உதவுங்கள்.',
            ],
            formNote: 'இந்த படிவம் அங்கீகரிக்கப்பட்ட விக்கிமீடியா துணை நிறுவனங்கள் அல்லது சமூக குழுக்களுக்கானது. தனிநபர்கள் மற்றும் மாணவர்கள் பயன்படுத்த வேண்டியது',
            campusAmbassadorLink: 'வளாகத் தூதர் படிவம்',
            sidebarTitle: 'எங்களுடன் கூட்டு சேருங்கள்',
            sidebarDescription: 'இந்தியாவின் அறிவியல் நிலப்பரப்பை உலகிற்கு வெளிப்படுத்த ஒத்துழைப்போம்.',
            deadline: 'கடைசி தேதி: 31 ஆகஸ்ட் 2025',
            cta: 'கூட்டாண்மைப் படிவத்தைத் திறக்கவும்'
        },
        campus: {
            title: 'வளாகத் தூதர்களுக்கான அழைப்பு',
            subtitle: 'உங்கள் நிறுவனம், சமூகம் அல்லது வலையமைப்பில் விக்கி அறிவியல் போட்டி 2025-ஐ ஊக்குவிக்க உதவும் உள்ளூர் அறிமுக ஒருங்கிணைப்பாளராக எங்களுடன் சேருங்கள்.',
            whoHeading: 'நாங்கள் யாரைத் தேடுகிறோம்?',
            whoDescription: 'வளாகத் தூதர்கள் விழிப்புணர்வைப் பரப்புவதிலும், பங்கேற்பாளர்களுக்கு வழிகாட்டுவதிலும், விருப்பப்பட்டால் விழிப்புணர்வு அமர்வுகள் அல்லது பட்டறைகளை ஏற்பாடு செய்வதிலும் முக்கியப் பங்கு வகிக்கின்றனர். நீங்கள் ஒரு விக்கிமீடியர், அறிவியல் மாணவர், வடிவமைப்பாளர், ஆசிரியர் அல்லது திறந்த அறிவியலில் ஆர்வமுள்ளவராக இருந்தாலும் சரி - நாங்கள் உங்களை எங்கள் குழுவில் சேர்க்க விரும்புகிறோம்!',
            responsibilitiesHeading: 'பொறுப்புகள்',
            responsibilities: [
                'உங்கள் நிறுவனம் அல்லது சமூகத்தில் பிரச்சாரத்தை ஊக்குவிக்கவும்.',
                'பங்கேற்பு வழிகாட்டுதல்களை சாத்தியமான பங்களிப்பாளர்களுடன் பகிரவும்.',
                'விருப்பப்பட்டால், பட்டறைகள் அல்லது புகைப்பட நடைகள் போன்ற விழிப்புணர்வு நடவடிக்கைகளை ஏற்பாடு செய்யுங்கள் (நாங்கள் ஆதரவளிக்க முடியும்!).',
            ],
            sidebar: {
                title: 'இப்போதே விண்ணப்பிக்கவும்',
                description: 'ஒரு தாக்கத்தை ஏற்படுத்தத் தயாரா? வளாகத் தூதராக மாற படிவத்தை நிரப்பவும்.',
                deadline: 'கடைசி தேதி: 31 ஆகஸ்ட் 2025',
                cta: 'விண்ணப்பப் படிவத்தைத் திறக்கவும்'
            },
            cta: {
                text: 'ஒரு வளாகத் தூதராகுங்கள்',
                href: 'https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform'
            }
        },
        competition: {
            title: 'போட்டி விவரங்கள்',
            subtitle: 'பங்கேற்று வெற்றி பெற நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.',
            howToParticipate: {
                title: 'பங்கேற்பது எப்படி',
                p1: 'உங்களிடம் கணக்கு இல்லையென்றால், நீங்கள் ஒரு உலகளாவிய கணக்கை உருவாக்கலாம், இது நீங்கள் உள்நுழையும்போது அனைத்து விக்கிமீடியா தளங்களிலும் (விக்கிமீடியா காமன்ஸ் உட்பட) ஒரு குறிப்பிட்ட பயனர் பெயரை உங்களுக்கு வழங்கும். புதிதாகப் பதிவுசெய்த பயனராக, ஒரு வீடியோ கோப்பைப் பதிவேற்றுவதற்கு முன்பு நீங்கள் குறைந்தது நான்கு நாட்கள் காத்திருக்க வேண்டும், அதே நேரத்தில் படங்களை பதிவுசெய்த உடனேயே பதிவேற்றலாம்.',
                createAccountLink: 'உங்கள் கணக்கை இங்கே உருவாக்கவும்!',
                rulesTitle: 'பங்கேற்பு விதிகள்',
                rules: [
                    'சமர்ப்பிப்புகள் உங்கள் சொந்தப் படைப்பாக இருக்க வேண்டும், உங்கள் சொந்தப் பதிவு செய்யப்பட்ட விக்கிமீடியா கணக்கிலிருந்து பதிவேற்றப்பட வேண்டும். பல ஆசிரியர்கள் இருந்தால், அனைத்து பெயர்களும் வழங்கப்பட வேண்டும்.',
                    'படங்கள் ஒரு இலவச உரிமத்தின் கீழ் இருக்க வேண்டும் (CC BY-SA 4.0, CC BY 4.0, CC0 1.0).',
                    'அனைத்து சமர்ப்பிப்புகளுக்கும் ஆங்கிலத்தில் தெளிவான மற்றும் துல்லியமான அறிவியல் விளக்கம் தேவை. பிற மொழிகளும் வரவேற்கப்படுகின்றன.',
                    {
                        text: 'முடிந்தவரை அதிக தெளிவுத்திறனில் (குறைந்தது 2 மெகாபிக்சல்கள்) பதிவேற்றவும். நீங்கள் மெகாபிக்சல் எண்ணிக்கையை சரிபார்க்கலாம் ',
                        link: {
                            url: 'https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594',
                            label: 'இங்கே'
                        }
                    },
                    'படங்களில் நீர் அடையாளங்கள், சின்னங்கள் அல்லது சேர்க்கப்பட்ட உரை/கிராபிக்ஸ் (அளவீடுகள் தவிர) இருக்கக்கூடாது.',
                ]
            },
            keyDates: {
                title: 'முக்கிய தேதிகள்',
                timeline: [
                    { date: '1 நவம்பர் 2025', event: 'சமர்ப்பிப்புகள் தொடக்கம்' },
                    { date: '15 டிசம்பர் 2025', event: 'சமர்ப்பிப்புகள் முடிவு' },
                    { date: 'ஜனவரி 2026', event: 'நடுவர் குழுவின் ஆய்வு' },
                    { date: 'பிப்ரவரி 2026', event: 'தேசிய வெற்றியாளர்கள் அறிவிப்பு' },
                ],
            },
            submitNow: 'இப்போதே சமர்ப்பிக்கவும்',
            imageCategories: {
                title: 'படப் பிரிவுகள்',
                subtitle: 'பின்வரும் ஏழு பிரிவுகளில் நீங்கள் பங்கேற்கலாம். உங்கள் படைப்புக்கு மிகவும் பொருத்தமான ஒன்றைத் தேர்வு செய்யவும். உத்வேகம் பெற கீழே உள்ள எடுத்துக்காட்டுகளைப் பார்க்கவும்.'
            },
            categories: {
                people: { name: 'அறிவியலில் மக்கள்', description: 'விஞ்ஞானிகள் தங்கள் இயற்கையான வாழ்விடத்தில்.' },
                microscopy: { name: 'நுண்ணோக்கிப் படங்கள்', description: 'ஒளியியல், எலக்ட்ரான், மற்றும் வருடு நுண்சலாகை நுண்ணோக்கிப் படங்கள்.' },
                nonPhotographic: { name: 'புகைப்படமற்ற ஊடகம்', description: 'ஆடியோ மற்றும் வீடியோ கோப்புகள், கணினியால் உருவாக்கப்பட்ட படங்கள் போன்றவை.' },
                imageSets: { name: 'படத் தொகுப்புகள்', description: 'ஒரு தொகுப்பாகக் காணக்கூடிய கருப்பொருள் ரீதியாக இணைக்கப்பட்ட படங்கள் (10 வரை).' },
                wildlife: { name: 'வனவிலங்கு மற்றும் இயற்கை', description: 'உயிரினங்கள் தங்கள் இயற்கையான வாழ்விடத்தில், மேக்ரோ புகைப்படம் எடுத்தல் உட்பட.' },
                astronomy: { name: 'வானியல்', description: 'நட்சத்திரங்கள், வான நிகழ்வுகள் மற்றும் அவற்றைப் படம்பிடிக்கப் பயன்படுத்தப்படும் உபகரணங்களின் படங்கள்.' },
                general: { name: 'பொதுப் பிரிவு', description: 'தொல்லியல் முதல் எரிமலை வரை மற்ற அனைத்தும்.' },
            },
            readyToParticipate: {
                title: 'பங்கேற்கத் தயாரா?',
                subtitle: 'மேடை தயாராக உள்ளது. உங்கள் லென்ஸ் தான் திறவுகோல். உங்கள் அறிவியல் கண்கள் மூலம் உலகத்தை எங்களுக்குக் காட்டுங்கள்.',
                cta: 'உங்கள் படைப்பைச் சமர்ப்பிக்கவும்',
            },
            supportedBy: 'ஆதரவளிப்பவர்கள்:',
        },
        contact: {
            title: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
            subtitle: 'கேள்விகள் அல்லது கருத்துகள் உள்ளதா? உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம். விரைவான பதிலுக்கு நாங்கள் உறுதியளிக்கிறோம்!',
            getInTouch: 'தொடர்பில் இருங்கள்',
            p1: 'படிவத்தை நிரப்பவும், எங்கள் குழு சில மணிநேரங்களில் உங்களைத் தொடர்பு கொள்ளும். உதவ நாங்கள் இங்கே இருக்கிறோம்!',
            form: {
                name: 'முழுப் பெயர்',
                namePlaceholder: 'உங்கள் பெயர்',
                email: 'மின்னஞ்சல் முகவரி',
                emailPlaceholder: 'your.email@example.com',
                subject: 'பொருள்',
                subjectPlaceholder: 'உங்கள் வினவலுக்கு ஒரு பொருளைத் தேர்ந்தெடுக்கவும்',
                otherSubjectPlaceholder: 'தயவுசெய்து உங்கள் பொருளைக் குறிப்பிடவும்',
                message: 'செய்தி',
                messagePlaceholder: 'முன் எழுதப்பட்ட செய்தியைத் தேர்ந்தெடுக்கவும் அல்லது \'மற்றவை...\'',
                otherMessagePlaceholder: 'தயவுசெய்து உங்கள் செய்தியைக் குறிப்பிடவும்',
                selectSubjectFirst: 'தயவுசெய்து முதலில் ஒரு பொருளைத் தேர்ந்தெடுக்கவும்',
                submit: 'செய்தியை அனுப்பவும்',
                submitting: 'அனுப்புகிறது...',
            },
            toast: {
                successTitle: 'செய்தி அனுப்பப்பட்டது!',
                successDescription: 'எங்களைத் தொடர்பு கொண்டதற்கு நன்றி. நாங்கள் விரைவில் உங்களைத் தொடர்பு கொள்வோம்.',
                errorTitle: 'பிழை',
                errorDescription: 'ஏதோ தவறு நடந்துவிட்டது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.',
            }
        },
        organizers: {
            title: 'ஏற்பாட்டாளர்களைச் சந்திக்கவும்',
            subtitle: 'முதல் விக்கி அறிவியல் போட்டி இந்தியாவை ஒரு மாபெரும் வெற்றியாக மாற்ற திரைக்குப் பின்னால் உழைக்கும் அர்ப்பணிப்புள்ள குழு.',
            lead_organizers: 'முன்னணி ஏற்பாட்டாளர்கள்',
            advisors: 'ஆலோசகர்கள்',
            core_organizing_team: 'முக்கிய ஏற்பாட்டுக் குழு',
            team: [
                {
                    id: 'dev_jadiya',
                    name: 'தேவ் ஜாடியா',
                    role: 'முன்னணி ஏற்பாட்டாளர்',
                    roleKey: 'lead_organizer',
                    social: { linkedin: 'https://www.linkedin.com/in/devjadiya/', meta: 'https://meta.wikimedia.org/wiki/User:Dev_Jadiya' }
                },
                {
                    id: 'gauri_gupta',
                    name: 'கௌரி குப்தா',
                    role: 'முன்னணி ஏற்பாட்டாளர்',
                    roleKey: 'lead_organizer',
                    social: { linkedin: '#', meta: 'https://meta.wikimedia.org/wiki/User:Gauri_Guptaa' }
                },
                {
                    id: 'suyash_dwivedi',
                    name: 'சுயாஷ் திவேதி',
                    role: 'ஆலோசகர்',
                    roleKey: 'advisor',
                    social: { linkedin: 'https://www.linkedin.com/in/suyash-dwivedi-b47bab58/', meta: 'https://meta.wikimedia.org/wiki/User:Suyash.dwivedi' }
                },
                {
                    id: 'sai_kiran',
                    name: 'சாய் கிரண்',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Nskjnv' }
                },
                {
                    id: 'chinmayee_mishra',
                    name: 'சின்மயீ மிஸ்ரா',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra' }
                },
                {
                    id: 'athul_rt',
                    name: ' അതുல் ஆர் டி',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Athulvis' }
                },
                {
                    id: 'uday_dongre',
                    name: 'உதய் டோங்ரே',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Shoot_stufz' }
                },
                {
                    id: 'pankaj_yadav',
                    name: 'பங்கஜ் யாதவ்',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:The_open_draft' }
                },
                {
                    id: 'ashmita_bathre',
                    name: 'அஷ்மிதா பத்ரே',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:AshmitaBathre204' }
                },
                {
                    id: 'aanchal_patel',
                    name: 'ஆஞ்சல் படேல்',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Archies2804' }
                },
                {
                    id: 'riddhi_sharma',
                    name: 'ரித்தி சர்மா',
                    role: 'முக்கிய ஏற்பாட்டுக் குழு',
                    roleKey: 'core_team',
                    social: { meta: 'https://meta.wikimedia.org/wiki/User:Herdaisymione' }
                }
            ]
        },
        organizersCall: {
            title: 'ஏற்பாட்டாளர்களுக்கான அழைப்பு',
            subtitle: 'விக்கிமீடியா காமன்ஸில் இலவசமாக உரிமம் பெற்ற படங்கள், வீடியோக்கள் மற்றும் பிற ஊடகங்கள் மூலம் அறிவியலை ஊக்குவிக்கும் இந்த உலகளாவிய பிரச்சாரத்தின் சொந்த உள்ளூர் பதிப்பை இந்தியா ஏற்பாடு செய்யும் என்பதைப் பகிர்வதில் நாங்கள் மகிழ்ச்சியடைகிறோம்.',
            joinHeading: 'ஏற்பாட்டுக் குழுவில் சேரவும்',
            joinDescription: 'சுமூகமான ஒருங்கிணைப்பு, அறிமுகம் மற்றும் திட்டமிடலை ஆதரிக்க, நாங்கள் எங்கள் ஏற்பாட்டுக் குழுவை விரிவுபடுத்துகிறோம். இந்த முக்கியமான முயற்சியில் பங்களிக்க நீங்கள் ஆர்வமாக இருந்தால், உங்களிடமிருந்து கேட்க நாங்கள் விரும்புகிறோம்.',
            lookingForHeading: 'நாங்கள் எதைத் தேடுகிறோம்',
            lookingFor: [
                'அறிவியல், புகைப்படம் எடுத்தல் அல்லது திறந்த அறிவில் ஆர்வமுள்ள ஆர்வமுள்ள நபர்கள்.',
                'நிகழ்வு திட்டமிடல், அறிமுகம், சமூக ஊடக மேலாண்மை அல்லது உள்ளடக்க உருவாக்கம் ஆகியவற்றில் திறன்கள்.',
                'ஒரு ஒத்துழைப்பு மனப்பான்மை மற்றும் குறிப்பிடத்தக்க தாக்கத்தை ஏற்படுத்த ஒரு விருப்பம்.',
            ],
            sidebarTitle: 'இப்போதே விண்ணப்பிக்கவும்',
            sidebarDescription: 'இந்தியாவில் முதல் விக்கி அறிவியல் போட்டியை வடிவமைக்க எங்களுக்கு உதவுங்கள்.',
            deadline: 'விண்ணப்பங்கள் மூடப்பட்டன: 15 ஜூலை 2025',
            cta: 'விண்ணப்பங்கள் மூடப்பட்டன'
        },
        resources: {
            title: 'வளங்கள்',
            subtitle: 'கடந்தகால வெற்றியாளர்களிடமிருந்து உத்வேகம் பெற்று, உங்கள் சமர்ப்பிப்பைத் தயாரிக்க সহায়கமான பொருட்களை அணுகவும்.',
            pastWinners: {
                title: 'கடந்தகால வெற்றியாளர்களின் தொகுப்பு',
                winnerLabel: 'வெற்றியாளர்',
                winners: [
                    { year: 2023, category: 'வானியல்', winner: 'அஞ்சலி சர்மா' },
                    { year: 2023, category: 'உயிரியல்', winner: 'ரோகன் மேத்தா' },
                    { year: 2022, category: 'வேதியியல்', winner: 'பிரியா தேசாய்' },
                    { year: 2022, category: 'வானியல்', winner: 'விக்ரம் சிங்' },
                ]
            },
            learningMaterials: {
                title: 'கற்றல் பொருட்கள்',
                cta: 'மேலும் அறிக',
                resources: [
                    { title: 'அறிவியல் புகைப்பட வழிகாட்டி', description: 'அற்புதமான அறிவியல் படங்களைப் பிடிப்பதற்கான அடிப்படைகளைக் கற்றுக்கொள்ளுங்கள்.', link: '#' },
                    { title: 'கிரியேட்டிவ் காமன்ஸ் புரிந்துகொள்ளுதல்', description: 'போட்டிக்காக உங்கள் படைப்புக்கு உரிமம் வழங்குவதற்கான ஒரு விரைவான வழிகாட்டி.', link: '#' },
                    { title: 'படப் பதிவேற்றப் பயிற்சி', description: 'உங்கள் புகைப்படங்களை எப்படிச் சமர்ப்பிப்பது என்பது குறித்த படிப்படியான வீடியோ.', link: '#' },
                ]
            }
        },
        support: {
            title: 'எங்களை ஆதரியுங்கள்',
            subtitle: 'விக்கி அறிவியல் போட்டி இந்தியா 2025-ஐ ஒரு மாபெரும் வெற்றியாக்க எங்களுக்கு உதவுங்கள்.',
            options: [
                {
                    id: 'sponsorship',
                    icon: 'Handshake',
                    title: 'ஒரு விளம்பரதாரராகுங்கள்',
                    description: 'செயல்பாட்டுச் செலவுகள், பரிசுப் பணம் மற்றும் நிகழ்வு மேலாண்மை ஆகியவற்றை ஈடுகட்ட பணப் பங்களிப்புகளுடன் எங்களை ஆதரிக்கவும். நாங்கள் முக்கிய பிராண்டிங் வாய்ப்புகளுடன் பல்வேறு விளம்பரதாரர் அடுக்குகளை வழங்குகிறோம்.',
                    cta: 'விளம்பரதாரர் தொடர்புக்கு',
                },
                {
                    id: 'gifts',
                    icon: 'Gift',
                    title: 'பரிசுகள் மற்றும் நினைவுப் பொருட்கள் வழங்கவும்',
                    description: 'எங்கள் வெற்றியாளர்கள் மற்றும் பங்கேற்பாளர்களுக்காக எங்கள் பரிசுக் குளத்திற்கு அற்புதமான பரிசுகள், வவுச்சர்கள் அல்லது பிராண்டட் வணிகப் பொருட்கள் (swag) மூலம் பங்களிக்கவும். உங்கள் பிராண்டை அறிவியல் ஆர்வலர்களின் கைகளில் கொண்டு செல்லுங்கள்.',
                    cta: 'பரிசுகளை வழங்குங்கள்',
                },
                {
                    id: 'outreach',
                    icon: 'Megaphone',
                    title: 'அறிமுகம் மற்றும் சந்தைப்படுத்தல்',
                    description: 'வார்த்தையைப் பரப்ப எங்களுடன் ஒத்துழைக்கவும். உங்கள் நிறுவன சேனல்கள், சமூக ஊடகங்கள் அல்லது சந்தைப்படுத்தல் நிபுணத்துவம் மூலம் பரந்த பார்வையாளர்களைச் சென்றடைய எங்களுக்கு உதவுங்கள்.',
                    cta: 'அறிமுகத்தில் ஒத்துழையுங்கள்',
                },
            ]
        },
        home: {
            autoscroll: {
                slides: [
                    { id: 1, title: 'நுண்ணிய உலகங்களை ஆராயுங்கள்', description: 'உயிரணு கட்டமைப்புகள் முதல் படிக வடிவங்கள் வரை, காணப்படாத அழகைக் காட்சிப்படுத்துங்கள்.' },
                    { id: 2, title: 'வான அதிசயங்களைப் படம்பிடிக்கவும்', description: 'பிரபஞ்சம் உங்கள் கேன்வாஸ். விண்மீன் திரள்கள், நெபுலாக்கள் மற்றும் கோள் நிகழ்வுகளைப் புகைப்படம் எடுக்கவும்.' },
                    { id: 3, title: 'சிக்கலான தரவைக் காட்சிப்படுத்தவும்', description: 'மூலத் தரவை ஈர்க்கக்கூடிய அறிவியல் காட்சிப்படுத்தல்கள் மற்றும் இன்போகிராபிக்ஸாக மாற்றவும்.' },
                    { id: 4, title: 'மனித புத்திசாலித்தனத்தை ஆவணப்படுத்தவும்', description: 'பணியில் உள்ள விஞ்ஞானிகள், புதுமையான ஆய்வக உபகரணங்கள் மற்றும் கண்டுபிடிப்புத் தருணங்களைப் படம்பிடிக்கவும்.' },
                ]
            },
            cta: {
                title: 'ஈடுபடுங்கள்',
                subtitle: 'இந்தியாவின் முதல் தேசிய விக்கி அறிவியல் போட்டியின் ஒரு பகுதியாக இருங்கள். எங்களுடன் சேர ஆர்வமுள்ள தனிநபர்கள் மற்றும் அமைப்புகளை நாங்கள் தேடுகிறோம்.',
                campus: {
                    title: 'வளாகத் தூதர்களுக்கான அழைப்பு',
                    description: 'உங்கள் நிறுவனத்தில் பிரச்சாரத்தை ஊக்குவிக்கவும், வழிகாட்டுதல்களைப் பகிரவும், விழிப்புணர்வு நடவடிக்கைகளை ஏற்பாடு செய்ய உதவவும்.',
                    deadline: 'கடைசி தேதி: 31 ஆகஸ்ட் 2025',
                    cta: 'இப்போதே விண்ணப்பிக்கவும்'
                },
                affiliates: {
                    title: 'விக்கிமீடியா துணை நிறுவனங்களுக்கான அழைப்பு',
                    description: 'பிரச்சாரத்தை ஊக்குவிக்கவும், உள்ளூர் அறிமுகத்தை ஏற்பாடு செய்யவும், உங்கள் பிராந்தியத்திலிருந்து தாக்கமுள்ள அறிவியல் பங்களிப்புகளைக் கொண்டுவர உதவவும் எங்களுடன் கூட்டு சேருங்கள்.',
                    deadline: 'கடைசி தேதி: 31 ஆகஸ்ட் 2025',
                    cta: 'எங்களுடன் கூட்டு சேருங்கள்'
                }
            },
            info: {
                title: 'நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்',
                subtitle: 'சமர்ப்பிப்பு வழிகாட்டுதல்கள் முதல் நடுவர் குழு விவரங்கள் வரை, இந்த அற்புதமான நிகழ்வின் ஒரு பகுதியாக இருக்க உங்களுக்குத் தேவையான அனைத்துத் தகவல்களையும் பெறுங்கள்.',
                cta: 'மேலும் அறிய',
                sections: [
                    { icon: 'Info', title: 'போட்டி பற்றி', description: 'ஆராய்ச்சி உலகின் தங்கள் பார்வையைப் பகிர்ந்து கொள்ள அறிவியல் ஆர்வலர்களை ஒன்றிணைக்கும் ஒரு வருடாந்திர சர்வதேச அறிவியல் புகைப்படப் போட்டி.', link: '/about' },
                    { icon: 'Target', title: 'பங்கேற்பது எப்படி', description: 'பங்கேற்பு இலவசம் மற்றும் அனைவருக்கும் திறந்திருக்கும். சமர்ப்பிப்புக் காலத்தில் பல்வேறு பிரிவுகளில் உங்கள் சிறந்த அறிவியல் தொடர்பான படங்களைச் சமர்ப்பிக்கவும்.', link: '/competition' },
                    { icon: 'Award', title: 'பரிசுகள் மற்றும் அங்கீகாரம்', description: 'வெற்றியாளர்கள் தேசிய அங்கீகாரம், சான்றிதழ்கள் மற்றும் பரிசுகளைப் பெறுகிறார்கள். சிறந்த படங்கள் சர்வதேச இறுதிப் போட்டிக்கும் முன்னேறுகின்றன.', link: '/competition' },
                    { icon: 'Users', title: 'நடுவர் குழு மற்றும் அளவுகோல்கள்', description: 'எங்கள் விஞ்ஞானிகள் மற்றும் புகைப்படக் கலைஞர்களின் நிபுணர் நடுவர் குழு அறிவியல் மதிப்பு, அசல் தன்மை மற்றும் அழகியல் தரம் ஆகியவற்றின் அடிப்படையில் உள்ளீடுகளை மதிப்பிடும்.', link: '/jury' },
                    { icon: 'History', title: 'கடந்தகால வெற்றியாளர்கள்', description: 'முந்தைய ஆண்டுகளின் வெற்றி பெற்ற புகைப்படங்களின் தொகுப்பை ஆராய்ந்து, காட்சிப்படுத்தப்பட்ட நம்பமுடியாத திறமையால் உத்வேகம் பெறுங்கள்.', link: '/resources' }
                ],
                finalCard: {
                    title: 'பங்கேற்கத் தயாரா?',
                    subtitle: 'மேடை தயாராக உள்ளது. உங்கள் லென்ஸ் தான் திறவுகோல். உங்கள் அறிவியல் கண்கள் மூலம் உலகத்தை எங்களுக்குக் காட்டுங்கள்.',
                    cta: 'உங்கள் படைப்பைச் சமர்ப்பிக்கவும்'
                }
            },
            prizes: {
                title: 'பரிசுகள் மற்றும் அங்கீகாரம்',
                subtitle: 'உங்கள் அற்புதமான காட்சிகள் கொண்டாடப்படத் தகுதியானவை. நீங்கள் என்ன வெல்லலாம் என்பதைக் கண்டறியுங்கள்.',
                prizes: [
                    { icon: 'Award', title: "தேசிய அங்கீகாரம்", description: "வெற்றியாளர்கள் எங்கள் அதிகாரப்பூர்வ தளங்களில் கொண்டாடப்படுவார்கள் மற்றும் தேசிய ஊடகக் கவனத்தைப் பெறுவார்கள்." },
                    { icon: 'Camera', title: "உயர்தர உபகரணங்கள்", description: "சிறந்த வெற்றியாளர்களுக்கு அவர்களின் ஆர்வத்திற்கு உதவ அற்புதமான புகைப்படக் கருவிகள் மற்றும் பாகங்கள்." },
                    { icon: 'BookOpen', title: "வெளியீட்டு அம்சம்", description: "உங்கள் படைப்பை மதிப்புமிக்க அறிவியல் இதழ்கள் மற்றும் வெளியீடுகளில் இடம்பெறச் செய்யுங்கள்." }
                ]
            },
            jury: {
                title: 'மதிப்பிற்குரிய நடுவர் குழுவைச் சந்திக்கவும்',
                description: 'எங்கள் குழுவில் இந்தியா முழுவதிலுமிருந்து புகழ்பெற்ற விஞ்ஞானிகள், தொழில்முறை புகைப்படக் கலைஞர்கள் மற்றும் அறிவியல் தொடர்பாளர்களின் ஒரு பன்முகக் குழு இடம்பெற்றுள்ளது. அவர்கள் ஒரு நியாயமான மற்றும் sâu sắc மதிப்பீட்டு செயல்முறையை உறுதிப்படுத்த அனுபவச் செல்வத்தைக் கொண்டு வருகிறார்கள்.',
                cta: 'முழு குழுவையும் காண்க'
            }
        }
    },
    or: {
        "mainNavLinks": [
            { "name": "ବିବରଣୀ", "href": "/about" },
            { "name": "ପ୍ରତିଯୋଗିତା", "href": "/competition" },
            { "name": "ସାଧନସମୂହ", "href": "/resources" },
            { "name": "ପ୍ରାୟୋଜକ", "href": "/sponsors" }
        ],
        "organizerLinks": [
            { "name": "ଟିମ ସଦସ୍ୟମାନଙ୍କୁ ଚିହ୍ନନ୍ତୁ", "href": "/organizers" },
            { "name": "କ୍ୟାମ୍ପସ ଅ୍ୟାମ୍ବାସାଡରମାନେ", "href": "/campus-ambassadors" },
            { "name": "ଟିମ ନିମନ୍ତେ ଆହ୍ୱାନ", "href": "/organizers/call" }
        ],
        "moreDropdownLinks": [
            { "name": "ନ୍ୟାୟମୂର୍ତ୍ତି", "href": "/jury" },
            { "name": "ଆମକୁ ସହଯୋଗ କରନ୍ତୁ", "href": "/support-us" },
            { "name": "ଯୋଗାଯୋଗ", "href": "/contact" }
        ],
        "learningLinks": [
            { "name": "Wiki ଆକାଉଣ୍ଟ କିପରି ସୃଷ୍ଟି କରିବେ", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Account" },
            { "name": "Upload Wizard ବ୍ୟବହାର କିପରି କରିବେ", "href": "https://commons.wikimedia.org/wiki/Commons:First_steps/Upload_wizard" },
            { "name": "CC ଲାଇସେନ୍ସ ବୁଝିବା", "href": "https://commons.wikimedia.org/wiki/Commons:Licensing" },
            { "name": "ବର୍ଗ (Categories) କିପରି ଯୋଡିବେ", "href": "https://commons.wikimedia.org/wiki/Help:Categories" }
        ],
        "organizersDropdown": "ଆୟୋଜକମାନେ",
        "moreDropdown": "ଅଧିକ",
        "learningDropdown": "ଶିକ୍ଷା",
        "participateButton": "ଅଂଶଗ୍ରହଣ କରନ୍ତୁ",
        "footerNavLinks": [
            { "name": "ବିବରଣୀ", "href": "/about" },
            { "name": "ପ୍ରତିଯୋଗିତା", "href": "/competition" },
            { "name": "ନ୍ୟାୟମୂର୍ତ୍ତି", "href": "/jury" },
            { "name": "ଆୟୋଜକମାନେ", "href": "/organizers" },
            { "name": "ପ୍ରାୟୋଜକ", "href": "/sponsors" },
            { "name": "ସାଧନସମୂହ", "href": "/resources" },
            { "name": "କ୍ୟାମ୍ପସ ଅ୍ୟାମ୍ବାସାଡରମାନେ", "href": "/campus-ambassadors" },
            { "name": "ଯୋଗାଯୋଗ", "href": "/contact" }
        ],
        "footerSupportLinks": [
            { "name": "ପ୍ରାୟୋଜନା", "href": "/support-us#sponsorship" },
            { "name": "ଉପହାର/ସ୍ୱାଗ୍", "href": "/support-us#gifts" },
            { "name": "ପ୍ରସାରଣ", "href": "/support-us#outreach" }
        ],
        "footerSubtitle": "ବିଜ୍ଞାନର ସୌନ୍ଦର୍ଯ୍ୟକୁ ଫଟୋଗ୍ରାଫି ମାଧ୍ୟମରେ ଧରି ରଖିବା।",
        "footerNavHeader": "ନାଭିଗେସନ୍",
        "footerSupportHeader": "ଆମକୁ ସହଯୋଗ କରନ୍ତୁ",
        "footerContactHeader": "ଯୋଗାଯୋଗ",
        "footerCopyright": "Wiki Science Competition India. ସମସ୍ତ ସ୍ବତ୍ୱ ଅଧିକାର ସଂରକ୍ଷିତ।",
        "footerLicense": "ବିଷୟବସ୍ତୁ CC BY-SA 4.0 ଅନୁଯାୟୀ ଉପଲବ୍ଧ ଅଛି, ଯଦିଓ ଅନ୍ୟଥା ଉଲ୍ଲେଖିତ ନାହିଁ।",
        "footerDeveloperCredit": "ଡିଜାଇନ୍ ଏବଂ ଡିଭେଲପ କରାଯାଇଛି",
        "about": {
            "title": "WikiScience India 2025 ବିଷୟରେ",
            "badge": "ଭାରତୀୟ ପ୍ରସଙ୍ଗରେ ପରିଚୟ",
            "heading": "Wiki Science Competition 2025 – ଭାରତ",
            "p1": "ପ୍ରଥମଥର ପାଇଁ, ଭାରତ Wiki Science Competition (WSC) ର ଏକ ଜାତୀୟ ସଂସ୍କରଣ ଆୟୋଜନ କରୁଛି — ଏହା ବିଶ୍ୱର ସବୁଠାରୁ ବଡ଼ ବିଜ୍ଞାନ, ଫଟୋଗ୍ରାଫି ଓ ମୁକ୍ତ ଜ୍ଞାନ ସହିତ ସଂପୃକ୍ତ ପ୍ରୟାସମାନଙ୍କ ମଧ୍ୟରୁ ଗୋଟିଏ।",
            "p2": "2011 ମସିହାରେ ଏସ୍ତୋନିଆରେ ଆରମ୍ଭ ହୋଇ, ପରେ ଇଉରୋପ ଓ ବିଶ୍ୱବ୍ୟାପୀ ଭାବେ ବିସ୍ତାରିତ, ଏହି ପ୍ରତିଯୋଗିତା ହଜାର ହଜାର ବିଜ୍ଞାନୀ, ଗବେଷକ ଓ ଉତ୍ସାହୀଙ୍କୁ ବିଜ୍ଞାନର ଆଶ୍ଚର୍ଯ୍ୟକୁ ପ୍ରତିବିମ୍ବିତ କରୁଥିବା ଛବି ବାଣ୍ଟିବା ପାଇଁ ପ୍ରେରିତ କରିଛି। ମାଇକ୍ରୋସ୍କୋପିକ୍ କୋଷ ଠାରୁ ଦୂର ଗାଳାକ୍ସି ପର୍ଯ୍ୟନ୍ତ, ଏହି ମୁକ୍ତ ଲାଇସେନ୍ସ ଦ୍ୱାରା ଉପଲବ୍ଧ ଛବିମାନେ Wikimedia Commons କୁ ମୂଲ୍ୟବାନ କରିଛନ୍ତି ଓ ଖୋଲା ଶିକ୍ଷାକୁ ସମର୍ଥନ କରୁଛନ୍ତି।",
            "p3": "ଭାରତ ପୂର୍ବ ଅନ୍ତର୍ଜାତୀୟ ସଂସ୍କରଣରେ ଗର୍ବର ସହିତ ଅଂଶଗ୍ରହଣ କରିଛି — ଯେଉଁଥିରେ ଭାରତୀୟ ଫଟୋଗ୍ରାଫର ଓ ବିଜ୍ଞାନୀମାନେ ସମ୍ମାନ ଓ ପୁରସ୍କାର ପାଇଛନ୍ତି। ଏଥିପାଇଁ, ଏହା ପ୍ରଥମଥର ଭାରତ ନିଜର ଏକ ଅଞ୍ଚଳୀୟ ପ୍ରତିଯୋଗିତା ଆୟୋଜନ କରୁଛି, ଯାହା ଦେଶର ବିଜ୍ଞାନମୟ ଆତ୍ମା ଓ ସୃଜନାତ୍ମକତାକୁ ପ୍ରଦର୍ଶନ କରିବ।",
            "p4": "Wiki Science Competition 2025 – ଭାରତ ଗୋଟିଏ ସାଧାରଣ ପ୍ରତିଯୋଗିତା ନୁହେଁ। ଏହା ଜଣେ ଜଣେ ଭାରତୀୟଙ୍କର ବିଜ୍ଞାନ ଉପରେ ଭାବନା, କାହାଣୀ ଓ ସୃଜନାତ୍ମକତା ମାଧ୍ୟମରେ ଆନ୍ତର୍ଜାତୀୟ ମଞ୍ଚରେ ପ୍ରତିନିଧିତ୍ୱ କରିବା ପାଇଁ ଏକ ଆଂଦୋଳନ।",
            "aims": {
                "title": "ଆମ ଲକ୍ଷ୍ୟଗୁଡ଼ିକ",
                "subtitle": "ଏହି ଅଭିଯାନ ମାଧ୍ୟମରେ, ଆମେ ଏହାକୁ ଉଦ୍ଦେଶ୍ୟ କରୁଛୁ:",
                "items": [
                    {
                        "icon": "PenSquare",
                        "title": "ଅବଦାନକୁ ଉତ୍ସାହିତ କରିବା",
                        "description": "ଭାରତର ଛାତ୍ରଛାତ୍ରୀ, ଗବେଷକ ଓ ଉତ୍ସାହୀମାନେ ମୂଲ୍ୟବାନ ବୈଜ୍ଞାନିକ ମିଡିଆ ଅବଦାନ ଦେଇବା ପାଇଁ ଉତ୍ସାହିତ କରିବା।"
                    },
                    {
                        "icon": "Lightbulb",
                        "title": "ଜ୍ଞାନ ପ୍ରଚାର କରିବା",
                        "description": "ମୁକ୍ତ ବିଜ୍ଞାନ ଓ ମୁକ୍ତ ଜ୍ଞାନର ଗୁରୁତ୍ୱ ବିଷୟରେ ଜନସାଧାରଣଙ୍କ ମଧ୍ୟରେ ସଚେତନତା ବୃଦ୍ଧି କରିବା।"
                    },
                    {
                        "icon": "Globe",
                        "title": "ବୈଜ୍ଞାନିକ ଐତିହ୍ୟକୁ ପାଳନ କରିବା",
                        "description": "ଭାରତର ସମୃଦ୍ଧ ବୈଜ୍ଞାନିକ ଐତିହ୍ୟ ଓ ଚାଲୁଥିବା ନବୀନତାକୁ ଉଲ୍ଲେଖ କରି ପାଳନ କରିବା।"
                    },
                    {
                        "icon": "Handshake",
                        "title": "ସହଯୋଗ ଶକ୍ତିକୁ ବୃଦ୍ଧି କରିବା",
                        "description": "Wikimedia ସମୁଦାୟ, ବିଶ୍ୱବିଦ୍ୟାଳୟ, ଗବେଷଣା ସଂସ୍ଥା ଓ ସଂଗଠନମାନେ ସହିତ ସହଯୋଗକୁ ଶକ୍ତିଶାଳୀ କରିବା।"
                    }
                ]
            },
            "supportingOrg": {
                "title": "ସମର୍ଥକ ସଂଗଠନ",
                "p1": "Wiki Club SATI (ବିଦିଶା, ମଧ୍ୟପ୍ରଦେଶ) କୁ Wiki Science Competition 2025 – ଭାରତର ପ୍ରଥମ ଜାତୀୟ ସଂସ୍କରଣ ପାଇଁ ସମର୍ଥକ ସଂଗଠନ ଭାବେ ଓପରିଚିତ କରାଯାଇଛି। ଏହି କ୍ଲବ ଛାତ୍ରଛାତ୍ରୀ ଓ ଯୁବ ବୃତ୍ତିଜୀବୀମାନେ Wikimedia ଆନ୍ଦୋଳନରେ ସକ୍ରିୟ ଭାଗ ନେବା, ମୁକ୍ତ ଜ୍ଞାନକୁ ଉନ୍ନତ କରିବା, ତଥା ଟେକ୍ନୋଲୋଜି ଓ ସମୁଦାୟ-ନିର୍ଦ୍ଦେଶିତ ପ୍ରୟାସଗୁଡିକୁ ଆଗକୁ ବଢ଼େଇବାରେ ଅଗ୍ରଣୀ ଭୂମିକା ନିଅଛି।",
                "p2": "ମୂଳ ଆୟୋଜନ ଟିମର ଅନେକ ସଦସ୍ୟ Wiki Club SATI ସହିତ ସଂପୃକ୍ତ ଅଛନ୍ତି, ଏବଂ ତାଙ୍କର ଲଗାତାର ସହଯୋଗ ଏହି କ୍ଲବର ମୁକ୍ତ ଜ୍ଞାନ ଓ ବୈଜ୍ଞାନିକ ଚର୍ଚ୍ଚା ପ୍ରତି ଦୃଢ଼ ପ୍ରତିବଦ୍ଧତାକୁ ପ୍ରତିବିମ୍ବିତ କରେ। ଯଦିଓ ଏହି ସହଯୋଗ ଆର୍ଥିକ ନୁହେଁ, କ୍ଲବର ସଂଗଠନାତ୍ମକ ଦକ୍ଷତା, ଅଭିଜ୍ଞତା ଓ ସମୁଦାୟ ନେଟୱାର୍କ ଏହି ଅଭିଯାନକୁ ଜାତୀୟ ମଞ୍ଚରେ ସଫଳ କରିବାରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଭୂମିକା ନିଅଉଛି।"
            }
        },
        "campusAmbassadors": {
            "title": "କ୍ୟାମ୍ପସ ଅ୍ୟାମ୍ବାସାଡରମାନେ",
            "subtitle": "ନିଜ ନିଜ ସମୁଦାୟରେ Wiki Science Competition ର ପ୍ରଚାର ଓ ସଂଚାଳନ କରୁଥିବା ଉତ୍ସାହୀ ନେତାମାନଙ୍କ ସହିତ ପରିଚୟ ହେବା।",
            "ambassadors": [
                {
                    "name": "Anushka Patel",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Anushka_patel_1.jpg/1024px-Anushka_patel_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Anushka10patel",
                    "description": "Wiki Club SATI",
                    "boardLink": {
                        "name": "Wiki Club SATI",
                        "url": "https://meta.wikimedia.org/wiki/Wiki_Club_SATI/Events/Members"
                    }
                },
                {
                    "name": "Neechalkaran",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg/1024px-User_Neechalkaran_introducing_himself_to_other%27s_at_Day0_of_TTT2019.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Neechalkaran",
                    "description": "ତମିଳନାଡୁରୁ ଜଣେ Wikipedian ଓ Computational Linguist"
                },
                {
                    "name": "Santhosh Notagar",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Santhosh_Notagar_1.jpg",
                    "meta": "https://meta.wikimedia.org/wiki/User:Santhosh_Notagar99",
                    "description": "HOD ଓ ସହାୟକ ପ୍ରଫେସର, କମ୍ପ୍ୟୁଟର ଆନିମେସନ ବିଭାଗ, ସେଣ୍ଟ ଏଲୋଇସିଅସ୍",
                    "wikipedia": "https://en.wikipedia.org/wiki/St._Aloysius,_Mangaluru"
                },
                {
                    "name": "Samiya Ahmed",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Khanahmedsam",
                    "description": "Deoband ସମୁଦାୟ",
                    "boardLink": {
                        "name": "Deoband ସମୁଦାୟ",
                        "url": "https://meta.wikimedia.org/wiki/Deoband_Community_Wikimedia"
                    }
                },
                {
                    "name": "Satheesh M",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "description": "ବର୍ତ୍ତମାନ କନ୍ନିଆକୁମାରୀ ଜିଲ୍ଲାରେ IT ଓ ନିରୀକ୍ଷଣ ପ୍ରକଳ୍ପରେ କାର୍ଯ୍ୟରତ"
                },
                {
                    "name": "Kaartic Sivaraam",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Kaartic",
                    "description": "ତମିଳ Wikipedian, ସଫ୍ଟୱେର ଇଞ୍ଜିନିୟର"
                },
                {
                    "name": "Osama",
                    "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Wikipedian_Profile_Picture.png",
                    "meta": "https://meta.wikimedia.org/wiki/User:Osama_Abdullah",
                    "description": "Wikipedian"
                }
            ]
        },
        "affiliates": {
            "title": "Wikimedia ସହଯୋଗୀ ଠାରୁ ଆହ୍ୱାନ",
            "subtitle": "ଆମେ ଭାରତର ବିଭିନ୍ନ Wikimedia ସଂଗଠନ, ୟୁଜର ଗ୍ରୁପ୍ ଓ ସମୁଦାୟଗୁଡ଼ିକୁ Wiki Science Competition 2025 ର ସମର୍ଥନ ଓ ପ୍ରଚାରରେ ସହଯୋଗ ପାଇଁ ଆମନ୍ତ୍ରଣ ଦେଉଛୁ।",
            "partnerHeading": "ଆମ ସହିତ ସହଯୋଗ କାହିଁକି?",
            "partnerDescription": "ଏହା ଗୋଟିଏ ବିଶେଷ ସୁଯୋଗ ଯାହା ବୈଜ୍ଞାନିକ ଦୃଶ୍ୟାବଳୀକୁ ପାଳନ କରିବା ସହିତ CC ଲାଇସେନ୍ସ ସହିତ ମିଡିଆକୁ Wikimedia Commons ରେ ଯୋଡ଼ିବାରେ ସାହାଯ୍ୟ କରିଥାଏ। ଏକ ସହଯୋଗୀ ଭାବରେ, ଆପଣଙ୍କ ଗୋଷ୍ଠୀ ପ୍ରସାରଣ, ସଚେତନତା ଓ ସମୁଦାୟ ଅଭିଯାନରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଭୂମିକା ନିଅଇ ପାରିବ।",
            "collaborationHeading": "ଆପଣ କିପରି ସହଯୋଗ କରିପାରିବେ",
            "collaborationPoints": [
                "ଆପଣଙ୍କ ନେଟୱାର୍କରେ ଅନଲାଇନ୍ ଓ ଅଫଲାଇନ୍ ପ୍ରସାରଣ କରନ୍ତୁ।",
                "ସଂସ୍ଥା ଓ ଗବେଷଣା ନିକାୟମାନଙ୍କ ଠାରୁ ଅପଲୋଡ୍ ସୁବିଧା ପ୍ରଦାନ କରନ୍ତୁ।",
                "ସ୍ଥାନୀୟ କାର୍ଯ୍ୟକ୍ରମ, ଏଡିଟାଥନ୍ ବା ଫଟୋୱାକ୍ ଆୟୋଜନ କରନ୍ତୁ।",
                "ଅଭିଯାନ ସାମଗ୍ରୀର ଅନୁବାଦ ଓ ସ୍ଥାନୀୟକରଣରେ ସହଯୋଗ କରନ୍ତୁ।"
            ],
            "formNote": "ଏହି ଫର୍ମଟି ସ୍ୱୀକୃତ Wikimedia ସଂଗଠନ ବା ସମୁଦାୟ ଗୋଷ୍ଠୀମାନଙ୍କ ପାଇଁ ଉଦ୍ଦିଷ୍ଟ। ବ୍ୟକ୍ତିଗତ ଭାଗ ନେବାକୁ ଚାହୁଁଥିବା ଛାତ୍ରଛାତ୍ରୀମାନେ",
            "campusAmbassadorLink": "Campus Ambassador ଫର୍ମ",
            "sidebarTitle": "ଆମ ସହିତ ସହଯୋଗ କରନ୍ତୁ",
            "sidebarDescription": "ଭାରତର ବୈଜ୍ଞାନିକ ପରିଦୃଶ୍ୟକୁ ବିଶ୍ୱ ସମ୍ମୁଖରେ ଆଣିବା ପାଇଁ ଆମେ ସହଯୋଗ କରିବାକୁ ଚାହୁଁଛୁ।",
            "deadline": "ଶେଷ ତାରିଖ: ୩୧ ଅଗଷ୍ଟ ୨୦୨୫",
            "cta": "ସହଯୋଗ ଫର୍ମ ଖୋଲନ୍ତୁ"
        },
        "campus": {
            "title": "Campus Ambassador ଆହ୍ୱାନ",
            "subtitle": "ଆପଣଙ୍କ ସଂସ୍ଥା, ସମୁଦାୟ ବା ନେଟୱାର୍କରେ Wiki Science Competition 2025 କୁ ପ୍ରଚାର କରିବା ପାଇଁ ଏକ ସ୍ଥାନୀୟ ନେତୃତ୍ୱ ଭୂମିକା ନିଅନ୍ତୁ।",
            "whoHeading": "ଆମେ କାହାକୁ ଖୋଜୁଛୁ?",
            "whoDescription": "Campus Ambassador ମାନେ ଅଭିଯାନ ବିଷୟରେ ସଚେତନତା ବୃଦ୍ଧି, ଅଂଶଗ୍ରାହୀମାନେ ଉପରେ ମାର୍ଗଦର୍ଶନ ଦେବା ଓ ପ୍ରୟୋଜନ ଅନୁଯାୟୀ କାର୍ଯ୍ୟଶାଳା ବା ଅନ୍ୟ କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରିବାରେ ସାହାଯ୍ୟ କରିଥାନ୍ତି। ଆପଣ ଏକ Wikimedian, ବୈଜ୍ଞାନିକ ଛାତ୍ର, ଡିଜାଇନର୍, ଶିକ୍ଷକ ବା ମୁକ୍ତ ବିଜ୍ଞାନ ପ୍ରତି ଆଗ୍ରହୀ ଯେ କେହି ହୁଅନ୍ତୁ—ଆମେ ଆପଣଙ୍କୁ ଆମ ଟିମର ଅଂଶ କରିବାକୁ ଚାହୁଁଛୁ।",
            "responsibilitiesHeading": "ଦାୟିତ୍ୱଗୁଡ଼ିକ",
            "responsibilities": [
                "ଆପଣଙ୍କ ଶିକ୍ଷାନୁଷ୍ଠାନ ବା ସମୁଦାୟରେ ଅଭିଯାନକୁ ପ୍ରଚାର କରନ୍ତୁ।",
                "ଅଂଶଗ୍ରାହୀମାନଙ୍କ ସହିତ ନିୟମ ଓ ଦିଗନିର୍ଦ୍ଦେଶ ସେୟାର କରନ୍ତୁ।",
                "ପ୍ରୟୋଜନ ଅନୁଯାୟୀ କାର୍ଯ୍ୟଶାଳା ବା ଫଟୋୱାକ୍ ପ୍ରଭୃତି ସଚେତନତା କାର୍ଯ୍ୟକ୍ରମ ଆୟୋଜନ କରନ୍ତୁ (ଆମେ ସାହାଯ୍ୟ କରିପାରିବା)।"
            ],
            "sidebar": {
                "title": "ଏବେ ଆବେଦନ କରନ୍ତୁ",
                "description": "ପରିବର୍ତ୍ତନ ଆଣିବାକୁ ପ୍ରସ୍ତୁତ? Campus Ambassador ହେବା ପାଇଁ ଫର୍ମ ପୂରଣ କରନ୍ତୁ।",
                "deadline": "ଶେଷ ତାରିଖ: ୩୧ ଅଗଷ୍ଟ ୨୦୨୫",
                "cta": "ଆବେଦନ ଫର୍ମ ଖୋଲନ୍ତୁ"
            },
            "cta": {
                "text": "Campus Ambassador ହେଉନ୍ତୁ",
                "href": "https://docs.google.com/forms/d/e/1FAIpQLScxxP7KU5OTBXayETXoKoFWZqDaJuOOABLEZXNseI9Br_Ws2Q/viewform"
            }
        },
        "competition": {
            "title": "ପ୍ରତିଯୋଗିତା ବିବରଣୀ",
            "subtitle": "ଅଂଶଗ୍ରହଣ କରିବା ଓ ଜିତିବା ପାଇଁ ଆବଶ୍ୟକ ସମସ୍ତ ତଥ୍ୟ।",
            "howToParticipate": {
                "title": "କିପରି ଅଂଶଗ୍ରହଣ କରିବେ",
                "p1": "ଯଦି ଆପଣଙ୍କ ପାଖରେ ଗୋଟିଏ ଖାତା ନାହିଁ, ତେବେ ଆପଣ ଏକ ଗ୍ଲୋବାଲ୍‌ ଖାତା ସୃଷ୍ଟି କରିପାରିବେ, ଯାହା ଆପଣଙ୍କୁ ସମସ୍ତ Wikimedia ପ୍ଲାଟଫର୍ମରେ (Wikimedia Commons ସହିତ) ଏକ ନିର୍ଦ୍ଧିଷ୍ଟ ଉପଯୋଗକର୍ତ୍ତାନାମ ଦେଇଥାଏ। ନୂତନ ଭାବରେ ନମୋଦ ହୋଇଥିବା ବ୍ୟବହାରକାରୀ ଭାବରେ ଆପଣ ଏକ ଭିଡିଓ ଅପଲୋଡ୍‌ କରିବା ପୂର୍ବରୁ ଅନ୍ତତଃ ଚାରି ଦିନ ଅପେକ୍ଷା କରିବାକୁ ପଡିବ, ଯେଉଁଠି ଚିତ୍ରଗୁଡିକ ତୁରନ୍ତ ଅପଲୋଡ୍‌ କରାଯାଇପାରିବ।",
                "createAccountLink": "ଏଠାରେ ଆପଣଙ୍କର ଖାତା ସୃଷ୍ଟି କରନ୍ତୁ!",
                "rulesTitle": "ଅଂଶଗ୍ରହଣ ନିୟମାବଳୀ",
                "rules": [
                    "ଦାଖଲ କରାଯାଇଥିବା ଆପଣଙ୍କର ନିଜ ରଚନା ହେବା ଦରକାର ଏବଂ ଆପଣଙ୍କର ନିଜ Wikimedia ଖାତାରୁ ଅପଲୋଡ୍‌ ହୋଇଥିବା ଦରକାର। ଯଦି ଅନେକ ଲେଖକ ଅଛନ୍ତି, ତେବେ ସମସ୍ତଙ୍କ ନାମ ଦିଆଯିବା ଦରକାର।",
                    "ଚିତ୍ରଗୁଡ଼ିକ ଏକ ମୁକ୍ତ ଲାଇସେନ୍ସ (CC BY-SA 4.0, CC BY 4.0, CC0 1.0) ଅଧୀନରେ ଥିବା ଦରକାର।",
                    "ସମସ୍ତ ଦାଖଲ ସହିତ ସ୍ପଷ୍ଟ ଏବଂ ସଠିକ୍ ବିଜ୍ଞାନମୂଳକ ବିବରଣୀ ଇଂରାଜୀରେ ଦେବା ଦରକାର। ଅନ୍ୟ ଭାଷାମାନେ ମଧ୍ୟ ସ୍ୱାଗତଯୋଗ୍ୟ।",
                    {
                        "text": "ସମ୍ଭବ ଉଚ୍ଚତମ ରେଜୋଲୁସନରେ ଅପଲୋଡ୍‌ କରନ୍ତୁ (ଅନ୍ତତଃ 2 ମେଗାପିକ୍ସେଲ୍)। ଆପଣ ମେଗାପିକ୍ସେଲ୍ ଗଣନା ଯାଞ୍ଚ କରିପାରିବେ ",
                        "link": {
                            "url": "https://medium.com/@SuyashWiki/how-to-easily-calculate-image-megapixels-and-why-it-matters-b53777e44594",
                            "label": "ଏଠାରେ"
                        }
                    },
                    "ଚିତ୍ରରେ ଜଳଚିହ୍ନ, ଲୋଗୋ କିମ୍ବା ଅନ୍ୟ କୃତ୍ରିମ ଟେକ୍ସ୍ଟ/ଗ୍ରାଫିକ୍ସ (ମାପ ଛାଡ଼ି) ଥିବା ଉଚିତ୍ ନୁହେଁ।"
                ]
            },
            "keyDates": {
                "title": "ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ତାରିଖଗୁଡିକ",
                "timeline": [
                    { "date": "ନଭେମ୍ବର 1, 2025", "event": "ଦାଖଲ ଆରମ୍ଭ" },
                    { "date": "ଡିସେମ୍ବର 15, 2025", "event": "ଦାଖଲ ଶେଷ" },
                    { "date": "ଜାନୁଆରୀ 2026", "event": "ମଣ୍ଡଳ ବିଚାର" },
                    { "date": "ଫେବୃଆରୀ 2026", "event": "ଜାତୀୟ ବିଜେତା ଘୋଷଣା" }
                ]
            },
            "submitNow": "ଏବେ ଦାଖଲ କରନ୍ତୁ",
            "imageCategories": {
                "title": "ଛବି ବର୍ଗଗୁଡିକ",
                "subtitle": "ଆପଣ ନିମ୍ନଲିଖିତ ସାତିଟି ବର୍ଗରେ ଅଂଶଗ୍ରହଣ କରିପାରିବେ। ଆପଣଙ୍କ କାମ ପାଇଁ ସର୍ବୋତ୍ତମ ବର୍ଗ ଚୟନ କରନ୍ତୁ। ଅନୁପ୍ରେରଣା ପାଇଁ ନିମ୍ନଲିଖିତ ଉଦାହରଣ ଦେଖନ୍ତୁ।"
            },
            "categories": {
                "people": { "name": "ବିଜ୍ଞାନରେ ଲୋକମାନେ", "description": "ସ୍ବାଭାବିକ ପରିବେଶରେ ବିଜ୍ଞାନୀମାନେ।" },
                "microscopy": { "name": "ମାଇକ୍ରୋସ୍କୋପି ଛବି", "description": "ଅପ୍ଟିକାଲ୍, ଇଲେକ୍‌ଟ୍ରନ୍, ଏବଂ ସ୍କାନିଂ ପ୍ରୋବ୍ ମାଇକ୍ରୋସ୍କୋପି ଛବିଗୁଡ଼ିକ।" },
                "nonPhotographic": { "name": "ଅଫୋଟୋଗ୍ରାଫିକ୍ ମାଧ୍ୟମ", "description": "ଅଡିଓ ଏବଂ ଭିଡିଓ ଫାଇଲ୍, କମ୍ପ୍ୟୁଟର ନିର୍ମିତ ଛବିଗୁଡ଼ିକ ଇତ୍ୟାଦି।" },
                "imageSets": { "name": "ଛବି ସେଟ୍‌", "description": "ବିଷୟନିର୍ଦ୍ଧିଷ୍ଟ ଛବିଗୁଡ଼ିକ (ସର୍ବାଧିକ 10ଟି) ଯାହାକୁ ଗୋଟିଏ ସେଟ୍‌ ବାପରି ଦେଖାଯାଇପାରିବ।" },
                "wildlife": { "name": "ବନ୍ୟଜନ୍ତୁ ଏବଂ ପ୍ରକୃତି", "description": "ସ୍ବାଭାବିକ ପରିବେଶରେ ଜୀବଜନ୍ତୁମାନେ, ମାକ୍ରୋ ଫଟୋଗ୍ରାଫି ସମେତ।" },
                "astronomy": {
                    "name": "ଖଗୋଳ ବିଜ୍ଞାନ",
                    "description": "ତାରା, ଖଗୋଳୀୟ ଘଟଣା ଏବଂ ସେଗୁଡ଼ିକୁ ଧରିବା ପାଇଁ ବ୍ୟବହୃତ ଉପକରଣର ଛବି।"
                },
                "general": {
                    "name": "ସାଧାରଣ ବର୍ଗ",
                    "description": "ଅନ୍ୟ ସମସ୍ତ, ଦେଖିବାକୁ ଆର୍କିଓଲୋଜି ରୁ ଭୁକମ୍ପ ବିଜ୍ଞାନ ପର୍ଯ୍ୟନ୍ତ।"
                }
            },
            "readyToParticipate": {
                "title": "ଅଂଶଗ୍ରହଣ ପାଇଁ ପ୍ରସ୍ତୁତ?",
                "subtitle": "ମଞ୍ଚ ତିଆରି। ଆପଣଙ୍କର ଲେନ୍ସ ହେଉଛି ଚାବି। ଆପଣଙ୍କ ବିଜ୍ଞାନ ଦୃଷ୍ଟିରେ ବିଶ୍ୱକୁ ଆମକୁ ଦେଖାନ୍ତୁ।",
                "cta": "ଆପଣଙ୍କ କାମ ଦାଖଲ କରନ୍ତୁ"
            },
            "supportedBy": "ଉପସ୍ଥାପନା: "
        },
        "contact": {
            "title": "ଆମ ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ",
            "subtitle": "ପ୍ରଶ୍ନ କିମ୍ବା ପ୍ରତିକ୍ରିୟା ଅଛି? ଆମେ ଆପଣଙ୍କ ଠାରୁ ଶୁଣିବାକୁ ଚାହୁଁଛୁ। ଆମେ ଦ୍ରୁତ ଉତ୍ତର ଦେବା ପ୍ରତିଶ୍ରୁତି ଦେଉଛୁ!",
            "getInTouch": "ଯୋଗାଯୋଗ କରନ୍ତୁ",
            "p1": "ଫର୍ମଟି ପୂରଣ କରନ୍ତୁ ଏବଂ ଆମ ଦଳ କିଛି ଘଣ୍ଟା ମଧ୍ୟରେ ଆପଣଙ୍କୁ ସମ୍ପର୍କ କରିବ। ଆମେ ସହଯୋଗ ପାଇଁ ଏଠାରେ ଅଛୁ!",
            "form": {
                "name": "ପୂର୍ଣ୍ଣ ନାମ",
                "namePlaceholder": "ଆପଣଙ୍କ ନାମ",
                "email": "ଇମେଲ୍ ଠିକଣା",
                "emailPlaceholder": "your.email@example.com",
                "subject": "ବିଷୟ",
                "subjectPlaceholder": "ଆପଣଙ୍କ ପ୍ରଶ୍ନ ପାଇଁ ଗୋଟିଏ ବିଷୟ ଚୟନ କରନ୍ତୁ",
                "otherSubjectPlaceholder": "ଦୟାକରି ଆପଣଙ୍କ ବିଷୟ ଉଲ୍ଲେଖ କରନ୍ତୁ",
                "message": "ବାର୍ତ୍ତା",
                "messagePlaceholder": "ଗୋଟିଏ ପୂର୍ବ-ଲିଖିତ ବାର୍ତ୍ତା ବା 'Others...' ଚୟନ କରନ୍ତୁ",
                "otherMessagePlaceholder": "ଦୟାକରି ଆପଣଙ୍କ ବାର୍ତ୍ତା ଉଲ୍ଲେଖ କରନ୍ତୁ",
                "selectSubjectFirst": "ଦୟାକରି ପ୍ରଥମେ ବିଷୟ ବାଛନ୍ତୁ",
                "submit": "ବାର୍ତ୍ତା ପଠାନ୍ତୁ",
                "submitting": "ପଠାଯାଉଛି..."
            },
            "toast": {
                "successTitle": "ବାର୍ତ୍ତା ପଠାଯାଇଛି!",
                "successDescription": "ଆମ ସହିତ ଯୋଗାଯୋଗ କରିଥିବା ପାଇଁ ଧନ୍ୟବାଦ। ଆମେ ଶୀଘ୍ରେ ଆପଣଙ୍କୁ ସମ୍ପର୍କ କରିବୁ।",
                "errorTitle": "ତ୍ରୁଟି",
                "errorDescription": "କିଛି ତ୍ରୁଟି ଘଟିଛି। ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ।"
            }
        },
        "organizers": {
            "title": "ଆୟୋଜକମାନେ ସହିତ ପରିଚୟ",
            "subtitle": "ପ୍ରଥମ Wiki Science Competition India କୁ ସଫଳ କରିବା ପାଇଁ ପଛରେ ଶ୍ରମ ଦେଉଥିବା ଉତ୍ସର୍ଗୀତ ଦଳ।",
            "lead_organizers": "ମୁଖ୍ୟ ଆୟୋଜକମାନେ",
            "advisors": "ପରାମର୍ଶଦାତାମାନେ",
            "core_organizing_team": "ମୂଳ ଆୟୋଜନ ଦଳ",
            "team": [
                {
                    "id": "dev_jadiya",
                    "name": "ଦେବ ଜାଦିୟା",
                    "role": "ମୁଖ୍ୟ ଆୟୋଜକ",
                    "roleKey": "lead_organizer",
                    "social": {
                        "linkedin": "https://www.linkedin.com/in/devjadiya/",
                        "meta": "https://meta.wikimedia.org/wiki/User:Dev_Jadiya"
                    }
                },
                {
                    "id": "gauri_gupta",
                    "name": "ଗୌରୀ ଗୁପ୍ତା",
                    "role": "ମୁଖ୍ୟ ଆୟୋଜକ",
                    "roleKey": "lead_organizer",
                    "social": {
                        "linkedin": "#",
                        "meta": "https://meta.wikimedia.org/wiki/User:Gauri_Guptaa"
                    }
                },
                {
                    "id": "suyash_dwivedi",
                    "name": "ସୁୟାଶ ଦ୍ୱିବେଦୀ",
                    "role": "ପରାମର୍ଶଦାତା",
                    "roleKey": "advisor",
                    "social": {
                        "linkedin": "https://www.linkedin.com/in/suyash-dwivedi-b47bab58/",
                        "meta": "https://meta.wikimedia.org/wiki/User:Suyash.dwivedi"
                    }
                },
                {
                    "id": "sai_kiran",
                    "name": "ସାଇ କିରଣ",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Nskjnv"
                    }
                },
                {
                    "id": "chinmayee_mishra",
                    "name": "ଚିନ୍ମୟୀ ମିଶ୍ର",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Chinmayee_Mishra"
                    }
                },
                {
                    "id": "athul_rt",
                    "name": "ଅଥୁଲ ଆର ଟି",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Athulvis"
                    }
                },
                {
                    "id": "uday_dongre",
                    "name": "ଉଦୟ ଡୋଙ୍ଗ୍ରେ",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Shoot_stufz"
                    }
                },
                {
                    "id": "pankaj_yadav",
                    "name": "ପଙ୍କଜ ଯାଦବ",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:The_open_draft"
                    }
                },
                {
                    "id": "ashmita_bathre",
                    "name": "ଅଶ୍ମିତା ବାଥ୍ରେ",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:AshmitaBathre204"
                    }
                },
                {
                    "id": "aanchal_patel",
                    "name": "ଆଞ୍ଚଳ ପଟେଲ",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Archies2804"
                    }
                },
                {
                    "id": "riddhi_sharma",
                    "name": "ଋଦ୍ଧି ଶର୍ମା",
                    "role": "ମୂଳ ଆୟୋଜନ ଦଳ",
                    "roleKey": "core_team",
                    "social": {
                        "meta": "https://meta.wikimedia.org/wiki/User:Herdaisymione"
                    }
                }
            ]
        },
        "organizersCall": {
            "title": "ଆୟୋଜକ ପାଇଁ ଆହ୍ୱାନ",
            "subtitle": "ଆମକୁ ଖୁସି ହେଉଛି ଯେ ଭାରତ ଏହି ବିଶ୍ୱ ଅଭିଯାନର ଏକ ସ୍ଥାନୀୟ ସଂସ୍କରଣ ଆୟୋଜନ କରିବାକୁ ଯାଉଛି, ଯାହା Wikimedia Commons ରେ ମୁକ୍ତ ଲାଇସେନ୍ସ ଥିବା ଛବି, ଭିଡିଓ ଓ ଅନ୍ୟ ମାଧ୍ୟମ ଦ୍ୱାରା ବିଜ୍ଞାନକୁ ପ୍ରଚାର କରେ।",
            "joinHeading": "ଆୟୋଜନ ଦଳରେ ଯୋଗ ଦିଅନ୍ତୁ",
            "joinDescription": "ସହଜ ମନ୍ତ୍ରଣା, ସମ୍ପ୍ରେଷଣ ଓ ଯୋଜନା ପାଇଁ ଆମେ ଆମ ଦଳକୁ ବିସ୍ତାର କରୁଛୁ। ଯଦି ଆପଣ ଏହି ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ପ୍ରୟାସରେ ଅଂଶ ନେବାକୁ ଇଚ୍ଛୁକ, ଆମେ ଆପଣଙ୍କ ଠାରୁ ଶୁଣିବାକୁ ଚାହୁଁଛୁ।",
            "lookingForHeading": "ଆମେ କାହାକୁ ଖୋଜୁଛୁ",
            "lookingFor": [
                "ବିଜ୍ଞାନ, ଫଟୋଗ୍ରାଫି କିମ୍ବା ମୁକ୍ତ ଜ୍ଞାନ ପ୍ରତି ଆଗ୍ରହ ଥିବା ଉତ୍ସାହୀ ବ୍ୟକ୍ତି।",
                "ଇଭେଣ୍ଟ ପ୍ଲାନିଂ, ସମ୍ପ୍ରେଷଣ, ସୋସିଆଲ୍ ମିଡିଆ ପରିଚାଳନା କିମ୍ବା ବିଷୟ ବସ୍ତୁ ସୃଷ୍ଟିରେ ଦକ୍ଷତା।",
                "ସହଯୋଗମୂଳକ ମନୋଭାବ ଓ ଗଭୀର ପ୍ରଭାବ ସୃଷ୍ଟି କରିବାର ଇଚ୍ଛା।"
            ],
            "sidebarTitle": "ଏବେ ଆବେଦନ କରନ୍ତୁ",
            "sidebarDescription": "ଭାରତରେ ପ୍ରଥମ Wiki Science Competition ଆକୃତି ନିର୍ମାଣରେ ଆମକୁ ସହଯୋଗ କରନ୍ତୁ।",
            "deadline": "ଆବେଦନ ବନ୍ଦ: 15 ଜୁଲାଇ 2025",
            "cta": "ଆବେଦନ ବନ୍ଦ ହୋଇଛି"
        },
        "resources": {
            "title": "ସାଧନସମୂହ",
            "subtitle": "ପୂର୍ବତନ ବିଜେତାମାନଙ୍କ ଦ୍ୱାରା ପ୍ରେରିତ ହୁଅନ୍ତୁ ଓ ଆପଣଙ୍କ ଦାଖଲ ପାଇଁ ଉପଯୋଗୀ ସାମଗ୍ରୀ ଅଭିଗମ୍ୟ କରନ୍ତୁ।",
            "pastWinners": {
                "title": "ପୂର୍ବତନ ବିଜେତାମାନଙ୍କ ଗ୍ୟାଲେରୀ",
                "winnerLabel": "ବିଜେତା",
                "winners": [
                    {
                        "year": 2023,
                        "category": "ଖଗୋଳ ବିଜ୍ଞାନ",
                        "winner": "ଅଞ୍ଜଳି ଶର୍ମା"
                    },
                    {
                        "year": 2023,
                        "category": "ଜୀବ ବିଜ୍ଞାନ",
                        "winner": "ରୋହନ୍ ମେହେତା"
                    },
                    {
                        "year": 2022,
                        "category": "ରସାୟନ ବିଜ୍ଞାନ",
                        "winner": "ପ୍ରିୟା ଦେସାଇ"
                    },
                    {
                        "year": 2022,
                        "category": "ଖଗୋଳ ବିଜ୍ଞାନ",
                        "winner": "ବିକ୍ରମ ସିଂହ"
                    }
                ]
            },
            "learningMaterials": {
                "title": "ଶିକ୍ଷା ଉପାଦାନ",
                "cta": "ଅଧିକ ଜାଣନ୍ତୁ",
                "resources": [
                    {
                        "title": "ବିଜ୍ଞାନ ଫଟୋଗ୍ରାଫିର ମାର୍ଗଦର୍ଶିକା",
                        "description": "ଆକର୍ଷଣୀୟ ବିଜ୍ଞାନ ସଂପର୍କିତ ଛବି ଧରିବାର ମୌଳିକ ଜ୍ଞାନ ଶିଖନ୍ତୁ।",
                        "link": "#"
                    },
                    {
                        "title": "କ୍ରିଏଟିଭ୍ କମନ୍ସ କୁ ବୁଝିବା",
                        "description": "ପ୍ରତିଯୋଗିତା ପାଇଁ ଆପଣଙ୍କର କାମକୁ କିପରି ଲାଇସେନ୍ସ କରିବେ ସେଥିରେ ସଂକ୍ଷିପ୍ତ ମାର୍ଗଦର୍ଶନ।",
                        "link": "#"
                    },
                    {
                        "title": "ଛବି ଅପଲୋଡ୍ କରିବାର ଟ୍ୟୁଟୋରିଆଲ୍",
                        "description": "ଆପଣଙ୍କର ଫୋଟୋ ଦାଖଲ କରିବା ପାଇଁ ପଦକ୍ଷେପ ପଦକ୍ଷେପ ଭିଡିଓ।",
                        "link": "#"
                    }
                ]
            },
            "support": {
                "title": "ଆମକୁ ସମର୍ଥନ କରନ୍ତୁ",
                "subtitle": "Wiki Science Competition India 2025 କୁ ବଡ଼ ସଫଳତାରେ ପରିଣତ କରିବାରେ ସାହାଯ୍ୟ କରନ୍ତୁ।",
                "options": [
                    {
                        "id": "sponsorship",
                        "icon": "Handshake",
                        "title": "ସ୍ପୋନ୍ସର୍ ହେବେ",
                        "description": "ସଂଚାଳନ ଖର୍ଚ୍ଚ, ପୁରସ୍କାର ଧନ ଓ ଘଟଣା ପରିଚାଳନା ପାଇଁ ଆର୍ଥିକ ସହଯୋଗ ଦେଇ ସମର୍ଥନ କରନ୍ତୁ। ଆମର ବିଭିନ୍ନ ସ୍ପୋନ୍ସର୍ ତହଲା ଓ ପ୍ରମୁଖ ବ୍ରାଣ୍ଡିଙ୍ଗ ସୁଯୋଗ ଅଛି।",
                        "cta": "ସ୍ପୋନ୍ସର୍ସିପ ପାଇଁ ସଂଯୋଗ କରନ୍ତୁ"
                    },
                    {
                        "id": "gifts",
                        "icon": "Gift",
                        "title": "ଉପହାର ଓ ସ୍ୱାଗ୍ ଦାନ କରନ୍ତୁ",
                        "description": "ଆମ ପୁରସ୍କାର ଧନରେ ରୋମାଞ୍ଚକ ଉପହାର, ୱାଉଚର୍ ବା ବ୍ରାଣ୍ଡିଡ୍ ସ୍ୱାଗ୍ ଯୋଗଦାନ କରନ୍ତୁ, ଯାହା ଜିତୁଥିବା ଓ ଅଂଶଗ୍ରହଣକାରୀଙ୍କ ପାଇଁ ଉପଯୋଗୀ। ବିଜ୍ଞାନ ପ୍ରେମୀଙ୍କ ମଧ୍ୟରେ ଆପଣଙ୍କର ବ୍ରାଣ୍ଡକୁ ପ୍ରସାର କରନ୍ତୁ।",
                        "cta": "ଉପହାର ପ୍ରଦାନ କରନ୍ତୁ"
                    },
                    {
                        "id": "outreach",
                        "icon": "Megaphone",
                        "title": "ଆଉଟରିଚ୍ ଓ ବିପଣନ",
                        "description": "ଆମ ସହଯୋଗ କରି ସୂଚନା ପ୍ରସାର କରନ୍ତୁ। ଆପଣଙ୍କର ସଂସ୍ଥାଗତ ଚ୍ୟାନେଲ୍, ସୋସିଆଲ୍ ମିଡିଆ କିମ୍ବା ବିପଣନ କୌଶଳ ମାଧ୍ୟମରେ ଆମେ ଏହାକୁ ବିସ୍ତାର କରିପାରିବା।",
                        "cta": "ଆଉଟରିଚ୍ରେ ସହଯୋଗ କରନ୍ତୁ"
                    }
                ]
            },
            "home": {
                "autoscroll": {
                    "slides": [
                        {
                            "id": 1,
                            "title": "ସୂକ୍ଷ୍ମଜୀବ ଜଗତକୁ ଅନ୍ୱେଷଣ କରନ୍ତୁ",
                            "description": "କୋଷୀୟ ଗଠନରୁ ସଂକ୍ରିଷ୍ଟ ଆକୃତି ପର୍ଯ୍ୟନ୍ତ, ଦୃଶ୍ୟମାନ ହେବା ନଥିବା ସୌନ୍ଦର୍ୟ ପ୍ରଦର୍ଶନ କରନ୍ତୁ।"
                        },
                        {
                            "id": 2,
                            "title": "ଆକାଶୀୟ ଆଶ୍ଚର୍ଯ୍ୟଗୁଡିକୁ ଧରନ୍ତୁ",
                            "description": "ବ୍ରହ୍ମାଣ୍ଡ ଆପଣଙ୍କର କାନ୍ଭାସ୍। ଗ୍ୟାଲାକ୍ସି, ନେବୁଲା ଓ ଗ୍ରହ ଘଟଣା ଫଟୋଗ୍ରାଫ କରନ୍ତୁ।"
                        },
                        {
                            "id": 3,
                            "title": "ଜଟିଳ ତଥ୍ୟକୁ ଭିଜୁଆଲ୍ କରନ୍ତୁ",
                            "description": "କଚୁଆ ତଥ୍ୟକୁ ଆকৰ୍ଷଣୀୟ ବିଜ୍ଞାନ ସୂଚନା ଓ ଇନଫୋଗ୍ରାଫିକ୍ସରେ ପରିଣତ କରନ୍ତୁ।"
                        },
                        {
                            "id": 4,
                            "title": "ମାନବ ସୃଜନଶୀଳତାକୁ ଡକ୍ୟୁମେଣ୍ଟ କରନ୍ତୁ",
                            "description": "ବିଜ୍ଞାନୀମାନେ କାମ କରୁଥିବା ଛବି, ନୂତନ ଲ୍ୟାବ୍ ସାମଗ୍ରୀ ଓ ଆବିଷ୍କାର ମୁହୂର୍ତ୍ତ ଧରନ୍ତୁ।"
                        }
                    ]
                },
                "cta": {
                    "title": "ଅଂଶଗ୍ରହଣ କରନ୍ତୁ",
                    "subtitle": "ଭାରତର ପ୍ରଥମ ଜାତୀୟ Wiki Science Competition ର ଅଂଶ ହେବାକୁ ଯୋଗ ଦିଅନ୍ତୁ। ଆମେ ଉତ୍ସାହୀ ବ୍ୟକ୍ତି ଓ ସଂଗଠନ ଖୋଜୁଛୁ।",
                    "campus": {
                        "title": "କ୍ୟାମ୍ପସ୍ ଏମ୍ବାସଡରମାନେ ପାଇଁ ଆହ୍ୱାନ",
                        "description": "ଆପଣଙ୍କର ସଂସ୍ଥାରେ କ୍ୟାମ୍ପେନ୍ ପ୍ରଚାର କରନ୍ତୁ, ନିୟମାବଳୀ ସେୟାର୍ କରନ୍ତୁ ଓ ସଚେତନତା କାର୍ଯ୍ୟକ୍ରମରେ ସାହାଯ୍ୟ କରନ୍ତୁ।",
                        "deadline": "ଶେଷ ତାରିଖ: 31 ଅଗଷ୍ଟ 2025",
                        "cta": "ଏବେ ଆବେଦନ କରନ୍ତୁ"
                    },
                    "affiliates": {
                        "title": "Wikimedia ଅଫିଲିଏଟ୍ମାନେ ପାଇଁ ଆହ୍ୱାନ",
                        "description": "ଆମ ସହଯୋଗ କରି କ୍ୟାମ୍ପେନ୍ ପ୍ରଚାର କରନ୍ତୁ, ସ୍ଥାନୀୟ ଆଉଟରିଚ୍ ଆୟୋଜନ କରନ୍ତୁ ଓ ଆପଣଙ୍କ ଅଞ୍ଚଳରୁ ବିଜ୍ଞାନ ଅବଦାନ ଆଣନ୍ତୁ।",
                        "deadline": "ଶେଷ ତାରିଖ: 31 ଅଗଷ୍ଟ 2025",
                        "cta": "ଆମ ସହଯୋଗ କରନ୍ତୁ"
                    }
                },
                "info": {
                    "title": "ଆପଣଙ୍କୁ ଜାଣିବାକୁ ଯାହା ଆବଶ୍ୟକ",
                    "subtitle": "ଦାଖଲ ନିୟମାବଳୀରୁ ନ୍ୟାୟଧୀଶ ବିବରଣୀ ପର୍ଯ୍ୟନ୍ତ, ଏହି ରୋମାଞ୍ଚକ ପ୍ରତିଯୋଗିତାର ଅଂଶ ହେବାକୁ ଆବଶ୍ୟକ ସମସ୍ତ ସୂଚନା ନିଆନ୍ତୁ।",
                    "cta": "ଅଧିକ ଜାଣନ୍ତୁ",
                    "sections": [
                        {
                            "icon": "Info",
                            "title": "ପ୍ରତିଯୋଗିତା ବିଷୟରେ",
                            "description": "ବାର୍ଷିକ ଆନ୍ତର୍ଜାତୀୟ ବିଜ୍ଞାନ ଫଟୋଗ୍ରାଫି ପ୍ରତିଯୋଗିତା, ଯାହା ବିଜ୍ଞାନ ପ୍ରେମୀମାନେ ସହିତ ଗବେଷଣା ଜଗତର ଦୃଷ୍ଟିକୋଣ ଅଂଶୀଦାର କରେ।",
                            "link": "/about"
                        },
                        {
                            "icon": "Target",
                            "title": "କିପରି ଅଂଶଗ୍ରହଣ କରିବେ",
                            "description": "ଅଂଶଗ୍ରହଣ ମୁକ୍ତ ଓ ସମସ୍ତଙ୍କ ପାଇଁ ଖୋଲା। ଦାଖଲ କାଳସୀମାରେ ବିଭିନ୍ନ ବର୍ଗର ସର୍ବୋତ୍ତମ ବିଜ୍ଞାନ ସଂପର୍କିତ ଛବି ଦାଖଲ କରନ୍ତୁ।",
                            "link": "/competition"
                        },
                        {
                            "icon": "Award",
                            "title": "ପୁରସ୍କାର ଓ ସମ୍ମାନ",
                            "description": "ବିଜେତାମାନେ ଜାତୀୟ ସମ୍ମାନ, ପ୍ରମାଣପତ୍ର ଓ ପୁରସ୍କାର ପାଇବେ। ସର୍ବୋତ୍ତମ ଛବିମାନେ ଆନ୍ତର୍ଜାତୀୟ ଫାଇନାଲ୍‌ରେ ଯାଉଥିବେ।",
                            "link": "/competition"
                        },
                        {
                            "icon": "Users",
                            "title": "ନ୍ୟାୟଧୀଶ ଓ ମାନଦଣ୍ଡ",
                            "description": "ଆମ ବିଶେଷଜ୍ଞ ବିଜ୍ଞାନୀ ଓ ଫଟୋଗ୍ରାଫର୍ମାନେ ବୈଜ୍ଞାନିକ ମୂଲ୍ୟ, ମୂଳତ୍ୱ ଓ ସୌନ୍ଦର୍ୟ ଆଧାରରେ ପ୍ରବେଶପତ୍ର ମୂଲ୍ୟାଙ୍କନ କରିବେ।",
                            "link": "/jury"
                        },
                        {
                            "icon": "History",
                            "title": "ପୂର୍ବତନ ବିଜେତାମାନେ",
                            "description": "ପୂର୍ବ ବର୍ଷଗୁଡିକର ବିଜେତା ଛବି ଗ୍ୟାଲେରୀ ଦେଖନ୍ତୁ ଓ ଅଦ୍ଭୁତ ପ୍ରତିଭାରୁ ପ୍ରେରଣା ନିଅନ୍ତୁ।",
                            "link": "/resources"
                        }
                    ],
                    "finalCard": {
                        "title": "ଅଂଶଗ୍ରହଣ ପାଇଁ ପ୍ରସ୍ତୁତ?",
                        "subtitle": "ମଞ୍ଚ ପ୍ରସ୍ତୁତ। ଆପଣଙ୍କର କ୍ୟାମେରା ହେଉଛି କୁଞ୍ଜି। ବିଜ୍ଞାନୀ ଦୃଷ୍ଟିରେ ପୃଥିବୀକୁ ଦେଖାନ୍ତୁ।",
                        "cta": "ଆପଣଙ୍କର କାମ ଦାଖଲ କରନ୍ତୁ"
                    }
                },
                "prizes": {
                    "title": "ପୁରସ୍କାର ଓ ସମ୍ମାନ",
                    "subtitle": "ଆପଣଙ୍କର ଅଦ୍ଭୁତ ଭିଜୁଆଲ୍ ସମ୍ମାନ ପାଇବା ଯୋଗ୍ୟ। ଜାଣନ୍ତୁ ଆପଣ କ’ଣ ଜିତିପାରିବେ।",
                    "prizes": [
                        {
                            "icon": "Award",
                            "title": "ଜାତୀୟ ସମ୍ମାନ",
                            "description": "ବିଜେତାମାନେ ଆମର ଅଧିକୃତ ମଞ୍ଚରେ ସମ୍ମାନିତ ହେବେ ଓ ଜାତୀୟ ସଂସାରରେ ପ୍ରସାର ପାଇବେ।"
                        },
                        {
                            "icon": "Camera",
                            "title": "ଶ୍ରେଷ୍ଠ ଉପକରଣ",
                            "description": "ସର୍ବୋତ୍ତମ ବିଜେତାଙ୍କ ପାଇଁ ଉତ୍ସାହଜନକ ଫଟୋଗ୍ରାଫି ଉପକରଣ ଓ ସାମଗ୍ରୀ।"
                        },
                        {
                            "icon": "BookOpen",
                            "title": "ପ୍ରକାଶନରେ ବିଶେଷ ସ୍ଥାନ",
                            "description": "ଆପଣଙ୍କର କାମକୁ ପ୍ରସିଦ୍ଧ ବିଜ୍ଞାନିକ ପତ୍ରିକା ଓ ପ୍ରକାଶନରେ ଦର୍ଶାଯିବ।"
                        }
                    ]
                },
                "jury": {
                    "title": "ଗରିମାମୟ ନ୍ୟାୟଧୀଶମାନଙ୍କୁ ମିଳନ କରନ୍ତୁ",
                    "description": "ଆମ ପ୍ୟାନେଲ୍‌ରେ ଭାରତର ପ୍ରସିଦ୍ଧ ବିଜ୍ଞାନୀ, ପ୍ରଫେସନାଲ୍ ଫଟୋଗ୍ରାଫର୍ ଓ ବିଜ୍ଞାନ ସଂପ୍ରେଷକ ଅଛନ୍ତି। ସେମାନେ ନ୍ୟାୟସଙ୍ଗତ ଓ ଗଭୀର ମୂଲ୍ୟାଙ୍କନ ପ୍ରକ୍ରିୟା ନିଶ୍ଚିତ କରିବେ।",
                    "cta": "ସମ୍ପୂର୍ଣ୍ଣ ପ୍ୟାନେଲ୍ ଦେଖନ୍ତୁ"
                }
            }
        }
    },
};

export type Translations = typeof translations;
