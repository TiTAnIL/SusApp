const { Link, NavLink, withRouter } = ReactRouterDOM
export function AppHeader() {

    return <header className="app-header">
        <Link to="/">
            <h3>LOGO!</h3>
        </Link>
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/notes">Notes</NavLink>
            <NavLink exact to="/mail">Mail</NavLink>
            <NavLink to="/about">About</NavLink>
        </nav>
    </header>
}
