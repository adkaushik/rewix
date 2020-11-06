export const constants = {
  SET_SHOW_MODAL: 'modal/SET_SHOW_MODAL',
};

export const setShowModal = ({ name, value }) => ({
  type: constants.SET_SHOW_MODAL,
  payload: { name, value }
});

export default {
  setShowModal
};
