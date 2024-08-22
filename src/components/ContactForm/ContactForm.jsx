import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contactsSlice";
import { changeFilter } from "../../redux/filtersSlice";

const phoneRegExp = /\d{3}-\d{2}-\d{2}$/;
const validationFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(phoneRegExp, "Telephone number is invalid")
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();
  const valuesForm = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    dispatch(changeFilter(""));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={valuesForm}
      onSubmit={handleSubmit}
      validationSchema={validationFormSchema}
    >
      <Form className={css.formAddContact}>
        <div className={css.fieldWrapper}>
          <label htmlFor={nameId}>Name:</label>
          <Field
            className={css.fieldInput}
            type="text"
            name="name"
            id={nameId}
            placeholder="e.g. Mike Shinoda"
          />
          <ErrorMessage
            className={css.errMessage}
            name="name"
            component="span"
          />
        </div>

        <div className={css.fieldWrapper}>
          <label htmlFor={numberId}> Number:</label>
          <Field
            className={css.fieldInput}
            type="tel"
            name="number"
            id={numberId}
            placeholder="mask: xxx-xx-xx"
          />
          <ErrorMessage
            className={css.errMessage}
            name="number"
            component="span"
          />
        </div>

        <button className={css.btnSubmitForm} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
