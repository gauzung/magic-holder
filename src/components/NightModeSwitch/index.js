import { useEffect, useState } from "react";
import Toggle from "../Toggle"
import { ENABLED, } from "../../utils/constant";
import './style.scss';

// 开了夜间模式的icon
const ChekcedIcon = () => (
    <span
        style={{
            display: "flex",
            height: "10px",
            width: "10px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
        }}
    >
        🌛
    </span> 
)

const UncheckedIcon = () => (
    <span
        style={{
            display: "flex",
            height: "10px",
            width: "10px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
        }}
    >
        🌞
    </span>
)

const NightModeSwitch = props => {

    const initMode = localStorage.nightMode === ENABLED;
    const [ nightMode, setNightMode ] = useState(initMode);

    useEffect(()=>{
        // console.log(nightMode);
        document.documentElement.setAttribute("data-theme", nightMode?"dark": "light");
    }, [nightMode])

    const hanldeChange = e => {
        setNightMode(e.target.checked);
    }

    return(
        <div className="NightModeSwitch">
            <label>
                <Toggle
                    icons={{
                        checked: <ChekcedIcon />,
                        unchecked: <UncheckedIcon/>
                    }}
                    // value={nightMode}
                    checked={nightMode}
                    onChange={hanldeChange} 
                />
            </label>
        </div>
    )
}

export default NightModeSwitch;