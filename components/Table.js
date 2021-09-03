import {useState} from "react";

function Table(props) {
    
    const sales = stores.map(store=>store.hourlySales)
    let dayTotal = 0;
    sales.forEach(storeArr=>dayTotal+=storeArr.reduce((a,b)=>a+b,0));

    return (
        stores.length ?
        <table class="table">
            <thead>
                <tr>
                    <th>Location</th>
                    {hoursOpen.map((hour,idx) =>
                    <th key={idx}>{hour}</th>
                    )}
                    <th>Day Total</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((stores,idx)=>
                <tr key={idx}>
                    <td>{store.location}</td>
                    {sales[idx].map(sales=>
                        <td>{sales}</td>
                        )}
                    <td>{sales[idx].reduce((a, b) => a + b, 0)}</td>
                </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <td>Totals</td>
                    {hours.map((time, idx)=>{
                        let hourTotal = 0;
                        sales.forEach(store=>{
                            hourTotal+=store[idx];
                        });
                        return <td>{hourTotal}</td>
                    })}
                    <td>{dayTotal}</td>
                </tr>
            </tfoot>
        </table>
        :
        <h3>Not available: No stores</h3>
    )
}

export default Table