export function getLocalStorageItem(key: string) {

  const storageValue = localStorage.getItem(key);

  return storageValue;
}


export function setLocalStorageItem(key: string, value: string | null) {

  const storageValue = getLocalStorageItem(key);

  if (!storageValue && value) {

    localStorage.setItem(key, value);

  }
}