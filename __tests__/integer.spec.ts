import { describe, expect, it } from 'vitest'
import Validator from '../src/main'

describe('integer pass rules', () => {
  it('should pass if no value is entered', () => {
    const validator = new Validator({}, { age: 'integer' })
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with an integer value', () => {
    const validator = new Validator(
      {
        age: 18,
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with a string containing an integer value', () => {
    const validator = new Validator(
      {
        age: '18',
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeFalsy()
    expect(validator.passes()).toBeTruthy()
  })

  it('should pass with unsigned integer', () => {
    const validator = new Validator(
      {
        num: -123,
      },
      {
        num: 'integer',
      },
    )
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })
})

describe('integer fail rules', () => {
  it('should fail with a decimal value', () => {
    const validator = new Validator(
      {
        age: 18.9,
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
    expect(validator.errors.first('age')).toEqual('The age must be an integer.')
  })

  it('should fail with a string value containing numbers and letters', () => {
    const validator = new Validator(
      {
        age: '18d',
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
    expect(validator.errors.first('age')).toEqual('The age must be an integer.')
  })

  it('should fail with a boolean true value', () => {
    const validator = new Validator(
      {
        age: true,
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail with a boolean false value', () => {
    const validator = new Validator(
      {
        age: false,
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail if the value is an array', () => {
    const validator = new Validator(
      {
        age: [],
      },
      {
        age: 'required|integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail if the value is an array with one integer value', () => {
    const validator = new Validator(
      {
        age: [7],
      },
      {
        age: 'required|integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail if the value is an object', () => {
    const validator = new Validator(
      {
        age: {},
      },
      {
        age: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail with unsigned float-integer', () => {
    const validator = new Validator(
      {
        num: -70.36,
      },
      {
        num: 'integer',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })
})
