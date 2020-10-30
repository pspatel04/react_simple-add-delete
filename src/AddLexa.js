import React, {Component} from 'react';

class AddLexa extends Component{


    state={
        name:null,
        age:null,
        crew:null,
    }

    handleChange =(e) =>{
        this.setState({
            [e.target.id]: e.target.value

        })
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        this.props.addlexa(this.state);

    }
    render()
    {
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" onChange={this.handleChange}/>
                <label htmlFor="name">Age:</label>
                <input type="text" id="age" onChange={this.handleChange}/>
                <label htmlFor="name">Crew:</label>
                <input type="text" id="crew" onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
        </div>
        )}
}

export default AddLexa;