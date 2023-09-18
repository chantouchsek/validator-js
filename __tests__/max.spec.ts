import { describe, expect, it } from 'vitest'
import Validator from '../src/main'

describe('max validation rule', () => {
  it('should fail with the name "David". Maximum size is 3 letters.', () => {
    const validator = new Validator({ name: 'David' }, { name: 'max:3' })
    expect(validator.passes()).toBeFalsy()
  })

  it('should pass with the name "David". Maximum size is 5 letters.', () => {
    const validator = new Validator({ name: 'Da' }, { name: 'max:5' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should fail with the age "18". Max is 12.', () => {
    const validator = new Validator({ age: 18 }, { age: 'max:12' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should pass with the age "12". Max is 12.', () => {
    const validator = new Validator({ age: 12 }, { age: 'max:12' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should fail with boolean true value', () => {
    const validator = new Validator({ val: true }, { val: 'max:5' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail with boolean false value', () => {
    const validator = new Validator({ val: false }, { val: 'max:5' })
    expect(validator.fails()).toBeTruthy()
  })

  it('should pass when the age is 0', () => {
    const validator = new Validator({ age: 0 }, { age: 'max:2' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass when the field is an empty string', () => {
    const validator = new Validator({ email: '' }, { email: 'max:2' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass when the field does not exist', () => {
    const validator = new Validator({}, { email: 'max:2' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should fail when given string-integer value', () => {
    const validator = new Validator({ val: '18' }, { val: 'integer|max:16' })
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail when given string-float value', () => {
    const validator = new Validator({ val: '17.56' }, { val: 'numeric|max:17.5' })
    expect(validator.passes()).toBeFalsy()
  })

  it('should be failed when given string numeric', () => {
    const validator = new Validator({ val: '6' }, { val: 'numeric|max:5' })
    expect(validator.passes()).toBeFalsy()
  })

  it('should be failed when given value over max', () => {
    const validator = new Validator({ val: '100.1' }, { val: 'numeric|max:100' })
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should be failed when given string as phone number over max', () => {
    const validator = new Validator({ val: '012345678901' }, { val: 'digits|max:11' })
    expect(validator.fails()).toBeTruthy()
  })
})
