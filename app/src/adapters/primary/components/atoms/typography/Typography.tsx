import './Typography.styles.scss';

interface TypographyProps {
    text: string;
    className?: string;
}

const Typography = ({ text, className }: TypographyProps): JSX.Element => {
    return <div className={`typography ${className ?? ''}`}>{text}</div>;
};

export default Typography;
