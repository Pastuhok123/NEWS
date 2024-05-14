# Base image
# Використовуємо базовий образ Node.js версії 18
FROM node:18

# Create app directory
# Створюємо робочу директорію для додатка у контейнері
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
# Використовується символ-джокер для копіювання файлів package.json та package-lock.json
COPY package*.json ./

# Install app dependencies
# Встановлюємо залежності додатка, використовуючи npm
RUN npm install

# Bundle app source
# Копіюємо всі файли додатка у робочу директорію контейнера
COPY . .

# Copy the .env and .env.development files
# Копіюємо файли .env та .env.development у контейнер
COPY .env ./

# Creates a "dist" folder with the production build
# Створюємо папку "dist" з виробничою збіркою
RUN npm run build

# Expose the port on which the app will run
# Відкриваємо порт, на якому буде працювати додаток
EXPOSE 3000

# Start the server using the production build
# Запускаємо сервер за допомогою виробничої збірки
CMD ["npm", "run", "start:prod"]
