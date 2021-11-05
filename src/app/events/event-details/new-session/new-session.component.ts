import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ISession } from "src/app/events/events-list/shared/event.model";

@Component({
  selector: "app-new-session",
  templateUrl: "./new-session.component.html",
  styles: [
    `
      .error em,
      .error select {
        color: #e05c65;
        float: right;
        padding-left: 10px;
      }
      .error input {
        background-color: #e05c65;
      }
      .error :placeholer {
        color: #ffffff;
      }
      .error ::webkit-input-placeholder {
        color: #ffffff;
      }
      .error ::moz-placeholder {
        color: #ffffff;
      }
      .error :moz-placeholder {
        color: #ffffff;
      }
      .error :ms-input-placeholder {
        color: #ffffff;
      }
    `,
  ],
})
export class NewSessionComponent implements OnInit {
  sessionForm: FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      name: ["", Validators.required],
      presenter: ["", Validators.required],
      duration: ["", Validators.required],
      level: ["", Validators.required],
      abstract: ["", [Validators.required, Validators.maxLength(400)]],
    });
  }

  saveSession(formValues: ISession) {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: [],
    }
    console.log(session);
  }
}
