import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {
  csvContent: string = '';
  fileUploaded: boolean = false;
  emailAddresses: string[] = [];
  csvData: string[][] = [];
  pinCodes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  fileUploadListener($event: any): void {
    const files = $event.srcElement.files;

    if (files.length > 0) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const content = fileReader.result as string;
        this.csvContent = content;
        this.fileUploaded = true;

        this.emailAddresses = this.findEmailAddresses(content);
        this.csvData = this.csvToArray(content);
        this.pinCodes = this.findPinCodes(content);
      };

      fileReader.readAsText(files[0]);
    }
  }

  private findEmailAddresses(content: string): string[] {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const matches = content.match(emailRegex);
    return matches || [];
  }

  csvToArray(text: string): string[][] {
    const lines = text.split('\n');
    const headers = lines[0].split(',');
    const data: string[][] = [];

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const obj: { [key: string]: string } = {};
      for (let j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      data.push(Object.values(obj));
    }

    return data;
  }

  private findPinCodes(content: string): string[] {
    const pinRegex = /\b\d{4}\b/g;
    const matches = content.match(pinRegex);
    return matches || [];
  }
}