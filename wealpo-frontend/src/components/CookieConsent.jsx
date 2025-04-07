import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
    const [cookies, setCookie] = useCookies(["cookieConsent"]);
    const giveCookieConsent = () => {
        setCookie("cookieConsent", true, { path: "/" });
    };

    // Ellenőrizzük, hogy a süti már létezik-e
    if (cookies.cookieConsent) {
        return (
            <>
                <button className="btn btn-primary self-start mr-5">Üzenet küldése</button>
                <button className="btn btn-error" onClick={() => setCookie("cookieConsent", "", { path: "/", expires: new Date(0) })}>
                    Sütik törlése
                </button>
            </>
        ); // Ha a süti már létezik, ne jelenítsük meg az értesítést
    }

    return (
        <>
            <div className="cookie-consent alert alert-vertical sm:alert-horizontal w-4/5 mx-auto shadow-lg bg-base-100" role="alert">
                {/* <p>
                We use cookies to enhance your user experience. By using our website,
                you agree to our use of cookies.{" "}
                <a href={"/privacy-policy"}>Learn more.</a>
            </p>
            <button className="btn btn-sm btn-primary"onClick={giveCookieConsent}>
                Accept
            </button> */}

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info h-6 w-6 shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Az oldal sütiket használ a kapcsolat menüpontban. Engedélyezi a sütik használatát?</span>
                <div>
                    {/* <button className="btn btn-sm">Nem fogadom el</button> */}
                    <button className="btn btn-sm btn-primary" onClick={giveCookieConsent} >Elfogadom</button>
                </div>
            </div>

        </>



    )
}

export default CookieConsent;