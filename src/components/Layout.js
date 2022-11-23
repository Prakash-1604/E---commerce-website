import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CartIcon, HomeIcon } from './icons'
import Search from './Search'


const Layout = ({categ}) => {
    const renderCateg=()=>{
        return categ.data.map(c=>(
          <li key={c.id}><Link to={`/categories/${c.id}`}>{c.title}</Link></li>
        ))
      }
  return (
    <>
    <header>
      <div id='headerHomeIcon'>
      <Link to='/'>  <HomeIcon width={40}></HomeIcon> </Link>
      </div>
      <Search/>
      <div id='headerTitle'>My Store</div>
      <div id='headerCartIcon'>
      <Link to='Cart'>  <CartIcon width={40}></CartIcon>  </Link>
      </div>
      </header>
    <section>
    <nav>
      {categ.errmsg && <div>Error: {categ.errmsg}</div>}
      <ul>
    <div>{categ.data && renderCateg()}</div>
      </ul>
    </nav>
    <main>
        <Outlet></Outlet>
    </main>
    </section>
    <footer><Link to='/'>Home</Link><br></br>
    <Link to='/Cart'>Cart</Link>
    </footer>
    </>
  )
}

export default Layout