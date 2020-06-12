/**
* Adding items to local storage
*/
function addStorageClick () {
  const key = $('.storeKey').val();
  const keyValue = $('.storeValue').val();
  console.log(`key: ${key}, value: ${keyValue}`);
  window.localStorage.setItem(key, `${keyValue}`);
  $('.storageLength').html(JSON.stringify(window.localStorage));
}

/**
* clearing items from local storage
*/
function clearStorageClick() {
  window.localStorage.clear();
  $('.storageLength').html(JSON.stringify(window.localStorage));
}

/**
* getting a specific key from localstorage
*/
function displayValueClick() {
  const key = $('.storedKey').val();
  if (!key) { return; }
  const valueToDisplay = window.localStorage.getItem(key) || 'Key does not exist';
  $('.displayValue').html(valueToDisplay);
}

/**
* getting nth key from localstorage
*/
function displayKeyClick() {
  const keyNumber = $('.keyNumber').val();
  if (!keyNumber) { return; }
  const valueToDisplay = window.localStorage.key(keyNumber) || 'Key does not exist';
  $('.displayKey').html(valueToDisplay);
}

/**
* Deleting a specific key from localstorage
*/
function deleteKeyClick() {
  const key = $('.keyToDelete').val();
  if (!key) {
    return;
  }
  window.localStorage.removeItem(key);
  $('.storageLength').html(JSON.stringify(window.localStorage));
}

$(document).ready(function () {
  $('.addStorage').click(addStorageClick);
  $('.clearStorage').click(clearStorageClick);
  $('.getValue').click(displayValueClick);
  $('.getKey').click(displayKeyClick);
  $('.deleteKey').click(deleteKeyClick);
  $('.storageLength').html(JSON.stringify(window.localStorage));
});
