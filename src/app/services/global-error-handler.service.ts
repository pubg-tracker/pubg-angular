import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

    public errMessage: any;

    constructor() {
    }

    handleError(error: any) {
        console.log(error.message);
        this.errMessage = error.message;
    }

}

