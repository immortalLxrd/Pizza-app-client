import { useQuery, gql } from '@apollo/client'
import React from 'react'


const GET_NOTES = gql`
  query PizzaFeed($cursor: String) {
    pizzaFeed(cursor: $cursor) {
      cursor
      hasNextPage
      items {
        id
        name
        size
        slices
        toppings
        createdAt
        updatedAt
      }
    }
  }
`


const HomeRoute = () => {

  const { data, loading, error } = useQuery(GET_NOTES)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error!</p>

  return (
    <>
      <div className='_container home'>
        <h1 className='title'>Pizzas!</h1>
        <div className="pizza_list">
          {data.pizzaFeed.items.map(item => (
            <div className='card pizza_list__card' key={item.id}>
              <ul>
                <img className='card__img' src="/img/pizza.png" alt="" />
                <li className='title card__title'>
                  {item.name}
                </li>
                <li className='card__description'>
                  <p>
                    size: {item.size}
                  </p>
                  <p>
                    slices: {item.slices}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomeRoute