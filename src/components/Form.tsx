import React, { useState } from 'react'
import { Input } from '@material-ui/core';
import Buttons from './Buttons'

interface TodoListProps {

}

const Form: React.FC<TodoListProps> = () => {
  const [value, setValue] = useState<string>(' ')
  return (
    <div>
      <h2>Add tasks</h2>
      <div className="row">
        <form id="resete">
          <Input type="text" placeholder="hello" value={value} onChange={(e) => setValue(e.target.value)}></Input>
        </form>
        <Buttons item={value} cleanValue={setValue}/>
      </div>
    </div>

  )
}

export default Form
