import './button.scss';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </button>
  );
};

export const OutlineButton = ({
  className,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <Button
      className={`btn-outline ${className}`}
      onClick={onClick ? () => onClick() : undefined}
    >
      {children}
    </Button>
  );
};

export default Button;
