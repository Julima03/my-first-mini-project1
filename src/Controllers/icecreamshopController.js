const {
  addIcecreamshop,
  getAllIcecreamshopsFromService,
  deleteIcecreamshop,
  updateIcecreamshop,
  getIcecreamshopById,
} = require("../Services/icecreamshopService");

const createIcecreamshop = (icecreamshop) => {
  const icecreamshopList = getAllIcecreamshopsFromService();
  currentMaxId =
    icecreamshopList.length > 0 ? Math.max(...icecreamshopList.map((icecreamshop) => icecreamshop.id)) : 0;
  nextId = currentMaxId + 1;
  const newIcecreamshop = { ...icecreamshop, id: nextId };
  addIcecreamshop(newIcecreamshop);
  return newIcecreamshop;
};

const getIcecreamshops = () => {
  return getAllIcecreamshopFromService();
};

const removeIcecreamshops = (id) => {
  const targetIcecreamshop = getIcecreamshopById(id);
  if (targetIcecreamshop) {
    deleteIcecreamshop(id);
    return true;
  } else {
    return false;
  }
};

const updateIcecreamshopAction = (id, body) => {
  const targetIcecreamshop = getIcecreamshopById(id);
  if (targetIcecreamshop) {
    const updatedIcecreamshop = updateIcecreamshop(id, body);
    return updatedIcecreamshop;
  } else {
    return undefined;
  }
};

module.exports = {
  createIcecreamshop,
  getIcecreamshops,
  removeIcecreamshops,
  updateIcecreamshopAction,
};