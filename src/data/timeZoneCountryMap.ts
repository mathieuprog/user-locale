// https://github.com/mathieuprog/tz_extra

// countriesTimeZones.reduce((map, { country: { code }, timeZone, timeZoneLinks }) => {
//   map = timeZoneLinks.reduce((map, timeZoneLink) => ({ ...map, [timeZoneLink]: [...(map[timeZoneLink] ?? []), code] }), map);
//   return { ...map, [timeZone]: [...(map[timeZone] ?? []), code] };
// }, {});

const timeZoneCountryMap: Record<string, string[]> = {
  "Asia/Kabul": [
      "AF"
  ],
  "Europe/Mariehamn": [
      "AX",
      "FI"
  ],
  "Europe/Helsinki": [
      "AX",
      "FI"
  ],
  "Europe/Tirane": [
      "AL"
  ],
  "Africa/Algiers": [
      "DZ"
  ],
  "Europe/Andorra": [
      "AD"
  ],
  "Africa/Bangui": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Brazzaville": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Douala": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Kinshasa": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Libreville": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Luanda": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Malabo": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Niamey": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Porto-Novo": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "Africa/Lagos": [
      "AO",
      "BJ",
      "CM",
      "CF",
      "CD",
      "CG",
      "GQ",
      "GA",
      "NE",
      "NG"
  ],
  "America/Virgin": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Anguilla": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Antigua": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Dominica": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Grenada": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Guadeloupe": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Marigot": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Montserrat": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/St_Barthelemy": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/St_Kitts": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/St_Lucia": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/St_Thomas": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/St_Vincent": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Tortola": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "America/Port_of_Spain": [
      "AI",
      "AG",
      "DM",
      "GD",
      "GP",
      "MS",
      "BL",
      "KN",
      "LC",
      "MF",
      "VC",
      "TT",
      "VG",
      "VI"
  ],
  "Antarctica/Palmer": [
      "AQ"
  ],
  "Antarctica/Rothera": [
      "AQ"
  ],
  "Antarctica/Troll": [
      "AQ"
  ],
  "Antarctica/Syowa": [
      "AQ"
  ],
  "Antarctica/Mawson": [
      "AQ"
  ],
  "Antarctica/Vostok": [
      "AQ"
  ],
  "Antarctica/Davis": [
      "AQ"
  ],
  "Antarctica/Casey": [
      "AQ"
  ],
  "Antarctica/DumontDUrville": [
      "AQ"
  ],
  "Antarctica/McMurdo": [
      "AQ",
      "NZ"
  ],
  "Antarctica/South_Pole": [
      "AQ",
      "NZ"
  ],
  "Pacific/Auckland": [
      "AQ",
      "NZ"
  ],
  "America/Buenos_Aires": [
      "AR"
  ],
  "America/Argentina/Buenos_Aires": [
      "AR"
  ],
  "America/Argentina/ComodRivadavia": [
      "AR"
  ],
  "America/Catamarca": [
      "AR"
  ],
  "America/Argentina/Catamarca": [
      "AR"
  ],
  "America/Cordoba": [
      "AR"
  ],
  "America/Rosario": [
      "AR"
  ],
  "America/Argentina/Cordoba": [
      "AR"
  ],
  "America/Jujuy": [
      "AR"
  ],
  "America/Argentina/Jujuy": [
      "AR"
  ],
  "America/Argentina/La_Rioja": [
      "AR"
  ],
  "America/Mendoza": [
      "AR"
  ],
  "America/Argentina/Mendoza": [
      "AR"
  ],
  "America/Argentina/Rio_Gallegos": [
      "AR"
  ],
  "America/Argentina/Salta": [
      "AR"
  ],
  "America/Argentina/San_Juan": [
      "AR"
  ],
  "America/Argentina/San_Luis": [
      "AR"
  ],
  "America/Argentina/Tucuman": [
      "AR"
  ],
  "America/Argentina/Ushuaia": [
      "AR"
  ],
  "Asia/Yerevan": [
      "AM"
  ],
  "America/Aruba": [
      "AW",
      "BQ",
      "CW",
      "SX"
  ],
  "America/Lower_Princes": [
      "AW",
      "BQ",
      "CW",
      "SX"
  ],
  "America/Kralendijk": [
      "AW",
      "BQ",
      "CW",
      "SX"
  ],
  "America/Curacao": [
      "AW",
      "BQ",
      "CW",
      "SX"
  ],
  "Australia/West": [
      "AU"
  ],
  "Australia/Perth": [
      "AU"
  ],
  "Australia/Eucla": [
      "AU"
  ],
  "Australia/South": [
      "AU"
  ],
  "Australia/Adelaide": [
      "AU"
  ],
  "Australia/Yancowinna": [
      "AU"
  ],
  "Australia/Broken_Hill": [
      "AU"
  ],
  "Australia/North": [
      "AU"
  ],
  "Australia/Darwin": [
      "AU"
  ],
  "Australia/Queensland": [
      "AU"
  ],
  "Australia/Brisbane": [
      "AU"
  ],
  "Australia/Currie": [
      "AU"
  ],
  "Australia/Tasmania": [
      "AU"
  ],
  "Australia/Hobart": [
      "AU"
  ],
  "Australia/Lindeman": [
      "AU"
  ],
  "Australia/Victoria": [
      "AU"
  ],
  "Australia/Melbourne": [
      "AU"
  ],
  "Australia/ACT": [
      "AU"
  ],
  "Australia/Canberra": [
      "AU"
  ],
  "Australia/NSW": [
      "AU"
  ],
  "Australia/Sydney": [
      "AU"
  ],
  "Australia/LHI": [
      "AU"
  ],
  "Australia/Lord_Howe": [
      "AU"
  ],
  "Antarctica/Macquarie": [
      "AU"
  ],
  "Europe/Vienna": [
      "AT"
  ],
  "Asia/Baku": [
      "AZ"
  ],
  "America/Nassau": [
      "BS"
  ],
  "Asia/Bahrain": [
      "BH",
      "QA"
  ],
  "Asia/Qatar": [
      "BH",
      "QA"
  ],
  "Asia/Dacca": [
      "BD"
  ],
  "Asia/Dhaka": [
      "BD"
  ],
  "America/Barbados": [
      "BB"
  ],
  "Europe/Minsk": [
      "BY"
  ],
  "Europe/Brussels": [
      "BE"
  ],
  "America/Belize": [
      "BZ"
  ],
  "Atlantic/Bermuda": [
      "BM"
  ],
  "Asia/Thimbu": [
      "BT"
  ],
  "Asia/Thimphu": [
      "BT"
  ],
  "America/La_Paz": [
      "BO"
  ],
  "Europe/Ljubljana": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Europe/Podgorica": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Europe/Sarajevo": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Europe/Skopje": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Europe/Zagreb": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Europe/Belgrade": [
      "BA",
      "HR",
      "ME",
      "MK",
      "RS",
      "SI"
  ],
  "Africa/Blantyre": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Bujumbura": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Gaborone": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Harare": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Kigali": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Lubumbashi": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Lusaka": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "Africa/Maputo": [
      "BW",
      "BI",
      "CD",
      "MW",
      "MZ",
      "RW",
      "ZM",
      "ZW"
  ],
  "America/Eirunepe": [
      "BR"
  ],
  "America/Porto_Acre": [
      "BR"
  ],
  "Brazil/Acre": [
      "BR"
  ],
  "America/Rio_Branco": [
      "BR"
  ],
  "America/Boa_Vista": [
      "BR"
  ],
  "America/Campo_Grande": [
      "BR"
  ],
  "America/Cuiaba": [
      "BR"
  ],
  "Brazil/West": [
      "BR"
  ],
  "America/Manaus": [
      "BR"
  ],
  "America/Porto_Velho": [
      "BR"
  ],
  "America/Araguaina": [
      "BR"
  ],
  "America/Bahia": [
      "BR"
  ],
  "America/Belem": [
      "BR"
  ],
  "America/Fortaleza": [
      "BR"
  ],
  "America/Maceio": [
      "BR"
  ],
  "America/Recife": [
      "BR"
  ],
  "America/Santarem": [
      "BR"
  ],
  "Brazil/East": [
      "BR"
  ],
  "America/Sao_Paulo": [
      "BR"
  ],
  "Brazil/DeNoronha": [
      "BR"
  ],
  "America/Noronha": [
      "BR"
  ],
  "Europe/Belfast": [
      "GB",
      "GG",
      "IM",
      "JE"
  ],
  "Europe/Jersey": [
      "GB",
      "GG",
      "IM",
      "JE"
  ],
  "Europe/Guernsey": [
      "GB",
      "GG",
      "IM",
      "JE"
  ],
  "Europe/Isle_of_Man": [
      "GB",
      "GG",
      "IM",
      "JE"
  ],
  "Europe/London": [
      "GB",
      "GG",
      "IM",
      "JE"
  ],
  "Indian/Chagos": [
      "IO"
  ],
  "Asia/Brunei": [
      "BN"
  ],
  "Europe/Sofia": [
      "BG"
  ],
  "Africa/Bamako": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Banjul": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Conakry": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Dakar": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Freetown": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Lome": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Nouakchott": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Ouagadougou": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Atlantic/St_Helena": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Timbuktu": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Africa/Abidjan": [
      "BF",
      "CI",
      "GM",
      "GN",
      "ML",
      "MR",
      "SN",
      "SL",
      "SH",
      "TG"
  ],
  "Asia/Phnom_Penh": [
      "KH",
      "LA",
      "TH",
      "VN"
  ],
  "Asia/Vientiane": [
      "KH",
      "LA",
      "TH",
      "VN"
  ],
  "Asia/Bangkok": [
      "KH",
      "LA",
      "TH",
      "VN"
  ],
  "America/Dawson": [
      "CA"
  ],
  "Canada/Pacific": [
      "CA"
  ],
  "America/Vancouver": [
      "CA"
  ],
  "Canada/Yukon": [
      "CA"
  ],
  "America/Whitehorse": [
      "CA"
  ],
  "America/Cambridge_Bay": [
      "CA"
  ],
  "America/Creston": [
      "CA"
  ],
  "America/Dawson_Creek": [
      "CA"
  ],
  "Canada/Mountain": [
      "CA"
  ],
  "America/Edmonton": [
      "CA"
  ],
  "America/Fort_Nelson": [
      "CA"
  ],
  "America/Inuvik": [
      "CA"
  ],
  "America/Yellowknife": [
      "CA"
  ],
  "America/Rainy_River": [
      "CA"
  ],
  "America/Rankin_Inlet": [
      "CA"
  ],
  "Canada/Saskatchewan": [
      "CA"
  ],
  "America/Regina": [
      "CA"
  ],
  "America/Resolute": [
      "CA"
  ],
  "America/Swift_Current": [
      "CA"
  ],
  "Canada/Central": [
      "CA"
  ],
  "America/Winnipeg": [
      "CA"
  ],
  "America/Coral_Harbour": [
      "CA"
  ],
  "America/Atikokan": [
      "CA"
  ],
  "America/Iqaluit": [
      "CA"
  ],
  "America/Nipigon": [
      "CA"
  ],
  "America/Pangnirtung": [
      "CA"
  ],
  "America/Thunder_Bay": [
      "CA"
  ],
  "America/Montreal": [
      "CA"
  ],
  "Canada/Eastern": [
      "CA"
  ],
  "America/Toronto": [
      "CA"
  ],
  "America/Blanc-Sablon": [
      "CA"
  ],
  "America/Glace_Bay": [
      "CA"
  ],
  "America/Goose_Bay": [
      "CA"
  ],
  "Canada/Atlantic": [
      "CA"
  ],
  "America/Halifax": [
      "CA"
  ],
  "America/Moncton": [
      "CA"
  ],
  "Canada/Newfoundland": [
      "CA"
  ],
  "America/St_Johns": [
      "CA"
  ],
  "Atlantic/Cape_Verde": [
      "CV"
  ],
  "America/Cayman": [
      "KY",
      "PA"
  ],
  "America/Panama": [
      "KY",
      "PA"
  ],
  "Africa/Ndjamena": [
      "TD"
  ],
  "Chile/EasterIsland": [
      "CL"
  ],
  "Pacific/Easter": [
      "CL"
  ],
  "Chile/Continental": [
      "CL"
  ],
  "America/Santiago": [
      "CL"
  ],
  "America/Punta_Arenas": [
      "CL"
  ],
  "Asia/Kashgar": [
      "CN"
  ],
  "Asia/Urumqi": [
      "CN"
  ],
  "Asia/Chongqing": [
      "CN"
  ],
  "Asia/Chungking": [
      "CN"
  ],
  "Asia/Harbin": [
      "CN"
  ],
  "Asia/Shanghai": [
      "CN"
  ],
  "Indian/Christmas": [
      "CX"
  ],
  "Indian/Cocos": [
      "CC"
  ],
  "America/Bogota": [
      "CO"
  ],
  "Africa/Addis_Ababa": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Asmara": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Dar_es_Salaam": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Djibouti": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Kampala": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Mogadishu": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Indian/Antananarivo": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Indian/Comoro": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Indian/Mayotte": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Asmera": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Africa/Nairobi": [
      "KM",
      "DJ",
      "ER",
      "ET",
      "KE",
      "MG",
      "YT",
      "SO",
      "TZ",
      "UG"
  ],
  "Pacific/Rarotonga": [
      "CK"
  ],
  "America/Costa_Rica": [
      "CR"
  ],
  "America/Havana": [
      "CU"
  ],
  "Asia/Famagusta": [
      "CY"
  ],
  "Europe/Nicosia": [
      "CY"
  ],
  "Asia/Nicosia": [
      "CY"
  ],
  "Europe/Bratislava": [
      "CZ",
      "SK"
  ],
  "Europe/Prague": [
      "CZ",
      "SK"
  ],
  "Europe/Copenhagen": [
      "DK"
  ],
  "America/Santo_Domingo": [
      "DO"
  ],
  "Asia/Dili": [
      "TL"
  ],
  "Pacific/Galapagos": [
      "EC"
  ],
  "America/Guayaquil": [
      "EC"
  ],
  "Africa/Cairo": [
      "EG"
  ],
  "America/El_Salvador": [
      "SV"
  ],
  "Europe/Tallinn": [
      "EE"
  ],
  "Africa/Maseru": [
      "SZ",
      "LS",
      "ZA"
  ],
  "Africa/Mbabane": [
      "SZ",
      "LS",
      "ZA"
  ],
  "Africa/Johannesburg": [
      "SZ",
      "LS",
      "ZA"
  ],
  "Atlantic/Stanley": [
      "FK"
  ],
  "Atlantic/Faeroe": [
      "FO"
  ],
  "Atlantic/Faroe": [
      "FO"
  ],
  "Pacific/Fiji": [
      "FJ"
  ],
  "Europe/Paris": [
      "FR"
  ],
  "America/Cayenne": [
      "GF"
  ],
  "Pacific/Tahiti": [
      "PF"
  ],
  "Pacific/Marquesas": [
      "PF"
  ],
  "Pacific/Gambier": [
      "PF"
  ],
  "Indian/Reunion": [
      "TF",
      "RE"
  ],
  "Indian/Kerguelen": [
      "TF"
  ],
  "Asia/Tbilisi": [
      "GE"
  ],
  "Europe/Berlin": [
      "DE"
  ],
  "Europe/Busingen": [
      "DE",
      "LI",
      "CH"
  ],
  "Europe/Vaduz": [
      "DE",
      "LI",
      "CH"
  ],
  "Europe/Zurich": [
      "DE",
      "LI",
      "CH"
  ],
  "Africa/Accra": [
      "GH"
  ],
  "Europe/Gibraltar": [
      "GI"
  ],
  "Europe/Athens": [
      "GR"
  ],
  "America/Thule": [
      "GL"
  ],
  "America/Godthab": [
      "GL"
  ],
  "America/Scoresbysund": [
      "GL"
  ],
  "America/Danmarkshavn": [
      "GL"
  ],
  "Pacific/Saipan": [
      "GU",
      "MP"
  ],
  "Pacific/Guam": [
      "GU",
      "MP"
  ],
  "America/Guatemala": [
      "GT"
  ],
  "Africa/Bissau": [
      "GW"
  ],
  "America/Guyana": [
      "GY"
  ],
  "America/Port-au-Prince": [
      "HT"
  ],
  "America/Tegucigalpa": [
      "HN"
  ],
  "Asia/Hong_Kong": [
      "HK"
  ],
  "Europe/Budapest": [
      "HU"
  ],
  "Atlantic/Reykjavik": [
      "IS"
  ],
  "Asia/Calcutta": [
      "IN"
  ],
  "Asia/Kolkata": [
      "IN"
  ],
  "Asia/Jakarta": [
      "ID"
  ],
  "Asia/Pontianak": [
      "ID"
  ],
  "Asia/Ujung_Pandang": [
      "ID"
  ],
  "Asia/Makassar": [
      "ID"
  ],
  "Asia/Jayapura": [
      "ID"
  ],
  "Asia/Tehran": [
      "IR"
  ],
  "Asia/Baghdad": [
      "IQ"
  ],
  "Europe/Dublin": [
      "IE"
  ],
  "Asia/Tel_Aviv": [
      "IL"
  ],
  "Asia/Jerusalem": [
      "IL"
  ],
  "Europe/Vatican": [
      "IT",
      "SM",
      "VA"
  ],
  "Europe/San_Marino": [
      "IT",
      "SM",
      "VA"
  ],
  "Europe/Rome": [
      "IT",
      "SM",
      "VA"
  ],
  "America/Jamaica": [
      "JM"
  ],
  "Asia/Tokyo": [
      "JP"
  ],
  "Asia/Amman": [
      "JO"
  ],
  "Asia/Aqtau": [
      "KZ"
  ],
  "Asia/Aqtobe": [
      "KZ"
  ],
  "Asia/Atyrau": [
      "KZ"
  ],
  "Asia/Oral": [
      "KZ"
  ],
  "Asia/Qyzylorda": [
      "KZ"
  ],
  "Asia/Almaty": [
      "KZ"
  ],
  "Asia/Qostanay": [
      "KZ"
  ],
  "Pacific/Tarawa": [
      "KI"
  ],
  "Pacific/Enderbury": [
      "KI"
  ],
  "Pacific/Kiritimati": [
      "KI"
  ],
  "Asia/Pyongyang": [
      "KP"
  ],
  "Asia/Seoul": [
      "KR"
  ],
  "Asia/Aden": [
      "KW",
      "SA",
      "YE"
  ],
  "Asia/Kuwait": [
      "KW",
      "SA",
      "YE"
  ],
  "Asia/Riyadh": [
      "KW",
      "SA",
      "YE"
  ],
  "Asia/Bishkek": [
      "KG"
  ],
  "Europe/Riga": [
      "LV"
  ],
  "Asia/Beirut": [
      "LB"
  ],
  "Africa/Monrovia": [
      "LR"
  ],
  "Africa/Tripoli": [
      "LY"
  ],
  "Europe/Vilnius": [
      "LT"
  ],
  "Europe/Luxembourg": [
      "LU"
  ],
  "Asia/Macao": [
      "MO"
  ],
  "Asia/Macau": [
      "MO"
  ],
  "Asia/Kuala_Lumpur": [
      "MY"
  ],
  "Asia/Kuching": [
      "MY"
  ],
  "Indian/Maldives": [
      "MV"
  ],
  "Europe/Malta": [
      "MT"
  ],
  "Pacific/Kwajalein": [
      "MH"
  ],
  "Pacific/Majuro": [
      "MH"
  ],
  "America/Martinique": [
      "MQ"
  ],
  "Indian/Mauritius": [
      "MU"
  ],
  "America/Ensenada": [
      "MX"
  ],
  "America/Santa_Isabel": [
      "MX"
  ],
  "Mexico/BajaNorte": [
      "MX"
  ],
  "America/Tijuana": [
      "MX"
  ],
  "America/Chihuahua": [
      "MX"
  ],
  "America/Hermosillo": [
      "MX"
  ],
  "Mexico/BajaSur": [
      "MX"
  ],
  "America/Mazatlan": [
      "MX"
  ],
  "America/Ojinaga": [
      "MX"
  ],
  "America/Bahia_Banderas": [
      "MX"
  ],
  "America/Matamoros": [
      "MX"
  ],
  "America/Merida": [
      "MX"
  ],
  "Mexico/General": [
      "MX"
  ],
  "America/Mexico_City": [
      "MX"
  ],
  "America/Monterrey": [
      "MX"
  ],
  "America/Cancun": [
      "MX"
  ],
  "Pacific/Truk": [
      "FM"
  ],
  "Pacific/Yap": [
      "FM"
  ],
  "Pacific/Chuuk": [
      "FM"
  ],
  "Pacific/Kosrae": [
      "FM"
  ],
  "Pacific/Ponape": [
      "FM"
  ],
  "Pacific/Pohnpei": [
      "FM"
  ],
  "Europe/Tiraspol": [
      "MD"
  ],
  "Europe/Chisinau": [
      "MD"
  ],
  "Europe/Monaco": [
      "MC"
  ],
  "Asia/Hovd": [
      "MN"
  ],
  "Asia/Choibalsan": [
      "MN"
  ],
  "Asia/Ulan_Bator": [
      "MN"
  ],
  "Asia/Ulaanbaatar": [
      "MN"
  ],
  "Africa/Casablanca": [
      "MA"
  ],
  "Asia/Rangoon": [
      "MM"
  ],
  "Asia/Yangon": [
      "MM"
  ],
  "Africa/Windhoek": [
      "NA"
  ],
  "Pacific/Nauru": [
      "NR"
  ],
  "Asia/Katmandu": [
      "NP"
  ],
  "Asia/Kathmandu": [
      "NP"
  ],
  "Europe/Amsterdam": [
      "NL"
  ],
  "Pacific/Noumea": [
      "NC"
  ],
  "Pacific/Chatham": [
      "NZ"
  ],
  "America/Managua": [
      "NI"
  ],
  "Pacific/Niue": [
      "NU"
  ],
  "Pacific/Norfolk": [
      "NF"
  ],
  "Atlantic/Jan_Mayen": [
      "NO",
      "SJ"
  ],
  "Arctic/Longyearbyen": [
      "NO",
      "SJ"
  ],
  "Europe/Oslo": [
      "NO",
      "SJ"
  ],
  "Asia/Muscat": [
      "OM",
      "AE"
  ],
  "Asia/Dubai": [
      "OM",
      "AE"
  ],
  "Asia/Karachi": [
      "PK"
  ],
  "Pacific/Palau": [
      "PW"
  ],
  "Asia/Gaza": [
      "PS"
  ],
  "Asia/Hebron": [
      "PS"
  ],
  "Pacific/Port_Moresby": [
      "PG"
  ],
  "Pacific/Bougainville": [
      "PG"
  ],
  "America/Asuncion": [
      "PY"
  ],
  "America/Lima": [
      "PE"
  ],
  "Asia/Manila": [
      "PH"
  ],
  "Pacific/Pitcairn": [
      "PN"
  ],
  "Europe/Warsaw": [
      "PL"
  ],
  "Atlantic/Azores": [
      "PT"
  ],
  "Atlantic/Madeira": [
      "PT"
  ],
  "Europe/Lisbon": [
      "PT"
  ],
  "America/Puerto_Rico": [
      "PR"
  ],
  "Europe/Bucharest": [
      "RO"
  ],
  "Europe/Kaliningrad": [
      "RU"
  ],
  "Europe/Kirov": [
      "RU"
  ],
  "Europe/Moscow": [
      "RU"
  ],
  "Europe/Simferopol": [
      "RU",
      "UA"
  ],
  "Europe/Astrakhan": [
      "RU"
  ],
  "Europe/Samara": [
      "RU"
  ],
  "Europe/Saratov": [
      "RU"
  ],
  "Europe/Ulyanovsk": [
      "RU"
  ],
  "Europe/Volgograd": [
      "RU"
  ],
  "Asia/Yekaterinburg": [
      "RU"
  ],
  "Asia/Omsk": [
      "RU"
  ],
  "Asia/Barnaul": [
      "RU"
  ],
  "Asia/Krasnoyarsk": [
      "RU"
  ],
  "Asia/Novokuznetsk": [
      "RU"
  ],
  "Asia/Novosibirsk": [
      "RU"
  ],
  "Asia/Tomsk": [
      "RU"
  ],
  "Asia/Irkutsk": [
      "RU"
  ],
  "Asia/Chita": [
      "RU"
  ],
  "Asia/Khandyga": [
      "RU"
  ],
  "Asia/Yakutsk": [
      "RU"
  ],
  "Asia/Ust-Nera": [
      "RU"
  ],
  "Asia/Vladivostok": [
      "RU"
  ],
  "Asia/Magadan": [
      "RU"
  ],
  "Asia/Sakhalin": [
      "RU"
  ],
  "Asia/Srednekolymsk": [
      "RU"
  ],
  "Asia/Anadyr": [
      "RU"
  ],
  "Asia/Kamchatka": [
      "RU"
  ],
  "Pacific/Midway": [
      "AS",
      "UM"
  ],
  "Pacific/Samoa": [
      "AS",
      "UM"
  ],
  "US/Samoa": [
      "AS",
      "UM"
  ],
  "Pacific/Pago_Pago": [
      "AS",
      "UM"
  ],
  "Pacific/Apia": [
      "WS"
  ],
  "Africa/Sao_Tome": [
      "ST"
  ],
  "Indian/Mahe": [
      "SC"
  ],
  "Asia/Singapore": [
      "SG"
  ],
  "Pacific/Guadalcanal": [
      "SB"
  ],
  "Atlantic/South_Georgia": [
      "GS"
  ],
  "Africa/Juba": [
      "SS"
  ],
  "Atlantic/Canary": [
      "ES"
  ],
  "Africa/Ceuta": [
      "ES"
  ],
  "Europe/Madrid": [
      "ES"
  ],
  "Asia/Colombo": [
      "LK"
  ],
  "America/Miquelon": [
      "PM"
  ],
  "Africa/Khartoum": [
      "SD"
  ],
  "America/Paramaribo": [
      "SR"
  ],
  "Europe/Stockholm": [
      "SE"
  ],
  "Asia/Damascus": [
      "SY"
  ],
  "Asia/Taipei": [
      "TW"
  ],
  "Asia/Dushanbe": [
      "TJ"
  ],
  "Pacific/Fakaofo": [
      "TK"
  ],
  "Pacific/Tongatapu": [
      "TO"
  ],
  "Africa/Tunis": [
      "TN"
  ],
  "Asia/Istanbul": [
      "TR"
  ],
  "Europe/Istanbul": [
      "TR"
  ],
  "Asia/Ashkhabad": [
      "TM"
  ],
  "Asia/Ashgabat": [
      "TM"
  ],
  "America/Grand_Turk": [
      "TC"
  ],
  "Pacific/Funafuti": [
      "TV"
  ],
  "Pacific/Johnston": [
      "UM",
      "US"
  ],
  "US/Hawaii": [
      "UM",
      "US"
  ],
  "Pacific/Honolulu": [
      "UM",
      "US"
  ],
  "Pacific/Wake": [
      "UM"
  ],
  "Europe/Kiev": [
      "UA"
  ],
  "Europe/Uzhgorod": [
      "UA"
  ],
  "Europe/Zaporozhye": [
      "UA"
  ],
  "America/Atka": [
      "US"
  ],
  "US/Aleutian": [
      "US"
  ],
  "America/Adak": [
      "US"
  ],
  "US/Alaska": [
      "US"
  ],
  "America/Anchorage": [
      "US"
  ],
  "America/Juneau": [
      "US"
  ],
  "America/Metlakatla": [
      "US"
  ],
  "America/Nome": [
      "US"
  ],
  "America/Sitka": [
      "US"
  ],
  "America/Yakutat": [
      "US"
  ],
  "US/Pacific": [
      "US"
  ],
  "America/Los_Angeles": [
      "US"
  ],
  "America/Boise": [
      "US"
  ],
  "America/Shiprock": [
      "US"
  ],
  "US/Mountain": [
      "US"
  ],
  "America/Denver": [
      "US"
  ],
  "US/Arizona": [
      "US"
  ],
  "America/Phoenix": [
      "US"
  ],
  "US/Central": [
      "US"
  ],
  "America/Chicago": [
      "US"
  ],
  "America/Knox_IN": [
      "US"
  ],
  "US/Indiana-Starke": [
      "US"
  ],
  "America/Indiana/Knox": [
      "US"
  ],
  "America/Indiana/Tell_City": [
      "US"
  ],
  "America/Menominee": [
      "US"
  ],
  "America/North_Dakota/Beulah": [
      "US"
  ],
  "America/North_Dakota/Center": [
      "US"
  ],
  "America/North_Dakota/New_Salem": [
      "US"
  ],
  "US/Michigan": [
      "US"
  ],
  "America/Detroit": [
      "US"
  ],
  "America/Fort_Wayne": [
      "US"
  ],
  "America/Indianapolis": [
      "US"
  ],
  "US/East-Indiana": [
      "US"
  ],
  "America/Indiana/Indianapolis": [
      "US"
  ],
  "America/Indiana/Marengo": [
      "US"
  ],
  "America/Indiana/Petersburg": [
      "US"
  ],
  "America/Indiana/Vevay": [
      "US"
  ],
  "America/Indiana/Vincennes": [
      "US"
  ],
  "America/Indiana/Winamac": [
      "US"
  ],
  "America/Louisville": [
      "US"
  ],
  "America/Kentucky/Louisville": [
      "US"
  ],
  "America/Kentucky/Monticello": [
      "US"
  ],
  "US/Eastern": [
      "US"
  ],
  "America/New_York": [
      "US"
  ],
  "America/Montevideo": [
      "UY"
  ],
  "Asia/Samarkand": [
      "UZ"
  ],
  "Asia/Tashkent": [
      "UZ"
  ],
  "Pacific/Efate": [
      "VU"
  ],
  "America/Caracas": [
      "VE"
  ],
  "Asia/Saigon": [
      "VN"
  ],
  "Asia/Ho_Chi_Minh": [
      "VN"
  ],
  "Pacific/Wallis": [
      "WF"
  ],
  "Africa/El_Aaiun": [
      "EH"
  ]
};

export default timeZoneCountryMap;
