import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";

interface Props {
  onView?: VoidFunction;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
}
export const TableActions = ({ onDelete, onEdit, onView }: Partial<Props>) => {
  return (
    <div className="flex w-full gap-2">
      {onView != null && (
        <Button
          variant="outline"
          color="inherit"
          icon={<Icon icon="View" size={24} />}
          onClick={onView}
          className="w-8 h-8 p-0 border-0"
        />
      )}
      {onEdit != null && (
        <Button
          variant="outline"
          color="inherit"
          icon={<Icon icon="PencilEdit02" color="inherit" size={24} />}
          onClick={onEdit}
          className="w-8 h-8 p-0 border-0"
        />
      )}
      {onDelete != null && (
        <Button
          variant="outline"
          color="error"
          icon={<Icon icon="Delete02" color="inherit" size={24} />}
          onClick={onDelete}
          className="w-8 h-8 p-0 border-0"
        />
      )}
    </div>
  );
};
