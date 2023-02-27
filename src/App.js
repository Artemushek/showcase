import { Download, Features, SectionWrapper } from './components'

import assets from './assets'
import styles from './styles/Global'

const App = () => {
  return (
    <>
      <SectionWrapper
        showLogo
        title="Your Own Store of NFTs. Start Selling and Growing"
        description="Take control of your crypto journey with AM NFT ShowCase and buy, store, collect, exchange and earn NFTs and crypto all in one place!
        Join over 5 million people already using AM NFT ShowCase to experience a seamless and secure way to manage your digital assets."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />       

       <SectionWrapper
        title="Smart User Interface"
        description="Get ready to immerse yourself in the power of the AM NFT ShowCase's user interface.
        Enjoy a seamless experience with smooth transitions and consistent colors that make the design language truly fluent.
        Every aspect of the UI has been carefully crafted to provide a stunning visual experience, from the placement of elements to the use of typography.
        With the AM NFT ShowCase, you can showcase your collection of NFTs in a way that's both visually appealing and easy to navigate."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />

      <SectionWrapper
        title="Deployment"
        description="AM NFT ShowCase is built using Expo, a framework that enables native app development for both iOS and Android devices.
        Expo allows for quick and efficient development and deployment of mobile apps, and provides seamless integration with the native device features.
        With Expo, AM NFT ShowCase ensures that users can easily access the app on their preferred platform, while also benefiting from the high performance and functionality of a native app experience."
        mockupImg={assets.feature}
        reverse
      />
       <SectionWrapper
        title="Creative way to ShowCase the store"
        description="With AM NFT ShowCase, you'll have access to two easy-to-use screens designed to help you navigate your NFT collection with ease.
        The first screen provides a comprehensive list of all your NFTs, allowing you to quickly browse and search through your collection.
        The second screen provides detailed information about each NFT, including its unique features, creator information, and more, giving you a complete view of your assets."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center 
        bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with ❤️ by {" "}
          <span className="bold">
            Artem Melnyk, 2023
          </span>
        </p>
      </div>
    </>
  )}

export default App