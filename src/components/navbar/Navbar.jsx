import './navbar.css'

export default function Navbar({ searchText, setSearchText }) {
  return (
    <div className='n'>
      <a href="/" className="n-l">To-Do List</a>
      <nav className="n-items">
          <ul className="menu">
            <li className='m-i'><a href="about.html">About Us</a></li>
            <li className='m-i'><a href="more.html">More Apps</a></li>
            <form className='n-s'>
              <input type="text" value={searchText} className="searchBar" placeholder='Search tasks' onChange={(e) => setSearchText(e.target.value)}/>
              <button type='submit' className='btn searchButton'>Search</button>
            </form>
          </ul>
      </nav>
    </div>
  )
}
