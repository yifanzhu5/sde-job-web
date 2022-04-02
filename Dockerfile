# pull the official base image
FROM node:alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm install -g http-server
# add app
COPY . ./
# start app
EXPOSE 3000
CMD http-server ./build -p 3000
# CMD ["npm", "start"]
