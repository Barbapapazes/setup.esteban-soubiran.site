---
title: Setup Scripts
description: Opinionated scripts to setup environments like WSL or Codespaces.
layout: prose
---

# Setup Scripts

When you create a new environment, you need to install a lot of tools and configure them. But you do not want to waste time on this. So I created some scripts to automate this process.

I'm open [to any suggestions](https://github.com/barbapapazes/setup.esteban-soubiran.site) to improve them.

## Scripts

Every scripts are super opinionated. They are made for my own use. But you can use them as a base for your own scripts or just use them as they are if you are satisfied with my choices.

### WSL (Ubuntu)

This script is used to setup a new WSL environment.

```bash
bash <(curl -s --location https://setup.esteban-soubiran.site/wsl)
```

### Quick Setup Codespaces

This script is used to install basic stuff for a new codespace.

```bash
bash <(curl -s --location https://setup.esteban-soubiran.site/quick-setup-codespaces)
```
