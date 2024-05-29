import InputForm from "@/components/InputForm";
import TextAreaForm from "@/components/TextAreaForm";

const History = ({ register, errors}: any) => {
  return (
    <>
    

    <InputForm
        id={"search-field-select-search-value"}
        register={register}
        errors={errors}
        fieldName={"phoneNumber"}
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
      <TextAreaForm
      id={"search-field-select-search-value"}
      register={register}
      errors={errors}
      fieldName={"history"}
      placeholder={"Historia"}
      label={"Historia"}
      lines={10}
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
    </>
  );
};

export default History;
