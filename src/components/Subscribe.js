import React, { Component } from "react"
import addToMailChimp from "gatsby-plugin-mailchimp"
import TypeWrite from "../components/typeWrite"
import { Button, InputGroup, FormControl, Alert } from "react-bootstrap"

class Subscribe extends Component {
  state = {
    email: "",
    response: {
      result: "",
      msg: "",
    },
  }

  onSubmit = () => {
    addToMailChimp(this.state.email).then(data =>
      this.setState({ response: data })
    )
  }
  render() {
    return (
      <div>
        <p>Be the first one to be notified when I write a new article.</p>

        {this.state.response.result === "" ? (
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="Email"
                onChange={e => this.setState({ email: e.target.value })}
              />
              <Button variant="dark" onClick={this.onSubmit}>Subscribe</Button>
            </InputGroup>
        ) : (
          <p></p>
        )}

        {this.state.response.result === "success" && (
          <Alert variant={'success'}>
                {this.state.response.msg}
            </Alert>
        )}

        {this.state.response.result === "error" && (
          <Alert variant={'warning'}>
            You have already subscribed !
        </Alert>
        )}
      </div>
    )
  }
}

export default Subscribe
