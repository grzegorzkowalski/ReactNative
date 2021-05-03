# All over the world!!!

1. Stworzyliśmy prosta aplikację której celem jest wyświetlenie listy wszystkich krajów naszego globu. Aplikacja pobiera dane z publicznego api – znajdującego się pod adresem [Klik!](https://restcountries.eu/rest/v2/alpha?codes=af). Przyjrzyj się danym pobieranym z api. 
2. Jak nie trudno się domyśleć pobieramy jedynie nazwę państwa z bogatego zasobu danych odnoszących się do każdego kraju. Rozbuduj aplikację w taki sposób aby każdy kafelek z krajem zawierał więcej inforamacji. 
3. Przyjrzyj się Komponentowi `FlatList`. To specjalny komponent służący do wyświetlania długich list. Zobacz w jaki sposób renderuje on poszczególne elementy. 
4. Potrzebujesz inspiracji:
  * Wczytaj flagę państwa do komponentu `Image`
  * Spróbuj wyświetlić aktualny czas w danym kraju. Użyj obiektu `Date` z silnika JS.
  * Wyświetl nazwę kraju w jego własnym języku
  * Podaj przybliżony dystans kraju do Łomży (koordynaty dla Łomży pobierz z google maps)
  ```javascript
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

```