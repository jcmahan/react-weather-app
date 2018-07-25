import React from 'react';

import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

class App extends React.Component {
  render() {
    return(
      <div> 
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;