type Language = {
  tag: string;
  name: string;
};

const languageTagNameMap: Language[] = [
  {
      "tag": "af",
      "name": "Afrikaans"
  },
  {
      "tag": "az",
      "name": "Azərbaycanca"
  },
  {
      "tag": "id",
      "name": "Bahasa Indonesia"
  },
  {
      "tag": "ms",
      "name": "Bahasa Melayu"
  },
  {
      "tag": "jv",
      "name": "Basa Jawa"
  },
  {
      "tag": "su",
      "name": "Basa Sunda"
  },
  {
      "tag": "bs",
      "name": "Bosanski"
  },
  {
      "tag": "ca",
      "name": "Català"
  },
  {
      "tag": "ceb",
      "name": "Cebuano"
  },
  {
      "tag": "co",
      "name": "Corsu"
  },
  {
      "tag": "cy",
      "name": "Cymraeg"
  },
  {
      "tag": "da",
      "name": "Dansk"
  },
  {
      "tag": "de",
      "name": "Deutsch"
  },
  {
      "tag": "et",
      "name": "Eesti"
  },
  {
      "tag": "en",
      "name": "English"
  },
  {
      "tag": "en-UK",
      "name": "English (UK)"
  },
  {
      "tag": "en-US",
      "name": "English (US)"
  },
  {
      "tag": "es",
      "name": "Español"
  },
  {
      "tag": "eo",
      "name": "Esperanto"
  },
  {
      "tag": "eu",
      "name": "Euskara"
  },
  {
      "tag": "fr",
      "name": "Français"
  },
  {
      "tag": "fy",
      "name": "Frysk"
  },
  {
      "tag": "ga",
      "name": "Gaeilge"
  },
  {
      "tag": "sm",
      "name": "Gagana Sāmoa"
  },
  {
      "tag": "gl",
      "name": "Galego"
  },
  {
      "tag": "gd",
      "name": "Gàidhlig"
  },
  {
      "tag": "ha",
      "name": "Hausa"
  },
  {
      "tag": "hmn",
      "name": "Hmoob"
  },
  {
      "tag": "hr",
      "name": "Hrvatski"
  },
  {
      "tag": "ig",
      "name": "Igbo"
  },
  {
      "tag": "it",
      "name": "Italiano"
  },
  {
      "tag": "rw",
      "name": "Kinyarwanda"
  },
  {
      "tag": "sw",
      "name": "Kiswahili"
  },
  {
      "tag": "ht",
      "name": "Kreyòl ayisyen"
  },
  {
      "tag": "ku",
      "name": "Kurdî"
  },
  {
      "tag": "la",
      "name": "Latina"
  },
  {
      "tag": "lv",
      "name": "Latviešu"
  },
  {
      "tag": "lt",
      "name": "Lietuvių"
  },
  {
      "tag": "lb",
      "name": "Lëtzebuergesch"
  },
  {
      "tag": "hu",
      "name": "Magyar"
  },
  {
      "tag": "mg",
      "name": "Malagasy"
  },
  {
      "tag": "mt",
      "name": "Malti"
  },
  {
      "tag": "mi",
      "name": "Māori"
  },
  {
      "tag": "nl",
      "name": "Nederlands"
  },
  {
      "tag": "no",
      "name": "Norsk"
  },
  {
      "tag": "om",
      "name": "Oromoo"
  },
  {
      "tag": "uz",
      "name": "Oʻzbek"
  },
  {
      "tag": "pl",
      "name": "Polski"
  },
  {
      "tag": "pt",
      "name": "Português"
  },
  {
      "tag": "ro",
      "name": "Română"
  },
  {
      "tag": "qu",
      "name": "Runa Simi"
  },
  {
      "tag": "st",
      "name": "Sesotho"
  },
  {
      "tag": "sn",
      "name": "Shona"
  },
  {
      "tag": "sq",
      "name": "Shqip"
  },
  {
      "tag": "sk",
      "name": "Slovenčina"
  },
  {
      "tag": "sl",
      "name": "Slovenščina"
  },
  {
      "tag": "so",
      "name": "Soomaali"
  },
  {
      "tag": "fi",
      "name": "Suomi"
  },
  {
      "tag": "sv",
      "name": "Svenska"
  },
  {
      "tag": "tl",
      "name": "Tagalog"
  },
  {
      "tag": "vi",
      "name": "Tiếng Việt"
  },
  {
      "tag": "tk",
      "name": "Türkmen"
  },
  {
      "tag": "tr",
      "name": "Türkçe"
  },
  {
      "tag": "yo",
      "name": "Yorùbá"
  },
  {
      "tag": "xh",
      "name": "isiXhosa"
  },
  {
      "tag": "zu",
      "name": "isiZulu"
  },
  {
      "tag": "is",
      "name": "Íslenska"
  },
  {
      "tag": "cs",
      "name": "Čeština"
  },
  {
      "tag": "haw",
      "name": "ʻŌlelo Hawaiʻi"
  },
  {
      "tag": "el",
      "name": "Ελληνικά"
  },
  {
      "tag": "be",
      "name": "Беларуская"
  },
  {
      "tag": "bg",
      "name": "Български"
  },
  {
      "tag": "ky",
      "name": "Кыргызча"
  },
  {
      "tag": "mk",
      "name": "Македонски"
  },
  {
      "tag": "mn",
      "name": "Монгол"
  },
  {
      "tag": "ru",
      "name": "Русский"
  },
  {
      "tag": "sr",
      "name": "Српски"
  },
  {
      "tag": "tt",
      "name": "Татарча"
  },
  {
      "tag": "tg",
      "name": "Тоҷикӣ"
  },
  {
      "tag": "uk",
      "name": "Українська"
  },
  {
      "tag": "kk",
      "name": "Қазақша"
  },
  {
      "tag": "hy",
      "name": "Հայերեն"
  },
  {
      "tag": "yi",
      "name": "ייִדיש"
  },
  {
      "tag": "he",
      "name": "עברית"
  },
  {
      "tag": "ug",
      "name": "ئۇيغۇرچە"
  },
  {
      "tag": "ur",
      "name": "اردو"
  },
  {
      "tag": "ar",
      "name": "العربية"
  },
  {
      "tag": "sd",
      "name": "سنڌي"
  },
  {
      "tag": "fa",
      "name": "فارسی"
  },
  {
      "tag": "ps",
      "name": "پښتو"
  },
  {
      "tag": "ne",
      "name": "नेपाली"
  },
  {
      "tag": "mr",
      "name": "मराठी"
  },
  {
      "tag": "hi",
      "name": "हिन्दी"
  },
  {
      "tag": "bn",
      "name": "বাংলা"
  },
  {
      "tag": "pa",
      "name": "ਪੰਜਾਬੀ"
  },
  {
      "tag": "gu",
      "name": "ગુજરાતી"
  },
  {
      "tag": "or",
      "name": "ଓଡ଼ିଆ"
  },
  {
      "tag": "ta",
      "name": "தமிழ்"
  },
  {
      "tag": "te",
      "name": "తెలుగు"
  },
  {
      "tag": "kn",
      "name": "ಕನ್ನಡ"
  },
  {
      "tag": "ml",
      "name": "മലയാളം"
  },
  {
      "tag": "si",
      "name": "සිංහල"
  },
  {
      "tag": "th",
      "name": "ไทย"
  },
  {
      "tag": "lo",
      "name": "ລາວ"
  },
  {
      "tag": "my",
      "name": "ဗမာစာ"
  },
  {
      "tag": "ka",
      "name": "ქართული"
  },
  {
      "tag": "am",
      "name": "አማርኛ"
  },
  {
      "tag": "km",
      "name": "ភាសាខ្មែរ"
  },
  {
      "tag": "zh",
      "name": "中文"
  },
  {
      "tag": "ja",
      "name": "日本語"
  },
  {
      "tag": "ko",
      "name": "한국어"
  }
];

export default languageTagNameMap;
