import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Alert from './alert';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isDismiss : true
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
                    timeOut={1000}
                    
                    />
                    <Alert 
                    isDismissible={this.state.isDismiss}
                    type="error"
                    message="This is a success message"
                    title="Danger"
                    position="bottom-center"
                    icon="material-icons"
                    timeOut={2000}
                    />
                    <Alert 
                    isDismissible={this.state.isDismiss}
                    type="error"
                    message="This is a success message"
                    title="Danger"
                    position="bottom-left"
                    icon="material-icons"
                    timeOut={3000}
                    />
                    <Alert 
                    isDismissible={this.state.isDismiss}
                    type="error"
                    message="This is a success message"
                    title="Danger"
                    position="bottom-right"
                    icon="material-icons"
                    timeOut={4000}
                    />
                    <Alert 
                    isDismissible={this.state.isDismiss}
                    type="error"
                    message="This is a success message"
                    title="Danger"
                    position="top-left"
                    icon="material-icons"
                    timeOut={5000}
                    />
                    <Alert 
                    isDismissible={this.state.isDismiss}
                    type="error"
                    message="This is a success message"
                    title="Danger"
                    position="top-right"
                    icon="material-icons"
                    timeOut={6000}
                    />
                <button onClick={this.click}>CLICK</button>
            </div>
        );
    }
} 
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
