import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as svc from '../../services/attendanceService';

export const loadAttendances      = createAsyncThunk('attendance/loadAll',      svc.fetchAllAttendances);
export const loadAttendanceById   = createAsyncThunk('attendance/loadById',     svc.fetchAttendanceById);
export const loadPagedAttendances = createAsyncThunk('attendance/loadPaged',    async params => await svc.fetchPagedAttendances(...params));
export const createAttend         = createAsyncThunk('attendance/create',      svc.createAttendance);
export const bulkCreateAttend     = createAsyncThunk('attendance/bulkCreate',  svc.createBulkAttendance);
export const updateAttend         = createAsyncThunk('attendance/update',      async ({id,data}) => await svc.updateAttendance(id,data));
export const deleteAttend         = createAsyncThunk('attendance/delete',      svc.deleteAttendance);

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState: { list:[], current:null, loading:false, error:null, page:{} },
  extraReducers: builder => {
    builder
      .addCase(loadAttendances.pending,  state => { state.loading = true; })
      .addCase(loadAttendances.fulfilled,(state, action) => {
         state.loading = false;
         state.list    = action.payload;
      })
      .addCase(loadAttendances.rejected, (state, action) => {
         state.loading = false;
         state.error   = action.error.message;
      })

      .addCase(loadAttendanceById.fulfilled,(state, action) => {
         state.current = action.payload;
      })
      .addCase(loadPagedAttendances.fulfilled,(state, action) => {
         state.page = action.payload;
      })
      .addCase(createAttend.fulfilled,(state, action) => {
         state.list.push(action.payload);
      })

      // Khi update thành công, tìm trong list rồi thay thế
      .addCase(updateAttend.fulfilled,(state, { payload }) => {
        const idx = state.list.findIndex(a => a.attendanceId === payload.attendanceId);
        if (idx !== -1) {
          state.list[idx] = payload;
        }
      })

      // Khi xóa thành công, filter bỏ item đó ra
      .addCase(deleteAttend.fulfilled,(state, action) => {
        const id = action.meta.arg;  // thunk được gọi với id
        state.list = state.list.filter(a => a.attendanceId !== id);
      });
  }
});

export default attendanceSlice.reducer;
