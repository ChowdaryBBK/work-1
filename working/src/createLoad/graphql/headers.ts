export function getHeader(token) {
  const headers = {
    'Authorization': 'Bearer ' + token + '',
    'Content-Type': 'application/json'
  }
  return headers
}
