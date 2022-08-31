import React from 'react';
import {Link} from "react-router-dom";

const PizzaFeedComponent = ({data}) => {
	return (
		<div className="pizza_list">
			{data.pizzaFeed.items.map(item => (
				<Link to={`/pizza/${item.id}`} key={item.id}>
					<div className='card pizza_list__card'>
						<ul>
							<img className='card__img' src={item.img} alt=""/>
							<li className='title card__title'>
								{item.name}
							</li>
							<li className='card__description'>
								<b>Size:</b> {item.size}
							</li>
							<li className='card__description'>
								<b>Price:</b> ${item.price}
							</li>
						</ul>
					</div>
				</Link>
			))}
		</div>
	);
};

export default PizzaFeedComponent;