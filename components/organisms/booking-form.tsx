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
import Dots from '@/public/elements/dots.svg';
import Image from 'next/image';
import { TimePicker } from '../ui/time-picker';
import { DatePicker } from '../ui/date-picker';
import vehicles from '@/constants/vehicles';
import { PriceItemType } from '@/types/PriceItem';
import ScrollTo from '../molecules/scroll-to';
import { RouteType } from '@/types/RouteType';

export type BookingFormProps = {
  priceInfo: { prices: { attributes: PriceItemType }[]; routeInfo: RouteType };
};

function BookingForm({ priceInfo }: BookingFormProps) {
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { handleDate, handleTime } = useBookingForm(form);
  const { bookingForm } = useBookingForm(form);
  const [price, setPrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  //const [success, setSuccess] = useState(false);

  const onSubmit = async (data: BookingFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response) {
        form.reset();
        //setSuccess(true);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrice = () => {
    const selectedVehicle = form.getValues('vehicle');
    const vehiclePrice = priceInfo.prices.find(
      (price: { attributes: PriceItemType }) =>
        selectedVehicle === price.attributes.vehicle
    );

    const priceVehicle = vehiclePrice?.attributes?.pricePerKm || 0;
    setPrice(
      Math.round(
        priceVehicle * priceInfo?.routeInfo?.distanceInKm +
          priceInfo?.routeInfo?.additionalCosts
      )
    );
  };

  useEffect(() => {
    handlePrice();
  }, [form.getValues('vehicle')]);

  return (
    <div className="text-foreground w-full">
      <>
        <div className="bg-white rounded-t-2xl pb-4 py-6 px-6 md:px-10">
          <UI.Typography size="h4" weight={'bold'} className="text-center">
            Preis berechnen und Angebot erstellen
          </UI.Typography>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="flex flex-col gap-4 bg-white rounded-b-lg pb-6 px-6 md:px-10">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="from"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Von</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Start"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="to"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nach</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Ziel"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-8 gap-4">
                <div className="md:col-span-5">
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
                <div className="md:col-span-3">
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
              <div className="grid grid-cols-2 gap-4">
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
            {/* Retunr Journey END */}
            <div className="bg-white rounded-b-2xl rounded-t-lg py-4 px-6 md:px-10 relative">
              <div className="flex justify-between">
                <Image
                  src={Dots.src}
                  className="absolute w-full top-[-1px] left-0 px-2 h-1"
                  width={100}
                  height={3}
                  alt="dots"
                />
                <div className="flex flex-col md:flex-row justify-between gap-2 w-full">
                  <div>
                    {price > 0 && (
                      <UI.Typography
                        type="h4"
                        size={'h4'}
                        weight={'bold'}
                        className="whitespace-nowrap"
                      >
                        Fixpreis: <var className="not-italic">€{price},-</var>
                      </UI.Typography>
                    )}
                  </div>
                  <div className={`flex md:justify-end w-full`}>
                    <Button disabled={loading} size="lg" type="submit">
                      Anfrage senden
                    </Button>
                  </div>
                </div>
              </div>
              <small className="text-gray-400">
                Inklusive aller Gebühren und Nebenkosten.
              </small>
            </div>
          </form>
        </Form>
      </>
      {price > 0 && (
        <ScrollTo
          title={`${priceInfo.routeInfo.from.data.attributes.name} - ${priceInfo.routeInfo.to.data.attributes.name}`}
          price={price}
        />
      )}
      {/*<UI.Typography size="h4">
          {' '}
          Thank you for the request! <br></br>I promise to respond within 48
          hours.
        </UI.Typography>*/}
    </div>
  );
}

export default BookingForm;
