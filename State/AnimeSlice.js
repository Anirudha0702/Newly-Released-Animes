import { createSlice } from "@reduxjs/toolkit"

const initialState={
    animes:[],
    title:"",
    isLoading:false
}
export const Animeslice=createSlice({
    name:"Animes",
    initialState,
    reducers:{
        setSlice:(state,action)=>{
            state.animes=action.payload.animes
            state.title=action.payload.title
        },
        setLoading:(state,action)=>{
            state.isLoading=action.payload
        }
    }
})
export const {setSlice,setLoading}=Animeslice.actions
export const Animes=(state)=>state.Animes.animes;
export default Animeslice.reducer