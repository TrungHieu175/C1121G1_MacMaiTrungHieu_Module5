import {Component, OnInit} from '@angular/core';
import {FacilityService} from "../../services/facility.service";

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  facilitys: any = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilitys = this.facilityService.getFacilityList();
  }


}
