import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Email, UserEmail } from '../interfaces/email.interface';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  dadosUser: UserEmail = { 
   serviceID: 'service_5ca2yrg',
   templateID: 'template_tdx9nje',
   publicKey: '4IOlemI1ZtPcc7lrE'
  }

  constructor() {}

  sendEmail(to_name: string, message: string, medico: string, emailSend: string, dia: string, horario: string): Promise<EmailJSResponseStatus> {
    const templateParams = {
      to_name: to_name,
      message: message,
      medico: medico,
      emailSend: emailSend,
      dia: dia,
      horario: horario,
    };
    return emailjs.send(this.dadosUser.serviceID, this.dadosUser.templateID, templateParams, this.dadosUser.publicKey);
  }
}

