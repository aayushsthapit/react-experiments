import React from 'react';
const axios = require('axios');

const withFetch = Component => {
    class RetreiveApi extends React.Component {
        constructor() {
            super();
            this.state = {
                datas: [],
                isLoaded: false,
                listLength:''

            }
            
        }

        componentDidMount() {
            axios.get(this.props.url + this.props.query)
                .then((myJson) => {
                    this.setState({
                        datas: myJson.data.data.data,
                        isLoaded: true,
                        listLength:myJson.data.data.listLength
                    })
                    this.props.getPaginationCount(myJson.data.data.listLength);
                })

                
               
        }

        componentWillReceiveProps(nextProps) {
            if (this.props.query !== nextProps.query) {
                axios.get(nextProps.url + nextProps.query)
                    .then((myJson) => {
                        this.setState({
                            datas: myJson.data.data.data,
                            isLoaded: true
                        })
                        this.props.getPaginationCount(myJson.data.data.listLength);
                    })
            }
        }
        

        render() {
            return <Component datas={this.state.datas} isLoaded={this.state.isLoaded} />
        }
    }
    return RetreiveApi;
}

export default withFetch;