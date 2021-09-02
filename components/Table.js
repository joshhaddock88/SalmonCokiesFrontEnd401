import React, {useState} from "react";
import Hours from "./Data.js"

function Table(props) {
    
    let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
    let hourlySales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36];
    return (
        <>
                <div id="storeTable">
                    <table class="rounded-lg border-2 border-opacity-100 border-purple-400 bg-purple-100">
                        <tr>
                            <th>Location</th>
                            {hours.map((hours, idx) => 
                            <th key={idx} class="rounded-lg border-2 border-opacity-100 border-purple-400">{hours}</th>
                            )}
                            <th class="rounded-lg border-2 border-opacity-100 border-purple-400">Totals</th>
                        </tr>
                        {
                            props.stores.map((store, idx) =>
                            <tr>
                                <td key={idx} class="rounded-lg border-2 border-opacity-100 border-purple-400">{store.locations}</td>

                                {hourlySales.map((sales, idx) => 
                                <td key={idx}>{sales}</td>
                                )}
                            </tr>
                            )
                        }
                        <tr>
                            <th class="rounded-lg border-2 border-opacity-100 border-purple-400">Totals</th>
                        </tr>
                    </table>
                </div>
        </>
    )
}

export default Table