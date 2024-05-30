"use client";
import ImageForm from "@/components/ImageForm";
import InputForm from "@/components/InputForm";

const Name = ({ register, errors, setValue, profileImg }: any) => {
  return (
    <>
      <div className="overflow-hidden rounded-full flex items-center justify-center">
        <img
          src={profileImg}
          alt="profileImg"
          className="object-cover w-32 h-32"
        />
      </div>
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
        id="profileImg"
        register={register}
        errors={errors}
        setValue={setValue}
        fieldName="profileImg"
        fieldBase64="profileImgBase64"
        label="Profile Picture"
        required={false}
      />
    </>
  );
};

export default Name;
