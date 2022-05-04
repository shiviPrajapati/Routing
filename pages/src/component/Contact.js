import React, {Component} from "react";
import './Style.css';
import img from './map.png'

class Contact extends Component{
    
    state = {
        username : "",
        phone : "",
        errors : {},
        status : ""
    }

    onChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    formValidation = () => {
        const {username, phone} = this.state;
        let isValid = true;
        const errors ={};

        if(username.trim().length <4){
            errors.usernameLength = " Too shory name!";
            isValid = false;
        }
        if(phone.trim().length !== 10){
            errors.phonenum = "Number invalid!";
            isValid = false;
        }

        if(isValid === true){
            this.setState({
                status : "Submit Successfully!"            })
        }

        this.setState({errors});
        return isValid;
    }

    onSubmit = (e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if(isValid){
            this.setState({username : "", phone : ""})
        }
    }

    render() {
        const {username, phone, errors} = this.state;
        return (
            <div className="contactpage">
                <div className="locatemap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5483645012196!2d77.61709116538668!3d12.936723440878723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ffca9e051%3A0x452c086b281b4cbe!2sKHB%20Colony%2C%205th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651647467578!5m2!1sen!2sin" ></iframe>
                </div>


                
                <div className="form">
                    <h1>Contact Us</h1>
                    
                    <form onSubmit={this.onSubmit}>
                        <label>Your Name:</label>
                        <br></br>
                        <input type="text" value={username} name="username" placeholder="Enter name"
                        onChange={this.onChange} />
                        <br></br>
                        <label>Enter a phone number:</label>
                        <br></br>
                        <input type="tel" value={phone} name="phone" placeholder="123-456-7890" pattern="[0-9]{10}" onChange={this.onChange}  />
                        <br></br>
                        {/* <input onSubmit={this.onSubmit} type="submit" value="Submit" /> */}
                        <button type="submit">Submit</button>
                        {Object.keys(errors).map((key) => {
                            return <div style={{color : "red"}} key ={key}>{errors[key]}</div>
                        })}
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact