import * as yup from 'yup'

const emailRegex = /^[^@]+@(?!.*(manonaddy|emailondeck|temp|online|free|mt2015|mailinator|temp-mail|guerrillamail|tempemail|airmail|jetable|maildrop|mailforspam|mailnesia|mytemp|spam4|mytrashmail|throwawaymail|yopmail|tempmail|disposable-email|trash-mail|spambox|tempemail|tempe-mail|spamfree24|10minutemail))/;
const specialsRegex = /^[^\u00C0-\u017F\u0000-\u001F()<>,+;:"'`\[\]ç%&\u0000]+$/;
const whiteSpacesRegex = /^[^\s]+$/;
export function validateInputs(values) {
  const validationSchema = yup.object().shape({
    emailValue: yup.string()
      .matches(whiteSpacesRegex, 'La dirección de correo electrónico es inválido.')
      .matches(specialsRegex, 'No se permiten caracteres especiales.')
      .matches(emailRegex, 'No se permiten correos electrónicos temporales.')
      .email('La dirección de correo electrónico es inválido.')
      .max(253, 'Se ha excedido el límite de caracteres.')
      .required('Indica tu dirección de e-mail.'),
    subjectValue: yup.string()
      .matches(specialsRegex, 'No se permiten caracteres especiales.')
      .min(6, 'Mínimo de 6 caracteres obligatorios.')
      .max(82, 'Se ha excedido el límite de caracteres.')
      .required('Introduce un asunto.'),
    messageValue: yup.string()
      .matches(specialsRegex, 'No se permiten caracteres especiales.')
      .min(10, 'Mínimo de 10 caracteres obligatorios.')
      .max(1800, 'Se ha excedido el límite de caracteres.')
      .required('Introduce un mensaje.'),
  });
  
  try {
    validationSchema.validateSync(values, { abortEarly: false });
    return {};
  } catch (error) {
    return getErrorsFromValidationError(error);
  }
}

function getErrorsFromValidationError(validationError) {
  const FIRST_ERROR = 0;
  return validationError.inner.reduce((errors, error) => {
    return {
      ...errors,
      [error.path]: error.errors[FIRST_ERROR],
    };
  }, {});
}