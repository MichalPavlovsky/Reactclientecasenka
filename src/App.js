import React from 'react';

class App extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         dude: 'Marceline'
      }
    }
    render() {
        return <div>
            <p>
                M good friend <strong>{this.state.dude} </strong>
            </p></div>;
    }
}

export default App;
