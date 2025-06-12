import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {

}
