import ColorScheme from './ColorScheme';
import countryFirstDayOfWeekMap from './data/countryFirstDayOfWeekMap';
import timeZoneCountryMap from './data/timeZoneCountryMap';
import languageTagNameMap from './data/languageTagNameMap';
import DateEndianness from './DateEndianness';
import FirstDayOfWeek from './FirstDayOfWeek';
import NumberFormat from './NumberFormat';

export interface DateFormat {
  endianness: DateEndianness;
  separator: string;
};

export interface TimeFormat {
  is24HourClock: boolean;
  separator: string;
};

export function guessCountryCode(): string[] {
  return doGuessCountryCode(getTimeZone(), getPreferredLanguageTags());
}

export function doGuessCountryCode(userTimeZone: string, languageTags: string[]): string[] {
  const countryIsoCodesFromTimeZone = (userTimeZone) ? timeZoneCountryMap[userTimeZone] : [];

  const countryIsoCodesFromLanguageTags =
    languageTags
      .map((tag) => getCountryCodeFromLanguageTag(tag))
      .filter((country) => country);

  const intersection = countryIsoCodesFromTimeZone.filter((countryIsoCode) => countryIsoCodesFromLanguageTags.includes(countryIsoCode));

  return (intersection.length > 0)
    ? intersection
    : countryIsoCodesFromTimeZone;
}

export function getCountryCodeFromLanguageTag(languageTag: string): string | null {
  return languageTag.split('-').find((tag) => tag === tag.toUpperCase() && tag.length === 2) || null;
}

export function getPreferredLanguageTags(): string[] {
  if (navigator.languages.length > 0) {
    return navigator.languages as string [];
  }

  return [navigator.language || 'en'];
}

export function getTimeZone(): string {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

export function getNumberFormat(locales: string[] = []): NumberFormat {
  const parts = Intl.NumberFormat(locales).formatToParts(1000.01);

  const defaultSeparators = {
    thousands: ',',
    decimal: '.'
  };

  const separators =
    parts.reduce(
      (separators, { type, value }) => {
        switch (type) {
          case 'group': return Object.assign(separators, { thousands: value });
          case 'decimal': return Object.assign(separators, { decimal: value });
        }
        return separators;
      },
      defaultSeparators
    );

  const thousands = isSpaceCharacter(separators.thousands) ? ' ' : separators.thousands;

  switch (thousands + separators.decimal) {
    default:
      return NumberFormat.CommaPeriod;

    case '.,':
      return NumberFormat.PeriodComma;

    case ' ,':
      return NumberFormat.SpaceComma;
  }
}

function isSpaceCharacter(char: string): boolean {
  const spaceCharacters: string[] = [
    '\u0020', // Space (SP)
    '\u00A0', // Non-breaking space (NBSP)
    '\u2002', // En space
    '\u2003', // Em space
    '\u2009', // Thin space
    '\u200A', // Hair space
    '\u202F', // Narrow non-breaking space (NNBSP)
  ];

  return spaceCharacters.includes(char);
}

export function getDateFormat(locales: string[] = []): DateFormat {
  const parts =
    Intl.DateTimeFormat(locales, {
      year: 'numeric', month: 'numeric', day: 'numeric'
    }).formatToParts(new Date(2020, 0, 1));

  const dateFormatString =
    parts.map(({ type, value }) => {
      switch (type) {
        case 'day': return (value === '1') ? 'd' : 'dd';
        case 'month': return (value === '1') ? 'm' : 'mm';
        case 'year': return 'yyyy';
        case 'literal': return value;
      }
    }).join('');

  return doGetDateFormat(dateFormatString);
}

function doGetDateFormat(dateFormatString: string) {
  const endianness =
    new RegExp('d(.*?)m(.*?)y').test(dateFormatString)
      ? DateEndianness.LittleEndian
      : (
        new RegExp('m(.*?)d(.*?)y').test(dateFormatString)
          ? DateEndianness.MiddleEndian
          : (
            new RegExp('y(.*?)m(.*?)d').test(dateFormatString)
              ? DateEndianness.BigEndian
              : (() => { throw new Error(`unknown date format`) })()
          )
      );

  const separators = dateFormatString.replaceAll(/[A-Za-z0-9]/g, '');

  const separator =
    separators.includes('/')
      ? '/'
      : (
        separators.includes('-')
          ? '-'
          : (
            separators.includes('.')
              ? '.'
              : '/'
          )
      );

  return { endianness, separator };
}

export function getTimeFormat(locales: string[] = []): TimeFormat {
  const parts =
    Intl.DateTimeFormat(locales, {
      hour: 'numeric', minute: 'numeric'
    }).formatToParts(new Date(2020, 0, 1, 13, 0));

  const timeFormatString =
    parts.map(({ type, value }) => {
      switch (type) {
        case 'hour':
          switch (value) {
            case '1':
              return 'h';
            case '13':
              return 'hh';
          }
          return (value === '1') ? 'h' : 'hh';
        case 'minute': return 'mm';
        case 'literal': return value;
      }
    }).join('');

  return doGetTimeFormat(timeFormatString);
}

function doGetTimeFormat(timeString: string) {
  const is24HourClock = new RegExp('hh').test(timeString);

  const separators = timeString.replaceAll(/[A-Za-z0-9]/g, '');

  const separator =
    separators.includes(':')
      ? ':'
      : (
        separators.includes('.')
          ? '.'
          : ':'
      );

  return { is24HourClock, separator };
}

export function getFirstDayOfWeek(): FirstDayOfWeek {
  return doGetFirstDayOfWeek(guessCountryCode());
}

export function doGetFirstDayOfWeek(countries: string[]): FirstDayOfWeek {
  if (countries.length === 0) {
    return FirstDayOfWeek.Monday;
  }

  if (countries.length === 1) {
    countryFirstDayOfWeekMap[countries[0]] || FirstDayOfWeek.Monday;
  }

  let daysOfWeek =
    countries.map((country) => {
      return countryFirstDayOfWeekMap[country] || FirstDayOfWeek.Monday
    });

  daysOfWeek = [...new Set(daysOfWeek)];

  if (daysOfWeek.length === 1) {
    return daysOfWeek[0];
  }

  return (daysOfWeek.includes(FirstDayOfWeek.Monday))
    ? FirstDayOfWeek.Monday
    : daysOfWeek[0];
}

export function getColorScheme() {
  return (window.matchMedia('(prefers-color-scheme: dark)').matches)
    ? ColorScheme.Dark
    : ColorScheme.Light;
}

export function getNativeLanguageNames(filterLanguageTags?: string[]) {
  if (!filterLanguageTags) {
    return languageTagNameMap;
  }

  return languageTagNameMap.filter(({ tag }) => filterLanguageTags.includes(tag));
}
