import React from 'react'
import styles from './styles.module.css'

export default function Button(props) {
  return (
    <button className={styles.hero__boton}>{props.texto}</button>
  )
}
