import { Routes, Route } from 'react-router-dom'
import Layout from './_cloner/components/Layout'
import Home from './modules/home/Home'

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App