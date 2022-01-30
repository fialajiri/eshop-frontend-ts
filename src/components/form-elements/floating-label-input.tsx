import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export interface FloatingLabelInputProps {
  id: string;
  type: string;
  placeholder?: string;
  label: string;
  value: string | number;
  setValue: Dispatch<SetStateAction<string>>;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (props.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, []);

  const handleTextChange = (inputValue: string) => {
    props.setValue(inputValue);

    if (inputValue !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="floating-label-input">
      <input
        className="floating-label-input__input"
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <label
        className={
          isActive
            ? "floating-label-input__label floating-label-input__label--active"
            : "floating-label-input__label"
        }
        htmlFor={props.id}
      >
        {props.label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
