﻿# wap_wealpo

Az elnevezés a "Web-alkalmazás-fejlesztés" projektmunka szavaiból származik, azok kezdőbetűiből összeállítva.

Az alkalmazás egy fiktív rendszerben működő bejelentkezett felhasználót mutat be.

A felhasználó a jobb felső sarokban éri el az **Adatlap**, **Termékek**, **Beállítások** és **Kilépés** menüpontokat.

Az alkalmazás több statikus oldalt, valamint a CRUD (Create, Read, Update, Delete) folyamatokat is bemutatja a *Termékek* menüpontban.

A *Termékek* oldal dinamikus elemeket tartalmaz, például modális ablakokat – ilyen a **Termék hozzáadása** vagy **Termék módosítása**, attól függően, milyen paraméterrel nyílik meg.

A dinamikus táblázat adatbázis alapján töltődik fel.

A terméklista elemei bővíthetők, törölhetők, illetve módosíthatók is.

A táblázat támogatja a **keresést** és az **oszlopok szerinti rendezést** is.

Insert script csatolva a backend/src/db.sql, postgre db neve: wealpo, tábla neve products, user postgres, adatok a .env fájlban.

A futtatása:
frontend: npm run dev
backend: src/index.js
