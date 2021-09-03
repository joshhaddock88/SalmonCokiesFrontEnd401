import React, {useState} from 'react';

class CookieStandAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownder: 'Joshua Haddock'
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({...this.State,[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newStore(this.state);
        e.target.reset();
    }

    render() {
        return (
            <>
               <form onSubmit={this.handleSubmit}>
                <label>Location</label>
                <input id="location" name="location" onChange={this.handleChange}></input>
                <br/>
                
                <div id="inputContainer">
                    <div class="average-inputs">
                        <label>Minimum Customer per Hour</label>
                        <input class="average-inputs" name="minimumCustomers" onChange={this.handleChange}></input>
                    </div>
                    
                    <div class="average-inputs">
                        <label>Maximum Customer per Hour</label>
                        <input class="average-inputs" name="maximumCustomers" onChange={this.handleChange}></input>
                    </div>
                    
                    <div>
                        <label>Average Cookies per Sale</label>
                        <input class="average-inputs" name="averageCookiePerSale" onChange={this.handleChange}></input>
                    </div>

                    <button id="formSubmit" type="submit">Submit</button>
                </div>
            </form> 
            </>
        )
    }
}

export default CookieStandAdmin;