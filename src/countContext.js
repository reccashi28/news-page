import * as React from 'react'

export const CountContext = React.createContext({ count: 0, setCount: () => {}})

const CountContextProvider = (props) => {
    const [count, setCount] = React.useState(0);
    const value = {count, setCount}
    return <CountContext.Provider value={value}>
        {props.children}
    </CountContext.Provider>
}

export default CountContextProvider;