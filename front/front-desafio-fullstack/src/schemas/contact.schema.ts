import { z } from "zod";

export const ContactSchema = z.object({
  id: z.string(),
  name: z.string().nonempty("nome é obrigatório"),
  email: z.string().nonempty("email é obrigatório"),
  telefone: z.string().nonempty("telefone é obrigatório"),
});

export const AddContactSchema = ContactSchema.omit({
  id: true,
});

export const UpdateContactSchema = z.object({
  name: z.string(),
  email: z.string(),
  telefone: z.string(),
});

export interface CurrentContactType extends ContactData {}

export type ContactContextType = {
  currentContact: CurrentContactType;
  setCurrentContact: (
    cm: Partial<CurrentContactType>,
    replace?: boolean
  ) => void;
  contacts: ContactData[];
};

export type ContactData = z.infer<typeof ContactSchema>;
export type AddContactData = z.infer<typeof AddContactSchema>;
export type UpdateContactData = z.infer<typeof UpdateContactSchema>;
