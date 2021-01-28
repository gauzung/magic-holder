

import React, { useEffect, useState } from "react";
import { openNewPage } from "../../utils/utils";
import ProductImages from "./Images";
import "./style.scss";

const SHOW_PRICE_TYPE = "RMB";

const ColorTag = props => {


    return (
        <div

        >

        </div>
    )
}

// const ProductItem = () => 123;

const ProductItem = props => {

    const { imgs=[], name, price, types, } = props;
    const typesArr = Object.keys(types);
    
    const [ selectedType, setSelectedType ] = React.useState(types[typesArr[0]]);
    // const currentType = types[selectedType];

    useEffect(()=>{
        console.log("selectedType");
        console.log(selectedType);
    }, [selectedType])

    return(
        <div
            className="ProductItem"
        >
            <div
                style={{
                    margin: "20px 10px",
                    
                }}
            >
                <ProductImages 
                    type={selectedType.key}
                    imgs={selectedType.imgs}
                    onClick={() => openNewPage(selectedType.link)}
                />
                <div className="name">
                    <a 
                        href={selectedType.link}
                        target="_blank"
                    >
                        {name}
                    </a>
                </div>
                <div className="price">{selectedType.price[SHOW_PRICE_TYPE]}</div>
                <div className="tags">
                    {typesArr.map(v=>{
                        if(!!types[v].tag) {
                            return types[v].tag;  
                        }else{
                            return(
                                // use color round tag as default tag

                                // todo: add active blue border
                                <div
                                    key={v}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                        borderRadius: "50%",
                                        background: types[v].key,
                                        margin: "6px",
                                    }}
                                    onClick={()=>setSelectedType(types[v])}
                                >
                                    
                                </div>
                            )

                        }
                    })}
                </div>
            </div>

        </div>
    )
}

export default ProductItem;