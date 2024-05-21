const tr = {
  accepted: ':attribute kabul edilmeli.',
  after: ':attribute alanı :after alanından sonra olmalıdır.',
  after_or_equal: ':attribute alanı :after_or_equal alanına eşit veya sonra olmalıdır.',
  alpha: ':attribute alanı sadece harflerden oluşabilir.',
  alpha_dash: ':attribute alanı sadece alfa-nümerik, tire ve alt çizgi karakterlerden oluşabilir.',
  alpha_num: ':attribute alanı alfa-nümerik olmalıdır.',
  attributes: {},
  before: ':attribute alanı :before alanından önce olmalıdır.',
  before_or_equal: ':attribute alanı :before_or_equal alanına eşit veya önce olmalıdır.',
  between: ':attribute alanı :min ile :max arasında olabilir.',
  confirmed: ':attribute uyuşmuyor.',
  date: ':attribute geöerli bir tarih alanı değil.',
  def: ':attribute hatalar içeriyor.',
  different: ':attribute ve :different farklı olmalı.',
  digits: ':attribute sadece rakamlardan oluşabilir.',
  digits_between: ':attribute :min ile :max arasında rakam olmalıdır.',
  email: ':attribute formatı geçersiz.',
  hex: ':attribute onaltılık formatta olmalı.',
  in: 'Seçilen :attribute geçerli değil.',
  integer: ':attribute tam sayı olmalı.',
  max: {
    array: ':attribute en fazla :max olabilir.',
    file: ':attribute en fazla :max kilobayt olabilir.',
    numeric: ':attribute en çok :max olabilir.',
    string: ':attribute uzunluğu en çok :max karakter uzunluğunda olabilir.',
  },
  min: {
    array: ':attribute en az :min olmalı.',
    file: ':attribute en az :min kilobayt olmalı.',
    numeric: ':attribute en az :min olmalı.',
    string: ':attribute en az :min karakter uzunluğunda olmalı.',
  },
  not_in: 'Seçilen :attribute geçerli değil.',
  numeric: ':attribute sayı olmalı.',
  present: ':attribute alanı bulunmalıdır (ancak boş olabilir).',
  regex: ':attribute formatı geçersiz.',
  required: ':attribute alanı gerekli.',
  required_if: ':attribute alanı :other alanı :value olduğunda gerekli.',
  required_unless: ':attribute alanı :other alanı :value değilse gereklidir.',
  required_with: ':attribute alanı :field boş değilse gereklidir.',
  required_with_all: ':attribute alanı :fields alanları boş değilse gereklidir.',
  required_without: ':attribute alanı :field alanı boşsa gereklidir.',
  required_without_all: ':attribute alanı :fields alanları boşsa gereklidir.',
  same: ':attribute ve :same aynı olmalı.',
  size: {
    array: ':attribute :size eleman içermelidir.',
    file: ':attribute :size kilobayt olmalıdır.',
    numeric: ':attribute :size olmalı.',
    string: ':attribute :size karakter uzunluğunda olmalı.',
  },
  string: ':attribute alfa-numerik olmalı.',
  url: ':attribute formatı geçersiz.',
}

export default tr
