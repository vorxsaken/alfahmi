---
title: 'Electronics Store'
excerpt: 'The software I created for an electronics shop, was my first project using payment gateway'
coverImage: '/projects/electronics-store/cover.jpg'
date: 'September 2022'
demo: 'https://ezaelektronik.vercel.app/'
techStack: 'vuejs vuetify firebase capacitorjs nodejs'
---
# # Intro

![cover](/projects/electronics-store/cover.jpg)

I created an e-commerce app using VueJS and CapacitorJS. In this app, users can easily browse through all available products or filter them by category of their choice. They can also make secure payments for the electronic products they wish to purchase.

This application implements the xendit payment gateway to make payments between the user and the shop concerned. here I use capacitorJS as a 'wrapper' so that it can run on android, I know people will definitely prefer react native if they want to create cross-platform applications, but i don't know or haven't found yet an equivalent like react native for vueJS, so yes I using capacitorJS which is simpler because it shares the same codebase as the web version and can access 'native features' from Android such as the camera, notifications, etc. 

#### For security reason, backend to make payment for this app is deactivated.

The weakness of this app is that the only language available is Indonesian, and the codebase needs to be refactored (i'll do that if i have a lot of spare time)

App Features :

1. browse all product vertically with infinite scroll, soo no boring pagination numbers.
2. search product.
3. browse product by category.
4. change user profile like username, avatar, password and add/change/remove user addresses
5. view payment history.
6. user can pay the product using e wallet or qrcode.
7. product details covers : product description, add/view/remove reviews. 
8. other users review and related product recommendation.
9. cart page covers : add/remove products user add, select address and select payment method.
10. add/remove favorite product.

and some more ...

# # Gallery

> ![login](/projects/electronics-store/landscape/login.png) \
> Login page of this web app, On this page, users can log in by entering a verified email address and password

> ![home](/projects/electronics-store/landscape/home.jpg) \
> Home page of this web app. On this page the client user can see all the products that the admin user has added to the system

> ![product-info](/projects//electronics-store//landscape/productInfo.jpg) \
> Product info. On the product details page at the very top is a collection of images of the product and below it is the product title, to the right is a heart icon to add the product to favorites. On the add to basket button the user can see the product stock or add the number of items to be added to the basket. The 3 buttons below, namely the description function to view information about the product, give a rating to provide a review of the product, and the review button functions to see a list of reviews from other users. Below that there is a list of products that are relevant to the selected product.

> ![cart](/projects/electronics-store/landscape/cart.png) \
> Cart Page. On the cart page, the client user can see a list of products that have been added to the order cart, the user must select the address, delivery service and service from the delivery service, after user chooses the address, user must choose a payment method, including ewallet with dana and astrapay options, then the QR code payment method. After that, the process to order button will be active so the user can proceed to payment.

> ![order](/projects/electronics-store/landscape/order.png) \
> Orders Page. This page displays a list of orders that have been made by the client user by pressing the "process to order" button on the previous cart page, the button on the top right has the function to refresh the order list, and the details button will bring the user details of the order. 

> ![favorites](/projects/electronics-store/landscape/favorite.png) \
> Favorites Page. On this page, a list of products that are favorites by the client user will be displayed, where to add a product to the client user's favorite list, you must press the heart icon on the product detail page, home page or view category page.