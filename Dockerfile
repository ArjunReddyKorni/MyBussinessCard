# Use an official Node.js runtime as a parent image
FROM node:14-alpine
 
# Set the working directory to /app
WORKDIR /app
 
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of the application code to the working directory
COPY . .
 
# Expose the port the app runs on
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
 
# Start the React Native packager
CMD ["npm", "start"]
