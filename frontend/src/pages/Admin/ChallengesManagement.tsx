import React, { useState, useEffect } from 'react';

const ChallengesManagement: React.FC = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        fetchChallenges();
    }, []);

    const fetchChallenges = async () => {
        try {
            // const response = await getChallenges();
            // setChallenges(response.data);
            console.log('Challenges:', challenges);
        } catch (error) {
            console.error('Error fetching challenges:', error);
        }
    };

    return (
        <div>
            <h1>Challenges Management</h1>
        </div>
    );
};

export default ChallengesManagement;