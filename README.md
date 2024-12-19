Problem: We need to design, develop, and demonstrate a fully functional REST API around a chosen theme.

1. Planning out the API routes and resources. Create and complete our own requirements table first.
2. Setting up a basic Express server with a test route
3. Implementing CRUD operations
4. Polishing and stretching the application

The API will feature the following endpoints:

| HTTP Method | Path   | Request Body (JSON)                          | Response Body (JSON)         | Status Code | Result                         |
| ----------- | ------ | -------------------------------------------- | ---------------------------- | ----------- | ------------------------------ |
| GET         | /      |                                              | An array of all data objects | 200         | Gets all data                  |
| GET         | /:date |                                              | A matching data object       | 200         | Gets data with a matching date |
| POST        | /      | `The population in ${date} was ${popByDate}` | A newly created data object  | 201         | Creates new data               |
| PATCH       | /      | `The population in ${date} was ${popByDate}` | An edited data object        | 200         | Updates data                   |
| DELETE      | /      |                                              | A deleted data object        | 200         | Deletes data                   |
