
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import authSlice from "./authSlice"; // ✅ Make sure this matches slice name
import ragSlice from "./ragSlice"; // RAG state management

import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    createMigrate,
} from 'redux-persist';

// ✅ Only persist the auth slice (user / token / isAuthenticated).
// The rag slice (conversations, messages) must NOT be persisted because:
//  1. Conversations are fetched from the backend on every login, so there
//     is no need for local persistence.
//  2. Persisting it causes cross-user data bleed: user B logging in from
//     the same browser would briefly see user A's cached conversations
//     until the API call completes.
const authMigrate = createMigrate(
    {
        2: (state) => ({
            ...state,
            loading: false,
            error: null,
            message: null,
            isInitializing: false,
            pendingEmail: null,
        }),
    },
    { debug: false }
);

const authPersistConfig = {
    key: 'auth',
    version: 2,
    storage,
    migrate: authMigrate,
    // Never persist transient UI state — a stuck loading=true here blocks login/register on reload
    blacklist: ['loading', 'error', 'message', 'isInitializing', 'pendingEmail'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authSlice);

const rootReducer = combineReducers({
    auth: persistedAuthReducer, // ✅ persisted
    rag: ragSlice,              // ✅ ephemeral — always loaded from DB
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
