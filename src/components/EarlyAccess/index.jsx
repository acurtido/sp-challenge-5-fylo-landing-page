import React from 'react'
import Button from '../Button'
import InputMail from '../InputMail'
import styles from './styles.module.css'

export default function EarlyAccess() {
    const [mail, setMail] = React.useState('')

    const handleSubmit = e => {
        e.preventDefault()
        alert('Formulario enviado')
    }

    return (
        <div className={styles.earlyAccess}>
            <div className={styles.earlyAccess__container}>
                <h1>Get early access today</h1>
                <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have <br />
                    any questions, our support team would be happy to help you.</p>
                <form className={styles.formulario} onSubmit={handleSubmit}>
                    <InputMail onChange={e => setMail(e.target.value)} />
                    <Button texto="Get Started For Free" />
                </form>
            </div>
        </div>
    )
}
