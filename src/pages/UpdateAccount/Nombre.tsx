import InputForm from "@/components/InputForm";
import { UpdUserFree } from "@/models/userFree.model";
import { SubmitHandler } from "react-hook-form";

const Nombre = ({register, errors}: any) => {
  return (
    <>
      <h1>Nombre</h1>
      <div>
        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"firstName"}
          placeholder={"Nombre"}
          label={'Nombre'}
          style={{ height: "52px", borderRadius: "20px" }}
          required={false}
          classprop={"w-[100%]"}
        />
      </div>
    </>
  );
};

export default Nombre;
