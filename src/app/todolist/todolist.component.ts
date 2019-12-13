import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
import { Item } from '../types/item.interface';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: [ './todolist.component.css' ],
})
export class TodolistComponent implements OnInit {
  public items: Item[] = [];

  constructor(
    private readonly apiService: ApiService,
    private readonly router: Router,
  ) {}

  private getAllItems (): void {
    this.apiService.getAllItems().subscribe((items: Item[]) => this.items = items);
  }

  public ngOnInit(): void {
    this.getAllItems();
  }

  public removeItem(id): void {
    this.apiService.removeItem(id).subscribe(() => this.getAllItems());
  }

  public editOrCreate(item?: Item): void {
    const itemID: string = item ? item.id : uuid.v4();

    this.router.navigateByUrl(`/item/${itemID}`);
  }

  public changeDoneStatus(item: Item): void {
    this.apiService.updateItemStatus(item.id, !item.isDone).subscribe(() => this.getAllItems());
  }
}
