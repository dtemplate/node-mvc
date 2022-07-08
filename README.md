# Node Mvc

this is an official dt template that generates a nodejs api using the mvc pattern

## How to use

After installing the dt cli, create a folder with the name of your api and enter it, for example:

```sh
mkdir my-node-api
cd my-node-api
```

Then use this template through the cli:

```sh
dt new -t node-mvc
```

## TODO

- Create a file by name ".env" with:

```env
PORT=3001
NODE_ENV = local
```

- Open package.json and change the name, author and license as your datas

## Output

To summarize this template will install and configure: babel, commitlint, typescript, jest, cz-conventional-changelog, eslint, husky, tsconfig-paths, auto create release...

Directory output tree:

```sh
├── LICENSE
├── README.md
├── __tests__
│   └── TestImportation.test.ts
├── babel.config.js
├── commitlint.config.js
├── jest.config.ts
├── package.json
├── prettier.config.js
├── src
│   ├── @types
│   │   └── index.d.ts
│   ├── modules
│   │   └── user
│   │       └── infra
│   │           └── http
│   │               ├── controllers
│   │               │   └── UserController.ts
│   │               └── routes
│   │                   └── user.routes.ts
│   └── shared
│       └── infra
│           └── http
│               ├── app.ts
│               ├── routes
│               │   └── index.ts
│               └── server.ts
├── tsconfig.json
└── yarn.lock
```
