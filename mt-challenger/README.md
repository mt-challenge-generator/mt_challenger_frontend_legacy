# mt-challenger

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```


### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## **WARNING:** 
> If you hit an `ERR_OSSL_EVP_UNSUPPORTED` error in your application with Node.js 17, it’s likely that your application or a module you’re using is attempting to use an algorithm or key size which is no longer allowed by default with OpenSSL 3.0. A new command-line option, `--openssl-legacy-provider`, has been added to revert to the legacy provider as a temporary workaround for these tightened restrictions.

To fix this, go to the [package.json](./package.json) file and replace the following lines
```json
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
  }
```
with
```json
"scripts": {
    "serve": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
    "build": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service build",
    "lint": "SET NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service lint"
  }
```
or
```json
"scripts": {
    "serve": "vue-cli-service --openssl-legacy-provider serve",
    "build": "vue-cli-service --openssl-legacy-provider build",
    "lint": "vue-cli-service --openssl-legacy-provider lint"
  }
```
