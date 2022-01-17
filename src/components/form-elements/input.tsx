import React, { useReducer, useEffect } from "react";
import { validate } from "../../validators/validators";
import { Validator } from "../../validators/validators";


enum ActionTypes {
  CHANGE = "CHANGE",
  TOUCH = "TOUCH",
}

interface InputAction {
  type: ActionTypes;
  value?: string;
  validators?: Validator[];
}

interface InputState {
  value?: string;
  isValid: boolean;
  isTouched: boolean;
}

const inputReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case ActionTypes.CHANGE:   
       
      return {
        ...state,
        value: action.value,
        isValid: validate(action.value!, action.validators!),
      };
    case ActionTypes.TOUCH:
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

export interface IInputProps {
  className?: string;
  initialValue?: string;
  initialValid?: boolean;
  placeholder?: string;
  readonly?: boolean;
  type?: string;
  rows?: number;
  label?: string;
  errorText?: string;
  validators?: Validator[];
  id: string;
  element: "input" | "textarea";
  onInput: (id: string, value: string, isValid: boolean) => void;
}

const Input: React.FC<IInputProps> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false,
    isTouched: false,
  });

  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {    
    
    onInput(id, value!, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    dispatch({
      type: ActionTypes.CHANGE,
      value: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({ type: ActionTypes.TOUCH });
  };


  let element: JSX.Element;

  if (props.element === "input") {
    element = (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        readOnly={props.readonly}
      />
    );
  }

  if (props.element === "textarea") {
    element = (
      <textarea
        id={props.id}
        rows={props.rows}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        readOnly={props.readonly}
      />
    );
  }

  return (
    <div
      className={`${props.className} form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element!}

      <p
        className={
          !inputState.isValid && inputState.isTouched
            ? `form-control_par--invalid`
            : `form-control_par`
        }
      >
        {props.errorText}
      </p>
    </div>
  );
};

export default Input;
