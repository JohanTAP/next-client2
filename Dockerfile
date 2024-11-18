# Dockerfile para una app Next.js en la carpeta client usando pnpm

# Usa una imagen de Node.js como base
FROM node:18-alpine

# Instala pnpm globalmente
RUN npm install -g pnpm

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y pnpm-lock.yaml al contenedor
COPY package.json pnpm-lock.yaml ./

# Instalar las dependencias del proyecto usando pnpm
RUN pnpm install

# Copiar todo el código del proyecto al contenedor
COPY . .

# Asegurarse de que la variable de entorno esté disponible durante el build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Construir la aplicación
RUN pnpm build

# Exponer el puerto que usará la aplicación (3000)
EXPOSE 3000


# Comando para iniciar la aplicación en modo producción
CMD ["pnpm", "start", "--hostname", "0.0.0.0"]
