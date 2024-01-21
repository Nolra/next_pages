const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;

const NavBar = () => {
  return (
    <div>
      NAVBAR
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      FOOTER
    </div>
  )
}
