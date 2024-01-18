import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';
import { ChartComponent } from '../chart/chart.component';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TicketComponent, ChartComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
