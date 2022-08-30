import {useQuery} from '@apollo/client';
import {Link, useParams} from 'react-router-dom';
import {useEffect} from 'react';
import {GET_ITEM} from "../gql/query";
import Button from "../components/UI/Button/Button";
import DeleteItemComponent from "../components/DeleteItemComponent";

const Pizza = () => {
	let params = useParams();
	let id = params.id;

	const {loading, error, data} = useQuery(GET_ITEM, {variables: {pizzaItemId: id}});

	useEffect(() => {
		document.title = "Pizza";
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const {name, img, size, price} = data.pizzaItem;

	return (
		<>
			<div className="_container pizza_item">
				<div className='card pizza_item__card'>
					<img className='card__img pizza_item__img' src={img} alt=""/>
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
						<ul className="pizza_item__btns">
							<li className="pizza_item__btn">
								<DeleteItemComponent id={id}/>
							</li>
							<li className="pizza_item__btn">
								<Link className="pizza_item__btn" to={`/pizza/${id}/edit`}>
									<Button>
										Edit
									</Button>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pizza;