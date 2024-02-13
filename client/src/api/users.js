import axios from 'axios';

const baseURL = 'http://localhost:3000';

const setHeaders = () => {
    axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('app-token');
}

export const loginUser = async (userObject) => {
    try {
        const response = await axios.post(`${baseURL}/account/login`, {
            username: userObject.username,
            password: userObject.password,
        })
        return response.data.apptoken;
    } catch (err) {
        console.log('error', err.message);
    }
}

export const signupUser = async (userObject) => {
    try {
        if (userObject.username === '' || userObject.password === '') {
            throw new Error('invalid username or password');
        }
        const response = await axios.post(`${baseURL}/account/signup`, {
        username: userObject.username,
        password: userObject.password,
      });
      return response;
    } catch (err) {
        console.log('error', err.message);
    }
};

// export const getVerify = async () => {
//     try {
//         const response = await axios.get(`${baseURL}/account/verify`);
//         if (response.message == 'Successful Authentication') {
//             return True
//         } else {
//             return False
//         }
//     } catch (err) {
//         return err;
//     }
// };

// export const getCurrentUser = async () => {
//     try {
//         const response = await axios.get(`${baseURL}/account/isLogged`);
//         return response.data;
//     } catch (err) {
//         return err;
//     }
// };

export const getProfileById = async (username) => {
    try {
        console.log(username);
        const response = await axios.get(`${baseURL}/account/profile`, {
            params: { username },
        });
        return response.data;
    } catch (err) {
        return err;
    }
};

export const getAchievementsById = async (username) => {
    try {
        const response = await axios.get(`${baseURL}/account/achievements`, {
            params: { username },
        });
        return response.data;
    } catch (err) {
        return err;
    }
};

export const getAllAchievements = async () => {
    try {
        const response = await axios.get(`${baseURL}/account/allAchievements`);
        return response.data;
    } catch (err) {
        return err;
    }
};



export const getLeaderboards = async () => {
    try {
        const response = await axios.get(`${baseURL}/account/leaderboards`);
        return response.data;
    } catch (err) {
        return err;
    }
};

export const getAllUsers = async () => {
    try {
        const response = await axios.get(`${baseURL}/account/users`);
        return response.data;
    } catch (err) {
        return err;
    }
};

export const getAllUsersPoints = async () => {
    try {
        const response = await axios.get(`${baseURL}/account/users`);
        const points = [];
        const { data } = response;
        for (let i = 0; i < data.length; i++) {
            points.push({
                username: data[i].username,
                points: data[i].points,
            });
        }
        return points;
    } catch (err) {
        return err;
    }
};

export const getUserProgress = async (lessonObject) => {
    try {
        setHeaders();
        const { lesson, unit } = lessonObject;
        const username = sessionStorage.getItem('app-token');
        const response = await axios.post(`${baseURL}/account/user-progress`, {
            username,
            lesson, 
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        return err;
    }
};