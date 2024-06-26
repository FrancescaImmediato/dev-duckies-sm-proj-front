import { Link, NavLink } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="cell is-hidden-mobile">
      <nav id='sidebar' className='navbar'>
        <Link to="feed" id='navbar-title'>
          <h3 className="title is-3">DuckPond</h3>
        </Link>

        <NavLink to="feed" className='sidebar-item'>
          <span className="icon-text">
            <span className="icon">
              <span className="material-symbols-rounded">
                home
              </span>
            </span>
            <span>Feed</span>
          </span>
        </NavLink>

        <NavLink to="search" className='sidebar-item'>
          <span className="icon-text">
            <span className="icon">
              <span className="material-symbols-rounded">
                search
              </span>
            </span>
            <span>Search</span>
          </span>
        </NavLink>

        <NavLink to="post" className='sidebar-item'>
          <span className="icon-text">
            <span className="icon">
              <span className="material-symbols-rounded">
                add_box
              </span>
            </span>
            <span>Post</span>
          </span>
        </NavLink>

        <NavLink to="profile" className='sidebar-item'>
          <span className="icon-text">
            <span className="icon">
              <span className="material-symbols-rounded">
                person
              </span>
            </span>
            <span>Profile</span>
          </span>
        </NavLink>

        <NavLink to="settings" className='sidebar-item'>
          <span className="icon-text">
            <span className="icon">
              <span className="material-symbols-rounded">
                settings
              </span>
            </span>
            <span>Settings</span>
          </span>
        </NavLink>

      </nav>
    </div>
  )
}