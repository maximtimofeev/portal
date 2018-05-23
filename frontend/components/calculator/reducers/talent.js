export const talentDependencity = (state = [], action) => {
  if (action.type == 'ADD_TALENT_SLAVE_ID') {
    return [
      ...state,
      action.slaveId
    ];
  }
  return state;
}