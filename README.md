<h1 align="center">
    CoinDex API 💰
    <br />
    <br />
    <img src="resources/Banner.png" alt="Banner">
</h1>


## Table of Contents

1. [Introduction](#introduction)
2. [Motivation](#motivation)
3. [Quick start](#quick-start)
4. [Documentation](#documentation)
5. [Docker](#docker)
6. [Author](#author)
7. [License](#license)
---
## Introduction

Welcome to CoinDex API, your ultimate companion for organizing and categorizing 
your coin collection effortlessly! \
Whether you're a numismatist, a collector, or just someone intrigued by coins, CoinDex API is here 
to simplify the process of identifying and categorizing your coins with just a snap.

---
## Motivation

While manual cataloging and categorizing served as the foundation 
for coin collection management, this process could be extremely **time-consuming, prone to error 
and difficult to update**.


---
## Quick Start

### 1. Setup the project

Open your terminal, then run the following command to install dependencies for the project:

```bash
npm install
```

### 2. Set env file

Copy the example [.env file](./.env), and set the needed values:
```bash
cp .env .env.dev
```

> Note: Change 'dev' with 'production' or 'test' for new environment.

### 3. Let's run it!

```bash
npm run dev
```

---
## Documentation

I utilize Swagger for documenting the API endpoints, 
providing a clear and interactive way for developers to understand 
the functionalities and data models of our system.

Once your project is running, open a web browser and navigate to the Swagger UI URL. This URL is:

```
https://<domain>/docs
```


---
## Docker

### 1. Create the image
Open a terminal or command prompt, navigate to the directory 
containing your Dockerfile, and run the following command:
```bash
docker build -t <image-name> .    
```

### 2. Start a new container

Once the image is built, you can run it using the following command:
```bash
docker run -it -p 3000:3000 -e [env-var-list] <image-name>       
```

Use _**'-e'**_ to specify all the required environment variable. (See [here](./.env))

---
## Author

[![yDon96](https://images.weserv.nl/?url=https://github.com/yDon96.png?v=4&h=60&w=60&fit=cover&mask=circle&maxage=7d)](https://github.com/yDon96)

---
## 📝 License

Copyright © 2024 [Youssef Donadeo](https://github.com/yDon96)<br/>
This project is [GNUv3]() licensed.
