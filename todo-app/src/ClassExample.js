import React, {Component} from 'react';

const list =[
    {id:1, name:"John"},
    {id:2,name:"Johnny"},
     {id:3,name:"Mary"}    
    ]
const Person=({name})=><li>{name}</li>

class ClassExample extends Component
{
    constructor()
    {
        super();
        this.state={
            input:''
        }
        this.updateInputField=this.updateInputField.bind(this);
    }

    updateInputField(event)
    {
        this.setState({input:event.target.value.toLowerCase()});
        console.log(this.state.input);
    }

    render()
    {
    
        return(
        <div>
            <input onChange={(event)=>this.updateInputField(event)}></input>

            {list
            .filter(e=>e.name.toLowerCase().includes(this.state.input))
            .map((person,index)=><Person key={index} name={person.name} />)
            }
        </div>
        )
    }
}

export default ClassExample;