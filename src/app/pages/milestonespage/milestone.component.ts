import { Component } from '@angular/core';
import { EXTERNAL_URLS } from '../../../util/constants';

@Component({
  selector: 'app-milestone-page',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss']
})
export class MilestonePageComponent {

  readonly sdkLink = EXTERNAL_URLS.JS_SDK;
  readonly blockstartLink = EXTERNAL_URLS.BLOCKSTART_IO;

  readonly headerTitle = 'Development Milestones';
  readonly headerSubTitle = 'Buying Cache will unlock bigger projects that will make blockchain development accessible & affordable for ' +
    'developers and businesses';

  readonly milestones = {
    free: {
      revenue: 'FREE',
      title: 'Cache Javascript SDK',
      description: 'Get access to the CacheSDK which lets you work with the Cache cryptocurrency anywhere Javascript is implemented',
      iconUrl: '../../../../assets/free-cache-js-sdk.svg',
      barColor: 'bar1',
      fontColor: 'free'
    },
    fiveK: {
      revenue: '$500,000',
      title: 'Powerful Mobile Wallets',
      description: 'We are going to build user-friendly and developer-first mobile wallets for Cache. No crazy phrases to remember ' +
      'and no need to worry about losing your secret keys - all completely decentralized.',
      iconUrl: '../../../../assets/500k-wallet.svg',
      barColor: 'bar2',
      fontColor: 'fivek'
    },
    oneMM: {
      revenue: '$1MM',
      title: 'Cacheout & Open Source Devslopes',
      description: 'Cacheout is a platform for developers to answer code questions and get rewarded in cryptocurrency. We will also ' +
      'open source the Devslopes Learn to Code Platform to the world.',
      iconUrl: '../../../../assets/1mm-cacheout-devslopes.svg',
      barColor: 'bar3',
      fontColor: 'oneMM'
    },
    twoMM: {
      revenue: '$2MM',
      title: 'Payment Gateway SDK',
      description: 'We will build an SDK that will allow any business, developer or user to accept Cache with one line of code. The ' +
      'SDK is fully customizable and will have support for Shopify, Wordpress and Web.',
      iconUrl: '../../../../assets/2mm-js-payment-sdk.svg',
      barColor: 'bar4',
      fontColor: 'twoMM'
    },
    fiveMM: {
      revenue: '$5MM',
      title: 'App SDKs & Blockstart B2B',
      description: 'We will create native iOS, Android, and Unity SDKs that provide immersive experiences within the mobile and gaming ' +
      'ecosystems. Blockstart will also launch its business blockchain network and dashboard',
      iconUrl: '../../../../assets/5mm-sdks-b2b.svg',
      barColor: 'bar5',
      fontColor: 'fiveMM'
    },
    sevenMM: {
      revenue: '$7.5MM',
      title: 'Community Developer Incubator Fund',
      description: 'We will allocate 10% of Cache to fund developer projects & startups. They will be voted for by the community ' +
      'through Smart Contracts',
      iconUrl: '../../../../assets/7.5mm-incubator-fund.svg',
      barColor: 'bar6',
      fontColor: 'sevenMM'
    },
    tenMM: {
      revenue: '$10MM',
      title: 'Blockstart Public Blockchain',
      description: 'We will launch Blockstart\'s Public Blockchain. This will give developers with blockchain applications of all ' +
      'stages the ability to get up and running within minutes.',
      iconUrl: '../../../../assets/10mm-blockstart-public.svg',
      barColor: 'bar7',
      fontColor: 'tenMM'
    }
  };

}
