import { PowerIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '@/app/_lib/actions';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='py-1 px-5 bg-secondary-300 hover:bg-secondary-400 transition-colors flex items-center gap-4 font-semibold w-full rounded-full scale-90 hover:scale-100 active:scale-95'>
        {/* <PowerIcon className='h-6 w-6 text-primary-700' /> */}
        Odhlásiť
      </button>
    </form>
  );
}

export default SignOutButton;
