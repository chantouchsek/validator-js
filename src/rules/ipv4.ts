export function ipv4(value: string | number) {
  if (typeof value != 'string')
    return false

  // regex to check that each octet is valid
  const er = /^[0-9]+$/
  // ipv4 octets are delimited by dot
  const octets = value.split('.')
  // check 1: ipv4 address should contain 4 octets
  if (octets.length !== 4)
    return false

  for (const oct of octets) {
    const element = oct
    // check 2: each octet should be integer bigger than 0
    if (!er.test(element))
      return false

    // check 3: each octet value should be less than 256
    const octetValue = Number.parseInt(element)
    if (octetValue >= 256)
      return false
  }

  // if all checks passed, we know it's valid IPv4 address!
  return true
}
