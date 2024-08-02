import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const {
      to,
      vehicle,
      customers,
      date,
      time,
      returnJourney,
      returnDate,
      returnTime,
    } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_GMAIL_USER,
        pass: process.env.NEXT_GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"busco" <${process.env.NEXT_GMAIL_USER}>`,
      to: ['miro.grujin@hotmail.com', process.env.NEXT_GMAIL_USER!.toString()],
      cc: process.env.GMAIL_USER,
      subject: 'busco.at - Anfrage',
      text: `
				Empfänger Email: ${to}
				Fahrzeug: ${vehicle} 
				Personen: ${customers} 
				Datum: ${date}
				Uhrzeit: ${time}
				Rückfahrt: ${returnJourney ? 'Ja' : 'Nein'} 
				Rückfahrt Datum: ${returnDate}
				Rückfahrt Uhrzeit: ${returnTime}
			`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to send email', details: error },
      { status: 500 }
    );
  }
}
