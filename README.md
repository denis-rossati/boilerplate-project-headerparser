# [Request Header Parser Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/request-header-parser-microservice)

---

## What the app does?

Returns a json when '/api/whoami' is visited. The information is taken from the request headers: language, ip address and details from the software.

## How can I run the app?

You can run either npm start or npm run dev after you download the repo and install your dependencies. Then you can use the tool postman to test the routes locally

(or you can run in the chrome, it'll work too :P)

Challenges that I had during the development

Was not a big challenge, just like the previous challenge. But I have to make some research to find a regex that fits several forms of ip addresses, to match the ip's with the regex, I discovered the libray `chai-match` :)

I also had a test that is not passing in the `language` tests. For some reason, when I test manually, the language is returned, but when the test suit run my application, the language is undefined :(. I'll figure it out later.

---

Thanks for your atention!
