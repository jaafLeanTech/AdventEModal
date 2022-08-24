import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { ContainerInfoInterface, ContainerListResponse } from '../models/container.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContainersService {

  constructor(private http: HttpClient) {}

  public getContainersList(query: string): Observable<ContainerListResponse> {
    const APICONTAINER_URL = `${environment.APICONTAINER_URL}/?s=${query}&apikey=${environment.OMDB_APIKEY}`;
    return this.http.get<any>(APICONTAINER_URL).pipe(
      map((data) => {
      const mapContainers = data.Search?.map((element: ContainerInfoInterface)=> {
        return {
          containerId: element.imdbID,
          origin: 'Miami',
          destination: 'New York',
          status: element.Type,
          description: element.Title,
          dimensions: element.Year,
          isBooked: 'false',
          poster: element.Poster
        };
      });
      return mapContainers
    }))
  }
}
