# simplesat-assignment Todo List Application

<img src='./app/public/app.png' width=300px height=400px />

**Requierment**

- [x] Add new todo
- [x] Delete todo
- [x] Reset todo
- [x] Mark as done
- [x] Show todo lists
- [x] Reorder todo

---

**Technical stack**

Frontend

- React
- Tailwind
- Styled-component

Backend

- Django
- Django-restframework

Database

- postgres

---

**How to run**

1: run database, backend and frontend with docker compose

- start at root project.
- build and install dependency run `docker compose build --no-cache`.
- run services `docker compose up`
- open app on `http://localhost:3000/`
- open django-api-document on `http://localhost:8000/api`
  - `/todo/`
  - `/todo/clear/`
  - `/todo/<pk>/`
  - `/todo/<pk>/order/`

2: run database, backend with docker compose.

- start at root project.
- build and install dependency run `docker compose -f docker-compose.noapp.yml build --no-cache`.
- run services `docker compose -f docker-compose.noapp.yml up`
- go to app `cd ./app`
- install app dependency `yarn install or npm install`
- start app `yarn dev`
- open app on `http://localhost:3000/`
- open django-api-document on `http://localhost:8000/api`
  - `/todo/`
  - `/todo/clear/`
  - `/todo/<pk>/`
  - `/todo/<pk>/order/`
