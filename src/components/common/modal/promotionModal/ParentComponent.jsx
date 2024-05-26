import React, { useState } from "react";
import ReplyModal from "./ReplyModal";
import ReplyDeleteModal from "./ReplyDeleteModal";

function ParentComponent() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <ReplyModal
        password={password}
        onPasswordChange={(newPassword) => setPassword(newPassword)}
      />

      <ReplyDeleteModal password={password} />
    </div>
  );
}

export default ParentComponent;
