import { ISavingUserModel } from '~src/types';
import { HTTPTransport, METHOD_TYPES } from '~src/utils/request';

const userApiInstance = new HTTPTransport('/user');

export default class UserApi {
  public saveUserProfile(model: ISavingUserModel) {
    return userApiInstance.put('/profile', model);
  }

  public saveUserAvatar(form) {
    return userApiInstance.put('/profile/avatar', form, { method: METHOD_TYPES.PUT, withoutContentType: true });
  }
}
