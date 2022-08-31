import {useContext} from 'react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useMutation} from '@apollo/client';
import Button from '../components/UI/Button/Button';
import Input from '../components/UI/Input/Input';
import {AuthContext} from "../context/authContext";
import {SIGNIN_USER} from "../gql/mutations";


const SignIn = (props) => {
	const navigate = useNavigate();
	const [values, setValues] = useState({});
	const context = useContext(AuthContext);

	useEffect(() => {
		document.title = 'Sign In';
	});

	const onChange = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		});
	};

	const [signIn, {loading, error}] = useMutation(SIGNIN_USER, {
		onCompleted: data => {
			context.login(data.signIn);
			navigate('/');
		}
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	return (
		<div className='sign'>
			<div className="_container">
				<h2 className='title sign__title'>Sign In</h2>
				<form className='form sign__form'
				      onSubmit={e => {
					      e.preventDefault()
					      signIn({
						      variables: {
							      ...values
						      }
					      })
				      }}
				>
					<label htmlFor="phone">Phone number:</label>
					<Input
						id="phone"
						required
						// type="number"
						name="phoneNumber"
						placeholder="Phone"
						onChange={onChange}
					/>
					<label htmlFor="password">Password:</label>
					<Input
						id="password"
						required
						type="password"
						name="password"
						placeholder="Password"
						onChange={onChange}
					/>
					<Button className='form__btn' type='submit'>Sign In</Button>
				</form>
			</div>
		</div>
	)
};


export default SignIn;