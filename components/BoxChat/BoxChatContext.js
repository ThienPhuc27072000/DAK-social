import { useState, createContext } from 'react'

const BoxChatContext = createContext()

function BoxChatProvider({children}) {
    const [openBoxChat, setOpenBoxChat] = useState(false)

    const toggleBoxChat = () => {
        setOpenBoxChat(true)
    }

    const deleteBoxChat = () => {
        setOpenBoxChat(false)
    }

    const value = {
        openBoxChat,
        toggleBoxChat, 
        deleteBoxChat
    }

    return(
        <>
        <BoxChatContext.Provider value={value}>
            {children}
        </BoxChatContext.Provider>
        </>
    )
}

export { BoxChatContext, BoxChatProvider } 