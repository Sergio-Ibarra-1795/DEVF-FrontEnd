import Menu from './Menu'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <footer>
        <p className='text-center'>Footer</p>
      </footer>
    </>
  )
}
