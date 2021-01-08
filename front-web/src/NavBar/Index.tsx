import './styles.css';
import {ReactComponent as Logo} from './logo.svg'

function NavBar(){
    return(
        <nav className="main-navbar">
            <Logo />
            <a href="home" className="logotext">DS Delivery</a>
        </nav>
    )
}

export default NavBar;