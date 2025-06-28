import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/salaryDetailService';

export const loadSalaryDetails    = createAsyncThunk('salaryDetail/loadAll',    svc.fetchAllSalaryDetails);
export const loadSalaryDetailById = createAsyncThunk('salaryDetail/loadById',    svc.fetchSalaryDetailById);
export const loadPagedSalaryDetails = createAsyncThunk('salaryDetail/loadPaged', async params => await svc.fetchPagedSalaryDetails(...params));
export const loadDetailsBySalary  = createAsyncThunk('salaryDetail/loadBySalary',  svc.fetchDetailsBySalary);
export const loadDetailsByItemType = createAsyncThunk('salaryDetail/loadByItem',   svc.fetchDetailsByItemType);
export const loadDetailsByEmpPeriod = createAsyncThunk('salaryDetail/loadByEmpPeriod', async params => await svc.fetchDetailsByEmployeePeriod(...params));
export const createDetail         = createAsyncThunk('salaryDetail/create',      svc.createSalaryDetail);
export const updateDetail         = createAsyncThunk('salaryDetail/update',      async ({id,data}) => await svc.updateSalaryDetail(id,data));
export const deleteDetail         = createAsyncThunk('salaryDetail/delete',      svc.deleteSalaryDetail);

const slice = createSlice({
  name: 'salaryDetail',
  initialState: { list: [], current: null, page: {}, loading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(loadSalaryDetails.pending,   state => { state.loading=true; })
      .addCase(loadSalaryDetails.fulfilled, (state,action) => { state.loading=false; state.list=action.payload; })
      .addCase(loadSalaryDetails.rejected,  (state,action) => { state.loading=false; state.error=action.error.message; })

      .addCase(loadSalaryDetailById.fulfilled, (state,action) => { state.current=action.payload; })
      .addCase(loadPagedSalaryDetails.fulfilled, (state,action) => { state.page=action.payload; })
      .addCase(loadDetailsBySalary.fulfilled,   (state,action) => { state.list=action.payload; })
      .addCase(createDetail.fulfilled,          (state,action) => { state.list.push(action.payload); })
      .addCase(updateDetail.fulfilled,          (state,action) => {
        const idx=state.list.findIndex(d=>d.salaryDetailId===action.payload.salaryDetailId);
        if(idx!==-1) state.list[idx]=action.payload;
      })
      .addCase(deleteDetail.fulfilled,          (state,action) => { state.list=state.list.filter(d=>d.salaryDetailId!==action.meta.arg); });
  }
});

export default slice.reducer;