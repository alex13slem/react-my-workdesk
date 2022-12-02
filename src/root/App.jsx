import { Routes, Route, Link } from 'react-router-dom'

import css from './app.module.scss'
import Table from '../pages/Table'
import SpaceX from '../pages/SpaceX'
import GoCorona from '../pages/GoCorona'

const App = () => {
  return (
    <Routes>
      <Route path={'*'} element={<Table />} />
      <Route path={'/'} element={<Table />} />
      <Route path={'/spacex'} element={<SpaceX />} />
      <Route path={'/gocorona'} element={<GoCorona />} />
    </Routes>
  )
}

export default App
