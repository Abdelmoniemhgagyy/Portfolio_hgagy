FROM node:20-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
# تعليق أو إزالة السطر التالي
# RUN npm run lint
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
