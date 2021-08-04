import React from 'react';
import Header from './components/Header'
import {CheckboxList} from './components/CheckboxList'
import Form from './components/Form'

function App() {
  return (
    <div className="app">
      <Header />
      <CheckboxList />
      <Form />
    </div>
  );
}

export default App;
