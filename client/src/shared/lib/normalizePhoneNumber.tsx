export const normalizePhoneNumber = (value: string) => {
  let phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length < 2) {
    return (phoneNumber = "+7");
  }
  if (phoneNumber.length > 11) {
    return phoneNumber.slice(0, 11);
  }
  return phoneNumber;
};
