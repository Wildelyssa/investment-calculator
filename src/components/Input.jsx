const Input = ({
  id,
  label,
  value,
  onChange,
  type = "number",
  required = true,
}) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        value={value}
        type={type}
        required={required}
        onChange={(e) => {
          onChange(id, e.target.value);
        }}
      />
    </p>
  );
};

export default Input;
