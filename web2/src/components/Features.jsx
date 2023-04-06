import React from 'react'

import assets from '../assets'
import styles from '../styles/Global'

const FeatureCard = ({ iconUrl, iconText }) => (
  <div
    className={styles.featureCard}
  >
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div
      className={`${styles.section}
      ${styles.bgPrimary}
      banner03`}
    >
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1
            className={`${styles.h1Text} ${styles.whiteText}`}
          >Technologies</h1>
          <p
            className={`${styles.pText} ${styles.whiteText}`}
          >AM NFT ShowCase is built using cross-platform technologies, React Native and Expo, making it accessible on both iOS and Android devices.
          With this powerful combination, AM NFT ShowCase offers a seamless user experience across multiple devices while reducing development time and cost.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <FeatureCard
            iconUrl={assets.react}
            iconText="React Native"
          />
          <FeatureCard
            iconUrl={assets.javascript}
            iconText="JavaScript"
          />
          <FeatureCard
            iconUrl={assets.expogo}
            iconText="Expo"
          />
        </div>
      </div>
    </div>
  )
}

export default Features