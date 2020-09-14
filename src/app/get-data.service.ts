import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http:HttpClient) { }

  private task1_url = "/data1"
  private task2_url = "/data2"
  private task3a_url = "/data3a"
  private task3b_url = "/data3b"

  get_task1()
  {
    console.log("Getting task 1");
    return this.http.get(this.task1_url);

  }

  get_task2()
  {
    console.log("Getting task 2");
    return this.http.get(this.task2_url)
  }

  get_task3a()
  {
    console.log("Getting task 3a");
    return this.http.get(this.task3a_url)
  }

  get_task3b()
  {
    console.log("Getting task 3b");
    return this.http.get(this.task3b_url)
  }
}
