import React, {Component } from 'react';
import Loader from './Loader/Loader';
import Table from './Table/Table';
import _ from 'lodash';


class App extends Component {

  state ={
    isLoading: true,
    data: [],
    sort: 'desc',
    sortField: 'id', // поле по умолчанию
  }

  async componentDidMount() {
    const response = await fetch(` https://practika-server.herokuapp.com/weather`) //https://apidata.mos.ru/v1/datasets/60667/rows?api_key=2c29ee50b30e5202fa15b6d1616e0aa4
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sort)
    })
  }

  onSort = sortField => {
      const cloneData = this.state.data.concat();
      const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
      const data = _.orderBy(cloneData, sortField, sort);
      this.setState({ data, sort, sortField })
    }

  render() {
    return (
      <div className="container">
      {
              this.state.isLoading
              ? <Loader />
              : <Table
              data={this.state.data}
              onSort={this.onSort}
              sort={this.state.sort}
              sortField={this.state.sortField}
              />
            }
      </div>
    );
  }
}

export default App;
