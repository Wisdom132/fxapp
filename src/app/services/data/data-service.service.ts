import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private messageSource = new BehaviorSubject("default message");
  constructor() {}
}
