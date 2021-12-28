import Massages from './messages'

export default class Lang {
  static messages: Record<string, any> = {}

  static _set(lang: string, rawMessages: Record<string, any>) {
    this.messages[lang] = rawMessages
  }

  static _get(lang: string) {
    this._load(lang)
    return this.messages[lang]
  }

  static _setRuleMessage(lang: string, attribute: string, message?: string) {
    this._load(lang)
    if (message === undefined) {
      message = this.messages[lang].def
    }

    this.messages[lang][attribute] = message
  }

  static _load(lang: string) {
    if (!this.messages[lang]) {
      let rawMessage
      try {
        rawMessage = require(`./lang/${lang}`)
        rawMessage = rawMessage.default ? rawMessage.default : rawMessage
        this._set(lang, rawMessage)
      } catch (e: any) {
        throw new Error('Could find `' + lang + '` file for the translation!')
      }
    }
  }

  static _make(lang: string) {
    this._load(lang)
    return new Massages(lang, this.messages[lang])
  }
}
