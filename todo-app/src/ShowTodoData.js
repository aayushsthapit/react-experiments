import './tableLayout.css';
import React, { Component } from 'react';
import withLoader from './withLoader';
import withFetch from './withFetch';
import Search from './RequestQueries/Search';
import Pagination from './RequestQueries/Pagination'

const Todos = ({ id, name }) => {
    return (<tr>
        <td>{id}</td>
        <td>{name}</td>
    </tr>)
}

const ShowTodoData=(props)=>{
    return (
        <div className="main-wrapper">
             <table className="users">
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                    </tr>
                </tbody>
                <tbody>
                    {props.datas.map((todo, index) => <Todos key={index} {...todo} />)}
                </tbody>
            </table>

        </div>
    )

}


const ListWithFetch = withFetch(withLoader(ShowTodoData))
const url="http://localhost:8848/api/todo";
class Testclass extends React.Component
{
    constructor()
    {
        super();
        this.state=
        {
            searchText:'',
            query:'',
            query_per_page:1, 
            query_name:'',
            query_sort_by:'', 
            query_sort_order:'',
            query_page:1,
            totalCount:''
        }

        this.callBackFromChild=this.callBackFromChild.bind(this);
        this.queryBuilder=this.queryBuilder.bind(this);
        this.getPaginationCount=this.getPaginationCount.bind(this);
        this.pageNumber=this.pageNumber.bind(this);
    }

    callBackFromChild(queryFromChild,queryType)
    {
        if(queryType==='per_page')
        {
            this.setState({query_per_page:queryFromChild,query_page:1})
        }
        if(queryType==='name')
        {
            this.setState({query_name:queryFromChild,query_page:1})
        }
        if(queryType==='sort_by')
        {
            this.setState({query_sort_by:queryFromChild,query_page:1})
        }
        if(queryType==='sort_order')
        {
            this.setState({query_sort_order:queryFromChild,query_page:1})
        }
    }

    getPaginationCount(totalCount)
    {
        this.setState({totalCount:totalCount});
    }


    queryBuilder()
    { 
        console.log("INNNNN")
        return('?name='+ this.state.query_name+'&sort_by='+ this.state.query_sort_by+'&sort_order='+ this.state.query_sort_order+'&per_page='+ this.state.query_per_page+'&page='+ this.state.query_page)
    }

    pageNumber=(props)=>{
        let indicesList = [];
        
        for (let i = 0; i < props / this.state.query_per_page; i++) 
        {
            indicesList.push(i);           
        }
        return indicesList;       
    }

    render()
    {        
        return <div>
            
            <Search callBackFromChild={this.callBackFromChild}/>
            <Pagination callBackFromChild={this.callBackFromChild}/>
            <ListWithFetch url={url} query={this.queryBuilder()} getPaginationCount={this.getPaginationCount}/>
            <div className="pagination">
            {this.pageNumber(this.state.totalCount)
                .map((page,index)=><a key={index} onClick={()=>this.setState({query_page:page+1})}>{page+1}</a>)}
                </div>
            </div>
    }
}

export default Testclass;