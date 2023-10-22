import { Status } from "../page";

type ActionPanelProps = {
  status: Status;
  onStatusChange: (status: Status) => void;
};
const ActionPanel: React.FC<ActionPanelProps> = ({
  onStatusChange,
  status,
}: ActionPanelProps) => {
  return (
    <div className="flex max-w-md items-center justify-between">
      <button disabled={status==='START'} type="button" className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300" onClick={() => onStatusChange('START')}>Start</button>
      <button disabled={status==='PAUSED'} type="button" className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300" onClick={() => onStatusChange('PAUSED')}>Pause</button>
      <button disabled={status==='START'} type="button" className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300" onClick={() => onStatusChange('RESUMED')}>Resume</button>
      <button disabled={status!=='START'&& status!=='RESUMED'} type="button" className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300" onClick={() => onStatusChange('STOP')}>Stop</button>
      <button disabled={status!=='STOP'} type="button" className="rounded-lg border border-blue-500 bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-blue-700 hover:bg-blue-700 focus:ring focus:ring-blue-200 disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300" onClick={() => onStatusChange('RESET')}>Reset</button>
    </div>
  );
};

export default ActionPanel;
