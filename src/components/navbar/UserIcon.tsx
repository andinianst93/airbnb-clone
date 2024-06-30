import { LuUser2 } from 'react-icons/lu';
import { fetchProfileImage } from '@/utils/actions';
import Image from 'next/image';

async function UserIcon() {
  const profileImage = await fetchProfileImage();
  if(profileImage) {
    return (
      <>
        <Image src={profileImage} alt='profile' width={24} height={24} className='w-6 h-6 bg-primary rounded-full text-white' />
      </>
    )
  
  }
  return (
    <>
      <LuUser2 className='w-6 h-6 bg-primary rounded-full text-white' />
    </>
  )
}
export default UserIcon;