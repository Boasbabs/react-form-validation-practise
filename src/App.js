import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {

    constructor(){
        super();
        this.state= {
          data : ""
        }
      }

      formChild = (params) => {
        this.setState({
          data : params
        })
      }

    render() {
        return (<div>
            <Form callback={this.formChild}></Form>
            <Message errorMessage={this.state.data}></Message>
        </div>);
    }
}

export default App;
