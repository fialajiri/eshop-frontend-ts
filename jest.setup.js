// jest.setup.ts
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { server } from "./src/mocks/server";


// Establish API mocking before all tests.
beforeAll(() => {
  process.env.BACKEND_URL = "http://localhost:5000";
  server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
