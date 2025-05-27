import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/employeeService';

export const loadEmployees       = createAsyncThunk('emp/loadAll',    svc.fetchAllEmployees);
export const loadActiveEmployees = createAsyncThunk('emp/loadActive', svc.fetchActiveEmployees);
export const loadEmpById         = createAsyncThunk('emp/loadById',   svc.fetchEmployeeById);
export const loadEmpAttendances  = createAsyncThunk('emp/loadAtt',    svc.fetchWithAttendances);
export const loadEmpSalaries     = createAsyncThunk('emp/loadSal',    svc.fetchWithSalaries);
export const loadEmpAdvances     = createAsyncThunk('emp/loadAdv',    svc.fetchWithAdvances);
export const searchEmpByCode     = createAsyncThunk('emp/searchCode',svc.fetchByCode);
export const searchEmpByIdCard   = createAsyncThunk('emp/searchIdCard',svc.fetchByIdCard);
export const loadPagedEmps       = createAsyncThunk('emp/loadPaged', params => svc.fetchPagedEmployees(...params));
export const loadByDept          = createAsyncThunk('emp/loadDept',   svc.fetchByDepartment);
export const loadByPos           = createAsyncThunk('emp/loadPos',    svc.fetchByPosition);
export const searchEmpByName     = createAsyncThunk('emp/searchName',svc.fetchByName);
export const loadByJoinRange     = createAsyncThunk('emp/loadJoinRange', svc.fetchByJoinDateRange);
export const countDept           = createAsyncThunk('emp/countDept', svc.countByDepartment);
export const countPos            = createAsyncThunk('emp/countPos',  svc.countByPosition);
export const createEmp           = createAsyncThunk('emp/create',   svc.createEmployee);
export const updateEmp           = createAsyncThunk('emp/update',   async ({id,data}) => await svc.updateEmployee(id,data));
export const activateEmp         = createAsyncThunk('emp/activate', svc.activateEmployee);
export const deactivateEmp       = createAsyncThunk('emp/deactivate', svc.deactivateEmployee);
export const deleteEmp           = createAsyncThunk('emp/delete',    svc.deleteEmployee);

const employeeSlice = createSlice({
  name: 'employee',
  initialState: { list:[], current:null, page:{}, loading:false, error:null },
  extraReducers: builder => {
    builder
      .addCase(loadEmployees.pending,  state=>{state.loading=true})
      .addCase(loadEmployees.fulfilled,(state,{payload})=>{state.loading=false; state.list=payload})
      .addCase(loadEmployees.rejected, (state,{error})=>{state.loading=false; state.error=error.message})

      .addCase(loadEmpById.fulfilled,     (state,{payload})=>{state.current=payload})
      .addCase(loadPagedEmps.fulfilled,   (state,{payload})=>{state.page=payload})
      .addCase(createEmp.fulfilled,       (state,{payload})=>{state.list.push(payload)})
      .addCase(updateEmp.fulfilled,       (state,{payload})=>{ const idx=state.list.findIndex(e=>e.employeeId===payload.employeeId); if(idx!==-1) state.list[idx]=payload })
      .addCase(deleteEmp.fulfilled,       (state,{meta})=>{ state.list=state.list.filter(e=>e.employeeId!==meta.arg) });
  }
});

export default employeeSlice.reducer;