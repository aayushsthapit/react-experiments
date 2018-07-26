import React,{Component} from 'react';

class FormComponent extends Component
{
    constructor()
    {
        super();
        this.state=
        {
            name:'React',
            count:0,
            inputfield:''
        }  
        this.updateCounter=this.updateCounter.bind(this); 
        this.updateInputField=this.updateInputField.bind(this);  
    }

    updateCounter()
    {
        this.setState({
            count:this.state.count+1
        })
    }
    updateInputField(event)
    {
        this.setState({
            inputfield:event.target.value
        })
    }


    render() {     
        return <div 
            onClick={()=>this.updateCounter()}>
            <br/>
            <h2>FormComponent class</h2>
                <p>Hey Everyone this is a test of React framework from {this.props.country}</p>
                <p>The onclick counter is {this.state.count}</p>

                <input onChange={(event)=>this.updateInputField(event)}></input>
                {this.state.inputfield}
            </div>
     
    }
}

export default FormComponent;