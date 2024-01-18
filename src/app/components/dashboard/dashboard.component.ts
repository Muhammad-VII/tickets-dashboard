import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TicketComponent, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
