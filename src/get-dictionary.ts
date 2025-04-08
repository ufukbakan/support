import dictionary from './dictionary';

export default function getDictionary(lang: string): typeof dictionary.en{
    return dictionary[lang];
}