# Успеваемость стажеров
Простое одностраничное приложение: на react c бэкендом на Django, с БД на postgres

Запуск проекта:
Клонировать репозиторий
````
git clone 
Установить разрешение на запуск, в локальном проекте
````
chmod +x app/entrypoint.sh
````
Запустить контейнер
```
docker-compose up -d
```
Выполнить миграцию
```
docker-compose exec django python manage.py migrate --noinput
```
Создать администратора
```
docker-compose exec django python manage.py createsuperuser 
```
Загрузить данные в БД
```
docker-compose exec django python manage.py loaddata fixture/db.json
```

Проект доступен: http://localhost:3000/
