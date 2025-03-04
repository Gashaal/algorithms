import { describe, it, expect } from 'vitest';
import classNames from './classnames';

describe('classnames', () => {
  it('should combine class names', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar');
    expect(classNames('foo', { bar: true })).toBe('foo bar');
    expect(classNames({ 'foo-bar': true })).toBe('foo-bar');
    expect(classNames({ 'foo-bar': false })).toBe('');
    expect(classNames({ foo: true }, { bar: true })).toBe('foo bar');
    expect(classNames({ foo: true, bar: true })).toBe('foo bar');
    expect(classNames({ foo: true, bar: false, qux: true })).toBe('foo qux');
    expect(classNames('a', ['b', { c: true, d: false }])).toBe('a b c');
    expect(
      classNames(
        'foo',
        {
          bar: true,
          duck: false,
        },
        'baz',
        { quux: true },
      ),
    ).toBe('foo bar baz quux');
    expect(classNames(null, false, 'bar', undefined, { baz: null }, '')).toBe('bar');
    expect(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')).toBe('bar 1');
  });
});
