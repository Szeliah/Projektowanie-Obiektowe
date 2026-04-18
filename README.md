**Zadanie 1 Paradygmaty**  
**Sortowanie bąbelkowe**

Proszę napisać program w Pascalu, który zawiera dwie procedury, jedna
generuje listę 50 losowych liczb od 0 do 100. Druga procedura sortuje
liczbę za pomocą sortowania bąbelkowego.

:white_check_mark: 3.0 Procedura do generowania 50 losowych liczb od 0 do 100 </br> [Link do 3.0](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie01/Task_3.0)

:white_check_mark: 3.5 Procedura do sortowania liczb [Link do 3.5](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie01/Task_3.5)

:white_check_mark: 4.0 Dodanie parametrów do procedury losującej określającymi zakres
losowania: od, do, ile [Link do 4.0](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie01/Task_4.0)

:white_check_mark: 4.5 5 testów jednostkowych testujące procedury [Link do 4.5](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie01/Task_4.5)

:x: 5.0 Skrypt w bashu do uruchamiania aplikacji w Pascalu via docker [Link do commita]()


Kod: [Link do zadania 1](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie01)

---

**Zadanie 2 Wzorce architektury**  
**Symfony (PHP)**

Należy stworzyć aplikację webową na bazie frameworka Symfony na
obrazie kprzystalski/projobj-php:latest. Baza danych dowolna, sugeruję
SQLite.

:white_check_mark: 3.0 Należy stworzyć jeden model z kontrolerem z produktami, zgodnie z
CRUD (JSON) </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/a260d2b8c71ff16efb42eb9f34d35c9d8a1f7c11)

:white_check_mark: 3.5 Należy stworzyć skrypty do testów endpointów via curl (JSON) </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/ffe505f534dd7a56e36a84081361f59e811a2101)

:x: 4.0 Należy stworzyć dwa dodatkowe kontrolery wraz z modelami  (JSON)  </br>

:x: 4.5 Należy stworzyć widoki do wszystkich kontrolerów </br> 

:x: 5.0 Stworzenie panelu administracyjnego  </br> 

Kod: [Link do zadania 2](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie02/App) </br> 
Demo: [Link do nagrania](https://github.com/Szeliah/Projektowanie-Obiektowe/blob/main/Assets/Zadanie02-demo.mp4)

---

**Zadanie 3 Wzorce kreacyjne**  
**Spring Boot (Kotlin)**

Proszę stworzyć prosty serwis do autoryzacji, który zasymuluje
autoryzację użytkownika za pomocą przesłanej nazwy użytkownika oraz
hasła. Serwis powinien zostać wstrzyknięty do kontrolera (4.5).
Aplikacja ma oczywiście zawierać jeden kontroler i powinna zostać
napisana w języku Kotlin. Oparta powinna zostać na frameworku Spring
Boot. Serwis do autoryzacji powinien być singletonem.

:white_check_mark: 3.0 Należy stworzyć jeden kontroler wraz z danymi wyświetlanymi z
listy na endpoint’cie w formacie JSON - Kotlin + Spring Boot </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/dd1f07ffbcfc03366ffaacf6359f091ff6954863)

:white_check_mark: 3.5 Należy stworzyć klasę do autoryzacji (mock) jako Singleton w
formie eager </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/0028a8221cde37627075b8ed7e6d49eefc7e2829)

:white_check_mark: 4.0 Należy obsłużyć dane autoryzacji przekazywane przez użytkownika </br>[Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/8dda3aef642fcba40b14723f0ce1ae226acbc807)

:white_check_mark: 4.5 Należy wstrzyknąć singleton do głównej klasy via @Autowired lub
kontruktor (constructor injection) </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/827c02b9d4c79cde0d5963cbfc74d260bb12f15d)

:x: 5.0 Obok wersji Eager do wyboru powinna być wersja Singletona w wersji
lazy  </br> 

Kod: [Link do zadania 3](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie03/App) </br> 
Demo: [Link do nagrania](https://github.com/Szeliah/Projektowanie-Obiektowe/blob/main/Assets/zadanie03-demo.mp4)

---

**Zadanie 4 Wzorce strukturalne**  
**Echo (Go)**

Należy stworzyć aplikację w Go na frameworku echo. Aplikacja ma mieć
jeden endpoint, minimum jedną funkcję proxy, która pobiera dane np. o
pogodzie, giełdzie, etc. (do wyboru) z zewnętrznego API. Zapytania do
endpointu można wysyłać w jako GET lub POST.

:white_check_mark: 3.0 Należy stworzyć aplikację we frameworki echo w j. Go, która będzie
miała kontroler Pogody, która pozwala na pobieranie danych o pogodzie
(lub akcjach giełdowych) </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/541da5bcfedf524d306f4d748e016e5d9947dd6a)

:white_check_mark: 3.5 Należy stworzyć model Pogoda (lub Giełda) wykorzystując gorm, a
dane załadować z listy przy uruchomieniu </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/0325771bbd8f256404a69fc2e99cf03dabc74107)

:white_check_mark: 4.0 Należy stworzyć klasę proxy, która pobierze dane z serwisu
zewnętrznego podczas zapytania do naszego kontrolera </br>[Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/ce4f74299b96b06e8c93fe81ea801cb128eca3f9)

:white_check_mark: 4.5 Należy zapisać pobrane dane z zewnątrz do bazy danych </br> [Link do commita](https://github.com/Szeliah/Projektowanie-Obiektowe/commit/5fdbc6405fb8d6dfdee5280412eb67a02a892bf5)

:x: 5.0 Należy rozszerzyć endpoint na więcej niż jedną lokalizację
(Pogoda), lub akcje (Giełda) zwracając JSONa
  </br> 

Kod: [Link do zadania 4](https://github.com/Szeliah/Projektowanie-Obiektowe/tree/main/Zadanie04) </br> 
Demo: [Link do nagrania](https://github.com/Szeliah/Projektowanie-Obiektowe/blob/main/Assets/Zadanie04-demo.mp4)