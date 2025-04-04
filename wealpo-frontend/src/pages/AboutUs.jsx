import Navbar from "../components/Navbar";

export default function AboutUs() {

    return(
        <>
            <Navbar></Navbar>

            <div className="flex justify-around items-center px-4 py-10">
                <div className="card w-80 bg-base-100 shadow-xl border border-base-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pravatar.cc/300?img=11" alt="profilkép" />
                        </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Kovács Péter</h2>
                        <p className="text-sm text-gray-500">Fullstack fejlesztő</p>

                        <div className="mt-3">
                            <a
                                href="https://github.com/felhasznalonev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline gap-2">
                                <i className="fa-brands fa-github text-xl"></i>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>

                <div className="card w-80 bg-base-100 shadow-xl border border-base-300">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pravatar.cc/300?img=12" alt="profilkép" />
                        </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Nem-Kovács Péter</h2>
                        <p className="text-sm text-gray-500">Fullstack fejlesztő</p>

                        <div className="mt-3">
                            <a
                                href="https://github.com/felhasznalonev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline gap-2">
                                <i className="fa-brands fa-github text-xl"></i>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    );

}
