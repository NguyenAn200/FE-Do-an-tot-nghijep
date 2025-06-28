import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/userService';

export const loadUsers      = createAsyncThunk('user/loadAll',    svc.fetchAllUsers);
export const loadUserById   = createAsyncThunk('user/loadById',   svc.fetchUserById);
export const loadPagedUsers = createAsyncThunk('user/loadPaged',  async params => await svc.fetchPagedUsers(...params));
export const createUsr      = createAsyncThunk('user/create',     svc.createUser);
export const updateUsr      = createAsyncThunk('user/update',     async ({id,data}) => await svc.updateUser(id,data));
export const activateUsr    = createAsyncThunk('user/activate',   svc.activateUser);
export const deactivateUsr  = createAsyncThunk('user/deactivate', svc.deactivateUser);
export const deleteUsr      = createAsyncThunk('user/delete',     svc.deleteUser);

const userSlice = createSlice({
  name: 'user',
  initialState: { list: [], current: null, page: {}, loading: false, error: null },
  extraReducers: builder => {
    builder
      // load all
      .addCase(loadUsers.pending,   state => { state.loading=true; })
      .addCase(loadUsers.fulfilled, (state,action)=>{ state.loading=false; state.list=action.payload; })
      .addCase(loadUsers.rejected,  (state,action)=>{ state.loading=false; state.error=action.error.message; })

      // single fetch
      .addCase(loadUserById.fulfilled, (state,action)=>{ state.current=action.payload; })

      // paged
      .addCase(loadPagedUsers.fulfilled, (state,action)=>{ state.page=action.payload; })

      // create
      .addCase(createUsr.fulfilled, (state,action)=>{ state.list.push(action.payload); })

      // update
      .addCase(updateUsr.fulfilled, (state,action)=>{
        const idx = state.list.findIndex(u=>u.userId===action.payload.userId);
        if(idx!==-1) state.list[idx] = action.payload;
      })

      // activate/deactivate
      .addCase(activateUsr.fulfilled, (state,action)=>{
        state.list = state.list.map(u=> u.userId===action.meta.arg ? action.payload : u);
      })
      .addCase(deactivateUsr.fulfilled, (state,action)=>{
        state.list = state.list.map(u=> u.userId===action.meta.arg ? action.payload : u);
      })

      // delete
      .addCase(deleteUsr.fulfilled, (state,action)=>{
        state.list = state.list.filter(u=>u.userId!==action.meta.arg);
      });
  }
});

export default userSlice.reducer;
