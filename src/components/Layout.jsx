function Layout({ siteTitle, children }) {
  return (
    <div className="layout" data-title={siteTitle}>
      {children}
    </div>
  )
}

export default Layout