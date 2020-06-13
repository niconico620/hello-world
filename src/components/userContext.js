import React from 'react'

const UserContext = React.createContext('Final Fantasy')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext