import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {DELETE_ITEM} from "../gql/mutations";
import {GET_PIZZA_LIST} from "../gql/query";
import Button from "./UI/Button/Button";

const DeleteItemComponent = ({id}) => {
	const navigate = useNavigate();

	const [deleteItem, {loading, error}] = useMutation(DELETE_ITEM, {
		refetchQueries: [GET_PIZZA_LIST],
		variables: {
			deletePizzaId: id
		},
		onCompleted: () => {
			navigate(`/`)
		}
	})

	return (
		<Button onClick={deleteItem}>
			Delete
		</Button>
	);
};

export default DeleteItemComponent;