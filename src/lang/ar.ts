const ar = {
  accepted: 'الصفة :attribute يجب أن تكون مقبولة',
  after: 'الصفة :attribute يجب أن تكون بعد الصفة :after.',
  after_or_equal: 'الصفة :attribute يجب أن تكون مساوية أو بعد الصفة :after_or_equal.',
  alpha: 'حقل الصفة  :attribute يجب أن تحتوي على أحرف فقط',
  alpha_dash: 'حقل الصفة :attribute مسموح بأن يحتوي على حروف و أرقام و شرطة و شرطة منخفضة',
  alpha_num: 'حقل الصفة :attribute يجب أن يحتوي على أحرف و أرقام',
  attributes: {
    city: 'المدينة',
    country: 'الدولة',
    email: 'البريد الالكتروني',
    firstname: 'الاسم الاول',
    lastname: 'الاسم الاخير',
    mobile: 'رقم الجوال',
    password: 'كلمة المرور',
    phone: 'رقم الهاتف',
    region: 'المنطقة',
    street: 'الشارع',
    subject: 'الموضوع',
    username: 'اسم المستخدم',
    website: 'الموقع الالكتروني',
    zipcode: 'الرمز البريدي',
  },
  before: 'الصفة :attribute يجب أن تكون قبل :before.',
  before_or_equal: 'الصفة :attribute يجب أن تكون مساوية أو قبل الصفة :before_or_equal.',
  between: 'حقل الصفة :attribute يجب أن يكون بين :min و :max.',
  confirmed: 'تأكيد الصفة :attribute غير متطابق.',
  date: 'الصفة :attribute صيغتها ليست تاريخ صحيح',
  def: 'الصفة :attribute تحتوي على أخطاء',
  different: 'الصفة :attribute و الصفة :different يجب أن تكونا مختلفتين',
  digits: 'الصفة :attribute يجب أن تكون :digits أرقام.',
  digits_between: 'يجب أن يحتوي :attribute بين :min و :max رقمًا/أرقام .',
  email: 'الصفة :attribute صيغتها غير صحيحة',
  hex: 'حقل الصفة :attribute يجب أن يحتوي على صيغة هكسيديسمل',
  in: 'الصفة :attribute المختارة، غير صحيحة.',
  integer: 'الصفة :attribute يجب أن تكون عدد صحيح',
  max: {
    array: 'الصفة :attribute يجب أن لا تحتوي أكثر من :max عنصر.',
    file: 'الصفة :attribute يجب أن لا تكون أكبر من :max كيلوبايت.',
    numeric: 'الصفة :attribute لا يمكن أن تكون أكبر من  :max.',
    string: 'الصفة :attribute يجب أن لا تكون أكثر من :max حرف.',
  },
  min: {
    array: 'الصفة :attribute يجب أن تحتوي على الأقل :min عنصر.',
    file: 'الصفة :attribute يجب أن تكون على الأقل :min كيلوبايت.',
    numeric: 'الصفة :attribute يجب أن تكون :min على الأقل',
    string: 'الصفة :attribute يجب أن تكون :min حرف على الأقل.',
  },
  not_in: 'الصفة :attribute المختارة غير صحيحة.',
  numeric: 'الصفة :attribute يجب أن تكون رقما.',
  present: 'حقل الصفة :attribute يجب أن يكون معرفا ، يمكن أن يكون فارغا.',
  regex: 'الصفة :attribute صياغتها غير صحيحة.',
  required: 'حقل الصفة :attribute مطلوب.',
  required_if: 'حقل الصفة :attribute مطلوب حين تكون قيمة الحقل :other تساوي :value.',
  required_unless: 'حقل الصفة :attribute مطلوب حين تكون قيم الحقل :other لا تساوي :value.',
  required_with: 'حقل الصفة :attribute مطلوب حين يكون الحقا :field غير فارغ.',
  required_with_all: 'حقل الصفة :attribute مطلوب حين تكون الحقول :fields غير فارغة.',
  required_without: 'حقل الصفة :attribute مطلوب حين يكون الحقل :field فارغا.',
  required_without_all: 'حقل الصفة :attribute مطلوب حين تكون الحقول :fields فارغة.',
  same: 'حقل الصفة :attribute و حقل الصفة :same يجب أن يتطابقا.',
  size: {
    numeric: 'الصفة :attribute يجب أن تكون :size.',
    string: 'الصفة :attribute يجب أن تكون :size حرفا.',
  },
  string: 'الصفة :attribute يجب أن تكون نص.',
  url: 'الصفة :attribute صياغتها غير صحيحة.',
}

export default ar
