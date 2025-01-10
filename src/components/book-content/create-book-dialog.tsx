import { BookForm } from "./bookForm";
import { CustomDialog } from "../ui/custom-dialog";

export function CreateBookDialog() {
  return (
    <CustomDialog
      title="Adicionar Autor"
      triggerLabel="+"
      tooltip="Adicionar autor"
      onClose={() => console.log("das")}
    >
      <BookForm afterSave={() => console.log("save")} />
    </CustomDialog>
  )
}