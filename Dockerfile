# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Set the default command to start Next.js in development mode
CMD ["npm", "run", "dev"]