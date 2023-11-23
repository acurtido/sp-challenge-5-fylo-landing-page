import React from 'react'
import './styles.css'

export default function EarlyAccess() {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className="container">
            <div className='box'>
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have <br/> any questions, our support team would be happy to help you.</p>
                <form className='formulario' onSubmit={handleSubmit}>
                    <input type="email" />
                    <button>Get Started For Free</button>
                </form>
            </div>
        </div>
    )
}
