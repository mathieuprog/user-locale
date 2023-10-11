import { expect, test } from 'vitest';
import { Temporal } from '@js-temporal/polyfill';
import {
  doGetFirstDayOfWeek,
  doGuessCountryCode,
  dateFormatter,
  timeFormatter,
  dateTimeFormatter,
  numberFormatter,
  numberParser,
  getCountryCodeFromLanguageTag,
  getDateFormat,
  getNativeLanguageNames,
  getNumberFormat,
  getTimeFormat
} from './functions';
import FirstDayOfWeek from './FirstDayOfWeek';
import DateEndianness from './DateEndianness';
import NumberFormat from './NumberFormat';

test('guessCountryCode', () => {
  expect(doGuessCountryCode('Europe/Brussels', ['fr', 'fr-BE', 'en'])).toEqual(['BE']);
  expect(doGuessCountryCode('Europe/Brussels', ['en'])).toEqual(['BE']);
  expect(doGuessCountryCode('Europe/Brussels', [])).toEqual(['BE']);
  expect(doGuessCountryCode('Asia/Bangkok', ['th', 'th-TH', 'en'])).toEqual(['TH']);
  expect(doGuessCountryCode('Asia/Bangkok', ['th', 'en'])).toEqual(['KH', 'LA', 'TH', 'VN']);
});

test('getCountryCodeFromLanguageTag', () => {
  expect(getCountryCodeFromLanguageTag('fr-BE')).toBe('BE');
  expect(getCountryCodeFromLanguageTag('fr')).toBe(null);
  expect(getCountryCodeFromLanguageTag('fr-BE-xx')).toBe('BE');
  expect(getCountryCodeFromLanguageTag('fr-xx-BE')).toBe('BE');
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

test('getNativeLanguageNames', () => {
  expect(getNativeLanguageNames(['nl', 'fr'])).toEqual([{ tag: "fr", name: "Français" }, { tag: "nl", name: "Nederlands" }]);
});

test('numberFormatter', () => {
  expect(numberFormatter(NumberFormat.PeriodComma)(1000.01)).toBe('1.000,01');
});

test('numberParser', () => {
  expect(numberParser(NumberFormat.PeriodComma)('1000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.PeriodComma)('1,000')).toBe(1);
  expect(numberParser(NumberFormat.PeriodComma)('1.000,01')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma)('1.000')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma)('1,000.01')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma)('1000.01')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma)('1,000,01')).toBeNull();

  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1,000')).toBe(1);
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1.000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1.000.000,01')).toBe(1000000.01);
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1.000')).toBe(1000);
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1,000.01')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1000.01')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma, { allowThousandSeparator: true })('1,000,01')).toBeNull();

  expect(numberParser(NumberFormat.PeriodComma, { precision: 2 })('1,000')).toBeNull();
  expect(numberParser(NumberFormat.PeriodComma, { precision: 2 })('1,00')).toBe(1);

  expect(numberParser(NumberFormat.CommaPeriod)('1000.01')).toBe(1000.01);
  expect(numberParser(NumberFormat.CommaPeriod)('1.000')).toBe(1);
  expect(numberParser(NumberFormat.CommaPeriod)('1,000.01')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod)('1,000')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod)('1.000,01')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod)('1000,01')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod)('1.000.01')).toBeNull();

  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1000.01')).toBe(1000.01);
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1.000')).toBe(1);
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1,000.01')).toBe(1000.01);
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1,000,000.01')).toBe(1000000.01);
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1,000')).toBe(1000);
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1.000,01')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1000,01')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod, { allowThousandSeparator: true })('1.000.01')).toBeNull();

  expect(numberParser(NumberFormat.CommaPeriod, { precision: 2 })('1.000')).toBeNull();
  expect(numberParser(NumberFormat.CommaPeriod, { precision: 2 })('1.00')).toBe(1);

  expect(numberParser(NumberFormat.SpaceComma)('1000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.SpaceComma)('1,000')).toBe(1);
  expect(numberParser(NumberFormat.SpaceComma)('1 000,01')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma)('1 000')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma)('1,000 01')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma)('1000 01')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma)('1,000,01')).toBeNull();

  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1,000')).toBe(1);
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1 000,01')).toBe(1000.01);
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1 000 000,01')).toBe(1000000.01);
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1 000')).toBe(1000);
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1,000 01')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1000 01')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma, { allowThousandSeparator: true })('1,000,01')).toBeNull();

  expect(numberParser(NumberFormat.SpaceComma, { precision: 2 })('1,000')).toBeNull();
  expect(numberParser(NumberFormat.SpaceComma, { precision: 2 })('1,00')).toBe(1);
});

