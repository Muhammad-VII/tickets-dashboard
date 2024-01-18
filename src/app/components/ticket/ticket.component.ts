import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [QRCodeModule],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss',
})
export class TicketComponent {
  copyToClipboard() {
    const copyText: HTMLSpanElement = document.querySelector(
      '.ticket_text'
    ) as HTMLSpanElement;
    navigator.clipboard.writeText(copyText.innerText);
    alert('Copied the text: ' + copyText.innerText);
  }
}
