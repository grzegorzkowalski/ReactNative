# Stack Navigator

1. Zainstaluj biblioteki potrzebne do działania Stack Navigator
2. Stwórz schemat nawigacji pomiędzy 4 równorzędnymi ekranami: `HomeScreen`, `AboutUsScreen`, `ContactScreen`, `FunScreen`
3. Na każdym z ekranów stwórz odnośnik do kolejnego ekranu: `HomeScreen` powinien zawierać odnośnik do `AboutUsScreen` itd. Ostatni w kolejce zawiera odnośnik z powrotem do `HomeScreen`.
4. Dodaj licznik odwiedzin dla każdego z ekranów. Zapisz informacje o odwiedzinach do stanu lokalnego. 
!!! Wskazówka – informacje o odwiedzinach możesz śledzić za pomocą eventu `focus`.
5. Zmień kolor headera z tytułem na hex `21094e`, kolor tytułu zaś na hex `4ca1a3`.
6. Chcemy dodatkowo aby nasz header wyświetlał oprócz tutułu również logo naszego ulubionego klubu piłkarskiego. Może być ŁKS Łomża :). Aby wykonać to ćwiczenie musisz dodać w opcjach nawigatora klucz `headerRight` lub `headerLeft`, więcej info w linku https://reactnavigation.org/docs/header-buttons/#overriding-the-back-button


Dla chętnych: W odnosnikach do kolejnych screenów użyj metody `push` zamiast `navigate`. Co zaobserwowałeś?


