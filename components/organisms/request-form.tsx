'use client';
import { useState } from 'react';
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
import { RequestFormValues, formSchema } from '@/lib/request-form-schema';
import defaultValues from '@/lib/default-request-form-values';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';
import Link from 'next/link';

function RequestForm() {
  const form = useForm<RequestFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: RequestFormValues) => {
    try {
      setLoading(true);
      const response = await fetch('/api/send-contact', {
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

  return (
    <div className="text-foreground w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="pb-6">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Name" {...field} />
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
                  <FormLabel>Nachricht</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex gap-2 w-full mt-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel className="text-xs font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 !mt-0 cursor-pointer">
                    Ich habe die{' '}
                    <Link
                      href="/datenschutz"
                      className="underline"
                      target="blank"
                    >
                      Datenschutzerklärung
                    </Link>{' '}
                    und die{' '}
                    <Link href="/agb" className="underline" target="blank">
                      AGBs
                    </Link>{' '}
                    gelesen und stimme diesen zu.
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <div className="flex md:justify-end w-full mt-8">
            <Button disabled={loading} size="lg" type="submit">
              Anfrage senden
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default RequestForm;
