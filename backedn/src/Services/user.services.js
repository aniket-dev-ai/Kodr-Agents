import userSchema from "../model/user.model";

class _userServices {

    userModel;
    constructor() {
        this.userModel = userSchema;
    }
  async createUser({name,emai,token}) {
     const user = new this.userModel({
        name,
        email,
        token,
      });
      await user.save();
      return user;
    }
}

const userServices = new _userServices();
export default userServices;
