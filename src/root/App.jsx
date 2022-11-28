import styles from './app.module.scss'
import Main from '../pages/Main'

const App = () => {
  return (
    <div className={styles['body']}>
      <Main />
    </div>
  )
}

export default App
