import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  constructor() { }

  strBase64ToPdfBlob(strBase64: string) {
    let binaryDoc = atob(strBase64);
    let binaryDocLength = binaryDoc.length;
    let arrayBuffer = new ArrayBuffer(binaryDocLength);
    let uInt8Array = new Uint8Array(arrayBuffer);

    for (let i = 0;  i < binaryDocLength;  i++) {
      uInt8Array[i] = binaryDoc.charCodeAt(i);
    }

    let outputBlob = new Blob([uInt8Array], {type: 'application/pdf'});

    return outputBlob;
  }

  strBase64ToPdfUrl(strBase64: string) {
    let pdfBlob = this.strBase64ToPdfBlob(strBase64);
    return this.createUrlFromPdfBlob(pdfBlob);
  }

  createUrlFromPdfBlob(pdfBlob: Blob) {
    return URL.createObjectURL(pdfBlob);
  }
}
