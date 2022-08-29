import './styles/App.scss';
import Pages from './pages';
import {ApolloClient, ApolloProvider, InMemoryCache, createHttpLink, gql} from '@apollo/client';
import {setContext} from "@apollo/client/link/context";
import {AuthProvider} from "./context/authContext";
import client from "./ApolloClient";


const App = () => {
	return (
		<AuthProvider>
			<ApolloProvider client={client}>
				<Pages/>
			</ApolloProvider>
		</AuthProvider>
	);
};

export default App;
