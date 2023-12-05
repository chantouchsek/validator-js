import { describe, expect, it } from 'vitest'
import { Validator } from '../src/main'

describe('alpha_num validation rule', () => {
  it('should fail with non-alphanumeric characters', () => {
    const validator = new Validator({ age: '$' }, { age: 'alpha_num' })
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
    expect(validator.errors.first('age')).toEqual('The age field must be alphanumeric.')
  })

  it('should pass with only alphanumeric characters', () => {
    const validator = new Validator({ age: 'abc123' }, { age: 'alpha_num' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass with only numeric characters', () => {
    const validator = new Validator({ age: 123 }, { age: 'alpha_num' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass when the field is blank / optional', () => {
    const validator = new Validator({ name: '' }, { name: 'alpha_num' })
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass when the field does not exist', () => {
    const validator = new Validator(
      {},
      {
        name: 'alpha_num',
      },
    )
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })
})
