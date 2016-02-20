FROM node:0.10

RUN mkdir -p /srv/app
WORKDIR /srv/app

COPY package.json /srv/app/
RUN npm install --production

COPY . /srv/app

ARG git_revision=unset
RUN echo $git_revision > /srv/app/REVISION

EXPOSE 3000
CMD ["npm", "run-script", "run-production"]
