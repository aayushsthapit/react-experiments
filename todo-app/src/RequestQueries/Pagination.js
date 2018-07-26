import React, { Component } from 'react';

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            per_page: 2
        }
    }

    updateQuery(event)
    {
        this.props.callBackFromChild(event.target.value,'per_page')
    }

    render() {
        return (
            <div className="header-entries">
            Show <select onChange={(event) => { this.updateQuery(event) }}>
                <option value='1'>1</option>
                <option value='4'>4</option>
                <option value='8'>8</option>
                <option value='12'>12</option>
            </select> entries.
            </div>
        )
    }
}

export default Pagination;
