const key = 'userList';
const initUserList = [{
  id: '1001',
  name: 'User 01',
  exp: '6yrs',
  designation: 'ITA',
  skillset: 'React, Redux, ES6',
}, {
  id: '1003',
  name: 'User 03',
  exp: '2yrs',
  designation: 'SE',
  skillset: 'Angular, JAVA',
}];

const initLocalStorage = (list) => {
  localStorage.clear();
  localStorage.setItem(key, JSON.stringify(list));
};

export const getLocalStorage = () => JSON.parse(localStorage.getItem(key));

export const addLocalStorage = (value) => {
  const list = getLocalStorage();
  list.push(value);
  localStorage.setItem(key, JSON.stringify(list));
  return getLocalStorage();
};

export const updateLocalStorage = (value) => {
  let list = getLocalStorage();
  list = list.map((item) => {
    if (value.id === item.id) {
      item = value;
    }
    return item;
  });
  localStorage.setItem(key, JSON.stringify(list));
  return getLocalStorage();
};

export const deleteLocalStorage = (deleteId) => {
  const list = getLocalStorage();
  const listLength = list.length;
  for (let dIndex = 0; dIndex < listLength; dIndex += 1) {
    if (list[dIndex].id === deleteId) {
      list.splice(dIndex, 1);
      break;
    }
  }
  localStorage.setItem(key, JSON.stringify(list));
  return getLocalStorage();
};

initLocalStorage(initUserList);
