import { describe, expect, it } from 'vitest'
import { Validator } from '../src/main'

describe('size validation rule', () => {
  it('should fail with the state = C. Size must be 2 letters.', () => {
    const validator = new Validator({ state: 'C' }, { state: 'size:2' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should pass with the state = CA. Size must be 2 letters.', () => {
    const validator = new Validator({ state: 'CA' }, { state: 'size:2' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with an empty string', () => {
    const validator = new Validator({ state: '' }, { state: 'size:2' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with the age 65. Size must be 65', () => {
    const validator = new Validator({ age: 65 }, { age: 'size:65' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should fail with the age 64. Size must be 65.', () => {
    const validator = new Validator({ age: 64 }, { age: 'size:65' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should pass when no value exists in the input object', () => {
    const validator = new Validator({}, { age: 'size:65' })
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with string-integer', () => {
    const validator = new Validator({ age: '65' }, { age: 'integer|size:65' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with float-integer', () => {
    const validator = new Validator({ age: '65.36' }, { age: 'numeric|size:65.36' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should fail with no value', () => {
    const validator = new Validator({ age: 0 }, { age: 'numeric|size:1' })
    expect(validator.fails()).toBeTruthy()
  })
})
