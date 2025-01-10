import { BookMetaData } from "types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { useLibraryContext } from "contexts/LibraryContext";
import { useToast } from "contexts/ToastContext";
import { useState } from "react";
import { Button, Checkbox, Flex, Select, Text, TextField } from "@radix-ui/themes";

const bookDialogSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  author: z.string().optional(),
  pages: z.union([z.coerce.number(), z.undefined()]),
});

type BookDialogSchema = z.infer<typeof bookDialogSchema>;


export function BookForm({ book, afterSave}: {book?:BookMetaData, afterSave: ()=> void}) {
  const { addBook, authorModel } = useLibraryContext();
  const { showToast } = useToast();
  const [hasAuthor, setHasAuthor] = useState<boolean>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm<BookDialogSchema>({
    resolver: zodResolver(bookDialogSchema),
  });

  const handleAddBook: SubmitHandler<BookDialogSchema> = (data) => {
    const author = authorModel.find((a) => a.name === data.author);
    const authorId = author ? author.id : - 1;
    data.author = author ? author.name : data.author;

    addBook({ ...data, author_id: authorId });
    showToast("Livro adicionado", "success");
    afterSave();
  };

  const handleHasAuthors = (e: any) => {
    const checked = e.target.ariaChecked === "true" ? true : false;

    setHasAuthor(!checked);
  };

  return (
    <form onSubmit={handleSubmit(handleAddBook)}>
      <Flex direction="column" gap="3">
        <label>
          <Text as="div" mb="1" weight="bold">
            Nome:
          </Text>
          <TextField.Root
            placeholder="Nome do livro"
            {...register("name")}
            defaultValue={book?.name}
          />
          {errors.name && (
            <Text as="div" color="red" size="2">
              {errors.name.message}
            </Text>
          )}
        </label>

        <label>
          <Text as="div" mb="1" weight="bold">
            Autor:
          </Text>
          <Flex direction="column" gap="2">
            {authorModel.length > 0  && !hasAuthor && (
              <Select.Root 
                onValueChange={(value) => {
                  setValue("author", value)
                }}
              >
                <Select.Trigger placeholder="Autores"></Select.Trigger>

                <Select.Content>
                  {authorModel.map((author) => (
                    <Select.Item key={author.id} value={author.name}>
                      {author.name}
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Root>
            )}

            {hasAuthor && (
              <TextField.Root
                placeholder="Nome do autor"
                {...register("author")}
                defaultValue={book?.author}
              />
            )}

            <Text as="label" size="2">
              <Flex gap="2">
                <Checkbox onClick={handleHasAuthors} />
                Adicionar outro autor que não está na lista
              </Flex>
            </Text>

            
          </Flex>
        </label>
        <label>
          <Text as="div" mb="1" weight="bold">
            Páginas:
          </Text>
          <TextField.Root
            placeholder="Quantidade de páginas"
            {...register("pages")}
            defaultValue={book?.pages}
          />
        </label>

        <Button type="submit">
          Adicionar
        </Button>
      </Flex>
    </form>
  )
}