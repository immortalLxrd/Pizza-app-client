import './styles/App.scss'
import Pages from './routes'
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, gql} from '@apollo/client'
import {setContext} from "@apollo/client/link/context"

const uri = 'http://localhost:4000/api'
const httpLink = createHttpLink({uri})
const cache = new InMemoryCache()

const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`

const authLink = setContext((_, {headers}) => {
	return {
		headers: {
			...headers,
			authorization: localStorage.getItem('token') || ''
		}
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	resolvers: {},
	connectToDevTools: true
})


const data = {
	isLoggedIn: !!localStorage.getItem('token')
}

cache.writeQuery({query: IS_LOGGED_IN, data: data})

const App = () => {

	return (
		<ApolloProvider client={client}>
			<Pages/>
		</ApolloProvider>
	)
}

export default App;
