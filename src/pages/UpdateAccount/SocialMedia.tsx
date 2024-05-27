import InputForm from "@/components/InputForm";

const SocialMedia = ({ register, errors}: any) => {
    return(
        <>
        <div>
        <InputForm
          id={"search-field-select-search-value"}
          register={register}
          errors={errors}
          fieldName={"facebookUrl"}
          placeholder={"Facebook"}
          label={"Facebook"}
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
          fieldName={"instagramUrl"}
          placeholder={"Instagram"}
          label={"Instagram"}
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
          fieldName={"linkedinUrl"}
          placeholder={"LinkedIn"}
          label={"LinkedIn"}
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

export default SocialMedia;