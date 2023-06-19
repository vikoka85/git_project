 //Mivel külön foglalás gomb van, felesleges külön megkérdezni, mert aki rányom, hogy foglalás, az akar foglalni.
//while ciklus kell, a feltétel részébe be kell írnunk a 3 feltételt (2 alatt, 65 felett és közötte), és bármelyik nem megfelelő, While-on belül 3 feltétel lesz (3 if elágazás).  

 function foglalasFgv(){
    var HanyForeAkarszFoglalni = prompt("Hány főre szeretnél foglalni?");
    while (HanyForeAkarszFoglalni < 2 || HanyForeAkarszFoglalni > 65 || HanyForeAkarszFoglalni % 5 == 1 ){
        if (HanyForeAkarszFoglalni < 2){
            alert("Legalább 2 főre szükséges foglalni.");
            HanyForeAkarszFoglalni = prompt("Hány főre szeretnél foglalni?");
        }

        if (HanyForeAkarszFoglalni > 65){
            alert("Maximum 65 főre lehetséges foglalni.");
            HanyForeAkarszFoglalni = prompt("Hány főre szeretnél foglalni?");
        }

        if (HanyForeAkarszFoglalni % 5 == 1){
            alert("Egy asztalnál 5 fő fér el, és a következő asztal foglalásához legalább 2 fő szükséges.");
            HanyForeAkarszFoglalni = prompt("Hány főre szeretnél foglalni?");
        }
    }
    alert("Köszönjük szépen a foglalást!");
    document.getElementById("teszt").innerHTML = "Foglalások száma: 1";
}




