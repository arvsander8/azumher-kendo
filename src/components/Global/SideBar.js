import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './css/SideBar.css';
import { PanelBar, PanelBarItem} from '@progress/kendo-react-layout';

class SideBar extends Component{
    static propTypes = {
        list: PropTypes.array.isRequired,
    };   
    onSelect = (event) => {
        this.props.history.push(event.target.props.route);
    };
    render(){
        const {list} = this.props;
       
        return(
            <div className="SideBar">
                <h2>SIDEBAR</h2>
                <PanelBar dir="rtl" onSelect= {this.onSelect}>
                     {list && list.map(
                     (list, key) => <PanelBarItem key={key} title={list.title} route={list.url} > 
                    </PanelBarItem>)}
                </PanelBar>
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </div>
        );
    }
}
export default withRouter(SideBar);