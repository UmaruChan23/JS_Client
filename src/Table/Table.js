import React from 'react';

export default props => (
    <table className="table">
        <thead>
        <tr>
      <th onClick={props.onSort.bind(null, 'id')}>
          ID {props.sortField === 'id' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'forecastDate')}>
          forecastDate
      </th>
      <th onClick={props.onSort.bind(null, 'minimumTemperature')}>
          minimumTemperature {props.sortField === 'minimumTemperature' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'maximumTemperature')}>
          maximumTemperature {props.sortField === 'maximumTemperature' ? <small>{props.sort}</small> : null}
      </th>
      <th onClick={props.onSort.bind(null, 'notes')}>
          notes {props.sortField === 'notes' ? <small>{props.sort}</small> : null}
      </th>
  </tr>
        </thead>
        <tbody>
            { props.data.map(item =>(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.forecastDate}</td>
                    <td>{item.minimumTemperature}</td>
                    <td>{item.maximumTemperature}</td>
                    <td>{item.notes}</td>
                </tr>
            ))}
        </tbody>
    </table>
)
