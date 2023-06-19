import {Component, Input} from '@angular/core';
import {UserModel} from "../data-service/user.model";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {
  @Input() user: UserModel;
}
