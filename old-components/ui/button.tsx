// components/ui/button.tsx
const Button = ({ ...props }) => {
    return (
      <button
        {...props}
        className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
      >
      </button>
    );
  };
  
  export default Button; // Ensure it's exported as default
  