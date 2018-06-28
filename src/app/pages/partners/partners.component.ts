import {Component, OnInit} from '@angular/core';
import { EXTERNAL_URLS } from '../../../util/constants';

@Component({
  selector: 'app-partners-page',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})

export class PartnersPageComponent implements OnInit {
  headerTitle = 'Partners & trusted companies';
  headerSubTitle = 'This is a list of partners and trusted companies we’ve worked with - some of which are working to accept Cache immediately';

  partners = {
    time: {
      linkUrl: EXTERNAL_URLS.TIMELINR_URL,
      imgUrl: '../../../../assets/timelinr-logo-light@1.5x.svg',
      desc1: 'Create high-level roadmaps in seconds, that ensure your stakeholders, team, and clients know whats going on.',
      desc2: ''
    },
    simple: {
      linkUrl: EXTERNAL_URLS.SIMPLE_MENTOR_URL,
      imgUrl: '../../../../assets/simple-mentor.jpg',
      desc1: 'Simple Mentor makes the entrance to programming easy and effortless',
      desc2: ''
    },
    pVue: {
      linkUrl: EXTERNAL_URLS.PEARSON_VUE_URL,
      imgUrl: '../../../../assets/pearson-vue.svg',
      desc1: 'More than 450 credential owners across the globe choose Pearson VUE to help develop, manage, deliver and grow their testing programs.',
      desc2: 'We have written and contributed to Pearson Vue’s Ethereum & Blockchain Architecture exams.'
    },
    nem: {
      linkUrl: EXTERNAL_URLS.NEM_OFFICIAL_WEBSITE,
      imgUrl: '../../../../assets/nem-logo.svg',
      desc1: 'NEM’s blockchain platform was designed and coded from the ground up for scale and speed. NEM’s permissioned private blockchain delivers industry-leading transaction rates for internal ledgers.',
      desc2: 'We are working closely with NEM North America to open NEM Hollywood Chapter and other initiatives to foster adoption of blockchain developers.'
    },
    devslopes: {
      linkUrl: EXTERNAL_URLS.DEVSLOPES_URL,
      imgUrl: '../../../../assets/devslopes-logo.svg',
      desc1: 'Devslopes has taught over 275,000 students worldwide how to code, specializing in mobile, web, and blockchain development.',
      desc2: ''
    },
    rupie: {
      linkUrl: EXTERNAL_URLS.RUPIE_URL,
      imgUrl: '../../../../assets/rupie_social.png',
      desc1: 'Instead of hoping your game will succeed, Rupie is your personal liaison: a powerful game development pipeline that improves discovery, maximizes early feedback, and harnesses community participation to increase your team & game title\'s probability of shipping.',
      desc2: ''
    },
    bta: {
      linkUrl: EXTERNAL_URLS.BTA_URL,
      imgUrl: '../../../../assets/bta-png.png',
      desc1: 'Training delivered at your location or classroom - built strategically for corporate blockchain solutions.',
      desc2: 'We have worked extensively with Blockchain Training Alliance to contribute training content, assisted in writing blockchain exams & certifications for Ethereum & Blockchain Architecture. These exams have been distributed worldwide through Pearson Vue.'
    },
    bento: {
      linkUrl: EXTERNAL_URLS.BENTO_URL,
      imgUrl: '../../../../assets/bento_logo.jpg',
      desc1: 'The family of ergonomic accessories designed for the way we work today. Bento turns your desk into an organized, practical and trendy workstation!',
      desc2: ''
    }
  };

  constructor() {
  }

  ngOnInit() {
  }

}
