import InputForm from "@/components/InputForm";

const History = ({ register, errors}: any) => {
  return (
    <>
      <div>
        <label htmlFor="miHistoria" className="block text-sm font-medium">
          Mi Historia
        </label>
        <textarea
          id="miHistoria"
          placeholder="Cuenta tu historia"
          {...register("history")}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          rows={4}
        />
        {errors.history && (
          <span className="text-red-600 text-sm">
            {errors.history?.message}
          </span>
        )}
      </div>
    </>
  );
};

export default History;
