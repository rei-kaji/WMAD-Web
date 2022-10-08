import { style } from "@mui/system";
import React from "react";

function UserInfo() {
  return (
    <div className="UserInfo">
      <div className="input_group">
        <div className="name_group">
          <input
            type="text"
            placeholder=""
            name="UserName"
            className="userinfo_username"
            required
          />
          <label className="label_name">UserName</label>
        </div>
        <div className="password_group">
          <input
            type="password"
            placeholder=""
            name=""
            className="userinfo_password"
            required
          />
          <label className="label_password">PassWord</label>
        </div>
        <input type="submit" value="Log In" className="userinfo_submit" />
      </div>
    </div>
  );
}

export default UserInfo;
