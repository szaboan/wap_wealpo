# wap_wealpo

Az elnevezés a "Web-alkalmazás-fejlesztés" projektmunka szavaiból származik, azok kezdőbetűiből összeállítva.

Az alkalmazás egy fiktív rendszerben működő bejelentkezett felhasználót mutat be.

A felhasználó a jobb felső sarokban éri el az **Termékek**, **Rólunk**, **Profil** és **Kapcsolat** menüpontokat.

Az alkalmazás több statikus oldalt, valamint a CRUD (Create, Read, Update, Delete) folyamatokat is bemutatja a *Termékek* menüpontban.

A *Termékek* oldal dinamikus elemeket tartalmaz, például modális ablakokat – ilyen a **Termék hozzáadása** vagy **Termék módosítása**, attól függően, milyen paraméterrel nyílik meg.

A dinamikus táblázat adatbázis alapján töltődik fel.

A terméklista elemei bővíthetők, törölhetők, illetve módosíthatók is.

A táblázat támogatja a **keresést**.

A **Kapcsolat** oldalban található Cookie kezelés. Az el nem mentett sütik esetén el kell fogadni egy ablakot, egyéb esetben megjelenik a küldés gomb.

Insert script csatolva a gyökérbe (insert_products.sql), postgre db neve: wealpo, tábla neve products, user postgres, adatok a .env fáljban

A program indítása:
wealco-frontend: npm run dev
wealco-backend: nodemon index.js

