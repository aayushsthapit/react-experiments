import './tableLayout.css';
import React, { Component } from 'react';
const list = require('./data.json');

// import './App.css';


const Person = ({ name, gender, company }) => {
    return (<tr>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{company}</td>
    </tr>)
}


class DataTableComponent extends Component {
    constructor() {
        super();
        this.state = {
            keyWord: '',
            entriesCount: '10',
            page: 0
        }
        this.updateKeyWord = this.updateKeyWord.bind(this);
        this.filterEntries = this.filterEntries.bind(this);
        this.createPaginationIndices = this.createPaginationIndices.bind(this);
        this.currentPageUpdate = this.currentPageUpdate.bind(this);
    }

    updateKeyWord(value) {
        this.setState({ keyWord: value.target.value,
            page:0 });
    }

    filterEntries(value) {
        this.setState({
            entriesCount: value.target.value,
            page: 0
        });
    }

    createPaginationIndices(filteredList) {
        let indicesList = [];
        for (let i = 0; i < filteredList.length / this.state.entriesCount; i++) {
            indicesList.push(i);
        }
        return indicesList;
    }

    currentPageUpdate(pageNo) {
        this.setState({ page: pageNo });
    }
    

    render() {
        return (
            <div className="main-wrapper">
                <div className="header-wrapper">
                    <div className="header-entries">
                        Show <select onChange={(event) => { this.filterEntries(event) }}>
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                        </select> entries.
                    </div>
                    <div className="header-input-wrapper">
                        Search: <input placeholder='Search' onChange={(event) => this.updateKeyWord(event)}></input>
                    </div>
                </div>

                <table className="users">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Company</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {
                            (list
                                .filter(e => { return (e.name.toLowerCase().includes(this.state.keyWord) || e.gender.toLowerCase().startsWith(this.state.keyWord) || e.company.toLowerCase().includes(this.state.keyWord)) })
                                .slice(parseInt(this.state.page * this.state.entriesCount, 10), parseInt(this.state.entriesCount * (this.state.page + 1), 10))
                                .map((person, index) => <Person key={index} {...person} />))
                        }
                    </tbody>
                </table>


                <div className="pagination">
                    {
                        this.createPaginationIndices(list.filter(e => { return (e.name.toLowerCase().includes(this.state.keyWord) || e.gender.toLowerCase().startsWith(this.state.keyWord) || e.company.toLowerCase().includes(this.state.keyWord)) }))
                            .map((page, index) => <a href="#" key={index} onClick={() => { return (this.currentPageUpdate(page)) }}>{page + 1}</a>)
                    }
                </div>
            </div>
        )

    }
}
export default DataTableComponent;