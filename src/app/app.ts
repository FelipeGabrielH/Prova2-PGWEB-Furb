import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header'
import { Navigator } from './components/navigator/navigator'
import { Footer } from './components/footer/footer'
import { InitialPage } from './components/initial-page/initial-page'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navigator, Footer, InitialPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('provapgweb');
}
