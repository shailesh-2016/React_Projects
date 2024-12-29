import { configureStore } from "@reduxjs/toolkit";
import userslice from '../Pages/userSlice.js'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
  }
  const persistedReducer = persistReducer(persistConfig, userslice)

const Store = configureStore({
    reducer:persistedReducer
})

let persistor = persistStore(Store)

export  {Store,persistor}