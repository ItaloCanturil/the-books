import { AlertDialog, Button, Flex } from "@radix-ui/themes";

type RemoveAlertProps = {
  label: string;
  _action: () => void;
}

export function RemoveAlertDialog ({ label, _action}: RemoveAlertProps) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button color="red">Excluir</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Content maxWidth="400px">
        <AlertDialog.Title>Excluir { label }</AlertDialog.Title>
        <AlertDialog.Description>
          Você tem certeza? Essa ação não pode ser desfeita
        </AlertDialog.Description>

        <Flex gap="3" mt="4">
          <AlertDialog.Cancel>
            <Button variant="soft">Cancelar</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant="soft" color="red" onClick={_action}>Excluir</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  )
}