import { Component, OnInit } from '@angular/core';
import { ContainersService } from 'src/app/services/containers.service';
import { ContainerListResponse, ContainerInterface } from '../../models/container.model';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {

  containerList: ContainerInterface[];

  constructor(private containerSvc: ContainersService) {
    this.containerList = [];
  }

  // searchContainer(containerID: string){
  //   this.containerSvc.getContainersList(containerID).subscribe(
  //     (result: ContainerListResponse) => {
  //       console.log('result', result);
  //       if (result.Response) {
  //         this.containerList = result.Search;
  //       }
  //       else {
  //         alert("too many results, write more!")
  //       }
  //     }
  //   )
  // }

  ngOnInit(): void {
  }

  get getContainersList(){
    return;
  }


}
