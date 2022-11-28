import css from './main.module.scss'
import Table from './sections/Table'

const Main = () => {
  return (
    <main className={css['main']}>
      <Table />
    </main>
  )
}

export default Main
