import {gql} from "@apollo/client";


const SIGNUP_USER = gql`
    mutation SignUp($phoneNumber: String!, $password: String!, $email: String) {
        signUp(phoneNumber: $phoneNumber, password: $password, email: $email)
    }
`;

const SIGNIN_USER = gql`
    mutation SignIn($phoneNumber: String!, $password: String!) {
        signIn(phoneNumber: $phoneNumber, password: $password)
    }
`;

const NEW_ITEM = gql`
    mutation NewPizza($name: String!, $size: String!, $price: String!) {
        newPizza(name: $name, size: $size, price: $price) {
            price
            size
            name
            id
            createdAt
            updatedAt
        }
    }
`;

const EDIT_ITEM = gql`
    mutation UpdatePizza($updatePizzaId: ID!, $name: String!, $size: String!, $price: String!) {
        updatePizza(id: $updatePizzaId, name: $name, size: $size, price: $price) {
            id
            name
            size
            price
            createdAt
            updatedAt
        }
    }
`;

export {
	SIGNUP_USER,
	SIGNIN_USER,
    NEW_ITEM,
    EDIT_ITEM
};