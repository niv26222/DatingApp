import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';
import { SelectControlValueAccessor } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Injectable({
    providedIn: 'root'
})

export class AlertifyService {

    constructor() {}
       
    confirm(message: string, okCallBack: () => any) {
        alertify.confirm(message, (e: any) => {
            if (e) {
                okCallBack();
            } else {}
        });
    }


    seccess(message: string) {
        alertify.seccess(message);
    }
    error(message: string) {
        alertify.error(message);
    }
    warning(message: string) {
        alertify.warning(message);
    }
    message(message: string) {
        alertify.message(message);
    }


}


