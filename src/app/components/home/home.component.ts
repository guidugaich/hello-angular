import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  sentence = signal('Angular application')

  greetingMessage = signal('This is a greeting message generated in the home component')

  keyUpHandler(event: KeyboardEvent) {
    console.log('keyup was triggered', event.key);
  }
}
