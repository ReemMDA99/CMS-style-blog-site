const {format_date, format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2022-05-24 16:12:03');

  expect(format_date(date)).toBe('5/24/2022');
});


test('format_plural() returns a pluralized word', () => {
  const singular = format_plural('tiger', 1);
  const plural = format_plural('lion', 2);

  expect(singular).toBe('tiger');
  expect(plural).toBe('lions');
});

