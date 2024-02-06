export function formatDate(dateTimeString) {
  const date = new Date(dateTimeString)
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }
  return date.toLocaleDateString(undefined, options)
}

export function formatNumber(number) {
  // Convert number to string and split into array of characters
  const numberString = String(number)
  const chars = numberString.split('')

  // Insert space every three characters from the end
  let formattedNumber = ''
  let counter = 0
  for (let i = chars.length - 1; i >= 0; i--) {
    formattedNumber = chars[i] + formattedNumber
    counter++
    if (counter === 3 && i !== 0) {
      formattedNumber = ' ' + formattedNumber
      counter = 0
    }
  }

  return formattedNumber
}

export function formatPhoneNumber(number) {
  // Check if the number is provided and is a valid number
  if (!number || isNaN(number)) {
    return 'Invalid phone number'
  }

  // Convert the number to a string
  let phoneNumber = number.toString()

  // Format the number as "(23)-543-25-32" (assuming it's a 9-digit number)
  let formattedNumber =
    '(' +
    phoneNumber.substring(0, 2) +
    ')-' +
    phoneNumber.substring(2, 5) +
    '-' +
    phoneNumber.substring(5, 7) +
    '-' +
    phoneNumber.substring(7)

  return formattedNumber
}
