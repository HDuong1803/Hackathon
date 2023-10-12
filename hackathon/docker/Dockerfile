FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/hackathon

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY yarn.lock .
COPY package.json .

RUN yarn install
# If you are building your code for production
# RUN npm ci --omit=dev
COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]