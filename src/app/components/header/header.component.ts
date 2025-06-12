import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    colorYoutube: string = "/iconos/youtubeAzul.png";
    colorFacebook: string = "/iconos/facebookAzul.png";
    colorLinkedin: string = "/iconos/linkedinAzul.png";
    colorInstagram: string = "/iconos/instagramAzul.png";
    colorMenu: string = "/iconos/menuAzul.png";

    rojoYoutube(){
        this.colorYoutube = "/iconos/youtubeRojo.png";
    }

    azulYoutube(){
        this.colorYoutube = "/iconos/youtubeAzul.png";
    }

    rojoFacebook(){
        this.colorFacebook = "/iconos/facebookRojo.png";
    }

    azulFacebook(){
        this.colorFacebook = "/iconos/facebookAzul.png";
    }

    rojoLinkedin(){
        this.colorLinkedin = "/iconos/linkedinRojo.png";
    }

    azulLinkedin(){
        this.colorLinkedin = "/iconos/linkedinAzul.png";
    }

    rojoIG(){
        this.colorInstagram = "/iconos/instagramRojo.png";
    }

    azulIG(){
        this.colorInstagram = "/iconos/instagramAzul.png";
    }

    rojoMenu(){
        this.colorMenu = "/iconos/menuRojo.png";
    }

    azulMenu(){
        this.colorMenu = "/iconos/menuAzul.png";
    }

}
