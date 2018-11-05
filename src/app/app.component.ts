import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KLI315-contacts-app';
  name: string;
  greeting: string;
  greetings: string[];

  constructor() {
    this.name = 'World';
    this.greeting = 'Hello World!';
    this.greetings = [];
  }

  onSubmnitGreeting() {
    const submittedGreeting = 'Hello, ' + this.name + '!';
    this.greetings.push(submittedGreeting);
  }
}
