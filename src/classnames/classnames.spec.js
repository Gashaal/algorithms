const test = require('ava');
const classNames = require('./classnames');

test('classnames', (t) => {
  t.is(classNames('foo', 'bar'), 'foo bar');
  t.is(classNames('foo', { bar: true }), 'foo bar');
  t.is(classNames({ 'foo-bar': true }), 'foo-bar');
  t.is(classNames({ 'foo-bar': false }), '');
  t.is(classNames({ foo: true }, { bar: true }), 'foo bar');
  t.is(classNames({ foo: true, bar: true }), 'foo bar');
  t.is(classNames({ foo: true, bar: false, qux: true }), 'foo qux');
  t.is(classNames('a', ['b', { c: true, d: false }]), 'a b c');
  t.is(
    classNames(
      'foo',
      {
        bar: true,
        duck: false,
      },
      'baz',
      { quux: true },
    ),
    'foo bar baz quux',
  );
  t.is(classNames(null, false, 'bar', undefined, { baz: null }, ''), 'bar');
  t.is(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''), 'bar 1');
});
