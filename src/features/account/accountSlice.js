import { createSlice } from '@reduxjs/toolkit'

const accountInfo = {
    accountInfo : null
}

const accountInfoSlice = createSlice({
    name:'accountInfo',
    initialState: accountInfo,
    reducers:{
        storeAccountInfo: (accountInfo,payload) => {
            accountInfo.accountInfo = payload['payload']
            console.log(accountInfo,'payload')
        }
    }
}) 

export const {storeAccountInfo} = accountInfoSlice.actions
export default accountInfoSlice.reducer