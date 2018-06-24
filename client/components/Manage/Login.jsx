import React from 'react'
import styles from './Login.scss'

const Login = ({
  colonyAddress,
  getColonyClientError,
  getColonyClientLoading,
  getColonyClientSuccess,
  handleClick,
  handleChange,
}) => (
  <div className={styles.container}>
    <h2>{'Get Market'}</h2>
    <div className={styles.field}>
      <label htmlFor="colonyAddress">
        {'address:'}
      </label>
      <input
        id="colonyAddress"
        onChange={handleChange}
        placeholder="0x0"
        type="text"
        value={colonyAddress}
      />
    </div>
    <div className={styles.buttons}>
      <button onClick={handleClick}>
        {'Get Market'}
      </button>
    </div>
    {getColonyClientError &&
      <div className={styles.message}>
        <span className={styles.error}>
          {getColonyClientError}
        </span>
      </div>
    }
  </div>
)

export default Login