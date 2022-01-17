
import React, {FC, ReactElement} from 'react'
import { render, RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../state";

const allTheProviders: FC = ({children}) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const renderWithStore = (ui:ReactElement, options?:Omit<RenderOptions, 'wrapper'>) => {
    render(ui, {wrapper: allTheProviders, ...options })
}

export * from '@testing-library/react'
export {renderWithStore as render}