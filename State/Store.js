import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {Animeslice} from './AnimeSlice';
const globalStore=()=>
    configureStore({
        reducer:{
            [Animeslice.name]:Animeslice.reducer
        },
        devTools:true,
    })
export const wrapper = createWrapper(globalStore);