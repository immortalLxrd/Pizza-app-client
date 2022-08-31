import React, {useEffect} from 'react'
import PizzaFeedComponent from "../components/PizzaFeedComponent";
import {useQuery} from "@apollo/client";
import {GET_PIZZA_LIST} from "../gql/query";


const Home = () => {
	useEffect(() => {
		document.title = "Pizza!";
	});

	const {data, loading, error, fetchMore} = useQuery(GET_PIZZA_LIST);

	function loadMore() {
		fetchMore({
			variables: {
				cursor: data.pizzaFeed.cursor
			},
			updateQuery: (previousResult, {fetchMoreResult}) => {
				return {
					pizzaFeed: {
						cursor: fetchMoreResult.pizzaFeed.cursor,
						hasNextPage: fetchMoreResult.pizzaFeed.hasNextPage,
						items: [
							...previousResult.pizzaFeed.items,
							...fetchMoreResult.pizzaFeed.items
						],
						__typename: 'pizzaFeed'
					}
				}
			}
		})
	}

	if (loading) return <p className='_container home'>Loading...</p>
	if (error) return <p className='_container home'>Error!</p>

	return (
		<div className='_container home'>
			<PizzaFeedComponent data={data}/>
			{data.pizzaFeed.hasNextPage &&
				<button className="home__more-btn" onClick={loadMore}>Load more...</button>
			}
		</div>
	);
};


export default Home