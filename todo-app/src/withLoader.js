import React from 'react';
import Loader from './loader.js';
const withLoader=Component=>
{
    class ThisComponent extends React.Component
    {
        render()
        {
            return this.props.isLoaded?<Component {...this.props}/>:<Loader/>;
        }
    }
    return ThisComponent;
}

export default withLoader;