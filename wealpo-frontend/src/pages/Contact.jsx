
import Navbar from "../components/Navbar";
import CookieConsent from "../components/CookieConsent";

export default function Kapcsolat() {
    // const [cookies] = useCookies(["cookieConsent"]);

    return (
        <>
            <Navbar></Navbar>

            <div class="flex flex-col items-center justify-center p-3 mt-10 w-4/5 mx-auto">
                <h1 class="text-3xl font-bold mb-4 self-start">Kapcsolat</h1>
                <p class="text-gray-600 mb-4 self-start" >Kérjük, töltse ki az alábbi űrlapot, és mi hamarosan felvesszük Önnel a kapcsolatot.</p>
                <input type="input" class="input validator validator w-3/5 self-start mb-6" required placeholder="Adja meg a nevét" />
                <input class="input validator w-3/5 self-start" type="email" required placeholder="mail@site.com" />
                <div class="validator-hint">Enter valid email address</div>
                <textarea class="textarea w-3/5 self-start mb-4" placeholder="Adja meg az üzenet tartalmát."></textarea>
                <p className="text-gray-600 mb-4 self-start italic">Ez a weboldal nem rendelkezik funkcióval. Azért jött létre, hogy bemutassa a cookie kezelés megvalósítását. Ha nincs cookie, és elfogadjuk a használatot, akkor létrehoz egy cookie-t, és megjelenik a Üzenet küldése gomb. A tesztelés érdekében létrehozásra került egy Sütik törlése gomb, amely segítségével törölni lehet a cookie-t a böngésző beállításainak böngészése nélkül.</p>
                <div className="app self-start" >
                    <CookieConsent />
                </div>
            </div>


            {/* <div role="alert" class="alert alert-vertical sm:alert-horizontal w-4/5 mx-auto shadow-lg bg-base-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Az oldal sütiket használ az üzenet küldése menüpontban. Engedélyezi a sütik használatát?</span>
                <div>
                    <button class="btn btn-sm">Deny</button>
                    <button class="btn btn-sm btn-primary">Accept</button>
                </div>
            </div> */}



        </>
    )
}