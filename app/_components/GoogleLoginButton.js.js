import { signInAction } from "@/app/_lib/actions";

function GoogleLoginButton() {
    return (
        <form action={signInAction}>
            <button className='flex items-center gap-6 text-lg bg-white rounded-lg shadow-md p-5'>
                <img
                    src='https://authjs.dev/img/providers/google.svg'
                    alt='Google logo'
                    height='24'
                    width='24'
                />
                <span>Pokračuj s Google</span>
            </button>
        </form>
    );
}

export default GoogleLoginButton;
