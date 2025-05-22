import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAdvances, createAdvance, fetchAdvanceById } from '../../services/advanceSalaryService';

// Async actions
export const loadAdvances = createAsyncThunk('advanceSalary/loadList', async () =>
  await fetchAdvances()
);
export const addAdvance   = createAsyncThunk('advanceSalary/add',       async payload =>
  await createAdvance(payload)
);
export const loadAdvance  = createAsyncThunk('advanceSalary/loadById',  async id =>
  await fetchAdvanceById(id)
);

// Slice
const advanceSalarySlice = createSlice({
  name: 'advanceSalary',
  initialState: { list: [], current: null, loading: false, error: null },
  extraReducers: builder => builder
    .addCase(loadAdvances.pending,  state => { state.loading = true })
    .addCase(loadAdvances.fulfilled,(state, action) => {
      state.loading = false;
      state.list    = action.payload;
    })
    .addCase(loadAdvances.rejected, (state, action) => {
      state.loading = false;
      state.error   = action.error.message;
    })
    .addCase(addAdvance.fulfilled,  (state, action) => {
      state.list.push(action.payload);
    })
    .addCase(loadAdvance.fulfilled, (state, action) => {
      state.current = action.payload;
    })
});

export default advanceSalarySlice.reducer;