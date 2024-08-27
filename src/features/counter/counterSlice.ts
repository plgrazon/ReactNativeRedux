import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AppThunk} from '../../store/store';
import {selectCount} from './counterSelector';
import {fetchCount} from './counterApi';

export interface counterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, state => {
        state.status = 'failed';
      });
    builder
      .addCase(decrementAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(decrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value -= action.payload;
      })
      .addCase(decrementAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export default counterSlice.reducer;
export const {increment, decrement, incrementByAmount, decrementByAmount} =
  counterSlice.actions;

// The function below is called a thunk, which can contain both sync and async logic
// that has access to both `dispatch` and `getState`. They can be dispatched like
// a regular action: `dispatch(incrementIfOdd(10))`.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount: number): AppThunk => {
  return (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) dispatch(incrementByAmount(amount));
  };
};

export const decrementIfOdd = (amount: number): AppThunk => {
  return (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) dispatch(decrementByAmount(amount));
  };
};

// Thunks are commonly used for async logic like fetching data.
// The `createAsyncThunk` method is used to generate thunks that
// dispatch pending/fulfilled/rejected actions based on a promise.
// In this example, we make a mock async request and return the result.
// The `createSlice.extraReducers` field can handle these actions
// and update the state with the results.
export const incrementAsync = createAsyncThunk(
  'counter/fetchIncrementCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);

export const decrementAsync = createAsyncThunk(
  'counter/fetchDecrementCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  },
);
