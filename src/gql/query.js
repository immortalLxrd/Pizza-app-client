import {gql} from "@apollo/client";


const GET_ITEM = gql`
    query Query($pizzaItemId: ID!) {
        pizzaItem(id: $pizzaItemId) {
            size
            name
            id
            price
        }
    }
`;

const GET_PIZZA = gql`
    query PizzaFeed($cursor: String) {
        pizzaFeed(cursor: $cursor) {
            cursor
            hasNextPage
            items {
                id
                name
                size
                price
            }
        }
    }
`;


export {GET_ITEM, GET_PIZZA};