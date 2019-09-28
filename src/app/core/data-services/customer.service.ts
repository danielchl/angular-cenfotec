import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, switchMap, timeout } from "rxjs/operators";
import { CONFIG } from "src/app/config";
import { UtilsService } from "../services/utils.service";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  // public customers: any[] = [
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   },
  //   {
  //     fname: "Daniel",
  //     lname: "Chinchilla",
  //     age: "29",
  //     description: "Angular dev"
  //   }
  // ];

  constructor(
    private readonly http: HttpClient,
    private readonly utilsService: UtilsService
  ) {}

  // public getCustomers(): any {
  //   return this.customers;
  // }

  public getCustomers(pagination?: any): Observable<any> {
    if (pagination) {
      pagination = {
        _page: pagination.page,
        _limit: pagination.pageSize
      };
    }

    const params: HttpParams = this.utilsService.generateParams(pagination);

    return this.http
      .get(`${CONFIG.api.basePath}/customers`, { params, observe: "response" })
      .pipe(
        map(response => {
          console.log(response);
          
          return this.utilsService.extractData(response);
        }),
        catchError(this.handleError<any>("getCustomer"))
      );
  }

  /**
   * getCustomer
   */
  public getCustomer(id: number) {
    return this.http
      .get(`${CONFIG.api.basePath}/customers/${id}`)
      .pipe(catchError(this.handleError<any>("getCustomer")));
  }

  public addCustomers(data: any): Observable<any> {
    return this.http
      .post(`${CONFIG.api.basePath}/customers`, data)
      .pipe(catchError(this.handleError<any>("getCustomer")));
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.http
      .delete(`${CONFIG.api.basePath}/customers/${id}`)
      .pipe(catchError(this.handleError<any>("getCustomer")));
  }

  public updateCustomer(id: number, data: any): Observable<any> {
    return this.http
      .patch(`${CONFIG.api.basePath}/customers/${id}`, data)
      .pipe(catchError(this.handleError<any>("getCustomer")));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
