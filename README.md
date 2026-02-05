# fmprops

Parses webviewer props from FileMaker.

## Installation

```bash
npm install fmprops
```

## Setup

Add a `<meta>` tag in your HTML with the `dev-url` attribute pointing to your local development server:

```html
<meta dev-url="http://localhost:5173" />
```

In **development mode** (when the page URL matches `dev-url`), props are read from the `props` query parameter:

```
http://localhost:5173?props={"name":"John","age":30}
```

In **production mode** (inside a FileMaker WebViewer), the `##PROPSPLACEHOLDER##` string in the source is replaced by FileMaker with the actual props object before the page is rendered.

## Usage

### JavaScript

```js
import { loadFmProps, getFmProps } from 'fmprops';

// Load and parse props (call once on startup)
const props = loadFmProps();

// Retrieve the loaded props later from anywhere
const props = getFmProps();
```

### TypeScript

```ts
import { loadFmProps, getFmProps } from 'fmprops';

// Load and parse props (call once on startup)
const props = loadFmProps();

// Retrieve the loaded props later from anywhere
const props = getFmProps();
```

The package includes built-in type declarations so no additional `@types` package is needed.

## API

### `loadFmProps()`

Loads and parses the props from FileMaker. Stores them globally and returns the parsed props object.

- In development: reads from the `props` URL query parameter
- In production: uses the value injected by FileMaker into the `##PROPSPLACEHOLDER##` string

Returns: `Record<string, any>` - the parsed props object.

### `getFmProps()`

Returns the props that were previously loaded by `loadFmProps()`.

Returns: `Record<string, any>` - the loaded props object.

## License

MIT
