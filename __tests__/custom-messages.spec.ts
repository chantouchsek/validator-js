import { describe, expect, it } from 'vitest'
import Validator from '../src/main'

describe('Validator custom messages', () => {
  it('override the default message for the validator', () => {
    const validator = new Validator(
      { name: '' },
      { name: 'required' },
      {
        customMessages: {
          required: 'Name is missing.',
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual('Name is missing.')
  })

  it('override the default message for a type of the validator', () => {
    const validator = new Validator(
      { name: 'A' },
      { name: 'min:4' },
      {
        customMessages: {
          min: {
            string: ':attribute is not long enough. Should be :min.',
          },
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual('name is not long enough. Should be 4.')
  })

  it('override the default message for the validator with several :attribute in message', () => {
    const validator = new Validator(
      { name: '' },
      { name: 'required' },
      {
        customMessages: {
          required: ':attribute is required. :attribute can\'t be empty.',
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual('name is required. name can\'t be empty.')
  })

  it('override the default message for a type of the validator', () => {
    const validator = new Validator(
      { name: 'A' },
      {
        name: 'min:4',
      },
      {
        customMessages: {
          min: {
            string: ':attribute is not long enough. Should be :min.',
          },
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual('name is not long enough. Should be 4.')
  })

  it('override the default message for a type of the validator with several :attribute and :min in message', () => {
    const validator = new Validator(
      {
        name: 'A',
      },
      {
        name: 'min:4',
      },
      {
        customMessages: {
          min: {
            string:
              ':attribute is not long enough. :attribute should be :min. Because needed string with :min symbols or more.',
          },
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual(
      'name is not long enough. name should be 4. Because needed string with 4 symbols or more.',
    )
  })

  it('can be specified on a per attribute basis for a validator', () => {
    const validator = new Validator(
      {
        name: '',
        email: '',
      },
      {
        name: 'required',
        email: 'required',
      },
      {
        customMessages: {
          'required.name': 'Name is missing.',
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('name').length).toEqual(1)
    expect(validator.errors.first('name')).toEqual('Name is missing.')
    expect(validator.errors.get('email').length).toEqual(1)
    expect(validator.errors.first('email')).toEqual('The email is required.')
  })

  it('can be specified for custom validators', () => {
    Validator.register(
      'telephone',
      (value: string) => value.match(/^\d{3}-\d{3}-\d{4}$/),
      'The :attribute phone number is not in the format XXX-XXX-XXXX.',
    )

    const validator = new Validator(
      {
        phone: '1234567890',
      },
      {
        phone: 'telephone',
      },
      {
        customMessages: {
          telephone: 'Wrong number.',
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('phone').length).toEqual(1)
    expect(validator.errors.first('phone')).toEqual('Wrong number.')
  })

  it('can be specified for custom validators per attribute', () => {
    Validator.register(
      'telephone',
      (value: string) => value.match(/^\d{3}-\d{3}-\d{4}$/),
      'The :attribute phone number is not in the format XXX-XXX-XXXX.',
    )

    const validator = new Validator(
      {
        phone: '1234567890',
        fax: '1234567890',
      },
      {
        phone: 'telephone',
        fax: 'telephone',
      },
      {
        customMessages: {
          'telephone.fax': 'Why are you even using a fax?',
        },
      },
    )
    expect(validator.fails()).toBeTruthy()
    expect(validator.errors.get('phone').length).toEqual(1)
    expect(validator.errors.first('phone')).toEqual('The phone phone number is not in the format XXX-XXX-XXXX.')
    expect(validator.errors.get('fax').length).toEqual(1)
    expect(validator.errors.first('fax')).toEqual('Why are you even using a fax?')
  })
})
