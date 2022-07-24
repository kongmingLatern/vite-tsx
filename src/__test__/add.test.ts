import { describe, expect, it } from 'vitest'
import useAdd from '../hooks/useAdd';
describe('first test', () => {
  it('1 + 1 equals should be 2', () => {
    expect(useAdd(1, 1)).toBe(2)
    expect(useAdd(2, 1)).toBe(3)
    expect(useAdd(1, 1.1)).toBe(2.1)
  });
})
describe('second test', () => {
  it('object => object', () => {
    const options = {
      username: 'a',
      age: 19
    }

    expect(options).toEqual({
      username: 'a',
      age: 19
    })

  });
})