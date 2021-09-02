## Contributing

Thank you for contributing to Houdini.how! This project was built to highlight your contributions to the Houdini community. In order to contribute, please open a [pull request](https://opensource.com/article/19/7/create-pull-request-github) containing the information or project update.

To run the website,

1. Install node dependencies using `npm i`.
2. Start the development server using `npm start`

The website build lives within the `public/` folder, while JSON information pertaining to worklets and resources live in `worklets/` and `resources/` respectively.

### Contribute a Houdini worklet

To contribute a Houdini worklet, create a new file within `worklets/`. The information you are contributing will be in JSON format. Please use the following template:

```jsonc
{
  "workletName": "title of worklet",
  "packageName": "name of npm package",
  "npmUrl": "url of npm package",
  "cdnUrl": "url of cdn-hosted package", // if hosted on npm, use unpkg
  // Should the cdnUrl script run in the page ("script") or entirely in a worklet ("worklet") (optional, default value is "worklet")
  // If you use "script", then you need to call CSS.paintWorklet.addModule yourself.
  "cdnUrlType": "script",
  "demoUrl": "url of worklet demo",
  // which type(s) of worklets this uses
  "tags": ["paint", "layout", "animation"],
  // CSS custom properties used by the worklet:
  "customProps": {
    "<propertyName>": {
      "type": "number", // property type (string, number, color, percentage, etc.)
      "default": "30", // default property value
      "range": [0, 100], // array of property range
      "step": "0.5" // if type is number you can define the step value (optional, default value is 1)
    }
    // ...
  },
  // optional HTML to use when showing the worklet:
  "html": "<button>example</button>",
  // CSS to use worklet:
  "usage": {
    "background": "paint(angled-corners)",
    // (multiple properties are supported)
    "color": "red"
  },
  // Information about the author
  "author": {
    "name": "author name to appear on site",
    "url": "link to author's website or other social page",
    "image": "link to author's avatar image"
    // Copy the avatar image to `public/assets/images` folder
    // e.g. "image": "/assets/images/una.jpg"
  }
}
```

Then, run `npm start` to preview the website and add your resource to the build.

Please see `worklets/` for examples. Feel free to open incomplete PRs and we can work together to get them into shape for submission.

### Contribute a Houdini resource

To contribute a Houdini resource, create a new file within `resources/`. The information you are contributing will be in JSON format. Please use the following template:

```jsonc
{
  "url": "<resource URL>",
  "type": "article", // A resource type. One of: "article", "website", "demo"
  "title": "<resource title>",
  "pubDate": "<publish date>", // format: "Apr 20, 2020". Only needed for the types "article"
  "desc": "<short description>",
  "tags": ["paint"], // tags related to the resource. Options: "typed object model", "properties and values", "paint", "layout", "animation"
  "author": {
    "name": "<author name to appear on site>",
    "url": "<link to author's website or other social page>",
    "image": "<link to author's avatar image>"
    // Copy the avatar image to `public/assets/images` folder
    // e.g. "image": "/assets/images/una.jpg"
  }
}
```

### Contribute a bugfix or feature

To contribute a bugfix or feature, please reference and existing issue or open a new issue. When submitting the bugfix or feature, add `Resolves <issue number>` to the pull request.

Thank you so much for your contribution!
