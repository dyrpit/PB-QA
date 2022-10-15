# Ćwiczenia 1

## Szybka powtórka HTML

Opowiedzenie szybkie znowu o HTML:

- [ ] że to język, ale nie służacy do kodowania, no ale jednak język bo ma jakąś swoją gramatykę
- w3.org - to standard który muszą implementować przeglądarki żeby to działało
- [ ] powtórka ze znaczników: 
  - tagi otwierające 
  - tagi zamykające 
  - atrybuty
  - mdn jako źródło wiedzy 
  - w3c jak źródło wiedzy (https://www.w3.org/2009/cheatsheet/#autocomplete) - fajny cheetsheet z search barem
  - znaczniki semantyczne i niesemantyczne
- [ ] pokazanie że przeglądarka poprawia pewne błędy których jest w stanie się domyśleć:
  - dodanie brakującego head
  - domknięcie znacznika
  - usunięcie niepotrzebnego domknięcia w przypadku img
- [ ] pobieranie dodatkowych skryptów i linków - kolejność
- podmiana tekstu w elemncie za pomocą js i pokazanie w source że pobrany kod html się nie zmienił
- pokazanie że to co widzimy też jest uproszczeniem (document.body.childNodes) i że tak na prawdę są tam jeszcze znaki nowej lini
- [ ] błąd podczas wykonywania js podczas gdy script jest dodany do head

## Chrome dev tools

- [ ] Opowiedzieć ogólnie coś o danej zakładce
- [ ] Opisać co na niej widać

### Elements

- [ ] że struktura wygenerowana przez przeglądarkę odzwierciedla html
- [ ] że widzimy powiązane style z tym elementem oraz skąd pochodzą
- [ ] computed gdzie widzimy jakie style są obecnie aktywne
- [ ] jaki font został użyty
- [ ] możliwość edycji styli i oglądanie rezultatu bezpośrednio w przeglądarce
- [ ] pobranie elementu w konsoli ($0) lub przejście do podzakładki Properties gdzie mamy widoczny zaznaczony obiekt
- [ ] coverage pokazać nieużywane zasoby np. css

### Sources

- [ ] pokazać pobrane pliki
- [ ] debbuger:
 - pokazać breakpoint
 - pokazać callstack
 - pokazać przeskakiwanie i zmieniające się wartości
- [ ] dom breakpoints
- [ ] event listeners breakpoints

### Console

- [ ] pokazanie że tutaj widać błędy
- [ ] można filtrować po nazwie
- [ ] można pisać normalny kod JS

### Network

- [ ] jak zostaje pobrane strona
- [ ] pobieranie pozostałych elementów (initiator)
- [ ] wybór tylko niektórych requestów
- [ ] blokowanie requestów
- [ ] throttling
- [ ] disable cache

### Performance

- [ ] nagranie różnych zachowań na stronie
- [ ] umieszczenie tagu script w head i pokazanie że blokuje parsowanie + rzuca błąd bo tego elementu na stornie jeszcze nie ma
- [ ] pokazać umieszczenie tagu defer i co to zmienia


## Tworzenie strony HTML na podstawie mockupu, odworowanie widzianej strukturys