import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Item } from '../types/item.interface';
import { ApiService } from '../_services/api.service';
import { ITEM_FORM_CONFIG } from './item.form-config';
import { FormsContract } from '../forms.contract';

@Component({
  selector: 'app-edit-item',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ],
})
export class ItemComponent implements OnInit {
  public readonly formsContract = FormsContract;
  public form: FormGroup;

  private itemID: string;

  constructor (
    private readonly apiService: ApiService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    public readonly formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group(ITEM_FORM_CONFIG);
  }

  public ngOnInit (): void {
    this.itemID = this.activatedRoute.snapshot.params['itemID'];
    this.apiService.getItemByID(this.itemID).subscribe((item: Item) => {
      if (!item) return;

      this.form.controls[this.formsContract.Item.TEXT].setValue(item.text);
      this.form.controls[this.formsContract.Item.IS_DONE].setValue(item.isDone);
    });
  }

  public submit (): void {
    if (this.form.invalid) return;

    const dto: Item = {
      ...this.form.value,
      id: this.itemID,
    };

    this.apiService.saveItem(dto).subscribe(() => this.router.navigateByUrl('/'));
  }
}
