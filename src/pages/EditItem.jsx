import ItemFormComponent from "../components/ItemFormComponent";
import {useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {GET_ITEM} from "../gql/query";
import {EDIT_ITEM} from "../gql/mutations";


const EditItem = () => {
	const navigate = useNavigate();
	const params = useParams();
	const id = params.id;

	const {loading, error, data} = useQuery(GET_ITEM, {variables: {pizzaItemId: id}});
	const [editItem] = useMutation(EDIT_ITEM, {
		variables: {
			updatePizzaId: id
		},
		onCompleted: () => {
			navigate(`/pizza/${id}`);
		}
	});

	if (loading) return (<p className='_container home'>Loading...</p>);
	if (error) return (<p className='_container home'>Error creating this item...</p>);
	return (<ItemFormComponent content={data.pizzaItem} action={editItem}/>);
};


export default EditItem;