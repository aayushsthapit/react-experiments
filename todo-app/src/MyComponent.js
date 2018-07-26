import React, { Component } from 'react';
import Test from './Test';
class MyComponent extends Component
{
    constructor()
    {
        super();
        this.state=
            {
                name:'The Legend',
                isbn:55555555555,
                category:{
                    name:'Fiction',
                },
                value:'TEST1',
                category:['Option A', 'Option B', 'Option C']    
            }
           // this.setValue=this.setValue.bind(this);
          this.updateValue=this.updateValue.bind(this);
    }

    updateValue(value)
    {
       this.setState({
           value:value
       });
    }
   
    

    render()
    {
        return (
        <div>    
            <br/>
            <h2>My Component</h2>        
            <p>The book "{this.state.name}" belongs to category "{this.state.category.name}"</p>
            "{this.state.value}"
            <Test tryNew={this.updateValue} category={this.state.category}/>
        </div>
        );
    }
} 

export default MyComponent;