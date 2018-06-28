import { Component } from '@angular/core';

@Component({
  selector: 'app-blockstart-dev-tools',
  templateUrl: './blockstart-dev-tools.component.html',
  styleUrls: ['./blockstart-dev-tools.component.scss']
})
export class BlockstartDevToolsComponent {
  devTools1 = [
    {
      iconUrl: '../../../../assets/product-assets/decentralized-id.svg',
      title: 'Decentralized Identity',
      description: 'Identity is an anonymous authentication tool that guarantees a unique user ID, but allows the user to manage their ' +
      'own identity. What this means is your users can sign up (authenticate) and use your platform without you storing their personal ' +
      'information on your servers.'
    },
    {
      iconUrl: '../../../../assets/product-assets/cryptocurrency.svg',
      title: 'Cryptocurrency',
      description: 'Create your own cryptocurrency with just a few lines of code. Or do it from the dashboard with a few clicks.'
    },
    {
      iconUrl: '../../../../assets/product-assets/escrow.svg',
      title: 'Escrow',
      description: 'Create your own trustless escrow systems in your apps or on our dashboard.'
    },
    {
      iconUrl: '../../../../assets/product-assets/marketplace-sdk.svg',
      title: 'Marketplace SDK',
      description: 'Use our marketplace SDK to easily allow users to buy, sell, and transfer cryptocurrency and assets between each ' +
      'other. This includes an optional UI available for iOS, Android, & Unity.'
    },
    {
      iconUrl: '../../../../assets/product-assets/crypto-mail.svg',
      title: 'Crypto Mail',
      description: 'Crypto Mail is a new form of communication that uses unique address hashes to send messages between parties. Crypto ' +
      'Mail allows users to provide whatever identity they feel comfortable providing and users can easily close down an address and ' +
      'create new mail accounts. This easy-to-use SDK allows developers the ability to incorporate Crypto Mail into their applications.'
    },
  ];

  devTools2 = [
    {
      iconUrl: '../../../../assets/product-assets/exchange.svg',
      title: 'Exchange SDK',
      description: 'Is your product and currency gaining traction? Convince an exchange why they should list you, and then simply give ' +
      'them this SDK and your unique cryptocurrency ID.'
    },
    {
      iconUrl: '../../../../assets/product-assets/digital-assets.svg',
      title: 'Digital Assets',
      description: 'Create your own digital assets with just a few lines of code.'
    },
    {
      iconUrl: '../../../../assets/product-assets/user-wallets.svg',
      title: 'User Wallets',
      description: 'End users will need to interact with your currencies and assets. We’ll give you out-of-the-box solutions for user ' +
      'wallets and help you brand them for your products and audience.'
    },
    {
      iconUrl: '../../../../assets/product-assets/kyc-aml.svg',
      title: 'KYC & AML (Know Your Customer & Anti Money Laundering)',
      description: 'Use our easy-to-use SDK to implement KYC and AML directly into your apps. KYC and AML will be a common issue that ' +
      'needs to be solved in the world of digital currencies and assets.'
    },
    {
      iconUrl: '../../../../assets/product-assets/nodes-super-nodes.svg',
      title: 'Nodes & Super Nodes',
      description: 'Businesses can launch a series of high performance Super Nodes. Super Nodes host the REST API and each node can ' +
      'support up to 4000 transactions per second. Standard Nodes come with a cross platform executable that can be downloaded by users ' +
      'of the business to help expand the network.'
    }
  ];

}
