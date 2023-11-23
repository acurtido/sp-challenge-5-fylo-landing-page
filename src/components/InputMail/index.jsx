import React from 'react'
import styles from './styles.module.css'

export default function InputMail({ ancho, ...props }) {
  return (
    <input className={styles.inputMail} type="email" placeholder='example@mail.com' {...props} style={{ width: ancho }} />
  )
}
