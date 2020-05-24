import React from 'react'
import styles from '../styles/Update.module.css'

export default function Update(props) {
  return (
    <div className={styles.update}>

      <div className={styles.inputSection}>
        <label className={styles.inputLabel}>Zip Code:</label>
        <input className={styles.input} name="updatedZip" type="text" placeholder='10036'
          value={props.value} onChange={props.handleChange}
        />
      </div>
      <button className={styles.updateButton} onClick={props.handleUpdate}>Update</button>

    </div>
  );
}