test('dateFormatter', () => {
  expect(dateFormatter({ endianness: DateEndianness.LittleEndian, separator: '/' })(Temporal.PlainDate.from('2023-09-02'))).toBe('02/09/2023');
  expect(dateFormatter({ endianness: DateEndianness.MiddleEndian, separator: '.' })(Temporal.PlainDate.from('2023-09-02'))).toBe('09.02.2023');
  expect(dateFormatter({ endianness: DateEndianness.BigEndian, separator: '-' })(Temporal.PlainDate.from('2023-09-02'))).toBe('2023-09-02');
  expect(dateFormatter({ endianness: DateEndianness.BigEndian, separator: '-' })(Temporal.PlainDate.from('2023-09-02'))).toBe('2023-09-02');

  expect(dateFormatter({ endianness: DateEndianness.LittleEndian })(Temporal.PlainDate.from('2023-09-02'))).toBe('02/09/2023');
  expect(dateFormatter({ endianness: DateEndianness.BigEndian })(Temporal.PlainDate.from('2023-09-02'))).toBe('2023-09-02');
});

test('timeFormatter', () => {
  expect(timeFormatter({ is24HourClock: true }, { precision: 'second' })(Temporal.PlainTime.from('13:30:05'))).toEqual('13:30:05');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second' })(Temporal.PlainTime.from('13:30:05'))).toEqual('13.30.05');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'minute' })(Temporal.PlainTime.from('13:30:05'))).toEqual('13.30');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second' })(Temporal.PlainTime.from('03:30'))).toEqual('03.30.00');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'minute' })(Temporal.PlainTime.from('03:30'))).toEqual('03.30');

  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second' })(Temporal.PlainTime.from('13:30'))).toEqual('1.30.00 PM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'minute' })(Temporal.PlainTime.from('13:30'))).toEqual('1.30 PM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second' })(Temporal.PlainTime.from('03:30'))).toEqual('3.30.00 AM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'minute' })(Temporal.PlainTime.from('03:30'))).toEqual('3.30 AM');

  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second' })(Temporal.PlainTime.from('12:00'))).toEqual('12.00.00 PM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'minute' })(Temporal.PlainTime.from('00:00'))).toEqual('12.00 AM');

  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('12:00:00'))).toEqual('12 PM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('00:00:00'))).toEqual('12 AM');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('13:00:00'))).toEqual('13.00');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('03:00:00'))).toEqual('03.00');

  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('12:00:10'))).toEqual('12.00.10 PM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('00:00:10'))).toEqual('12.00.10 AM');
  expect(timeFormatter({ is24HourClock: false, separator: '.' }, { precision: 'minute', omitZeroUnits: true })(Temporal.PlainTime.from('00:00:10'))).toEqual('12 AM');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('13:00:10'))).toEqual('13.00.10');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'minute', omitZeroUnits: true })(Temporal.PlainTime.from('13:00:10'))).toEqual('13.00');
  expect(timeFormatter({ is24HourClock: true, separator: '.' }, { precision: 'second', omitZeroUnits: true })(Temporal.PlainTime.from('03:00:10'))).toEqual('03.00.10');
});

test('dateTimeFormatter', () => {
  const formatDate = dateFormatter({ endianness: DateEndianness.LittleEndian, separator: '/' });
  const formatTime = timeFormatter({ is24HourClock: false, separator: ':' }, { precision: 'second', omitZeroUnits: true });

  expect(dateTimeFormatter(formatDate, formatTime)(Temporal.PlainDateTime.from('2023-09-02 00:00:00'))).toEqual('02/09/2023 12 AM');
});
