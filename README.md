# titanium-plugin-bump-ios-extension

A tiny Titanium plugin to bump the CFBundleVersion and CFBundleShortVersionString of native iOS extensions.

## Installation

1. Inside your Titanium project root, install the following NPM package `plist`:
```zsh
 npm i --save plist
```
2. Copy the `extension.versionbump` to `<project-dir>/plugins` (create dir if not exists)
3. Add the following entry to the `<plugins>` node of your tiapp.xml
```xml
<plugin version="1.0">extension.versionbump</plugin>
```
4. Run your app. It will once rewrite all Info.plist from extensions placed in `<project-dir>/extensions`

## License

MIT

## Author

Hans Knöchel
