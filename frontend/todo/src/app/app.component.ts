import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Tag name in html
  templateUrl: './app.component.html', // Template url
  //template: '<h1>{{title}}<h1>', // This is another way to render the template url
  styleUrls: ['./app.component.css'] // Styling url
  //
})
export class AppComponent {
  title = 'ToDo'; // Mapped to html via interpolation {{data}}
  message = 'a tutorial by in28minutes.'
}
