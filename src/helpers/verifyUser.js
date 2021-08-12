import axios from "axios";

import findUserByToken from './findUserByToken'
import { USERS_DB_URL } from './constants'

function verifyUser(userdata){
    const result = axios
      .get(USERS_DB_URL)
      .then((response) => {
        const USER = findUserByToken(response.data, userdata.token);
        if (!USER) {
          return false;
        }
        return true;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
    return result
}

export default verifyUser;