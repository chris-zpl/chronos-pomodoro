import type { ToastContentProps } from "react-toastify";

type CustomNotificationProps = ToastContentProps<{
  title: string;
  content: string;
}>;

export function WithActions({ closeToast, data }: CustomNotificationProps) {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-zinc-800 text-sm font-semibold flex items-center gap-1">
        {data.title}
      </h3>

      <div className="pl-5 mt-2">
        <p className="text-sm">{data.content}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={()=>closeToast(true)}
            className="transition-all border-none text-sm font-semibold bg-transparent border rounded-md py-2 text-indigo-600 active:scale-[.95] "
          >
            Undo
          </button>
          <button
            onClick={()=>closeToast(false)}
            className="transition-all border-none text-sm bg-transparent border  font-semibold rounded-md py-2 text-grey-400 active:scale-[.95] "
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}