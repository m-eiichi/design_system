import { z } from "zod";
import { useForm, UseFormProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const useCustomForm = <T extends z.ZodSchema>(
  schema: T,
  options?: Omit<UseFormProps<any>, "resolver">,
) => {
  type Schema = z.infer<typeof schema>;

  const methods = useForm<Schema>({
    resolver: zodResolver(schema),
    ...options,
  });

  return methods;
};
