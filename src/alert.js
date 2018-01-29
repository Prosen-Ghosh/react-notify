import React, {Component} from 'react';
import './alert.css';
import {getPosition} from './getPosition';
class Alert extends Component{
    constructor(props){
        super(props);
        this.state = {
            isDismissCss : !this.props.isDismissible ? 'hidden' : ''
        }
        this.handleDismiss = this.handleDismiss.bind(this);
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            isDismissCss : !nextProps.isDismissible ? 'hidden' : ''
        });
    }
    handleDismiss(){
        this.setState({
            isDismissCss : !this.state.isDismissible ? 'hidden' : ''
        });
    }
    render(){
        const position = getPosition(this.props.position);
        const animation = position.split('-')[0] === 'bottom' ? 'slideInUp' : 'slideInDown'
        const classNames = `hn-noti-position-${position} hn-noti`;
        const classNames2 = `oneNoti hnk-animation ${animation} ${this.props.type || 'success'}`; 
        return (
            <div className={[classNames,this.state.isDismissCss].join(' ')} role="alert">
                <div className={classNames2}>
                    
                    {
                        this.props.icon ?
                        <div className="iconHolder" role="button">
                            <i className="material-icons">&#xE84D;</i>
                        </div> : null
                    }
                    
                    <div className="msgbox">
                        <div className="msg">
                            {this.props.title ? <h5>{this.props.title}</h5> : null}
                            <p>{this.props.message || "Deafult Message" }</p>
                        </div>
                    </div>
                    {
                        this.props.isDismissible ? 
                        <div className="notiCloser" onClick={this.handleDismiss}>
                            <span className="icon-cross"><b>&times;</b></span>
                        </div> : null
                    }
                </div>
            </div>
        );
    }
}

export default Alert;