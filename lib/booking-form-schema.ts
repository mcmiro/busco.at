import * as z from 'zod';
import getFormData from '@/lib/form-data';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'Name ist Pflichtfeld' }),
  email: z
    .string()
    .min(1, { message: 'E-Mail ist Pflichtfeld' })
    .email('Ungültiges E-Mail-Format'),
  message: z.string().optional(),
  from: z.string().min(1, { message: 'Von ist Pflichtfeld' }),
  to: z.string().min(1, { message: 'Nach ist Pflichtfeld' }),
  vehicle: z.string().min(1, { message: 'Fahrzeug ist Pflichtfeld' }),
  customers: z.string().min(1, { message: 'Personen ist Pflichtfeld' }),
  date: z.string().min(1, { message: 'Datum ist Pflichtfeld' }),
  time: z.string().min(1, { message: 'Uhrzeit ist Pflichtfeld' }),
  returnJourney: z.boolean(),
  returnDate: z
    .string()
    .optional()
    .transform((value) => value)
    .refine(
      (value) => {
        const formData = getFormData();
        if (formData.returnJourney && !value) {
          return false;
        }
        return true;
      },
      { message: 'Datum ist Pflichtfeld' }
    ),
  returnTime: z
    .string()
    .optional()
    .transform((value) => value)
    .refine(
      (value) => {
        const formData = getFormData();
        if (formData.returnJourney && !value) {
          return false;
        }
        return true;
      },
      { message: 'Uhrzeit ist Pflichtfeld' }
    ),
});

export type BookingFormValues = z.infer<typeof formSchema>;
