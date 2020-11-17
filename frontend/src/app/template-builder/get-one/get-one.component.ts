import { Component, OnInit } from '@angular/core';
import { field, value } from '../../global.model';
import swal from 'sweetalert2';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TemplateBuilderService } from '../template-builder.service';

@Component({
  selector: 'app-get-one',
  templateUrl: './get-one.component.html',
  styleUrls: ['./get-one.component.css']
})
export class GetOneComponent implements OnInit {

  
  modelFields:Array<field>=[];
  model:any = {};
  templateId : string;
  
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private _templateBuilderService:TemplateBuilderService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.templateId = params.get('id');
      this.getTemplateById();
    });
  }

  getTemplateById(){
    this._templateBuilderService.getById(this.templateId).subscribe(
      data => {
        this.model = data; 
      }
    );
  }

  toggleValue(item){
    item.selected = !item.selected;
  }

}