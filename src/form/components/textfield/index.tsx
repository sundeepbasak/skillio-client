import classNames from "classnames";

interface IInputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  value: string;
}
const index = ({
  type,
  name,
  id,
  placeholder,
  onChange,
  value,
}: IInputProps) => {
  const textFieldCLass = classNames(
    "bg-gray-50",
    "border border-gray-300",
    "text-gray-700",
    "sm:text-sm",
    "rounded-5",
    "focus:ring-primary-600",
    "focus:border-primary-600",
    "block",
    "w-full",
    "p-2.5",
    "dark:bg-gray-500 ",
    "dark:border-gray-400",
    "dark:placeholder-gray-300",
    "dark:text-white ",
    "dark:focus:ring-blubg-gray-50",
    "border border-gray-300",
    "text-gray-700",
    "sm:text-sm ",
    "rounded-lg",
    "focus:ring-primary-600",
    "focus:border-primary-600",
    "block w-367"
  );
  return (
    <div className="flex items-center justify-center mx-1 md:h-1/3 md:py-2">
      <input
        type={type}
        name={name}
        id={id}
        className={textFieldCLass}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default index;
