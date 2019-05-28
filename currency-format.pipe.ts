import { PipeTransform, Pipe } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';

@Pipe({
  name: 'currencyformat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', symbolDisplay: boolean = true, digits?: string): string {
    if (!value) {
      return '';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency', currency:
        currencyCode
    }).format(value);

  }

}
