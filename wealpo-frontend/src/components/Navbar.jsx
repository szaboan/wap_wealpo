import { Link, useLocation } from "react-router-dom";

export default function Navbar({ onOpen, onSearch }) {

  const location = useLocation(); // Lekérjük az aktuális útvonalat


  // Útvonal alapján meghatározzuk az aktuális menü nevét
  const getMenuName = () => {
    switch (location.pathname) {
      case "/":
        return "Termékek";
      case "/profil":
        return "Profil";
      case "/rolunk":
        return "Rólunk";
      default:
        return "Ismeretlen oldal";
    }
  }

  const handleSearchChange = (event) => {
    onSearch(event.target.value); // Frissítjük a keresési kifejezést
  }

  console.log('#1 Navbar, onOpen:', onOpen);
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">wealPO</a>
        </div>
        <div className="flex gap-2">
          {/* Csak a "Termékek" menüben jelenjen meg */}
          {location.pathname === "/" && (
            <>
              <input type="text" placeholder="Keresés..." onChange={handleSearchChange} className="input input-bordered w-24 md:w-auto" />
              <a className="btn btn-outline btn-secondary" onClick={onOpen} >Termék hozzádása</a>
            </>
          )}
          <div class="btn btn-primary">{getMenuName()}</div>
          <div className="dropdown dropdown-end">
            
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Link to="/">Termékek</Link></li>
              <li><Link to="/profil">Profil</Link></li>
              <li><Link to="/rolunk">Rólunk
                <span className="badge">New</span></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}