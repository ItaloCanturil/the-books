import { AuthorForm } from "./authorForm";
import { CustomDialog } from "../ui/custom-dialog";

export function CreateAuthorDialog() {
  return (
    <CustomDialog
      title="Adicionar Autor"
      triggerLabel="+"
      tooltip="Adicionar autor"
      onClose={() => console.log("das")}
    >
      <AuthorForm afterSave={() => console.log("save")} />
    </CustomDialog>
  )
}