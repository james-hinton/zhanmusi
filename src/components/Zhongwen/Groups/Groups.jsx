import { useEffect, useState } from "react";

// Utils
import { fetchGroups } from "./GroupsUtils";

const Groups = () => {
  useEffect(() => {
    fetchGroups((1));
  }, []);

  return <>Groups</>;
};

export default Groups;
