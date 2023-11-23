import React from 'react'
import Button from '../Button'
import styles from './styles.module.css'

export default function EarlyAccess() {
    const handleSubmit = e => {
        e.preventDefault()
        alert('Formulario enviado');
    }

    return (
        <div className={styles.earlyAccess}>
            <div className={styles.earlyAccess__container}>
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have <br />
                    any questions, our support team would be happy to help you.</p>
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <input type="email" />
                    <Button texto="Get Started For Free" />
                </form>
            </div>
        </div>
    )
}
