export const normalizePhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, "");
  if (phoneNumber.length > 11) {
    return phoneNumber.slice(0, 11);
  }
  return phoneNumber;
};
