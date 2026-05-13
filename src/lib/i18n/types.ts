import type { dictionaries } from './dictionaries';

export type Locale = 'en' | 'pt';

export type DictKey = keyof typeof dictionaries.en;
