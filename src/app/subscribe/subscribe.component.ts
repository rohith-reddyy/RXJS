import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit, OnDestroy {

  unsubscribe:Subscription;
  secondUnsubscribe:Subscription;
  constructor() { }

  ngOnInit() {
    // this.unsubscribe = this.intervalFunction().subscribe({
    //   next: (data)=>{
    //     console.log(data);
    //   },
    //   error: (error)=>{
    //     console.log(error);
    //   },
    //   complete: ()=>{
    //     console.log("complete");
    //   }
    // })

    // this.unsubscribe.add(this.intervalFunction().subscribe({
    //     next: (data)=>{
    //       console.log(data, 'second');
    //     },
    //     error: (error)=>{
    //       console.log(error);
    //     },
    //     complete: ()=>{
    //       console.log("complete");
    //     }
    //   })) 
  }

  intervalFunction(){
    let intervalObservable = interval(1000);
    return intervalObservable;
  }

  secondintervalFunction(){
    let intervalObservable = interval(1000);
    return intervalObservable;
  }
 
  ngOnDestroy(){
    this.unsubscribe.add(this.secondUnsubscribe);
    this.unsubscribe.remove(this.secondUnsubscribe);
    this.unsubscribe.unsubscribe();
    console.log("subscribe destroyed")
  }

}
