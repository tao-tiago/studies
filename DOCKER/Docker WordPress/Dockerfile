FROM php:7.4-fpm

LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Tiago Pires <tiago.pires@bindigital.com.br>"

WORKDIR /usr/share/nginx/html

RUN docker-php-ext-install pdo mysqli

ARG UNAME=www-data
ARG UGROUP=www-data
ARG UID=1000
ARG GID=1001
RUN usermod  --uid $UID $UNAME
RUN groupmod --gid $GID $UGROUP

CMD ["php-fpm"]