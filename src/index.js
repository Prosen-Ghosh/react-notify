import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Alert from './alert';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDismiss : false
        };
        this.click = this.click.bind(this);
    }
    click(props){
        this.setState({
            isDismiss : !this.state.isDismiss
        })
    }
    render(){
        return (
            <div className="container">
                <Alert 
                    isDismissible={this.state.isDismiss}
                    type="success"
                    message="This is a success message"
                    title="Danger"
                    position="top-center"
                    icon="material-icons"
                    
                    />
                <button onClick={this.click}>click</button>
            </div>
        );
    }
} 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
