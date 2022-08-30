import {useQuery} from '@apollo/client'
import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {GET_PIZZA_LIST} from "../gql/query";


const Home = () => {

	useEffect(() => {
		document.title = "Pizza!"
	})

	const {data, loading, error} = useQuery(GET_PIZZA_LIST)

	if (loading) return <p className='_container home'>Loading...</p>

	if (error) return <p className='_container home'>Error!</p>

	return (
		<>
			<div className='_container home'>
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
			</div>
		</>
	)
}

export default Home