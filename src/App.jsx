import './styles/App.scss'
import Pages from './routes'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


const App = () => {

  const uri = 'http://localhost:4000/api'
  const cache = new InMemoryCache()

  const client = new ApolloClient({
    uri,
    cache,
    connectToDevTools: true
  })

  return (
    <ApolloProvider client={client}>
      <Pages />
    </ApolloProvider>
  )
}

export default App;
