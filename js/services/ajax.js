const d = document

export const ajaxGet = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-type': 'application/json',
    },
  })
  if (response.ok && response.status === 200) {
    return response.json()
  } else {
    return new Error('Error: ' + response.status)
  }
}

export const ajaxPost = async (url = '', data = '') => {
  const response = await fetch(url, {
    method: 'POST',
    body: data,
  })
  if (response.ok && response.status === 200) {
    return response.json()
  } else {
    return new Error('Error: ' + response.status)
  }
}
