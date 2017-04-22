# cross-clear

**Modern cross-platform terminal screen clearing.**

This module uses Node's official [`readline`](https://nodejs.org/api/readline.html) API so it works reliably in all terminals on all platforms. The used functions (`readline.cursorTo` and `readline.clearScreenDown`) are available since Node [`v0.12.0`](https://nodejs.org/dist/v0.12.0/docs/api/readline.html).

## Installation

```
npm install cross-clear
```

## Quickstart

```js
const clear = require('cross-clear')

clear() // clears stdout
clear(process.stderr) // clears stderr
```

## API

### `clear([stream])`

- Clears the given stream; if no stream is provided, `process.stdout` will be cleared
- Gracefully does nothing if not run in a text terminal ([`stream.isTTY`](https://nodejs.org/api/tty.html)) or if the provided stream is not writable (`stream.writable`)

## CLI

```
$ cross-clear
```

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).