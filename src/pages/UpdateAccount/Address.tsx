import InputForm from "@/components/InputForm";
import SelectForm from "@/components/SelectForm";
import { useEffect, useState } from "react";

interface Province {
  nombre: string;
}

interface Locality {
  nombre: string;
}

const Address = ({ register, errors, watch}: any) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [provinces, setProvinces] = useState<string[]>([]);
  const [localities, setLocalities] = useState<string[]>([]);

  const selectedCountry ="Argentina";
  const selectedProvince = watch("province");


  useEffect(() => {
    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data: any[] = await response.json();                
            console.log('paises', data)
            const countryNames = data.map(country => country.name.common).sort();
            setCountries(countryNames);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    fetchCountries();
}, []);

useEffect(() => {
  if (selectedCountry === "Argentina") {
      const fetchProvinces = async () => {
          try {
              const response = await fetch('https://apis.datos.gob.ar/georef/api/provincias');
              const data = await response.json();
              const provinceNames = data.provincias.map((province: Province) => province.nombre);
              setProvinces(provinceNames);
              setLocalities([]); // Reset localities when country changes
          } catch (error) {
              console.error("Error fetching provinces:", error);
          }
      };

      fetchProvinces();
  } else {
      setProvinces([]);
      setLocalities([]);
  }
}, [selectedCountry]);


useEffect(() => {
  if (selectedProvince) {
      const fetchLocalities = async () => {
          try {
              const response = await fetch(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${selectedProvince}`);
              const data = await response.json();
              const localityNames = data.localidades.map((locality: Locality) => locality.nombre);
              setLocalities(localityNames);
          } catch (error) {
              console.error("Error fetching localities:", error);
          }
      };

      fetchLocalities();
  } else {
      setLocalities([]);
  }
}, [selectedProvince]);

  return (
    <>
      <div>
        <SelectForm
          id={"country"}
          register={register}
          errors={errors}
          fieldName={"country"}
          placeholder={"País"}
          label={"País"}
          data={countries}
          itemValue="nombre"
          itemDescription="nombre"          
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
         {selectedCountry === "Argentina" && (
          <div>
            <SelectForm
              id={"province"}
              register={register}
              errors={errors}
              fieldName={"province"}
              placeholder={"Provincia"}
              label={"Provincia"}
              data={provinces}
              itemValue="nombre"
              itemDescription="nombre"
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
            <SelectForm
              id={"locality"}
              register={register}
              errors={errors}
              fieldName={"locality"}
              placeholder={"Localidad"}
              label={"Localidad"}
              data={localities}
              itemValue="nombre"
              itemDescription="nombre"
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

          </div>
         )}
        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"street"}
          placeholder={"Calle"}
          label={"Calle"}
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
          fieldName={"number"}
          placeholder={"Número"}
          label={"Número"}
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

export default Address;
