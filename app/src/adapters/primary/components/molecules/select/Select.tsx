import { type ChangeEvent, useCallback } from 'react';

interface SelectProps {
    options: { id: string; value: string }[];
    onSelect: (id: string) => void;
    selected?: string;
}

const Select = ({ selected, options, onSelect }: SelectProps): JSX.Element => {
    const handleSelect = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            onSelect(e.target.value);
        },
        [onSelect],
    );

    return (
        <select value={selected} onChange={handleSelect}>
            {options.map((option) => (
                <option key={option.id} value={option.id}>
                    {option.value}
                </option>
            ))}
        </select>
    );
};

export default Select;
