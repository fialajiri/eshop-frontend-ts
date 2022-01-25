import React, { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import Button from "../ui-elements/button";

export interface MultipleImageUploadProps {
  isValid: boolean; 
  maxFiles: number;
  errorText: string;
  className?: string;
  inputId: string;
  setImages: (images: File[]) => void;
  setIsValid: (isValid: boolean) => void;
}

const MultipleImageUpload: React.FC<MultipleImageUploadProps> = (props) => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const filePickerRef = useRef<any>(null);

  const clearImageSelection = () => {
    props.setImages([]);
    setSelectedImages([])
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > props.maxFiles) {
      alert(`Vyberte maximálně ${props.maxFiles} soubory`);
      filePickerRef.current.value = "";
      clearImageSelection();
    } else if (event.target.files && event.target.files.length <= props.maxFiles) {
      const arrayToUpload = Array.from(event.target.files);
      const fileArray = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      
      setSelectedImages(fileArray)
      props.setImages(arrayToUpload);
      props.setIsValid(true);
    } else {
      props.setIsValid(false);
    }
  };

  const renderPhotos = (source: string[]) => {
    return source.map((photo) => {
      return (
        <Image src={photo} key={photo} height={150} width={225} alt="Obrázek v galerii" />
      );
    });
  };

  return (
    <Fragment>
      <div className={`${props.className} multiple-image-upload__container`}>
        <input
          id={props.inputId}
          style={{ display: "none" }}
          ref={filePickerRef}
          type="file"
          accept=".jpg,.png,.jpeg"
          multiple
          onChange={pickerHandler}
        />

        <div className="multiple-image-upload__form">
          <div className="multiple-image-upload__form__preview">
            {selectedImages && renderPhotos(selectedImages)}
            {!selectedImages && <p>vyberte obrázky (typu png/jpg/jpeg) </p>}
          </div>
          <Button
            className="multiple-image-upload__form__button"
            type="button"
            size="small"
            inverse
            onClick={pickImageHandler}
          >
            Vyberte obrázky
          </Button>
        </div>
        {!props.isValid && <p>{props.errorText}</p>}
      </div>
    </Fragment>
  );
};

export default MultipleImageUpload;
