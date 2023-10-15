import React from "react";

const OrderItem=props=>{
    const clickHandler=e=>{
        e.preventDefault();
        e.target.parentElement.remove();
        //also need to remove from localstorage
        let orderList=JSON.parse(localStorage.getItem(props.table));
        orderList=orderList.filter(order=>order.orderId!==props.id);
        localStorage.setItem(props.table,JSON.stringify(orderList));
    }
    return(
        <li>
            {`${props.table} - ${props.dish} - ${props.price}`}
            <button onClick={clickHandler}>Delete Order</button>
        </li>
    );
}

export default OrderItem;