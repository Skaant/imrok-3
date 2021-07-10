# [imrok.fr](imrok.fr) v3.\*

`imrok-3` is both :

- A **design rework** for my creative website [imrok.fr](imrok.fr),
- And a POC for **automated static website generator** which can be **triggered by content managers from GitHub UI**.

As so, **there is actually two _Quick start_ guides** : the [content manager one](#quick-start-content-manager) and the [developper one](#quick-start-developer).

## Quick start (content manager)

_Pipeline to be installed soon._

**Edit or create a `.mdx` file** from `_data/*` or `src/pages/*` folders to **trigger website rebuild and deployment**.

## Quick start (developer)

Install dependencies :

```sh
npm i
```

Start local development server :

```sh
npm start
```

Build website for production (test only, **you shouldn't deploy manually this website**) :

```sh
npm run build
```
