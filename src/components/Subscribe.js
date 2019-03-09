import React, { Component } from 'react';
import addToMailChimp from 'gatsby-plugin-mailchimp'
import TypeWrite from '../components/typeWrite'

class Subscribe extends Component {
    state = {
        email: '',
        response: {
            result: '',
            msg: ''
        }
    }
    
    onSubmit = () => {
        addToMailChimp(this.state.email)
        .then(data => this.setState({response: data}))
    }
    render() {
        return (
            <div>
                {
                    this.state.response.result == '' && this.props.typedNeeded && (
                        <TypeWrite
                            strings={["Be the first one to be notified when I write a new article. "]}
                            startDelay = {18000}
                        />
                    )
                }
                
                {
                    this.state.response.result == ''
                    ? (
                        <div>
                            <input type="email" onChange={(e) => this.setState({email: e.target.value})}/>
                    <button className="subscribe-button" onClick={this.onSubmit}>Subscribe</button>
                        </div>
                    ) : (<p></p>)
                }
                
            { this.state.response.result == "success" && <p>{this.state.response.msg}</p> }
                    
            { this.state.response.result == "error" && <p>You have already subscribed !</p> }
            </div>
        );
    }
}

export default Subscribe;