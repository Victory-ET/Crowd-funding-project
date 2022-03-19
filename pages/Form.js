import React from 'react'
import Footer from './components/Footer'
import Nav from './components/Nav'

function Form() {
  return (
    <div className='container'>
        <Nav/>
            <div>
                <h2>Fund Request Form</h2>
                <p>Only one more step to get started, fill the form below</p>
            </div>
        <Footer/>
    </div>
  )
}

export default Form