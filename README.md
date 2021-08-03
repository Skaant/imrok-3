# [imrok.fr](imrok.fr) v3.\*

`imrok-3` is both :

- A **design rework** for my creative website [imrok.fr](imrok.fr),
- And a POC for an **automated static website generator** (exploitng [Gatsby framework](https://gatsbyjs.com/)) which could be **triggered by content managers from GitHub UI**.

As so, **there is actually two _Quick start_ guides** : the [content manager one](#quick-start-content-manager) and the [developper one](#quick-start-developer).

- [imrok.fr v3.\*](#imrokfr-v3)
  - [Quick start (content manager)](#quick-start-content-manager)
  - [Quick start (developer)](#quick-start-developer)
  - [Pages tree](#pages-tree)
  - [Data types](#data-types)
  - [Meta-data](#meta-data)

## Quick start (content manager)

_Pipeline to be installed soon._

**Edit or create a `.mdx` file** from `_data/*` or `src/pages/*` folders to **trigger website rebuild and deployment**.

Files in `_data` folders describe **instances of a [specific type of ressource](#data-types)** (ex: article, illustration ...).

These _instance_ files are composed as follow :

- At top, between the two `---` lines, lay [meta-data](#meta-data),
- Next, you can find UI components import lines,
- At last, stands the mixed Markdown and React components which describe the page content.

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

## Pages tree

All instances page (`:` slug) are rendered from `_data` folder.

Other static pages are rendered from `src/pages` folder.

> [Go to pages details](#pages-details) or click on a line below.

- [`index`](#page-index)
- [`idees/`](#page-idees)
  - [`articles/`](#page-ideesarticles)
    - [`:article.slug`](#page-ideesarticlesarticleslug)
  - `fragments/:fragment.slug`
  - `videos/:video.slug`
  - `collections/:collection.slug`
- `actualites/`
  - `articles/:article.slug`
  - `fragments/:fragment.slug`
  - `collections/:collection.slug`
- `art/`
  - `illustrations/:illustration.slug`
  - `storyboards/:storyboard.slug`
  - `videos/:video.slug`
  - `collections/:collection.slug`
- `permaculture/`
  - `projets/:projet.slug`
  - `plantes/:plante.slug`
- `themes/:theme.slug`
- `bibliotheque`
  - `fragments/:fragment.slug`
- `a-propos`
- `mentions-legales`

## Data types

| Key          | Short description                                                                          |
| ------------ | ------------------------------------------------------------------------------------------ |
| `fragment`   | Small idea (from thoughts, books, storyboards ...).                                        |
| `article`    | Detailed idea or news item.                                                                |
| `update`     | Small news item used to notify the update of a part of this website or of another project. |
| `collection` | A set of ressources (article series, storyboard pages ...).                                |

## Meta-data

Available meta-data properties :

| Key           | Type                          | Description                                                         |
| ------------- | ----------------------------- | ------------------------------------------------------------------- |
| `type`        | [data types](#data-types) key | Used to recognize how to treat and to render specific kind of data. |
| `title`       | String                        |
| `slug`        | String                        |
| `tags`        | String[]                      |
| `description` | String                        |
| `date`        | `dd/mm/yyyy` (String)         |

## Pages details

> [Go to pages tree](#pages-tree)

### Page `index`

* **Id:** `accueil`,
* **Source:** `src/pages/index.mdx`.

#### Components tree

* `AccueilPageTitleRow`
* `ActualitesListRow`
* `EditorialRow`
  * `##` *Qu'est-ce qu'IMROK ?*
  * `ButtonsMenuCol` : main tags link
* `QuoteRow` (: random 3..5 ?)
* `EditorialRow`
  * `##` *Les idées c'est magique*
  * `ButtonsMenuCol`
    * [`idees`](#page-idees)
    * [`idees/articles`](#page-ideesarticles)
    * (collection) *Carnets de pensées*
    * `idees/videos`
    * (collection) others collections
* `ImageRow`
* `EditorialRow`
  * `##` *Recherches artistiques*
  * `ButtonsMenuCol`
    * `art`
    * `art/illustrations`
    * `art/storyboards`
    * `art/photos`
    * `art/videos`
* `QuoteRow`
* `EditorialRow`
  * `##` *Mon livre de science-fiction ésotérique*
  * `CTACol` : [highbs-bok.art](https://highbs-bok.art)
* `ImageRow`
* `EditorialRow`
  * `##` *Quelques expériences avec la permaculture*
  * `ButtonsMenuCol`
    * `permaculture`
    * `permaculture/projets`
    * `permaculture/plantes`
* `QuoteRow`
* `EditorialRow`
  * `##` *Conception du site*
  * `CTACol` : [rimarok.com](https://rimarok.com)

> [Go to pages tree](#pages-tree)
 
### Page `idees`

* `TitleRow`
* `EditorialRow`
  * `##` *Se connaître Soi*
* `ImageRow`

### Page `idees/articles`
### Page `idees/articles/:article.slug`
