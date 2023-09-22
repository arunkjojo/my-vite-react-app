import './Button.css';
type buttonType = "button" | "submit" | "reset";
interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;

    buttonType?: buttonType;
}
const Button = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    buttonType = "button",
    ...props
}: ButtonProps) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        <button
            type={buttonType}
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    )
}

export default Button
