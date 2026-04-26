# 👟 Sneakers Store — React & Redux Toolkit

Современный интернет-магазин кроссовок, разработанный с использованием методологии **Feature-Sliced Design (FSD)**.

---

### 🚀 Ссылка на проект
[Посмотреть Demo на GitHub Pages](https://mattuzik.github.io/lace-it)

---

### ✨ Ключевые функции
*   **Каталог:** динамическая подгрузка товаров.
*   **Избранное:** сохранение понравившихся моделей в локальное хранилище.
*   **Корзина:** добавление/удаление товаров и расчет итоговой стоимости.
*   **Фильтрация:** поиск по названию в режиме реального времени.
*   **Адаптивность:** корректное отображение на мобильных устройствах.

---

### 🛠 Стек технологий
*   **UI:** React
*   **State Management:** Redux Toolkit
*   **Styling:** SCSS Modules
*   **Architecture:** Feature-Sliced Design (FSD)
*   **Routing:** React Router Dom v6

---

### 🏗 Структура проекта (FSD)
Проект строго следует архитектурному руководству FSD:
*   `app/`: провайдеры (Redux, Router) и глобальные стили.
*   `pages/`: основные экраны приложения (Home, Favorites, Cart).
*   `widgets/`: композиционные блоки (Header, ProductList).
*   `features/`: бизнес-логика (AddToCart, ToggleFavorite).
*   `entities/`: бизнес-сущности (ProductCard, CartItem).
*   `shared/`: UI-kit, API-методы, вспомогательные утилиты.

---

### 💻 Установка и запуск

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/mattuzik/lace-it
    ```

2.  **Установите зависимости:**
    ```bash
    npm install
    ```

3.  **Запустите сервер разработки:**
    ```bash
    npm start
    ```

---

### 📦 Деплой
Сборка проекта для GitHub Pages:
```bash
npm run build
npm run deploy
```

---

### 📝 Лицензия
Проект открыт под лицензией MIT.
