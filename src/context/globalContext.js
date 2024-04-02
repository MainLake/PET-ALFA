import { create } from 'zustand';

export const authUserStore = create((setState) => ({
    isAuthenticated: false,
    user: null,
    login: (user) => {
        return Promise.resolve(setState({isAuthenticated: true, user: user}));   
    },
    logout: () => {
        setState({isAuthenticated: false, user: null});
    }
}))

export const loaderData = create((setState) => ({
    loadingData: true,
    loadingDataComplete: () => {
        setState({loadingData: false});
    }
}));