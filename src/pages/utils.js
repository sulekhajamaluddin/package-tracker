// Node modules
import dayjs from "dayjs";

export function getDate(selectedPackage) {
  const estimatedDate = selectedPackage.eta.slice(0, 10);
  const formattedDate = dayjs(estimatedDate).format("DD/MMM/YYYY");
  return formattedDate;
}

export function getTime(selectedPackage) {
  const estimatedTime = selectedPackage.eta.slice(11, 13);
  const estimatedTimeInHours = +estimatedTime;
  const timeString = `between ${estimatedTimeInHours - 1}:00 and ${
    estimatedTimeInHours + 1
  }:00`;
  return timeString;
}

export function createPackageObject(selectedPackage) {
  const packageObject = {
    packageID: selectedPackage.parcel_id,
    status: selectedPackage.status,
    user: selectedPackage.user_name,
    sender: selectedPackage.sender,
    location: selectedPackage.location_name,
    notes: selectedPackage.notes,
    verification: selectedPackage.verification_required === true ? "Yes" : "No",
  };
  return packageObject;
}

export function getStatusState(selectedPackage) {
  console.log(selectedPackage.status);
  let status = "";
  if (selectedPackage.status === "ready-for-pickup") status = "ready";
  else if (selectedPackage.status === "on-the-way" || "order-info-received")
    status = "coming";
  else if (selectedPackage.status === "delivered") status = "delivered";
  return status;
}
