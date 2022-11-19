## Wyszukiwanie elementów

### Pomoce

- Selektor ID - **#**,

Przykład selektora dla poniższego elementu: **#title-big**

```
<h1 id="title-big">Tytuł</h1>
```

- Selektor klasy - **.**

Przykłady selektorów kolejno dla poniższych elementów: **.big** oraz **.big.red**

```
<p class="big">Lorem ipsum dolor sit</p>
<p class="big red">Lorem ipsum dolor sit</p>
```

- Selektor atrybutu - **[]**

Przykłady selektorów kolejno dla poniższych elementów: **[id="title-big"]**, **[type="text"]** oraz **[checked]**

```
<h1 id="title-big">Tytuł</h1>
<input type="text" />
<input type="checkbox" checked />
```

- Selektor tagu - **p**

Przykłady selektorów kolejno dla poniższych elementów: **p** oraz **h1**

```
<p style="color: red;">Lorem ipsum dolor sit</p>
<h1 style="color: blue;">Tytuł</h1>
```

### Zadania

Podczas tego zadania najlepiej korzystać z metody document.querySelectorAll() lub $$() co daje taki sam efekt, ponieważ w łatwy sposób będziemy wiedzieć czy udało się pobrać tylko jeden element czy może więcej. Pamiętaj że w każdym zadaniu chodzi o pobranie jednego konkretego elementu.

1. Pobierz element z treścią "Tytuł 1".
2. Pobierz element z treścia "Tytuł 2", czy po przeładowaniu strony element nadal można pobrac za pomocą tego samego selektora?
3. Pobierz element z treścia "Tekst 4".
4. Pobierz element z treścia "Tekst 5".
5. Pobierz input password z pierwszego formularza.
6. Pobierz input "Last Name" z drugiego formularza.
7. Pobierz input checkbox z trzeciego formularza.
8. Pobierz input radio o wartości "3".
9. Pobierz element listy z treścią "2".

## Postman API testing

API URL: **https://api-tester-three.vercel.app/**

W celu uzyskania dokumentacji należy postępować jak poniżej:

1. Wejdź na adres **https://api-tester-three.vercel.app/api-json** (może być w przeglądarce).
2. Skopiuj otrzymany plik JSON.
3. Przejdź na stronę **https://editor.swagger.io/**.
4. W edytorze po lewej stronie wklej skopiowany plik, potwierdź konwersję z JSON do YAML.
5. Voilà dokumentacja powinna być widczona po prawej stronie

### Zadania

Korzystając z dokumentacji oraz Postmana, stwórz kolekcję składającą się z:

- adresu URL API dodanego do zmiennej ze scopem kolekcji
- rejestracji użytkownika (_POST_)
- logowania utworzonego użytkownika (_POST_)
- dodania nowego zadania (_POST_)
- pobrania utworzonego zadania poprzez jego ID (_GET_)
- edycja utworzonego zadania (_PATCH_)
- pobranie wszystkich zadań użytkownika (_GET_)
- usunięcie stworzonego zadania (_DELETE_)
- usunięcie stworzonego użytkownika (_DELETE_)

Oczywiście najoptymalniej wykorzystać przy tym zmienne dostępne w Postmanie. Poniżej znajduje się fragment kodu który będzie przydatny podczas dynamicznego dodawania zmiennych w przypadku rejestracji użytkownika.

**Register user**

```

const { email: randomEmail, password: randomPassword } = JSON.parse(pm.request.body.raw);

const jsonData = pm.response.json();
const { _id, email, password, role, creationDate } = jsonData;

pm.collectionVariables.set("userEmail", randomEmail);
pm.collectionVariables.set("userPassword", randomPassword);
pm.collectionVariables.set("userId", _id);

```

Korzystając ze Snippetów dostępnych w Postmanie przetestuj każdy endpoint pod kątem zwracanego statusu tak aby testy były **PASS**. Snippety dostępne są z poziomu żądania po wejściu w zakładkę Tests.

