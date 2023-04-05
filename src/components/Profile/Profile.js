import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection'

function Profile({ cards, onCardClick, onAddNewClick, weatherType, onProfileChangeClick, onLogOut, onCardLike }) {
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
          onCardLike={onCardLike}
        />
      </section>
    </div>
  )
}

export default Profile;