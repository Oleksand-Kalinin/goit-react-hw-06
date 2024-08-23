import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../data/contactsData.json";

const INITIAL_STATE = {
    items: contactsData,
};



const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact(state, action) {
            state.items.unshift(action.payload);
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload);
            state.items.splice(index, 1);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
