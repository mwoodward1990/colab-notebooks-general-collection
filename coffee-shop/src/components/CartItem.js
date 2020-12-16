import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ product }) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    console.log(product)
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                    alt={product.title}
                    style={{margin: "0 auto", maxHeight: "50px"}} 
                    src={product.images[0].src} className="img-fluid d-block"
                />
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title}</h5>
                <p className="mb-1">Price: {product.variants[0].price} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
            <Button 
                onClick={() => increase(product)}
                // className="btn btn-primary btn-sm mr-2 mb-1"
                variant="secondary" size="sm"
                >
                    +
            </Button>
<span> </span>
            {   
                product.quantity > 1 &&
                <Button
                    onClick={() => decrease(product)}
                    // className="btn btn-danger btn-sm mb-1"
                    variant="secondary" size="sm"
                    >
                    -
                </Button>
            }
<span> </span>
            {
                product.quantity === 1 &&
                <Button
                    onClick={() => removeProduct(product)}
                    // className="btn btn-danger btn-sm mb-1"
                    variant="danger" size="sm"
                    >
                        x
                </Button>
            }
            
            </div>
        </div>
    );
}

export default CartItem;