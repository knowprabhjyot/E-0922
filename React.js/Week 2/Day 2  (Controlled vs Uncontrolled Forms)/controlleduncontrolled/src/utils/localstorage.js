export function fetchDataFromLocalStorage(key) {
  let data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return [];
}

export function setValueInLocalStorage(key, incomingData) {
  let data = fetchDataFromLocalStorage(key);
  data.push(incomingData);
  localStorage.setItem(key, JSON.stringify(data));
}


// Create a custom Hook as well