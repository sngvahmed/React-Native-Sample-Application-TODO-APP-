# install nvm
echo "do you have nvm ?(yes,no)"

read answer

if [ "$answer" == "no" ]; then
    wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
fi
