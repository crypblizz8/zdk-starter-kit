const SearchInput = ({ type, value, setValue }) => {
  const ifContractType = type === "contract";

  return (
    <div className="my-8">
      <label
        htmlFor="email"
        className="block text-xl font-medium text-gray-700"
      >
        {ifContractType ? "Collection Address" : "Token ID"}
      </label>
      <div className="mt-1">
        <input
          type={ifContractType ? "text" : "number"}
          name={ifContractType ? "collection" : "tokenID"}
          id={ifContractType ? "collection" : "tokenID"}
          className="shadow-sm focus:ring-indigo-500 text-xl focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2"
          placeholder={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
