const ua = {
  accepted: ':attribute повиннен бути прийнятий.',
  alpha: 'Поле :attribute може складатись тільки з літер.',
  alpha_dash: 'Поле :attribute може складатись тільки з літер, чисел, дефісів та символів підкреслення.',
  alpha_num: 'Поле :attribute може складатись тільки з літер та чисел.',
  attributes: {},
  between: 'Значення поля :attribute повинно знаходитись між :min і :max.',
  confirmed: 'Поле :attribute не співпадає з підтвердженням.',
  def: 'Поле :attribute містить помилки.',
  different: 'Поля :attribute і :different повинні відрізнятись.',
  digits: 'Довжина числового поля :attribute повинна бути :digits.',
  digits_between: 'Довжина цифрового поля :attribute повинна бути від :min до :max.',
  email: 'Значення поля :attribute повинно бути існуючою електронною адресою.',
  hex: 'Значення поля :attribute повинно бути шістнадцяткового формату',
  in: 'Обране значення для :attribute помилкове.',
  integer: 'Значення поля :attribute повинно бути цілим числом.',
  max: {
    array: 'Кількість елементів в полі :attribute не може перевищувати :max.',
    file: 'Розмір файлу в полі :attribute не може бути більше :max кілобайт.',
    numeric: 'Значення поля :attribute повинно бути менше або рівне :max.',
    string: 'Кількість символів в полі :attribute не може превищувати :max.',
  },
  min: {
    array: 'Кількість елементів в полі :attribute повинно бути не менше :min.',
    file: 'Розмір файлу в полі :attribute повинно бути не менше :min кілобайт.',
    numeric: 'Значення поля :attribute повинно бути більшим або рівним :min.',
    string: 'Кількість символів в полі :attribute повинна бути не менше :min.',
  },
  not_in: 'Обране значення для :attribute помилкове.',
  numeric: 'Значення поля :attribute повинно бути числом.',
  present: 'Поле :attribute повинно бути присутнім (але може бути пустим).',
  regex: 'Неправильний формат значення :attribute.',
  required: 'Поле :attribute обов\'язкове для заповнення.',
  required_if: 'Поле :attribute потрібне у випадку коли значення поля :other рівне :value.',
  same: 'Значеня поля :attribute повинно співпадати з :same.',
  size: {
    numeric: 'Значення поля :attribute повинно бути рівним :size.',
    string: 'Кількість символів в полі :attribute повинна бути рівною :size.',
  },
  url: 'Поле :attribute повинне містити валідний URL.',
}

export default ua
