import { describe, expect, it } from 'vitest'
import useAdd from './../hooks/useAdd';
describe('suite', () => {
  it('1 + 1 equals should be 2', () => {
    expect(useAdd(1, 1)).toBe(2)
  });
})