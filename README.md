# Installation

## Install Homebrew

```sh
/bin/bash -c "$(curl -fsSL \
https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

## Install the OS dependencies

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
