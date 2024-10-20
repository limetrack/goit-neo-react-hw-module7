import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiClient } from '../api/client';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch contacts');
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await apiClient.post(`/contacts`, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to add contact');
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await apiClient.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to delete contact');
    }
  }
);
