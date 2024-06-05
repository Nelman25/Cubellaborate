import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 rounded-xl border-yellow-900 text-gray-900";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-gray-100">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} {...props} ref={ref} />
      ) : (
        <input className={classes} {...props} ref={ref} />
      )}
    </p>
  );
});
export default Input;
