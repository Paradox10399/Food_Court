import React from 'react'
import { useSidebarContext } from '../../Context/sidebarContext'
import { useMealContext } from '../../Context/mealContext';
import { Link } from 'react-router-dom';

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const { categories } = useMealContext();

  return (
    <div>
      <div className={`offcanvas offcanvas-end ${isSidebarOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvas">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Food Categories</h5>
          <button type="button" className="btn-close" onClick={() => closeSidebar()} data-bs-dismiss="offcanvas" aria-label="Close" ></button >
        </div >
        <div className="offcanvas-body">
          <ul className="list-group">
            {
              categories.map(category => (
                <li className="list-group-item border-0 border-bottom lh-base" key={category.idCategory}>
                  <Link className='text-decoration-none text-dark' to={`meal/category/${category.strCategory}`} onClick={() => closeSidebar}>
                    {category.strCategory}
                  </Link>
                </li>
              ))
            }
          </ul>        </div>
      </div>
    </div>
  )
}

export default Sidebar
