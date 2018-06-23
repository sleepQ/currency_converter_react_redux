import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actionCreators';
import '../css/App.css';
import logo from '../css/logo.svg';

class Select extends React.Component {
    render() {
        const { name, rate, actions } = this.props;
        const { obj, selectedValue1, selectedValue2, selectValues, nameIsFetchin } = name || {};
        const { date, inputValue1, inputValue2, namesNrates, rateIsFetchin } = rate || {};
        const { updValuesOnSelect1, updValuesOnSelect2, updSelectedValue1, updValue1, updValue2, updSelectedValue2, swapName, swapRate, resetButton } = actions || {};
        const parsedDate = date && new Date(parseInt(date, 10) * 1000).toString();

        if (nameIsFetchin || rateIsFetchin) {
            return <img src={logo} className="App-logo" alt="logo" />
        }
        if (rate.error) {
            return <h3>{rate.error} - Reload The Page</h3>
        }
        if (name.error) {
            return <h3>{name.error} - Reload The Page</h3>
        }

        return (
            <div>
                <h1>Converter</h1>
                <div className="d-flex">
                    <select className='select' value={selectedValue1}
                        onChange={e => {
                            updSelectedValue1(e)
                            updValuesOnSelect1(namesNrates[e.target.value]);
                        }
                        }>
                        {
                            selectValues.map(name => <option key={name} value={name}>{obj[`${name}`]}</option>)
                        }
                    </select>

                    <input
                        type="number"
                        className="ml10"
                        value={inputValue1}
                        onChange={e => updValue1(e)} />
                    <label className="ml10">{selectedValue1.toString()}</label>
                </div>

                <br />

                <div className="d-flex">
                    <select className="select" value={selectedValue2}
                        onChange={e => {
                            updSelectedValue2(e);
                            updValuesOnSelect2(namesNrates[e.target.value]);
                        }
                        }>
                        {
                            selectValues.map(name => <option key={name} value={name}> {obj[`${name}`]}</option>)
                        }
                    </select>

                    <input
                        type="number"
                        className="ml10"
                        value={inputValue2}
                        onChange={e => updValue2(e)} />
                    <label className="ml10">{selectedValue2.toString()}</label>
                </div>

                <br />

                <div>
                    <button className='btn' onClick={() => {
                        swapName();
                        swapRate();
                    }} disabled={!inputValue1 || !inputValue2}>Swap</button>
                    <button className="btn" disabled={!inputValue1 || !inputValue2} onClick={() => resetButton()}>Reset</button>
                </div>

                <p>Last Update: {parsedDate}</p>
            </div>
        );
    }
}

const mapStateToProps = ({ rateReducer, nameReducer }) => ({
    rate: rateReducer,
    name: nameReducer
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Select);