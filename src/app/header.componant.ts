import { Component } from '@angular/core';
@Component({
  selector: 'app-header', //which element should be replaced by our componant
  standalone:true, //configuration property , its module-base when its false
  templateUrl: './header.componant.html' , //defines the markeup(html content) that should be displayed by that componant

})
export class HeaderComponant {}
