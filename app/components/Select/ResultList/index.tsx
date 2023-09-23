import { Option } from ".."

type ResultListProps = {
    options: Option[],
    onSelected: (option: string) => void
}
export function ResultList(props: ResultListProps) {
    const { options, onSelected } = props;
    return (
        <ul>
            {options.map(option => {
                return <li key={option.value} onClick={() => onSelected(option.value)}>{option.label}</li>
            })}
        </ul>
    )
}