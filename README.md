# Nest & Next ecommerce (full-stack)

## Tech Stack:
   ### Client:
![NextJS](https://img.shields.io/badge/NextJS-262224?style=for-the-badge&logo=vercel&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)
   ### Server:
![NestJS](https://img.shields.io/badge/NestJS-DC143C?style=for-the-badge&logo=nestjs&logoColor=white) ![Prisma](https://img.shields.io/badge/Prisma-262224?style=for-the-badge&logo=prisma&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-007ACC?style=for-the-badge&logo=postgresql&logoColor=white)
   ### Architecture:


[![Feature-Sliced Design][shields-fsd-pain]](https://feature-sliced.design/)

[shields-fsd-pain]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&labelColor=262224&color=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABHSURBVHgB7dKxCQAgDETR08ZNHNBBHNBNrBQFuyCCKQK5V6QMfBJAWVij5zLwKbW6d0VYx2TZyXnBKxvEZJnDx2bylf1kdRM6tiAZsruQ/QAAAABJRU5ErkJggg==

### Desgin:

<a href="https://www.figma.com/file/9wgs2crKwaYHGdRXxCtflk/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D1%8F%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-Share-Full-(Copy)-(Copy)-(Copy)?type=design&node-id=3-68&mode=design&t=NKyCzr3eS22ui2VE-0">![Figma](https://img.shields.io/badge/Figma-000000?style=for-the-badge&logo=figma&logoColor=white)</a>
## 🇺🇸 EU:

Hello friend.
<br>
First of all: this project in other repo bcs its big full-stack project. Watch other projects u can in [this repo](https://github.com/gudkovWay/projects).
<br>
The second point its:
### 💾 Launch:

<b>Create new server via PostgreSQL</b>
- **First download PostgreSQL**
- **Then create ur first server and keep in mind ur changes (it need if u wanna change default value of localhost, root, pass, etc.)**

<b>Clone (Download) repo</b>
- **Then clone this repo (u need git for work w. him in terminal) or just download archive**
```sh
cd Documents
mkdir Projects
cd Projects
git clone https://github.com/gudkovWay/ecommerce
```

<b>Install dependecies for run server part</b>
-**First go to server folder and run: **
```sh
npm install
```
- **Then run with next command**

```sh
npm run start:dev
```
- **Finally, now u can see my backend in ur browser by go to URL localhost:3000/api**

<b>Install dependeciest for run client part</b>
-** First exit from server and go to the client dir **
```sh
cd ../client
npm install
```
- **Then run with next command**
```sh
npm run dev
```
- **Finally, u can see client in ur browser by go to url localhost:3001/**


<table align="center">
   <tr>
      <th align="center">
         <sup><sub>:warning: WARNING :warning:</sub></sup>
      </th>
   </tr>
   <tr>
      <td align="center">



     PLEASE FOR CORRECTLY WORK IN DEV MODE MAKE SURE
     FIRST U LAUNCH SERVER PART AND THIS LAUNCHING IN LOCALHOST:3000
     THEN U LAUNCH CLIENT PART AND THIS LAUNCHING IN LOCALHOST:3001

   </tr>
   </table>

This is the description of the project I talked about in the repository description.

### Nest & Next ecommerce:

| Key                | Value                                                                       |
| ------------------ | --------------------------------------------------------------------------- |
| start              | 04/11/23 02:00 PM                                                           |
| end                | XX.XX.XX                      |
| Dev time           |    XX                                |
| stack of languages | NestJS & NextJS & PostgreSQL(БД)                                                         |
| guidedDev?         | No, selfDev                                                                 |
| tricks by bloger   | null                                                                        |
| tricks by me       |                   |
| what I've learned  | work via ORM Prisma, Swagger, NestJS, NextJS                                      |
| what I've improved | work via RTK, PostgreSQL                                                 |

## 🇷🇺 RU:

Привет, друг. <br>
Во-первых, этот проект вынесен в отдельное репо потому что он дал мне даже в не готовой стадии уже достаточно много опыта, также он достаточно большой, относительно моих прошлых проектов, которые были в [одном репозитории](https://github.com/gudkovWay/projects) всех проектов.
<br>
Во-вторых, для запуска следуй следующим шагам:
### 💾 Запуск:

<b>Создай новый сервер в PostgreSQL</b>
- **Сначала скачай PostgreSQL**
- **Затем произведи установку и в случае изменения данных по типу username, password, localhost - запомни их для будущих изменений**

<b>Склонируй репо. (скачай)</b>
- **После установки БД тебе нужно установить на свой компьютер код, который я написал. Для работы с командой git в терминале тебе нужно установить git в твою систему.**
```sh
cd Documents
mkdir Projects
cd Projects
git clone https://github.com/gudkovWay/ecommerce
```

<b>Теперь нужно установить зависимости для запуска проекта.</b>
-**Сначала перейди в папку сервера и запусти следующие команды: **
```sh
npm install
```
- **Затем сделай запуск серверной части на твоем локальном компьютере при помощи команды:**

```sh
npm run start:dev
```
- **Наконец, сейчас ты можешь узреть ту самую API которую сгенерил Swagger перейдя на localhost:3000/api в твоем браузере**

<b>Теперь установим зависимости для клиентской части</b>
-** Выйди из серверной папки в терминале и зайди в клиентскую и установи зависимости. **
```sh
cd ../client
npm install
```
- **После запусти локальный сервер командой**
```sh
npm run dev
```
- **Теперь, можешь увидеть маленькую часть готового результата для клиента перейдя по ссылке localhost:3001/ в браузере**


<table align="center">
   <tr>
      <th align="center">
         <sup><sub>:warning: ПРЕДУПРЕЖДЕНИЕ :warning:</sub></sup>
      </th>
   </tr>
   <tr>
      <td align="center">



     ПОЖАЛУЙСТА, ДЛЯ КОРРЕКТНОЙ РАБОТЫ УБЕДИТЕСЬ, ЧТО ВЫ:
     СНАЧАЛА ЗАПУСТИЛИ СЕРВЕР И ОН РАБОТАЕТ ПО ССЫЛКЕ LOCALHOST:3000
     ЗАТЕМ ЗАПУСТИЛИ КЛИЕНТ И ОН РАБОТАЕТ ПО ССЫЛКЕ LOCALHOST:3001

   </tr>
   </table>


Это описание проекта о котором я говорил в описании репозитория.
### Nest & Next ecommerce:

| Ключ                               | Значение                                                         |
| ---------------------------------- | ---------------------------------------------------------------- |
| Старт                              | 04/11/23 14:00                                                |
| Конец                              | XX.XX.XX |
| Время разработки                   | XX                      |
| Набор ЯП                           | NestJS & NextJS & PostgreSQL(БД)                                                    |
| По инструкции                      | -                                                                |
| Авторские фичи(блогера)            | it's selfDev                                                     |
| Собственные фичи                   |   |
| Что я изучил(узнал как)            | работать с ORM Prisma, Swagger, NestJS, NextJS |
| Что я улучшил(закрепил) из навыков | работу с RTK, PostgreSQL (БД)                                    |
