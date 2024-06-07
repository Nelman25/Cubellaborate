import AddButton from "../style/AddButton.css";
export default function Button({ ...props }) {
  return (
    // <button
    //   className=''
    //   {...props}
    // >
    //   {" "}
    //   {children}
    // </button>
    <button type="button" class="button" {...props}>
      {" "}
      <span class="button__text">+ Project</span>
      <span class="button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          class="svg"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
  );
}
