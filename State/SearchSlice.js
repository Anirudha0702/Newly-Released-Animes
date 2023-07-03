import { createSlice } from "@reduxjs/toolkit"

const initialState={
    animes:[]
}
export const Animeslice=createSlice({
    name:"Animes",
    initialState,
    reducers:{
        setSlice:(state,action)=>{
            state.animes=action.payload
        },
    }
})
export const {setSlice}=Animeslice.actions
export const Animes=(state)=>state.Animes.animes;
export default Animeslice.reducer