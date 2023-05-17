import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  steps = [
    {
      title: 'First Step',
      description: 'Register your account',
      img: 'https://img.freepik.com/vector-gratis/pagina-inicio-sesion-ondas-abstractas_52683-23493.jpg',
    },
    {
      title: 'Second Step',
      description: 'Login to your account',
      img: 'https://media.gettyimages.com/id/1071047018/es/vector/vector-de-interfaz-de-usuario-de-forma-de-inicio-de-sesi%C3%B3n.jpg?s=170667a&w=gi&k=20&c=uyPmBf3K0LGHT3XEqgoJ_xAEQ6tC-aJBeQcne8TwDLg=',
    },
    {
      title: 'Thirty Step',
      description: 'Add your bank account',
      img: 'https://www.relofirm.com/wp-content/uploads/2013/11/panama-bank-account.jpg',
    },
    {
      title: 'Fourty Step',
      description: 'Start sending money',
      img: 'https://dr5dymrsxhdzh.cloudfront.net/blog/images/aaed84576/2018/10/people-sending-and-receiving-money-wirelessly-vector-id628883362.jpg',
    },
    {
      title: 'Fifty Step',
      description: 'Logout from your account',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-wcNnNN-UpJRt_H6yrwuyg2iiRUPEtaNFQ&usqp=CAU',
    },
  ];

  selectedStep: any = this.steps[0];

  ShowStep(step: Object) {
    this.selectedStep = step;
  }

  ngOnInit(): void {
    AOS.init();
  }
}
