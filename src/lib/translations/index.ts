
import { en, type TranslationType } from './en';
import { hi } from './hi';
import { bn } from './bn';
import { te } from './te';
import { mr } from './mr';
import { ta } from './ta';
import { ur } from './ur';
import { gu } from './gu';
import { kn } from './kn';
import { or } from './or';
import { pa } from './pa';
import { ml } from './ml';
import { as } from './as';
import { es } from './es';
import { fr } from './fr';
import { et } from './et';
import { de } from './de';
import { pt } from './pt';

export const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'mr', name: 'मराठी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ur', name: 'اردو' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'or', name: 'ଓଡ଼ିଆ' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'as', name: 'অসমীয়া' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'et', 'name': 'Eesti' },
    { code: 'de', name: 'Deutsch' },
    { code: 'pt', name: 'Português' },
] as const;


export const translations = {
    en,
    hi,
    bn,
    te,
    mr,
    ta,
    ur,
    gu,
    kn,
    or,
    pa,
    ml,
    as,
    es,
    fr,
    et,
    de,
    pt,
};

export type { TranslationType };

    