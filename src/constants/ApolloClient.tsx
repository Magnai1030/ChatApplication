import { API_URL } from '@env';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
    uri: API_URL,
    cache,
    defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

export default client;
