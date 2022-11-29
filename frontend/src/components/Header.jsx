import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <nav>
      <div className="flex justify-between bg-slate-200">
        <div className="nav-left-container">
            <div className="company logo">
              <Link to="/">E-Commm</Link>
            </div>
        </div>
        <div className=" flex nav-right-container">
             <div className="cart">
              <Link to="/cart">Cart</Link>
             </div>
        <div className="login-logo">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header;