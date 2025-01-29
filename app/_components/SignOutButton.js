import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
// import { signOutAction } from '@/app/_lib/actions';

function SignOutButton() {
  return (
    <form >
      <button className='py-3 px-5 hover:bg-primary-100  transition-colors flex items-center gap-4 font-semibold w-full'>
        <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
        <span>Odhlásiť</span>
      </button>
    </form>
  );
}

export default SignOutButton;
