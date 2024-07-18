import {LOGO_URL} from "../../utils/constant";
const Header = () => {
    return (
        <div className="header">
            <div className="Logo">
                <img src={LOGO_URL} alt="Image could not be Rendered" />
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;