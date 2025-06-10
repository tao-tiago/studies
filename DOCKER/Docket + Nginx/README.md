# Como criar uma imagem do Docker usando o Dockerfile:

Para começar, usaremos o comando “FROM” e depois, a imagem da onde nós vamos nos basear para criar nossa imagem, neste caso, o ubuntu 16.04.

```
FROM ubuntu:16.04
```

Depois precisamos declarar o mantenedor dessa imagem que vamos criar
```
LABEL version="1.0.0" description="Disponibilizando site com NGINX" maintainer="Tiago Pires <tiago.pires@bindigital.com.br>"
```


##### Instalação das dependências

Com o comando “RUN”, rodamos comandos dentro do nosso futuro container. É importante o parâmetro -y no **apt-get** para que ele não te pergunte nada durante a instalação dos pacotes.

```
RUN apt-get update && apt-get install -y nginx git && apt-get clean
```



Vamos definir o diretório atual de trabalho com o comando “**WORKDIR**”.

Note que estamos removendo todos os arquivos de configuração do **nginx**.

```
WORKDIR /etc/nginx/sites-available/
RUN rm -rf *
```


##### Criando um novo arquivo default para o **nginx**

Um novo arquivo **default** será adicionado ao nginx através do comando **COPY**. Ele será responsável por copiar o arquivo externo para o container.

```
COPY default default
```
Depois definimos o nosso novo diretório de trabalho e clonamos o repositório Simple HTML do github para o container.
```
WORKDIR /var/www/html/
RUN rm -rf *
RUN git clone https://github.com/tao-tiago/simple-html.git
```

Estamos quase acabando, agora precisamos expor as portas para que o nosso host tenha acesso às portas do container.
```
EXPOSE 80
```

Para finalizar, vamos para a definição do Dockerfile – onde muita gente se atrapalha, apesar de termos feito tudo certo até agora -. O nossos serviço do Nginx está instalado, mas ele não vai iniciar de forma automática. Para definirmos isso, usaremos o comando “CMD” para rodar os seguintes comandos:
```
ENTRYPOINT ["/usr/sbin/nginx"]
CMD ["-g", "daemon off;"]
```


##### Finalizando

Vamos dar o nosso primeiro Build (construção da imagem).
```
docker build . -t <nome da imagem>
```
Com nossa imagem criada, vamos levantar o nosso container.
```
docker run -d -p 8080:80 <nome da imagem>
```
Usamos o parâmetro -d para que container não ocupe o terminal e execute em background, e o parâmetro -p para definirmos as portas, onde 8080 é a porta do host e o 80 é a porta do container.

Ao executar o comando “docker ps”, você poderá ver todos os containers rodando atualmente na sua máquina e perceber que o nosso container está lá.
```
docker ps
```
Para ver rodando o container basta acessar o endereço:
```
http://localhost:8080
```