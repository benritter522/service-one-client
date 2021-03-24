import Map from '../Map';
import ProfileCard from '../ProfileCard';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <ProfileCard
              business_name="Business Name"
              street_address="123 Main Street"
              city="Springfield"
              state="AB"
              zip_code_first5="12345"/>
            <ProfileCard
              business_name="Business Name"
              street_address="123 Main Street"
              city="Springfield"
              state="AB"
              zip_code_first5="12345"/>
            <Map />
        </div>
    );
}

export default Home;
