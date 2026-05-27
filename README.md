# README.md

# Web Engineering Project

A full-stack web application developed using React frontend and Django backend with PostgreSQL database.

---

# 📌 Project Features

* User Authentication (Login / Signup)
* Database Integration with PostgreSQL
* REST APIs using Django REST Framework
* Checkout / Order Management System
* Responsive UI using React
* CRUD Operations
* Error Handling
* Deployment Ready

---

# 🛠 Technologies Used

## Frontend

* React.js
* Axios
* React Router
* CSS / Tailwind / Bootstrap

## Backend

* Django
* Django REST Framework
* PostgreSQL

---

# ⚙ Installation Guide

## Clone Repository

```bash
git clone <your-github-repo-link>
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs on:

```bash
http://127.0.0.1:8000
```

---

# 🗄 Database Configuration

PostgreSQL database is used.

Update settings.py:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'postgres',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

---

# 🔐 Environment Variables

Create a .env file and add:

```env
SECRET_KEY=your_secret_key
DEBUG=True
DB_NAME=your_db_name
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
```

---

# 🧪 Testing

Run backend tests:

```bash
python manage.py test
```

Run frontend tests:

```bash
npm test
```

---

# 🚀 Deployment

## Frontend Deployment

* Vercel

## Backend Deployment

* Render / Railway

---

# 📹 Demo Video

Add your demo video link here.

---

# 👨‍💻 Developed By

Muhammad Abdullah Waheed

---

