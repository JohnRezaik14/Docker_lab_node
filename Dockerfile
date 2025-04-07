#my node version
FROM node:22.1.0

#WORKDIR
WORKDIR /usr/src/app

#coping dependency files
COPY package*.json ./

#installing deps
RUN npm install

#the rest of files
COPY . .

#port to run on
EXPOSE 3000

#run command
CMD ["node","app.js"]
