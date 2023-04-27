FROM node:latest as build

# Set the working directory
WORKDIR /db

# Add the source code to app
COPY . .

# Install all the dependencies
RUN npm install

# Expose port 80
EXPOSE 3000

CMD ["npm", "run", "server"]


