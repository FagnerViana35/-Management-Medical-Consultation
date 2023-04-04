import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  apiUrl = 'https://api.elasticemail.com/v2/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(emailData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    const postData = new URLSearchParams();
    postData.append('apikey', '745B92158E18E3201CB5071F93287904BB36FC31546F991222ACCB10CF6F18615C73A475900603ED2E473F7135F0306C');
    postData.append('from', emailData.from);
    postData.append('fromName', emailData.fromName);
    postData.append('to', emailData.to);
    postData.append('subject', emailData.subject);
    postData.append('bodyHtml', emailData.bodyHtml);

    return this.http.post(this.apiUrl, postData.toString(), httpOptions);
  }
}