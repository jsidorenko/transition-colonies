import React from 'react'
import styles from './MintTokens.scss'

const MintTokens = ({
  handleChange,
  handleClick,
  mintTokensError,
  mintTokensLoading,
  mintTokensSuccess,
}) => (
  <div className={styles.container}>
    <h2>{'Mint Tokens'}</h2>
    <input
      onChange={handleChange}
      placeholder="amount"
      type="number"
    />
    <button onClick={handleClick}>
      {'Mint Tokens'}
    </button>
    {mintTokensError &&
      <span className={styles.message}>
        <span className={styles.error}>
          {mintTokensError}
        </span>
      </span>
    }
    {mintTokensSuccess &&
      <span className={styles.message}>
        {'success'}
      </span>
    }
  </div>
)

export default MintTokens
