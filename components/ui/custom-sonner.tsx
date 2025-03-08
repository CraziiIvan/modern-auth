import { toast } from "sonner";
import { Button } from "./button";
import { CircleAlertIcon, CircleCheckIcon, XIcon } from "lucide-react";

type TPropsCustomSonner = {
  t: string | number;
  type: "success" | "error";
  message: string;
};

export function CustomSonner({ type, message, t }: TPropsCustomSonner) {
  return (
    <div className="bg-[#0a0a0a] z-50 max-w-[400px] rounded-md border border-border px-4 py-3 shadow-lg ">
      <div className="flex gap-2">
        <p className="grow text-sm">
          {type === "success" && (
            <CircleCheckIcon
              className="me-3 -mt-0.5 inline-flex text-emerald-500"
              size={16}
              aria-hidden="true"
            />
          )}
          {type === "error" && (
            <CircleAlertIcon
              className="me-3 -mt-0.5 inline-flex text-red-500"
              size={16}
              aria-hidden="true"
            />
          )}
          {message}
        </p>
        <Button
          variant="ghost"
          className="group -my-1.5 -me-2 size-8 shrink-0 p-0 hover:bg-transparent"
          aria-label="Close notification"
          onClick={() => toast.dismiss(t)}
        >
          <XIcon
            size={16}
            className="opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </Button>
      </div>
    </div>
  );
}
