import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, Skills, Experience, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio-angular');
}
