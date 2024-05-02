import { UserInfo } from './_components/UserInfo';
import { UserLogout } from './_components/UserLogout';

async function Profile() {
  return (
    <div className="p-5">
      <UserLogout>
        <UserInfo />
      </UserLogout>
    </div>
  );
}

export default Profile;
