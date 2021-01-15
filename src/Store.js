import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import { configureStore,createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      value: 0
    },
    reducers: {
      incremented: state => {
        state.value += 1
      },
      decremented: state => {
        state.value -= 1
      }
    }
  })
export const { incremented, decremented } = counterSlice.actions;
export const store =configureStore({reducer: counterSlice.reducer});
export const Output = () => { 
    const state = useSelector(state => state.value)
    const dispatch = useDispatch()
    return (
        <div>

         <h2>Ali butt {state}</h2>
         <button   onClick={()=>dispatch(incremented())}>Click</button>     
                
        </div>
    )
}
