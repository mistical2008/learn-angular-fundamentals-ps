import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      li > a.link--active {
        color: tomato;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    `,
  ],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
