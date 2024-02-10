import React from 'react'
import { Link } from 'react-router-dom'
function MealList({meals}) {
  console.log(meals)
  return (
      <div className='my-5'>
        <h3 className='text-uppercase text-warning'>meals</h3>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 align-items-center justify-content-center'>
          {
            meals?.map(mealItem => {
              const {idMeal:id, strArea:area, strCategory:category, strMeal:meal, strMealThumb:thumbnail} = mealItem
              return (
                <Link to={`/meal/${id}`} className='text-decoration-none text-dark' key={id}>
                  <div className='card text-bg-light border-1.5 border-warning'>
                    <img src={thumbnail} className='card-img' alt="CategoryImage"/>
                    <div className='card-img-overlay'>
                      <span className="badge text-bg-warning">{category}</span>
                    </div>
                    <div className='card-body'>
                      <h5 className='card-title fw-bold fs-6 mb-3'>{area}</h5>
                      <p className='card-text small d-flex flex-column justify-content-between align-items-start'>
                        {meal}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>  
  )
}

export default MealList
