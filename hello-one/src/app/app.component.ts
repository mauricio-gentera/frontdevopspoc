import { Component } from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test devops';
  
  onClickMe() {
    alert( 'Se invoca el servicio backend!' );
	
	$http.get('http://localhost:8080/api/v1').
       then(function(response) {
           alert( response.data );
       });
  }
}
