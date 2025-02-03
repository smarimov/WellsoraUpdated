import { IOption } from "@/types";
import { Icon } from "../Icon";

interface Props<T extends string | number, M extends object> {
  option: IOption<T, M>;
  onDelete: (option: IOption<T, M>) => void;
  getValue?: (option: IOption<T, M>) => void;
}

export const AutocompleteChip = <T extends string | number, M extends object>({
  onDelete,
  option,
  getValue,
}: Props<T, M>) => {
  return (
    <div>
      <div className="border bg-Light rounded-sm px-[6px] py-[3px] flex items-center gap-2 text-sm">
        {getValue?.(option) ?? option.label}
        <div
          className="flex items-center justify-center w-5 rounded-full cursor-pointer hover:bg-red-400 child:child-hover:stroke-white"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={() => onDelete(option)}
        >
          <Icon icon="Cancel01" size={16} />
        </div>
      </div>
    </div>
  );
};
