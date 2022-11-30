import { Link } from "react-router-dom";
import { FiShoppingCart } from 'react-icons/fi';
import { BsPerson } from 'react-icons/bs';

function Header() {
  return (
    <>
    <nav>
      <div className="flex justify-between bg-slate-200 p-2">
        <div className="nav-left-container ml-4">
            <div className="company logo">
              <Link to="/">E-Commm</Link>
            </div>
        </div>
        <div className=" flex nav-right-container mr-12">
             <div className="cart-container">
              <Link to="/cart">
                <div className="flex cart-icon pr-5">
                  <div className="pr-1 mt-1">
                    <FiShoppingCart/>
                  </div>
                <div className="cart-text">
                   Cart
                  </div>
                 </div>
              </Link>
             </div>
            <div className="login-container">
            <Link to="/login">
              <div className="flex login-icon pr-5">
                <div className="pr-1 mt-1">
                  <BsPerson/>
                  </div>
                  <div className="login-text">
                  Login
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header;