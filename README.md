<hr>
<div align="center">
  <h1 align="center">
    useId()
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/use-id">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/use-id?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@accessible/use-id">
    <img alt="Types" src="https://img.shields.io/npm/types/@accessible/use-id?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/accessible-ui/use-id">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/accessible-ui/use-id?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/accessible-ui/use-id">
    <img alt="Build status" src="https://img.shields.io/travis/accessible-ui/use-id?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/use-id">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/use-id?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/use-id?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @accessible/use-id</pre>
<hr>

Creates unique deterministic IDs to facilitate WAI-ARIA and server rendering. Forked from [@reach/auto-id](https://github.com/reach/reach-ui/tree/master/packages/auto-id).

## Quick Start

```jsx harmony
import useId from '@accessible/use-id'

const Component = () => {
  const id = useId()
  return <div id={id} />
  // <div id='A:1'>
}
```

## API

### useId(fallbackId?: string | null | 0 | false, prefix?: string): string | undefined

A hook that returns a unique, but deterministic ID once per component

### Arguments

| Argument   | Type                                                     | Default     | Required? | Description                                                                               |
| ---------- | -------------------------------------------------------- | ----------- | --------- | ----------------------------------------------------------------------------------------- |
| fallbackId | <code>string &#0124; null &#0124; 0 &#0124; false</code> | `undefined` | No        | Allows you to provide your own id as a fallback                                           |
| prefix     | `string`                                                 | `🅰`         | No        | Allows you to provide a prefix for the `id` to prevent collisions with other auto id libs |

## Credit

This library is a fork of [@reach/auto-id](https://github.com/reach/reach-ui/tree/master/packages/auto-id)

## Why fork?

Reach UI doesn't use real semantic versioning (each of their packages updates versions at the same time regardless of
changes to individual packages... nonsense) so it's possible (and annoyingly so) that you could easily wind up with duplicate
version of the `auto-id` package in your bundle. Lastly, the Reach library throws super annoying warnings
in SSR because it uses `useLayoutEffect`. This library uses [@react-hook/passive-layout-effect](https://github.com/jaredLunde/react-hook/tree/master/packages/passive-layout-effect#readme)
to avoid that.

## LICENSE

MIT
