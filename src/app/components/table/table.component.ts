import { Component } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    SliderModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  activityValues: any;
  tickets: any[] = [
    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },    {
      id: 1000,
      name: 'أحمد محمود',
      ticketNumber: 'C-102',
      ticketPrice: 40,
      cinemas: `سينيما مصر , مول العرب , برج الأطنان , سرايا القبة`,
      persons: 1,
      purshasedCount: 'مرة واحدة',
      ticketPdf: {
        url: '../../../assets/table/dummy.pdf',
        name: 'تذكرة رقم 45.pdf',
        type: 'PDF',
        size: '9mb',
      },
    },
  ]
  onFileChange(e: Event, ticketFile: File) {}
  clear(table: Table) {
    table.clear();
  }
}
