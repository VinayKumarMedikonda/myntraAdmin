export function fetchUserType (context, userType) {
  context.commit('setUserType', userType)
}

export function fetchUserId (context, userId) {
  context.commit('setUserId', userId)
}

export function fetchUserPwd (context, userPwd) {
  context.commit('setUserPwd', userPwd)
}
