'use client';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BookingFormValues, formSchema } from '@/lib/booking-form-schema';
import defaultValues from '@/lib/default-booking-form-values';
import { UI } from '../index';
import useBookingForm from '@/hooks/use-booking-form';
import Image from 'next/image';
import { TimePicker } from '../ui/time-picker';
import { DatePicker } from '../ui/date-picker';
import vehicles from '@/constants/vehicles';
import { Textarea } from '../ui/textarea';
import steps from '@/lib/booking-form-steps';
import Autocomplete from '../molecules/autocomplete';

function BookingFormIndex() {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { bookingForm, currentStep, nextStep, handleDate, handleTime } =
    useBookingForm(form);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: BookingFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/send-service-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response) {
        nextStep();
        form.reset();
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentStep === 1) {
      // rendering fix to clear all errors
      setTimeout(() => {
        form.clearErrors(['name', 'email', 'message']);
      }, 0);
    }
  }, [currentStep, form]);

  return (
    <div className="text-foreground w-full bg-white rounded-2xl">
      <div className="pb-2 pt-6 px-6">
        <UI.Typography size="h5" weight={'bold'}>
          {steps[currentStep].title}
        </UI.Typography>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {currentStep === 0 && (
            <div
              className={`md:grid md:grid-cols-2 ${
                bookingForm.returnJourney ? 'xl:grid-cols-4' : 'xl:grid-cols-3'
              } gap-4 pb-2 px-6`}
            >
              <div className="grid grid-cols-2 gap-4">
                <Autocomplete
                  form={form}
                  label="Von"
                  fieldName="from"
                  placeholder="Start"
                />
                <Autocomplete
                  form={form}
                  label="Nach"
                  fieldName="to"
                  placeholder="Ziel"
                />
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-3">
                  <FormField
                    control={form.control}
                    name="vehicle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fahrzeug</FormLabel>
                        <FormControl>
                          <UI.Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <UI.FormControl>
                              <UI.SelectTrigger>
                                <UI.SelectValue
                                  defaultValue={field.value}
                                  placeholder="Fahrzeug"
                                />
                              </UI.SelectTrigger>
                            </UI.FormControl>
                            <UI.SelectContent>
                              {vehicles?.length &&
                                vehicles.map((vehicle) => (
                                  <UI.SelectItem
                                    key={vehicle.name}
                                    value={vehicle.name}
                                    className="relative min-h-10"
                                  >
                                    <div className="absolute top-0 flex gap-4 md:gap-8 items-center justify-between min-h-10">
                                      <div className="text-left leading-4">
                                        {vehicle.name}
                                        <small className="block text-gray-500 w-auto">
                                          {vehicle.description}
                                        </small>
                                      </div>
                                      <Image
                                        src={vehicle.image}
                                        className="block text-gray-500 h-7 w-auto"
                                        alt={vehicle.name}
                                      />
                                    </div>
                                  </UI.SelectItem>
                                ))}
                            </UI.SelectContent>
                          </UI.Select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <div className="md:col-span-1">
                  <FormField
                    control={form.control}
                    name="customers"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Personen</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Personen"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="date"
                  render={() => (
                    <FormItem>
                      <FormLabel>Datum</FormLabel>
                      <FormControl>
                        <DatePicker field="date" onSelect={handleDate} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={() => (
                    <FormItem>
                      <FormLabel>Uhrzeit</FormLabel>
                      <FormControl>
                        <TimePicker field="time" onChange={handleTime} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              {/* Retunr Journey START */}
              {bookingForm.returnJourney && (
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="returnDate"
                    render={() => (
                      <FormItem>
                        <FormLabel>Datum</FormLabel>
                        <FormControl>
                          <DatePicker
                            field="returnDate"
                            onSelect={handleDate}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="returnTime"
                    render={() => (
                      <FormItem>
                        <FormLabel>Uhrzeit</FormLabel>
                        <FormControl>
                          <TimePicker
                            field="returnTime"
                            onChange={handleTime}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              )}
            </div>
          )}
          {currentStep === 1 && (
            <div className="pb-4 px-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Name"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="E-Mail"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anmerkungen</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        value={field.value ?? ''}
                        disabled={loading}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}
          {currentStep === 2 && (
            <div className="flex flex-col gap-4 pb-6 px-6">
              <UI.Typography>
                Wir möchten Ihnen versichern, dass wir Ihr Anliegen ernst nehmen
                und uns bemühen, Ihnen schnellstmöglich zu antworten. Sie können
                mit einer Rückmeldung von uns innerhalb von 48 Stunden rechnen.
              </UI.Typography>
            </div>
          )}
          {/* Retunr Journey END */}
          {currentStep < 2 && (
            <div className="flex items-center justify-between w-full pb-6 px-6">
              <UI.FormField
                control={form.control}
                name="returnJourney"
                render={({ field }) => (
                  <UI.FormItem>
                    <div className="space-y-0.5">
                      <UI.FormLabel className="cursor-pointer">
                        Rückfahrt
                      </UI.FormLabel>
                    </div>
                    <UI.FormControl>
                      <UI.Switch
                        className="!mt-1"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </UI.FormControl>
                  </UI.FormItem>
                )}
              />
              {currentStep === 0 ? (
                <Button disabled={loading} size="lg" onClick={nextStep}>
                  Weiter
                </Button>
              ) : (
                <Button disabled={loading} size="lg" type="submit">
                  Anfrage senden
                </Button>
              )}
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

export default BookingFormIndex;
