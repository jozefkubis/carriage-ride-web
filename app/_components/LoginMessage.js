import Link from "next/link";

function LoginMessage() {
  return (
    <div className='w-full h-screen pt-20 bg-creamy-100 '>
      <p className='text-center text-xl py-12 self-center'>
        Pre vstup do svojho profilu sa potrebujete prihlásiť{' '}
        <Link href='/login' className='underline text-accent-500'>
          tu!
        </Link>
      </p>
    </div>
  );
}

export default LoginMessage;
