import React, { Component } from 'react'

class FormAndInputs extends Component {

  constructor(props){
    super(props)
    this.state = {
      fullName: null
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const data = this.state;
    console.log(data)
  }

  handleInputChange = (e) => {
    
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {fullName} = this.state
    return (
      <div>
        <h1>Workout Submission</h1>
        <p>Full name is: {fullName}</p>
        <p>
          <input type="text" placeholder='Your Entry' name='fullName' onChange={this.handleInputChange}></input>
        </p>
        <p><button>Send Message</button></p>
      </div>
    )
  }
}

export default FormAndInputs
