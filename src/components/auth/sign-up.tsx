import { useActions } from "../../hooks/use-actions";
import Input from "../form-elements/input";
import Button from "../ui-elements/button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
} from "../../validators/validators";
import { useForm } from "../../hooks/use-form-hook";
import { Fragment, useState } from "react";
import ErrorModal from "../ui-elements/error-modal";

const SignUp: React.FC = () => {
  const [error, setError] = useState<string>();
  const { register } = useActions();

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
      confirmPassword: {
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
    const confirmPassword = formState.inputs.confirmPassword.value;
    if (password !== confirmPassword) {
      setError('Hesla se musí shodovat');
      return;
    }
    register(email, password);
  };

  const clearError = () => {
    setError(undefined);
  };

  return (
    <Fragment>
      <ErrorModal error={error} onClear={clearError} modalProps={{header: error}} />
      <div className="signin__container">
        <h2 className="heading-secondary ">Registrovat se</h2>
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
            validators={[VALIDATOR_MAXLENGTH(20), VALIDATOR_MINLENGTH(4)]}
            errorText="Heslo musí mít minimálně 4 maximálně 20 znaků"
            onInput={inputHandler}
          />
          <Input
            className="auth-page__password"
            id="confirmPassword"
            element="input"
            label="Potvrďte heslo"
            type="password"
            validators={[VALIDATOR_MAXLENGTH(20), VALIDATOR_MINLENGTH(4)]}
            errorText="Heslo musí mít minimálně 4 maximálně 20 znaků"
            onInput={inputHandler}
          />
          <Button disabled={!formState.isValid}>Registrovat</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default SignUp;
