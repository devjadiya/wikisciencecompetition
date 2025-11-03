
import { en } from './en';
import { hi } from './hi';


export const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
] as const;


export const translations = {
    en,
    hi,
};

export type { TranslationType } from './en';
