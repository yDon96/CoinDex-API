# syntax=docker/dockerfile:1

FROM node:18-alpine
# Create and set the working directory for image
RUN mkdir /app
WORKDIR /app

# Copy package.json and package-lock.json to allow using cached packages
COPY package*.json ./

# Install node dependencies
RUN npm install

# Copy source files to the working directory
COPY . .

# Copy Setup from env
RUN echo $SERVER_PORT > ./.env.production

# Run a build alias for 'onboardbase run -c="ts-node"'
RUN /usr/local/bin/npm build

# Define command for starting app process
CMD ["/usr/local/bin/npm", "start"]
EXPOSE $SERVER_PORT