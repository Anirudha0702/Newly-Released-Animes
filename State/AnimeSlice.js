import { createSlice } from "@reduxjs/toolkit"

const initialState={
    animes:[],
    title:""
}
export const Animeslice=createSlice({
    name:"Animes",
    initialState,
    reducers:{
        setSlice:(state,action)=>{
            state.animes=action.payload.animes
            state.title=action.payload.title
        },
    }
})
export const {setSlice}=Animeslice.actions
export const Animes=(state)=>state.Animes.animes;
export default Animeslice.reducer