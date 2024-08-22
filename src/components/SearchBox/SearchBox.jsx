import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectNameFilter);

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapperFilterContacts}>
      <p className={css.findContacts}>Find contacts by name</p>
      <input
        className={css.inputSearchContacts}
        type="text"
        value={valueFilter}
        onChange={handleChangeFilter}
      />
    </div>
  );
}

export default SearchBox;
