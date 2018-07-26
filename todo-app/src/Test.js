import React, {Component} from 'react';

class Test extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            name:"Data stored in parent passed from child."
        }        
    }
    componentDidMount() {
        this.props.tryNew(this.state.name);        
    }

    render()
    { 
        console.log("INnnnnnn");
        let test=this.props.category.map(category=>
            {
               
                return <option key={category} value='category'>{category}</option>
            })
        return(
        <div>
            <br/><h2><p>Rendered from Test class</p></h2>
            {test}
        </div>
    )
    };
}

export default Test;