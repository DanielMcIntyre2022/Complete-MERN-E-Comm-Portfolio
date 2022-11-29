
function Header() {
  return (
    <>
    <nav>
      <div className="flex justify-between bg-slate-200">
        <div className="nav-left-container">
            <div className="company logo">E-Commm</div>
        </div>
        <div className=" flex nav-right-container">
             <div className="cart">Cart</div>
        <div className="login-logo">Login</div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header;