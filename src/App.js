import React, {Component} from 'react';
import AddLexa from './AddLexa';
import Lexa from './Lexa';

class App extends Component {
  state = {

    lexas : [
      {name:"Lexa", age:"25", crew:"Trikru", id:'1'},
      {name:"Wanheda", age:"24", crew:"Trikru",id:'2'},
    ]
  }

  addLexa = (lexa) =>{
    lexa.id= Math.random();
    let lexas = [...this.state.lexas, lexa]
    this.setState({
      lexas: lexas
    })
  }

  deleteLexa =(id) =>
  {
    let lexas = this.state.lexas.filter(lexa =>{
      return lexa.id !== id;
    });

    this.setState({
      lexas: lexas
    })

  }
  componentDidMount(){
    console.log("Mounted");
  }

  componentDidUpdate(prevProps,prevState)
  {
    console.log("Updated");
    console.log(prevProps,prevState);
  }
  render(){
  return (
    <div className ='App'>
    <Lexa deleteLexa={this.deleteLexa} lexas={this.state.lexas}/>
    <AddLexa addlexa={this.addLexa}/>
    </div>
  );
}
}

export default App;
