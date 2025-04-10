import Navbar from "../components/Navbar";

export default function Rolunk() {

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
                            <img src="https://scontent.fbud5-1.fna.fbcdn.net/v/t39.30808-6/465787094_9078561042194649_5365596893979733780_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=NBdKbmp6lKoQ7kNvwFDsMhf&_nc_oc=Adk5-HFVLMapgJpbPdf-AqSeUHVD9ziAoFvvZ0aZ6I5EERr-41Ar-AOsBPC4Yh3j8bU&_nc_zt=23&_nc_ht=scontent.fbud5-1.fna&_nc_gid=NFNnGRFb8v-x8q89GQCGug&oh=00_AYHnpKpHX3Q8elhd1_N2Uy2Mh6I67XyN5smoXY8s0P28Eg&oe=67F7270A" alt="profilkép" />
                        </div>
                        </div>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Szabó András</h2>
                        <p className="text-sm text-gray-500">Programtervező Informatikus</p>

                        <div className="mt-3">
                            <a
                                href="https://github.com/szaboan"
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
