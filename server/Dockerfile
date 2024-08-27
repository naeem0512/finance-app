# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.20.4
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="Node.js"

WORKDIR /app

ENV NODE_ENV="production"

# Install necessary packages
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package-lock.json package.json ./
RUN npm ci

# Copy application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the server by default
CMD [ "node", "server.js" ]