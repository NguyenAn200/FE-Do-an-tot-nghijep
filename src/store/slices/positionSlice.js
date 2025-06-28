import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/positionService';

export const loadPositions       = createAsyncThunk('pos/loadAll', svc.fetchAllPositions);
export const loadActivePositions = createAsyncThunk('pos/loadActive', svc.fetchActivePositions);
export const loadPosById         = createAsyncThunk('pos/loadById', svc.fetchPositionById);
export const loadPosEmployees    = createAsyncThunk('pos/loadEmp', svc.fetchWithEmployees);
export const searchPosByName     = createAsyncThunk('pos/searchName', svc.searchByName);
export const loadPagedPositions  = createAsyncThunk('pos/loadPaged', params => svc.fetchPagedPositions(...params));
export const loadByDept          = createAsyncThunk('pos/loadDept', svc.fetchByDepartment);
export const loadActiveByDept    = createAsyncThunk('pos/loadDeptActive', svc.fetchActiveByDepartment);
export const createPos           = createAsyncThunk('pos/create', svc.createPosition);
export const updatePos           = createAsyncThunk('pos/update', async ({id,data}) => await svc.updatePosition(id,data));
export const activatePos         = createAsyncThunk('pos/activate', svc.activatePosition);
export const deactivatePos       = createAsyncThunk('pos/deactivate', svc.deactivatePosition);
export const deletePos           = createAsyncThunk('pos/delete', svc.deletePosition);

const positionSlice = createSlice({
  name: 'position',
  initialState: { list:[], current:null, loading:false, error:null, page:{} },
  extraReducers: builder => {
    builder
      .addCase(loadPositions.pending,  state=>{state.loading=true})
      .addCase(loadPositions.fulfilled,(state,{payload})=>{state.loading=false; state.list=payload})
      .addCase(loadPositions.rejected, (state,{error})=>{state.loading=false; state.error=error.message})
      .addCase(loadPosById.fulfilled,    (state,{payload})=>{state.current=payload})
      .addCase(loadPosEmployees.fulfilled,(state,{payload})=>{/* store employees list if needed */})
      .addCase(createPos.fulfilled,      (state,{payload})=>{state.list.push(payload)})
      .addCase(updatePos.fulfilled,      (state,{payload})=>{ const idx=state.list.findIndex(p=>p.positionId===payload.positionId); if(idx!==-1) state.list[idx]=payload })
      .addCase(deletePos.fulfilled,      (state,{meta})=>{state.list=state.list.filter(p=>p.positionId!==meta.arg)});
  }
});

export default positionSlice.reducer;