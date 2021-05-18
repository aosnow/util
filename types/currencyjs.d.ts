// ------------------------------------------------------------------------------
// name: currencyjs
// author: mudas( fnd.cool )
// created: 2021/5/12
// ------------------------------------------------------------------------------

type CurrencyAny = number | string | Currency;
type CurrencyFormat = (currency?: Currency, opts?: CurrencyOptions) => string;

export interface CurrencyStatic {
  (value: CurrencyAny, opts?: CurrencyOptions): Currency,

  new(value: CurrencyAny, opts?: CurrencyOptions): Currency
}

export interface CurrencyOptions {
  symbol?: string,
  separator?: string,
  decimal?: string,
  errorOnInvalid?: boolean,
  precision?: number,
  increment?: number,
  useVedic?: boolean,
  pattern?: string,
  negativePattern?: string,
  format?: CurrencyFormat,
  fromCents?: boolean
}

export interface Currency {
  add(number: CurrencyAny): Currency;

  subtract(number: CurrencyAny): Currency;

  multiply(number: CurrencyAny): Currency;

  divide(number: CurrencyAny): Currency;

  distribute(count: number): Array<Currency>;

  dollars(): number;

  cents(): number;

  format(opts?: CurrencyOptions | CurrencyFormat): string;

  toString(): string;

  toJSON(): number;

  readonly intValue: number;
  readonly value: number;
}

// const Currency: CurrencyConstructor;

export default CurrencyStatic;
