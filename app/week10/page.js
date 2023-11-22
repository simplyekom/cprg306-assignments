"use client";
import React from 'react';
import { useUserAuth } from "./_utils/auth-context";
 
const LandingPage = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleGitHubSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
        }
    };

    const handleFirebaseSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>
                        Welcome, {user.displayName} ({user.email})
                    </p>
                    <div>
                        <button className="text-white bg-pink-500 p-1 rounded-lg m-4" onClick={handleFirebaseSignOut}>Logout</button>
                    </div>
                    <div>
                        <a className="text-white bg-pink-500 p-2 rounded-lg m-4" href="./week8/shopping-list">Go to Shopping List</a>
                    </div>
                </div>
            ) : (
                <div>
                <p>Please log in to continue:</p>
                <button className="text-white bg-pink-500 p-2 rounded-lg m-4" onClick={handleGitHubSignIn}>Login with GitHub</button>
                </div>
            )}
        </div>
    ); 
};

export default LandingPage;