import { add } from './utils';

test('adds 1 + 2 to equal 3', () => {
  const mockAdd = jest.fn(add);
  expect(mockAdd(1, 2)).toBe(3);
  expect(mockAdd).toHaveBeenCalledWith(1, 2);
});
