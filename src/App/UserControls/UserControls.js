import React from "react";

import exporter from "../../helpers/exporter";

const UserControls = () => (
  <div>
    <button type="button" onClick={exporter}>
      Download
    </button>
  </div>
);

export default UserControls;
