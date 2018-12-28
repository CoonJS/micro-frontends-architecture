# micro-frontends-architecture

Demo example of micro frontends architecture

Docs:

https://micro-frontends.org/

https://medium.com/@benjamin.d.johnson/exploring-micro-frontends-87a120b3f71c

First of all you have to start server side

> npm install && npm start

After that you have to start portal (entrypoint for you services)
> cd portal && npm install && npm start

Start service-a 
> cd modules/service-a && npm install && npm start

Start service-b
> cd modules/service-b && npm install && npm start

Then open http://0.0.0.0:3000 in you browser.
Service A will access on route http://0.0.0.0:3000/service-a
Service B will access on route http://0.0.0.0:3000/service-b



