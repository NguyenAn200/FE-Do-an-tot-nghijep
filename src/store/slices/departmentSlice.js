import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/departmentService';

export const loadDepartments       = createAsyncThunk('dept/loadAll',    svc.fetchAllDepartments);
export const loadActiveDepartments = createAsyncThunk('dept/loadActive', svc.fetchActiveDepartments);
export const loadDeptById          = createAsyncThunk('dept/loadById',   svc.fetchDepartmentById);
export const loadDeptPositions     = createAsyncThunk('dept/loadPos',    svc.fetchDeptWithPositions);
export const loadDeptEmployees     = createAsyncThunk('dept/loadEmp',    svc.fetchDeptWithEmployees);
export const searchDept            = createAsyncThunk('dept/search',    svc.searchDepartment);
export const loadPagedDepts        = createAsyncThunk('dept/loadPaged',  async params => await svc.fetchPagedDepartments(...params));
export const addDepartment         = createAsyncThunk('dept/add',        svc.createDepartment);
export const updateDept            = createAsyncThunk('dept/update',     async ({id,data}) => await svc.updateDepartment(id,data));
export const activateDept          = createAsyncThunk('dept/activate',   svc.activateDepartment);
export const deactivateDept        = createAsyncThunk('dept/deactivate', svc.deactivateDepartment);
export const deleteDept            = createAsyncThunk('dept/delete',     svc.deleteDepartment);

const departmentSlice = createSlice({
  name: 'department',
  initialState: { list: [], current: null, loading: false, error: null, page: {} },
  extraReducers: builder => {
    builder
      .addCase(loadDepartments.pending, state => { state.loading=true; })
      .addCase(loadDepartments.fulfilled,(state,{payload})=>{ state.loading=false; state.list=payload; })
      .addCase(loadDepartments.rejected, (state,{error})=>{ state.loading=false; state.error=error.message; })

      .addCase(loadActiveDepartments.fulfilled,(state,{payload})=>{ state.list=payload; })
      .addCase(loadDeptById.fulfilled,    (state,{payload})=>{ state.current=payload; })
      .addCase(addDepartment.fulfilled,   (state,{payload})=>{ state.list.push(payload); })

      .addCase(updateDept.fulfilled, (state,{payload})=>{
        const idx=state.list.findIndex(d=>d.departmentId===payload.departmentId);
        if(idx!==-1) state.list[idx]=payload;
      })
      .addCase(deleteDept.fulfilled,(state,action)=>{
        const id=action.meta.arg; state.list=state.list.filter(d=>d.departmentId!==id);
      })

      .addCase(loadPagedDepts.fulfilled,(state,{payload})=>{ state.page=payload; });
  }
});

export default departmentSlice.reducer;