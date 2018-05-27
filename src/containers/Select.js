import React from "react";
import * as actions from '../actions/actionCreators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import '../css/App.css';
import logo from '../css/logo.svg';

class Select extends React.Component{
    render(){

        if( this.props.name.nameIsFetchin || this.props.rate.rateIsFetchin ){
            return <img src={logo} className="App-logo" alt="logo" />
        }
        
        if(this.props.rate.error){
            return <h3>{this.props.rate.error} - Reload The Page</h3>
        }

        if(this.props.name.error){
            return <h3>{this.props.name.error} - Reload The Page</h3>
        }

        const { obj, selectedValue1, selectedValue2, selectValues} = this.props.name;
        const { date, inputValue1, inputValue2, namesNrates } = this.props.rate;
        const { updValuesOnSelect1, updValuesOnSelect2, updSelectedValue1, updValue1, updValue2, updSelectedValue2, swapName, swapRate, resetButton } = this.props.actions;
        
        return (
            <div>
                <Header/>
                <h1>Converter</h1>
                    <div>
                        <select className='select' value={ selectedValue1 } 
                        onChange={ (e) => {
                                updSelectedValue1(e)
                                updValuesOnSelect1(namesNrates[e.target.value]);
                            }
                        }>
                            {
                                selectValues.map( (name) => {
                                    return  <option key={name} value={name}>{ obj[`${name}`] }</option>
                                })
                            }
                        </select>{ ' ' }
                        
                        <input  type="number" 
                        value={inputValue1} 
                        onChange={ (e) => updValue1(e) }/><label> { selectedValue1.toString() } </label>
                    </div>
                            <br/>
                    <div>
                        <select className='select' value={ selectedValue2 } 
                        onChange={(e) => {
                                updSelectedValue2(e); 
                                updValuesOnSelect2(namesNrates[e.target.value]);
                            }
                        }>
                            {
                                selectValues.map(name => {
                                    return  <option key={name} value={name}> { obj[`${name}`]  }</option>       
                                })
                            }
                        </select>{ ' ' }
                        
                        <input type="number" 
                        value={inputValue2} 
                        onChange={ (e) => updValue2(e) }/><label> { selectedValue2.toString() } </label>
                    </div>
                <br/>

                <button className='btn' onClick={() => {
                    swapName();
                    swapRate();
                }} disabled={!inputValue1 || !inputValue2}>Swap</button>

                <button className='resetBtn' disabled={!inputValue1 || !inputValue2} onClick={() => resetButton()}>Reset</button>
                <p>Last Update: { new Date(parseInt(date,10)*1000).toString() }</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        rate: state.rateReducer,
        name: state.nameReducer
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({ 
        actions: bindActionCreators(actions, dispatch)
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);