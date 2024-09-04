import * as z from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name ist Pflichtfeld' }),
  email: z
    .string()
    .min(1, { message: 'E-Mail ist Pflichtfeld' })
    .email('Ungültiges E-Mail-Format'),
  message: z.string().min(1, { message: 'Nachrichr ist Pflichtfeld' }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'Sie müssen den Bedingungen zustimmen',
  }),
});

export type RequestFormValues = z.infer<typeof formSchema>;
