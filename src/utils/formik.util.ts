import {FormikTouched} from 'formik';

/**
 * Provides respective error string if found
 * @param touched
 * @param errors
 * @param field
 */
export const hasError = (
  touched: any,
  errors: any,
  field: any,
  isSubmitting = true,
) => {
  if (field?.includes('.')) {
    const f1 = field?.split('.')[0];
    const f2 = field?.split('.')[1];
    if (errors[f1] !== undefined && touched[f1] !== undefined) {
      const check =
        (touched[f1][f2] === true || isSubmitting) &&
        errors[f1][f2] !== undefined;
      return check;
    }
    return false;
  }

  const check =
    (touched[field] === true || isSubmitting) && errors[field] !== undefined;
  return check;
};

/**
 * Sets all fields in the formikRef as submitted
 * @param formikRef
 * @param setFieldTouched
 */
export const setAllFieldsAsTouched = (
  fieldNames: string[],
  touchedObj: FormikTouched<any>,
) => {
  if (fieldNames !== undefined) {
    fieldNames.forEach((fieldName) => (touchedObj[fieldName] = true));
  }
};
