const express = require('express');
const app = express('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

app.use(cors());

app.use('/graphql', graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const PORT = process.env.port || 5000; 

app.listen(PORT, () => console.log(`Server started at port ${PORT}.`))

