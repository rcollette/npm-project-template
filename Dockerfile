FROM node:24.4-alpine3.22 AS base
WORKDIR /build
RUN npm ci

FROM base AS build
RUN npm build:ci as build
