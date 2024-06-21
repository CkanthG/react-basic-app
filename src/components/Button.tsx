interface Props {
  children: string;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onButtonCustomClick: () => void;
}

const Button = ({
  children,
  color = "primary",
  onButtonCustomClick,
}: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onButtonCustomClick}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
