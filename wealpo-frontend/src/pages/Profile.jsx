import Navbar from "../components/Navbar";

export default function Settings() {

    return(
        <>
            <Navbar></Navbar>
            
            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10">
                <div className="card w-full max-w-md bg-base-100 shadow-2xl rounded-2xl">
                    <figure className="px-10 pt-10">
                    <div className="avatar">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Profile" />
                        </div>
                    </div>
                    </figure>

                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl font-bold">UI Daisy</h2>
                    <p className="text-sm text-gray-500 mb-2">UI fejlesztő • Névadó</p>

                    </div>
                </div>
            </div>            
        </>
    );

}