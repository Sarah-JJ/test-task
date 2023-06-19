import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "./data-service/data.service";
import {UserModel} from "./data-service/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  dataSubscription: Subscription;
  data: UserModel[] = [];
  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataSubscription = this.dataService.get().subscribe(value => {
        this.data = value;
    });
  }

  ngOnDestroy(): void {
      this.dataSubscription?.unsubscribe();
  }

}
