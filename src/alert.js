import React, {Component} from 'react';
import './alert.css';

class Alert extends Component{
    handleClose(){

    }
    render(){
        let possition = "";
        switch(this.props.possition){
            case 'top-center':
                possition = 'top-center';
                break;
            case 'top-right':
                possition = 'top-right';
                break;
            case 'top-left':
                possition = 'top-left';
                break;
            case 'bottom-left':
                possition = 'bottom-left';
                break;
            case 'bottom-right':
                possition = 'bottom-right';
                break;
            case 'bottom-center':
                possition = 'bottom-center';
                break;
            default:
                possition = '';
                break;
        }
        const css =  this.props.isActive === true ? 'd-none' : '';
        const classNames = `alert alert-${this.props.type}s ${css} animated slideInDown text-center alert-dismissible ${possition}`;
        return (
            <div className={classNames} role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <i class="material-icons icon">&#xE84D;</i>
                <div className="msgContainer">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default Alert;