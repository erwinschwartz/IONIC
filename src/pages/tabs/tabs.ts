import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TictactoePage } from '../tictactoe/tictactoe';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TictactoePage;

  constructor() {

  }
}
