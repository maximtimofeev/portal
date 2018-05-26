export const talentDependencity = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TALENT_SLAVE_ID':
      let newSlaveId = { id: action.id, slaveId: action.slaveId }
      return state.concat([newSlaveId]);
      break;
    case 'REMOVE_TALENT_SLAVE_ID':
      const slaveId = action.slaveId;
      return state.filter(talent => talent.slaveId !== slaveId);
      break;
    case 'ADD_TALENT_MASTER_ID':
      let newMasterId = { id: action.id, masterId: action.masterId }
      return state.concat([newMasterId]);
      break;
    case 'REMOVE_TALENT_MASTER_ID':
      const masterId = action.masterId;
      return state.filter(talent => talent.masterId !== masterId);
      break;
    default:
      return state || [];
  }
}