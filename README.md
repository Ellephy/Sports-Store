# Personal React project

This project is based on `Pro React 16` book by `Adam Freeman`.

## Docker Image

You can pull docker image of this project `docker pull ellephy/react-apps:sportsstore`.

Run `docker run -p 80:80 ellephy/react-apps:sportsstore`. And go to `http://localhost` on your browser.

Don't forget to install docker first, guy. 😃 [Docker's here](https://www.docker.com/products/docker-desktop) 👈

## Personal Advices

In case of implementing the project from scratch, use `apollo-client` instead of `apollo-react`.
And, it would be better to use `yarn` than `npm` whenver you are stuck with version conflicts such as webpack.

## Sample User Screens

![Initial User Screen](/assets/images/User_1.png)

**When you press `Add To Cart`**
![Cart Screen](/assets/images/User_2.png)

**When you press `Checkout`**
![Order Screen](/assets/images/User_3.png)

**When you press `Place Order`**
![Order Complete Screen](/assets/images/User_4.png)

## Sample Admin Screens

**Type `secret` for password field**
![Admin Login Screen](/assets/images/Admin_1.png)

**`Orders` screen will be shown by default and you can change `Shipped` status by clicking**
![Admin Orders Screen](/assets/images/Admin_2.png)

**When you press `Products`**
![Admin Products Screen](/assets/images/Admin_3.png)
