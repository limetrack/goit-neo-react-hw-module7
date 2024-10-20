import React from 'react';
import { toast } from 'react-toastify';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectLoading } from '../../redux/contactsSlice';
import { addContact } from '../../redux/contactsOps';
import { contactValidationSchema } from '../../validation/contactValidationSchema';
import FormGroup from '../FormGroup/FormGroup';
import styles from './ContactForm.module.css';

const initialValues = { name: '', number: '' };

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);

  const handleSubmit = (values, { resetForm }) => {
    const duplicate = contacts.find(contact => contact.name === values.name);

    if (duplicate) {
      toast.error(`${values.name} is already in contacts.`);
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <FormGroup name="name" label="Name" />
        <FormGroup name="number" label="Number" />

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
