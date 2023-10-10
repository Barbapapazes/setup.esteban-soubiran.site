# Update APT (do not updagrade since it's really slow)
sudo apt update
# Install httpie
sudo apt install httpie -y

# Enable PNPM
corepack enable

# Update NPM
npm i -g npm

# Install NPM Utils
npm i -g @antfu/ni jiti
