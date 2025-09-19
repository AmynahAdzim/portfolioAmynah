import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { ProfileComponent } from './profile/profile';
import { SkillComponent } from './skill/skill';
import { ProjectComponent } from './project/project';
import { ExperienceComponent } from './experience/experience';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    HeaderComponent,
    ProfileComponent,
    SkillComponent,
    ProjectComponent,
    ExperienceComponent,
    FooterComponent
  ]
})
export class AppComponent {}


