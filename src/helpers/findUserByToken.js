function findUserByToken(userList, token){
    const exactUser = userList.find((item) => {
      return item.token === token;
    });
    return exactUser;
}

export default findUserByToken;