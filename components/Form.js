import Table from "./Table.js"
import React, {useState} from "react";
export const name = "Joshua";

function Form(props) {

    const [formInput, setFormInput] = useState({});

    const handleChange = (e) => {
        setFormInput({...formInput,[e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(formInput);
        e.target.reset();
    }

    return(
        <>
            <form>
                <label>Location</label>
                <input id="location" placeholder="Enter" name="location" onChange={handleChange}></input>
                <br></br>
                
                <div id="inputContainer">
                    <div class="average-inputs">
                        <label>Minimum Customer per Hour</label>
                        <input class="average-inputs" name="minimumCustomers" onChange={handleChange}></input>
                    </div>
                    
                    <div class="average-inputs">
                        <label>Maximum Customer per Hour</label>
                        <input class="average-inputs" name="maximumCustomers" onChange={handleChange}></input>
                    </div>
                    
                    <div>
                        <label>Average Cookies per Sale</label>
                        <input class="average-inputs" name="averageCookiePerSale" onChange={handleChange}></input>
                    </div>

                    <button id="formSubmit" type="submit">Submit</button>
                </div> */}
            </form>
            {
                props.stores.length == 0 ?
                ""
                : <Table stores={props.stores}/>
            }
        </>
    )
}

export default Form;