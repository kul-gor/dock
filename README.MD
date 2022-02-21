## IGOR-NODE
Данный проект содержит сервер, который создан для вывода в браузер результатов суммарного времени выполнения запросов, указанных в лог-файле, к которому можно обратиться через адресную строку.
## Как использовать данный проект

### Изучение файлов проекта
Исходный код проекта лежит в данной папке.
Если вы хотите использовать докер образ, для запуска приложения - воспользуйтесь указаниями ниже.

### Запуск проекта с помощью Docker 
1) Скачать образ с Docker Hub.
```console
$ docker pull kulgor/igor-node:tag version
```
2) Запустить образ
```console
$ docker run -it --rm --name my-running-app my-nodejs-app
```
### Запусп проекта с помощью Docker Compose
```console
$ docker-compose up
```
### Тест лог файлов
1) Для тспользования лог файла необходимо в адресной строке браузера необходимо ввести адрес, по которому будет доступен лог файл
```console
localhost/var/www/igor/test.log
```
2) Наслаждаемся результатом