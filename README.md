Problem: We need to design, develop, and demonstrate a fully functional REST API around a chosen theme.

1. Planning out the API routes and resources. Create and complete our own requirements table first.
2. Setting up a basic Express server with a test route
3. Implementing CRUD operations
4. Polishing and stretching the application

The API will feature the following endpoints:

| HTTP Method | Path   | Request Body (JSON)                         | Response Body (JSON)          | Status Code | Result                          |
| ----------- | ------ | ------------------------------------------- | ----------------------------- | ----------- | ------------------------------- |
| GET         | /      |                                             | An array of all quote objects | 200         | Gets all quotes                 |
| GET         | /:date |                                             | A matching quote object       | 200         | Gets a quote with a matching id |
| POST        | /      | `{ quoteText: (String), author: (String) }` | A newly created quote object  | 201         | Creates a new quote             |
| PATCH       | /      | `{ quoteText: (String), author: (String) }` | An edited quote object        | 200         | Updates a quote                 |
| DELETE      | /      |                                             | A deleted quote object        | 200         | Deletes a quote                 |
