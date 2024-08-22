import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsData from "../data/contactsData.json";



const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: contactsData,
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.unshift(action.payload);
            },
            prepare(valuesForm) {
                const { name, number } = valuesForm
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
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
