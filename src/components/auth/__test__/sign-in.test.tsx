import {render, screen} from '../../../../src/test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'

import SignIn from '../sign-in'
import Home from '../../../../pages/index'

const sum = (a:number, b:number) => a + b

it('test function', async() => {
  const result = sum(1,1)
  expect(result).toEqual(2)
})

describe("HomePage", () => {
    it("should render the heading", () => {
      render(<Home />);
  
      const heading = screen.getByText(
        /Testing Next.js With Jest and React Testing Library/i
      );
  
      // we can only use toBeInTheDocument because it was imported
      // in the jest.setup.js and configured in jest.config.js
      expect(heading).toBeInTheDocument();
    });
  });


it('button is disabled in invalid email is entered', async() => {
    render(<SignIn />);

    const emailInput = screen.getByLabelText(/email/i)

    userEvent.type(emailInput, 'invalid.email.com')

    const submitButton = screen.getByRole('button', {name: /submit/i})

    expect(submitButton).toBeDisabled()

})

it('button is disabled in invalid password is entered', async() => {})

it('button is disabled in invalid email is entered', async() => {})