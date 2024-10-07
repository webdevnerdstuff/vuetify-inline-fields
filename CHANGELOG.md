# Change Log
All notable changes to the "vuetify-inline-fields" plugin will be documented in this file.

## v1.0.9
2024-10-07
[main] (@webdevnerdstuff)
* Fix issue with Switch and Checkbox `true-value` and `false-value` props not working with string values or numbers
* Fix a couple typescript internal issues
* Update packages

## v1.0.8
2024-07-02
[main] (@webdevnerdstuff)
* Fix for originalValue not resetting if table rows change and components are not keyed or mounted/unmounted
* Update packages

## v1.0.7
2024-03-13
[main] (@webdevnerdstuff)
* Change component to use `defineAsyncComponent`
* Fix unexpected side effect in computed function

## v1.0.6
2024-02-26
[main] (@webdevnerdstuff)
* Fix external rollup config
* Update packages

## v1.0.5
2024-01-11
[main] (@webdevnerdstuff)
* Fix reactivity issues
* Fix typescript issues
* Add VInlineAutocomplete (beta) to package
* Update tests
* Update packages

## v1.0.4
2023-12-18
[main] (@webdevnerdstuff)
* Add vitest
* Fix typescript issues
* Reorganizing

## v1.0.3
2023-12-06
[main] (@webdevnerdstuff)
* Remove console.log from SaveFieldButtons component
* Updated terser to remove console.log from build in case I forget to remove it in the future

## v1.0.2
2023-12-06
[main] (@webdevnerdstuff)
* Improve/Fix TypeScript support
* Add createVInlineFields for global registration and global options

## v1.0.1
2023-12-05
[main] (@webdevnerdstuff)
* Fix `VInlineSelect` modelValue getting set when no value, causing @update:modelValue to trigger

## v1.0.0
2023-12-01
[main] (@webdevnerdstuff)
Official Release

## v1.0.0-beta-2
2023-11-09
[main] (@webdevnerdstuff)
* Update lab components to regular components due to Vuetify official releases
* Update packages
* Update Vuetify to v^3.4.0
* Update docs

## v1.0.0-beta-1.12
2023-10-30
[main] (@webdevnerdstuff)
* Fix VTextField missing some props

## v1.0.0-beta-1.11
2023-10-30
[main] (@webdevnerdstuff)
* Fix vite config build after changing package name

## v1.0.0-beta-1.10
2023-10-30
[main] (@webdevnerdstuff)
* Fix disabled prop to be reactive
* Change npm package name to `@wdns/vuetify-inline-fields`
