import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public steps = [
    {
      title: 'Registra tu cuenta',
      description:
        'Al registrar tu cuenta, podrás loguearte al instante. Agregaremos tu cuenta de inmediato. ¡Únete ahora y aprovecha todas nuestras funcionalidades!',
      img: '../../../../assets/step1.png',
    },
    {
      title: 'Inicia sesión en tu cuenta',
      description:
        ' Ingresa tus credenciales y disfruta de todas las ventajas que ofrecemos. Organiza tus ideas, establece recordatorios y más. ',
      img: '../../../../assets/step2.png',
    },
    {
      title: 'Crea una nota',
      description:
        ' Una vez que hayas iniciado sesión, podrás agregar notas y mantener tus ideas organizadas.',
      img: 'https://img.freepik.com/vector-gratis/nota-papel-sobre-fondo-memphis_53876-99284.jpg?w=2000',
    },
  ];

  selectedStep: any = this.steps[0];

  constructor() {}

  ShowStep(step: Object) {
    this.selectedStep = step;
  }

  ScrollOnTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  showIconTop: boolean = false;

  ngOnInit(): void {
    const starting: HTMLElement = document.getElementById('starting')!;

    window.addEventListener('scroll', () => {
      if (window.scrollY > starting.offsetTop) {
        this.showIconTop = true;
      } else {
        this.showIconTop = false;
      }
    });
  }
}
