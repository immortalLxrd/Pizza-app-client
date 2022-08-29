import './styles/App.scss';
import Pages from './pages';
import {ApolloProvider} from '@apollo/client';
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
