import { describe, expect, it } from 'vitest'
import useAdd from './../hooks/useAdd';
describe('first test', () => {
  it('1 + 1 equals should be 2', () => {
    expect(useAdd(1, 1)).toBe(2)
    expect(useAdd(2, 1)).toBe(3)
    expect(useAdd(1, 1.1)).toBe(2.1)
  });
})