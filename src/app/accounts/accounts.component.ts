import { Component, OnInit } from '@angular/core';
import './Scripts/jQuery-2.1.4.min.js';
import './Scripts/jquery-1.8.3.min.js';

import './Scripts/main.js';
import './Scripts/wow.min.js';
import './Scripts/jquery-1.7.1.min.js';
import './Scripts/Highcharts-4.0.1/exporting.js';
import './Scripts/Highcharts-4.0.1/highcharts.js';
import './Scripts/JQGridReq/jquery.jqGrid.min.js';
import './Scripts/JQGridReq/grid.locale-en.js';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css',
               './AdminLTE.min.css',
              './main.css',
            './responsive.css',
          './font-awesome.min.css',
        './Site.css',
      './ui.jqgrid.css',
    ],
            
})
export class AccountsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
