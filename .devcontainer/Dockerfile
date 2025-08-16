FROM node:20.10.0-bullseye-slim
LABEL version="1.0"
LABEL description="Front-end development environment"
# Update and install necessary packages
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        git \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Enable Corepack and set Yarn to version 4
RUN corepack enable \
    && corepack prepare yarn@stable --activate 