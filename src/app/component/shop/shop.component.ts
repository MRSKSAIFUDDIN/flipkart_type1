import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public productList : any;
  public pid: (string|null) = "";
  public product: any = {}
  public quantity: number = 1;

  constructor(public router:ActivatedRoute, private api: ApiService) { }

  ngOnInit(): void {
   this.pid = this.router.snapshot.paramMap.get("id");
   this.api.forEach((prod:any)=>{
     if(prod.id == this.pid){
       this.product=prod;
       
     }
   })
  }

}
