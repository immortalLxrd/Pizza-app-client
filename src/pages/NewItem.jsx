import {useEffect} from 'react';
import {useMutation} from "@apollo/client";
import ItemFormComponent from "../components/ItemFormComponent";
import {useNavigate} from "react-router-dom";
import {NEW_ITEM} from "../gql/mutations";
import {GET_PIZZA} from "../gql/query";


const NewItem = () => {
	const navigate = useNavigate();
	useEffect(() => {
		document.title = "New Item";
	});

	const [newItem, {loading, error}] = useMutation(NEW_ITEM, {
		refetchQueries: [{query: GET_PIZZA}],
		onCompleted: data => {
			navigate(`/pizza/${data.newPizza.id}`);
		}
	});

	if (loading) return (<p className='_container home'>Loading...</p>);
	if (error) return (<p className='_container home'>Error creating this item...</p>);
	return (<ItemFormComponent action={newItem} title="Create new item"/>);
};


export default NewItem;