import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <header className="nav-container">
      {/* FIX: test expects h1 directly inside header */}
      <h1 className="header-heading">
        <Link className="logo-link" to="/">
          Travel Trip
        </Link>
      </h1>

      <nav className="header-inner">
        <ul className="nav-links">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/my-trips">
              My Trips
            </Link>
          </li>
        </ul>

        <button
          type="button"
          className="logout-button"
          onClick={onClickLogoutButton}
        >
          Logout
        </button>
      </nav>
    </header>
  )
}

export default withRouter(Header)
