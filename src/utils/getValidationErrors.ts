import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string; // diz que a chave pode ser qualquer string
}

export default function getValidationErrors(error: ValidationError): Errors {
  const validationErrors: Errors = {};

  error.inner.forEach(e => {
    validationErrors[e.path] = e.message;
  });

  return validationErrors;
}
