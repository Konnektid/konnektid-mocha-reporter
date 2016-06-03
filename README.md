# konnektid-mocha-reporter

A environment aware test reporter for [Mocha](https://mochajs.org/). Uses the default Mocha `spec` reporter for development, and switches to `tap` output when it detects a CI environment.

Specifically detects if the `BUILD_NUMBER` env variable was set.

## Install

```sh
npm install --save-dev konnektid/konnektid-mocha-reporter
```

## Usage

Add the new reporter to your `mocha` options using the `--reporter` (or `-R`) flag:

```sh
_mocha --reporter konnektid-mocha-reporter
```

Or when defined in your `package.json` file:

```json
{
    (...)
    "scripts": {
        "test": "mocha -R konnektid-mocha-reporter"
    }
}
```
