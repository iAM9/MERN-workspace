import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-role-select',
  templateUrl: './role-select.component.html',
  styleUrls: ['./role-select.component.css']
})
export class RoleSelectComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Administrator', cols: 1, rows: 1 },
          { title: 'Developer', cols: 1, rows: 1 },
          { title: 'Finance', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Administrator', cols: 2, rows: 1 },
        { title: 'Developer', cols: 1, rows: 1 },
        { title: 'Finance', cols: 1, rows: 2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
