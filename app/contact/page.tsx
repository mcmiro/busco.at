'use client';
import ContactForm from '@/components/organisms/booking-form';
import { UI } from '@/components/index';

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl">
      <UI.Typography type="h1" size="h1" weight="bold">
        Contact
      </UI.Typography>
      <div className="mt-8">
        <UI.Typography type="h3" size="h4" weight="bold">
          Get in Touch for Business Inquiries
        </UI.Typography>
        <UI.Typography>
          {`I'm available full-time and ready to take on new projects. Check out
          the Services tab for a detailed list of what I offer.`}
        </UI.Typography>
        <UI.Typography type="h3" size="h4" weight="bold" className="mt-4">
          What Kind of Projects Am I Interested In?
        </UI.Typography>
        <UI.Typography>
          {`I'm looking for clients with projects that meet the following criteria:`}
        </UI.Typography>
        <ul className="pt-4 font-md list-disc">
          <li className="ml-8">Utilize a modern JavaScript tech stack</li>
          <li className="ml-8">
            Last for 3+ months, with the potential for follow-up projects
          </li>
          <li className="ml-8">
            Are remote or located near Fort Collins, Colorado
          </li>
          <li className="ml-8">Offer competitive hourly rates</li>
        </ul>
        <UI.Typography type="h3" size="h4" weight="bold" className="mt-4">
          Information to Include in Your Inquiry
        </UI.Typography>
        <UI.Typography>
          Please provide the following details in the form below:
        </UI.Typography>
        <ul className="pt-4 font-md list-disc">
          <li className="ml-8">Required hours</li>
          <li className="ml-8">Approximate deadline</li>
          <li className="ml-8">
            Company type (Startup, Midsize, or Large Corporation)
          </li>
          <li className="ml-8">Years in business</li>
          <li className="ml-8">How you heard about me</li>
          <li className="ml-8">Why you chose to reach out</li>
        </ul>
        <UI.Typography
          type="h3"
          size="h4"
          weight="bold"
          className="mt-4"
        >{`Let's Connect!`}</UI.Typography>
        <UI.Typography>I promise to respond within 48 hours.</UI.Typography>
      </div>
      <div className="pt-8">
        <ContactForm />
      </div>
    </div>
  );
}
