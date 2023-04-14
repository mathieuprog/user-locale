import { expect, test } from 'vitest';
import {
  doGetFirstDayOfWeek,
  doGuessCountry,
  getCountryFromLanguageTag,
  getDateFormat,
  getNumberFormat,
  getTimeFormat
} from './functions';
import FirstDayOfWeek from './FirstDayOfWeek';
import DateEndianness from './DateEndianness';
import NumberFormat from './NumberFormat';

test('guessCountry', () => {
  expect(doGuessCountry('Europe/Brussels', ['fr', 'fr-BE', 'en'])).toEqual(['BE']);
  expect(doGuessCountry('Europe/Brussels', ['en'])).toEqual(['BE']);
  expect(doGuessCountry('Europe/Brussels', [])).toEqual(['BE']);
  expect(doGuessCountry('Asia/Bangkok', ['th', 'th-TH', 'en'])).toEqual(['TH']);
  expect(doGuessCountry('Asia/Bangkok', ['th', 'en'])).toEqual(['KH', 'LA', 'TH', 'VN']);
});

test('getCountryFromLanguageTag', () => {
  expect(getCountryFromLanguageTag('fr-BE')).toBe('BE');
  expect(getCountryFromLanguageTag('fr')).toBe(null);
  expect(getCountryFromLanguageTag('fr-BE-xx')).toBe('BE');
  expect(getCountryFromLanguageTag('fr-xx-BE')).toBe('BE');
});

test('getNumberFormat', () => {
  expect(getNumberFormat(['fr-BE'])).toBe(NumberFormat.SpaceComma);
  expect(getNumberFormat(['de-DE'])).toBe(NumberFormat.PeriodComma);
  expect(getNumberFormat(['en-UK'])).toBe(NumberFormat.CommaPeriod);
  expect(getNumberFormat(['en-US'])).toBe(NumberFormat.CommaPeriod);
});

test('getDateFormat', () => {
  expect(getDateFormat(['fr-BE'])).toEqual({ endianness: DateEndianness.LittleEndian, separator: "/" });
  expect(getDateFormat(['nl-NL'])).toEqual({ endianness: DateEndianness.LittleEndian, separator: "-" });
  expect(getDateFormat(['en-US'])).toEqual({ endianness: DateEndianness.MiddleEndian, separator: "/" });
  expect(getDateFormat(['zh-CN'])).toEqual({ endianness: DateEndianness.BigEndian, separator: "/" });
  expect(getDateFormat(['fi-FI'])).toEqual({ endianness: DateEndianness.LittleEndian, separator: "." });
});

test('getTimeFormat', () => {
  expect(getTimeFormat(['fr-BE'])).toEqual({ is24HourClock: true, separator: ":" });
  expect(getTimeFormat(['en-US'])).toEqual({ is24HourClock: false, separator: ":" });
  expect(getTimeFormat(['zh-CN'])).toEqual({ is24HourClock: true, separator: ":" });
  expect(getTimeFormat(['fi-FI'])).toEqual({ is24HourClock: true, separator: "." });
});

test('getFirstDayOfWeek', () => {
  expect(doGetFirstDayOfWeek(['BE', 'EG'])).toBe(FirstDayOfWeek.Monday);
  expect(doGetFirstDayOfWeek(['US'])).toBe(FirstDayOfWeek.Sunday);
  expect(doGetFirstDayOfWeek(['EG'])).toBe(FirstDayOfWeek.Saturday);
  expect(doGetFirstDayOfWeek(['UNKNOWN'])).toBe(FirstDayOfWeek.Monday);
});
