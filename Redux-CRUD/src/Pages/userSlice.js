import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userList:[],
    
}
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.userList.push(action.payload)
        },
        deleteUser:(state,action)=>{
            const {payload:id}=action
            if(confirm("Delete ??")){
                const newData=state.userList.filter((user)=>{
                    return user.id != id
                })
                state.userList=newData
            }
        },
        editUser:(state,action)=>{
            const {id}=action.payload

            //find index number according to obj key

            const indexNo=state.userList.findIndex((user)=>{
                return user.id==id
                


            })
            if(indexNo != -1){
                state.userList[indexNo]=action.payload
            }
        }
    }
})
export const{addUser,deleteUser,editUser}=userSlice.actions;
export default userSlice.reducer