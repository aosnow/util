// ------------------------------------------------------------------------------
// name: string.spec
// author: mudas( mschool.tech )
// created: 2019/11/4 17:42
// ------------------------------------------------------------------------------

import { isEmpty } from '@mudas/util';

describe('empty value test:', () => {
  // `0`，`null`，`undefined`，`false`，`NaN`，`空字符串`，`空数组`

  it('0 is empty?', () => {
    expect(isEmpty(0)).toBeTruthy();
  });

  it('null is empty?', () => {
    expect(isEmpty(null)).toBeTruthy();
  });

  it('undefined is empty?', () => {
    expect(isEmpty(undefined)).toBeTruthy();
  });

  it('false is empty?', () => {
    expect(isEmpty(false)).toBeTruthy();
  });

  it('NaN is empty?', () => {
    expect(isEmpty(NaN)).toBeTruthy();
  });

  it('"" is empty?', () => {
    expect(isEmpty('')).toBeTruthy();
  });

  it('[] is empty?', () => {
    expect(isEmpty([])).toBeTruthy();
  });

  it('{} is empty?', () => {
    expect(isEmpty({})).toBeTruthy();
  });

  it('Object.create(null) is empty?', () => {
    expect(isEmpty(Object.create(null))).toBeTruthy();
  });

});
