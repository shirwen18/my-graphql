# my-graphql

A simple Node.js, TypeScript, and GraphQL server using Apollo Server and PostgreSQL (future integration).

## Features

- Node.js + TypeScript
- Apollo Server (GraphQL)
- Ready for PostgreSQL integration

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the development server with hot-reloading:

```sh
npm run dev
```

### Build

Compile TypeScript to JavaScript:

```sh
npm run build
```

### Production

Start the compiled server:

```sh
npm start
```

## Usage

Once running, access the GraphQL playground at [http://localhost:4000/](http://localhost:4000/).

Example query:

```graphql
query {
  hello
}
```

## License

ISC