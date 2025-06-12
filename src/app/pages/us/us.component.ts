import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent {

}
