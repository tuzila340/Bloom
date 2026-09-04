# Bloom

Bloom — веб- и мобильное приложение для управления личными финансами.
Проект находится в разработке.

## Возможности

В планах приложения:

- учет доходов;
- учет расходов;
- статистика и аналитика финансов;
- планирование расходов;
- планирование расходов с помощью искусственного интеллекта;
- регистрация и авторизация пользователей.

## Архитектура

Проект состоит из трех частей:

- `frontend` — веб-приложение на React и TypeScript с использованием Vite;
- `mobile` — мобильное приложение на React Native и Expo;
- `backend` — серверное приложение на ASP.NET Core Minimal API;
- PostgreSQL — планируемая база данных для хранения пользовательских и финансовых данных.

## Технологии

- React `19`;
- TypeScript;
- Vite `8`;
- React Native `0.81`;
- Expo `54`;
- ASP.NET Core Minimal API;
- PostgreSQL;
- .NET SDK `9.0.4`.

## Статус проекта

Проект находится на начальном этапе разработки. На данный момент функциональность
финансового трекера, API и интеграция с PostgreSQL еще не реализованы. В веб-,
мобильной и серверной частях находится стартовая конфигурация соответствующих
технологий.

## Требования

Перед запуском установите:

- Node.js `20.20.2`;
- npm;
- .NET SDK `9.0.4`;
- Expo CLI и приложение Expo Go для запуска мобильной версии;
- PostgreSQL.

> Примечание: текущий файл проекта backend содержит Target Framework `net8.0`,
> поэтому конфигурацию .NET необходимо синхронизировать с выбранной версией SDK.

## Запуск веб-приложения

```bash
cd frontend
npm install
npm run dev
```

Для production-сборки:

```bash
npm run build
npm run preview
```

## Запуск мобильного приложения

```bash
cd mobile
npm install
npm start
```

Доступные команды:

```bash
npm run android
npm run ios
npm run web
```

## Запуск backend

```bash
cd backend
dotnet restore
dotnet run --project backend/backend.csproj
```

Сейчас backend запускает демонстрационный endpoint `/`. API для работы с
доходами, расходами, статистикой и AI-планированием будет добавлено позже.

## Структура проекта

```text
Bloom/
├── backend/       # ASP.NET Core Minimal API
├── frontend/      # веб-приложение React + Vite
├── mobile/        # мобильное приложение React Native + Expo
└── README.md
```

## Автор

Автор проекта — разработчик Bloom.

---

# Bloom

Bloom is a web and mobile application for managing personal finances.
The project is currently under development.

## Features

Planned features include:

- income tracking;
- expense tracking;
- financial statistics and analytics;
- expense planning;
- AI-powered expense planning;
- user registration and authentication.

## Architecture

The project consists of three parts:

- `frontend` — a React and TypeScript web application powered by Vite;
- `mobile` — a React Native mobile application powered by Expo;
- `backend` — an ASP.NET Core Minimal API server application;
- PostgreSQL — the planned database for storing user and financial data.

## Technologies

- React `19`;
- TypeScript;
- Vite `8`;
- React Native `0.81`;
- Expo `54`;
- ASP.NET Core Minimal API;
- PostgreSQL;
- .NET SDK `9.0.4`.

## Project Status

The project is at an early stage of development. The financial tracker
functionality, API, and PostgreSQL integration have not been implemented yet.
The web, mobile, and server applications currently contain the initial setup
for their respective technologies.

## Requirements

Install the following before running the project:

- Node.js `20.20.2`;
- npm;
- .NET SDK `9.0.4`;
- Expo CLI and the Expo Go app for running the mobile version;
- PostgreSQL.

> Note: the current backend project file targets `net8.0`, so the .NET
> configuration should be synchronized with the selected SDK version.

## Running the Web Application

```bash
cd frontend
npm install
npm run dev
```

To create and preview a production build:

```bash
npm run build
npm run preview
```

## Running the Mobile Application

```bash
cd mobile
npm install
npm start
```

Available commands:

```bash
npm run android
npm run ios
npm run web
```

## Running the Backend

```bash
cd backend
dotnet restore
dotnet run --project backend/backend.csproj
```

The backend currently exposes a demo `/` endpoint. The API for income,
expenses, statistics, and AI-powered planning will be added later.

## Project Structure

```text
Bloom/
├── backend/       # ASP.NET Core Minimal API
├── frontend/      # React + Vite web application
├── mobile/        # React Native + Expo mobile application
└── README.md
```

## Author

Created by the Bloom developer.
