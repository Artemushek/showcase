import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.bgWhite}`}>
      <div className={`flex-col text-center mt-20`}>
        <h1 className={`${styles.h1Text} ${styles.blackText}`}>"UA-DEFENDY" NFT Collection</h1>
      </div>
        <div className={`${styles.flexCenter} -mt-5`}>          
          <img
            src={assets.scene}
            alt="download_png"
            //className={styles.fullImg}
            width="1200px"
            
          />
        </div>

      <div className={`flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>
            Visit OPENSEA platform
          </h1>
          <p className={`${styles.pText} ${styles.blackText}`}>
            Check the whole collection directly
          </p>
        </div>
        <button
          className={`${styles.btnPrimary} mb-20`}
          
        >
          <a href="https://opensea.io/collection/ua-defendy" target="_blank">Visit and Check</a>
        </button>

      
      </div>
    </div>
  )
}

export default Download