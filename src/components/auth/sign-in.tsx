import { useActions } from "../../hooks/use-actions";
import { useTypedSelector } from "../../hooks/use-types-selector";

import Input from "../form-elements/input";
import Button from "../ui-elements/button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
} from "../../validators/validators";
import { useForm } from "../../hooks/use-form-hook";

const SignIn: React.FC = () => {
  const { login } = useActions();
  const { user } = useTypedSelector((state) => state.userLogin);

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = formState.inputs.email.value;
    const password = formState.inputs.password.value;
    login(email, password);
  };

  return (
    <div className="signin__container">
      <h2 className="heading-secondary ">Přihlásit se</h2>
      <form onSubmit={submitHandler}>
        <Input
          className="auth-page__email"
          id="email"
          element="input"
          label="Email"
          type="text"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Zadejte platný email"
          onInput={inputHandler}
        />
        <Input
          className="auth-page__password"
          id="password"
          element="input"
          label="Heslo"
          type="password"
          validators={[VALIDATOR_MAXLENGTH(20)]}
          errorText="Heslo musí mít maximálně 20 znaků"
          onInput={inputHandler}
        />
      <Button disabled={!formState.isValid}>Submit</Button>
      </form>
    </div>
  );
};

export default SignIn;
