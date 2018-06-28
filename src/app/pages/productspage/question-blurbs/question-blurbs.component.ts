import { Component } from '@angular/core';

@Component({
  selector: 'app-question-blurbs',
  templateUrl: './question-blurbs.component.html',
  styleUrls: ['./question-blurbs.component.scss']
})
export class QuestionBlurbsComponent {
  readonly blurb1 = [
    {
      iconUrl: '../../../../assets/product-assets/earn-your-way.svg',
      title: 'Earn your way through the ranks',
      description: 'Your rank will increase as you answer more questions, even if you aren’t awarded the bounty. The more engaged you ' +
      'are with the platform the better your opportunities will be.'
    },
    {
      iconUrl: '../../../../assets/product-assets/updates-upvotes.svg',
      title: 'Updates & upvotes!',
      description: 'Languages are always changing, and so answers need updating too. Get rewarded for helping maintain answers, and ' +
      'upvotes to add to your rank score.'
    }
  ];

  readonly blurb2 = [
    {
      iconUrl: '../../../../assets/product-assets/level-field.svg',
      title: 'Fair & level playing field',
      description: 'While some other platforms leave users disappointed or their questions unresolved, our system works to reduce ' +
      'platform inefficiencies, giving your questions (and answers) the best opportunity for exposure to the right developers.'
    },
    {
      iconUrl: '../../../../assets/product-assets/build-expertise.svg',
      title: 'Build your expertise',
      description: 'The more you demonstrate your expertise, the more exposure you will get for being an expert in that field. This may ' +
      'lead to bigger projects & employment opportunities through future features.'
    }
  ];

}
