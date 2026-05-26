<div align="center">
  <h1>👕 Clothes Shop</h1>
  <p>E-commerce de ropa construido con <strong>Next.js 16</strong>, <strong>TypeScript</strong> y <strong>Prisma</strong></p>
  <p>
    <a href="https://clothes-shop-ecommerce.vercel.app/">
      <img src="https://img.shields.io/badge/Demo-Vercel-000?logo=vercel" alt="Demo en Vercel">
    </a>
    <img src="https://img.shields.io/badge/Next.js-16-black" alt="Next.js 16">
    <img src="https://img.shields.io/badge/TypeScript-5-blue" alt="TypeScript">
    <img src="https://img.shields.io/badge/Prisma-6-2D3748" alt="Prisma">
    <img src="https://img.shields.io/badge/Tailwind-4-06B6D4" alt="Tailwind CSS">
    <img src="https://img.shields.io/badge/PostgreSQL-15-4169E1" alt="PostgreSQL">
  </p>
</div>

##  DEMO

https://clothes-shop-ecommerce.vercel.app/

## ✨ Características

- Catálogo de productos con filtros por género (men / women / kid / unisex)
- Carrito de compras con persistencia (Zustand)
- Autenticación de usuarios con NextAuth + Credentials
- Procesamiento de pagos con PayPal (sandbox)
- Panel de administración (gestión de productos, órdenes y usuarios)
- Subida y gestión de imágenes con Cloudinary
- Base de datos PostgreSQL con Prisma ORM
- Diseño responsive con Tailwind CSS

## 🛠️ Stack

| Tecnología      | Uso                         |
| --------------- | --------------------------- |
| Next.js 16      | Framework fullstack         |
| TypeScript      | Lenguaje                    |
| Prisma 6        | ORM y migraciones           |
| PostgreSQL 15   | Base de datos               |
| NextAuth v5     | Autenticación               |
| PayPal SDK      | Pasarela de pagos           |
| Cloudinary      | Almacenamiento de imágenes  |
| Tailwind CSS 4  | Estilos                     |
| Zustand         | Estado global               |
| Zod             | Validación de formularios   |
| React Hook Form | Manejo de formularios       |

## 🚀 Empezar

### Requisitos

- Node.js 20+
- Docker Desktop (para la base de datos PostgreSQL)
- Cuenta en [PayPal Developer](https://developer.paypal.com/dashboard/) (sandbox)
- Cuenta en [Cloudinary](https://cloudinary.com/)

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/clothes-shop.git
cd clothes-shop

# 2. Configurar variables de entorno
cp .env.template .env
# Editar .env con tus credenciales

# 3. Instalar dependencias
npm install

# 4. Levantar PostgreSQL con Docker
docker compose up -d

# 5. Ejecutar migraciones de Prisma
npx prisma migrate dev

# 6. Poblar la base de datos con datos de prueba
npm run seed

# 7. Iniciar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

### Construir para producción

```bash
npm run build
npm start
```

## 🔐 Variables de entorno

Ver [`.env.template`](.env.template) para la lista completa:

| Variable                      | Descripción                              |
| ----------------------------- | ---------------------------------------- |
| `DATABASE_URL`                | Conexión a PostgreSQL                    |
| `AUTH_SECRET`                 | Secreto de NextAuth                      |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | Client ID de PayPal (público)           |
| `PAYPAL_SECRET`               | Secret de PayPal                         |
| `PAYPAL_OAUTH_URL`            | URL OAuth de PayPal (sandbox/live)       |
| `PAYPAL_ORDERS_URL`           | URL de órdenes de PayPal (sandbox/live)  |
| `CLOUDINARY_URL`              | URL de conexión a Cloudinary             |

## 📁 Estructura del proyecto

```
src/
├── actions/        # Server Actions
├── app/            # App Router (páginas y layouts)
├── components/     # Componentes reutilizables
├── config/         # Configuración (fuentes, etc.)
├── hooks/          # Custom hooks
├── interfaces/     # Tipos e interfaces TypeScript
├── lib/            # Utilidades (Prisma client, etc.)
├── seed/           # Seed de base de datos
├── store/          # Zustand stores
└── utils/          # Funciones helper
```

## 📄 Licencia

Este proyecto es de uso personal/portfolio.
