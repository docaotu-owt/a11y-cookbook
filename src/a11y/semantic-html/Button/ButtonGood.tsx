export function ButtonGood() {
  return (
    <button
      className="bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      onClick={() => {
        console.log("Click");
      }}
    >
      Save
    </button>
  );
}
