import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MzCollapsibleComponent } from 'ngx-materialize';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

export class MyItems {
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  constructor(_value1: string, _value2: string, _value3: string, _value4: string) {
    this.value1 = _value1;
    this.value2 = _value2;
    this.value3 = _value3;
    this.value4 = _value4;
  }
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @ViewChild('collapsibleCreateTasks')
  collapsibleCreateTasks: MzCollapsibleComponent;
  @ViewChild('collapsibleMyTasks')
  collapsibleMyTasks: MzCollapsibleComponent;

  public dateOfBirth = '2017-08-12';
  public data: any;
  title = '';
  dtInitial = '';
  dtEnd = '';
  description = '';
  array = new Array();
  myItems: MyItems[] = new Array();

  // Other variables
  // IsForUpdate: boolean = false;
  newItem1: any = {};
  newItem2: any = {};
  newItem3: any = {};
  newItem4: any = {};
  // updatedItem;

  public options: Pickadate.DateOptions = {
    clear: 'Limpar', // Clear button text
    close: 'Ok', // Ok button text
    today: 'Hoje', // Today button text
    closeOnClear: true,
    closeOnSelect: false,
    format: 'dddd, dd mmm, yyyy', // Visible date format (defaulted to formatSubmit if provided otherwise 'd mmmm, yyyy')
    formatSubmit: 'yyyy-mm-dd', // Return value format (used to set/get value)
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 90,

    monthsFull: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthsShort: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez'
    ],
    weekdaysFull: [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sabado'
    ],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
  };

  constructor() {}

  ngOnInit() {
    this.data = [
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      },
      {
        title: 'Lorem 1',
        dtInitial: '19/10/2018',
        dtEnd: '20/10/2018',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
      }
    ];
  }

  expandAll() {
    this.collapsibleCreateTasks.close(0);
    this.collapsibleCreateTasks.open(0);
    this.collapsibleMyTasks.close(0);
    this.collapsibleMyTasks.open(0);
  }


  closeAll() {
    this.collapsibleCreateTasks.close(0);
    this.collapsibleMyTasks.close(0);
  }

  addTask() {
    this.array.push(this.title, this.dtInitial, this.dtEnd, this.description);
  }

  AddItem() {
    this.myItems.push(this.newItem1, this.newItem2, this.newItem3, this.newItem4);
    this.newItem1 = {};
    this.newItem2 = {};
    this.newItem3 = {};
    this.newItem4 = {};
    this.collapsibleCreateTasks.close(0);
    this.collapsibleMyTasks.open(0);
  }
}
