import { useMemo } from "react";

export const TIME_DELIMITER = ":";

type TimeValueProps = {
    value: number
}

const convertToString = (num: number) => {
    if(num < 10) return `0${num}`;
    return `${num}`;
}

const TimeValue: React.FC<TimeValueProps> = ({value}: TimeValueProps) => {

    const [hr, mm, ss] = useMemo<[string, string, string]>(() => {
        let hr = 0;
        let mm = 0;
        let ss = 0;

        let val = value;
        hr = Math.floor(val/3600);
        val = val - hr*3600;
        if(val > 0) {
            mm = Math.floor(val/60);
            val = val - mm*60;
            if(val > 0) {
                ss = val;
            }
        }

        return [convertToString(hr), convertToString(mm), convertToString(ss)];
    }, [value]);

    return (
        <div className="text-6xl text-center tabular-nums">
            <span>{hr}</span>
            <span>{TIME_DELIMITER}</span>
            <span>{mm}</span>
            <span>{TIME_DELIMITER}</span>
            <span>{ss}</span>
        </div>
    );
}

export default TimeValue;