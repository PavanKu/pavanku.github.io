'use client';

import { useEffect, useRef, useState } from "react";
import ActionPanel from "./components/ActionPanel";
import TimeValue from "./components/TimeValue";

export type Status = "STOP" | "START" | "RESET" | "PAUSED" | "RESUMED";

const Timer:React.FC<{}> = () => {
    const [status, setStatus] = useState<Status>("STOP");
    const [timeElapsed, setTimeElapsed] = useState<number>(0);

    const intervalId = useRef<null|number>(null);

    const handleStatusChange = (state: Status) => {
        setStatus(state);
    };

    useEffect(() => {
        if(status === 'START' || status === 'RESUMED') {
            intervalId.current = setInterval(() => {
                setTimeElapsed(time => time + 1);
            }, 1000) as unknown as number;
        } else if(status === 'PAUSED' || status === 'STOP') {
            if(intervalId.current != null) {
                clearInterval(intervalId.current);
            }
        } else if(status === 'RESET') {
            setTimeElapsed(0);
        }
        
    }, [status]);
    return (
        <div className="bg-blue-50 mx-auto max-w-md h-screen px-9 py-12 flex flex-col justify-around">
            <ActionPanel onStatusChange={handleStatusChange} status={status} />
            <TimeValue value={timeElapsed} />
        </div>
    );
}

export default Timer;