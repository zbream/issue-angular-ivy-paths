# Angular Ivy Paths Issue with Libraries

## Overview

This repo demonstrates an issue during the `ngcc` phase of building ViewEngine Angular libraries with Ivy.

This seems to occur by doing the following:

* Create a monorepo, where a library name matches a substring of another repo (ie: "**my-lib**" and "**my-lib**-second").
* Build the libraries with `"enableIvy": false` .
* Build the app, referencing both libraries in their **dist** folder.

## Demo

This repo contains branches showcasing correct and incorrect behavior.

### Setup

1. `git checkout issue/baseline`
1. `npm install`

### Demo **Incorrect Behavior**

* **my-lib**
* **my-lib**-second

1. `git checkout issue/incorrect`
1. `npm run demo`
1. Notice build fails with error.

### Demo **Correct Behavior**

* **my-lib-first**
* **my-lib-second**

1. `git checkout issue/correct`
1. `npm run demo`
1. Notice build succeeds.

## Observations

After the `ngcc` step, libraries should have a `__ivy_ngcc__` directory.

In the **issue/correct** branch, `my-lib-first` and `my-lib-second` have these directories as expected:

```
dist/
  my-lib-first/
    __ivy_ngcc__/
      fesm2015/
    ...
  my-lib-second/
    __ivy_ngcc__/
      fesm2015/
    ...
```

In the **issue/incorrect** branch, however, notice the following structure:

```
dist/
  my-lib/
    __ivy_ngcc__/
      fesm2015/
    my-lib-second\
      fesm2015/
    ...
  my-lib-second/
    ...
```
