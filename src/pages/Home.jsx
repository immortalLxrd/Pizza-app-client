import { useQuery, gql } from '@apollo/client'
import React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  useEffect(() => { document.title = "Pizza!" })

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
  
  const { data, loading, error } = useQuery(GET_NOTES)

  if (loading) return <p className='_container home'>Loading...</p>

  if (error) return <p className='_container home'>Error!</p>

  return (
    <>
      <div className='_container home'>
        <h1 className='title'>Pizza!</h1>
        <div className="pizza_list">
          {data.pizzaFeed.items.map(item => (
            <Link to={`/pizza/${item.id}`} key={item.id}>
              <div className='card pizza_list__card'>
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
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home