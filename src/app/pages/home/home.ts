import { Component } from '@angular/core';
import { ScriptLoaderService } from '../../serivices/script-loader.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(public scriptLoaderService: ScriptLoaderService) {}

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts(): void {
 
    this.scriptLoaderService.loadScript(
      'assets/libs/datatables/datatables.min.js'
    );
       this.scriptLoaderService.loadScript(
      'assets/libs/apexcharts/apexcharts.min.js'
    );
    // this.scriptLoaderService.loadScript(
    //   'assets/js/dashboard/dashboard.js'
    // );
    // this.scriptLoaderService.loadScript(
    //   'assets/js/plugins/todolist.js'
    // );
    this.scriptLoaderService.loadScript(
      'assets/js/dashboard/sales.js'
    );
    this.scriptLoaderService.loadScript(
      'assets/js/dashboard/activities.js'
    );
    this.scriptLoaderService.loadScript(
      'assets/js/dashboard/finance.js'
    );
    this.scriptLoaderService.loadScript(
      'assets/js/appSettings.js'
    );
 
  }
}
