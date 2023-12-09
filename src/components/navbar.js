export default function Navbar({ className, children }) {
    return (
      <>
        <nav className={className}>{children}</nav>
      </>
    )
  }