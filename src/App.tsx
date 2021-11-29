import React, { FC } from 'react';
import Header from './components/Header'
import {CheckboxList} from './components/CheckboxList'
import Form from './components/Form'

const App:FC = () => {
  return (
    <div className="app">
      <Header />
      <CheckboxList />
      <Form />
    </div>
  );
}

export default App;
