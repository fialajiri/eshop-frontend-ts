import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/router";
import { useTypedSelector } from "../../hooks/use-types-selector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/use-actions";
import LoadingSpinner from "../ui-elements/loading-spinner";
import Button from "../ui-elements/button";
import ErrorModal from "../ui-elements/error-modal";
import { UserActionTypes } from "../../state/action-types/user-types";
import { userUpdateProfileData } from "../../state/action-creators/user-action-creators";



const UserInfo: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const router = useRouter();

  const dispatch = useDispatch();
  const { getUserDetails, updateUserProfile } = useActions();

  const userLogin = useTypedSelector((state) => state.userLogin);
  const { user } = userLogin;

  const userDetails = useTypedSelector((state) => state.userUpdateProfile);
  const { loading, error, userDetail, success } = userDetails;

  const userUpdateProfile = useTypedSelector((state) => state.userUpdateProfile);
  const { error: userUpdateError } = userUpdateProfile;

  useEffect(() => {
    if (!user) {
      router.push("/user/signin");
    } else {
      if (!userDetail || success) {
        dispatch({ type: UserActionTypes.USER_UDPATE_PROFILE_RESET });
        getUserDetails(user.id);
      } else {
          console.log(userDetail.email)
        setEmail(userDetail.email);
        setFirstName(userDetail.firstName);
        setLastName(userDetail.lastName);
      }
    }
  }, [router, user, userDetail, success]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Hesla se musí shodovat");
      return;
    }
    const updatedData: userUpdateProfileData = {
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    updateUserProfile(updatedData);
  };

  const clearError = () => {};

  return (
    <Fragment>
      <ErrorModal
        error={errorMessage}
        onClear={clearError}
        modalProps={{ header: errorMessage }}
      />
      <div className="user-info__container">
        <h2 className="heading-secondary user-info__heading ">Změnit údaje</h2>
        <form onSubmit={submitHandler} className="form">
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              id="email"
              readOnly
              value={email}
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>

          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Jméno"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="form__label">
              Jméno
            </label>
          </div>

          <div className="form__group">
            <input
              type="text"
              className="form__input"
              placeholder="Příjmení"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="form__label">
              Příjmení
            </label>
          </div>

          <div className="form__group">
            <input
              type="password"
              className="form__input"
              placeholder="Heslo"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className="form__label">
              Heslo
            </label>
          </div>

          <div className="form__group">
            <input
              type="password"
              className="form__input"
              placeholder="Potvrďte heslo"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <label htmlFor="email" className="form__label">
              Potvrďte heslo
            </label>
          </div>

          <Button size="small">Uložit změny</Button>
        </form>
      </div>
    </Fragment>
  );
};

export default UserInfo;
