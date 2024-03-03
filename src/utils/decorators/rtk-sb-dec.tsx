import {configureStore} from "@reduxjs/toolkit";
import {baseApi} from "@/services/base-api";
import {Provider} from "react-redux";
import {ReactNode} from "react";

const sbStore = configureStore({
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
    },
})

export const withRedux = (Story: () => ReactNode) => (
    <Provider store={sbStore}>
        <Story />
        </Provider>
);