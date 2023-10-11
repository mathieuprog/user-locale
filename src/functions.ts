import { Temporal } from '@js-temporal/polyfill';
import ColorScheme from './ColorScheme';
import countryFirstDayOfWeekMap from './data/countryFirstDayOfWeekMap';
import timeZoneCountryMap from './data/timeZoneCountryMap';
import languageTagNameMap from './data/languageTagNameMap';
import DateEndianness from './DateEndianness';
import FirstDayOfWeek from './FirstDayOfWeek';
import NumberFormat from './NumberFormat';

export interface DateFormat {
  endianness: DateEndianness;
  separator?: string;
};

export interface TimeFormat {
  is24HourClock: boolean;
  separator?: string;
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

export function numberFormatter(numberFormat: NumberFormat) {
  return (number: number | string, options: { [key: string]: unknown } = {}) => {
    switch (numberFormat) {
      case NumberFormat.CommaPeriod:
        return Intl.NumberFormat('en-US', options).format(Number(number));

      case NumberFormat.PeriodComma:
        return Intl.NumberFormat('de-DE', options).format(Number(number));

      case NumberFormat.SpaceComma:
        return Intl.NumberFormat('fr-FR', options).format(Number(number));
    }
  };
}

export function numberParser(numberFormat: NumberFormat) {
  return (localizedNumberString: string, options?: { allowThousandSeparator?: boolean, precision?: number }) => {
    const allowThousandSeparator = options?.allowThousandSeparator || false;

    localizedNumberString = localizedNumberString.trim();

    switch (numberFormat) {
      case NumberFormat.CommaPeriod:
        return (
          ((allowThousandSeparator) ? /^[0-9.,]+$/ : /^[0-9.]+$/).test(localizedNumberString)
          && (localizedNumberString.match(/\./g) || []).length <= 1
          && /^[^.]*(\.[^,]*)?$/.test(localizedNumberString)
          && ((options?.precision) ? /^\d*(?:,\d{3})*(?:\.\d{2})?$/ : /^(?:\d*(\.\d+)*|\d*(?:,\d{3})*(?:\.\d*)?)$/).test(localizedNumberString)
        )
          ? Number(localizedNumberString.replace(/,/g, ''))
          : null;

      case NumberFormat.PeriodComma:
        return (
          ((allowThousandSeparator) ? /^[0-9.,]+$/ : /^[0-9,]+$/).test(localizedNumberString)
          && (localizedNumberString.match(/,/g) || []).length <= 1
          && /^[^,]*(,[^.]*)?$/.test(localizedNumberString)
          && ((options?.precision) ? /^\d*(?:\.\d{3})*(?:,\d{2})?$/ : /^(?:\d*(,\d+)*|\d*(?:\.\d{3})*(?:,\d*)?)$/).test(localizedNumberString)
        )
          ? Number(localizedNumberString.replace(/\./g, '').replace(',', '.'))
          : null;

      case NumberFormat.SpaceComma: {
        return (
          ((allowThousandSeparator) ? /^[0-9, ]+$/ : /^[0-9,]+$/).test(localizedNumberString)
          && (localizedNumberString.match(/,/g) || []).length <= 1
          && /^[^,]*(\,[^ ]*)?$/.test(localizedNumberString)
          && ((options?.precision) ? /^\d*(?:\ \d{3})*(?:,\d{2})?$/ : /^(?:\d*(,\d+)*|\d*(?:\ \d{3})*(?:,\d*)?)$/).test(localizedNumberString)
        )
          ? Number(localizedNumberString.replace(/ /g, '').replace(',', '.'))
          : null;
      }
    }
  };
}

export function dateFormatter(dateFormat: DateFormat) {
  return (date: Temporal.PlainDate | Temporal.PlainDateTime) => {
    const day = String(date.day).padStart(2, '0');
    const month = String(date.month).padStart(2, '0');

    switch (dateFormat.endianness) {
      case DateEndianness.LittleEndian:
        return [day, month, date.year].join(dateFormat.separator ?? '/');

      case DateEndianness.MiddleEndian:
        return [month, day, date.year].join(dateFormat.separator ?? '/');

      case DateEndianness.BigEndian:
        return [date.year, month, day].join(dateFormat.separator ?? '-');
    }
  };
}

interface TimeFormatterOptions {
  precision: 'minute' | 'second';
  omitZeroUnits?: boolean;
}

export function timeFormatter(timeFormat: TimeFormat, options: TimeFormatterOptions) {
  return (time: Temporal.PlainTime | Temporal.PlainDateTime) => {
    let hour: string;

    if (timeFormat.is24HourClock) {
      hour = String(time.hour).padStart(2, '0');
    } else {
      if (time.hour === 24 || time.hour === 0) {
        hour = '12'
      } else if (time.hour > 12) {
        hour = String(time.hour - 12);
      } else {
        hour = String(time.hour);
      }
    }

    let minute = String(time.minute).padStart(2, '0');
    let second = String(time.second).padStart(2, '0');

    if (options.precision === 'minute') {
      second = '';
    }

    if (options.omitZeroUnits) {
      if (second === '00') {
        second = '';
      }

      if (!second && minute === '00' && !timeFormat.is24HourClock) {
        minute = '';
      }
    }

    let string = [hour].concat([minute, second].filter((e) => e)).join(timeFormat.separator ?? ':');

    if (!timeFormat.is24HourClock) {
      if (time.hour === 24 || time.hour === 0) {
        string += ' AM';
      } else if (time.hour >= 12) {
        string += ' PM';
      } else {
        string += ' AM';
      }
    }

    return string;
  };
}

export function dateTimeFormatter(
  formatDate: (dateTime: Temporal.PlainDateTime) => string,
  formatTime: (dateTime: Temporal.PlainDateTime) => string,
) {
  return (dateTime: Temporal.PlainDateTime) => {
    return formatDate(dateTime) + ' ' + formatTime(dateTime);
  };
}
