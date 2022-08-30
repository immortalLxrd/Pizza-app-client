import {useQuery} from '@apollo/client';
import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {GET_ITEM} from "../gql/query";
import Button from "../components/UI/Button/Button";

const Pizza = () => {
	let params = useParams();
	let id = params.id;

	const {loading, error, data} = useQuery(GET_ITEM, {variables: {pizzaItemId: id}});

	useEffect(() => {
		document.title = "Pizza";
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const {name, size, price} = data.pizzaItem;

	return (
		<>
			<div className="_container pizza_item">
				<div className='card pizza_item__card'>
					<img className='card__img pizza_item__img' src="/img/pizza.png" alt=""/>
					<div className='card__description pizza_item__description'>
						<p className='title card__title'>
							{name}
						</p>
						<p>
							<b>Size:</b> {size}
						</p>
						<p>
							<b>Price:</b> ${price}
						</p>
						<Link className="pizza_item__btn" to={`/pizza/${id}/edit`}>
							<Button className="pizza_item__btn">
								Edit
							</Button></Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pizza;