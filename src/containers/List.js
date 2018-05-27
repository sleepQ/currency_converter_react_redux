import React from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux';
import '../css/App.css';
import logo from '../css/logo.svg';

class List extends React.Component {
    render() {
        const { obj } = this.props.name;
        const { date, namesNrates, objRates } = this.props.rate;
        if (!obj || !date) {
            return <img src={logo} className="App-logo" alt="logo" />
        }

        if(this.props.name.error){
            return <h3>{this.props.name.error} - Reload The Page</h3>
        }

        if(this.props.rate.error){
            return <h3>{this.props.rate.error} - Reload The Page</h3>
        }

        return (
            <div>
                <Header />
                <h1>Currency list:</h1>
                <p>Base: {objRates.base}</p>
                <p>Last Updated: {new Date(parseInt(date, 10) * 1000).toString()}</p>
                <br/>
                <table>
                    <tbody>
                        <tr>
                            <th>Names</th>
                            <th>Rates</th>
                        </tr>
                        {
                            Object.keys(obj).map((name,i) => {
                                return (
                                    <tr key={name}>
                                        <td> { obj[name] } </td>
                                        <td> { namesNrates[name] } </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rate: state.rateReducer,
        name: state.nameReducer,
    };
};


export default connect(mapStateToProps)(List);