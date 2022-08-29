import React from 'react';
import {useQuery, gql} from '@apollo/client';
import {useParams} from 'react-router-dom';
import {useEffect} from 'react';

const GET_ITEM = gql`
    query Query($pizzaItemId: ID!) {
        pizzaItem(id: $pizzaItemId) {
            size
            name
            id
            slices
        }
    }
`;

const Pizza = () => {

	let params = useParams();
	let id = params.id;

	const {loading, error, data} = useQuery(GET_ITEM, {variables: {pizzaItemId: id}});

	useEffect(() => {
		document.title = "Pizza";
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error!</p>;

	const {name, size, slices} = data.pizzaItem;

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
							Size: {size}
						</p>
						<p>
							Slices: {slices}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Pizza;