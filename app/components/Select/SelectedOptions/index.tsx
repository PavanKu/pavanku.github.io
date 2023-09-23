import { Option } from "..";
import styles from "../Select.module.css";
import { Pill } from "./Pill";

type SelectedOptionsProps = {
  options: Option[];
  onRemoveSelected: (option: string) => void;
};

export function SelectedOptions(props: SelectedOptionsProps) {
  const { options, onRemoveSelected } = props;
  return (
    <div className={styles.selectedContainer}>
      {options.map((option) => {
        return (
          <Pill
            key={option.value}
            label={option.label}
            onBtnClick={() => onRemoveSelected(option.value)}
          />
        );
      })}
    </div>
  );
}
