# Bootstrap VS Code Web

Sets up a front-end web development environment in Visual Studio Code on a Mac.

Includes: _React, TypeScript, Parcel, ESLint, Prettier, Jest, Enzyme_

## Install Homebrew

```sh
/bin/bash -c "$(curl -fsSL \
https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Clone the repository

```sh
git clone https://github.com/bacongravy/bootstrap-vscode-web
```

## Enter the workspace

```sh
cd bootstrap-vscode-web
```

## Install the global dependencies

```sh
brew bundle
```

## Install the recommended Visual Studio Code extensions

```sh
cat .vscode/extensions.json \
| jq -r '.recommendations | .[]' \
| xargs -L1 code --install-extension
```

## Install the node package dependencies

```sh
npm install
```

## Open Visual Studio Code

```sh
code .
```
