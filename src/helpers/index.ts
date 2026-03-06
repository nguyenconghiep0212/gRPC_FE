export const isObjectEmpty = (object: object) => {
  return Object.keys(object).length === 0 && object.constructor === Object
}

export function FilterMapping(filter: object) {
  const send: any = {}
  for (const [key, value] of Object.entries(filter)) {
    if (Array.isArray(value)) {
      if (value.length > 0) {
        send[`${key}`] = value.map((item) => `${item}`)
      }
    } else {
      if (value) {
        send[`${key}`] = [`${value}`]
      }
    }
  }
  return isObjectEmpty(send) ? null : send
}
