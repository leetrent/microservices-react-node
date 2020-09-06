# Specify base image
FROM node:alpine

# create-react-app bug workaround
# https://github.com/facebook/create-react-app/issues/8688
ENV CI=true

# Set the working directory to '/app' in the container.
# All commands will be executed relative to this directory
# in the container.
WORKDIR /app

# Copy over only package.json prior to calling 'npm install'.
COPY package.json ./

# Install all required NODE JS dependencies.
RUN npm install

# Copy over all remaining source code
COPY ./ ./

# Set the command to run when the container starts up.
CMD ["npm", "start"]