import React from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import logo from '../css/logo.svg';

class List extends React.Component {
    render() {
        const { rate, name } = this.props;
        const { date, namesNrates, objRates } = rate || {};
        const { obj } = name || {};
        const parsedDate = date && new Date(parseInt(date, 10) * 1000).toString();

        if (!obj || !date) {
            return <img src={logo} className="App-logo" alt="logo" />
        }
        if (name.error) {
            return <h3>{name.error} - Reload The Page</h3>
        }
        if (rate.error) {
            return <h3>{rate.error} - Reload The Page</h3>
        }

        return (
            <div>
                <h1>Currency list:</h1>
                <p>Base: {objRates.base}</p>
                <p>Last Updated: {parsedDate}</p>
                <br />
                <table>
                    <tbody>
                        <tr>
                            <th>Names</th>
                            <th>Rates</th>
                        </tr>
                        {
                            Object.keys(obj).map(name => (
                                <tr key={name}>
                                    <td>{obj[name]}</td>
                                    <td>{namesNrates[name]}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({ rateReducer, nameReducer }) => {
    return {
        rate: rateReducer,
        name: nameReducer,
    };
};


export default connect(mapStateToProps)(List);