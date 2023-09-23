import { FormEvent, useCallback, useMemo, useState } from "react";
import styles from './Select.module.css';
import { SelectedOptions } from "./SelectedOptions";
import { DropDownBtn } from "./DownArrowBtn";
import { ResultList } from "./ResultList";

export type Option = {
    value: string,
    label: string
}
export type Action = "select"|"unselect";

type SelectProps = {
    options: Option[],
    isLoading: boolean | null,
    error: string | null,
    selected: Option[],
    onAction: (action: Action, value:string) => void
}

export function Select(props:SelectProps) {
    const [query, setQuery] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { options, isLoading, error, onAction, selected } = props;

    const onQueryChange = useCallback((event: FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;
        setQuery(value);
    }, []);

    const toggleDropdown = useCallback(() => {
        setIsOpen((isOpen) => !isOpen);
    }, []);

    const removeSelectionHandler = useCallback((option: string) => {
        onAction('unselect', option);
    }, [onAction])

    const addSelectionHandler = useCallback((option: string) => {
        onAction('select', option);
    }, [onAction]);

    const selectedValues = useMemo(() => {
        return selected.map(o => o.value);
    }, [selected])

    const availableOptions = useMemo(() => {
        return options.filter(r => {
            return !selectedValues.includes(r.value);
        })
    }, [selectedValues, options])

    return (
        <>
            <div className={styles.inputBox}>
                <SelectedOptions options={selected} onRemoveSelected={removeSelectionHandler} />
                <input value={query} onChange={onQueryChange}/>
                <DropDownBtn status={isOpen} onToggle={toggleDropdown} />
            </div>
            {isOpen && <ResultList options={availableOptions} onSelected={addSelectionHandler}/>}
        </>
    )

}