FROM gatsby-base

ADD . /gatsby-blog 
WORKDIR /gatsby-blog

RUN npx gatsby build --prefix-paths

EXPOSE 9000
CMD ["npx", "gatsby", "serve", "-H", "0.0.0.0", "--prefix-paths"]

