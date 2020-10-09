# Houdini.how

A community-driven gathering place for [CSS Houdini](https://developer.mozilla.org/en-US/docs/Web/Houdini) worklets and resources.

## Contributing

Thank you for contributing to Houdini.how! This project was built to highlight your contributions to the Houdini community. In order to contribute, please open a [pull request](https://opensource.com/article/19/7/create-pull-request-github) containing the information or project update.

To run the website, 

1. Install node dependancies using `npm i`. 
2. Run development mode using `npm start`

The website build lives within the `public/` folder, while JSON information pertaining to worklets and resources live in `worklets/` and `resources/` respectively.

### Contribute a Houdini worklet

To contribute a Houdini worklet, create a new file within `worklets/`. The information you are contributing will be in JSON format. Please use the following template:

```json
{
  "workletName": <title of worklet>,
  "packageName": <name of npm package>,
  "npmURL": <url of npm package>,
  "workletUrl": <url of raw worklet file>,
  "cdnUrl": <url of cdn-hosted package (if hosted on npm, use unpkg)>,
  "demoUrl": <url of worklet demo>,
  "tags": <array of worklet tags, i.e. ["paint"]. Options are: "paint", "layout", "animation">,
  "customProps": {
      <propertyName> : {
      "type": <property type (i.e. "string", "number", "color", "percentage", etc.)>,
      "default": <default property value (i.e. ["30"])>,
      "range": <array of property range (i.e. [0, 100]>
      } ...
  },
  "html": <custom demo markup (optional for paint as a background)>,
  "usage": <CSS to use worklet, i.e. "background": "paint(angled-corners)" (can span multiple lines. Use a comma to separate entries in an object)>,
  "author": {
      "name": <author name to appear on site>,
      "url": <link to author's website or other social page>,
      "image": <link to author's avatar image>
  }
}
```

Then, run `npm start` to preview the website and add your resource to the build.

Please see `worklets/` for examples. Feel free to open incomplete PRs and we can work together to get them into shape for submission.

### Contribute a Houdini resource

To contribute a Houdini resource, create a new file within `resources/`. The information you are contributing will be in JSON format. Please use the following template:

```json
{
  "url": <resource URL>,
  "type": <resource type. Options include: "article", "website", "demo">,
  "title": <resource title>,
  "pubDate": <publish date>,
  "desc": <short description>, 
  "tags": <tags related to the resource. Options include: "typed object model", "properties and values", "paint", "layout", "animation">
  "author": {
    "name": <author name to appear on site>,
    "url": <link to author's website or other social page>,
    "image": <link to author's avatar image>
  }
}
```

### Contribute a bugfix or feature

To contribute a bugfix or feature, please reference and existing issue or open a new issue. When submitting the bugfix or feature, add `Resolves <issue number>` to the pull request.

Thank you so much for your contribution!