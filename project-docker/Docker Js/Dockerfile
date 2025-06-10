FROM node:14 AS build-env

COPY . /app

FROM gcr.io/distroless/nodejs:14
COPY --from=build-env /app /opt/test
WORKDIR /opt/test

ENV PORT 8001

CMD ["server/index.js"]
