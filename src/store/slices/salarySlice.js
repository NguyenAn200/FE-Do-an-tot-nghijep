import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/salaryService';

export const loadSalaries      = createAsyncThunk('salary/loadAll', svc.fetchAllSalaries);
export const loadSalaryById    = createAsyncThunk('salary/loadById', svc.fetchSalaryById);
export const loadPagedSalaries = createAsyncThunk('salary/loadPaged', params => svc.fetchPagedSalaries(...params));
export const createSal         = createAsyncThunk('salary/create', svc.createSalary);
export const updateSal         = createAsyncThunk('salary/update', async ({id,data}) => await svc.updateSalary(id,data));
export const deleteSal         = createAsyncThunk('salary/delete', svc.deleteSalary);

const salarySlice = createSlice({
  name: 'salary',
  initialState: { list: [], current: null, loading: false, error: null, page: {} },
  extraReducers: builder => {
    builder
      .addCase(loadSalaries.pending,   state => { state.loading = true })
      .addCase(loadSalaries.fulfilled, (state, { payload }) => { state.loading = false; state.list = payload })
      .addCase(loadSalaries.rejected,  (state, { error }) => { state.loading = false; state.error = error.message })

      .addCase(loadSalaryById.fulfilled,   (state, { payload }) => { state.current = payload })
      .addCase(loadPagedSalaries.fulfilled,(state, { payload }) => { state.page = payload })
      .addCase(createSal.fulfilled,        (state, { payload }) => { state.list.push(payload) })
      .addCase(updateSal.fulfilled,        (state, { payload }) => { const idx = state.list.findIndex(s => s.salaryId === payload.salaryId); if (idx !== -1) state.list[idx] = payload })
      .addCase(deleteSal.fulfilled,        (state, { meta }) => { state.list = state.list.filter(s => s.salaryId !== meta.arg) });
  }
});

export default salarySlice.reducer;