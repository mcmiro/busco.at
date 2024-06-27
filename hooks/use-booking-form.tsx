import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useEffect } from 'react';
import { FieldValues, useWatch } from 'react-hook-form';
import { format } from 'date-fns';

export const bookingFormAtom = atomWithStorage<FieldValues>('form', {});

const useBookingForm = (form: FieldValues) => {
  const [bookingForm, setBokingForm] = useAtom(bookingFormAtom);

  const { control } = form;

  const watchedValues = useWatch({
    control,
  });

  useEffect(() => {
    setBokingForm(watchedValues);
  }, [watchedValues]);

  const handleDate = (payload: { date: Date; field: string }) => {
    const formattedDate = format(payload.date, 'dd.MM.yyyy');
    form.setValue(payload.field, formattedDate);
    form.trigger(payload.field);
  };

  const handleTime = (payload: { time: string; field: string }) => {
    form.setValue(payload.field, payload.time);
    form.trigger(payload.field);
  };

  return {
    bookingForm,
    handleDate,
    handleTime,
  };
};

export default useBookingForm;
