# Шаблон монорепозитория
![Static Badge](https://img.shields.io/badge/kaurcev.dev-kaurcev-kaurcev)
![GitHub top language](https://img.shields.io/github/languages/top/kaurcev/template-mono-repository)
![GitHub](https://img.shields.io/github/license/kaurcev/template-mono-repository)
![GitHub Repo stars](https://img.shields.io/github/stars/kaurcev/template-mono-repository)
![GitHub issues](https://img.shields.io/github/issues/kaurcev/template-mono-repository)

Шаблон для управления бэкендом (Node.js) и фронтендом (React) в одном репозитории с поддержкой:

- Параллельного запуска в режиме разработки
- Сборки production-версии
- Публикации проекта через локальный туннель

## Содержание

- [Требования](#требования)
- [Установка](#установка)
- [Скрипты](#скрипты)
- [Структура проекта](#структура-проекта)
- [Доступ к проекту после публикации](#доступ-к-проекту-после-публикации)
- [Лицензия](#лицензия)

## Требования

- Node.js v18+
- npm v9+

## Установка

```bash
git clone https://github.com/kaurcev/template-mono-repository.git
cd template-mono-repository
npm install
```

## Скрипты

| Скрипт                | Назначение                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| `npm start`           | Запуск фронтенда и бэкенда в режиме разработки (параллельно)            |
| `npm run build`      | Сборка production-версии                                                 |
| `npm run public`     | Запуск production-сборки + публикация через локальный туннель (lt)       |
| `npm run clean`      | Удаление всех артефактов сборки                                          |

## Структура проекта

```
.
├── backend/     # Бэкенд-приложение (Express)
├── frontend/    # Фронтенд-приложение (React)
├── build/       # Итоговая production-сборка (генерируется автоматически)
└── package.json  # Корневой конфиг с общими скриптами
```

## Доступ к проекту после публикации

- Сервер доступен по локальной ссылке: `http://localhost:6769`
- Внешний доступ через временный URL (пример):
  
```text
[TUNNEL] your-project: https://your-project.loca.lt
```
