import React, { useState } from 'react';
import TeamCreationPopup from './TeamCreationPopup';
import WorkSubmissionForm from './WorkSubmissionForm';
import '../../style.sass';
import '../../graindashboard/css/graindashboard.css';
import { PageContainer, Title, Button } from './style'
const TeamManagementPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  
    const togglePopup = () => setIsPopupOpen(!isPopupOpen);
  
    return (
      <PageContainer>
        <Title>Team Management</Title>
        <Button onClick={togglePopup}>Create Team</Button>
        {isPopupOpen && <TeamCreationPopup />}
        <WorkSubmissionForm />
      </PageContainer>
    );
  };
  
  export default TeamManagementPage;