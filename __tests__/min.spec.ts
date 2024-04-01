import { describe, expect, it } from 'vitest'
import { Validator } from '../src/main'

describe('min validation rule', () => {
  it('should fail with the name "D". Minimum size is 2 letters.', () => {
    const validator = new Validator({ name: 'D' }, { name: 'min:2' })
    expect(validator.passes()).toBeFalsy()
  })

  it('should pass with the name "Da". Minimum is 2 letters.', () => {
    const validator = new Validator({ name: 'Da' }, { name: 'min:2' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with the age "18". Minimum is 18.', () => {
    const validator = new Validator({ age: 18 }, { age: 'min:18' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should fail with the age "17". Minimum is 18.', () => {
    const validator = new Validator({ age: 17 }, { age: 'min:18' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail with value of 0.04', () => {
    const validator = new Validator({ val: 0.04 }, { val: 'min:0.05' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail with boolean true value', () => {
    const validator = new Validator({ val: true }, { val: 'min:0.05' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail with boolean false value', () => {
    const validator = new Validator({ val: false }, { val: 'min:0.05' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should pass with an undefined value', () => {
    const validator = new Validator({}, { val: 'min:0.05' })
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with an empty string value', () => {
    const validator = new Validator({ val: '' }, { val: 'min:0.05' })
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass when given string-integer value', () => {
    const validator = new Validator({ val: '18' }, { val: 'integer|min:16' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass when given string-float value', () => {
    const validator = new Validator({ val: '17.56' }, { val: 'numeric|min:17.5' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should be passed when given string numeric', () => {
    const validator = new Validator({ val: '12345' }, { val: 'numeric|min:5' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should be passed when given string as phone number', () => {
    const validator = new Validator({ val: '01234567890' }, { val: 'digits:11' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should be failed when given string as phone number lower than min', () => {
    const validator = new Validator({ val: '0123456789' }, { val: 'digits:11' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should be failed when given array lower than min', () => {
    const validator = new Validator({ val: ['12'] }, { val: 'array|min:2' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should be passed when given array greater than min', () => {
    const validator = new Validator({ val: ['12', '32', '34'] }, { val: 'array|min:2' })
    expect(validator.passes()).toBeTruthy()
  })
})
