import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../types/item.interface';
import { TodoResponseSuccess } from '../types/todo-response-success.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor (
    private readonly http: HttpClient,
  ) {}

  public getItemByID(id: string): Observable<Item> {
    return this.http.get<Item>(`todo/${id}`);
  }

  public getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('todo/list');
  }

  public removeItem (id: string): Observable<void> {
    return this.http.delete<void>(`todo/${id}`);
  }

  public saveItem(item: Item): Observable<TodoResponseSuccess> {
    return this.http.post<TodoResponseSuccess>('todo', item);
  }

  public updateItemStatus(id: string, status: boolean): Observable<TodoResponseSuccess> {
    return this.http.put<TodoResponseSuccess>(`todo/${id}`, { isDone: status });
  }
}
