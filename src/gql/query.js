import {gql} from "@apollo/client";


const GET_ITEM = gql`
    query Query($pizzaItemId: ID!) {
        pizzaItem(id: $pizzaItemId) {
            size
            name
            img
            id
            price
        }
    }
`;

const GET_PIZZA_LIST = gql`
    query PizzaFeed($cursor: String) {
        pizzaFeed(cursor: $cursor) {
            cursor
            hasNextPage
            items {
                id
                name
                img
                size
                price
            }
        }
    }
`;


export {GET_ITEM, GET_PIZZA_LIST};