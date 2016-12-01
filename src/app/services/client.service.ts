import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }              from 'rxjs/Observable';

@Injectable()
export class ClientService {
    // URL to web api
    private clientUrl = 'http://localhost:3000/bsclient/all';

    constructor (private http: Http) {}

    getRow() {
        let headers = new Headers({ 'Content-Type': 'application/xml;' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(this.clientUrl, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}