# user-locale

`user-locale` provides functions to retrieve default locale parameters from the user's browser and system.

The functions allow to retrieve:

* the date format;
* the time format;
* the number format;
* the preferred language tags (en-US, en, …);
* the time zone;
* the guessed country (from the time zone and preferred language tags);
* the first day of the week (from the guessed country);
* the color scheme (as configured in the OS or user agent).

## Usage

### Date format

`getDateFormat()` returns the order of the date components and the separator of the components.

```typescript
import { DateEndianness, DateFormat, getDateFormat } from 'user-locale';

getDateFormat()
```

A return value looks like:
```typescript
const dateFormat: DateFormat = {
  endianness: DateEndianness.LittleEndian,
  separator: '/'
}
```

The `endianness` property allows to know in what order the date components are placed:

- `DateEndianness.BigEndian`: year, month, day
- `DateEndianness.LittleEndian`: day, month, year
- `DateEndianness.MiddleEndian`: month, day, year

### Time format

`getTimeFormat()` returns whether the clock is the 12-hour clock or 24-hour clock, and the separator of the time components.

```typescript
import { getTimeFormat, TimeFormat } from 'user-locale';

getTimeFormat()
```

A return value looks like:
```typescript
const timeFormat: TimeFormat = {
  is24HourClock: true,
  separator: ':'
}
```

### Number format

`getNumberFormat()` returns a value from the NumberFormat enum, which indicates the characters of the thousands grouping and the decimal separator.

```typescript
import { getNumberFormat, NumberFormat } from 'user-locale';

getNumberFormat()
```

The possible returned values are:
```typescript
NumberFormat.CommaPeriod // e.g. for locale 'en-US'
NumberFormat.PeriodComma // e.g. for locale 'de-DE'
NumberFormat.SpaceComma // e.g. for locale 'fr-FR'
```

### Preferred language tags

`getPreferredLanguageTags` returns the preferred (BCP 47) language tags.

```typescript
import { getPreferredLanguageTags } from 'user-locale';

getPreferredLanguageTags() // ['en-US', 'en']
```

`user-locale` includes a convenient utility function, `getNativeLanguageNames()`, which returns an array of objects containing language names and their corresponding tags. Each language name is written in its native language.

```typescript
import { getNativeLanguageNames } from 'user-locale';

getNativeLanguageNames()
```

You can optionally provide a list of specific language tags to filter the results:

```typescript
import { getNativeLanguageNames } from 'user-locale';

getNativeLanguageNames('fr', 'en') // [{ "tag": "en", "name": "English" }, { "tag": "fr", "name": "Français" }]
```

### Time zone

`getTimeZone` returns the time zone.

```typescript
import { getTimeZone } from 'user-locale';

getTimeZone() // 'Asia/Bangkok'
```

### Country

`guessCountryCode` guesses the country from the time zone and preferred language tags.

```typescript
import { guessCountryCode } from 'user-locale';

guessCountryCode() // ['KH', 'LA', 'TH', 'VN']
```

The function returns an array of possible countries.
It first gets the list of countries which use the user's time zone (for instance, "Asia/Bangkok" is used in Thailand, Vietnam, Laos and Cambodia),
then filters out this list by any country code present in the preferred language tags (for instance, `['th', 'th-TH']` includes the country code of Thailand).

If the function returns only one element, it is fairly likely that the identified country is correct.

### First day of the week

`getFirstDayOfWeek` returns the first day of the week, based on the country that has been guessed.

```typescript
import { FirstDayOfWeek, getFirstDayOfWeek } from 'user-locale';

getFirstDayOfWeek() // FirstDayOfWeek.Monday
```

### Color scheme

`getColorScheme` returns the color scheme as configured in the OS or user agent.

```typescript
import { ColorScheme, getColorScheme } from 'user-locale';

getColorScheme() // ColorScheme.Dark
```

### Utility functions

```typescript
import { dateFormatter, dateTimeFormatter, timeFormatter, numberFormatter } from 'user-locale';

numberFormatter(NumberFormat.PeriodComma)(1000.01) // '1.000,01'

dateFormatter({ endianness: DateEndianness.LittleEndian, separator: '/' })(Temporal.PlainDate.from('2023-09-02')) // '02/09/2023'

timeFormatter({ is24HourClock: true, separator: ':' }, { precision: 'minute' })(Temporal.PlainTime.from('13:30:05')) // '13:30'

const formatDate = dateFormatter({ endianness: DateEndianness.LittleEndian, separator: '/' })
const formatTime = timeFormatter({ is24HourClock: false, separator: ':' }, { precision: 'second', omitZeroUnits: true })
dateTimeFormatter(formatDate, formatTime)(Temporal.PlainDateTime.from('2023-09-02 00:00:00')) // '02/09/2023 12 AM'
```

## Install

You can get `user-locale` via [npm](http://npmjs.com).

```
npm install user-locale
```
