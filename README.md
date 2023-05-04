# Single Executable Applications example

[about Single Executable Applications](https://nodejs.org/api/single-executable-applications.html)

## System requirements

* Node.js>=20
* Linux-based OS

## How to build

```bash
$ npm run build
```

* `build` transpiles and bundles TypeScript files into a single JavaScript file.
* `postbuild` builds an executable binary file.

## How to use

Run the server.

```bash
$ ./sea-example
```

Then access <http://127.0.0.1:3000> using an HTTP client, such as a web browser or [curl](https://curl.se/).

```bash
$ curl http://127.0.0.1:3000
{"hell":"word"}
```
