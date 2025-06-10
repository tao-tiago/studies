FROM ubuntu:16.04

LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Tiago Pires <tiago.pires@bindigital.com.br>"

# Install dependences
RUN apt-get update && apt-get install -y nginx git && apt-get clean

# NGINX
WORKDIR /etc/nginx/sites-available/
RUN rm -rf *
COPY default default

# BUILD
WORKDIR /var/www/html/
RUN rm -rf *
RUN git clone https://github.com/tao-tiago/simple-html.git

EXPOSE 80
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]