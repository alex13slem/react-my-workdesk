import Google from './components/Google'
import css from './greeting.module.scss'

const Greeting = () => {
  return (
    <section className={css['greeting']} id='greeting'>
      <Google />
      <div className={css['hello']}>
        <p>Привет, друг!</p>
      </div>
    </section>
  )
}

export default Greeting
