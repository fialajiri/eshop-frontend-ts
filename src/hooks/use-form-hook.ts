import { useCallback, useReducer } from "react";

enum FormHookTypes {
  INPUT_CHANGE = "INPUT_CHANGE",
  SET_DATA = "SET_DATA",
}

interface InputChangeAction {
  type: FormHookTypes.INPUT_CHANGE;
  value: string;
  isValid: boolean;
  inputId: string;
}

interface DataSetAction {
  type: FormHookTypes.SET_DATA;
  inputs: any;
  formIsValid: boolean;
}

interface FormInput {
  [inputId: string]: {
    value: string;
    isValid: boolean;
  };
}

interface FormHookState {
  inputs: FormInput;
  isValid: boolean;
}

const formReducer = (
  state: FormHookState,
  action: InputChangeAction | DataSetAction
): FormHookState => {
  switch (action.type) {
    case FormHookTypes.INPUT_CHANGE:
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (!state.inputs[inputId]) {
          continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,

        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case FormHookTypes.SET_DATA:
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (
  initialInputs: FormInput,
  initialFormValidity: boolean
): [
  FormHookState,
  (id: string, value: string, isValid: boolean) => void,
  (inputData: any, formValidity: boolean) => void
] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback(
    (id: string, value: string, isValid: boolean) => {
      dispatch({
        type: FormHookTypes.INPUT_CHANGE,
        value,
        isValid,
        inputId: id,
      });
    },
    []
  );

  const setFormData = useCallback((inputData: any, formValidity: boolean) => {
    dispatch({
      type: FormHookTypes.SET_DATA,
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
