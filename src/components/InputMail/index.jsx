import React from 'react'
import styles from './styles.module.css'

export default function InputMail(props) {
  return (
    <input className={styles.inputMail} type="email" {...props} placeholder='example@mail.com' />
  )
}
