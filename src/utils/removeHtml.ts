// regex html tag
const regex = /(<([^>]+)>)/gi

const regexAscii = /[^\x20-\x7E]/gi

export const removeHtml = (text: string) => {
  return removeAscii(text.replace(regex, '').replaceAll('&nbsp;', ' '))
}

export const removeAscii = (text: string) => {
  return text.replace(regexAscii, '')
}
