window.__base__ = '/support';
const supportedLangs = ["en", "tr", "es", "es-MX", "fr", "fr-CA", "de", "it", "pt", "pt-BR", "ru", "zh", "zh-TW", "ja", "ar", "hi", "ko", "nl", "he", "fa"];
const fallbackLang = 'en';
const [navigatorLang] = navigator.language.split('-');
window.__lang__ = supportedLangs.includes(navigatorLang) ? navigatorLang : fallbackLang;