import { Navigate, Route, Routes } from 'react-router-dom'
import Menu from '../common/Menu'

const RenderComp = ({ text }) => <h2>{text}</h2>

export default function RoutingDocu () {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<RenderComp text='Main' />} />
        <Route path='/about' element={<RenderComp text='About' />} />
        <Route path='/services' element={<RenderComp text='Services' />} />
        <Route path='/404' element={<RenderComp text='Page not found' />} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}
