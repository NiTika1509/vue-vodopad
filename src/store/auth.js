import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { authLogin, authRegister } from "@/api/auth";
import { auth } from "@/main";
// const database = getDatabase(firebase);

export default {
    state: {
        credential:{
            token: localStorage.getItem('token') || null,
            isAdmin: localStorage.getItem('isAdmin') || false,
            userData: JSON.parse(localStorage.getItem('data')) || null,
        }
    },

    getters: {
        isAdmin: (state) => state.credential.isAdmin,
        getUserData: (state) => state.credential.userData
    },

    mutations: {
        setToken(state, token){
          state.credential.token = token;
          localStorage.setItem('token', token);
        },
        isAdmin(state, isAdmin){
            state.credential.isAdmin = isAdmin;
            localStorage.setItem('admin', isAdmin);
        },
        setUserData(state, authData){
            state.credential.userData = authData;
            localStorage.setItem('data', JSON.stringify(authData));
        },
        endTokenLife(state){
          state.credential.token = null;
          localStorage.removeItem('token');
        },
        endUserRoleLife(state){
            state.credential.userRole = null;
            localStorage.removeItem('admin');
        },
        endUserData(state){
            state.credential.userRole = null;
            localStorage.removeItem('data');
        },
    },

    actions: {
        // eslint-disable-next-line no-unused-vars
        async login({dispatch, commit}, {email, password}){
            try {
                await signInWithEmailAndPassword(auth, email, password);
                const uid = await dispatch('getUid');
                const authData = await authLogin(uid)
                commit('setToken',uid);
                commit('isAdmin', authData.admin);
                commit('setUserData', authData);
            }catch (e){
                commit('setError', e.message);
            }
        },
        async logout({commit}){
            await signOut(auth);
            commit('endTokenLife');
            commit('endUserRoleLife');
            commit('endUserData');
            commit('setError','logout');
        },



        // eslint-disable-next-line no-unused-vars
        async register({dispatch, commit}, {name, email, password}){
            try {

                await createUserWithEmailAndPassword(auth, email, password);
                const uid = await dispatch('getUid');
                await authRegister(uid,{
                    name: name,
                    email: email,
                    password: password,
                    admin: false,
                    photoURL: 'https://firebasestorage.googleapis.com/v0/b/vodopad-8df2c.appspot.com/o/default-profile-picture1-768x768.jpg?alt=media&token=e6b87662-ac00-4291-a447-090a9e84f661',
                    notification: 3,

                });

                // await set(ref(database, `/users/${uid}/`),{
                //     name: name,
                //     email: email,
                //     admin: false,
                //     avatar: 'default-profile-picture1-768x768.jpg',
                // });
            }catch (e){
                commit('setError', e.message);
                throw e;
            }
        },
        // Получение USER_ID авторизированного пользователя
        getUid(){
            const user = auth.currentUser;
            return user ? user.uid : null;
        }
    }
}
