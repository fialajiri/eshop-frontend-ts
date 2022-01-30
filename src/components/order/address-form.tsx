import { Dispatch, SetStateAction, Fragment, useState, useEffect } from "react";
import { AddressDoc } from "../../interfaces/models";
import FloatingLabelInput from "../form-elements/floating-label-input";

export interface AddressFormProps {
  address: AddressDoc;
  setAddress: Dispatch<SetStateAction<AddressDoc>>;
}

export const initialAddress: AddressDoc = {
  firstName: "",
  lastName: "",
  phone: "",
  street: "",
  streetNumber: "",
  city: "",
  postal: "",
  country: "",
};

const AddressForm: React.FC<AddressFormProps> = ({ address, setAddress }) => {
  const [firstName, setFirstName] = useState<string>(address.firstName);
  const [lastName, setLastName] = useState<string>(address.lastName);
  const [phone, setPhone] = useState<string>(address.phone);
  const [street, setStreet] = useState<string>(address.street);
  const [streetNumber, setstreetNumber] = useState<string>(address.streetNumber);
  const [city, setCity] = useState<string>(address.city);
  const [postal, setPostal] = useState<string>(address.postal);
  const [country, setCountry] = useState<string>(address.country);

  const setValueHandler = () => {
    setAddress({
      firstName,
      lastName,
      phone,
      street,
      streetNumber,
      city,
      postal,
      country,
    });
  };

  useEffect(() => {
    setValueHandler();    
    console.log(address)
  }, [firstName, lastName, phone, street, streetNumber, postal, city, country]);

  return (
    <div className="address-form__container">
      <div className="address-form__input address-form__input--firstname">
        <FloatingLabelInput
          id="firstName"
          label="jméno"
          value={address.firstName}
          setValue={setFirstName}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--lastname">
        <FloatingLabelInput
          id="lastName"
          label="přímení"
          value={address.lastName}
          setValue={setLastName}
          type="text"
        />
      </div>
     
      <div className="address-form__input address-form__input--street">
        <FloatingLabelInput
          id="street"
          label="ulice"
          value={address.street}
          setValue={setStreet}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--streetnumber">
        <FloatingLabelInput
          id="streetNumber"
          label="č.p."
          value={address.streetNumber}
          setValue={setstreetNumber}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--city">
        <FloatingLabelInput
          id="city"
          label="město"
          value={address.city}
          setValue={setCity}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--phone">
        <FloatingLabelInput
          id="phone"
          label="telefon"
          value={address.phone}
          setValue={setPhone}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--postal">
        <FloatingLabelInput
          id="postal"
          label="směrovací číslo"
          value={address.postal}
          setValue={setPostal}
          type="text"
        />
      </div>
      <div className="address-form__input address-form__input--country">
        <FloatingLabelInput
          id="country"
          label="země"
          value={address.country}
          setValue={setCountry}
          type="text"
        />
      </div>
    </div>
  );
};

export default AddressForm;
