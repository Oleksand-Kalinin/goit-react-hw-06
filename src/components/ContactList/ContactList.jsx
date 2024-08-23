import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

function ContactList() {
  const contactsData = useSelector(selectContacts);
  const valueFilter = useSelector(selectNameFilter);
  const filteredContactsData = contactsData.filter((el) =>
    el.name.toLowerCase().includes(valueFilter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContactsData.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          <Contact userId={id} userName={name} userTelephoneNumber={number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
