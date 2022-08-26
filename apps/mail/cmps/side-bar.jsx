const { NavLink } = ReactRouterDOM

export function SideBar() {


    return <aside className="sidebar-container">
        <section className="compose-container">
            <span className="compose-icon">
                </span>
            <span className="compose-text">
                <NavLink exact to="/mail">Compose</NavLink>
            </span>
        </section>
        <nav className="nav-btns">
            <span><NavLink exact to="/mail">Inbox</NavLink></span>
            <span><NavLink exact to="/stared">Starred</NavLink></span>
            <span><NavLink exact to="/archive">Archive</NavLink></span>
            {/* <NavLink to="/about">About</NavLink> */}
        </nav>
    </aside>
}