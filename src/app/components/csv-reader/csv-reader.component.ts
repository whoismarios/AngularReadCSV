import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-csv-reader',
  templateUrl: './csv-reader.component.html',
  styleUrls: ['./csv-reader.component.css']
})
export class CsvReaderComponent implements OnInit {
  csvContent: string = '';
  fileUploaded: boolean = false;
  csvData: string[][] = [];
  recentFiles: string[] = [];

  constructor(private localStorage: Storage) { }

  ngOnInit(): void {
    const storedFiles = this.localStorage.getItem('recentFiles');

    if (storedFiles) {
      this.recentFiles = JSON.parse(storedFiles);
      console.log("Localstorage: " + this.recentFiles);
    } else {
      console.log("No Localstorage!");
    }
  }

  deleteLocalStorage() {
    localStorage.clear();
    this.recentFiles = [];
  }

  fileUploadListener($event: any): void {
    const files = $event.srcElement.files;

    if (files.length > 0) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const content = fileReader.result as string;
        const encryptedContent = CryptoJS.SHA256(content).toString(); // encrypt the content using SHA256
        this.csvContent = encryptedContent;
        this.fileUploaded = true;

        const filename = files[0].name;
        this.recentFiles.push(filename);
        this.localStorage.setItem('recentFiles', JSON.stringify(this.recentFiles));
        this.localStorage.setItem('encryptedContent', encryptedContent); // store the encrypted content in local storage
        this.csvData = this.csvToArray(content);
      };

      fileReader.readAsText(files[0]);
    }
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

  getDataFromLocalStorage() {
    const encryptedContent = this.localStorage.getItem('encryptedContent');
    if (encryptedContent) {
      const decryptedContent = CryptoJS.SHA256(encryptedContent).toString(CryptoJS.enc.Utf8);
      // use the decrypted content here
    }
  }
}
