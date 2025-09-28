const icecreamshopList = [];

const addIcecreamshop = (icecreamshop) => {
  icecreamshopList.push(icecreamshop);
};

const getAllIcecreamshopsFromService = () => {
  return icecreamshopList;
};
function getIcecreamshopById(id) {
    const icecreamshop = icecreamshopList.find((icecreamshop) => icecreamshop.id == id);
    return icecreamshop;
}

const deleteIcecreamshop = (id) => {
  const targetIcecreamshop = getIcecreamshopById(id);
  const targetIndex = icecreamshopList.indexOf(targetIcecreamshop);
  icecreamshopList.splice(targetIndex, 1);
};

const updateIcecreamshop = (id, body) => {
  const targetIcecreamshop = getIcecreamshopById(id);
  const targetIndex = icecreamshopList.indexOf(targetIcecreamshop);
  const updateIcecreamshop = { ...targetIcecreamshop, ...body };
  todoList.splice(targetIndex, 1, updateIcecreamshop);
  return updateIcecreamshop;
};

module.exports = {
  addIcecreamshop,
  getAllIcecreamshopsFromService,
  deleteIcecreamshop,
  updateIcecreamshop,
  getIcecreamshopById,
};