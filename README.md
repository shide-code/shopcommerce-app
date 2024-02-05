# Getting Started

Next JS Documentation: [Next Js](https://nextjs.org/)

## Environment

Create an `.env.local` file in the root folder then copy everything from the `env.example` file into `env.local`.

## Installation

For installation all dependency use command:

```bash
yarn install
```

or

```bash
npm install
```

## Run Server

```bash
yarn dev
```

## Architecure

The application architecture for this project is similar to using MVC (Model, View, Controller) but is customized according to project needs.

<pre>
|-- .storybook
    |-- main.ts
    |-- preview.ts
|-- app
    |-- global.css
    |-- layout.tsx
|-- configs
    |-- App.config.ts
|-- components
    |-- core     
        |-- DataAction
        |-- DataDisplay
        |-- DataInput
    |-- templates
|-- hooks
|-- public
    |-- illustrations
    |-- images
|-- services
|-- themes
    |-- colors.ts
</pre>

## Create a new pages

For create a new page you can create folder / file in `app` folder example:

<pre>
|-- Customer
    |-- page.tsx
</pre>

`page.tsx` is root file which will be read by the Next JS Router. But in this file specifically for templating there should be no logic in it.

## Components

For the documentation component create with storybook, so you can run command:

```bash
yarn storybook
```

## Templating

To do templating, in the `templates` folder in the `components` folder, name the folder according to the name of the page. Example you can add Navbar section for a module Merchant

<pre>
|-- templates
    |-- Customer
        |-- Navbar
            |-- Navbar.tsx
            |-- index.ts
        |-- index.ts
    |-- index.ts
</pre>

and on the index.ts file in the templates folder, do an export like this

```ts
export * as Customer from "./Merchant";
```

So when calling a component on the page, just call it like this:

```tsx
<Customer.Navbar />
```

## Business Logic

For business logic on the page, we can create it in hooks, so all business logic will be stored in separate files so that it is not combined with templating, but can be integrated with templating under certain conditions

<pre>
|-- Customer
    |-- hooks
        |-- useCustomer.ts
        |-- index.ts
    |-- page.tsx
</pre>
