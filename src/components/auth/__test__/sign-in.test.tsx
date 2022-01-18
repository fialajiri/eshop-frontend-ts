import {
  render,
  screen,
  waitFor,
} from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import { store } from "../../../state";
import SignIn from "../sign-in";

it("button is disabled when invalid input is entered", async () => {
  render(<SignIn />);

  const submitButton = screen.getByRole("button", { name: /submit/i });
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/heslo/i);

  userEvent.clear(emailInput);
  userEvent.clear(passwordInput);
  userEvent.type(emailInput, "valid@email.com");
  userEvent.type(passwordInput, "validPassword");
  expect(submitButton).toBeEnabled();

  userEvent.clear(emailInput);
  userEvent.type(emailInput, "invalid.email.com");
  expect(submitButton).toBeDisabled();

  userEvent.clear(emailInput);
  userEvent.clear(passwordInput);
  userEvent.type(emailInput, "valid@email.com");
  userEvent.type(passwordInput, "thisIsTotollyInvalidPassword");
  expect(submitButton).toBeDisabled();
});

it("clicking the submit button will return an user", async () => {
  render(<SignIn />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const emailInput = screen.getByLabelText(/email/i);
  const passwordInput = screen.getByLabelText(/heslo/i);

  userEvent.clear(emailInput);
  userEvent.clear(passwordInput);
  userEvent.type(emailInput, "valid@email.com");
  userEvent.type(passwordInput, "validPassword");
  expect(submitButton).toBeEnabled();

  userEvent.click(submitButton);

  const newsubmitButton = await screen.findByRole("button", {
    name: /submit/i,
  });

  await waitFor(() => expect(store.getState().userLogin.user).not.toBeNull());
});
