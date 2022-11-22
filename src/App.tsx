import './App.css'
import { ApolloProvider } from '@apollo/client'
import client from './graphql/client'
import Routes from './Routes'

// import  signIn from './graphql/mutation/signIn.gql'

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  )
}

export default App
