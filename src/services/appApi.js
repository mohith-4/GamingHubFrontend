import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// define a service user a base URL

const appApi = createApi({
    reducerPath: "appApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://gamingbackend2.onrender.com",
    }),

    endpoints: (builder) => ({
        // creating the user
        signupUser: builder.mutation({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
        }),

        // login
        loginUser: builder.mutation({
            query: (user) => ({
                url: "/users/login",
                method: "POST",
                body: user,
            }),
        }),

        // logout

        logoutUser: builder.mutation({
            query: (payload) => ({
                url: "/logout",
                method: "DELETE",
                body: payload,
            }),
        }),
        
         // New mutation endpoint for submitting ratings
         submitRating: builder.mutation({
            query: ({ gameId, rating }) => ({
                url: `/games/${gameId}/rate`, // Adjust the URL based on your backend API
                method: "POST",
                body: { rating }, // Assuming your backend expects the rating in the request body
            }),
        }),


    }),
});


export const { useSignupUserMutation, useLoginUserMutation, useLogoutUserMutation , useSubmitRatingMutation, } = appApi;

export default appApi;
