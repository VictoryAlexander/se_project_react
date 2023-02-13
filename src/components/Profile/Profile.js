import './Profile.css';
import SideBar from '../SideBar/SideBar';
import ClothesSection from '../ClothesSection/ClothesSection'

function Profile({ cards, onCardClick, onCardDelete, onAddNewClick, weatherType }) {
  return (
    <div className='profile'>
      <section className='profile-sidebar'>
        <SideBar/>
      </section>
      <section className='profile-clothes'>
        <ClothesSection
          sectionData={cards}
          onAddNewClick={onAddNewClick}
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          weatherType={weatherType}
        />
      </section>
    </div>
  )
}

export default Profile;