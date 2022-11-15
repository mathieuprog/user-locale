import ColorScheme from './ColorScheme';
import countryFirstDayOfWeekMap from './data/countryFirstDayOfWeekMap';
import timeZoneCountryMap from './data/timeZoneCountryMap';
import DateFormat from './DateFormat';
import FirstDayOfWeek from './FirstDayOfWeek';

export function guessCountry(): string[] {
  return doGuessCountry(getTimeZone(), getPreferredLanguageTags());
}

export function doGuessCountry(userTimeZone: string, languageTags: string[]): string[] {
  const countryIsoCodesFromTimeZone = (userTimeZone) ? timeZoneCountryMap[userTimeZone] : [];

  const countryIsoCodesFromLanguageTags =
    languageTags
      .map((tag) => getCountryFromLanguageTag(tag))
      .filter((country) => country);

  const intersection = countryIsoCodesFromTimeZone.filter((countryIsoCode) => countryIsoCodesFromLanguageTags.includes(countryIsoCode));

  return (intersection.length > 0)
    ? intersection
    : countryIsoCodesFromTimeZone;
}

export function getCountryFromLanguageTag(languageTag: string): string | null {
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

export function getDateFormat(locales: string[] = []) {
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
  const dateFormat =
    new RegExp('d(.*?)m(.*?)y').test(dateFormatString)
      ? DateFormat.LittleEndian
      : (
        new RegExp('m(.*?)d(.*?)y').test(dateFormatString)
          ? DateFormat.MiddleEndian
          : (
            new RegExp('y(.*?)m(.*?)d').test(dateFormatString)
              ? DateFormat.BigEndian
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

  return { dateFormat, separator };
}

export function getTimeFormat(locales: string[] = []) {
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
  return doGetFirstDayOfWeek(guessCountry());
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
