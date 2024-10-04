// components/ui/input.tsx
const Input = ({ ...props }) => {
    return (
      <input
        {...props}
        className="px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-indigo-200"
      />
    );
  };
  
  export default Input; // Ensure it's exported as default
  