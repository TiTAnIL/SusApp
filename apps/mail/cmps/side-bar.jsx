import { eventBusService } from "../../../services/event-bus.service.js"
import { Compose } from "./compose.jsx"

const { NavLink } = ReactRouterDOM

export function SideBar() {

    return <aside className="sidebar-container">
        <nav className="nav-btns">
            <span><NavLink exact to="/mail">Inbox</NavLink></span>
            <span><NavLink exact to="/stared">Starred</NavLink></span>
            <span><NavLink exact to="/archive">Archive</NavLink></span>
            <span><NavLink exact to="/Trash">Trash</NavLink></span>
        </nav>
    </aside>
}