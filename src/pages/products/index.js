import ProductItem from "../../components/ProductItem"
import list from "./list"
import "./style.scss";

const Products = props => {

    return(
        <div className="Products">
            {
                list.map(v=>(
                    <ProductItem 
                        {...v}
                        key={v.name}
                    />
                ))
            }
        </div>
    )
}

export default Products;