import NightModeSwitch from '../NightModeSwitch';
import './style.scss';

const Header = p => {
    
    return(
        <div className="Header">
            <div>logo</div>
            <div></div>
            <div>
                <NightModeSwitch />
            </div>
        </div>
    )
}

export default Header;