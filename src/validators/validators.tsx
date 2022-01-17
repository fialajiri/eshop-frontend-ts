export enum ValidatorTypes {
  VALIDATOR_TYPE_REQUIRE = "REQUIRE",
  VALIDATOR_TYPE_MINLENGTH = "MINLENGTH",
  VALIDATOR_TYPE_MAXLENGTH = "MAXLENGTH",
  VALIDATOR_TYPE_MIN = "MIN",
  VALIDATOR_TYPE_MAX = "MAX",
  VALIDATOR_TYPE_EMAIL = "EMAIL",
  VALIDATOR_TYPE_FILE = "FILE",
  VALIDATOR_TYPE_NUMBER = "NUMBER",
}

export interface Validator {
  type: ValidatorTypes, 
  val?: number
}

let myVal: Validator

export const VALIDATOR_REQUIRE = () => ({ type: ValidatorTypes.VALIDATOR_TYPE_REQUIRE });
export const VALIDATOR_FILE = () => ({ type: ValidatorTypes.VALIDATOR_TYPE_FILE });
export const VALIDATOR_MINLENGTH = (val?:number) => ({ type: ValidatorTypes.VALIDATOR_TYPE_MINLENGTH, val: val });
export const VALIDATOR_MAXLENGTH = (val?:number) => ({ type: ValidatorTypes.VALIDATOR_TYPE_MAXLENGTH, val: val });
export const VALIDATOR_MIN = (val?:number) => ({ type: ValidatorTypes.VALIDATOR_TYPE_MIN, val: val });
export const VALIDATOR_MAX = (val?:number) => ({ type: ValidatorTypes.VALIDATOR_TYPE_MAX, val: val });
export const VALIDATOR_EMAIL = () => ({ type: ValidatorTypes.VALIDATOR_TYPE_EMAIL });
export const VALIDATOR_NUMBER = () => ({ type: ValidatorTypes.VALIDATOR_TYPE_NUMBER });

export const validate = (value: string , validators:Validator[] ) => {
  
  let isValid = true;
  for (const validator of validators) {
   
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_REQUIRE) {
      isValid = isValid && value.trim().length > 0;
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_MINLENGTH) {
      isValid = isValid && value.trim().length >= validator.val!;
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_MAXLENGTH) {
      isValid = isValid && value.trim().length <= validator.val!;
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_MIN) {
      isValid = isValid && +value >= validator.val!;
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_MAX) {
      isValid = isValid && +value <= validator.val!;
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_EMAIL) {
      
      isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
    }
    if (validator.type === ValidatorTypes.VALIDATOR_TYPE_NUMBER) {
      isValid =
        isValid &&
        /^\s*[+-]?(\d+|\.\d+|\d+\.\d+|\d+\.)(e[+-]?\d+)?\s*$/.test(value);
    }
  }
  return isValid;
};
