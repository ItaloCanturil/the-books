import { Button, Dialog, Flex, IconButton, Tooltip } from "@radix-ui/themes"
import React, { ReactNode, useState } from "react"
import { CloseIcon } from "./Icons/icons";

type CustomDialogProps = {
  title: string;
  triggerLabel: string | ReactNode;
  tooltip?: string;
  children: ReactNode;
  onClose?: () => void;
}


export function CustomDialog({ title, triggerLabel, tooltip, children, onClose }: CustomDialogProps) {
  const [open, setOpen] = useState(false);
  
  const handleActionComplete = () => {
    if (onClose) onClose();
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {tooltip ? (
        <Tooltip content={tooltip}>
          <Dialog.Trigger>
              <Button radius="full">{triggerLabel}</Button>
          </Dialog.Trigger>
        </Tooltip>
      ) : (
        <Dialog.Trigger>
            <Button radius="full">{triggerLabel}</Button>
        </Dialog.Trigger>
      )}
      
      <Dialog.Content>
        <Flex justify={"between"}>
          <Dialog.Title>{title}</Dialog.Title>

          <Dialog.Close>
            <IconButton size="1" variant="soft">
              <CloseIcon></CloseIcon>
            </IconButton>
          </Dialog.Close>
        </Flex>

        {React.cloneElement(children as React.ReactElement, { afterSave: handleActionComplete })}
      </Dialog.Content>
    </Dialog.Root>
  )
}