FROM node:16.15.0

RUN apt-get update -y && apt-get install -y curl
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update -y && apt-get install -y yarn
RUN apt-get install -y xdg-utils

COPY ./view/package.json /usr/app/view/package.json

WORKDIR /usr/app/view
RUN yarn install --non-interactive --frozen-lockfile
