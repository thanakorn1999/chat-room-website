import React from "react";
import { SetName } from "pages/Home/components/SetName";
import { SelectRoom } from "pages/Home/components/SelectRoom";
import { useSelector } from "react-redux";
export function Home() {
  const userName = useSelector((state) => state.user.name);

  return <>{!!userName ? <SelectRoom /> : <SetName />}</>;
}
