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

export function getInfoObj(selectedPackage) {
  const packageObject = {
    user: selectedPackage.user_name,
    sender: selectedPackage.sender,
    location: selectedPackage.location_name,
    notes: selectedPackage.notes,
    verification: selectedPackage.verification_required === true ? "Yes" : "No",
  };
  return packageObject;
}

export function getState(selectedPackage) {
  console.log(selectedPackage.status);
  let status = "";
  if (selectedPackage.status === "ready-for-pickup") status = "ready";
  else if (selectedPackage.status === "on-the-way" || "order-info-received")
    status = "coming";
  else if (selectedPackage.status === "delivered") status = "delivered";
  return status;
}

export function getMessage(currentState, formattedDate, formattedTime) {
  if (currentState === "coming")
    return `The package is expected to reach on ${formattedDate} ${formattedTime} hours`;
  else if (currentState === "ready")
    return `The package is ready for pick up. Please make sure to collect the package within 7 days.`;
  else if (currentState === "delivered")
    return `The package has been delivered on ${formattedDate}`;
}
