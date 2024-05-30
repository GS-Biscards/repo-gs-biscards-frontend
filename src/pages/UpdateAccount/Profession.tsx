import InputForm from "@/components/InputForm";
import SelectForm from "@/components/SelectForm";
import { useProfessions } from "@/hooks/useProfessions";

const Profession = ({ register, errors, tipo }: any) => {
  const { professions } = useProfessions();
  return (
    <>
      <div>
        {tipo === "Persona Física" ? (
          <div>
            <SelectForm
              id="profession"
              register={register}
              errors={errors}
              fieldName="profession"
              label="Profesión"
              placeholder="Profesiónn"
              data={professions}
              itemValue="id"
              itemDescription="name"
              styleLabel={"text-sm font-medium"}
              style={{
                marginTop: "4px",
                width: "100%",
                padding: "8px",
                borderWidth: "1px",
                borderColor: "rgb(209 213 219)",
                borderRadius: "4px",
              }}
              classprop={"w-[100%]"}
            />
            {/* <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"profession"}
              placeholder={"Profesión"}
              label={"Profesión"}
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
            /> */}
            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"rol_cargo"}
              placeholder={"Rol o Cargo"}
              label={"Rol o Cargo"}
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

          </div>):( 
          <div>

            <InputForm
              id={"search-field-select-search-value"}
              register={register}
              errors={errors}
              fieldName={"rubro"}
              placeholder={"Rubro"}
              label={"Rubro"}
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
              fieldName={"servicio_comercio"}
              placeholder={"Servicio o Comercio"}
              label={"Servicio o Comercio"}
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
          </div>)}
      </div>
    </>
  );
};

export default Profession;
