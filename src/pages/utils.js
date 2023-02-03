// Node modules
import dayjs from "dayjs";

export function getDate(selectedPackage) {
  const estimatedDate = selectedPackage.eta.slice(0, 10);
  const formattedDate = dayjs(estimatedDate).format("DD/MMM/YYYY");
  return formattedDate;
}

export function getTime(selectedPackage, content) {
  const estimatedTime = selectedPackage.eta.slice(11, 13);
  const estimatedTimeInHours = +estimatedTime;
  const timeString = `${content.between} ${estimatedTimeInHours - 1}:00 and ${
    estimatedTimeInHours + 1
  }:00`;
  return timeString;
}

export function getInfoObj(selectedPackage, content) {
  const { user, sender, location, notes, verification } = content;
  const packageObject = {
    [user]: selectedPackage.user_name,
    [sender]: selectedPackage.sender,
    [location]: selectedPackage.location_name,
    [notes]: selectedPackage.notes,
    [verification]:
      selectedPackage.verification_required === true ? "Yes" : "No",
  };
  return packageObject;
}

export function getState(selectedPackage) {
  let status = "";
  if (selectedPackage.status === "ready-for-pickup") {
    status = "ready";
  } else if (
    selectedPackage.status === "on-the-way" ||
    selectedPackage.status === "order-info-received"
  ) {
    status = "coming";
  } else if (selectedPackage.status === "delivered") {
    status = "delivered";
  }
  return status;
}

export function getMessage(currentState, selectedPackage, content) {
  const formattedDate = getDate(selectedPackage);
  const formattedTime = getTime(selectedPackage, content);
  if (currentState === "coming") {
    return `${content.messageComing} ${formattedDate} ${formattedTime} ${content.hours}`;
  } else if (currentState === "ready") {
    return `${content.messagePickUp}`;
  } else if (currentState === "delivered") {
    return `${content.messageDelivered} ${formattedDate}`;
  }
}

export function getErrors(phoneNumber) {
  const result = {};
  const phonePattern = /\+\d{2}[ ]?\d{9}\b/;
  if (!phoneNumber) result.phoneNumber = "*Mobile Number is required";
  if (!phoneNumber.trim())
    result.emptyPhoneNumber = "*Mobile number cannot be empty string";
  if (phoneNumber && !phonePattern.test(phoneNumber))
    result.name = "Please enter a valid mobile number";
  return result;
}

export function setMessages(errors) {
  return (
    <div className="alert">
      <ul>
        {Object.keys(errors).map((key) => {
          return <li key={key}>{errors[key]}</li>;
        })}
      </ul>
    </div>
  );
}
