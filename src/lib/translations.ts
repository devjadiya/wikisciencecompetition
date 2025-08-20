
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
        { name: 'Call for Team', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'Jury', href: '/jury'},
        { name: 'Support Us', href: '/support-us'},
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
    footerContactLink: 'General Inquiries',
    footerCopyright: 'Wiki Science Competition India. All rights reserved.',
    footerLicense: 'Content is available under CC BY-SA 4.0 unless otherwise noted.',
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
        { name: 'टीम के लिए कॉल', href: '/organizers/call' },
    ],
    moreDropdownLinks: [
        { name: 'जूरी', href: '/jury'},
        { name: 'समर्थन करें', href: '/support-us'},
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
    footerContactLink: 'सामान्य पूछताछ',
    footerCopyright: 'विकी विज्ञान प्रतियोगिता भारत। सर्वाधिकार सुरक्षित।',
    footerLicense: 'सामग्री CC BY-SA 4.0 के तहत उपलब्ध है जब तक कि अन्यथा उल्लेख न किया गया हो।',
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
    }
  },
};

export type Translations = typeof translations;
