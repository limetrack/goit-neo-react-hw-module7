import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styles from './FormGroup.module.css';

const FormGroup = ({
  type = 'text',
  id,
  name,
  label,
  value,
  isControlled,
  disabled,
  onChange,
}) => {
  if (isControlled) {
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          disabled={disabled}
        />
      </div>
    );
  }

  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        className={styles.input}
        disabled={disabled}
      />
      <ErrorMessage name={name} component="span" className={styles.formError} />
    </div>
  );
};

export default FormGroup;
