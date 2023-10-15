import React,{useRef,useState,useEffect} from "react";
import OrderList from "./orderList";

const OrderForm=props=>{
    const [table1,setTable1]=useState(JSON.parse(localStorage.getItem('table1'))||[]);
    const [table2,setTable2]=useState(JSON.parse(localStorage.getItem('table2'))||[]);
    const [table3,setTable3]=useState(JSON.parse(localStorage.getItem('table3'))||[]);

    useEffect(()=>{
        localStorage.setItem('table1',JSON.stringify(table1));
    },[table1]);
    useEffect(()=>{
        localStorage.setItem('table2',JSON.stringify(table2));
    },[table2]);
    useEffect(()=>{
        localStorage.setItem('table3',JSON.stringify(table3));
    },[table3]);

    const idRef=useRef();
    const priceRef=useRef();
    const dishRef=useRef();
    const tableRef=useRef();
    const submissionHandler=(e)=>{
        e.preventDefault();
        const table=tableRef.current.value;
        const order={
            table:tableRef.current.value,
            orderId:idRef.current.value,
            price:priceRef.current.value,
            dish:dishRef.current.value,
        }
        const prevOrder=JSON.parse(localStorage.getItem(table))||[];
        switch(table){
            case "table1":setTable1([order,...prevOrder]);break;
            case "table2":setTable2([order,...prevOrder]);break;
            case "table3":setTable3([order,...prevOrder]);break;
            default: console.log("problem in table");
        }
    }
    return (
        <React.Fragment>
            <h1>Order Your Food</h1>
            <form onSubmit={submissionHandler}>
                <label htmlFor="id">Update OrderId</label>
                <input type="text" id="id" ref={idRef}></input>
                <label htmlFor="price">Choose Price</label>
                <input type="Number" id="price" ref={priceRef}/>
                <label htmlFor="dish">Choose Dish</label>
                <input type="text" id="dish" ref={dishRef}/>
                <label htmlFor="table">Choose a table</label>
                <select id="table" ref={tableRef}>
                    <option value='table1'>Table 1</option>
                    <option value='table2'>Table 2</option>
                    <option value='table3'>Table 3</option>
                </select>
                <button type="submit">Add to bill</button>
            </form>
            <OrderList table='Table1' list={table1}/>
            <OrderList table='Table2' list={table2}/>
            <OrderList table='Table3' list={table3}/>
        </React.Fragment>
    );
}

export default OrderForm;