import { configureStore } from '@reduxjs/toolkit'
import accountInfoReducer from './src/features/account/accountSlice'

const store = configureStore({
    reducer:{
        accountInfo: accountInfoReducer
    }
})

export default store