import Validator from '../src/main'

describe('array rule', function () {
  it('should pass when array', function () {
    const validator = new Validator({ users: [] }, { users: 'array' })
    expect(validator.passes()).toBeTruthy()
    expect(validator.fails()).toBeFalsy()
  })

  it('should fail when given object', function () {
    const validator = new Validator({ users: {} }, { users: 'array' })
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it('should fail when given boolean', function () {
    const validator = new Validator({ users: true }, { users: 'array' })
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })

  it.skip('should have a minimum number of array items ', function () {
    const validator = new Validator(
      {
        names: [],
      },
      {
        names: 'array|min:1',
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.passes()).toBeFalsy()
  })
})
