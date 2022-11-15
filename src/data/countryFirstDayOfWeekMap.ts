import FirstDayOfWeek from '../FirstDayOfWeek';

// https://github.com/unicode-org/cldr/blob/main/common/supplemental/supplementalData.xml
const countriesByFirstDayOfWeekData: Record<FirstDayOfWeek, string> = {
  [FirstDayOfWeek.Monday]:
    `
    AD AI AL AM AN AR AT AU AX AZ
    BA BE BG BM BN BY
    CH CL CM CN CR CY CZ
    DE DK
    EC EE ES
    FI FJ FO FR
    GB GE GF GP GR
    HR HU
    IE IS IT
    KG KZ
    LB LI LK LT LU LV
    MC MD ME MK MN MQ MY
    NL NO NZ
    PL
    RE RO RS RU
    SE SI SK SM
    TJ TM TR
    UA UY UZ
    VA VN
    XK
    `,
  [FirstDayOfWeek.Friday]:
    `
    MV
    `,
  [FirstDayOfWeek.Saturday]:
    `
    AE AF BH DJ DZ EG IQ IR JO KW LY OM QA SD SY
    `,
  [FirstDayOfWeek.Sunday]:
    `
    AG AS
    BD BR BS BT BW BZ
    CA CO
    DM DO
    ET
    GT GU
    HK HN
    ID IL IN
    JM JP
    KE KH KR
    LA
    MH MM MO MT MX MZ
    NI NP
    PA PE PH PK PR PT PY
    SA SG SV
    TH TT TW
    UM US
    VE VI
    WS
    YE
    ZA ZW
    `,
};

const countryFirstDayOfWeekMap: Record<string, FirstDayOfWeek> = {};

for (const [dayOfWeek, countriesString] of Object.entries(countriesByFirstDayOfWeekData)) {
  const countries = countriesString.split(' ').map((c) => c.trim()).filter((c) => c);
  countries.forEach((c) => countryFirstDayOfWeekMap[c] = dayOfWeek as FirstDayOfWeek);
}

export default countryFirstDayOfWeekMap;
