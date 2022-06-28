import Styled from './Layout.module.css'
import Header from '../Header/Header'
import { BoxChatProvider } from '../BoxChat/BoxChatContext'
import store from '../../redux/store'
import { Provider } from 'react-redux'

export const siteTitle = "Personal Dak";

export default function Layout({children}) {
    return (
        <>
        {/* Body */}
        <Provider store={store}>
            <BoxChatProvider>
                <main className={Styled.theme_layout}>
                    {children}
                </main>
            </BoxChatProvider>
        </Provider>
        </>
    )
}