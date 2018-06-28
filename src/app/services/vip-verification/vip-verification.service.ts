import { Injectable } from '@angular/core';
import * as access from '../../../access-keys.json';

@Injectable()
export class VipVerificationService {

  verifyVipPassword = (pwd: string): boolean => {
    let isVerified = false;
    (<any>access).access_keys.map(key => {
      if ( key.toString() === pwd ) {
        isVerified = true;
      }
    });
    return isVerified;
  }

}
