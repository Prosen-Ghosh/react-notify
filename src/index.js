import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Alert from './alert';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isActive : false
        };
        this.click = this.click.bind(this);
    }
    click(props){
        this.setState({
            isActive : !this.state.isActive
        })
    }
    render(){
        return (
            <div className="container">
                <Alert 
                    isActive={this.state.isActive} 
                    type="danger"
                    message="This is a success message"
                    title="Danger"
                    possition="top-center"
                    />
                <button onClick={this.click}>click</button>
            </div>
        );
    }
} 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
