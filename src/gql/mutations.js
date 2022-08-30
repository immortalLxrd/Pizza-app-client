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
    mutation NewPizza($name: String!, $img: String!, $size: String!, $price: String!) {
        newPizza(name: $name, img: $img, size: $size, price: $price) {
            price
            size
            name
            img
            id
            createdAt
            updatedAt
        }
    }
`;

const EDIT_ITEM = gql`
    mutation UpdatePizza($updatePizzaId: ID!, $name: String!, $img: String!, $size: String!, $price: String!) {
        updatePizza(id: $updatePizzaId, name: $name, img: $img, size: $size, price: $price) {
            id
            name
            img
            size
            price
            createdAt
            updatedAt
        }
    }
`;

const DELETE_ITEM = gql`
    mutation UpdatePizza($deletePizzaId: ID!) {
        deletePizza(id: $deletePizzaId)
    }
`;

export {
	SIGNUP_USER,
	SIGNIN_USER,
	NEW_ITEM,
	EDIT_ITEM,
    DELETE_ITEM
};