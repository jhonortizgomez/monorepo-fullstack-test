export const Input = ({ label, textError, type, name, placeholder, required= true }: InputProps) => {
  return (
    <>
      <label htmlFor={ name } className="block text-left font-medium text-white mb-1">{ label }</label>
      <input 
        className="bg-white border-0 rounded-3xl py-2 px-4 text-black" 
        type={ type } 
        id={ name } 
        name={ name } 
        placeholder={ placeholder }
        required={ required }
      />
      {!!textError && <p className="text-red-500 text-sm mt-1">{ textError }</p>}
  </>
  )
};

type InputProps = {
  label: string;
  textError?: string;
  type?: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
  required?: boolean;
}