import classNames from "classnames";

interface IButtonProps {
  name: string;
}

const Button = ({ name }: IButtonProps) => {
  const buttonClasses = classNames(
    "w-full",
    "text-white",
    " bg-blue-700",
    "hover:bg-blue-800 ",
    "focus:ring-4",
    "focus:ring-blue-300",
    "font-medium ",
    "rounded-lg",
    "text-sm",
    "px-5",
    "py-2.5",
    "mr-2",
    "mb-2",
    "dark:bg-blue-600",
    " focus:outline-none",
    " dark:focus:ring-blue-800"
  );

  return (
    <>
      <button type="submit" className={buttonClasses}>
        {name}
      </button>
    </>
  );
};

export default Button;
