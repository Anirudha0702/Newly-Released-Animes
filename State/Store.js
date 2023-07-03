import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {Animeslice} from './SearchSlice';
const globalStore=()=>
    configureStore({
        reducer:{
            [Animeslice.name]:Animeslice.reducer
        },
        devTools:true,
    })
export const wrapper = createWrapper(globalStore);