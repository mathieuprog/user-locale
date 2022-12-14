# user-locale

`user-locale` provides functions to retrieve default locale parameters from the user's browser and system.

The functions allow to retrieve:

* the date format;
* the time format;
* the preferred language tags (en-US, en, …);
* the time zone;
* the guessed country (from the time zone and preferred language tags);
* the first day of the week (from the guessed country);
* the color scheme (as configured in the OS or user agent).

## Usage

### Date format

`getDateFormat()` returns the order of the date components and the separator of the components.

```typescript
import { DateEndianness, getDateFormat } from 'user-locale';

getDateFormat()
```

A return value looks like:
```typescript
{
  endianness: DateEndianness.LittleEndian,
  separator: '/'
}
```

The `endianness` property allows to know in what order the date components are placed:

- `BigEndian`: year, month, day
- `LittleEndian`: day, month, year
- `MiddleEndian`: month, day, year

### Time format

`getTimeFormat()` returns whether the clock is the 12-hour clock or 24-hour clock, and the separator of the time components.

```typescript
import { getTimeFormat } from 'user-locale';

getTimeFormat()
```

A return value looks like:
```typescript
{
  is24HourClock: true,
  separator: ':'
}
```

### Preferred language tags

`getPreferredLanguageTags` returns the preferred (BCP 47) language tags.

```typescript
import { getPreferredLanguageTags } from 'user-locale';

getPreferredLanguageTags() // ['en-US', 'en']
```

### Time zone

`getTimeZone` returns the time zone.

```typescript
import { getTimeZone } from 'user-locale';

getTimeZone() // 'Asia/Bangkok'
```

### Country

`guessCountry` guesses the country from the time zone and preferred language tags.

```typescript
import { guessCountry } from 'user-locale';

guessCountry() // ['KH', 'LA', 'TH', 'VN']
```

The function returns an array of possible countries.
It first gets the list of countries which use the user's time zone (for instance, "Asia/Bangkok" is used in Thailand, Vietnam, Laos and Cambodia),
then filters out this list by any country code present in the preferred language tags (for instance, `['th', 'th-TH']` includes the country code of Thailand).

If the function returns only a single element, the confidence of having the right country is pretty high.

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

## Install

You can get `user-locale` via [npm](http://npmjs.com).

```
npm install user-locale
```
