import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  readonly team = [
    {
      imageURL: '../../../../assets/teamPhotos/Mark_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/spentak/',
      twitter: 'https://twitter.com/markprice_dev',
      name: 'Mark Price',
      description: 'CEO at Devslopes & <br> Blockchain developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Jacob_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/jacob-luetzow-173b9397',
      twitter: 'https://twitter.com/minimal_manimal',
      name: 'Jacob Luetzow',
      description: 'Senior engineer &<br>Blockchain developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Evan_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/evan-leong-20b5aa22',
      twitter: 'https://twitter.com/evanmayo',
      name: 'Evan Leong',
      description: 'Head of Product Design <br>& UX'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Nathan_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/nathan-brewer-0988',
      twitter: null,
      name: 'Nathan Brewer',
      description: 'Desktop applications<br>& NEM developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Caleb_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/calebstultz/',
      twitter: 'https://www.twitter.com/gurucaleb',
      name: 'Caleb Stultz',
      description: 'iOS & SDK developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Jonny_Headshot2.jpg',
      linkIn: 'https://www.linkedin.com/in/jonathan-burgoyne-54aa1335/',
      twitter: 'https://twitter.com/jonathan_ios',
      name: 'Jonny Burgoyne',
      description: 'Android & SDK Developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Jason_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/jbrewer3',
      twitter: null,
      name: 'Jason Brewer',
      description: 'Web & SDK Developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Ben_Headshot.jpg',
      linkIn: 'https://www.linkedin.com/in/ben-kimble/',
      twitter: 'https://twitter.com/benreustorm',
      name: 'Ben Kimble',
      description: 'Blockchain & Unity <br> Developer'
    },
    {
      imageURL: '../../../../assets/teamPhotos/Jack_Headshot2.jpg',
      linkIn: null,
      twitter: null,
      name: 'Jack Davis',
      description: 'Network Admin & <br>Backend Developer'
    }
  ];

}
