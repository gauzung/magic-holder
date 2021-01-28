import { useEffect, useState } from "react";

    
const PreBtn = props => {
    
    const { show } = props; 

    if(!show) return null;

    // todo: use state to control btn opacity
    return(
        <div 
            className="preBtn"
            onClick={e=>{
                if(!show) return;
                e.stopPropagation();
                props.onClick();
            }}
            style={{
                left: 0,
            }}
        >
            
        </div>
    )
}

const NextBtn = props => {
    
    const { show } = props;

    if(!show) return null;
    return(
        <div 
            className="nextBtn"
            onClick={e=>{
                if(!show) return;
                e.stopPropagation();
                props.onClick();
            }}
            style={{
                right: 0,
                // opacity: 0,
            }}
        >

        </div>
    )
}
const ProductImages = props => {

    const { imgs=[], onClick, type, } = props;

    const [ index, setIndex ] = useState(0);
    const currentSrc = imgs[index];

    // todo: preload imgs

    useEffect(()=>{
        setIndex(0);
    }, [type]);


    return(
        <div
            className="images"
            style={{
                cursor: 'pointer',
                position: "relative",
                padding: "0 30px",
            }}
            
        >
            <div
                style={{
                    width: '200px',
                    height: '200px',
                }}
                onClick={() => onClick && onClick()}
            >
                <img 
                    // draggable={false}
                    src={currentSrc}
                    key={currentSrc}
                    style={{
                        width: "100%",
                        
                    }}
                />
            </div>
            <PreBtn 
                show={index > 0}
                onClick={()=>setIndex(index - 1)}
            />
            <NextBtn 
                show={index !== imgs.length - 1}
                onClick={()=>setIndex(index + 1)}
            />
        </div>
    )
}

export default ProductImages;