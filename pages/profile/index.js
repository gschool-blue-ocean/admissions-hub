import React from 'react';
import Header from '../../src/Shared/Header';
import Footer from '../../src/Shared/Footer';
import ProfilePage from '../../src/Profile/Profile';
import styles from '../../styles/Profile.module.css';

function EditProfile() {
  return (
    <div className={styles.profilePage}>
      <Header />
      <ProfilePage />
      <Footer />
    </div>
  );
}
export default EditProfile;
