import React from 'react'
import styles from './styles.module.css'

export default function Button({ancho, texto}) {
  return (
    <button className={styles.hero__boton} style={{width: ancho}} >{texto} </button>
  )
}
