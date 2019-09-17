import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, switchMap, timeout } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  public customers: any[] = [
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    },
    {
      fname: "Daniel",
      lname: "Chinchilla",
      age: "29",
      description: "Angular dev"
    }
  ];

  constructor(private readonly http: HttpClient) {}

  // public getCustomers(): any {
  //   return this.customers;
  // }

  public getCustomers(): Observable<any> {
    return this.http.get("http://localhost:3000/customers").pipe(
      map(data => data),
      catchError(this.handleError<any>("getCustomer"))
    );
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
