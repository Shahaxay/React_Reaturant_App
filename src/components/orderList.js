import React from "react";

import OrderItem from "./OrderItem";

const OrderList = props => {
    return (
        <React.Fragment>
            <h1>{props.table}</h1>
            <ul>
                {props.list.map(order => <OrderItem
                    price={order.price}
                    table={order.table}
                    dish={order.dish}
                    id={order.orderId}
                />)}
            </ul>
        </React.Fragment>
    );
}

export default OrderList;