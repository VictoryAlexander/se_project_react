import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection'

function Profile({ cards, onCardClick, onAddNewClick, weatherType, onProfileChangeClick, onLogOut }) {
  return (
    <div className='profile'>
      <section className='profile-sidebar'>
        <SideBar
          onProfileChangeClick={onProfileChangeClick}
          onLogOut={onLogOut}
        />
      </section>
      <section className='profile-clothes'>
        <ClothesSection
          sectionData={cards}
          onAddNewClick={onAddNewClick}
          onCardClick={onCardClick}
          weatherType={weatherType}
        />
      </section>
    </div>
  )
}

export default Profile;