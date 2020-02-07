import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  savePdfBlobAsPdfFile(docBlob, fileName: string): void {
    import("file-saver").then(FileSaver => {
        FileSaver.saveAs(docBlob, fileName + new Date().getTime() + '.pdf');
    });
  }
}
