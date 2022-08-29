import {setContext} from "@apollo/client/link/context";
import {ApolloClient, createHttpLink, gql, InMemoryCache} from "@apollo/client";

const uri = 'http://localhost:4000/api'
const httpLink = createHttpLink({uri})
const cache = new InMemoryCache()


const IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`;


const authLink = setContext((_, {headers}) => {
	return {
		headers: {
			...headers,
			authorization: localStorage.getItem('token') || ''
		}
	};
});

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	resolvers: {},
	connectToDevTools: true
});

const data = {
	isLoggedIn: !!localStorage.getItem('token')
};

cache.writeQuery({query: IS_LOGGED_IN, data: data});

export default client;