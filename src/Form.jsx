import {  } from 'react'
import './App.css'

function Form() {

  return (
    <>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form
