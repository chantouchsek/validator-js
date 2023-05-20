import { describe, expect, it } from 'vitest'
import Validator from '../src/main'

describe('accepted validation rule', () => {
  it('should pass if the value is yes', () => {
    const validator = new Validator({ terms: 'yes' }, { terms: 'accepted' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass if the value is on', () => {
    const validator = new Validator({ terms: 'on' }, { terms: 'accepted' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass if the value is the number 1', () => {
    const validator = new Validator({ terms: 1 }, { terms: 'accepted' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass if the value is the string 1', () => {
    const validator = new Validator({ terms: '1' }, { terms: 'accepted' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should pass if the value is a boolean true', () => {
    const validator = new Validator({ terms: true }, { terms: 'accepted' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should fail if the value is not 1, on, or yes', () => {
    const validator = new Validator({ terms: '10' }, { terms: 'accepted' })
    expect(validator.passes()).toBeFalsy()
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail if the value is an empty string', () => {
    const validator = new Validator({ terms: '' }, { terms: 'accepted' })
    expect(validator.passes()).toBeFalsy()
    expect(validator.fails()).toBeTruthy()
  })

  it('should fail if the value is undefined', () => {
    const validator = new Validator({}, { terms: 'accepted' })
    expect(validator.passes()).toBeFalsy()
    expect(validator.fails()).toBeTruthy()
  })
})
