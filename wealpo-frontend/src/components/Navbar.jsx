export default function Navbar({onOpen}) {
  console.log('#1 Navbar, onOpen:', onOpen);
    return (
        <>
        <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">wealPO</a>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Keresés..." className="input input-bordered w-24 md:w-auto" />
          <a className="btn btn-outline btn-secondary" onClick={onOpen} >Partner hozzádása</a>
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
              <li>
                <a className="justify-between">
                  Adatlap
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Termékek</a></li>
              <li><a>Beállítások</a></li>
              <li><a>Kilépés</a></li>
            </ul>
          </div>
        </div>
      </div>
      </>
    )
}