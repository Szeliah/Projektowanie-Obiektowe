#!/bin/bash

URL="http://localhost:8000/api/products"



echo "##### Pobranie wszystkich produktów #####"

echo "Stan bazy z produktami:"
(curl -s -X GET $URL | sed 's/},{/}\n{/g')
printf "\n\n"



echo "##### Dodanie nowego produktu #####"

echo "Stan bazy przed dodaniem nowego produktu:"
(curl -s -X GET $URL | sed 's/},{/}\n{/g')
printf "\n\n"

echo "Dodawanie produktu"
res=$(curl -s -X POST $URL -H "Content-Type: application/json" -d \
'{"name": "Mlotek", "price": 43}')

echo "Odpowiedź od serwera: $res"
echo "Stan bazy po dodaniu nowego produktu:"
(curl -s -X GET $URL | sed 's/},{/}\n{/g')
id=$(echo $res | grep -oE '"id":[0-9]+' | grep -oE '[0-9]+')
printf "\n"
echo "id naszego dodanego produktu: $id"
printf "\n"



echo "##### Pobranie konkrentego produktu #####"

(curl -s -X GET $URL/$id)
printf "\n\n"



echo "##### Update naszego produktu #####"
printf "Odpowiedź serwera: "
curl -s -X PUT "$URL/$id" -H "Content-Type: application/json" -d \
    '{"name": "Kask", "price": 67.00}'
printf "\n"

echo "Nasz produkt po uaktualnieniu"

(curl -s -X GET $URL/$id)
printf "\n\n"



echo "##### Usunięcie produktu #####"
(curl -s -X DELETE $URL/$id)
printf "\n"

echo "Stan bazy z produktami:"
(curl -s -X GET $URL | sed 's/},{/}\n{/g')
printf "\n\n"