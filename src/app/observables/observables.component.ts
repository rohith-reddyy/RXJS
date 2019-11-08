import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, interval, from, Subject } from 'rxjs';
import { map, take, filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {
  display:boolean = true;
  subject = new Subject();
  constructor() { }

  ngOnInit() {
    /* start */
    // console.log('first')
    // let data = this.printHelloWorld.call(this)
    // console.log(data);
    // console.log('end')
    /* end */

    /* start */   
    // console.log('first'); 
    // this.creationOfObservable().subscribe({
    //   next:(data) =>{
    //      console.log(data);
    //   },
    //   error:(error)=>{
    //     console.log(error);
    //   },
    //   complete:() =>{
    //     console.log("complete");
    //   }
    // });
    // console.log('end');
    /* end */

    this.creationUsingFunctions().pipe(
      map((value)=>{
         return value * value
      }), 
      take(100), 
      filter((value)=> value>2),
      takeUntil(this.subject)
    )
    .subscribe({
      next: (data)=>{
        console.log(data, "of observable next");
      },
      error: (error)=>{
        console.log(error, 'of observable error');
      },
      complete: ()=>{
        console.log("of observable complete");
      }
    })

  }

  // printHelloWorld(){
  //   console.log("IN Hello World Function");
  //   return 'Hello World';
  //   // return 'Hello World second time';
  // }
  
  creationOfObservable(){
    let observable = new Observable(observer =>{
      console.log("IN observable Function")
      observer.next("observable");
      console.log("IN observable Function")
      // observer.error('error'); /* when an error is triggered observable automatically gets completed */
      // setTimeout(()=>{
        console.log("IN observable Function");
        observer.complete();
      // })
      // console.log("IN observable Function")
      // observer.next("observable");
    })
    return observable;
  }

  creationUsingFunctions(){
    // let fromObservable = from([1,2,3]);
    // return fromObservable;
    // let ofObservable = of(1,2,3);
    let ofObservable = interval(1000);
    return ofObservable;
  }

  changeValue(){
     this.display = ! this.display
  }

  ngOnDestroy(){
   console.log("destroyed");
   this.subject.next();
   this.subject.complete();
  }

}
