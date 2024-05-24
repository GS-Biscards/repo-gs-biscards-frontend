"use client";
import ImageForm from "@/components/ImageForm";
import InputForm from "@/components/InputForm";

const Name = ({ register, errors, setValue }: any) => {
  return (
    <>
      <div>
        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"firstName"}
          placeholder={"Nombre"}
          label={"Nombre"}
          styleLabel={"text-sm font-medium"}
          style={{
            marginTop: "4px",
            width: "100%",
            padding: "8px",
            borderWidth: "1px",
            borderColor: "rgb(209 213 219)",
            borderRadius: "4px",
          }}
          required={false}
          classprop={"w-[100%]"}
        />
        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"lastName"}
          placeholder={"Apellido"}
          label={"Apellido"}
          styleLabel={"text-sm font-medium"}
          style={{
            marginTop: "4px",
            width: "100%",
            padding: "8px",
            borderWidth: "1px",
            borderColor: "rgb(209 213 219)",
            borderRadius: "4px",
          }}
          required={false}
          classprop={"w-[100%]"}
        />
        <ImageForm
          id="profileImage"
          register={register}
          errors={errors}
          setValue={setValue}
          fieldName="profileImage"
          fieldBase64="profileImageBase64"
          label="Profile Picture"
        />

        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"phoneNumbre"}
          placeholder={"Teléfono"}
          label={"Teléfono"}
          styleLabel={"text-sm font-medium"}
          style={{
            marginTop: "4px",
            width: "100%",
            padding: "8px",
            borderWidth: "1px",
            borderColor: "rgb(209 213 219)",
            borderRadius: "4px",
          }}
          required={false}
          classprop={"w-[100%]"}
        />
      </div>
    </>
  );
};

export default Name;
